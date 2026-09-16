import type { Language } from "@/lib/site-content";
import type { EducationalNewsItem } from "@/lib/educational-news";

type Copy = { science: string; scienceIntro: string; learning: string; learningIntro: string; flow: string; learningLink: string; scienceLink: string; resources: string; articles: string; subjectNote: string; briefLabels: string[] };
export const libraryCopy: Record<Language, Copy> = {
  ru: { science: "Научные новости", scienceIntro: "Обзоры исследований: научный вопрос, выборка, метод, результаты, ограничения и первоисточник. Материалы отбираются вручную.", learning: "Учебные новости", learningIntro: "Учебные кейсы на основе исследований: разбираем статистику, методы, понятия, интерпретацию результатов и ограничения.", flow: "Научная новость → учебный кейс → глоссарий → статистика → методология → интерпретация → проверка знаний", learningLink: "Разобрать как учебный кейс", scienceLink: "Исходная научная новость", resources: "Материалы для обучения", articles: "Научные статьи", subjectNote: "Подборка учебников и глав по этому предмету готовится. Самостоятельные статьи и учебные материалы доступны в библиотеке.", briefLabels: ["Что изучали", "Исследовательский вопрос", "Выборка", "Метод", "Основные результаты", "Ограничения", "Первоисточник"] },
  nl: { science: "Wetenschapsnieuws", scienceIntro: "Overzichten van onderzoek: onderzoeksvraag, steekproef, methode, resultaten, beperkingen en oorspronkelijke bron. De selectie gebeurt handmatig.", learning: "Leernieuws", learningIntro: "Leercasussen op basis van onderzoek: statistiek, methoden, begrippen, interpretatie en beperkingen.", flow: "Wetenschapsnieuws → leercasus → woordenlijst → statistiek → methodologie → interpretatie → kennischeck", learningLink: "Bestudeer als leercasus", scienceLink: "Oorspronkelijk wetenschapsnieuws", resources: "Leermaterialen", articles: "Wetenschappelijke artikelen", subjectNote: "De selectie van studieboeken en hoofdstukken voor dit vak is in voorbereiding. Losse artikelen en leermaterialen vind je in de bibliotheek.", briefLabels: ["Onderwerp", "Onderzoeksvraag", "Steekproef", "Methode", "Belangrijkste resultaten", "Beperkingen", "Oorspronkelijke bron"] },
  en: { science: "Scientific News", scienceIntro: "Research overviews: the question, sample, method, findings, limitations and original source. Materials are selected manually.", learning: "Learning News", learningIntro: "Research-based learning cases exploring statistics, methods, terminology, interpretation and limitations.", flow: "Scientific news → learning case → glossary → statistics → methodology → interpretation → knowledge check", learningLink: "Explore as a learning case", scienceLink: "Original scientific news", resources: "Learning resources", articles: "Scientific articles", subjectNote: "The selection of textbooks and chapters for this subject is in preparation. Standalone articles and learning resources are available in the Library.", briefLabels: ["What was studied", "Research question", "Sample", "Method", "Principal findings", "Limitations", "Original source"] },
  es: { science: "Noticias científicas", scienceIntro: "Panoramas de investigación: pregunta, muestra, método, resultados, limitaciones y fuente original. Los materiales se seleccionan manualmente.", learning: "Noticias para aprender", learningIntro: "Casos de aprendizaje basados en investigaciones: estadística, métodos, conceptos, interpretación y limitaciones.", flow: "Noticia científica → caso de aprendizaje → glosario → estadística → metodología → interpretación → comprobación de conocimientos", learningLink: "Analizar como caso de aprendizaje", scienceLink: "Noticia científica original", resources: "Recursos de aprendizaje", articles: "Artículos científicos", subjectNote: "La selección de manuales y capítulos para esta asignatura está en preparación. Los artículos y recursos de aprendizaje independientes están disponibles en la Biblioteca.", briefLabels: ["Qué se estudió", "Pregunta de investigación", "Muestra", "Método", "Resultados principales", "Limitaciones", "Fuente original"] },
};

// A manually prepared brief may accompany an existing article without copying its body.
export type ResearchBrief = {
  studied: string; question: string; sample: string; method: string;
  findings: string; limitations: string; source: { label: string; href: string };
};
export type ScientificNewsRecord = {
  id: string; articleSlug: string; brief?: Record<Language, ResearchBrief>;
};
export const scientificNews: ScientificNewsRecord[] = [
  { id: "personality-genetics-2026", articleSlug: "personality-genetics-nature-2026" },
];
export const libraryResourceSlugs = ["neuron-and-glia", "mean-and-standard-deviation"];
export const libraryArticleSlugs = ["personality-genetics-nature-2026", "stress-and-personality"];

export function learningCasesForNews(newsId: string, cases: EducationalNewsItem[]) {
  return cases.filter(item => !item.isDemo && item.scientificNewsId === newsId);
}
