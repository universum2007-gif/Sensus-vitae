import type { Language } from "@/lib/site-content";

export type GlossaryTermId =
  | "allostatic-load"
  | "hpa-axis"
  | "glucocorticoids"
  | "neuroplasticity"
  | "glia"
  | "astrocyte"
  | "oligodendrocyte"
  | "microglia"
  | "ependymal-cell"
  | "myelin"
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
  glia: {
    id: "glia",
    ru: {
      term: "Глия",
      shortDefinition: "Глия — это поддерживающие клетки нервной системы, которые помогают нейронам питаться, защищаться и работать в правильной химической среде.",
      extendedDefinition: "Глия не является просто «механической опорой»: она участвует в синапсах, иммунной защите, обмене веществ и поддержании баланса мозга.",
    },
    es: {
      term: "Glía",
      shortDefinition: "La glía es un conjunto de células de soporte del sistema nervioso que ayudan a las neuronas a alimentarse, protegerse y funcionar en un entorno químico adecuado.",
      extendedDefinition: "La glía no es solo un soporte mecánico: también participa en las sinapsis, la defensa inmunitaria, el metabolismo y el equilibrio del cerebro.",
    },
    en: {
      term: "Glia",
      shortDefinition: "Glia are the supporting cells of the nervous system that help neurons receive nutrients, protect themselves and function in the right chemical environment.",
      extendedDefinition: "Glia are not just structural scaffolding: they participate in synapses, immune defense, metabolism and brain balance.",
    },
    nl: {
      term: "Glia",
      shortDefinition: "Glia zijn ondersteunende cellen van het zenuwstelsel die neuronen helpen met voeding, bescherming en een geschikte chemische omgeving.",
      extendedDefinition: "Glia zijn niet alleen een structurele ondersteuning: ze spelen ook een rol bij synapsen, immuunafweer, stofwisseling en het evenwicht van de hersenen.",
    },
  },
  astrocyte: {
    id: "astrocyte",
    ru: {
      term: "Астроцит",
      shortDefinition: "Астроцит — это звёздчатая глиальная клетка, которая помогает поддерживать химическое равновесие вокруг нейронов и синапсов.",
      extendedDefinition: "Астроциты помогают регулировать нейротрансмиттеры, ионы и питание, а также участвуют в работе синапсов и восстановлении после повреждений.",
    },
    es: {
      term: "Astrocito",
      shortDefinition: "Un astrocito es una célula glial estrellada que ayuda a mantener el equilibrio químico alrededor de las neuronas y las sinapsis.",
      extendedDefinition: "Los astrocitos regulan neurotransmisores, iones y nutrientes, y participan en el funcionamiento de las sinapsis y la recuperación tras lesiones.",
    },
    en: {
      term: "Astrocyte",
      shortDefinition: "An astrocyte is a star-shaped glial cell that helps maintain the chemical balance around neurons and synapses.",
      extendedDefinition: "Astrocytes help regulate neurotransmitters, ions and nutrients, and they participate in synaptic function and recovery after injury.",
    },
    nl: {
      term: "Astrocyt",
      shortDefinition: "Een astrocyt is een stervormige gliacel die helpt bij het handhaven van het chemische evenwicht rond neuronen en synapsen.",
      extendedDefinition: "Astrocyten helpen bij de regulering van neurotransmitters, ionen en voedingsstoffen en spelen een rol bij synaptische functie en herstel na schade.",
    },
  },
  oligodendrocyte: {
    id: "oligodendrocyte",
    ru: {
      term: "Олигодендроцит",
      shortDefinition: "Олигодендроцит — это глиальная клетка центральной нервной системы, образующая миелин вокруг аксонов.",
      extendedDefinition: "Миелин, который создаёт олигодендроцит, ускоряет проведение импульсов и помогает защищать аксоны.",
    },
    es: {
      term: "Oligodendrocito",
      shortDefinition: "Un oligodendrocito es una célula glial del sistema nervioso central que forma la mielina alrededor de los axones.",
      extendedDefinition: "La mielina producida por los oligodendrocitos acelera la conducción de impulsos y protege los axones.",
    },
    en: {
      term: "Oligodendrocyte",
      shortDefinition: "An oligodendrocyte is a glial cell of the central nervous system that forms myelin around axons.",
      extendedDefinition: "The myelin it produces speeds up signal conduction and helps protect axons.",
    },
    nl: {
      term: "Oligodendrocyt",
      shortDefinition: "Een oligodendrocyt is een gliacel van het centrale zenuwstelsel die myeline vormt rond axonen.",
      extendedDefinition: "De myeline die het produceert versnelt het signaaltransport en beschermt axonen.",
    },
  },
  microglia: {
    id: "microglia",
    ru: {
      term: "Микроглия",
      shortDefinition: "Микроглия — это иммунные клетки мозга, которые следят за повреждениями и удаляют ненужные элементы.",
      extendedDefinition: "Микроглия помогает поддерживать здоровье нервной ткани и участвует в реакциях на воспаление и повреждение.",
    },
    es: {
      term: "Microglía",
      shortDefinition: "La microglía es un tipo de célula inmunitaria del cerebro que vigila lesiones y elimina elementos innecesarios.",
      extendedDefinition: "La microglía ayuda a mantener la salud del tejido nervioso y participa en respuestas inflamatorias y de reparación.",
    },
    en: {
      term: "Microglia",
      shortDefinition: "Microglia are immune cells of the brain that monitor damage and remove unnecessary material.",
      extendedDefinition: "Microglia help maintain nervous tissue health and participate in inflammation and repair responses.",
    },
    nl: {
      term: "Microgliacellen",
      shortDefinition: "Microgliacellen zijn immuuncellen in de hersenen die schade bewaken en ongewenst materiaal verwijderen.",
      extendedDefinition: "Microgliacellen helpen de gezondheid van zenuwweefsel te behouden en spelen een rol bij ontstekings- en herstelreacties.",
    },
  },
  "ependymal-cell": {
    id: "ependymal-cell",
    ru: {
      term: "Эпендимная клетка",
      shortDefinition: "Эпендимная клетка выстилает желудочки мозга и помогает поддерживать движение спинномозговой жидкости.",
      extendedDefinition: "Эти клетки участвуют в циркуляции жидкости и в поддержании внутренней среды мозга.",
    },
    es: {
      term: "Célula ependimaria",
      shortDefinition: "Una célula ependimaria recubre los ventrículos del cerebro y ayuda a mantener el movimiento del líquido cefalorraquídeo.",
      extendedDefinition: "Estas células participan en la circulación del líquido y en el mantenimiento del entorno interno del cerebro.",
    },
    en: {
      term: "Ependymal cell",
      shortDefinition: "An ependymal cell lines the brain’s ventricles and helps sustain the movement of cerebrospinal fluid.",
      extendedDefinition: "These cells contribute to fluid circulation and help maintain the brain’s internal environment.",
    },
    nl: {
      term: "Ependymcel",
      shortDefinition: "Een ependymcel bekleedt de ventrikels van de hersenen en helpt het bewegen van cerebrospinale vloeistof te ondersteunen.",
      extendedDefinition: "Deze cellen dragen bij aan de circulatie van vloeistof en helpen het interne milieu van de hersenen te behouden.",
    },
  },
  myelin: {
    id: "myelin",
    ru: {
      term: "Миелин",
      shortDefinition: "Миелин — это жирная изолирующая оболочка вокруг некоторых аксонов, которая ускоряет проведение импульсов.",
      extendedDefinition: "Без миелина сигналы проходят медленнее, а аксоны хуже защищены и поддерживаются.",
    },
    es: {
      term: "Mielina",
      shortDefinition: "La mielina es una cubierta grasa aislante alrededor de algunos axones que acelera la conducción de impulsos.",
      extendedDefinition: "Sin mielina, las señales viajan más despacio y los axones quedan peor protegidos y apoyados.",
    },
    en: {
      term: "Myelin",
      shortDefinition: "Myelin is the fatty insulating sheath around some axons that speeds up signal conduction.",
      extendedDefinition: "Without myelin, signals travel more slowly and axons are less protected and supported.",
    },
    nl: {
      term: "Myeline",
      shortDefinition: "Myeline is de vettige isolerende laag rond sommige axonen die de signaalgeleiding versnelt.",
      extendedDefinition: "Zonder myeline reizen signalen langzamer en zijn axonen minder goed beschermd en ondersteund.",
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
  "glia",
  "astrocyte",
  "oligodendrocyte",
  "microglia",
  "ependymal-cell",
  "myelin",
  "executive-functions",
];

export function getGlossaryTermForLocale(id: GlossaryTermId, locale: Language) {
  return glossaryTerms[id][locale];
}
