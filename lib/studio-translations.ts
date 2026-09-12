import type { Language } from "./site-content";
const labels: Record<string, string[]> = {
  "Редакторская панель": [
    "Редакторская панель",
    "Panel de edición",
    "Editor panel",
    "Redactiepaneel"
  ],
  "Этот раздел доступен только автору Sensus Vitae.": [
    "Этот раздел доступен только автору Sensus Vitae.",
    "Esta sección solo está disponible para la autora de Sensus Vitae.",
    "This section is only available to the author of Sensus Vitae.",
    "Dit onderdeel is alleen toegankelijk voor de auteur van Sensus Vitae."
  ],
  "Вернуться на сайт": [
    "Вернуться на сайт",
    "Volver al sitio",
    "Return to site",
    "Terug naar de website"
  ],
  "На сайт": [
    "На сайт",
    "Al sitio",
    "To the site",
    "Naar de website"
  ],
  "Новый материал": [
    "Новый материал",
    "Nuevo material",
    "New material",
    "Nieuw materiaal"
  ],
  "Вошла как": [
    "Вошла как",
    "Sesión iniciada como",
    "Signed in as",
    "Ingelogd als"
  ],
  "Материал опубликован": [
    "Материал опубликован",
    "Material publicado",
    "Material published",
    "Materiaal gepubliceerd"
  ],
  "Черновик сохранён": [
    "Черновик сохранён",
    "Borrador guardado",
    "Draft saved",
    "Concept opgeslagen"
  ],
  "Ошибка сохранения": [
    "Ошибка сохранения",
    "Error al guardar",
    "Could not save",
    "Opslaan mislukt"
  ],
  "Заголовок": [
    "Заголовок",
    "Título",
    "Title",
    "Titel"
  ],
  "О чём этот материал?": [
    "О чём этот материал?",
    "¿De qué trata el material?",
    "What is this material about?",
    "Waar gaat dit materiaal over?"
  ],
  "Раздел": [
    "Раздел",
    "Sección",
    "Section",
    "Onderdeel"
  ],
  "Психобиология": [
    "Психобиология",
    "Psicobiología",
    "Psychobiology",
    "Psychobiologie"
  ],
  "Язык": [
    "Язык",
    "Idioma",
    "Language",
    "Taal"
  ],
  "Краткое описание": [
    "Краткое описание",
    "Descripción breve",
    "Short description",
    "Korte beschrijving"
  ],
  "Два–три предложения для карточки материала": [
    "Два–три предложения для карточки материала",
    "Dos o tres frases para la tarjeta del material",
    "Two or three sentences for the material card",
    "Twee of drie zinnen voor de materiaalkaart"
  ],
  "Текст": [
    "Текст",
    "Texto",
    "Text",
    "Tekst"
  ],
  "Напиши или вставь готовый конспект…": [
    "Напиши или вставь готовый конспект…",
    "Escribe o pega tus apuntes…",
    "Write or paste your notes…",
    "Schrijf of plak je notities…"
  ],
  "Сохранить черновик": [
    "Сохранить черновик",
    "Guardar borrador",
    "Save draft",
    "Concept opslaan"
  ],
  "Сохраняю…": [
    "Сохраняю…",
    "Guardando…",
    "Saving…",
    "Opslaan…"
  ],
  "Опубликовать": [
    "Опубликовать",
    "Publicar",
    "Publish",
    "Publiceren"
  ],
  "Последние материалы": [
    "Последние материалы",
    "Últimos materiales",
    "Latest materials",
    "Nieuwste materialen"
  ],
  "Опубликовано": [
    "Опубликовано",
    "Publicado",
    "Published",
    "Gepubliceerd"
  ],
  "Черновик": [
    "Черновик",
    "Borrador",
    "Draft",
    "Concept"
  ],
  "Здесь появятся твои черновики и опубликованные статьи.": [
    "Здесь появятся твои черновики и опубликованные статьи.",
    "Aquí aparecerán tus borradores y artículos publicados.",
    "Your drafts and published articles will appear here.",
    "Hier verschijnen je concepten en gepubliceerde artikelen."
  ],
  "ОБРАТНАЯ СВЯЗЬ": [
    "ОБРАТНАЯ СВЯЗЬ",
    "COMENTARIOS",
    "FEEDBACK",
    "FEEDBACK"
  ],
  "Сообщения с сайта": [
    "Сообщения с сайта",
    "Mensajes del sitio",
    "Website messages",
    "Berichten via de website"
  ],
  "Загружаю сообщения…": [
    "Загружаю сообщения…",
    "Cargando mensajes…",
    "Loading messages…",
    "Berichten laden…"
  ],
  "Сообщения временно недоступны.": [
    "Сообщения временно недоступны.",
    "Los mensajes no están disponibles temporalmente.",
    "Messages are temporarily unavailable.",
    "Berichten zijn tijdelijk niet beschikbaar."
  ],
  "Ответить": [
    "Ответить",
    "Responder",
    "Reply",
    "Antwoorden"
  ],
  "Новых сообщений пока нет.": [
    "Новых сообщений пока нет.",
    "Todavía no hay mensajes nuevos.",
    "No new messages yet.",
    "Nog geen nieuwe berichten."
  ]
};
export function studioText(lang: Language) { return (key: string) => labels[key]?.[["ru","es","en","nl"].indexOf(lang)] ?? key; }

