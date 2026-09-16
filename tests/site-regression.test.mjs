import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";

import { createServer } from "vite";

import { fetchFromWorker } from "./worker-harness.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const languages = ["ru", "nl", "en", "es"];
const publicSections = [
  ["", "home"],
  ["study", "study"],
  ["library", "library"],
  ["club", "club"],
  ["psychobiology", "psychobiology"],
  ["sapolsky", "sapolsky"],
  ["about", "about"],
  ["contact", "contact"],
  ["privacy", "privacy"],
];

const vite = await createServer({
  appType: "custom",
  configFile: false,
  root,
  resolve: { alias: { "@": root } },
  server: { middlewareMode: true, hmr: false },
});

test("learning destinations preserve localized routes, shared concepts and reading records", async () => {
  const { navigationCopy, homeDestinations, clubDestinations } = await vite.ssrLoadModule("/lib/learning-navigation.ts");
  assert.deepEqual(homeDestinations.map(item => item.key), ["study", "library", "club", "news"]);
  assert.deepEqual(clubDestinations.map(item => item.key), ["books", "authors", "glossary", "discussions", "self"]);
  const { discussionCopy, reflectionSlug } = await vite.ssrLoadModule("/lib/discussion-content.ts");
  const { glossarySequence, getGlossaryTermForLocale } = await vite.ssrLoadModule("/lib/glossary.ts");
  const { sapolskyContent } = await vite.ssrLoadModule("/lib/sapolsky-content.ts");
  for (const language of languages) {
    const pages = {};
    for (const section of ["", "study", "library", "club", "library/news", "library/scientific-news", "study/orientation", "library/books", "club/authors", "club/authors/robert-sapolsky", "club/discussions", "glossary"]) {
      const response = await fetchFromWorker(`/${language}${section ? `/${section}` : ""}`);
      assert.equal(response.status, 200, `${language}/${section}`);
      pages[section] = await response.text();
      assert.match(pages[section], new RegExp(`href="/${language}/contact"`));
      for (const target of languages) assert.ok(pages[section].includes(`href="/${target}${section ? `/${section}` : ""}"`), "language switch preserves route");
    }
    for (const [section, destinations, label] of [["", homeDestinations, navigationCopy[language].map], ["club", clubDestinations, navigationCopy[language].club]]) {
      const nav = pages[section].match(new RegExp(`<nav aria-label="${escapeRegExp(label)}"[^>]*>([\\s\\S]*?)</nav>`))?.[1];
      assert.ok(nav, "destination navigation exists");
      assert.deepEqual([...nav.matchAll(/href="([^"]+)"/g)].map(match => match[1]), destinations.map(item => `/${language}/${item.path}`));
    }
    assert.ok(pages.study.includes("Grado en Psicología — UNED"));
    assert.ok(!pages[""].includes(`href="/${language}/study/orientation"`));
    assert.ok(pages.club.includes(`href="/${language}/study/orientation"`));
    const threadPath = `/${language}/club/discussions/${reflectionSlug}`;
    assert.ok(pages.club.includes(`href="${threadPath}"`));
    const threadResponse = await fetchFromWorker(threadPath);
    assert.equal(threadResponse.status, 200);
    const threadHtml = await threadResponse.text();
    assert.ok(threadHtml.includes(discussionCopy[language].status));
    assert.doesNotMatch(threadHtml, /<form\b|<textarea\b/);
    for (const slug of ["neuron-and-glia", "mean-and-standard-deviation"]) {
      assert.ok(!pages.study.includes(`href="/${language}/articles/${slug}"`));
      assert.ok(pages.library.includes(`href="/${language}/articles/${slug}"`));
    }
    const { academicSubjects } = await vite.ssrLoadModule("/lib/academic-content.ts");
    for (const subject of academicSubjects) {
      const route = `/${language}/study/subjects/${subject.slug}`;
      assert.ok(pages.study.includes(`href="${route}"`));
      const result = await fetchFromWorker(route);
      assert.equal(result.status, 200);
      const body = await result.text();
      assert.ok(body.includes(navigationCopy[language].books));
      assert.ok(body.includes(`href="/${language}/glossary"`));
    }
    assert.ok(pages["library/scientific-news"].includes(`href="/${language}/articles/personality-genetics-nature-2026"`));
    assert.ok(pages["library/books"].includes(`href="/${language}/sapolsky"`));
    assert.ok(pages["club/authors"].includes(`href="/${language}/club/authors/robert-sapolsky"`));
    assert.ok(pages["club/authors/robert-sapolsky"].includes(`href="/${language}/sapolsky"`));
    assert.doesNotMatch(pages["library/books"], /Почему у зебр не бывает инфарктов/);
    assert.equal(sapolskyContent[language].chapters.length, 18);
    assert.equal(matches(pages["club/discussions"], /<details\b/g).length, 18);
    assert.equal(matches(pages.glossary, /aria-expanded="false"/g).length, glossarySequence.length);
    for (const id of glossarySequence) assert.ok(pages.glossary.includes(getGlossaryTermForLocale(id, language).term), `localized concept ${language}:${id}`);
    assert.ok(pages.glossary.includes(navigationCopy[language].glossary));
    assert.ok(pages["study/orientation"].includes(navigationCopy[language].selfNote));
    assert.doesNotMatch(pages["study/orientation"], /<form\b|type="(?:radio|range|number)"/);
  }
  assert.equal((await fetchFromWorker("/en/club/authors/unknown-author")).status, 404);
  assert.equal((await fetchFromWorker("/en/club/discussions/unknown-thread")).status, 404);
});

after(async () => {
  await vite.close();
});

test("Sapolsky separates later-research sources from book summaries and preserves all chapter prose", async () => {
  const { sapolskyContent } = await vite.ssrLoadModule("/lib/sapolsky-content.ts");
  const headings = new Set(["Источники к современному уточнению", "Sources for the modern qualification", "Fuentes para la actualización científica", "Bronnen voor de wetenschappelijke actualisering"]);
  for (const language of languages) {
    const response = await fetchFromWorker(`/${language}/sapolsky`);
    assert.equal(response.status, 200);
    const html = (await response.text()).match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
    const text = html.replace(/<[^>]*>/g, "").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    const affected = [];
    let references = 0;
    for (const chapter of sapolskyContent[language].chapters) {
      assert.ok(text.includes(chapter.title));
      assert.ok(html.includes(`/sapolsky-chapter-${chapter.number}.${chapter.number >= 17 ? "jpeg" : "png"}`));
      let inReferences = false;
      for (const paragraph of chapter.fullText ?? []) {
        if (headings.has(paragraph)) {
          affected.push(chapter.number);
          inReferences = true;
          assert.ok(!text.includes(paragraph));
          continue;
        }
        if (inReferences && paragraph.startsWith("* ") && /https?:/.test(paragraph)) {
          references++;
          const url = paragraph.slice(paragraph.search(/https?:/));
          assert.ok(html.includes(`href="${url.replaceAll("&", "&amp;")}"`));
          const summaries = [...html.matchAll(/<section data-chapter-summary[^>]*>([\s\S]*?)<\/section>/g)].map(match => match[1]).join("");
          assert.ok(!summaries.includes(url));
          continue;
        }
        inReferences = false;
        assert.ok(text.includes(paragraph.replace(/^\* /, "")), `Preserve ${language} chapter ${chapter.number}: ${paragraph.slice(0, 70)}`);
      }
    }
    assert.deepEqual(affected, [5, 6, 7, 9]);
    assert.equal(references, 12);
    assert.equal(matches(html, /data-scientific-context/g).length, 4);
    assert.equal(matches(html, /data-chapter-summary/g).length, 18);
    assert.equal(matches(html, /<summary\b/g).length, 18);
    assert.equal(sapolskyContent[language].chapters.length, 18);
    assert.doesNotMatch(text, /Почему у зебр не бывает инфарктов/);
  }
});
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matches(html, pattern) {
  return html.match(pattern) ?? [];
}

test("library news quiz exposes radio controls and keeps feedback hidden until answered", async () => {
  const response = await fetchFromWorker("/ru/library/news");

  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /type=["']radio["']/i, "single-answer quiz should use radio controls");
  assert.doesNotMatch(html, /aria-live=["']polite["']/i, "feedback should be hidden before the learner answers");
});

test("library news exposes localized glossary headings and key-term buttons", async () => {
  const checks = [
    ["/ru/library/news", "Глоссарий", ["Аллостатическая нагрузка", "Гипоталамо-гипофизарно-надпочечниковая ось", "Глюкокортикоиды"]],
    ["/es/library/news", "Glosario", ["Carga alostática", "Eje hipotálamo-hipófiso-suprarrenal", "Glucocorticoides"]],
    ["/en/library/news", "Glossary", ["Allostatic load", "HPA axis", "Glucocorticoids"]],
    ["/nl/library/news", "Woordenlijst", ["Allostatische belasting", "HPA-as", "Glucocorticoïden"]],
  ];

  for (const [pathname, heading, terms] of checks) {
    const response = await fetchFromWorker(pathname);
    assert.equal(response.status, 200, `${pathname} should resolve`);
    const html = await response.text();
    assert.match(html, new RegExp(escapeRegExp(heading)), `${pathname} should show the localized glossary heading`);
    for (const term of terms) {
      assert.match(html, new RegExp(escapeRegExp(term)), `${pathname} should include the glossary term ${term}`);
    }
  }
});

test("representative routes preserve language and emit one complete metadata set", async () => {
  const { pageMetadataCopy } = await vite.ssrLoadModule("/lib/metadata.ts");

  for (const [section, metadataKey] of publicSections) {
    for (const language of languages) {
      const suffix = section ? `/${section}` : "";
      const pathname = `/${language}${suffix}`;
      const canonical = `https://sensusvitae.club${pathname}`;
      const response = await fetchFromWorker(pathname);

      assert.equal(response.status, 200, `${pathname} should resolve`);
      assert.equal(response.headers.get("location"), null, `${pathname} should not redirect`);
      assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

      const html = await response.text();
      const copy = pageMetadataCopy[metadataKey][language];

      assert.match(html, new RegExp(`<html lang=["']${language}["']`));
      assert.deepEqual(matches(html, /<title>[^<]*<\/title>/g), [
        `<title>${copy.title} · Sensus Vitae</title>`,
      ]);
      assert.equal(matches(html, /<meta[^>]+name=["']description["'][^>]*>/g).length, 1);
      assert.equal(matches(html, /<link[^>]+rel=["']canonical["'][^>]*>/g).length, 1);
      assert.match(
        html,
        new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${escapeRegExp(canonical)}["']`),
      );
      assert.equal(matches(html, /<link[^>]+rel=["']alternate["'][^>]*>/g).length, 5);

      for (const equivalentLanguage of languages) {
        const equivalentPath = `https://sensusvitae.club/${equivalentLanguage}${suffix}`;
        assert.match(
          html,
          new RegExp(
            `<link[^>]+rel=["']alternate["'][^>]+hrefLang=["']${equivalentLanguage}["'][^>]+href=["']${escapeRegExp(equivalentPath)}["']`,
          ),
        );
      }

      assert.equal(matches(html, /<meta[^>]+property=["']og:title["'][^>]*>/g).length, 1);
      assert.equal(matches(html, /<meta[^>]+property=["']og:description["'][^>]*>/g).length, 1);
      assert.equal(matches(html, /<meta[^>]+property=["']og:url["'][^>]*>/g).length, 1);
    }
  }
});

test("metadata helper preserves current URLs and language relationships", async () => {
  const { createPageMetadata, pageMetadataCopy } = await vite.ssrLoadModule("/lib/metadata.ts");

  for (const [section, metadataKey] of publicSections) {
    const titles = languages.map((language) => pageMetadataCopy[metadataKey][language].title);
    assert.ok(titles.every((title) => title.trim()), `${metadataKey} titles should be present in every language`);

    for (const language of languages) {
      const copy = pageMetadataCopy[metadataKey][language];
      const metadata = createPageMetadata({
        lang: language,
        path: section,
        ...copy,
      });
      const suffix = section ? `/${section}` : "";

      assert.equal(metadata.title, copy.title);
      assert.equal(metadata.description, copy.description);
      assert.equal(metadata.alternates.canonical, `https://sensusvitae.club/${language}${suffix}`);
      assert.deepEqual(Object.keys(metadata.alternates.languages).sort(), [
        "en",
        "es",
        "nl",
        "ru",
        "x-default",
      ]);
      assert.equal(metadata.alternates.languages[language], metadata.alternates.canonical);
      assert.equal(metadata.alternates.languages["x-default"], `https://sensusvitae.club/ru${suffix}`);
      assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
    }
  }
});

test("Sapolsky content contains the complete ordered chapter structure in every language", async () => {
  const { sapolskyContent } = await vite.ssrLoadModule("/lib/sapolsky-content.ts");
  const expectedOrder = Array.from({ length: 18 }, (_, index) => index + 1);

  assert.deepEqual(Object.keys(sapolskyContent).sort(), languages.slice().sort());

  for (const language of languages) {
    const chapters = sapolskyContent[language].chapters;
    assert.equal(chapters.length, 18, `${language} should contain exactly 18 chapters`);
    assert.deepEqual(chapters.map((chapter) => chapter.number), expectedOrder);

    for (const chapter of chapters) {
      assert.ok(chapter.title.trim(), `${language} chapter ${chapter.number} needs a title`);
      assert.ok(chapter.summary.trim(), `${language} chapter ${chapter.number} needs a summary`);
      assert.ok(chapter.points.length, `${language} chapter ${chapter.number} needs key points`);
      assert.ok(chapter.points.every((point) => point.trim()), `${language} chapter ${chapter.number} has an empty point`);
      assert.ok(chapter.terms.trim(), `${language} chapter ${chapter.number} needs terms`);
      assert.ok(chapter.question.trim(), `${language} chapter ${chapter.number} needs a question`);
      assert.ok(chapter.fullText?.length, `${language} chapter ${chapter.number} needs full text`);
      assert.ok(chapter.fullText.every((paragraph) => paragraph.trim()), `${language} chapter ${chapter.number} has empty full text`);
    }
  }
});

test("all local image references and Sapolsky chapter assets exist", async () => {
  const sourceRoots = ["app", "components", "lib"];
  const sourceFiles = [];

  async function collect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) await collect(entryPath);
      else if (/\.(?:css|ts|tsx)$/.test(entry.name)) sourceFiles.push(entryPath);
    }
  }

  await Promise.all(sourceRoots.map((directory) => collect(path.join(root, directory))));
  const localAssetReferences = new Set();

  for (const sourceFile of sourceFiles) {
    const source = await readFile(sourceFile, "utf8");
    for (const match of source.matchAll(/["'](\/[^"']+\.(?:png|jpe?g|svg|webp))["']/gi)) {
      localAssetReferences.add(match[1]);
    }
  }

  assert.ok(localAssetReferences.size > 0, "the site should reference local assets");
  for (const assetPath of localAssetReferences) {
    await access(path.join(root, "public", assetPath.slice(1)));
  }

  const sapolskyPage = await readFile(path.join(root, "app/[lang]/sapolsky/page.tsx"), "utf8");
  for (let chapter = 1; chapter <= 18; chapter += 1) {
    const extension = chapter <= 16 ? "png" : "jpeg";
    const assetPath = `/sapolsky-chapter-${chapter}.${extension}`;
    await access(path.join(root, "public", assetPath.slice(1)));
    assert.match(
      sapolskyPage,
      new RegExp(`chapter\\.number === ${chapter}[^]*?src=["']${escapeRegExp(assetPath)}["']`),
      `chapter ${chapter} should reference ${assetPath}`,
    );
  }
});

test("contact form keeps browser validation and rejects invalid submissions without external calls", async () => {
  const pageResponse = await fetchFromWorker("/en/contact");
  assert.equal(pageResponse.status, 200);
  const html = await pageResponse.text();
  const controls = matches(html, /<(?:input|textarea)[^>]*>/g);

  for (const field of ["name", "email", "topic", "message"]) {
    const control = controls.find((tag) => new RegExp(`name=["']${field}["']`).test(tag));
    assert.ok(control, `${field} should be rendered`);
    assert.match(control, /\brequired(?:="")?/);
  }

  const email = controls.find((tag) => /name=["']email["']/.test(tag));
  assert.match(email, /type=["']email["']/);
  const privacyCheckbox = controls.find((tag) => /type=["']checkbox["']/.test(tag));
  assert.ok(privacyCheckbox, "privacy checkbox should be rendered");
  assert.match(privacyCheckbox, /\brequired(?:="")?/);

  const basePayload = {
    name: "Test visitor",
    email: "visitor@example.com",
    topic: "Test topic",
    message: "Test message",
    language: "en",
  };

  for (const requiredField of ["name", "email", "topic", "message"]) {
    const response = await fetchFromWorker("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...basePayload, [requiredField]: "" }),
    });
    assert.equal(response.status, 400, `${requiredField} should be required by the API`);
  }

  const invalidEmail = await fetchFromWorker("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...basePayload, email: "not-an-email" }),
  });
  assert.equal(invalidEmail.status, 400);

  const oversizedMessage = await fetchFromWorker("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...basePayload, message: "x".repeat(5001) }),
  });
  assert.equal(oversizedMessage.status, 400);
});

test("public posts API returns only the approved Privacy Stage 1 fields", async () => {
  const statements = [];
  const approvedValues = [
    7,
    "public-test-post",
    "en",
    "psychobiology",
    "Public title",
    "Public summary",
    "Public body",
    "published",
    "2026-09-12T00:00:00.000Z",
    "2026-09-12T00:00:00.000Z",
  ];
  const statement = {
    bind() {
      return this;
    },
    async raw() {
      return [approvedValues];
    },
  };
  const database = {
    prepare(sql) {
      statements.push(sql);
      return statement;
    },
  };

  const response = await fetchFromWorker("/api/posts", {}, { DB: database });
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.posts.length, 1);
  assert.deepEqual(Object.keys(body.posts[0]).sort(), [
    "body",
    "category",
    "createdAt",
    "id",
    "language",
    "slug",
    "status",
    "summary",
    "title",
    "updatedAt",
  ]);
  assert.ok(statements.length > 0);
  assert.doesNotMatch(statements.join("\n"), /author_email|secret|token|password/i);
  assert.doesNotMatch(JSON.stringify(body), /authorEmail|author_email|secret|token|password/i);
});

test("shared navigation and footer preserve localized Study and Contact routes", async () => {
  const labels = {
    ru: ["Главная", "Учёба", "Библиотека", "Клуб", "Обо мне", "Контакты", "Сайт находится в разработке"],
    nl: ["Start", "Studie", "Bibliotheek", "Club", "Over mij", "Contact", "De website is in ontwikkeling"],
    en: ["Home", "Study", "Library", "Club", "About", "Contact", "The website is being developed"],
    es: ["Inicio", "Estudio", "Biblioteca", "Club", "Sobre mí", "Contacto", "El sitio está en desarrollo"],
  };
  for (const language of languages) {
    for (const section of ["", "study", "library", "club", "sapolsky", "about", "contact"]) {
      const response = await fetchFromWorker(`/${language}${section ? `/${section}` : ""}`);
      assert.equal(response.status, 200);
      const html = await response.text();
      const header = html.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0];
      const footer = html.match(/<footer\b[^>]*>[\s\S]*?<\/footer>/)?.[0];
      assert.ok(header);
      assert.ok(footer);
      assert.equal(matches(html, /<footer\b/g).length, 1);
      const navs = header.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/g);
      assert.equal(navs.length, 2);
      for (const nav of navs) {
        const links = [...nav.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([^<]*)<\/a>/g)];
        assert.deepEqual(links.map((link) => link[1]), ["", "/study", "/library", "/club", "/about"].map((suffix) => `/${language}${suffix}`));
        assert.deepEqual(links.map((link) => link[2]), labels[language].slice(0, 5));
      }
      assert.doesNotMatch(navs.join(""), new RegExp(`href="/${language}/contact"`));
      assert.match(footer, new RegExp(`href="/${language}/contact"`));
      assert.ok(footer.includes(labels[language][5]));
      assert.ok(footer.includes(labels[language][6]));
      assert.ok(footer.includes("© Sensus Vitae · 2026"));
      for (const targetLanguage of languages) {
        assert.ok(header.includes(`href="/${targetLanguage}${section ? `/${section}` : ""}"`));
      }
    }
  }
});

 test("news relationships exclude demonstration cases and use explicit source identifiers", async () => {
  const { learningCasesForNews, scientificNews } = await vite.ssrLoadModule("/lib/library-architecture.ts");
  const { educationalNewsDemoList } = await vite.ssrLoadModule("/lib/educational-news.ts");
  const id = scientificNews[0].id;
  assert.deepEqual(learningCasesForNews(id, educationalNewsDemoList), []);
  const fixtures = [{ id: "demo", isDemo: true, scientificNewsId: id }, { id: "linked", isDemo: false, scientificNewsId: id }, { id: "other", isDemo: false, scientificNewsId: "other" }];
  assert.deepEqual(learningCasesForNews(id, fixtures).map(item => item.id), ["linked"]);
  assert.equal((await fetchFromWorker("/en/study/subjects/unknown-subject")).status, 404);
});

test("reader polish preserves sources, answer labels, availability and section ownership", async () => {
  for (const language of languages) {
    const news = await (await fetchFromWorker("/" + language + "/library/news")).text();
    assert.doesNotMatch(news, /10\.0000\/demo-news\.none|Demo scientific source placeholder|href="#demo-source"/);
    assert.match(news, /data-content-status="preview"/);
    const radios = [...news.matchAll(/<input\b[^>]*type="radio"[^>]*>/g)].map(match => match[0]);
    assert.ok(radios.length > 0);
    for (const radio of radios) assert.doesNotMatch(radio, /aria-label=/);
    assert.match(news, /<fieldset/);
    assert.match(news, /<legend/);
    assert.match(news, /href="#main-content"/);
    assert.match(news, /id="main-content"[^>]*tabIndex="-1"/i);
    const header = news.match(/<header\b[\s\S]*?<\/header>/)[0];
    assert.doesNotMatch(header, /studio\?lang/);
    assert.match(header, /aria-label="Nederlands"/);
    const footer = news.match(/<footer\b[\s\S]*?<\/footer>/)[0];
    assert.ok(footer.includes('href="/' + language + '/privacy"'));
    assert.ok(footer.includes('href="/studio?lang=' + language + '"'));
    const orientation = await (await fetchFromWorker("/" + language + "/study/orientation")).text();
    const activeLinks = [...orientation.matchAll(/<a\b[^>]*aria-current="page"[^>]*>/g)].map(match => match[0]);
    assert.equal(activeLinks.length, 2);
    for (const link of activeLinks) assert.ok(link.includes('href="/' + language + '/club"'));
    const study = await (await fetchFromWorker("/" + language + "/study")).text();
    assert.equal(matches(study, /data-content-status="preparing"/g).length, 6);
    const glossary = await (await fetchFromWorker("/" + language + "/glossary")).text();
    assert.match(glossary, /type="search"/);
    assert.match(glossary, /aria-pressed="true"/);
    assert.doesNotMatch(glossary, /role="dialog"/);
    const sapolsky = await (await fetchFromWorker("/" + language + "/sapolsky")).text();
    const { sapolskyContent } = await vite.ssrLoadModule("/lib/sapolsky-content.ts");
    const summaries = [...sapolsky.matchAll(/<summary\b[^>]*>([\s\S]*?)<\/summary>/g)];
    assert.equal(summaries.length, 18);
    for (let i = 0; i < summaries.length; i++) {
      assert.ok(!summaries[i][1].includes(sapolskyContent[language].chapters[i].summary));
    }
  }
});

test("editorial catalogue uses one destination per card and preserves book reading actions", async () => {
  const { catalogueActions } = await vite.ssrLoadModule("/lib/catalogue-actions.ts");
  for (const language of languages) {
    for (const section of ["", "study", "library", "club", "library/books", "library/news"]) {
      const response = await fetchFromWorker("/" + language + (section ? "/" + section : ""));
      assert.equal(response.status, 200);
      const html = await response.text();
      for (const anchor of html.matchAll(/<a\b[^>]*href="\/[^"]*"[^>]*>([\s\S]*?)<\/a>/g)) {
        assert.doesNotMatch(anchor[1], /[→↗←]/, "internal links have no decorative arrows");
        assert.doesNotMatch(anchor[1], /<a\b/, "single-destination cards have no nested links");
      }
      if (section === "library/books") {
        assert.equal([...html.matchAll(new RegExp('href="/' + language + '/sapolsky"', "g"))].length, 1);
        assert.ok(html.includes(catalogueActions[language].chapters));
      }
      if (section === "study") {
        assert.equal([...html.matchAll(/data-content-status="preparing"/g)].length, 6);
        assert.ok(html.includes(catalogueActions[language].planned));
      }
    }
  }
});

test("Sapolsky author profile separates available reading from planned books in every language", async () => {
  const { sapolskyProfile, profileBooks, profileBiographySources } = await vite.ssrLoadModule("/lib/sapolsky-profile.ts");
  for (const language of languages) {
    const response = await fetchFromWorker("/" + language + "/club/authors/robert-sapolsky");
    assert.equal(response.status, 200);
    const html = await response.text();
    const copy = sapolskyProfile[language];
    assert.ok(html.includes(copy.lead));
    assert.ok(html.includes(copy.editorialLabel));
    assert.ok(html.includes(copy.journey));
    assert.ok(html.includes(copy.descriptions[4]), "qualified free-will position is present");
    assert.ok(html.includes('src="/robert-sapolsky.jpg"'));
    assert.doesNotMatch(html, /data-chapter-summary/, "chapter content is not duplicated");
    const cards = [...html.matchAll(/<article\b[^>]*data-catalogue-card="book"[^>]*>([\s\S]*?)<\/article>/g)].map(match => match[1]);
    assert.equal(cards.length, 5);
    assert.equal(cards.filter(card => card.includes('data-content-status="available"')).length, 2);
    assert.equal(cards.filter(card => card.includes('data-content-status="preparing"')).length, 3);
    for (const card of cards.slice(2)) assert.doesNotMatch(card, /<a\b/, "planned books do not promise available reading");
    assert.ok(cards[0].includes('href="/' + language + '/sapolsky"'));
    assert.ok(html.includes(copy.readAll));
    assert.ok(html.includes('href="/' + language + '/club/discussions"'));
    for (const source of [...profileBiographySources, ...profileBooks.map(book => book.source)]) assert.ok(html.includes('href="' + source + '"'));
  }
});

test("new Sapolsky project exposes only reviewed chapter one with localized learning tools", async () => {
 const { testosteroneCopy, testosteroneChapters, testosteroneBookPath, testosteroneTerms, testosteroneSources } = await vite.ssrLoadModule("/lib/testosterone-content.ts");
 const { glossarySequence, getGlossaryTermForLocale } = await vite.ssrLoadModule("/lib/glossary.ts");
 assert.equal(testosteroneChapters.length, 17);
 assert.deepEqual(testosteroneChapters.filter(item => item.available).map(item => item.number), [1]);
 assert.equal(testosteroneTerms.length, 13);
 for (const lang of languages) {
  const c = testosteroneCopy[lang];
  const response = await fetchFromWorker("/" + lang + "/" + testosteroneBookPath);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes(c.title));
  assert.ok(html.includes(c.chapterTitle));
  assert.equal(matches(html, /data-reading-chapter=/g).length, 17);
  assert.equal(matches(html, /data-content-status="available"/g).length, 1);
  assert.equal(matches(html, /data-content-status="preparing"/g).length, 16);
  assert.equal(matches(html, /<article[^>]*data-testosterone-chapter/g).length, 1);
  assert.equal(matches(html, /<fieldset/g).length, 6);
  assert.equal(matches(html, /type="radio"/g).length, 18);
  assert.doesNotMatch(html, /drive\.google|dropbox|source\.pdf|localStorage|sessionStorage/);
  assert.ok(html.includes(c.beforeQuestion));
  assert.ok(html.includes(c.afterQuestion));
  assert.ok(html.includes(c.verification));
  assert.equal(c.sections.length, 9);
  for (const section of c.sections) assert.ok(html.includes('id="chapter-1-' + section.id + '"'));
  for (const source of testosteroneSources) assert.ok(html.includes('href="' + source.href + '"'));
  for (const id of testosteroneTerms) {
   assert.ok(glossarySequence.includes(id));
   const term = getGlossaryTermForLocale(id,lang);
   assert.ok(term.term && term.shortDefinition);
   assert.ok(html.includes(term.term));
  }
  for (const q of c.questions) {
   assert.equal(new Set(q.choices).size,q.choices.length);
   assert.ok(q.correctIndex >= 0 && q.correctIndex < q.choices.length);
   assert.ok(q.explanation.length > 30);
  }
  for (const route of ["library/books","club/authors/robert-sapolsky"]) {
   const listing = await (await fetchFromWorker("/" + lang + "/" + route)).text();
   assert.ok(listing.includes('href="/' + lang + '/' + testosteroneBookPath + '"'));
   assert.ok(listing.includes('href="/' + lang + '/sapolsky"'));
  }
  for (const other of languages) assert.ok(html.includes('href="/' + other + '/' + testosteroneBookPath + '"'));
 }
});
