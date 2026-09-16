import { behaviourGlossary } from "@/lib/behaviour-glossary";
import type { Language } from "@/lib/site-content";

export type GlossaryTermId = keyof typeof behaviourGlossary
  | "allostatic-load"
  | "hpa-axis"
  | "glucocorticoids"
  | "neuroplasticity"
  | "stress-response"
  | "allostasis"
  | "homeostasis"
  | "autonomic-nervous-system"
  | "sympathetic-nervous-system"
  | "parasympathetic-nervous-system"
  | "hypertension"
  | "atherosclerosis"
  | "inflammation"
  | "insulin"
  | "insulin-resistance"
  | "glycogen"
  | "gut-brain-axis"
  | "helicobacter-pylori"
  | "peptic-ulcer"
  | "functional-disorder"
  | "growth-hormone"
  | "early-life-stress"
  | "psychosocial-dwarfism"
  | "maternal-care"
  | "developmental-programming"
  | "reproductive-axis"
  | "hpg-axis"
  | "libido"
  | "testosterone"
  | "prolactin"
  | "psychoneuroimmunology"
  | "immunosuppression"
  | "autoimmunity"
  | "pain-asymbolia"
  | "nociception"
  | "gate-control"
  | "analgesia"
  | "endogenous-opioids"
  | "declarative-memory"
  | "procedural-memory"
  | "hippocampus"
  | "neurogenesis"
  | "slow-wave-sleep"
  | "rem-sleep"
  | "memory-consolidation"
  | "sleep-deprivation"
  | "crh"
  | "glucocorticoid-cascade"
  | "successful-ageing"
  | "hippocampal-feedback"
  | "predictability"
  | "perceived-control"
  | "social-support"
  | "cognitive-appraisal"
  | "anhedonia"
  | "learned-helplessness"
  | "monoamine-system"
  | "anterior-cingulate-cortex"
  | "amygdala"
  | "hostility"
  | "emotional-suppression"
  | "temperament"
  | "dopamine"
  | "tolerance"
  | "opponent-process"
  | "sensation-seeking"
  | "dependence"
  | "social-capital"
  | "socioeconomic-status"
  | "subjective-socioeconomic-status"
  | "inequality"
  | "coping"
  | "cognitive-flexibility"
  | "problem-focused-coping"
  | "emotion-focused-coping"
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
  ...behaviourGlossary,
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
  "stress-response": {
    id: "stress-response",
    ru: { term: "Стрессовая реакция", shortDefinition: "Стрессовая реакция — это быстрый комплекс физиологических и поведенческих изменений, который помогает организму мобилизоваться в ответ на угрозу или требование.", extendedDefinition: "Она включает активацию симпатической нервной системы и гормональные ответы, которые помогают действовать быстро, но при хронической активации могут стать повреждающими." },
    es: { term: "Respuesta de estrés", shortDefinition: "La respuesta de estrés es un conjunto rápido de cambios fisiológicos y conductuales que ayudan al organismo a movilizarse ante una amenaza o exigencia.", extendedDefinition: "Incluye la activación del sistema nervioso simpático y respuestas hormonales que permiten actuar con rapidez, pero que pueden volverse dañinas si se activan de forma crónica." },
    en: { term: "Stress response", shortDefinition: "The stress response is the rapid set of physiological and behavioural changes that help the body mobilise in the face of threat or demand.", extendedDefinition: "It includes activation of the sympathetic nervous system and hormonal responses that help us act quickly, but which can become damaging if they remain chronically engaged." },
    nl: { term: "Stressrespons", shortDefinition: "De stressrespons is een snelle reeks fysiologische en gedragsmatige veranderingen die het lichaam helpen mobiliseren bij dreiging of eisen.", extendedDefinition: "Ze omvat activatie van het sympathische zenuwstelsel en hormonale reacties die snel handelen mogelijk maken, maar die schadelijk kunnen worden als ze chronisch blijven activeren." },
  },
  homeostasis: {
    id: "homeostasis",
    ru: { term: "Гомеостаз", shortDefinition: "Гомеостаз — это поддержание относительно стабильных внутренних условий организма.", extendedDefinition: "Он помогает сохранять оптимальные уровни температуры, кислорода, глюкозы и других параметров в пределах, пригодных для жизни." },
    es: { term: "Homeostasis", shortDefinition: "La homeostasis es el mantenimiento de condiciones internas relativamente estables en el organismo.", extendedDefinition: "Ayuda a conservar niveles óptimos de temperatura, oxígeno, glucosa y otros parámetros dentro de límites compatibles con la vida." },
    en: { term: "Homeostasis", shortDefinition: "Homeostasis is the maintenance of relatively stable internal conditions in the body.", extendedDefinition: "It helps keep variables such as temperature, oxygen, glucose and other states within a viable range for life." },
    nl: { term: "Homeostase", shortDefinition: "Homeostase is het handhaven van relatief stabiele interne condities in het lichaam.", extendedDefinition: "Het helpt variabelen zoals temperatuur, zuurstof, glucose en andere processen binnen een levensvatbare range te houden." },
  },
  allostasis: {
    id: "allostasis",
    ru: { term: "Аллостаз", shortDefinition: "Аллостаз — это процесс активного поддержания внутреннего равновесия за счёт изменяющихся физиологических реакций.", extendedDefinition: "Он позволяет организму адаптироваться к меняющимся условиям, но долгосрочная стоимость такой постоянной адаптации может накапливаться как «аллостатическая нагрузка»." },
    es: { term: "Alostasis", shortDefinition: "La alostasis es el proceso por el cual el organismo mantiene el equilibrio interno mediante cambios fisiológicos dinámicos.", extendedDefinition: "Permite adaptarse a condiciones cambiantes, pero el coste a largo plazo de esa adaptación constante puede acumularse como carga alostática." },
    en: { term: "Allostasis", shortDefinition: "Allostasis is the process by which the body actively maintains stability through changing physiological responses.", extendedDefinition: "It allows adaptation to shifting conditions, but the long-term cost of constant adjustment can accumulate as allostatic load." },
    nl: { term: "Allostase", shortDefinition: "Allostase is het proces waarbij het lichaam actief stabiliteit handhaaft door middel van veranderende fysiologische reacties.", extendedDefinition: "Het maakt aanpassing aan veranderende omstandigheden mogelijk, maar de langetermijnkosten van constante aanpassing kunnen zich ophopen als allostatische belasting." },
  },
  "autonomic-nervous-system": {
    id: "autonomic-nervous-system",
    ru: { term: "Автономная нервная система", shortDefinition: "Автономная нервная система регулирует бессознательные функции организма, такие как дыхание, сердечный ритм и пищеварение.", extendedDefinition: "Её симпатическая часть мобилизует организм при угрозе, а парасимпатическая помогает восстановлению и отдыху." },
    es: { term: "Sistema nervioso autónomo", shortDefinition: "El sistema nervioso autónomo regula funciones involuntarias como la respiración, el ritmo cardíaco y la digestión.", extendedDefinition: "Su rama simpática moviliza al organismo ante una amenaza, mientras que la parasimpática favorece la recuperación y el descanso." },
    en: { term: "Autonomic nervous system", shortDefinition: "The autonomic nervous system regulates involuntary functions like breathing, heart rhythm and digestion.", extendedDefinition: "Its sympathetic branch mobilises the body in response to threat, while the parasympathetic branch supports recovery and rest." },
    nl: { term: "Autonome zenuwstelsel", shortDefinition: "Het autonome zenuwstelsel regelt onvrijwillige functies zoals ademhaling, hartritme en spijsvertering.", extendedDefinition: "Het sympathische deel mobiliseert het lichaam bij dreiging, terwijl het parasympathische deel herstel en rust ondersteunt." },
  },
  "sympathetic-nervous-system": {
    id: "sympathetic-nervous-system",
    ru: { term: "Симпатическая нервная система", shortDefinition: "Симпатическая нервная система мобилизует организм и повышает готовность к действию в ответ на угрозу.", extendedDefinition: "Она ускоряет сердце, повышает артериальное давление и направляет энергию на экстренную активность." },
    es: { term: "Sistema nervioso simpático", shortDefinition: "El sistema nervioso simpático moviliza al organismo y aumenta la preparación para actuar ante una amenaza.", extendedDefinition: "Acelera el corazón, eleva la presión arterial y dirige la energía hacia la actividad inmediata." },
    en: { term: "Sympathetic nervous system", shortDefinition: "The sympathetic nervous system mobilises the body and increases preparedness for action in response to threat.", extendedDefinition: "It speeds the heart, raises blood pressure and directs energy toward immediate action." },
    nl: { term: "Sympathische zenuwstelsel", shortDefinition: "Het sympathische zenuwstelsel mobiliseert het lichaam en verhoogt de paraatheid om te handelen bij dreiging.", extendedDefinition: "Het versnelt het hart, verhoogt de bloeddruk en stuurt energie naar directe activiteit." },
  },
  "parasympathetic-nervous-system": {
    id: "parasympathetic-nervous-system",
    ru: { term: "Парасимпатическая нервная система", shortDefinition: "Парасимпатическая нервная система помогает организму восстанавливаться, успокаиваться и экономить ресурсы.", extendedDefinition: "Она особенно важна для отдыха, пищеварения и снижения физиологической готовности к действию." },
    es: { term: "Sistema nervioso parasimpático", shortDefinition: "El sistema nervioso parasimpático ayuda al organismo a recuperarse, relajarse y ahorrar recursos.", extendedDefinition: "Es especialmente importante para el descanso, la digestión y la reducción de la preparación para la acción." },
    en: { term: "Parasympathetic nervous system", shortDefinition: "The parasympathetic nervous system helps the body recover, relax and conserve resources.", extendedDefinition: "It is especially important for rest, digestion and reducing readiness for action." },
    nl: { term: "Parasympathische zenuwstelsel", shortDefinition: "Het parasympathische zenuwstelsel helpt het lichaam te herstellen, te ontspannen en energie te sparen.", extendedDefinition: "Het is vooral belangrijk voor rust, spijsvertering en vermindering van paraatheid." },
  },
  hypertension: {
    id: "hypertension",
    ru: { term: "Гипертония", shortDefinition: "Гипертония — это хроническое повышение артериального давления.", extendedDefinition: "Она повышает нагрузку на сердце и сосуды и может усиливать риск инфаркта, инсульта и повреждения органов." },
    es: { term: "Hipertensión", shortDefinition: "La hipertensión es un aumento crónico de la presión arterial.", extendedDefinition: "Aumenta la carga sobre el corazón y los vasos, y puede elevar el riesgo de infarto, accidente cerebrovascular y daño orgánico." },
    en: { term: "Hypertension", shortDefinition: "Hypertension is chronic elevation of arterial blood pressure.", extendedDefinition: "It increases strain on the heart and blood vessels and can raise the risk of heart attack, stroke and organ damage." },
    nl: { term: "Hypertensie", shortDefinition: "Hypertensie is chronische verhoging van de bloeddruk.", extendedDefinition: "Het vergroot de belasting op hart en bloedvaten en kan het risico op hartaanval, beroerte en orgaanschade verhogen." },
  },
  atherosclerosis: {
    id: "atherosclerosis",
    ru: { term: "Атеросклероз", shortDefinition: "Атеросклероз — это утолщение и уплотнение артерий из-за накопления жировых отложений и воспаления.", extendedDefinition: "Он повышает риск сужения сосудов, снижения кровотока и сердечно-сосудистых осложнений." },
    es: { term: "Aterosclerosis", shortDefinition: "La aterosclerosis es el engrosamiento y endurecimiento de las arterias por acumulación de depósitos grasos e inflamación.", extendedDefinition: "Aumenta el riesgo de estrechamiento vascular, reducción del flujo sanguíneo y complicaciones cardiovasculares." },
    en: { term: "Atherosclerosis", shortDefinition: "Atherosclerosis is the thickening and hardening of arteries due to fatty deposits and inflammation.", extendedDefinition: "It raises the risk of vessel narrowing, reduced blood flow and cardiovascular complications." },
    nl: { term: "Atherosclerose", shortDefinition: "Atherosclerose is verdikking en verharding van slagaders door vetafzettingen en ontsteking.", extendedDefinition: "Het verhoogt het risico op vernauwing van bloedvaten, verminderde bloedstroom en hart- en vaatcomplicaties." },
  },
  inflammation: {
    id: "inflammation",
    ru: { term: "Воспаление", shortDefinition: "Воспаление — это защитная реакция организма на повреждение, инфекцию или стрессовый сигнал.", extendedDefinition: "Когда эта реакция становится хронической, она может усиливать риск болезни и повреждение тканей." },
    es: { term: "Inflamación", shortDefinition: "La inflamación es la respuesta protectora del organismo ante daño, infección o señal de estrés.", extendedDefinition: "Cuando se vuelve crónica, puede aumentar el riesgo de enfermedad y daño tisular." },
    en: { term: "Inflammation", shortDefinition: "Inflammation is the body’s protective response to injury, infection or stress signalling.", extendedDefinition: "When it becomes chronic, it can increase disease risk and tissue damage." },
    nl: { term: "Ontsteking", shortDefinition: "Ontsteking is de beschermende reactie van het lichaam op schade, infectie of stresssignalen.", extendedDefinition: "Wanneer het chronisch wordt, kan het het risico op ziekte en weefselschade vergroten." },
  },
  insulin: {
    id: "insulin",
    ru: { term: "Инсулин", shortDefinition: "Инсулин — это гормон, который помогает клеткам усваивать глюкозу и регулирует обмен энергии.", extendedDefinition: "Его действие особенно важно при стрессе, питании и поддержании стабильной глюкозы в крови." },
    es: { term: "Insulina", shortDefinition: "La insulina es una hormona que ayuda a las células a utilizar la glucosa y regula el metabolismo energético.", extendedDefinition: "Su acción es especialmente importante durante el estrés, la alimentación y el mantenimiento de la glucosa en sangre." },
    en: { term: "Insulin", shortDefinition: "Insulin is a hormone that helps cells use glucose and regulates energy metabolism.", extendedDefinition: "It is especially important during stress, eating and maintenance of blood-glucose stability." },
    nl: { term: "Insuline", shortDefinition: "Insuline is een hormoon dat cellen helpt glucose te gebruiken en het energiemetabolisme reguleert.", extendedDefinition: "Het is vooral belangrijk tijdens stress, voeding en het handhaven van bloedglucose-stabiliteit." },
  },
  "insulin-resistance": {
    id: "insulin-resistance",
    ru: { term: "Инсулинорезистентность", shortDefinition: "Инсулинорезистентность — это состояние, при котором клетки хуже реагируют на инсулин и хуже усваивают глюкозу.", extendedDefinition: "Оно часто связано с избыточным уровнем метаболического стресса, лишним весом и долговременной нагрузкой на энергетическую систему." },
    es: { term: "Resistencia a la insulina", shortDefinition: "La resistencia a la insulina es un estado en el que las células responden peor a la insulina y utilizan peor la glucosa.", extendedDefinition: "Suele relacionarse con el estrés metabólico crónico, el exceso de peso y la sobrecarga prolongada del sistema energético." },
    en: { term: "Insulin resistance", shortDefinition: "Insulin resistance is a state in which cells respond less well to insulin and use glucose less effectively.", extendedDefinition: "It is often associated with chronic metabolic stress, excess weight and prolonged energy-system strain." },
    nl: { term: "Insulineresistentie", shortDefinition: "Insulineresistentie is een toestand waarin cellen minder goed reageren op insuline en glucose minder effectief gebruiken.", extendedDefinition: "Het hangt vaak samen met chronische metabole stress, overgewicht en langdurige belasting van het energiestelsel." },
  },
  "gut-brain-axis": {
    id: "gut-brain-axis",
    ru: { term: "Ось мозг–кишечник", shortDefinition: "Ось мозг–кишечник — это двусторонняя связь между нервной системой, кишечником и микробиотой.", extendedDefinition: "Стресс, настроение и сигналы кишечника могут влиять друг на друга, что помогает объяснить, почему телесные симптомы зависят от контекста и опыта." },
    es: { term: "Eje intestino-cerebro", shortDefinition: "El eje intestino-cerebro es la conexión bidireccional entre el sistema nervioso, el intestino y la microbiota.", extendedDefinition: "El estrés, el estado de ánimo y las señales del intestino pueden influirse mutuamente, explicando por qué los síntomas corporales dependen del contexto y de la experiencia." },
    en: { term: "Gut–brain axis", shortDefinition: "The gut–brain axis is the two-way connection between the nervous system, the gut and the microbiome.", extendedDefinition: "Stress, mood and gut signals can influence one another, helping explain why bodily symptoms depend on context and experience." },
    nl: { term: "Darm-hersenas", shortDefinition: "De darm-hersenas is de tweerichtingsverbinding tussen het zenuwstelsel, de darmen en de microbiota.", extendedDefinition: "Stress, stemming en darm-signalen kunnen elkaar beïnvloeden, wat verklaart waarom lichamelijke klachten afhangen van context en ervaring." },
  },
  glycogen: {
    id: "glycogen",
    ru: { term: "Гликоген", shortDefinition: "Гликоген — это форма хранения глюкозы, которую организм может быстро мобилизовать при необходимости.", extendedDefinition: "Он важен для краткосрочной энергии, особенно во время угрозы или физической активности." },
    es: { term: "Glucógeno", shortDefinition: "El glucógeno es la forma de almacenamiento de glucosa que el organismo puede movilizar rápidamente cuando lo necesita.", extendedDefinition: "Es importante para la energía a corto plazo, especialmente durante una amenaza o la actividad física." },
    en: { term: "Glycogen", shortDefinition: "Glycogen is the stored form of glucose that the body can mobilise quickly when needed.", extendedDefinition: "It is important for short-term energy, especially during threat or physical activity." },
    nl: { term: "Glycogeen", shortDefinition: "Glycogeen is de opgeslagen vorm van glucose die het lichaam snel kan mobiliseren wanneer dat nodig is.", extendedDefinition: "Het is belangrijk voor korte-termijnenergie, vooral bij dreiging of lichamelijke activiteit." },
  },
  "helicobacter-pylori": {
    id: "helicobacter-pylori",
    ru: { term: "Helicobacter pylori", shortDefinition: "Helicobacter pylori — бактерия, которая может повреждать слизистую оболочку желудка и повышать риск язвы.", extendedDefinition: "Её значение в объяснении язвы состоит в том, что стресс может усиливать уязвимость, но не является единственной причиной." },
    es: { term: "Helicobacter pylori", shortDefinition: "Helicobacter pylori es una bacteria que puede dañar la mucosa gástrica y aumentar el riesgo de úlceras.", extendedDefinition: "Su importancia en la úlcera muestra que el estrés puede aumentar la vulnerabilidad sin ser la causa única." },
    en: { term: "Helicobacter pylori", shortDefinition: "Helicobacter pylori is a bacterium that can damage the stomach lining and increase ulcer risk.", extendedDefinition: "Its role in ulcer disease shows that stress can increase vulnerability without being the sole cause." },
    nl: { term: "Helicobacter pylori", shortDefinition: "Helicobacter pylori is een bacterie die de maagwand kan beschadigen en het risico op maagzweren vergroot.", extendedDefinition: "De rol ervan laat zien dat stress de kwetsbaarheid kan verhogen zonder de enige oorzaak te zijn." },
  },
  "peptic-ulcer": {
    id: "peptic-ulcer",
    ru: { term: "Пептическая язва", shortDefinition: "Пептическая язва — это повреждение слизистой оболочки желудка или двенадцатиперстной кишки.", extendedDefinition: "Её развитие зависит от взаимодействия защитных механизмов, воспаления и факторов инфекции или стресса." },
    es: { term: "Úlcera péptica", shortDefinition: "La úlcera péptica es una lesión de la mucosa del estómago o del duodeno.", extendedDefinition: "Su aparición depende de la interacción entre mecanismos de defensa, inflamación y factores infecciosos o de estrés." },
    en: { term: "Peptic ulcer", shortDefinition: "A peptic ulcer is a lesion in the stomach or duodenal lining.", extendedDefinition: "Its development depends on the interaction between protective mechanisms, inflammation and infection or stress-related vulnerability." },
    nl: { term: "Maagzweer", shortDefinition: "Een maagzweer is een beschadiging van het slijmvlies van de maag of twaalfvingerige darm.", extendedDefinition: "De ontwikkeling hangt af van de interactie tussen beschermingsmechanismen, ontsteking en infectieuze of stressgerelateerde kwetsbaarheid." },
  },
  "functional-disorder": {
    id: "functional-disorder",
    ru: { term: "Функциональное расстройство", shortDefinition: "Функциональное расстройство — это состояние, при котором организм нормально функционирует в биологическом смысле, но испытывает неприятные симптомы при определённых условиях.", extendedDefinition: "Оно показывает, что тело и мозг не действуют как простая машина: симптомы зависят от контекста, стресса, ожиданий и нервной регуляции." },
    es: { term: "Trastorno funcional", shortDefinition: "Un trastorno funcional es un estado en el que el cuerpo funciona de forma bioquímica normal, pero experimenta síntomas molestos en determinadas condiciones.", extendedDefinition: "Muestra que el cuerpo y el cerebro no actúan como una máquina simple: los síntomas dependen del contexto, el estrés, las expectativas y la regulación nerviosa." },
    en: { term: "Functional disorder", shortDefinition: "A functional disorder is a condition in which the body functions biologically normally but still produces troublesome symptoms in certain conditions.", extendedDefinition: "It shows that the body and brain do not act like a simple machine: symptoms depend on context, stress, expectations and neural regulation." },
    nl: { term: "Functionele stoornis", shortDefinition: "Een functionele stoornis is een toestand waarbij het lichaam biologisch normaal functioneert maar toch klachten geeft onder bepaalde omstandigheden.", extendedDefinition: "Het laat zien dat lichaam en brein niet als een simpele machine werken: klachten hangen af van context, stress, verwachtingen en neurale regulatie." },
  },
  "growth-hormone": {
    id: "growth-hormone",
    ru: { term: "Гормон роста", shortDefinition: "Гормон роста помогает регулировать рост, восстановление и использование энергии.", extendedDefinition: "Его продукция и действие могут снижаться при хроническом стрессе, особенно в раннем развитии." },
    es: { term: "Hormona del crecimiento", shortDefinition: "La hormona del crecimiento ayuda a regular el crecimiento, la reparación y el uso de la energía.", extendedDefinition: "Su producción y su acción pueden disminuir con el estrés crónico, especialmente durante el desarrollo temprano." },
    en: { term: "Growth hormone", shortDefinition: "Growth hormone helps regulate growth, repair and energy use.", extendedDefinition: "Its production and action can be reduced by chronic stress, especially during early development." },
    nl: { term: "Groeihormoon", shortDefinition: "Groeihormoon helpt bij de regulering van groei, herstel en energiegebruik.", extendedDefinition: "De productie en werking ervan kunnen afnemen bij chronische stress, vooral in de vroege ontwikkeling." },
  },
  "early-life-stress": {
    id: "early-life-stress",
    ru: { term: "Ранний стресс", shortDefinition: "Ранний стресс относится к длительному напряжению, пережитому в детстве или раннем развитии.", extendedDefinition: "Он может изменить чувствительность к стрессу, развитие мозга и физиологические системы на всю жизнь." },
    es: { term: "Estrés temprano", shortDefinition: "El estrés temprano se refiere a la tensión prolongada vivida durante la infancia o las primeras etapas del desarrollo.", extendedDefinition: "Puede alterar la sensibilidad al estrés, el desarrollo cerebral y los sistemas fisiológicos a lo largo de la vida." },
    en: { term: "Early-life stress", shortDefinition: "Early-life stress refers to prolonged stress experienced in childhood or early development.", extendedDefinition: "It can alter stress sensitivity, brain development and physiological systems over the life course." },
    nl: { term: "Vroegstress", shortDefinition: "Vroegstress verwijst naar langdurige stress die in de kindertijd of vroege ontwikkeling wordt ervaren.", extendedDefinition: "Het kan de stressgevoeligheid, hersenontwikkeling en fysiologische systemen gedurende het hele leven veranderen." },
  },
  "psychosocial-dwarfism": {
    id: "psychosocial-dwarfism",
    ru: { term: "Психосоциальный нанизм", shortDefinition: "Психосоциальный нанизм — это замедление роста, связанное с тяжелым эмоциональным стрессом, тревогой и недостатком заботы.", extendedDefinition: "Он показывает, что рост зависит не только от питания, но и от эмоционального и социального контекста развития." },
    es: { term: "Enanismo psicosocial", shortDefinition: "El enanismo psicosocial es un retraso del crecimiento asociado a estrés emocional intenso, ansiedad y falta de cuidado.", extendedDefinition: "Muestra que el crecimiento depende no solo de la nutrición, sino también del contexto emocional y social del desarrollo." },
    en: { term: "Psychosocial dwarfism", shortDefinition: "Psychosocial dwarfism is a growth delay associated with severe emotional stress, anxiety and lack of care.", extendedDefinition: "It shows that growth depends not only on nutrition, but also on the emotional and social context of development." },
    nl: { term: "Psychosociale dwerggroei", shortDefinition: "Psychosociale dwerggroei is een groeivertraging die samenhangt met ernstige emotionele stress, angst en gebrek aan zorg.", extendedDefinition: "Het laat zien dat groei niet alleen van voeding afhangt, maar ook van de emotionele en sociale context van ontwikkeling." },
  },
  "maternal-care": {
    id: "maternal-care",
    ru: { term: "Материнская забота", shortDefinition: "Материнская забота включает телесный контакт, успокоение, эмоциональную безопасность и регулярное участие в заботе.", extendedDefinition: "В главе она выступает как биологически важный фактор нормального развития и регуляции стресса." },
    es: { term: "Cuidado materno", shortDefinition: "El cuidado materno incluye contacto físico, calma, seguridad emocional y participación regular en la atención.", extendedDefinition: "En el capítulo aparece como un factor biológicamente importante para un desarrollo normal y una regulación adecuada del estrés." },
    en: { term: "Maternal care", shortDefinition: "Maternal care includes physical contact, soothing, emotional safety and regular involvement in caregiving.", extendedDefinition: "In the chapter it appears as a biologically important factor for healthy development and stress regulation." },
    nl: { term: "Moederlijke zorg", shortDefinition: "Moederlijke zorg omvat lichamelijk contact, troost, emotionele veiligheid en regelmatige betrokkenheid bij verzorging.", extendedDefinition: "In het hoofdstuk verschijnt het als een biologisch belangrijk factor voor gezonde ontwikkeling en stressregulatie." },
  },
  "developmental-programming": {
    id: "developmental-programming",
    ru: { term: "Развивающее программирование", shortDefinition: "Развивающее программирование — это процесс, при котором раннее воздействие среды изменяет физиологическое устройство организма.", extendedDefinition: "В главе оно объясняет, как ранний опыт может влиять на метаболизм, реакцию на стресс и дальнейшее развитие." },
    es: { term: "Programación del desarrollo", shortDefinition: "La programación del desarrollo es un proceso por el cual las influencias tempranas del entorno alteran la organización fisiológica del organismo.", extendedDefinition: "En el capítulo explica cómo la experiencia temprana puede afectar al metabolismo, la respuesta al estrés y el desarrollo posterior." },
    en: { term: "Developmental programming", shortDefinition: "Developmental programming is the process by which early environmental influences alter the organism’s physiological organization.", extendedDefinition: "In the chapter it explains how early experience can affect metabolism, stress reactivity and later development." },
    nl: { term: "Ontwikkelingsprogrammering", shortDefinition: "Ontwikkelingsprogrammering is het proces waarbij vroege omgevingsinvloeden de fysiologische organisatie van het organisme veranderen.", extendedDefinition: "In het hoofdstuk legt het uit hoe vroege ervaringen metabolisme, stressreactiviteit en latere ontwikkeling kunnen beïnvloeden." },
  },
  "reproductive-axis": {
    id: "reproductive-axis",
    ru: { term: "Репродуктивная ось", shortDefinition: "Репродуктивная ось регулирует гормональные сигналы, связанные с размножением и фертильностью.", extendedDefinition: "Её работа чувствительна к стрессу, питанию, уровню безопасности и общей физической нагрузке." },
    es: { term: "Eje reproductivo", shortDefinition: "El eje reproductivo regula las señales hormonales relacionadas con la reproducción y la fertilidad.", extendedDefinition: "Su funcionamiento es sensible al estrés, la alimentación, el nivel de seguridad y la carga física general." },
    en: { term: "Reproductive axis", shortDefinition: "The reproductive axis regulates hormonal signals related to reproduction and fertility.", extendedDefinition: "Its function is sensitive to stress, nutrition, safety and overall physical load." },
    nl: { term: "Voortplantingsas", shortDefinition: "De voortplantingsas reguleert hormonale signalen die verband houden met voortplanting en vruchtbaarheid.", extendedDefinition: "De werking ervan is gevoelig voor stress, voeding, veiligheid en totale fysieke belasting." },
  },
  "hpg-axis": {
    id: "hpg-axis",
    ru: { term: "Гипоталамо-гипофизарно-гонадная ось", shortDefinition: "Гипоталамо-гипофизарно-гонадная ось регулирует гормоны, связанные с размножением и половым развитием.", extendedDefinition: "Она особенно чувствительна к стрессу, энергетическому балансу и контексту безопасности." },
    es: { term: "Eje hipotálamo-hipófiso-gonadal", shortDefinition: "El eje hipotálamo-hipófiso-gonadal regula las hormonas relacionadas con la reproducción y el desarrollo sexual.", extendedDefinition: "Es especialmente sensible al estrés, al balance energético y al contexto de seguridad." },
    en: { term: "HPG axis", shortDefinition: "The HPG axis regulates hormones related to reproduction and sexual development.", extendedDefinition: "It is especially sensitive to stress, energy balance and the context of safety." },
    nl: { term: "HPG-as", shortDefinition: "De HPG-as reguleert hormonen die verband houden met voortplanting en seksuele ontwikkeling.", extendedDefinition: "Het is bijzonder gevoelig voor stress, energiebalans en de context van veiligheid." },
  },
  libido: {
    id: "libido",
    ru: { term: "Либидо", shortDefinition: "Либидо — это сексуальное влечение или мотивация, связанная с репродуктивным поведением.", extendedDefinition: "Его интенсивность зависит от гормонального баланса, контекста, безопасности и психологического состояния." },
    es: { term: "L libido", shortDefinition: "La libido es el deseo sexual o la motivación ligada al comportamiento reproductivo.", extendedDefinition: "Su intensidad depende del equilibrio hormonal, el contexto, la seguridad y el estado psicológico." },
    en: { term: "Libido", shortDefinition: "Libido is sexual desire or motivation associated with reproductive behaviour.", extendedDefinition: "Its intensity depends on hormonal balance, context, safety and psychological state." },
    nl: { term: "Libido", shortDefinition: "Libido is seksueel verlangen of motivatie die verband houdt met reproductief gedrag.", extendedDefinition: "De intensiteit hangt af van hormonale balans, context, veiligheid en psychologische toestand." },
  },
  testosterone: {
    id: "testosterone",
    ru: { term: "Тестостерон", shortDefinition: "Тестостерон — мужской половой гормон, участвующий в репродукции, мышечной массе и агрессии/мотивации.", extendedDefinition: "При стрессе его синтез часто падает, потому что организм перераспределяет ресурсы от долгосрочного воспроизводства к немедленной выживанию." },
    es: { term: "Testosterona", shortDefinition: "La testosterona es una hormona sexual masculina que participa en la reproducción, la masa muscular y la motivación/hostilidad.", extendedDefinition: "Durante el estrés, su síntesis suele caer porque el organismo redistribuye recursos del mantenimiento reproductivo a la supervivencia inmediata." },
    en: { term: "Testosterone", shortDefinition: "Testosterone is a male sex hormone involved in reproduction, muscle mass and motivation/aggression.", extendedDefinition: "During stress it often declines because the body reallocates resources from long-term reproduction toward immediate survival." },
    nl: { term: "Testosteron", shortDefinition: "Testosteron is een mannelijk geslachtshormoon dat betrokken is bij voortplanting, spiermassa en motivatie/agressie.", extendedDefinition: "Tijdens stress daalt het vaak, omdat het lichaam energie herverdeelt van langdurige voortplanting naar onmiddellijke overleving." },
  },
  prolactin: {
    id: "prolactin",
    ru: { term: "Пролактин", shortDefinition: "Пролактин — гормон, который влияет на лактацию, репродуктивную функцию и стрессовую регуляцию.", extendedDefinition: "Он усиливается в условиях стресса и может подавлять репродуктивную функцию, особенно когда ресурсы ограничены." },
    es: { term: "Prolactina", shortDefinition: "La prolactina es una hormona implicada en la lactancia, la función reproductiva y la regulación del estrés.", extendedDefinition: "Se eleva en situaciones de estrés y puede suprimir la función reproductiva cuando los recursos son limitados." },
    en: { term: "Prolactin", shortDefinition: "Prolactin is a hormone involved in lactation, reproductive function and stress regulation.", extendedDefinition: "It rises under stress and can suppress reproductive function when resources are limited." },
    nl: { term: "Prolactine", shortDefinition: "Prolactine is een hormoon betrokken bij lactatie, voortplantingsfunctie en stressregulatie.", extendedDefinition: "Het stijgt bij stress en kan de voortplantingsfunctie onderdrukken wanneer middelen beperkt zijn." },
  },
  "psychoneuroimmunology": {
    id: "psychoneuroimmunology",
    ru: { term: "Психонейроиммунология", shortDefinition: "Психонейроиммунология изучает, как психика, нервная система и иммунная система взаимодействуют друг с другом.", extendedDefinition: "Она помогает объяснить, как стресс, настроение и социальный контекст влияют на иммунную регуляцию." },
    es: { term: "Psiconeuroinmunología", shortDefinition: "La psiconeuroinmunología estudia cómo interactúan la mente, el sistema nervioso y el sistema inmunitario.", extendedDefinition: "Ayuda a explicar cómo el estrés, el estado de ánimo y el contexto social influyen en la regulación inmune." },
    en: { term: "Psychoneuroimmunology", shortDefinition: "Psychoneuroimmunology studies how the mind, nervous system and immune system interact.", extendedDefinition: "It helps explain how stress, mood and social context influence immune regulation." },
    nl: { term: "Psycho-neuro-immunologie", shortDefinition: "Psycho-neuro-immunologie bestudeert hoe geest, zenuwstelsel en immuunsysteem met elkaar interacteren.", extendedDefinition: "Het helpt verklaren hoe stress, stemming en sociale context de immuunregulatie beïnvloeden." },
  },
  "immunosuppression": {
    id: "immunosuppression",
    ru: { term: "Иммуносупрессия", shortDefinition: "Иммуносупрессия — это снижение или торможение активности иммунной системы после её мобилизации.", extendedDefinition: "Она может защищать от чрезмерной реакции, но при хроническом стрессе также повышает риск инфекций и снижения контроля над иммунитетом." },
    es: { term: "Inmunosupresión", shortDefinition: "La inmunosupresión es la reducción o inhibición de la actividad del sistema inmunitario tras su movilización.", extendedDefinition: "Puede proteger frente a una respuesta exagerada, pero con estrés crónico también aumenta el riesgo de infecciones y pérdida de control inmunitario." },
    en: { term: "Immunosuppression", shortDefinition: "Immunosuppression is the reduction or inhibition of immune activity after it has been mobilised.", extendedDefinition: "It can protect against an excessive response, but with chronic stress it also raises the risk of infection and weakened immune control." },
    nl: { term: "Immunosuppressie", shortDefinition: "Immunosuppressie is de verlaging of remming van de activiteit van het immuunsysteem na mobilisatie.", extendedDefinition: "Het kan beschermen tegen een overmatige reactie, maar bij chronische stress vergroot het ook het risico op infecties en verlies van immuuncontrole." },
  },
  autoimmunity: {
    id: "autoimmunity",
    ru: { term: "Аутоиммунность", shortDefinition: "Аутоиммунность — это состояние, при котором иммунная система начинает атаковать собственные ткани организма.", extendedDefinition: "В главе она рассматривается как риск, возникающий, когда система защиты не успевает вовремя выключаться после угрозы." },
    es: { term: "Autoinmunidad", shortDefinition: "La autoinmunidad es una situación en la que el sistema inmunitario ataca tejidos propios del organismo.", extendedDefinition: "En el capítulo se considera un riesgo cuando la respuesta protectora no se apaga a tiempo tras la amenaza." },
    en: { term: "Autoimmunity", shortDefinition: "Autoimmunity is a state in which the immune system attacks the body’s own tissues.", extendedDefinition: "In the chapter it is treated as a risk when the protective response fails to shut down in time after threat." },
    nl: { term: "Auto-immuniteit", shortDefinition: "Auto-immuniteit is een toestand waarin het immuunsysteem eigen weefsels van het lichaam aanvalt.", extendedDefinition: "In het hoofdstuk wordt dit gezien als een risico wanneer de beschermende reactie na dreiging niet op tijd stopt." },
  },
  "pain-asymbolia": {
    id: "pain-asymbolia",
    ru: { term: "Асимболия боли", shortDefinition: "Асимболия боли — это нарушение, при котором боль может восприниматься как сигнал, но теряет привычное эмоциональное и мотивационное значение.", extendedDefinition: "В главе она используется для демонстрации того, насколько боль важна как предупреждающий сигнал о повреждении." },
    es: { term: "Asimbolia del dolor", shortDefinition: "La asimbolia del dolor es un trastorno en el que el dolor puede ser percibido, pero pierde su significado emocional y motivacional habitual.", extendedDefinition: "En el capítulo se usa para mostrar cuán importante es el dolor como señal de advertencia de daño." },
    en: { term: "Pain asymbolia", shortDefinition: "Pain asymbolia is a condition in which pain may be felt but its usual emotional and motivational meaning is altered or reduced.", extendedDefinition: "In the chapter it is used to show how important pain is as a warning signal about bodily harm." },
    nl: { term: "Pijnasymbolie", shortDefinition: "Pijnasymbolie is een toestand waarin pijn wel kan worden ervaren, maar de gebruikelijke emotionele en motiverende betekenis vermindert of verdwijnt.", extendedDefinition: "In het hoofdstuk wordt het gebruikt om te laten zien hoe belangrijk pijn is als waarschuwingssignaal voor lichamelijk letsel." },
  },
  nociception: {
    id: "nociception",
    ru: { term: "Ноцицепция", shortDefinition: "Ноцицепция — это восприятие и передача сигналов о повреждении, потенциально вредных для организма.", extendedDefinition: "Она обеспечивает базовый вход боли, который затем интерпретируется в контексте мозга, эмоций и среды." },
    es: { term: "Nocicepción", shortDefinition: "La nocicepción es la percepción y transmisión de señales de daño potencialmente perjudicial para el organismo.", extendedDefinition: "Proporciona la entrada básica del dolor, que luego el cerebro interpreta según el contexto, las emociones y el entorno." },
    en: { term: "Nociception", shortDefinition: "Nociception is the detection and transmission of signals indicating potential tissue damage.", extendedDefinition: "It provides the basic input of pain, which the brain then interprets in context with emotions and environment." },
    nl: { term: "Nociceptie", shortDefinition: "Nociceptie is de detectie en doorvoer van signalen die potentieel weefselbeschadiging aangeven.", extendedDefinition: "Het levert de basale input van pijn, die de hersenen vervolgens interpreteren in context van emoties en omgeving." },
  },
  "gate-control": {
    id: "gate-control",
    ru: { term: "Воротный контроль боли", shortDefinition: "Воротный контроль боли — это идея о том, что сигналы боли могут ослабляться или усиливаться на уровне спинного мозга.", extendedDefinition: "Эта модель объясняет, почему массаж, растирание и другие сенсорные входы могут кратко уменьшать ощущение боли." },
    es: { term: "Teoría del control de compuerta", shortDefinition: "La teoría del control de compuerta propone que la señal del dolor puede ser atenuada o reforzada en la médula espinal.", extendedDefinition: "Explica por qué el masaje, la fricción y otras entradas sensoriales pueden reducir brevemente la sensación de dolor." },
    en: { term: "Gate control theory", shortDefinition: "Gate control theory proposes that pain signals can be dampened or amplified at the level of the spinal cord.", extendedDefinition: "It explains why rubbing an injury or other sensory input can briefly reduce pain perception." },
    nl: { term: "Poortheorie", shortDefinition: "De poortheorie stelt dat pijnsignalen op het niveau van het ruggenmerg kunnen worden verzwakt of versterkt.", extendedDefinition: "Het verklaart waarom wrijven, masseren of andere sensorische input pijn tijdelijk kan verminderen." },
  },
  analgesia: {
    id: "analgesia",
    ru: { term: "Анальгезия", shortDefinition: "Анальгезия — это временное ослабление боли, возникающее при остром стрессе или действии обезболивающих механизмов.", extendedDefinition: "В главе она связана с эндогенными опиоидами и стрессовой реакцией на угрозу." },
    es: { term: "Analgesia", shortDefinition: "La analgesia es la reducción temporal del dolor que ocurre durante el estrés agudo o por mecanismos analgésicos.", extendedDefinition: "En el capítulo está vinculada a los opioides endógenos y a la reacción de estrés ante la amenaza." },
    en: { term: "Analgesia", shortDefinition: "Analgesia is the temporary reduction of pain that occurs during acute stress or through analgesic mechanisms.", extendedDefinition: "In the chapter it is linked to endogenous opioids and the stress response to danger." },
    nl: { term: "Analgesie", shortDefinition: "Analgesie is de tijdelijke afname van pijn die optreedt tijdens acute stress of via pijnstillende mechanismen.", extendedDefinition: "In het hoofdstuk is het verbonden met endogene opioïden en de stressreactie op gevaar." },
  },
  "endogenous-opioids": {
    id: "endogenous-opioids",
    ru: { term: "Эндогенные опиоиды", shortDefinition: "Эндогенные опиоиды — это собственные болеутоляющие сигнальные молекулы организма.", extendedDefinition: "Они участвуют в кратковременной анальгезии при угрозе, спорте и других ситуациях повышенной мобилизации." },
    es: { term: "Opioides endógenos", shortDefinition: "Los opioides endógenos son moléculas analgésicas producidas por el propio organismo.", extendedDefinition: "Participan en la analgesia temporal durante la amenaza, el ejercicio y otras situaciones de gran movilización." },
    en: { term: "Endogenous opioids", shortDefinition: "Endogenous opioids are the body’s own pain-relieving molecules.", extendedDefinition: "They participate in temporary analgesia during threat, exertion and other highly mobilising situations." },
    nl: { term: "Endogene opioïden", shortDefinition: "Endogene opioïden zijn de eigen pijnstillende moleculen van het lichaam.", extendedDefinition: "Ze spelen een rol bij tijdelijke analgesie tijdens dreiging, inspanning en andere situaties van hoge mobilisatie." },
  },
  "declarative-memory": {
    id: "declarative-memory",
    ru: { term: "Декларативная память", shortDefinition: "Декларативная память — это память о фактах, событиях, именах и знаниях, которые можно явно воспроизвести.", extendedDefinition: "Её особенно затрагивает стресс, потому что она зависит от гиппокампа и контекста памяти." },
    es: { term: "Memoria declarativa", shortDefinition: "La memoria declarativa es la memoria de hechos, eventos, nombres y conocimientos que pueden recordarse de forma explícita.", extendedDefinition: "Es especialmente sensible al estrés porque depende del hipocampo y del contexto de la memoria." },
    en: { term: "Declarative memory", shortDefinition: "Declarative memory is memory for facts, events, names and knowledge that can be explicitly recalled.", extendedDefinition: "It is particularly sensitive to stress because it depends on the hippocampus and contextual encoding." },
    nl: { term: "Declaratief geheugen", shortDefinition: "Declaratief geheugen is geheugen voor feiten, gebeurtenissen, namen en kennis die expliciet kunnen worden herinnerd.", extendedDefinition: "Het is bijzonder gevoelig voor stress omdat het afhangt van de hippocampus en contextuele codering." },
  },
  "procedural-memory": {
    id: "procedural-memory",
    ru: { term: "Процедурная память", shortDefinition: "Процедурная память — это память о навыках, привычных действиях и моторных паттернах.", extendedDefinition: "В отличие от декларативной памяти, она часто менее подвержена осознанному воспроизведению, но важна для повседневных действий." },
    es: { term: "Memoria procedimental", shortDefinition: "La memoria procedimental es la memoria de habilidades, hábitos y patrones motores.", extendedDefinition: "A diferencia de la memoria declarativa, suele ser menos accesible a la reproducción explícita, pero es crucial para la acción cotidiana." },
    en: { term: "Procedural memory", shortDefinition: "Procedural memory is memory for skills, habits and motor patterns.", extendedDefinition: "Unlike declarative memory, it is less available to explicit recall but crucial for everyday action." },
    nl: { term: "Procedureel geheugen", shortDefinition: "Procedureel geheugen is geheugen voor vaardigheden, gewoonten en motorische patronen.", extendedDefinition: "In tegenstelling tot declaratief geheugen is het minder toegankelijk voor expliciet herinneren, maar belangrijk voor dagelijks handelen." },
  },
  hippocampus: {
    id: "hippocampus",
    ru: { term: "Гиппокамп", shortDefinition: "Гиппокамп — ключевая структура мозга, связанная с формированием, хранением и извлечением эпизодической памяти.", extendedDefinition: "Он также участвует в регуляции стресса и является особенно чувствительным к хронической глюкокортикоидной нагрузке." },
    es: { term: "Hipocampo", shortDefinition: "El hipocampo es una estructura cerebral clave para la formación, el almacenamiento y la recuperación de la memoria episódica.", extendedDefinition: "También participa en la regulación del estrés y es especialmente sensible a la carga crónica de glucocorticoides." },
    en: { term: "Hippocampus", shortDefinition: "The hippocampus is a key brain structure involved in the formation, storage and retrieval of episodic memory.", extendedDefinition: "It also participates in stress regulation and is especially sensitive to chronic glucocorticoid burden." },
    nl: { term: "Hippocampus", shortDefinition: "De hippocampus is een belangrijke hersenstructuur betrokken bij de vorming, opslag en terugroeping van episodisch geheugen.", extendedDefinition: "Het participeert ook in stressregulatie en is bijzonder gevoelig voor chronische glucocorticoïde belasting." },
  },
  neurogenesis: {
    id: "neurogenesis",
    ru: { term: "Нейрогенез", shortDefinition: "Нейрогенез — это образование новых нейронов, особенно в гиппокампе.", extendedDefinition: "Он чувствителен к стрессу и глюкокортикоидам, которые могут подавлять этот процесс." },
    es: { term: "Neurogénesis", shortDefinition: "La neurogénesis es la formación de nuevas neuronas, especialmente en el hipocampo.", extendedDefinition: "Es sensible al estrés y a los glucocorticoides, que pueden inhibir este proceso." },
    en: { term: "Neurogenesis", shortDefinition: "Neurogenesis is the birth of new neurons, especially in the hippocampus.", extendedDefinition: "It is sensitive to stress and glucocorticoids, which can suppress the process." },
    nl: { term: "Neurogenese", shortDefinition: "Neurogenese is de vorming van nieuwe neuronen, vooral in de hippocampus.", extendedDefinition: "Het is gevoelig voor stress en glucocorticoïden, die dit proces kunnen onderdrukken." },
  },
  "slow-wave-sleep": {
    id: "slow-wave-sleep",
    ru: { term: "Медленноволновой сон", shortDefinition: "Медленноволновой сон — это глубокая фаза сна, связанная с восстановлением и снижением нервной активности.", extendedDefinition: "Она особенно важна для восполнения энергии, восстановления и консолидации памяти." },
    es: { term: "Sueño de ondas lentas", shortDefinition: "El sueño de ondas lentas es una fase profunda del sueño asociada a la recuperación y a la reducción de la actividad neuronal.", extendedDefinition: "Es especialmente importante para reponer energía, restaurarse y consolidar la memoria." },
    en: { term: "Slow-wave sleep", shortDefinition: "Slow-wave sleep is the deep phase of sleep associated with recovery and reduced neural activity.", extendedDefinition: "It is especially important for restoring energy, recovery and memory consolidation." },
    nl: { term: "Slow-wave-slaap", shortDefinition: "Slow-wave-slaap is de diepe slaapfase die geassocieerd is met herstel en verminderde neurale activiteit.", extendedDefinition: "Het is vooral belangrijk voor energievoorziening, herstel en geheugenconsolidatie." },
  },
  "rem-sleep": {
    id: "rem-sleep",
    ru: { term: "REM-сон", shortDefinition: "REM-сон — это фаза сна, связанная со сновидениями, эмоциональной обработкой и повышенной мозговой активностью.", extendedDefinition: "Её структура контрастирует с медленноволновым сном и особенно важна для эмоциональной и когнитивной интеграции." },
    es: { term: "Sueño REM", shortDefinition: "El sueño REM es una fase del sueño asociada a los sueños, el procesamiento emocional y la intensa actividad cerebral.", extendedDefinition: "Su patrón contrasta con el sueño de ondas lentas y es especialmente importante para la integración emocional y cognitiva." },
    en: { term: "REM sleep", shortDefinition: "REM sleep is the sleep phase associated with dreaming, emotional processing and high brain activity.", extendedDefinition: "Its pattern contrasts with slow-wave sleep and is especially important for emotional and cognitive integration." },
    nl: { term: "REM-slaap", shortDefinition: "REM-slaap is de slaapfase die geassocieerd is met dromen, emotionele verwerking en hoge hersenactiviteit.", extendedDefinition: "Het patroon contrasteert met slow-wave-slaap en is vooral belangrijk voor emotionele en cognitieve integratie." },
  },
  "memory-consolidation": {
    id: "memory-consolidation",
    ru: { term: "Консолидация памяти", shortDefinition: "Консолидация памяти — это процесс стабилизации и укрепления новых воспоминаний после обучения.", extendedDefinition: "Сон, особенно глубокий и REM, играет важную роль в этом процессе." },
    es: { term: "Consolidación de la memoria", shortDefinition: "La consolidación de la memoria es el proceso de estabilización y fortalecimiento de nuevos recuerdos tras el aprendizaje.", extendedDefinition: "El sueño, especialmente el profundo y el REM, desempeña un papel importante en este proceso." },
    en: { term: "Memory consolidation", shortDefinition: "Memory consolidation is the process of stabilising and strengthening new memories after learning.", extendedDefinition: "Sleep, especially deep sleep and REM sleep, plays an important role in this process." },
    nl: { term: "Geheugenconsolidatie", shortDefinition: "Geheugenconsolidatie is het proces van stabilisatie en versterking van nieuwe herinneringen na leren.", extendedDefinition: "Slaap, vooral diepe slaap en REM-slaap, speelt hierbij een belangrijke rol." },
  },
  "sleep-deprivation": {
    id: "sleep-deprivation",
    ru: { term: "Недосыпание", shortDefinition: "Недосыпание — это хроническое или повторяющееся снижение сна ниже необходимого уровня.", extendedDefinition: "Оно усиливает стресс, ухудшает память и нарушает регуляцию гормонального ответа на угрозу." },
    es: { term: "Privación del sueño", shortDefinition: "La privación del sueño es una reducción crónica o repetida del sueño por debajo del nivel necesario.", extendedDefinition: "Aumenta el estrés, empeora la memoria y altera la regulación hormonal frente a la amenaza." },
    en: { term: "Sleep deprivation", shortDefinition: "Sleep deprivation is a chronic or repeated reduction of sleep below what is needed for normal functioning.", extendedDefinition: "It increases stress, impairs memory and disturbs hormonal regulation in response to threat." },
    nl: { term: "Slaaptekort", shortDefinition: "Slaaptekort is een chronische of herhaalde vermindering van slaap onder het niveau dat nodig is voor normaal functioneren.", extendedDefinition: "Het vergroot stress, verslechtert geheugen en verstoort hormonale regulatie bij dreiging." },
  },
  crh: {
    id: "crh",
    ru: { term: "КРГ", shortDefinition: "КРГ, или кортикотропин-рилизинг-гормон, — это ключевой гормон стресса, который подавляет сон и усиливает настороженность.", extendedDefinition: "Он помогает организму оставаться бдительным в момент угрозы, но при хронической активации может быть вредным." },
    es: { term: "CRH", shortDefinition: "La CRH, o hormona liberadora de corticotropina, es una hormona clave del estrés que inhibe el sueño y aumenta la vigilancia.", extendedDefinition: "Ayuda al organismo a mantenerse alerta ante la amenaza, pero con activación crónica puede ser perjudicial." },
    en: { term: "CRH", shortDefinition: "CRH, or corticotropin-releasing hormone, is a key stress hormone that suppresses sleep and increases vigilance.", extendedDefinition: "It helps the organism stay alert under threat, but chronic activation can be harmful." },
    nl: { term: "CRH", shortDefinition: "CRH, of corticotropin-vrijstellend hormoon, is een belangrijk stresshormoon dat slaap onderdrukt en alertheid verhoogt.", extendedDefinition: "Het helpt het organisme alert te blijven bij dreiging, maar chronische activering kan schadelijk zijn." },
  },
  "glucocorticoid-cascade": {
    id: "glucocorticoid-cascade",
    ru: { term: "Каскад глюкокортикоидов", shortDefinition: "Каскад глюкокортикоидов — это самоусиливающийся цикл, в котором стрессовые гормоны повреждают структуры, ответственные за их торможение.", extendedDefinition: "Он объясняет, почему хронический стресс может истощать способность организма нормально выключать стрессовую реакцию." },
    es: { term: "Cascada glucocorticoide", shortDefinition: "La cascada glucocorticoide es un ciclo de retroalimentación que empeora a sí mismo cuando las hormonas del estrés dañan las estructuras que normalmente las frenan.", extendedDefinition: "Explica por qué el estrés crónico puede agotar la capacidad del organismo para apagar la respuesta de estrés." },
    en: { term: "Glucocorticoid cascade", shortDefinition: "The glucocorticoid cascade is a self-reinforcing cycle in which stress hormones damage the structures that normally brake them.", extendedDefinition: "It explains why chronic stress can weaken the body’s ability to shut off the stress response." },
    nl: { term: "Glucocorticoïde cascade", shortDefinition: "De glucocorticoïde cascade is een zelfversterkend patroon waarin stresshormonen de structuren beschadigen die ze normaal remmen.", extendedDefinition: "Het verklaart waarom chronische stress de capaciteit van het lichaam om de stressreactie af te zetten kan verzwakken." },
  },
  "successful-ageing": {
    id: "successful-ageing",
    ru: { term: "Успешное старение", shortDefinition: "Успешное старение — это сохранение качества жизни, социальных связей и когнитивной функции в позднем возрасте.", extendedDefinition: "Оно выступает как альтернативный путь возрастного снижения, не обязательно связанный с хронической стрессовой нагрузкой." },
    es: { term: "Envejecimiento exitoso", shortDefinition: "El envejecimiento exitoso es la conservación de la calidad de vida, los vínculos sociales y la función cognitiva en la vejez.", extendedDefinition: "Es una ruta alternativa al deterioro que no depende necesariamente de una carga crónica de estrés." },
    en: { term: "Successful ageing", shortDefinition: "Successful ageing is the maintenance of quality of life, social connection and cognitive function in later life.", extendedDefinition: "It is presented as an alternative to decline and is not necessarily tied to chronic stress burden." },
    nl: { term: "Succesvol ouder worden", shortDefinition: "Succesvol ouder worden is het behoud van kwaliteit van leven, sociale verbindingen en cognitieve functie in later leven.", extendedDefinition: "Het wordt gepresenteerd als een alternatief voor achteruitgang en is niet noodzakelijk gekoppeld aan chronische stressbelasting." },
  },
  "hippocampal-feedback": {
    id: "hippocampal-feedback",
    ru: { term: "Гиппокампальная обратная связь", shortDefinition: "Гиппокампальная обратная связь — это механизм, при котором гиппокамп сигнализирует о необходимости прекратить выработку глюкокортикоидов.", extendedDefinition: "Когда этот контроль нарушается, стрессовая реакция становится более длительной и разрушительной." },
    es: { term: "Retroalimentación hipocampal", shortDefinition: "La retroalimentación hipocampal es el mecanismo por el cual el hipocampo indica que debe detenerse la producción de glucocorticoides.", extendedDefinition: "Cuando este control falla, la respuesta de estrés se prolonga y causa más daño." },
    en: { term: "Hippocampal feedback", shortDefinition: "Hippocampal feedback is the mechanism by which the hippocampus signals that glucocorticoid production should stop.", extendedDefinition: "When this control is impaired, the stress response becomes longer-lasting and more damaging." },
    nl: { term: "Hippocampale feedback", shortDefinition: "Hippocampale feedback is het mechanisme waarbij de hippocampus aangeeft dat glucocorticoïdeproductie moet stoppen.", extendedDefinition: "Wanneer deze controle verstoord is, wordt de stressreactie langer en schadelijker." },
  },
  predictability: {
    id: "predictability",
    ru: { term: "Предсказуемость", shortDefinition: "Предсказуемость — это знание, когда и что случится, что позволяет организму расслабиться в безопасные периоды.", extendedDefinition: "Она снижает стресс, потому что уменьшает неопределённость и помогает человеку подготовиться к будущему, а не реагировать постоянно в режиме тревоги." },
    es: { term: "Predictibilidad", shortDefinition: "La predictibilidad es el conocimiento de cuándo y qué va a suceder, lo que permite al organismo relajarse en periodos seguros.", extendedDefinition: "Reduce el estrés porque disminuye la incertidumbre y ayuda a prepararse para lo que viene en vez de responder en estado continuo de alarma." },
    en: { term: "Predictability", shortDefinition: "Predictability is knowing when and what will happen, which allows the body to relax during safe periods.", extendedDefinition: "It lowers stress by reducing uncertainty and making it possible to prepare rather than remain in constant alarm." },
    nl: { term: "Voorspelbaarheid", shortDefinition: "Voorspelbaarheid is het weten wanneer en wat er gaat gebeuren, waardoor het lichaam in veilige periodes kan ontspannen.", extendedDefinition: "Het verlaagt stress door onzekerheid te verminderen en het mogelijk te maken te anticiperen in plaats van voortdurend in alarm te verkeren." },
  },
  "perceived-control": {
    id: "perceived-control",
    ru: { term: "Воспринимаемый контроль", shortDefinition: "Воспринимаемый контроль — это ощущение, что человек может влиять на происходящее или хотя бы на часть событий.", extendedDefinition: "Он снижает стресс даже при отсутствии полного контроля, потому что снижает чувство беспомощности." },
    es: { term: "Control percibido", shortDefinition: "El control percibido es la sensación de que una persona puede influir en lo que ocurre o al menos en parte de los acontecimientos.", extendedDefinition: "Reduce el estrés incluso sin un control completo, porque disminuye la sensación de impotencia." },
    en: { term: "Perceived control", shortDefinition: "Perceived control is the feeling that a person can influence what is happening or at least part of it.", extendedDefinition: "It reduces stress even when full control is impossible, because it lowers helplessness." },
    nl: { term: "Waargenomen controle", shortDefinition: "Waargenomen controle is het gevoel dat iemand invloed kan uitoefenen op wat er gebeurt, of ten minste op een deel ervan.", extendedDefinition: "Het verlaagt stress zelfs als volledige controle niet mogelijk is, omdat het hulpeloosheid vermindert." },
  },
  "social-support": {
    id: "social-support",
    ru: { term: "Социальная поддержка", shortDefinition: "Социальная поддержка — это наличие людей, способных помочь, поддержать и стабилизировать эмоциональное состояние.", extendedDefinition: "Она снижает физиологическую реакцию на стресс и повышает устойчивость к трудностям." },
    es: { term: "Apoyo social", shortDefinition: "El apoyo social es la presencia de personas capaces de ayudar, sostener y estabilizar el estado emocional.", extendedDefinition: "Reduce la reacción fisiológica al estrés y aumenta la resistencia ante las dificultades." },
    en: { term: "Social support", shortDefinition: "Social support is the presence of people who can help, reassure and stabilise emotional state.", extendedDefinition: "It reduces the physiological stress response and improves resilience to hardship." },
    nl: { term: "Sociale steun", shortDefinition: "Sociale steun is de aanwezigheid van mensen die kunnen helpen, geruststellen en de emotionele toestand stabiliseren.", extendedDefinition: "Het verlaagt de fysiologische stressreactie en verbetert veerkracht bij tegenslag." },
  },
  "cognitive-appraisal": {
    id: "cognitive-appraisal",
    ru: { term: "Когнитивная оценка", shortDefinition: "Когнитивная оценка — это способ, которым человек интерпретирует событие и оценивает его значение для себя.", extendedDefinition: "Она может существенно менять стрессовую реакцию, даже если объективно события похожи." },
    es: { term: "Valoración cognitiva", shortDefinition: "La valoración cognitiva es la forma en que una persona interpreta un acontecimiento y le asigna significado.", extendedDefinition: "Puede cambiar profundamente la respuesta al estrés, incluso cuando los hechos objetivos son parecidos." },
    en: { term: "Cognitive appraisal", shortDefinition: "Cognitive appraisal is the way a person interprets an event and judges what it means for them.", extendedDefinition: "It can dramatically alter the stress response even when the objective facts are similar." },
    nl: { term: "Cognitieve beoordeling", shortDefinition: "Cognitieve beoordeling is de manier waarop iemand een gebeurtenis interpreteert en betekenis geeft aan wat er gebeurt.", extendedDefinition: "Het kan de stressreactie sterk veranderen, zelfs als de objectieve feiten vergelijkbaar zijn." },
  },
  anhedonia: {
    id: "anhedonia",
    ru: { term: "Ангедония", shortDefinition: "Ангедония — это снижение способности испытывать удовольствие или интерес к тому, что раньше приносило радость.", extendedDefinition: "В главе она выступает как ключевой симптом депрессии и показатель серьёзного нарушения эмоционального функционирования." },
    es: { term: "Anhedonia", shortDefinition: "La anhedonia es la reducción de la capacidad para experimentar placer o interés por lo que antes resultaba gratificante.", extendedDefinition: "En el capítulo es un síntoma central de la depresión y un indicador de un funcionamiento emocional gravemente alterado." },
    en: { term: "Anhedonia", shortDefinition: "Anhedonia is a reduction in the ability to experience pleasure or interest in what used to be rewarding.", extendedDefinition: "In the chapter it is a central symptom of depression and a sign of disturbed emotional functioning." },
    nl: { term: "Anhedonie", shortDefinition: "Anhedonie is de vermindering van de mogelijkheid om plezier of interesse te ervaren in wat voorheen bevredigend was.", extendedDefinition: "In het hoofdstuk is het een centraal symptoom van depressie en een teken van verstoorde emotionele functie." },
  },
  "learned-helplessness": {
    id: "learned-helplessness",
    ru: { term: "Приобретённая беспомощность", shortDefinition: "Приобретённая беспомощность — это состояние, при котором человек или животное перестаёт действовать, потому что прошлый опыт показал, что усилия не помогают.", extendedDefinition: "Она тесно связана с повторяющимся неконтролируемым стрессом и снижением мотивации." },
    es: { term: "Indefensión aprendida", shortDefinition: "La indefensión aprendida es un estado en el que una persona o un animal deja de actuar porque la experiencia previa muestra que los esfuerzos no sirven para nada.", extendedDefinition: "Se relaciona estrechamente con el estrés repetido e incontrolable y con la reducción de la motivación." },
    en: { term: "Learned helplessness", shortDefinition: "Learned helplessness is a state in which a person or animal stops acting because past experience shows that effort does not help.", extendedDefinition: "It is closely linked to repeated uncontrollable stress and reduced motivation." },
    nl: { term: "Aangeleerde hulpeloosheid", shortDefinition: "Aangeleerde hulpeloosheid is een toestand waarin een persoon of dier stopt met handelen omdat eerdere ervaring laat zien dat inspanning niet helpt.", extendedDefinition: "Het is nauw verbonden met herhaalde oncontroleerbare stress en verminderde motivatie." },
  },
  "monoamine-system": {
    id: "monoamine-system",
    ru: { term: "Моноаминовая система", shortDefinition: "Моноаминовая система — это сеть нейромедиаторов, включая дофамин, серотонин и норадреналин, связанных с настроением и мотивацией.", extendedDefinition: "В главе она помогает объяснить, почему депрессия должна рассматриваться как биологический и нейрохимический процесс, а не только как переживание." },
    es: { term: "Sistema monoaminérgico", shortDefinition: "El sistema monoaminérgico es una red de neurotransmisores que incluye dopamina, serotonina y noradrenalina, vinculados con el estado de ánimo y la motivación.", extendedDefinition: "En el capítulo ayuda a explicar por qué la depresión debe entenderse como un proceso biológico y neuroquímico, no solo como una experiencia emocional." },
    en: { term: "Monoamine system", shortDefinition: "The monoamine system is a network of neurotransmitters, including dopamine, serotonin and noradrenaline, involved in mood and motivation.", extendedDefinition: "In the chapter it helps explain why depression is a biological and neurochemical process, not only an emotional experience." },
    nl: { term: "Monoamine-systeem", shortDefinition: "Het monoamine-systeem is een netwerk van neurotransmitters, waaronder dopamine, serotonine en noradrenaline, die betrokken zijn bij stemming en motivatie.", extendedDefinition: "In het hoofdstuk helpt het verklaren waarom depressie een biologisch en neurochemisch proces is, niet alleen een emotionele ervaring." },
  },
  "anterior-cingulate-cortex": {
    id: "anterior-cingulate-cortex",
    ru: { term: "Передняя поясная кора", shortDefinition: "Передняя поясная кора — область мозга, связанная с эмоциональной оценкой, болью, конфликтом и внутренней тревогой.", extendedDefinition: "Её повышенная активность рассматривается как часть эмоционального и стрессового паттерна депрессии." },
    es: { term: "Corteza cingulada anterior", shortDefinition: "La corteza cingulada anterior es una región cerebral implicada en la evaluación emocional, el dolor, el conflicto y la ansiedad interna.", extendedDefinition: "Su actividad aumentada se considera parte del patrón emocional y de estrés de la depresión." },
    en: { term: "Anterior cingulate cortex", shortDefinition: "The anterior cingulate cortex is a brain region involved in emotional evaluation, pain, conflict and internal anxiety.", extendedDefinition: "Its increased activity is considered part of the emotional and stress-related pattern seen in depression." },
    nl: { term: "Anterior cingulate cortex", shortDefinition: "De anterior cingulate cortex is een hersengebied betrokken bij emotionele evaluatie, pijn, conflict en interne angst.", extendedDefinition: "Verhoogde activiteit ervan wordt gezien als onderdeel van het emotionele en stressgerelateerde patroon van depressie." },
  },
  amygdala: {
    id: "amygdala",
    ru: { term: "Миндалина", shortDefinition: "Миндалина — структура мозга, критически важная для распознавания угрозы и формирования быстрых эмоциональных реакций.", extendedDefinition: "В главе она объясняет, почему тревога может возникать даже при отсутствии объективной опасности." },
    es: { term: "Amígdala", shortDefinition: "La amígdala es una estructura cerebral crucial para reconocer amenazas y generar respuestas emocionales rápidas.", extendedDefinition: "En el capítulo explica por qué la ansiedad puede aparecer incluso sin peligro objetivo." },
    en: { term: "Amygdala", shortDefinition: "The amygdala is a brain structure crucial for recognising threats and generating rapid emotional reactions.", extendedDefinition: "In the chapter it helps explain why anxiety can arise even without objective danger." },
    nl: { term: "Amygdala", shortDefinition: "De amygdala is een hersenstructuur die cruciaal is voor het herkennen van bedreigingen en het genereren van snelle emotionele reacties.", extendedDefinition: "In het hoofdstuk helpt het verklaren waarom angst kan ontstaan, zelfs zonder objectieve dreiging." },
  },
  hostility: {
    id: "hostility",
    ru: { term: "Враждебность", shortDefinition: "Враждебность — это склонность видеть угрозу, воспринимать других как соперников и реагировать с агрессией.", extendedDefinition: "Она связана с повышенной сердечно-сосудистой нагрузкой и более выраженным стрессовым реагированием." },
    es: { term: "Hostilidad", shortDefinition: "La hostilidad es la tendencia a percibir amenazas, ver a otros como rivales y responder con agresividad.", extendedDefinition: "Está asociada a una mayor carga cardiovascular y a una respuesta de estrés más intensa." },
    en: { term: "Hostility", shortDefinition: "Hostility is the tendency to perceive threats, treat others as rivals and react with aggression.", extendedDefinition: "It is associated with greater cardiovascular strain and a more intense stress response." },
    nl: { term: "Vijandigheid", shortDefinition: "Vijandigheid is de neiging bedreigingen te waarnemen, anderen als rivalen te zien en met agressie te reageren.", extendedDefinition: "Het hangt samen met grotere cardiovasculaire belasting en een intensere stressreactie." },
  },
  "emotional-suppression": {
    id: "emotional-suppression",
    ru: { term: "Подавление эмоций", shortDefinition: "Подавление эмоций — это сознательное или автоматическое удержание чувств, которое может обеспечивать внешнюю «спокойную» маску.", extendedDefinition: "В главе оно рассматривается как дорогостоящий способ регулирования, связанный с хроническим физиологическим напряжением." },
    es: { term: "Supresión emocional", shortDefinition: "La supresión emocional es la contención consciente o automática de los sentimientos, que puede ofrecer una fachada externa de calma.", extendedDefinition: "En el capítulo se considera una estrategia costosa que mantiene un estado fisiológico de tensión crónica." },
    en: { term: "Emotional suppression", shortDefinition: "Emotional suppression is the conscious or automatic holding back of feelings, which can create an outwardly calm facade.", extendedDefinition: "In the chapter it is treated as a costly regulation strategy associated with chronic physiological tension." },
    nl: { term: "Onderdrukking van emoties", shortDefinition: "Onderdrukking van emoties is het bewuste of automatische onderdrukken van gevoelens, wat een uiterlijk kalme façade kan geven.", extendedDefinition: "In het hoofdstuk wordt het gezien als een kostbare regulatiestrategie die samenhangt met chronische fysiologische spanning." },
  },
  temperament: {
    id: "temperament",
    ru: { term: "Темперамент", shortDefinition: "Темперамент — это относительно устойчивые индивидуальные особенности эмоциональной и поведенческой реактивности.", extendedDefinition: "Он помогает объяснить, почему одни люди интерпретируют одни и те же события как угрозу, а другие — как нейтральные." },
    es: { term: "Temperamento", shortDefinition: "El temperamento son rasgos relativamente estables de reactividad emocional y conductual.", extendedDefinition: "Ayuda a explicar por qué unas personas interpretan el mismo acontecimiento como amenaza y otras como algo neutro." },
    en: { term: "Temperament", shortDefinition: "Temperament is a relatively stable set of emotional and behavioural reactivity traits.", extendedDefinition: "It helps explain why some people interpret the same event as a threat while others see it as neutral." },
    nl: { term: "Temperament", shortDefinition: "Temperament is een relatief stabiel patroon van emotionele en gedragsmatige reactievermogen.", extendedDefinition: "Het helpt verklaren waarom sommige mensen hetzelfde event als bedreiging ervaren en anderen als neutraal." },
  },
  dopamine: {
    id: "dopamine",
    ru: { term: "Дофамин", shortDefinition: "Дофамин — нейромедиатор, связанный с мотивацией, ожиданием, наградой и поиском стимуляции.", extendedDefinition: "В главе он объясняет, почему удовольствие и зависимость зависят не только от получения награды, но и от предвкушения." },
    es: { term: "Dopamina", shortDefinition: "La dopamina es un neurotransmisor asociado a la motivación, la anticipación, la recompensa y la búsqueda de estimulación.", extendedDefinition: "En el capítulo explica por qué el placer y la dependencia dependen no solo de la recompensa, sino también de la anticipación." },
    en: { term: "Dopamine", shortDefinition: "Dopamine is a neurotransmitter associated with motivation, anticipation, reward and the search for stimulation.", extendedDefinition: "In the chapter it explains why pleasure and dependence depend not only on reward, but also on expectation." },
    nl: { term: "Dopamine", shortDefinition: "Dopamine is een neurotransmitter verbonden met motivatie, anticipatie, beloning en het zoeken naar stimulatie.", extendedDefinition: "In het hoofdstuk verklaart het waarom plezier en verslaving niet alleen afhangen van beloning, maar ook van verwachting." },
  },
  tolerance: {
    id: "tolerance",
    ru: { term: "Толерантность", shortDefinition: "Толерантность — это сниженная чувствительность к стимулу после повторного воздействия.", extendedDefinition: "Она объясняет, почему для достижения того же эффекта требуется всё более сильное воздействие." },
    es: { term: "Tolerancia", shortDefinition: "La tolerancia es la menor sensibilidad a un estímulo tras exposiciones repetidas.", extendedDefinition: "Explica por qué para lograr el mismo efecto se necesita una estimulación cada vez mayor." },
    en: { term: "Tolerance", shortDefinition: "Tolerance is reduced sensitivity to a stimulus after repeated exposure.", extendedDefinition: "It explains why greater stimulation is often needed to achieve the same effect." },
    nl: { term: "Tolerantie", shortDefinition: "Tolerantie is verminderde gevoeligheid voor een stimulus na herhaalde blootstelling.", extendedDefinition: "Het verklaart waarom vaak steeds sterkere stimulatie nodig is om hetzelfde effect te bereiken." },
  },
  "opponent-process": {
    id: "opponent-process",
    ru: { term: "Процесс-антагонист", shortDefinition: "Процесс-антагонист — это компенсаторная реакция мозга, направленная на восстановление равновесия после сильного возбуждения.", extendedDefinition: "Он помогает объяснить, почему повторяющееся стимулирование может вести к снижению чувствительности и последующему дискомфорту." },
    es: { term: "Proceso opuesto", shortDefinition: "El proceso opuesto es una respuesta compensatoria del cerebro que intenta restablecer el equilibrio tras una fuerte activación.", extendedDefinition: "Explica por qué la estimulación repetida puede llevar a una menor sensibilidad y luego a incomodidad." },
    en: { term: "Opponent process", shortDefinition: "The opponent process is the brain’s compensatory response that seeks to restore balance after strong activation.", extendedDefinition: "It helps explain why repeated stimulation can lead to reduced sensitivity and then discomfort." },
    nl: { term: "Tegengesteld proces", shortDefinition: "Het tegengesteld proces is de compensatoire reactie van de hersenen die probeert evenwicht te herstellen na sterke activatie.", extendedDefinition: "Het helpt verklaren waarom herhaalde stimulatie kan leiden tot verminderde gevoeligheid en daarna ongemak." },
  },
  "sensation-seeking": {
    id: "sensation-seeking",
    ru: { term: "Поиск острых ощущений", shortDefinition: "Поиск острых ощущений — это склонность стремиться к сильным, новым или рискованным переживаниям.", extendedDefinition: "Она связана с потребностью в высокой стимуляции и может играть роль в переживании стресса как удовольствия." },
    es: { term: "Búsqueda de sensaciones", shortDefinition: "La búsqueda de sensaciones es la tendencia a buscar experiencias intensas, nuevas o arriesgadas.", extendedDefinition: "Está relacionada con la necesidad de alta estimulación y puede hacer que el estrés se viva como placer." },
    en: { term: "Sensation seeking", shortDefinition: "Sensation seeking is the tendency to seek intense, novel or risky experiences.", extendedDefinition: "It is linked to a need for high stimulation and may make stress feel pleasurable in some contexts." },
    nl: { term: "Sensatiezoeken", shortDefinition: "Sensatiezoeken is de neiging om intense, nieuwe of risicovolle ervaringen op te zoeken.", extendedDefinition: "Het hangt samen met een behoefte aan hoge stimulatie en kan stress in sommige contexten als plezierig laten ervaren." },
  },
  dependence: {
    id: "dependence",
    ru: { term: "Зависимость", shortDefinition: "Зависимость — это состояние, при котором стимул или поведение становится трудно контролировать и трудно прекращать.", extendedDefinition: "В главе она рассматривается как результат взаимодействия стресса, награды и снижения самоконтроля." },
    es: { term: "Dependencia", shortDefinition: "La dependencia es un estado en el que un estímulo o comportamiento se vuelve difícil de controlar y de abandonar.", extendedDefinition: "En el capítulo se entiende como resultado de la interacción entre estrés, recompensa y reducción del autocontrol." },
    en: { term: "Dependence", shortDefinition: "Dependence is a condition in which a stimulus or behaviour becomes difficult to control and hard to stop.", extendedDefinition: "In the chapter it is treated as the outcome of stress, reward and weakened self-control." },
    nl: { term: "Afhankelijkheid", shortDefinition: "Afhankelijkheid is een toestand waarin een stimulus of gedrag moeilijk te controleren en moeilijk te stoppen is.", extendedDefinition: "In het hoofdstuk wordt het gezien als een gevolg van stress, beloning en verminderde zelfcontrole." },
  },
  "social-capital": {
    id: "social-capital",
    ru: { term: "Социальный капитал", shortDefinition: "Социальный капитал — это доверие, взаимопомощь и общественная сплочённость, которые поддерживают здоровье и устойчивость.", extendedDefinition: "Он уменьшается при неравенстве и усиливает хронический стресс в сообществе." },
    es: { term: "Capital social", shortDefinition: "El capital social es la confianza, la ayuda mutua y la cohesión comunitaria que sostienen la salud y la resiliencia.", extendedDefinition: "Disminuye con la desigualdad y refuerza el estrés crónico en la comunidad." },
    en: { term: "Social capital", shortDefinition: "Social capital is trust, mutual support and community cohesion that sustain health and resilience.", extendedDefinition: "It declines with inequality and amplifies chronic stress within communities." },
    nl: { term: "Sociaal kapitaal", shortDefinition: "Sociaal kapitaal is vertrouwen, wederzijdse hulp en gemeenschapscohesie die gezondheid en veerkracht ondersteunen.", extendedDefinition: "Het daalt bij ongelijkheid en versterkt chronische stress in gemeenschappen." },
  },
  "socioeconomic-status": {
    id: "socioeconomic-status",
    ru: { term: "Социально-экономический статус", shortDefinition: "Социально-экономический статус — это положение человека в социальной и экономической структуре общества.", extendedDefinition: "Он связан с разницей в доступе к ресурсам, безопасности, времени и здоровью." },
    es: { term: "Estatus socioeconómico", shortDefinition: "El estatus socioeconómico es la posición de una persona en la estructura social y económica de la sociedad.", extendedDefinition: "Está relacionado con diferencias en acceso a recursos, seguridad, tiempo y salud." },
    en: { term: "Socioeconomic status", shortDefinition: "Socioeconomic status is a person’s position in the social and economic structure of society.", extendedDefinition: "It is linked to differences in access to resources, security, time and health." },
    nl: { term: "Sociaaleconomische status", shortDefinition: "Sociaaleconomische status is de positie van een persoon in de sociale en economische structuur van de samenleving.", extendedDefinition: "Het hangt samen met verschillen in toegang tot middelen, veiligheid, tijd en gezondheid." },
  },
  "subjective-socioeconomic-status": {
    id: "subjective-socioeconomic-status",
    ru: { term: "Субъективный социально-экономический статус", shortDefinition: "Субъективный социально-экономический статус — это то, как человек оценивает своё место в социальной иерархии.", extendedDefinition: "Эта оценка связана с физиологическим стрессом, даже когда реальные доходы могут быть сопоставимы." },
    es: { term: "Estatus socioeconómico subjetivo", shortDefinition: "El estatus socioeconómico subjetivo es la forma en que una persona evalúa su lugar en la jerarquía social.", extendedDefinition: "Esta evaluación se relaciona con el estrés fisiológico, incluso cuando los ingresos reales pueden ser comparables." },
    en: { term: "Subjective socioeconomic status", shortDefinition: "Subjective socioeconomic status is how a person evaluates their place in the social hierarchy.", extendedDefinition: "This appraisal is linked to physiological stress even when actual income may be similar." },
    nl: { term: "Subjectieve sociaaleconomische status", shortDefinition: "Subjectieve sociaaleconomische status is hoe iemand zijn plaats in de sociale hiërarchie beoordeelt.", extendedDefinition: "Deze beoordeling hangt samen met fysiologische stress, zelfs als de werkelijke inkomsten vergelijkbaar kunnen zijn." },
  },
  inequality: {
    id: "inequality",
    ru: { term: "Неравенство", shortDefinition: "Неравенство — это различия в ресурсах, власти, статусе и возможностях между людьми или группами.", extendedDefinition: "Оно повышает хроническое напряжение и ухудшает здоровье, даже при равном доступе к базовой медицине." },
    es: { term: "Desigualdad", shortDefinition: "La desigualdad son diferencias en recursos, poder, estatus y oportunidades entre personas o grupos.", extendedDefinition: "Aumenta la tensión crónica y deteriora la salud, incluso con un acceso igualitario a la atención básica." },
    en: { term: "Inequality", shortDefinition: "Inequality is the difference in resources, power, status and opportunity between people or groups.", extendedDefinition: "It increases chronic strain and worsens health, even when access to basic care is equal." },
    nl: { term: "Ongelijkheid", shortDefinition: "Ongelijkheid is verschil in middelen, macht, status en kansen tussen mensen of groepen.", extendedDefinition: "Het verhoogt chronische spanning en verslechtert gezondheid, zelfs als de toegang tot basiszorg gelijk is." },
  },
  coping: {
    id: "coping",
    ru: { term: "Совладание (копинг)", shortDefinition: "Совладание — это стратегии, которые человек использует, чтобы управлять стрессором или его последствиями.", extendedDefinition: "Оно включает действия, оценку и поведенческие ответы, направленные на уменьшение нагрузки." },
    es: { term: "Afrontamiento", shortDefinition: "El afrontamiento es el conjunto de estrategias que una persona usa para manejar un estresor o sus consecuencias.", extendedDefinition: "Incluye acciones, evaluaciones y respuestas conductuales orientadas a reducir la carga." },
    en: { term: "Coping", shortDefinition: "Coping is the set of strategies a person uses to manage a stressor or its consequences.", extendedDefinition: "It includes actions, appraisals and behavioural responses aimed at reducing strain." },
    nl: { term: "Coping", shortDefinition: "Coping is het geheel van strategieën dat iemand gebruikt om een stressor of de gevolgen ervan te beheersen.", extendedDefinition: "Het omvat acties, beoordelingen en gedragreacties gericht op het verminderen van belasting." },
  },
  "cognitive-flexibility": {
    id: "cognitive-flexibility",
    ru: { term: "Когнитивная гибкость", shortDefinition: "Когнитивная гибкость — это способность менять стратегию, когда исходный путь не работает." , extendedDefinition: "Она позволяет человеку отличать изменяемое от неизменяемого и искать более подходящий ответ на стресс." },
    es: { term: "Flexibilidad cognitiva", shortDefinition: "La flexibilidad cognitiva es la capacidad de cambiar de estrategia cuando el enfoque inicial no funciona.", extendedDefinition: "Permite distinguir lo que puede cambiarse de lo que no puede y buscar una respuesta más adecuada al estrés." },
    en: { term: "Cognitive flexibility", shortDefinition: "Cognitive flexibility is the ability to change strategy when the original approach is not working.", extendedDefinition: "It allows a person to distinguish what can change from what cannot and find a better response to stress." },
    nl: { term: "Cognitieve flexibiliteit", shortDefinition: "Cognitieve flexibiliteit is het vermogen om van aanpak te veranderen wanneer de oorspronkelijke strategie niet werkt.", extendedDefinition: "Het stelt iemand in staat onderscheid te maken tussen wat wel en niet veranderbaar is en een betere reactie op stress te vinden." },
  },
  "problem-focused-coping": {
    id: "problem-focused-coping",
    ru: { term: "Проблемно-ориентированное совладание", shortDefinition: "Проблемно-ориентированное совладание — это стратегия, направленная на изменение самой причины стресса.", extendedDefinition: "Она полезна, когда проблему можно решить действием, например, подготовкой к экзамену или изменением ситуации." },
    es: { term: "Afrontamiento centrado en el problema", shortDefinition: "El afrontamiento centrado en el problema es una estrategia dirigida a cambiar la causa del estrés.", extendedDefinition: "Es útil cuando el problema puede resolverse con acción, como estudiar para un examen o cambiar la situación." },
    en: { term: "Problem-focused coping", shortDefinition: "Problem-focused coping is a strategy aimed at changing the cause of the stress itself.", extendedDefinition: "It is useful when the problem can be solved through action, such as preparation or changing the situation." },
    nl: { term: "Probleemgerichte coping", shortDefinition: "Probleemgerichte coping is een strategie gericht op het veranderen van de oorzaak van de stress zelf.", extendedDefinition: "Het is nuttig wanneer het probleem met actie kan worden opgelost, zoals voorbereiding of het aanpassen van de situatie." },
  },
  "emotion-focused-coping": {
    id: "emotion-focused-coping",
    ru: { term: "Эмоционально-ориентированное совладание", shortDefinition: "Эмоционально-ориентированное совладание — это стратегия управления реакцией на стресс, когда ситуацию изменить нельзя.", extendedDefinition: "Она включает принятие, эмоциональную поддержку и регуляцию внутреннего состояния, а не только решение проблемы." },
    es: { term: "Afrontamiento centrado en la emoción", shortDefinition: "El afrontamiento centrado en la emoción es una estrategia para regular la reacción al estrés cuando la situación no puede cambiarse.", extendedDefinition: "Incluye aceptación, apoyo emocional y regulación del estado interno, no solo la resolución del problema." },
    en: { term: "Emotion-focused coping", shortDefinition: "Emotion-focused coping is a strategy for managing the stress reaction when the situation cannot be changed.", extendedDefinition: "It includes acceptance, emotional support and regulation of internal state rather than only problem-solving." },
    nl: { term: "Emotiegerichte coping", shortDefinition: "Emotiegerichte coping is een strategie om de stressreactie te reguleren wanneer de situatie niet kan worden veranderd.", extendedDefinition: "Het omvat acceptatie, emotionele steun en regulering van de interne toestand, niet alleen probleemoplossing." },
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
  ...(Object.keys(behaviourGlossary) as GlossaryTermId[]),
  "allostatic-load",
  "hpa-axis",
  "glucocorticoids",
  "neuroplasticity",
  "stress-response",
  "allostasis",
  "homeostasis",
  "autonomic-nervous-system",
  "sympathetic-nervous-system",
  "parasympathetic-nervous-system",
  "hypertension",
  "atherosclerosis",
  "inflammation",
  "insulin",
  "insulin-resistance",
  "glycogen",
  "gut-brain-axis",
  "helicobacter-pylori",
  "peptic-ulcer",
  "functional-disorder",
  "growth-hormone",
  "early-life-stress",
  "psychosocial-dwarfism",
  "maternal-care",
  "developmental-programming",
  "reproductive-axis",
  "hpg-axis",
  "libido",
  "testosterone",
  "prolactin",
  "psychoneuroimmunology",
  "immunosuppression",
  "autoimmunity",
  "pain-asymbolia",
  "nociception",
  "gate-control",
  "analgesia",
  "endogenous-opioids",
  "declarative-memory",
  "procedural-memory",
  "hippocampus",
  "neurogenesis",
  "slow-wave-sleep",
  "rem-sleep",
  "memory-consolidation",
  "sleep-deprivation",
  "crh",
  "glucocorticoid-cascade",
  "successful-ageing",
  "hippocampal-feedback",
  "predictability",
  "perceived-control",
  "social-support",
  "cognitive-appraisal",
  "anhedonia",
  "learned-helplessness",
  "monoamine-system",
  "anterior-cingulate-cortex",
  "amygdala",
  "hostility",
  "emotional-suppression",
  "temperament",
  "dopamine",
  "tolerance",
  "opponent-process",
  "sensation-seeking",
  "dependence",
  "social-capital",
  "socioeconomic-status",
  "subjective-socioeconomic-status",
  "inequality",
  "coping",
  "cognitive-flexibility",
  "problem-focused-coping",
  "emotion-focused-coping",
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
