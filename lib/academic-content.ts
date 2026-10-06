import type { Language } from "@/lib/site-content";

// Add only verified books and existing chapter routes; an empty list is planned content.
export type AcademicBook = {
  id: string;
  title: Record<Language, string>;
  originalTitle?: { text: string; language: Language };
  source?: { authors: string; year: number; edition: Record<Language, string> };
  chapters: { number: number; title: Record<Language, string>; path: string; cardDescription?: Record<Language, string>; description?: Record<Language, string> }[];
};

export const academicReadingCopy = {
  ru: { originalTitle: "Оригинальное название", source: "Основной учебник", chapters: "Главы", read: "Читать конспект" },
  es: { originalTitle: "Título original", source: "Manual principal", chapters: "Temas", read: "Leer el resumen" },
  en: { originalTitle: "Original title", source: "Primary textbook", chapters: "Chapters", read: "Read the study guide" },
  nl: { originalTitle: "Oorspronkelijke titel", source: "Basisboek", chapters: "Hoofdstukken", read: "Lees de samenvatting" },
};
export const dataAnalysisChapterOne = {
  number: 1,
  cardDescription: {
    ru: "Шкалы измерения · частоты · группировка данных · распределения",
    es: "Escalas de medición · frecuencias · agrupación de datos · distribuciones",
    en: "Measurement scales · frequencies · grouping data · distributions",
    nl: "Meetniveaus · frequenties · groepering van gegevens · verdelingen",
  },
  path: "study/subjects/data-analysis/chapter-1",
  title: {
    ru: "Глава 1. Основные понятия и организация данных",
    es: "Tema 1. Conceptos básicos y organización de datos",
    en: "Chapter 1. Basic concepts and organization of data",
    nl: "Hoofdstuk 1. Basisbegrippen en ordening van gegevens",
  },
  description: {
    ru: "Основные понятия статистики, шкалы измерения, частоты, группировка данных и форма распределений. Примеры и задачи с решениями.",
    es: "Conceptos estadísticos, escalas de medición, frecuencias, agrupación de datos y forma de las distribuciones. Ejemplos y ejercicios resueltos.",
    en: "Statistical concepts, measurement scales, frequencies, grouping data and distribution shape. Examples and exercises with solutions.",
    nl: "Statistische begrippen, meetniveaus, frequenties, groepering van gegevens en de vorm van verdelingen. Voorbeelden en oefeningen met oplossingen.",
  },
};
const dataAnalysisBook: AcademicBook = {
  id: "uned-data-analysis-2019",
  originalTitle: { text: "Introducción al análisis de datos: Aplicaciones en psicología y ciencias de la salud", language: "es" },
  title: {
    ru: "Введение в анализ данных: применение в психологии и науках о здоровье",
    es: "Introducción al análisis de datos: Aplicaciones en psicología y ciencias de la salud",
    en: "Introduction to data analysis: applications in psychology and health sciences",
    nl: "Inleiding tot data-analyse: toepassingen in de psychologie en gezondheidswetenschappen",
  },
  source: {
    authors: "Suárez Falcón, J. C., Pozo Cabanillas, M. P., San Luis Costas, C. y Recio Saboya, P.",
    year: 2019,
    edition: { ru: "2-е издание", es: "2ª edición", en: "2nd edition", nl: "2e druk" },
  },
  chapters: [dataAnalysisChapterOne],
};

export const academicSubjects: { slug: string; categoryIndex: number; description?: Record<Language, string>; books: AcademicBook[] }[] = [
  { slug: "psychobiology", categoryIndex: 0, books: [] },
  { slug: "data-analysis", categoryIndex: 1, books: [dataAnalysisBook], description: {
    ru: "Материалы по предмету «Введение в анализ данных» Grado en Psicología UNED: конспекты глав, основные понятия, формулы, примеры и задачи для самостоятельной проверки.",
    es: "Materiales de la asignatura Introducción al Análisis de Datos del Grado en Psicología de la UNED: resúmenes de capítulos, conceptos fundamentales, fórmulas, ejemplos y ejercicios de autoevaluación.",
    en: "Study materials for Introduction to Data Analysis in UNED’s psychology degree: chapter summaries, key concepts, formulas, examples and self-assessment exercises.",
    nl: "Studiemateriaal voor Inleiding tot data-analyse binnen de bacheloropleiding Psychologie van de UNED: hoofdstuksamenvattingen, kernbegrippen, formules, voorbeelden en oefeningen om je begrip te toetsen.",
  } },
  { slug: "research-methods", categoryIndex: 2, books: [] },
  { slug: "motivation", categoryIndex: 3, books: [] },
  { slug: "social-psychology", categoryIndex: 4, books: [] },
  { slug: "history-of-psychology", categoryIndex: 5, books: [] },
];

export const dataAnalysisLayoutCopy = {
  ru: { chapter: "Глава", intro: "Конспекты, ключевые понятия, формулы, примеры и задачи по курсу Introducción al Análisis de Datos UNED." },
  es: { chapter: "Tema", intro: "Resúmenes, conceptos clave, fórmulas, ejemplos y ejercicios de la asignatura Introducción al Análisis de Datos de la UNED." },
  en: { chapter: "Chapter", intro: "Summaries, key concepts, formulas, examples and exercises for UNED’s Introduction to Data Analysis course." },
  nl: { chapter: "Hoofdstuk", intro: "Samenvattingen, kernbegrippen, formules, voorbeelden en oefeningen voor het UNED-vak Inleiding tot data-analyse." },
};
