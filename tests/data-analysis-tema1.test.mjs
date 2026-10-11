import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";

const languages = ["es", "ru", "nl", "en"];
const content = Object.fromEntries(await Promise.all(languages.map(async lang =>
  [lang, JSON.parse(await readFile(new URL(`../lib/data-analysis-tema1/${lang}.json`, import.meta.url), "utf8"))])));
const occurrences = (html, regex) => [...html.matchAll(regex)];
const text = html => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const numberTokens = html => text(html).match(/\d+(?:[.,]\d+)?/g)?.map(n => n.replace(",", ".")) ?? [];

test("all languages retain the complete approved teaching structure and solutions", () => {
  for (const lang of languages) {
    const html = content[lang];
    assert.equal(occurrences(html, /<h2\b/g).length, 12, lang);
    assert.equal(occurrences(html, /<table\b/g).length, 15, lang);
    assert.equal(occurrences(html, /<figure\b/g).length, 8, lang);
    assert.equal(occurrences(html, /class="exercise"/g).length, 18, lang);
    assert.equal(occurrences(html, /<details\b/g).length, 26, lang);
    const glossary = html.match(/<table class="glossary">([\s\S]*?)<\/table>/)?.[1];
    assert.ok(glossary, lang);
    const body = glossary.match(/<tbody>([\s\S]*?)<\/tbody>/)[1];
    assert.equal(occurrences(body, /<tr\b/g).length, 46, lang);
    assert.ok(!html.includes("@@fig"), lang);
    assert.ok(!html.includes("BORRADOR"), lang);
    assert.ok(html.includes('id="sources"'), lang);
  }
});

test("every table preserves its rows, cells and numerical data across translations", () => {
  const esTables = occurrences(content.es, /<table\b[^>]*>([\s\S]*?)<\/table>/g).map(m => m[1]);
  for (const lang of languages) {
    const tables = occurrences(content[lang], /<table\b[^>]*>([\s\S]*?)<\/table>/g).map(m => m[1]);
    for (let i = 0; i < esTables.length; i++) {
      assert.equal(occurrences(tables[i], /<tr\b/g).length, occurrences(esTables[i], /<tr\b/g).length, `${lang} table ${i} rows`);
      assert.equal(occurrences(tables[i], /<t[dh]\b/g).length, occurrences(esTables[i], /<t[dh]\b/g).length, `${lang} table ${i} cells`);
      assert.deepEqual(numberTokens(tables[i]), numberTokens(esTables[i]), `${lang} table ${i} numeric values`);
    }
  }
});

test("MathML identities and textbook page pairs remain unchanged", () => {
  const formulas = html => occurrences(html, /<math\b[^>]*>([\s\S]*?)<\/math>/g).map(m => m[1]);
  for (const lang of languages) {
    assert.equal(formulas(content[lang]).length, 4, lang);
    assert.deepEqual(formulas(content[lang]), formulas(content.es), lang);
    const refs = occurrences(content[lang], /<p class="ref">([\s\S]*?)<\/p>/g);
    const esRefs = occurrences(content.es, /<p class="ref">([\s\S]*?)<\/p>/g);
    assert.equal(refs.length, esRefs.length, lang);
    refs.forEach((ref, i) => assert.deepEqual(numberTokens(ref[1]), numberTokens(esRefs[i][1]), `${lang} reference ${i}`));
  }
});

test("all eight localized vector graphs exist and can be opened at full size", async () => {
  for (const lang of languages) {
    for (let i = 1; i <= 8; i++) {
      const filename = `fig${String(i).padStart(2, "0")}.svg`;
      const path = `/study/data-analysis/tema1/${lang}/${filename}`;
      assert.ok(content[lang].includes(`src="${path}"`), `${lang} ${filename}`);
      assert.ok(content[lang].includes(`href="${path}"`), `${lang} full-size graph`);
      await access(new URL(`../public${path}`, import.meta.url));
      const svg = await readFile(new URL(`../public${path}`, import.meta.url), "utf8");
      assert.match(svg, /viewBox="[^"]+"/);
      assert.ok(!svg.includes("<script"));
    }
    const images = occurrences(content[lang], /<img\b[^>]*>/g);
    assert.ok(images.every(m => /alt="[^"]+"/.test(m[0]) && /width="\d+"/.test(m[0]) && /height="\d+"/.test(m[0])), lang);
  }
});

test("graph datasets agree with the taught frequencies, areas, centres and kurtosis conventions", async () => {
  const data = JSON.parse(await readFile(new URL("../lib/data-analysis-tema1/graph-data.json", import.meta.url), "utf8"));
  const sum = values => values.reduce((a, b) => a + b, 0);
  assert.equal(sum(data.errors.frequencies), 12);
  assert.equal(sum(data.textbook.frequencies), 40);
  assert.deepEqual(data.textbook.frequencies.map((_, i) => sum(data.textbook.frequencies.slice(0, i + 1))), data.textbook.cumulative);
  assert.deepEqual(data.unequalClasses.frequencies, [sum(data.textbook.frequencies.slice(0, 2)), data.textbook.frequencies[2], sum(data.textbook.frequencies.slice(3))]);
  data.unequalClasses.frequencies.forEach((frequency, i) => {
    const width = data.unequalClasses.boundaries[i + 1] - data.unequalClasses.boundaries[i];
    assert.equal((frequency / width) * width, frequency);
  });
  assert.deepEqual(data.centreSpread.map(values => sum(values) / values.length), [6, 10, 6]);
  for (const values of Object.values(data.shape)) assert.equal(sum(values), 25);
  assert.deepEqual(data.shape.negative, [...data.shape.positive].reverse());
  for (const model of Object.values(data.kurtosis)) {
    assert.equal(model.centre, 0); assert.equal(model.variance, 1);
    assert.ok(Math.abs(model.excess - (model.kurtosis - 3)) < 1e-12);
  }
});

test("chapter keeps its shared component, stable route and mobile reading treatments", async () => {
  const route = await readFile(new URL("../app/[lang]/study/subjects/data-analysis/chapter-1/page.tsx", import.meta.url), "utf8");
  assert.match(route, /StudyChapter/);
  assert.match(route, /chapterOneTranslations\[lang\]/);
  assert.match(route, /sectionIds=\{dataAnalysisSectionIds\}/);
  assert.match(route, /width: 100%; height: auto/);
  assert.match(route, /@media \(max-width: 639px\)/);
  assert.match(route, /min-height: 44px/);
  for (const lang of languages) {
    const html = content[lang];
    assert.equal(occurrences(html, /class="table-wrap" tabindex="0"/g).length, 15, lang);
    assert.equal(occurrences(html, /<h2 id="/g).length, 12, lang);
  }
});
