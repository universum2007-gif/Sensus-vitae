import type { Metadata } from "next";
import { languages, type Language } from "@/lib/site-content";

const siteOrigin = "https://sensusvitae.club";

const openGraphLocales: Record<Language, string> = {
  ru: "ru_RU",
  nl: "nl_NL",
  en: "en_GB",
  es: "es_ES",
};

export const pageMetadataCopy = {
  home: {
    ru: { title: "Психология и психобиология для студентов", description: "Понятные научные материалы по психологии, психобиологии и критическому мышлению для студентов и заинтересованных читателей." },
    nl: { title: "Psychologie en psychobiologie voor studenten", description: "Heldere wetenschappelijke materialen over psychologie, psychobiologie en kritisch denken voor studenten en geïnteresseerde lezers." },
    en: { title: "Psychology and psychobiology for students", description: "Clear scientific learning materials on psychology, psychobiology and critical thinking for students and interested readers." },
    es: { title: "Psicología y psicobiología para estudiantes", description: "Materiales científicos claros sobre psicología, psicobiología y pensamiento crítico para estudiantes y lectores interesados." },
  },
  library: {
    ru: { title: "Библиотека знаний", description: "Конспекты и объяснения по психологии, психобиологии, генетике поведения, статистике и методам исследования." },
    nl: { title: "Kennisbibliotheek", description: "Notities en uitleg over psychologie, psychobiologie, gedragsgenetica, statistiek en onderzoeksmethoden." },
    en: { title: "Knowledge library", description: "Study notes and explanations on psychology, psychobiology, behavioural genetics, statistics and research methods." },
    es: { title: "Biblioteca de conocimiento", description: "Apuntes y explicaciones sobre psicología, psicobiología, genética de la conducta, estadística y métodos de investigación." },
  },
  study: {
    ru: { title: "Учебный путь", description: "Структурированный раздел для тем, конспектов, материалов и проверок знаний по психологии и научному мышлению." },
    nl: { title: "Studieweg", description: "Een gestructureerd onderdeel voor onderwerpen, samenvattingen, studiemateriaal en kennischecks in de psychologie en wetenschappelijk denken." },
    en: { title: "Study path", description: "A structured section for topics, chapter summaries, study materials and knowledge checks in psychology and scientific thinking." },
    es: { title: "Ruta de estudio", description: "Una sección estructurada para temas, resúmenes, materiales de estudio y comprobaciones de conocimiento en psicología y pensamiento científico." },
  },
  club: {
    ru: { title: "Клуб осознанной жизни", description: "Sensus Vitae — пространство для вдумчивого диалога, обсуждения книг и исследования важных вопросов жизни." },
    nl: { title: "Club voor bewust leven", description: "Sensus Vitae is een ruimte voor doordachte dialoog, gesprekken over boeken en onderzoek naar belangrijke levensvragen." },
    en: { title: "A club for conscious living", description: "Sensus Vitae is a space for thoughtful dialogue, book discussions and the exploration of important questions in life." },
    es: { title: "Club para una vida consciente", description: "Sensus Vitae es un espacio de diálogo reflexivo, conversación sobre libros y exploración de las grandes preguntas de la vida." },
  },
  psychobiology: {
    ru: { title: "Психобиология", description: "Как мозг, нервная система, генетика, гормоны, опыт и среда вместе участвуют в формировании поведения." },
    nl: { title: "Psychobiologie", description: "Hoe hersenen, zenuwstelsel, genetica, hormonen, ervaring en omgeving samen bijdragen aan gedrag." },
    en: { title: "Psychobiology", description: "How the brain, nervous system, genetics, hormones, experience and environment jointly contribute to behaviour." },
    es: { title: "Psicobiología", description: "Cómo el cerebro, el sistema nervioso, la genética, las hormonas, la experiencia y el ambiente contribuyen conjuntamente a la conducta." },
  },
  sapolsky: {
    ru: { title: "Роберт Сапольски: «Почему у зебр не бывает язв»", description: "Подробные резюме всех 18 глав книги Роберта Сапольски о физиологии, психологии и последствиях стресса." },
    nl: { title: "Robert Sapolsky: Waarom krijgen zebra’s geen maagzweren?", description: "Uitgebreide samenvattingen van alle 18 hoofdstukken van Robert Sapolsky’s boek over de fysiologie, psychologie en gevolgen van stress." },
    en: { title: "Robert Sapolsky: Why Zebras Don’t Get Ulcers", description: "Detailed summaries of all 18 chapters of Robert Sapolsky’s book on the physiology, psychology and consequences of stress." },
    es: { title: "Robert Sapolsky: ¿Por qué las cebras no tienen úlcera?", description: "Resúmenes detallados de los 18 capítulos del libro de Robert Sapolsky sobre la fisiología, la psicología y las consecuencias del estrés." },
  },
  about: {
    ru: { title: "Обо мне и моих целях", description: "История Екатерины Ионовой, её обучения психологии в UNED и развития научно-образовательного проекта Sensus Vitae." },
    nl: { title: "Over mij en mijn doelen", description: "Het verhaal van Jekaterina Ionova, haar studie psychologie aan de UNED en de ontwikkeling van het educatieve project Sensus Vitae." },
    en: { title: "About me and my goals", description: "The story of Jekaterina Ionova, her psychology studies at UNED and the development of the scientific educational project Sensus Vitae." },
    es: { title: "Sobre mí y mis objetivos", description: "La historia de Jekaterina Ionova, sus estudios de Psicología en la UNED y el desarrollo del proyecto científico y educativo Sensus Vitae." },
  },
  contact: {
    ru: { title: "Контакты", description: "Свяжитесь с Sensus Vitae, чтобы задать вопрос по материалам, предложить научный источник или обсудить сотрудничество." },
    nl: { title: "Contact", description: "Neem contact op met Sensus Vitae voor een vraag over de materialen, een wetenschappelijke bron of mogelijke samenwerking." },
    en: { title: "Contact", description: "Contact Sensus Vitae with a question about the materials, a scientific source or an idea for collaboration." },
    es: { title: "Contacto", description: "Contacta con Sensus Vitae para preguntar por los materiales, compartir una fuente científica o proponer una colaboración." },
  },
  privacy: {
    ru: { title: "Политика конфиденциальности", description: "Как Sensus Vitae обрабатывает, хранит и передаёт данные, отправленные через контактную форму." },
    nl: { title: "Privacyverklaring", description: "Hoe Sensus Vitae gegevens verwerkt, bewaart en doorgeeft die via het contactformulier worden verzonden." },
    en: { title: "Privacy Policy", description: "How Sensus Vitae handles, stores and transmits information submitted through the contact form." },
    es: { title: "Política de privacidad", description: "Cómo Sensus Vitae trata, almacena y transmite la información enviada mediante el formulario de contacto." },
  },
} as const;

type PageMetadataOptions = {
  lang: Language;
  path?: string;
  title: string;
  description: string;
  equivalentLanguages?: readonly Language[];
};

export function createPageMetadata({
  lang,
  path = "",
  title,
  description,
  equivalentLanguages = languages,
}: PageMetadataOptions): Metadata {
  const routePath = path ? `/${path.replace(/^\/+|\/+$/g, "")}` : "";
  const localizedUrl = (language: Language) => `${siteOrigin}/${language}${routePath}`;
  const languageAlternates: Record<string, string> = Object.fromEntries(
    equivalentLanguages.map((language) => [language, localizedUrl(language)]),
  );

  if (equivalentLanguages.includes("ru")) languageAlternates["x-default"] = localizedUrl("ru");

  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(lang),
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      siteName: "Sensus Vitae",
      title: `${title} · Sensus Vitae`,
      description,
      url: localizedUrl(lang),
      locale: openGraphLocales[lang],
      alternateLocale: equivalentLanguages
        .filter((language) => language !== lang)
        .map((language) => openGraphLocales[language]),
    },
  };
}
