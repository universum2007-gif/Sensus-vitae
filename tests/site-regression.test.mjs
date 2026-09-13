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

after(async () => {
  await vite.close();
});

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matches(html, pattern) {
  return html.match(pattern) ?? [];
}

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
