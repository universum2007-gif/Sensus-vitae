import type { Language } from "@/lib/site-content";

export type EducationalNewsCategoryId =
  | "psychobiology-neuroscience"
  | "psychology"
  | "genetics-epigenetics"
  | "cognition-behaviour"
  | "research-methods-statistics";

export type EducationalNewsQuestion = {
  question: Record<Language, string>;
  choices: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
};

export type EducationalNewsItem = {
  id: string;
  isDemo: boolean;
  date: string;
  categoryId: EducationalNewsCategoryId;
  category: Record<Language, string>;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  whyThisMatters: Record<Language, string>;
  keyConcepts: Record<Language, string[]>;
  sourceName: string;
  sourceUrl: string;
  doi?: string;
  quiz: EducationalNewsQuestion[];
};

export const demoKeyTermsByLocale: Record<Language, Array<{ id: string; label: string }>> = {
  ru: [
    { id: "allostatic-load", label: "Аллостатическая нагрузка" },
    { id: "hpa-axis", label: "Гипоталамо-гипофизарно-надпочечниковая ось" },
    { id: "glucocorticoids", label: "Глюкокортикоиды" },
  ],
  es: [
    { id: "allostatic-load", label: "Carga alostática" },
    { id: "hpa-axis", label: "Eje hipotálamo-hipófiso-suprarrenal" },
    { id: "glucocorticoids", label: "Glucocorticoides" },
  ],
  en: [
    { id: "allostatic-load", label: "Allostatic load" },
    { id: "hpa-axis", label: "HPA axis" },
    { id: "glucocorticoids", label: "Glucocorticoids" },
  ],
  nl: [
    { id: "allostatic-load", label: "Allostatische belasting" },
    { id: "hpa-axis", label: "HPA-as" },
    { id: "glucocorticoids", label: "Glucocorticoïden" },
  ],
};

export const educationalNewsCategories: Record<Language, Array<{ id: EducationalNewsCategoryId; label: string }>> = {
  ru: [
    { id: "psychobiology-neuroscience", label: "Психобиология / Нейронаука" },
    { id: "psychology", label: "Психология" },
    { id: "genetics-epigenetics", label: "Генетика и эпигенетика" },
    { id: "cognition-behaviour", label: "Когниция и поведение" },
    { id: "research-methods-statistics", label: "Методы исследования и статистика" },
  ],
  es: [
    { id: "psychobiology-neuroscience", label: "Psicobiología / Neurociencia" },
    { id: "psychology", label: "Psicología" },
    { id: "genetics-epigenetics", label: "Genética y epigenética" },
    { id: "cognition-behaviour", label: "Cognición y conducta" },
    { id: "research-methods-statistics", label: "Métodos de investigación y estadística" },
  ],
  en: [
    { id: "psychobiology-neuroscience", label: "Psychobiology / Neuroscience" },
    { id: "psychology", label: "Psychology" },
    { id: "genetics-epigenetics", label: "Genetics & Epigenetics" },
    { id: "cognition-behaviour", label: "Cognition & Behaviour" },
    { id: "research-methods-statistics", label: "Research Methods & Statistics" },
  ],
  nl: [
    { id: "psychobiology-neuroscience", label: "Psychobiologie / Neurowetenschap" },
    { id: "psychology", label: "Psychologie" },
    { id: "genetics-epigenetics", label: "Genetica & epigenetica" },
    { id: "cognition-behaviour", label: "Cognitie & gedrag" },
    { id: "research-methods-statistics", label: "Onderzoeksmethoden & statistiek" },
  ],
};

export const demoEducationalNews: EducationalNewsItem = {
  id: "demo-learning-news-01",
  isDemo: true,
  date: "2026 · demo",
  categoryId: "psychobiology-neuroscience",
  category: {
    ru: "Психобиология / Нейронаука",
    es: "Psicobiología / Neurociencia",
    en: "Psychobiology / Neuroscience",
    nl: "Psychobiologie / Neurowetenschap",
  },
  title: {
    ru: "Демо: как стресс меняет нервную систему и внимание",
    es: "Demo: cómo el estrés cambia el sistema nervioso y la atención",
    en: "Demo: how stress changes the nervous system and attention",
    nl: "Demo: hoe stress het zenuwstelsel en de aandacht verandert",
  },
  summary: {
    ru: "Это демо-элемент для структуры страницы: пример научной новости, объяснённой для обучения, с ключевыми терминами и короткой проверкой знаний.",
    es: "Este es un elemento de demostración para la estructura de la página: un ejemplo de noticia científica explicada para aprender, con términos clave y una pequeña comprobación de conocimientos.",
    en: "This is a demo item for the page structure: an example of a scientific news item explained for learning, with key terms and a short knowledge check.",
    nl: "Dit is een demo-item voor de paginavoorstelling: een voorbeeld van een wetenschappelijk nieuwsitem dat voor leren is uitgelegd, met kernbegrippen en een korte kennischeck.",
  },
  whyThisMatters: {
    ru: "Во время длительного стресса мозг становится более чувствительным к угрозам и менее точным в оценке контекста. Это помогает объяснить, почему усталость и тревога иногда ухудшают внимание и память.",
    es: "Durante el estrés prolongado, el cerebro se vuelve más sensible a las amenazas y menos preciso al evaluar el contexto. Esto ayuda a explicar por qué la fatiga y la ansiedad a veces empeoran la atención y la memoria.",
    en: "During sustained stress, the brain becomes more sensitive to threat and less precise in context evaluation. This helps explain why fatigue and anxiety can sometimes impair attention and memory.",
    nl: "Tijdens langdurige stress wordt de hersenen gevoeliger voor dreiging en minder nauwkeurig in de contextbeoordeling. Dat helpt verklaren waarom vermoeidheid en angst soms aandacht en geheugen verslechteren.",
  },
  keyConcepts: {
    ru: ["Аллостатическая нагрузка", "Гипоталамо-гипофизарно-надпочечниковая ось", "Глюкокортикоиды"],
    es: ["Carga alostática", "Eje hipotálamo-hipófiso-suprarrenal", "Glucocorticoides"],
    en: ["Allostatic load", "HPA axis", "Glucocorticoids"],
    nl: ["Allostatische belasting", "HPA-as", "Glucocorticoïden"],
  },
  sourceName: "Demo scientific source placeholder",
  sourceUrl: "#demo-source",
  doi: "10.0000/demo-news.none",
  quiz: [
    {
      question: {
        ru: "Что из перечисленного лучше описывает роль стресса для внимания?",
        es: "¿Qué opción describe mejor el papel del estrés en la atención?",
        en: "Which statement best describes the role of stress in attention?",
        nl: "Welke uitspraak beschrijft de rol van stress in aandacht het beste?",
      },
      choices: {
        ru: ["Стресс делает внимание более устойчивым в любой ситуации.", "Стресс не влияет на оценку контекста.", "Длительный стресс может уменьшать точность оценки и усиливать реакцию на угрозу.", "Стресс всегда улучшает память."],
        es: ["El estrés hace que la atención sea más estable en cualquier situación.", "El estrés no influye en la evaluación del contexto.", "El estrés prolongado puede reducir la precisión de la evaluación y aumentar la reacción ante la amenaza.", "El estrés siempre mejora la memoria."],
        en: ["Stress makes attention consistently more stable in every situation.", "Stress does not influence context evaluation.", "Sustained stress can reduce evaluation precision and amplify threat response.", "Stress always improves memory."],
        nl: ["Stress maakt aandacht in elke situatie consistent stabieler.", "Stress heeft geen invloed op de contextbeoordeling.", "Langdurige stress kan de beoordelingsnauwkeurigheid verminderen en de dreigingsreactie versterken.", "Stress verbetert altijd het geheugen."],
      },
      correctIndex: 2,
      explanation: {
        ru: "При длительном стрессе вегетативная и нейропсихологическая система может стать более ориентированной на угрозу и менее точной в оценке контекста.",
        es: "Con estrés prolongado, el sistema vegetativo y neuropsicológico puede volverse más orientado a la amenaza y menos preciso al evaluar el contexto.",
        en: "With sustained stress, the autonomic and neuropsychological system can become more threat-oriented and less precise in context evaluation.",
        nl: "Bij langdurige stress kan het autonome en neuropsychologische systeem meer dreigingsgericht worden en minder precies in de contextbeoordeling.",
      },
    },
    {
      question: {
        ru: "Почему важно различать стрессовую реакцию и оценку ситуации?",
        es: "¿Por qué es importante distinguir la reacción al estrés de la evaluación de la situación?",
        en: "Why is it important to distinguish the stress response from situation appraisal?",
        nl: "Waarom is het belangrijk om de stressreactie te onderscheiden van de situatiebeoordeling?",
      },
      choices: {
        ru: ["Потому что реакция всегда одинакова у всех людей.", "Потому что оценка и физиология взаимодействуют: один и тот же стимул может ощущаться по-разному.", "Потому что стресс всегда означает опасность.", "Потому что мозг не обращает внимания на окружающую среду."],
        es: ["Porque la reacción siempre es la misma en todas las personas.", "Porque la evaluación y la fisiología interactúan: el mismo estímulo puede sentirse de forma distinta.", "Porque el estrés siempre significa peligro.", "Porque el cerebro no presta atención al entorno."],
        en: ["Because the response is always the same in all people.", "Because appraisal and physiology interact: the same stimulus may be experienced differently.", "Because stress always means danger.", "Because the brain ignores its environment."],
        nl: ["Omdat de reactie bij iedereen altijd hetzelfde is.", "Omdat beoordeling en fysiologie met elkaar samenhangen: dezelfde prikkel kan verschillend worden ervaren.", "Omdat stress altijd gevaar betekent.", "Omdat de hersenen geen aandacht besteden aan de omgeving."],
      },
      correctIndex: 1,
      explanation: {
        ru: "Оценка ситуации влияет на нейрохимические и поведенческие реакции. То, как человек воспринимает событие, часто определяет, насколько сильна реакция стресса.",
        es: "La evaluación de la situación influye en las reacciones neuroquímicas y conductuales. La forma en que una persona percibe un suceso suele determinar la intensidad de la respuesta al estrés.",
        en: "Appraisal influences neurochemical and behavioural reactions. The way a person interprets an event often shapes the intensity of the stress response.",
        nl: "Beoordeling beïnvloedt neurochemische en gedragsreacties. Hoe iemand een gebeurtenis interpreteert, bepaalt vaak de intensiteit van de stressreactie.",
      },
    },
    {
      question: {
        ru: "Что является хорошей научной и учебной интерпретацией такого материала?",
        es: "¿Qué es una buena interpretación científica y educativa de este tipo de material?",
        en: "What is a good scientific and educational interpretation of this material?",
        nl: "Wat is een goede wetenschappelijke en educatieve interpretatie van dit materiaal?",
      },
      choices: {
        ru: ["Считать, что все объяснения одинаково верны.", "Подчеркивать связь между стрессом, вниманием и контекстом, а не превращать её в универсальное правило.", "Игнорировать ограничения и говорить, что каждая реакция всегда предсказуема.", "Убрать контекст и оставить только одну эмоцию."],
        es: ["Suponer que todas las explicaciones son igualmente válidas.", "Resaltar la conexión entre estrés, atención y contexto, sin convertirla en una regla universal.", "Ignorar las limitaciones y afirmar que cada reacción siempre es predecible.", "Eliminar el contexto y quedarse solo con una emoción."],
        en: ["Assume every explanation is equally valid.", "Highlight the link between stress, attention and context without turning it into a universal rule.", "Ignore the limitations and claim every reaction is always predictable.", "Remove the context and keep only a single emotion."],
        nl: ["Aannemen dat alle verklaringen even geldig zijn.", "De verbinding tussen stress, aandacht en context benadrukken zonder dit om te zetten in een universele regel.", "De beperkingen negeren en stellen dat elke reactie altijd voorspelbaar is.", "De context weglaten en alleen één emotie laten overblijven."],
      },
      correctIndex: 1,
      explanation: {
        ru: "Хорошая образовательная интерпретация удерживает научную осторожность: показывает механизм, объясняет почему это важно и не превращает временную модель в абсолютное правило.",
        es: "Una buena interpretación educativa mantiene la precaución científica: muestra el mecanismo, explica por qué importa y evita convertir un modelo provisional en una regla absoluta.",
        en: "A good educational interpretation keeps scientific caution: it shows the mechanism, explains why it matters, and avoids turning a provisional model into an absolute rule.",
        nl: "Een goede educatieve interpretatie behoudt wetenschappelijke voorzichtigheid: zij laat het mechanisme zien, legt uit waarom het belangrijk is en voorkomt dat een voorlopige model in een absolute regel verandert.",
      },
    },
  ],
};

export const educationalNewsDemoList: EducationalNewsItem[] = [demoEducationalNews];
