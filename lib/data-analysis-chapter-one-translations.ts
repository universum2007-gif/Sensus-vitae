import { dataAnalysisChapterOne } from "./academic-content";
import type { Language } from "./site-content";
import es from "./data-analysis-tema1/es.json";
import ru from "./data-analysis-tema1/ru.json";
import nl from "./data-analysis-tema1/nl.json";
import en from "./data-analysis-tema1/en.json";

export const dataAnalysisSectionIds = ["study-guide", "statistics", "population", "measurement", "data-matrix", "frequencies", "grouping", "graphs", "distribution", "exercises", "summary", "terms"] as const;
const html: Record<Language, string> = { es, ru, nl, en };
const subject = {
  ru: "Введение в анализ данных", es: "Introducción al Análisis de Datos",
  nl: "Inleiding tot data-analyse", en: "Introduction to Data Analysis",
};
function chapter(lang: Language) {
  return { title: dataAnalysisChapterOne.title[lang], subject: subject[lang],
    intro: dataAnalysisChapterOne.description[lang], html: html[lang] };
}
/** Full study guide; locale bodies have identical teaching structure. */
export const chapterOneTranslations = {
  ru: chapter("ru"), nl: chapter("nl"), en: chapter("en"), es: chapter("es"),
};
