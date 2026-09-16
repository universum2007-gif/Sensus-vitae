import { discussionCopy } from "@/lib/discussion-content";
import type { Language } from "@/lib/site-content";

type NavigationCopy = {
  map: string; mapIntro: string; latest: string;
  study: string; library: string; club: string; news: string; self: string;
  books: string; authors: string; glossary: string; discussions: string;
  homeDescriptions: string[]; clubDescriptions: string[];
  year: string; subjects: string; studyIntro: string; subjectNote: string;
  preparing: string; materials: string; learningPath: string; yearNote: string;
  catalogueIntro: string; authorsIntro: string; glossaryIntro: string;
  discussionIntro: string; questions: string; selfNote: string;
  related: string; profile: string; bookCount: string;
};
export const navigationCopy: Record<Language, NavigationCopy> = {
  ru: {
    map: "Откройте Sensus Vitae", mapIntro: "Четыре входа: учиться, читать, обсуждать и следить за наукой.", latest: "Новое на Sensus Vitae",
    study: "Учёба", library: "Библиотека", club: "Клуб", news: "Новости", self: "Познай себя",
    books: "Книги", authors: "Авторы", glossary: "Глоссарий", discussions: "Вопросы и обсуждения",
    homeDescriptions: ["Предметы, конспекты и материалы для университетского обучения.", "Книги, статьи и источники в одном месте.", "Совместное чтение, авторы и вопросы для размышления.", "Научные исследования и комментарии к новым открытиям.", "Будущий раздел об интересах, способностях и выборе учебного пути."],
    clubDescriptions: ["Каталог книг и материалов для совместного чтения.", "Авторы, их идеи и связанные материалы.", "Понятные объяснения научных понятий на языке страницы.", "Вопросы к чтению и темы для вдумчивого разговора."],
    year: "1-й курс", subjects: "Учебные предметы", studyIntro: "Материалы по предметам первого курса психологии UNED: конспекты, главы учебников, ключевые понятия и тесты для проверки знаний.",
    subjectNote: "Предметы первого курса Grado en Psicología UNED. Здесь постепенно будут появляться резюме глав учебников, ключевые понятия и материалы для проверки знаний.",
    preparing: "Материалы готовятся", materials: "Учебные материалы", learningPath: "Предмет → учебник или тема → глава → конспект → глоссарий → проверка понимания",
    yearNote: "Материалы следующих курсов будут добавляться по мере обучения.", catalogueIntro: "Книги для чтения и обсуждения: конспекты глав, ключевые идеи и вопросы для размышления.",
    authorsIntro: "Знакомство с авторами через их книги, идеи и материалы Sensus Vitae.", glossaryIntro: "Общий глоссарий сайта. Нажмите на понятие, чтобы открыть его объяснение.",
    discussionIntro: "Пространство для вопросов, совместного чтения и размышлений. Онлайн-обсуждения и встречи пока готовятся.", questions: "Вопросы к главам",
    selfNote: "Раздел находится в разработке. Здесь пока нет тестирования, оценок или рекомендаций. Это исследование интересов, способностей, предпочтений в обучении и возможных учебных или профессиональных направлений — отдельно от проверки знаний по учебным материалам.",
    related: "Связанные материалы", profile: "Об авторе и материалах", bookCount: "18 глав",
  },
  nl: {
    map: "Ontdek Sensus Vitae", mapIntro: "Vier ingangen om te leren, te lezen, ideeën te bespreken en de wetenschap te volgen.", latest: "Nieuw op Sensus Vitae",
    study: "Studie", library: "Bibliotheek", club: "Club", news: "Nieuws", self: "Ontdek jezelf",
    books: "Boeken", authors: "Auteurs", glossary: "Woordenlijst", discussions: "Vragen en gesprekken",
    homeDescriptions: ["Vakken, samenvattingen en materiaal voor universitair leren.", "Boeken, artikelen en bronnen bij elkaar.", "Samen lezen, auteurs ontdekken en ideeën bespreken.", "Wetenschappelijk onderzoek en duiding van nieuwe inzichten.", "Een toekomstig onderdeel over interesses, vaardigheden en studiekeuzes."],
    clubDescriptions: ["Boeken en materiaal om samen te lezen.", "Auteurs, hun ideeën en bijbehorend materiaal.", "Heldere uitleg van wetenschappelijke begrippen in je eigen taal.", "Leesvragen en onderwerpen voor een verdiepend gesprek."],
    year: "Eerste studiejaar", subjects: "Studievakken", studyIntro: "Materiaal voor het eerste jaar psychologie aan de UNED: samenvattingen, studieboekhoofdstukken, kernbegrippen en kennischecks.",
    subjectNote: "Onderwerpen voor het eerste jaar van de Grado en Psicología aan de UNED. Hier verschijnen geleidelijk samenvattingen van studieboekhoofdstukken, kernbegrippen en materiaal om je kennis te toetsen.",
    preparing: "Materiaal in voorbereiding", materials: "Leermateriaal", learningPath: "Vak → studieboek of thema → hoofdstuk → samenvatting → woordenlijst → begripscheck",
    yearNote: "Materiaal voor latere studiejaren wordt gaandeweg toegevoegd.", catalogueIntro: "Boeken om te lezen en te bespreken, met hoofdstuksamenvattingen, kernideeën en vragen om over na te denken.",
    authorsIntro: "Ontdek auteurs via hun boeken, ideeën en materiaal op Sensus Vitae.", glossaryIntro: "De gezamenlijke woordenlijst van de website. Klik op een begrip om de uitleg te openen.",
    discussionIntro: "Ruimte voor vragen, samen lezen en reflectie. Online gesprekken en bijeenkomsten zijn nog in voorbereiding.", questions: "Vragen bij de hoofdstukken",
    selfNote: "Dit onderdeel is in ontwikkeling. Er zijn nog geen tests, scores of adviezen. Het is bedoeld om interesses, vaardigheden, leervoorkeuren en mogelijke studie- of beroepsrichtingen te verkennen, los van kennischecks bij het studiemateriaal.",
    related: "Gerelateerd materiaal", profile: "Over de auteur en het materiaal", bookCount: "18 hoofdstukken",
  },
  en: {
    map: "Explore Sensus Vitae", mapIntro: "Four starting points for learning, reading, discussion and scientific news.", latest: "New on Sensus Vitae",
    study: "Study", library: "Library", club: "Club", news: "News", self: "Know yourself",
    books: "Books", authors: "Authors", glossary: "Glossary", discussions: "Questions & discussions",
    homeDescriptions: ["Subjects, summaries and resources for university learning.", "Books, articles and sources in one place.", "Shared reading, authors and questions to explore together.", "Scientific research and commentary on new findings.", "A future space to explore interests, abilities and study choices."],
    clubDescriptions: ["A catalogue of books and shared reading materials.", "Authors, their ideas and related resources.", "Clear explanations of scientific concepts in your page language.", "Reading questions and topics for thoughtful conversation."],
    year: "Year 1", subjects: "Study subjects", studyIntro: "Resources for first-year psychology at UNED: summaries, textbook chapters, key concepts and knowledge checks.",
    subjectNote: "First-year subjects for the Grado en Psicología at UNED. Textbook chapter summaries, key concepts and knowledge-check materials will gradually become available here.",
    preparing: "Materials in preparation", materials: "Learning materials", learningPath: "Subject → textbook or topic → chapter → summary → glossary → understanding check",
    yearNote: "Resources for later academic years will be added as study progresses.", catalogueIntro: "Books for reading and discussion, with chapter summaries, key ideas and questions for reflection.",
    authorsIntro: "Explore authors through their books, ideas and related Sensus Vitae material.", glossaryIntro: "The shared site glossary. Select a concept to open its explanation.",
    discussionIntro: "A space for questions, shared reading and reflection. Online discussions and meetings are still in preparation.", questions: "Chapter questions",
    selfNote: "This section is in development. No tests, scores or recommendations are available yet. It will explore interests, abilities, learning preferences and possible study or professional directions, separately from knowledge checks on learning materials.",
    related: "Related material", profile: "About the author and material", bookCount: "18 chapters",
  },
  es: {
    map: "Explora Sensus Vitae", mapIntro: "Cuatro puntos de partida para estudiar, leer, conversar y seguir la ciencia.", latest: "Novedades en Sensus Vitae",
    study: "Estudio", library: "Biblioteca", club: "Club", news: "Noticias", self: "Conócete mejor",
    books: "Libros", authors: "Autores", glossary: "Glosario", discussions: "Preguntas y debates",
    homeDescriptions: ["Asignaturas, resúmenes y recursos para el estudio universitario.", "Libros, artículos y fuentes en un solo lugar.", "Lecturas compartidas, autores y preguntas para reflexionar.", "Investigación científica y comentarios sobre nuevos hallazgos.", "Un futuro espacio para explorar intereses, capacidades y opciones de estudio."],
    clubDescriptions: ["Un catálogo de libros y materiales para leer juntos.", "Autores, sus ideas y materiales relacionados.", "Explicaciones claras de conceptos científicos en el idioma de la página.", "Preguntas de lectura y temas para una conversación reflexiva."],
    year: "1.er curso", subjects: "Asignaturas", studyIntro: "Materiales para el primer curso de Psicología en la UNED: resúmenes, capítulos de manuales, conceptos clave y comprobaciones de conocimientos.",
    subjectNote: "Áreas de estudio del primer curso del Grado en Psicología de la UNED. Aquí se incorporarán progresivamente resúmenes de capítulos de manuales, conceptos clave y materiales para comprobar lo aprendido.",
    preparing: "Materiales en preparación", materials: "Materiales de estudio", learningPath: "Asignatura → manual o tema → capítulo → resumen → glosario → comprobación de comprensión",
    yearNote: "Los materiales de cursos posteriores se añadirán a medida que avance el estudio.", catalogueIntro: "Libros para leer y debatir, con resúmenes de capítulos, ideas clave y preguntas para reflexionar.",
    authorsIntro: "Conoce a los autores a través de sus libros, ideas y materiales de Sensus Vitae.", glossaryIntro: "El glosario compartido del sitio. Pulsa un concepto para abrir su explicación.",
    discussionIntro: "Un espacio para preguntas, lecturas compartidas y reflexión. Los debates en línea y los encuentros aún están en preparación.", questions: "Preguntas de los capítulos",
    selfNote: "Esta sección está en desarrollo. Todavía no ofrece pruebas, puntuaciones ni recomendaciones. Servirá para explorar intereses, capacidades, preferencias de aprendizaje y posibles caminos académicos o profesionales, por separado de las comprobaciones de conocimientos.",
    related: "Material relacionado", profile: "Sobre el autor y los materiales", bookCount: "18 capítulos",
  },
};

export const homeDestinations = [
  { key: "study", path: "study" },
  { key: "library", path: "library" },
  { key: "club", path: "club" },
  { key: "news", path: "library/scientific-news" },
] as const;

export const clubDestinations = [
  { key: "books", path: "library/books" },
  { key: "authors", path: "club/authors" },
  { key: "glossary", path: "glossary" },
  { key: "discussions", path: "club/discussions" },
  { key: "self", path: "study/orientation" },
] as const;

for (const lang of ["ru", "nl", "en", "es"] as const) {
  navigationCopy[lang].clubDescriptions.push(discussionCopy[lang].self);
}

// Site topic labels are reused; these are not asserted to be official course titles.
export const academicYears = [{ id: "year-1", year: 1, subjectIndexes: [0, 1, 2, 3, 4, 5] }];
