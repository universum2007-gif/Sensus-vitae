import { psychobiologySpanish } from "./psychobiology-spanish";
import { enParagraphs, enTables } from "./psychobiology-en";
import { nlParagraphs, nlTables } from "./psychobiology-nl";
import { ruParagraphs, ruTables } from "./psychobiology-ru";
import type { Language } from "./site-content";

const sourcePdf = "https://drive.google.com/file/d/1dXpKE4Ybc8-bN4X1f10GVZig8YAy1sXt/view";
const mainHeadings = new Set([5, 14, 20, 34, 44, 54, 65, 78, 88]);
export const psychobiologySectionIds = ["subject", "history", "behavior", "disciplines", "mechanisms", "method", "experiments", "observation", "glossary"] as const;

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderTable(rows: readonly (readonly string[])[]) {
  const head = rows[0];
  return '<div class="table-wrap"><table><thead><tr>' +
    head.map(cell => '<th scope="col">' + escapeHtml(cell) + '</th>').join("") +
    '</tr></thead><tbody>' +
    rows.slice(1).map(row => '<tr>' + row.map(cell => '<td>' + escapeHtml(cell).replace(/\n|\u000b/g, "<br/>") + '</td>').join("") + '</tr>').join("") +
    '</tbody></table></div>';
}

function build(lang: Language) {
  const paragraphs: Record<number, string> = lang === "es" ? {} : { en: enParagraphs, ru: ruParagraphs, nl: nlParagraphs }[lang];
  const tables: Record<number, string[][]> = lang === "es" ? {} : { en: enTables, ru: ruTables, nl: nlTables }[lang];
  const html = psychobiologySpanish.map((block, index) => {
    if (block.type === "table") {
      const rows = lang === "es" ? block.rows : tables[index];
      if (!rows || rows.length !== block.rows.length || rows.some((row, j) => row.length !== block.rows[j].length)) {
        throw new Error(`Missing or incomplete ${lang} psychobiology table ${index}`);
      }
      return renderTable(rows);
    }
    const content = lang === "es" ? block.text : paragraphs[index];
    if (!content) throw new Error(`Missing ${lang} psychobiology paragraph ${index}`);
    if (mainHeadings.has(index)) return '<h2>' + escapeHtml(content) + '</h2>';
    if (block.style === "HEADING_1" || block.style === "HEADING_2") return '<h3>' + escapeHtml(content) + '</h3>';
    if (index === 92) {
      const label = lang === "es" ? "Abrir el PDF de estudio" : lang === "ru" ? "Открыть учебный PDF" : lang === "nl" ? "Open de studie-pdf" : "Open the study PDF";
      if (!content.endsWith(label)) throw new Error(`Missing PDF link label in ${lang}`);
      return '<p>' + escapeHtml(content.slice(0, -label.length)) + '<a href="' + sourcePdf + '">' + escapeHtml(label) + '</a></p>';
    }
    return '<p>' + escapeHtml(content) + '</p>';
  }).join("");
  return {
    title: lang === "es" ? "Tema 1. La Psicobiología" : lang === "ru" ? "Глава 1. Психобиология" : lang === "nl" ? "Hoofdstuk 1. Psychobiologie" : "Chapter 1. Psychobiology",
    intro: lang === "es" ? psychobiologySpanish[3].text : paragraphs[3],
    subject: lang === "es" ? "Fundamentos de Psicobiología" : lang === "ru" ? "Основы психобиологии" : lang === "nl" ? "Grondslagen van de psychobiologie" : "Foundations of Psychobiology",
    html,
  };
}

export const psychobiologyChapterOneTranslations = {
  ru: build("ru"), nl: build("nl"), en: build("en"), es: build("es"),
};
