import type { Language } from "@/lib/site-content";

export const catalogueActions = {
  ru: { library: "Открыть библиотеку", study: "Смотреть предметы", club: "Познакомиться с клубом", books: "Выбрать книгу", authors: "Познакомиться с авторами", glossary: "Найти объяснение", discussions: "Смотреть вопросы", planned: "Посмотреть структуру", news: "Смотреть новости", articles: "Выбрать статью", resources: "Смотреть материалы", chapters: "Читать главы", article: "Читать материал" },
  nl: { library: "Verken de bibliotheek", study: "Bekijk de vakken", club: "Ontdek de club", books: "Kies een boek", authors: "Maak kennis met de auteurs", glossary: "Zoek een uitleg", discussions: "Bekijk de vragen", planned: "Bekijk de geplande structuur", news: "Bekijk het nieuws", articles: "Kies een artikel", resources: "Bekijk de leermaterialen", chapters: "Lees de hoofdstukken", article: "Lees het artikel" },
  en: { library: "Explore the library", study: "Browse subjects", club: "Explore the club", books: "Choose a book", authors: "Meet the authors", glossary: "Find an explanation", discussions: "Explore the questions", planned: "View planned structure", news: "Browse news", articles: "Choose an article", resources: "Browse learning resources", chapters: "Read chapters", article: "Read the article" },
  es: { library: "Explorar la biblioteca", study: "Consultar las asignaturas", club: "Conocer el club", books: "Elegir un libro", authors: "Conocer a los autores", glossary: "Buscar una explicación", discussions: "Explorar las preguntas", planned: "Ver la estructura prevista", news: "Consultar las noticias", articles: "Elegir un artículo", resources: "Consultar los materiales", chapters: "Leer los capítulos", article: "Leer el artículo" },
};
export function destinationAction(href: string, lang: Language, preparing = false) {
  const c = catalogueActions[lang];
  if (preparing) return c.planned;
  if (href.includes("glossary")) return c.glossary;
  if (href.includes("authors")) return c.authors;
  if (href.includes("discussions")) return c.discussions;
  if (href.includes("books")) return c.books;
  if (href.includes("news")) return c.news;
  if (href.includes("scientific-articles")) return c.articles;
  if (href.includes("learning-materials")) return c.resources;
  if (href.includes("study")) return c.study;
  if (href.includes("club")) return c.club;
  return c.library;
}
