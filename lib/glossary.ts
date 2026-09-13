import type { Language } from "@/lib/site-content";

export type GlossaryTermId =
  | "allostatic-load"
  | "hpa-axis"
  | "glucocorticoids"
  | "neuroplasticity"
  | "executive-functions";

export type GlossaryLocaleEntry = {
  term: string;
  shortDefinition: string;
  extendedDefinition?: string;
};

export type GlossaryTerm = {
  id: GlossaryTermId;
  ru: GlossaryLocaleEntry;
  es: GlossaryLocaleEntry;
  en: GlossaryLocaleEntry;
  nl: GlossaryLocaleEntry;
};

export const glossaryTerms: Record<GlossaryTermId, GlossaryTerm> = {
  "allostatic-load": {
    id: "allostatic-load",
    ru: {
      term: "Аллостатическая нагрузка",
      shortDefinition: "Аллостатическая нагрузка — это накопленная физиологическая нагрузка, возникающая в результате повторяющейся или хронической адаптации организма к требованиям и стрессорам.",
      extendedDefinition: "Она отражает долгосрочную «цену» поддержания нормального функционирования при продолжительном напряжении и не означает, что каждая отдельная стрессовая реакция вредна.",
    },
    es: {
      term: "Carga alostática",
      shortDefinition: "La carga alostática es la carga fisiológica acumulada que resulta de la adaptación repetida o crónica a demandas y estresores.",
      extendedDefinition: "Refleja el coste a largo plazo de mantener la función bajo presión sostenida, no la nocividad de cada respuesta aislada al estrés.",
    },
    en: {
      term: "Allostatic load",
      shortDefinition: "Allostatic load is the cumulative physiological burden that results from repeated or chronic adaptation to demands and stressors.",
      extendedDefinition: "It reflects the long-term cost of maintaining function under sustained pressure, rather than the harm of any single stress response.",
    },
    nl: {
      term: "Allostatische belasting",
      shortDefinition: "Allostatische belasting is de cumulatieve fysiologische belasting die ontstaat door herhaalde of chronische aanpassing aan eisen en stressoren.",
      extendedDefinition: "Het weerspiegelt de langetermijnkosten van het behouden van functioneren onder voortdurende druk, niet de schadelijkheid van één enkele stressreactie.",
    },
  },
  "hpa-axis": {
    id: "hpa-axis",
    ru: {
      term: "Гипоталамо-гипофизарно-надпочечниковая ось",
      shortDefinition: "Гипоталамо-гипофизарно-надпочечниковая ось — это нейроэндокринная система, включающая гипоталамус, гипофиз и надпочечники.",
      extendedDefinition: "Она координирует гормональные ответы на стресс и помогает регулировать адаптацию, уровень кортизола и восстановление.",
    },
    es: {
      term: "Eje hipotálamo-hipófiso-suprarrenal",
      shortDefinition: "El eje hipotálamo-hipófiso-suprarrenal es un sistema neuroendocrino que incluye el hipotálamo, la hipófisis y las suprarrenales.",
      extendedDefinition: "Coordina las respuestas hormonales al estrés y ayuda a regular la adaptación, el cortisol y la recuperación.",
    },
    en: {
      term: "HPA axis",
      shortDefinition: "The HPA axis is a neuroendocrine system involving the hypothalamus, pituitary gland, and adrenal glands.",
      extendedDefinition: "It coordinates hormonal stress responses and helps regulate adaptation, cortisol, and recovery.",
    },
    nl: {
      term: "HPA-as",
      shortDefinition: "De HPA-as is een neuro-endocrien systeem met de hypothalamus, hypofyse en bijnieren.",
      extendedDefinition: "Het coördineert hormonale stressreacties en helpt bij de regulering van adaptatie, cortisol en herstel.",
    },
  },
  glucocorticoids: {
    id: "glucocorticoids",
    ru: {
      term: "Глюкокортикоиды",
      shortDefinition: "Глюкокортикоиды — это стероидные гормоны, вырабатываемые корой надпочечников, включая кортизол у человека.",
      extendedDefinition: "Они участвуют в регуляции метаболизма, воспаления, энергии и реакции на стресс, но не сводятся к простому понятию «гормонов стресса».",
    },
    es: {
      term: "Glucocorticoides",
      shortDefinition: "Los glucocorticoides son hormonas esteroideas producidas por la corteza suprarrenal, incluido el cortisol en humanos.",
      extendedDefinition: "Participan en la regulación del metabolismo, la inflamación, la energía y la respuesta al estrés, pero no deben entenderse simplemente como «hormonas del estrés».",
    },
    en: {
      term: "Glucocorticoids",
      shortDefinition: "Glucocorticoids are steroid hormones produced by the adrenal cortex, including cortisol in humans.",
      extendedDefinition: "They are involved in energy regulation, metabolism, immune modulation, and stress responses, but are not simply “stress hormones.”",
    },
    nl: {
      term: "Glucocorticoïden",
      shortDefinition: "Glucocorticoïden zijn steroïde hormonen die door de bijnierschors worden geproduceerd, waaronder cortisol bij mensen.",
      extendedDefinition: "Ze spelen een rol bij energieregulatie, stofwisseling, immuunmodulatie en stressreacties, maar zijn niet simpelweg “stresshormonen.”",
    },
  },
  neuroplasticity: {
    id: "neuroplasticity",
    ru: {
      term: "Нейропластичность",
      shortDefinition: "Способность нервной системы изменять свои связи и функции под влиянием опыта, обучения и повторяющихся сигналов.",
      extendedDefinition: "Пластичность позволяет мозгу адаптироваться, но также означает, что повторяющиеся паттерны стресса или обучения могут усиливать одни траектории и ослаблять другие.",
    },
    es: {
      term: "Neuroplasticidad",
      shortDefinition: "Capacidad del sistema nervioso para cambiar sus conexiones y funciones en función de la experiencia, el aprendizaje y las señales repetidas.",
      extendedDefinition: "La plasticidad permite que el cerebro se adapte, pero también implica que los patrones repetidos de estrés o aprendizaje pueden reforzar algunas rutas y debilitar otras.",
    },
    en: {
      term: "Neuroplasticity",
      shortDefinition: "The brain’s ability to change its connections and functioning as a result of experience, learning and repeated signals.",
      extendedDefinition: "Plasticity supports adaptation, but repeated patterns of stress or learning can also strengthen some pathways while weakening others.",
    },
    nl: {
      term: "Neuroplasticiteit",
      shortDefinition: "Het vermogen van het zenuwstelsel om verbindingen en functies te veranderen door ervaring, leren en herhaalde signalen.",
      extendedDefinition: "Plasticiteit ondersteunt aanpassing, maar herhaalde patronen van stress of leren kunnen sommige routes versterken en andere verzwakken.",
    },
  },
  "executive-functions": {
    id: "executive-functions",
    ru: {
      term: "Исполнительные функции",
      shortDefinition: "Набор когнитивных процессов, включая внимание, рабочую память и самоконтроль, которые помогают регулировать поведение.",
      extendedDefinition: "Исполнительные функции особенно важны в ситуациях, где нужно удерживать цель, подавлять отвлечение и выбирать подходящую стратегию действия.",
    },
    es: {
      term: "Funciones ejecutivas",
      shortDefinition: "Conjunto de procesos cognitivos, como la atención, la memoria de trabajo y el autocontrol, que regulan la conducta.",
      extendedDefinition: "Estas funciones son especialmente relevantes cuando se necesita mantener un objetivo, ignorar distracciones y elegir una estrategia adecuada.",
    },
    en: {
      term: "Executive functions",
      shortDefinition: "A set of cognitive processes, including attention, working memory and self-control, that help regulate behaviour.",
      extendedDefinition: "They are especially important when a person must maintain a goal, resist distraction and choose a suitable strategy for action.",
    },
    nl: {
      term: "Executieve functies",
      shortDefinition: "Een verzameling cognitieve processen, waaronder aandacht, werkgeheugen en zelfcontrole, die gedrag reguleren.",
      extendedDefinition: "Ze zijn vooral belangrijk wanneer iemand een doel moet vasthouden, afleiding moet weerstaan en een passende handelingsstrategie moet kiezen.",
    },
  },
};

export const glossarySequence: GlossaryTermId[] = [
  "allostatic-load",
  "hpa-axis",
  "glucocorticoids",
  "neuroplasticity",
  "executive-functions",
];

export function getGlossaryTermForLocale(id: GlossaryTermId, locale: Language) {
  return glossaryTerms[id][locale];
}
