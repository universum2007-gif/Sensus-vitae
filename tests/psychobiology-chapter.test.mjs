import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { psychobiologySpanish } from "../lib/psychobiology-spanish.ts";
import { enParagraphs, enTables } from "../lib/psychobiology-en.ts";
import { nlParagraphs, nlTables } from "../lib/psychobiology-nl.ts";
import { ruParagraphs, ruTables } from "../lib/psychobiology-ru.ts";

const translations = { ru: [ruParagraphs, ruTables], nl: [nlParagraphs, nlTables], en: [enParagraphs, enTables] };

test("the approved chapter and all twelve tables have complete four-language coverage", () => {
  assert.equal(psychobiologySpanish.length, 93);
  assert.equal(psychobiologySpanish.filter(block => block.type === "table").length, 12);
  for (const [lang, [paragraphs, tables]] of Object.entries(translations)) {
    for (const [index, block] of psychobiologySpanish.entries()) {
      if (block.type === "p") {
        assert.ok(paragraphs[index]?.trim(), `${lang}: paragraph ${index}`);
      } else {
        assert.equal(tables[index]?.length, block.rows.length, `${lang}: table ${index} rows`);
        for (const [rowIndex, row] of block.rows.entries()) {
          assert.equal(tables[index][rowIndex].length, row.length, `${lang}: table ${index} row ${rowIndex}`);
          assert.ok(tables[index][rowIndex].every(cell => cell.trim()), `${lang}: table ${index} empty cell`);
        }
      }
    }
  }
});

test("the route, chapter card, full breadcrumb, source link and mobile table wrapper are wired", async () => {
  const read = file => readFile(new URL(file, import.meta.url), "utf8");
  const [route, catalogue, subject, layout, content] = await Promise.all([
    read("../app/[lang]/study/subjects/psychobiology/chapter-1/page.tsx"),
    read("../lib/academic-content.ts"),
    read("../app/[lang]/study/subjects/[slug]/page.tsx"),
    read("../components/study-chapter.tsx"),
    read("../lib/psychobiology-chapter-one-translations.ts"),
  ]);
  assert.match(route, /psychobiologyChapterOneTranslations\[lang\]/);
  assert.match(route, /chaptersLabel=\{chapters\}/);
  assert.match(catalogue, /slug: "psychobiology", categoryIndex: 0, books: \[psychobiologyBook\]/);
  assert.match(catalogue, /study\/subjects\/psychobiology\/chapter-1/);
  assert.match(subject, /"chapters"/);
  assert.match(layout, /chaptersLabel/);
  assert.match(layout, /\.table-wrap \{ overflow-x: auto/);
  assert.match(content, /1dXpKE4Ybc8-bN4X1f10GVZig8YAy1sXt/);
  assert.equal((content.match(/"subject", "history", "behavior", "disciplines", "mechanisms", "method", "experiments", "observation", "glossary"/g) ?? []).length, 1);
});
