import type { Language } from "@/lib/site-content";
import type { GlossaryTermId } from "@/lib/glossary";
import type { EducationalNewsQuizQuestion } from "@/components/educational-news-quiz";
export const testosteroneBookPath = "library/books/the-trouble-with-testosterone";
export const testosteroneOriginalTitle = "The Trouble with Testosterone: And Other Essays on the Biology of the Human Predicament";
export const testosteroneChapterOriginalTitle = "How Big Is Yours?";
export const testosteroneTerms: GlossaryTermId[] = ["frontal-cortex","prefrontal-cortex","executive-control","inhibition","disinhibition","temporal-lobe","hypergraphia","tourette-syndrome","ocd","schizotypy","continuum","case-study","causality"];
export const testosteroneSources = [
 { id: "executive", title: "Executive Dysfunction and the Prefrontal Cortex (2021)", href: "https://pubmed.ncbi.nlm.nih.gov/34881727/" },
 { id: "gage", title: "Macmillan & Lena — Rehabilitating Phineas Gage (2010)", href: "https://pubmed.ncbi.nlm.nih.gov/20480430/" },
 { id: "tourette", title: "CDC — About Tourette Syndrome", href: "https://www.cdc.gov/tourette-syndrome/about/index.html" },
 { id: "temporal", title: "Rethinking Geschwind Syndrome Beyond Temporal Lobe Epilepsy (2021)", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8419725/" },
 { id: "ocd", title: "NIMH — Obsessive-Compulsive Disorder (OCD)", href: "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd" },
 { id: "schizotypy", title: "Evidence of a dimensional relationship between schizotypy and schizophrenia: a systematic review (2013)", href: "https://pubmed.ncbi.nlm.nih.gov/23313650/" },
];
type ChapterSection = { id: string; title: string; paragraphs: string[]; caution?: string; sources?: string[] };
type ReadingCopy = {
 title: string;
 chapterTitle: string;
 intro: string;
 progress: string;
 chapter: string;
 chapters: string;
 read: string;
 contents: string;
 chapterIntro: string;
 before: string;
 beforeQuestion: string;
 after: string;
 afterQuestion: string;
 reflectionNote: string;
 summary: string;
 caution: string;
 conclusions: string;
 supported: string;
 unsupported: string;
 glossary: string;
 quiz: string;
 quizIntro: string;
 correct: string;
 incorrect: string;
 explanation: string;
 sources: string;
 bookSource: string;
 contextSources: string;
 sourceLabel: string;
 editorial: string;
 verification: string;
 health: string;
 sections: ChapterSection[];
 continuum: string[];
 supportedItems: string[];
 unsupportedItems: string[];
 sourceNames: string[];
 questions: EducationalNewsQuizQuestion[];
};
export const testosteroneCopy: Record<Language, ReadingCopy> = {
  "ru": {
    "title": "Игры тестостерона и другие вопросы биологии поведения",
    "chapterTitle": "А какого размера у вас?",
    "intro": "Читаем эссе Роберта М. Сапольски о биологии поведения: разбираем механизмы, проверяем границы выводов и обсуждаем ответственность.",
    "progress": "Доступна 1 глава из 17. Остальные главы будут добавляться по мере подготовки.",
    "chapter": "Глава",
    "chapters": "Главы книги",
    "read": "Читать первую главу",
    "contents": "К содержанию главы",
    "chapterIntro": "Где заканчивается «я такой человек» и начинается «так работает мой мозг»?",
    "before": "Перед чтением",
    "beforeQuestion": "Если поведение зависит от работы мозга, становится ли человек менее ответственным за него?",
    "after": "После чтения",
    "afterQuestion": "Изменился ли ваш ответ после чтения? Как теперь вы различаете причину поступка, способность к контролю и ответственность?",
    "reflectionNote": "Обдумайте ответ про себя. Здесь нет оценки, правильной позиции или сохранения ответов.",
    "summary": "Учебный разбор",
    "caution": "Научное уточнение",
    "conclusions": "Что мы можем заключить?",
    "supported": "Обоснованные выводы",
    "unsupported": "Из этого не следует",
    "glossary": "Понятия главы",
    "quiz": "Проверка понимания",
    "quizIntro": "Выберите ответ: объяснение появится сразу. Можно изменить выбор.",
    "correct": "Верно",
    "incorrect": "Неверно",
    "explanation": "Объяснение",
    "sources": "Источники и происхождение текста",
    "bookSource": "Книга и русское издание",
    "contextSources": "Научные и исторические уточнения",
    "sourceLabel": "Источник",
    "editorial": "Текст Sensus Vitae — самостоятельный учебный синтез по редакционному плану главы, а не воспроизведение книги. Пояснения и учебные примеры не являются цитатами Сапольски. Современные уточнения обозначены отдельно.",
    "verification": "Полный текст главы в этом издании ещё требует сверки: точную последовательность примеров и формулировки автора здесь не утверждаем.",
    "health": "Материал помогает изучать поведение; он не предназначен для диагностики себя или других людей.",
    "sections": [
      {
        "id": "introduction",
        "title": "Прежде чем судить — разобраться",
        "paragraphs": [
          "Слова «грубый», «импульсивный», «негибкий» или «навязчивый» описывают впечатление от поведения, но ещё не объясняют его. Иногда за внешне похожими поступками стоят разные ограничения внимания, переключения или торможения. Вопрос главы — как исследовать эту границу, не превращая человека в ярлык.",
          "Биологическое объяснение не равно автоматическому оправданию. Можно одновременно выяснять причины поступка, признавать причинённый вред и обсуждать способы предотвратить его повторение. Объяснение механизма само по себе не решает моральный или правовой вопрос."
        ]
      },
      {
        "id": "frontal-control",
        "title": "Лобная кора и управление поведением",
        "paragraphs": [
          "Лобная кора включает несколько областей с разными задачами. Префронтальные системы участвуют в удержании цели, планировании, оценке последствий и выборе действия с учётом ситуации. Они работают вместе с другими отделами мозга, а не как отдельный «центр личности».",
          "Исполнительный контроль помогает не следовать первому побуждению автоматически. Торможение — возможность задержать или остановить неподходящую реакцию. Например, заметить желание перебить собеседника, удержать цель разговора и дождаться паузы. Этот учебный пример показывает различие между появлением импульса и его выполнением."
        ],
        "caution": "Современное понимание связывает контроль с распределёнными сетями. Участие префронтальной коры не означает, что одна область полностью определяет личность.",
        "sources": [
          "executive"
        ]
      },
      {
        "id": "gage",
        "title": "Финеас Гейдж: случай и пределы вывода",
        "paragraphs": [
          "Исторический случай Финеаса Гейджа помогает поставить вопрос о связи повреждения мозга и поведения. После тяжёлой травмы описывались изменения его поведения; этот случай вошёл в историю изучения лобных систем.",
          "Образовательная цепочка здесь такова: повреждение может изменить регуляцию поведения, а окружающие могут воспринимать это как изменение личности. Однако единичное наблюдение не позволяет предсказать, как изменится любой другой человек с травмой."
        ],
        "caution": "Исторические свидетельства ограничены. Поздний анализ указывает на возможную существенную социальную адаптацию Гейджа. Масштаб и стойкость изменений нельзя считать точно установленными; рассказ о необратимом полном разрушении личности преувеличивает данные.",
        "sources": [
          "gage"
        ]
      },
      {
        "id": "disinhibition",
        "title": "Знать правило — не то же самое, что остановиться",
        "paragraphs": [
          "При расторможенности человек может понимать социальное правило, но испытывать трудности с подавлением реакции в нужный момент. Знание «перебивать не стоит» и способность затормозить уже возникающий ответ — разные функции.",
          "Из этого не следует, что каждое нарушение нормы вызвано травмой лобной коры. Нужно учитывать контекст, наблюдать поведение во времени и различать возможные механизмы. Название механизма не заменяет индивидуального исследования."
        ]
      },
      {
        "id": "tourette",
        "title": "Синдром Туретта: другой механизм",
        "paragraphs": [
          "При синдроме Туретта возникают двигательные и вокальные тики. Это не просто отсутствие вежливости и не «тайные мысли, вырвавшиеся наружу». Возможность временно сдержать тик у некоторых людей не делает его обычным намеренным поступком.",
          "Непроизвольное произнесение непристойных слов встречается не у всех и не обязательно для диагноза. Внешне похожая реплика может быть тиком, импульсивной реакцией или намеренным высказыванием: по одному впечатлению механизм не определить."
        ],
        "caution": "Тики и лобная расторможенность нельзя смешивать. Похожее наблюдаемое поведение не доказывает одинаковую причину.",
        "sources": [
          "tourette"
        ]
      },
      {
        "id": "temporal",
        "title": "Височная доля: историческая гипотеза, не тип личности",
        "paragraphs": [
          "В исторической литературе у некоторых людей с височной эпилепсией обсуждались гиперграфия — чрезмерно выраженная склонность писать, обстоятельность и «вязкость» рассказа, привязанность к привычному порядку, интенсивная религиозная или философская сосредоточенность. Это описания отдельных наблюдений, а не портрет всех людей с эпилепсией."
        ],
        "caution": "Объединение этих особенностей в специфический синдром остаётся спорным. Ни религиозность, ни любовь к письму, ни привычки сами по себе не позволяют заключить, что у человека эпилепсия.",
        "sources": [
          "temporal"
        ]
      },
      {
        "id": "ocd",
        "title": "Проверка двери: привычка, ритуал и потеря свободы действия",
        "paragraphs": [
          "Проверить замок перед выходом — обычное действие. Другой случай: человек снова возвращается к двери, проверка ненадолго уменьшает сомнение, но затем позыв повторяется. Когда становится трудно прекратить ритуал, он может занимать время и мешать учёбе, работе и отношениям.",
          "Этот пример помогает обсуждать степень контроля и влияние на жизнь. Он не устанавливает диагноз по количеству проверок. При ОКР навязчивые мысли и/или повторяющиеся действия могут вызывать значительные трудности; отдельная привычка ещё не означает расстройство."
        ],
        "caution": "ОКР нельзя объяснять простой формулой «дисбаланс серотонина и дофамина». Исследуются взаимодействия мозговых сетей, генетических и других факторов; точные причины не сводятся к одному механизму.",
        "sources": [
          "ocd"
        ]
      },
      {
        "id": "schizotypy",
        "title": "Шизотипия не равна шизофрении",
        "paragraphs": [
          "Шизотипия — исследовательское понятие для ряда особенностей восприятия, убеждений, мышления и социального взаимодействия. Среди обсуждаемых черт — необычные переживания и магическое мышление. Само наличие такой черты не означает шизофрению.",
          "Религия, астрология или необычные убеждения сами по себе не устанавливают психическое расстройство. Имеют значение культурный контекст, совокупность переживаний, их устойчивость и влияние на жизнь; оценивать человека по одному убеждению неверно."
        ],
        "caution": "Черты и клинический диагноз — разные уровни описания. Модель спектра не означает неизбежного перехода к заболеванию.",
        "sources": [
          "schizotypy"
        ]
      },
      {
        "id": "continuum",
        "title": "Континуум — карта вопросов, а не шкала диагноза",
        "paragraphs": [
          "Можно мысленно расположить рядом обычную черту, выраженную черту, нарушение контроля или повседневного функционирования и клинически значимое состояние. Такая схема помогает задавать вопросы о выраженности, гибкости и последствиях поведения.",
          "Это не обязательные ступени развития болезни. Разные состояния нельзя свести к одной прямой, а диагноз нельзя вывести из положения на этой учебной схеме. Важнее спросить: что человек может контролировать, в каких условиях и какой ценой?"
        ]
      }
    ],
    "continuum": [
      "Обычная черта",
      "Выраженная черта",
      "Нарушение контроля или функционирования",
      "Клинически значимое состояние"
    ],
    "supportedItems": [
      "Мозговые системы участвуют в регуляции поведения.",
      "Повреждение или нарушение работы некоторых систем может менять поведение.",
      "Внешне сходные поступки могут иметь разные механизмы."
    ],
    "unsupportedItems": [
      "Одна область мозга полностью определяет личность.",
      "Каждая необычная привычка означает болезнь.",
      "Биологический вклад автоматически отменяет ответственность.",
      "Один клинический случай доказывает универсальный причинный закон."
    ],
    "sourceNames": [
      "Исполнительные функции и распределённый контроль",
      "Историческая переоценка случая Гейджа",
      "Тики и синдром Туретта",
      "Спорность синдрома Гешвинда",
      "ОКР: признаки и исследуемые факторы",
      "Шизотипия и её связь со спектром шизофрении"
    ],
    "questions": [
      {
        "question": "Человек знает, что перебивать не стоит, но не успевает остановить ответ. Какое различие важно?",
        "choices": [
          "Знание правила всегда гарантирует контроль.",
          "Знание правила и торможение реакции — разные функции.",
          "Любое перебивание доказывает травму мозга."
        ],
        "explanation": "Понимание нормы не гарантирует успешного торможения в конкретный момент. Но по одному поступку нельзя установить причину.",
        "correctIndex": 1
      },
      {
        "question": "Какой вывод о Гейдже наиболее осторожен?",
        "choices": [
          "Его случай доказал, что личность находится в одной области.",
          "Все последствия травмы точно известны и были постоянными.",
          "Случай важен, но ограниченные исторические данные не позволяют обобщать его на всех."
        ],
        "explanation": "Исторический случай порождает вопросы и гипотезы. Неполные сведения и возможная последующая адаптация ограничивают выводы.",
        "correctIndex": 2
      },
      {
        "question": "Почему вокальный тик нельзя просто назвать лобной расторможенностью?",
        "choices": [
          "Похожие внешние проявления могут иметь разные механизмы.",
          "Любой тик раскрывает скрытые мысли.",
          "Тики всегда являются намеренным нарушением правил."
        ],
        "explanation": "Тики не являются доказательством скрытых намерений. Нельзя выводить один механизм только из сходства поведения.",
        "correctIndex": 0
      },
      {
        "question": "Что позволяет учебная схема континуума?",
        "choices": [
          "Поставить диагноз по выраженности одной привычки.",
          "Задать вопросы о контроле, гибкости и влиянии поведения на жизнь.",
          "Предсказать, что выраженная черта обязательно станет болезнью."
        ],
        "explanation": "Континуум помогает мыслить о различиях. Это не диагностическая шкала и не обязательная последовательность ухудшения.",
        "correctIndex": 1
      },
      {
        "question": "У одного человека наблюдали и особенность поведения, и мозговое изменение. Что из этого следует?",
        "choices": [
          "Мозговое изменение полностью объясняет всё его поведение.",
          "Та же связь обязательно есть у всех.",
          "Нужны дополнительные данные о причинности и альтернативных объяснениях."
        ],
        "explanation": "Совместное наблюдение не исключает другие причины, обратное направление связи или случайность. Одного случая недостаточно для универсального закона.",
        "correctIndex": 2
      },
      {
        "question": "Что меняет биологическое объяснение поступка?",
        "choices": [
          "Помогает исследовать возможности контроля, но не решает автоматически вопрос ответственности.",
          "Всегда полностью отменяет ответственность.",
          "Делает причинённый вред несущественным."
        ],
        "explanation": "Причины, способность к контролю, вред и ответственность связаны, но не тождественны. Научное объяснение не заменяет этическое рассуждение.",
        "correctIndex": 0
      }
    ]
  },
  "en": {
    "title": "The Trouble with Testosterone",
    "chapterTitle": "How Big Is Yours?",
    "intro": "Read Robert M. Sapolsky’s essays on the biology of behaviour: explore mechanisms, examine the limits of conclusions and reflect on responsibility.",
    "progress": "1 of 17 chapters is available. Further chapters will be added as they are prepared.",
    "chapter": "Chapter",
    "chapters": "Book chapters",
    "read": "Read the first chapter",
    "contents": "Chapter contents",
    "chapterIntro": "Where does “that is who I am” end and “that is how my brain works” begin?",
    "before": "Before reading",
    "beforeQuestion": "If behaviour is influenced by the brain, does that make a person less responsible for it?",
    "after": "After reading",
    "afterQuestion": "Has your answer changed? How do you now distinguish the cause of an action, the capacity for control and responsibility?",
    "reflectionNote": "Reflect privately. There is no score or correct position, and no answers are saved.",
    "summary": "Educational reading",
    "caution": "Scientific clarification",
    "conclusions": "What can we conclude?",
    "supported": "Supported conclusions",
    "unsupported": "What does not follow",
    "glossary": "Chapter concepts",
    "quiz": "Check your understanding",
    "quizIntro": "Choose an answer to see an explanation immediately. You can change your choice.",
    "correct": "Correct",
    "incorrect": "Incorrect",
    "explanation": "Explanation",
    "sources": "Sources and provenance",
    "bookSource": "The book and its Russian edition",
    "contextSources": "Scientific and historical qualifications",
    "sourceLabel": "Source",
    "editorial": "The Sensus Vitae text is an independent educational synthesis based on an editorial outline of the chapter, not a reproduction of the book. Explanations and teaching examples are not quotations from Sapolsky. Modern qualifications are labelled separately.",
    "verification": "Comparison with the complete chapter in this edition remains necessary: we do not claim to reproduce the author’s exact sequence of examples or wording.",
    "health": "This material supports learning about behaviour; it is not a tool for diagnosing yourself or other people.",
    "sections": [
      {
        "id": "introduction",
        "title": "Understand before judging",
        "paragraphs": [
          "Words such as rude, impulsive, rigid or obsessive describe an impression of behaviour without explaining it. Similar-looking actions can sometimes involve different constraints on attention, switching or inhibition. The chapter’s question is how to explore that boundary without reducing a person to a label.",
          "A biological explanation is not an automatic excuse. We can investigate causes, acknowledge harm and discuss how to prevent it happening again. Explaining a mechanism does not by itself settle a moral or legal question."
        ]
      },
      {
        "id": "frontal-control",
        "title": "Frontal cortex and behavioural control",
        "paragraphs": [
          "The frontal cortex contains several regions with different functions. Prefrontal systems participate in maintaining goals, planning, evaluating consequences and selecting actions in context. They work with other parts of the brain, rather than acting as a separate personality centre.",
          "Executive control helps us avoid automatically following the first impulse. Inhibition means delaying or stopping an inappropriate response. For example, noticing an urge to interrupt, keeping the purpose of a conversation in mind and waiting for a pause. This teaching example distinguishes having an impulse from acting on it."
        ],
        "caution": "Current accounts describe control in terms of distributed networks. The involvement of prefrontal cortex does not mean that one region completely determines personality.",
        "sources": [
          "executive"
        ]
      },
      {
        "id": "gage",
        "title": "Phineas Gage: a case and its limits",
        "paragraphs": [
          "The historical case of Phineas Gage raises questions about brain injury and behaviour. Behavioural changes were described after his severe injury, and the case became important in the history of research on frontal systems.",
          "The educational chain is: injury can alter behavioural regulation, which others may experience as personality change. A single observation cannot predict how every other person with an injury will change."
        ],
        "caution": "Historical evidence is limited. Later analysis suggests possible substantial social adaptation. The extent and permanence of changes are uncertain; a story of irreversible, total personality destruction exaggerates the evidence.",
        "sources": [
          "gage"
        ]
      },
      {
        "id": "disinhibition",
        "title": "Knowing a rule is different from stopping",
        "paragraphs": [
          "With disinhibition, someone may understand a social rule but struggle to suppress a response at the relevant moment. Knowing that interrupting is inappropriate and being able to stop an emerging response are different functions.",
          "This does not mean every breach of a norm results from frontal injury. Context, observation over time and alternative mechanisms matter. Naming a mechanism does not replace an individual investigation."
        ]
      },
      {
        "id": "tourette",
        "title": "Tourette syndrome: a different mechanism",
        "paragraphs": [
          "Tourette syndrome involves motor and vocal tics. These are not merely bad manners or hidden thoughts escaping. Some people can temporarily suppress a tic, but that does not make it an ordinary intentional action.",
          "Involuntary swearing is not present in everyone and is not required for a diagnosis. A similar-sounding utterance could be a tic, an impulsive reaction or intentional speech: an impression alone does not identify the mechanism."
        ],
        "caution": "Tics must not be equated with frontal disinhibition. Similar observable behaviour does not establish a shared cause.",
        "sources": [
          "tourette"
        ]
      },
      {
        "id": "temporal",
        "title": "Temporal-lobe phenomena: a historical hypothesis",
        "paragraphs": [
          "Historical literature discussed hypergraphia — an unusually strong drive to write — circumstantial or persistent speech, attachment to routines and intense religious or philosophical preoccupations in some people with temporal-lobe epilepsy. These were particular observations, not a description of everyone with epilepsy."
        ],
        "caution": "Whether these traits form a specific syndrome remains disputed. Religious commitment, enjoyment of writing or habits alone do not establish epilepsy.",
        "sources": [
          "temporal"
        ]
      },
      {
        "id": "ocd",
        "title": "Checking a door: habit, ritual and difficulty stopping",
        "paragraphs": [
          "Checking a lock before leaving is ordinary. Consider another situation: someone keeps returning to the door; checking briefly reduces doubt, but the urge returns. When stopping the ritual becomes difficult, it can consume time and interfere with study, work and relationships.",
          "This example explores control and impact on life, not diagnosis by counting checks. In OCD, obsessions and/or repetitive behaviours can cause substantial difficulties; an isolated habit does not establish a disorder."
        ],
        "caution": "OCD is not explained by a simple serotonin-and-dopamine imbalance. Research examines interacting brain networks, genetic influences and other factors; its precise causes cannot be reduced to one mechanism.",
        "sources": [
          "ocd"
        ]
      },
      {
        "id": "schizotypy",
        "title": "Schizotypy is not schizophrenia",
        "paragraphs": [
          "Schizotypy is a research construct covering features of perception, beliefs, thinking and social interaction. Unusual experiences and magical thinking are among the traits discussed. Having a trait does not mean having schizophrenia.",
          "Religion, astrology or unconventional beliefs alone do not establish mental illness. Cultural context, the overall pattern, persistence and impact on life matter; judging someone from one belief is misleading."
        ],
        "caution": "Traits and clinical diagnoses are different levels of description. A spectrum model does not imply inevitable progression to illness.",
        "sources": [
          "schizotypy"
        ]
      },
      {
        "id": "continuum",
        "title": "A continuum is a map of questions, not a diagnostic scale",
        "paragraphs": [
          "We can conceptually place an ordinary trait alongside a pronounced trait, impaired control or everyday functioning, and a clinically significant condition. This helps us ask about intensity, flexibility and consequences.",
          "These are not inevitable stages of disease. Different conditions cannot be reduced to a single line, and a position on this educational diagram cannot establish a diagnosis. Ask instead what a person can control, in which circumstances and at what cost."
        ]
      }
    ],
    "continuum": [
      "Ordinary trait",
      "Pronounced trait",
      "Impaired control or functioning",
      "Clinically significant condition"
    ],
    "supportedItems": [
      "Brain systems participate in behavioural regulation.",
      "Injury or dysfunction in particular systems can alter behaviour.",
      "Similar observable actions can have different mechanisms."
    ],
    "unsupportedItems": [
      "One brain region completely determines personality.",
      "Every unusual habit indicates illness.",
      "A biological contribution automatically removes responsibility.",
      "One case study proves a universal causal rule."
    ],
    "sourceNames": [
      "Executive functions and distributed control",
      "Historical reassessment of Gage",
      "Tics and Tourette syndrome",
      "The disputed Geschwind syndrome",
      "OCD: features and factors under study",
      "Schizotypy and its relationship to the schizophrenia spectrum"
    ],
    "questions": [
      {
        "question": "Someone knows not to interrupt but cannot stop an emerging response in time. Which distinction matters?",
        "choices": [
          "Knowing a rule always guarantees control.",
          "Knowing a rule and inhibiting a response are different functions.",
          "Every interruption proves brain injury."
        ],
        "explanation": "Understanding a norm does not guarantee successful inhibition at a particular moment. One action also cannot establish its cause.",
        "correctIndex": 1
      },
      {
        "question": "Which conclusion about Gage is most careful?",
        "choices": [
          "His case proved personality is located in one region.",
          "All consequences are precisely known and were permanent.",
          "The case matters, but limited historical evidence prevents generalising it to everyone."
        ],
        "explanation": "A historical case raises questions and hypotheses. Incomplete evidence and possible later adaptation limit conclusions.",
        "correctIndex": 2
      },
      {
        "question": "Why should a vocal tic not simply be called frontal disinhibition?",
        "choices": [
          "Similar outward behaviour can arise from different mechanisms.",
          "Every tic reveals hidden thoughts.",
          "Tics are always deliberate breaches of rules."
        ],
        "explanation": "Tics are not evidence of hidden intentions. Behavioural resemblance alone cannot identify a shared mechanism.",
        "correctIndex": 0
      },
      {
        "question": "What can the educational continuum do?",
        "choices": [
          "Diagnose someone from the strength of one habit.",
          "Prompt questions about control, flexibility and impact on life.",
          "Predict that a strong trait must become an illness."
        ],
        "explanation": "A continuum helps us think about variation. It is not a diagnostic scale or an inevitable sequence of deterioration.",
        "correctIndex": 1
      },
      {
        "question": "A behavioural feature and a brain change were observed in one person. What follows?",
        "choices": [
          "The brain change completely explains all their behaviour.",
          "The same relationship must hold for everyone.",
          "More evidence is needed about causality and alternative explanations."
        ],
        "explanation": "Co-occurrence does not rule out other causes, reversed direction or chance. One case cannot establish a universal law.",
        "correctIndex": 2
      },
      {
        "question": "What does a biological explanation of an action change?",
        "choices": [
          "It helps investigate capacity for control without automatically settling responsibility.",
          "It always removes all responsibility.",
          "It makes the harm irrelevant."
        ],
        "explanation": "Causes, control, harm and responsibility are related but distinct. Scientific explanation does not replace ethical reasoning.",
        "correctIndex": 0
      }
    ]
  },
  "nl": {
    "title": "The Trouble with Testosterone",
    "chapterTitle": "Hoe groot is die van jou?",
    "intro": "Lees Robert M. Sapolsky’s essays over de biologie van gedrag: onderzoek mechanismen, de grenzen van conclusies en vragen over verantwoordelijkheid.",
    "progress": "1 van de 17 hoofdstukken is beschikbaar. De overige hoofdstukken volgen zodra ze zijn voorbereid.",
    "chapter": "Hoofdstuk",
    "chapters": "Hoofdstukken",
    "read": "Lees het eerste hoofdstuk",
    "contents": "Inhoud van het hoofdstuk",
    "chapterIntro": "Waar eindigt ‘zo ben ik nu eenmaal’ en begint ‘zo werken mijn hersenen’?",
    "before": "Voor het lezen",
    "beforeQuestion": "Als gedrag door de hersenen wordt beïnvloed, is iemand er dan minder verantwoordelijk voor?",
    "after": "Na het lezen",
    "afterQuestion": "Is je antwoord veranderd? Hoe onderscheid je nu de oorzaak van een handeling, het vermogen tot controle en verantwoordelijkheid?",
    "reflectionNote": "Denk hier voor jezelf over na. Er is geen score of juist standpunt; antwoorden worden niet opgeslagen.",
    "summary": "Educatieve bespreking",
    "caution": "Wetenschappelijke toelichting",
    "conclusions": "Wat kunnen we concluderen?",
    "supported": "Onderbouwde conclusies",
    "unsupported": "Wat hier niet uit volgt",
    "glossary": "Begrippen bij het hoofdstuk",
    "quiz": "Controleer je begrip",
    "quizIntro": "Kies een antwoord en bekijk meteen de uitleg. Je kunt je keuze aanpassen.",
    "correct": "Juist",
    "incorrect": "Onjuist",
    "explanation": "Uitleg",
    "sources": "Bronnen en herkomst",
    "bookSource": "Het boek en de Russische uitgave",
    "contextSources": "Wetenschappelijke en historische kanttekeningen",
    "sourceLabel": "Bron",
    "editorial": "De tekst van Sensus Vitae is een zelfstandige educatieve synthese op basis van een redactionele opzet van het hoofdstuk, geen reproductie van het boek. Toelichtingen en leervoorbeelden zijn geen citaten van Sapolsky. Actuele kanttekeningen staan afzonderlijk aangegeven.",
    "verification": "Vergelijking met het volledige hoofdstuk in deze uitgave blijft nodig: we claimen hier niet de exacte volgorde van voorbeelden of de formuleringen van de auteur weer te geven.",
    "health": "Dit materiaal ondersteunt het leren over gedrag; het is geen hulpmiddel om jezelf of anderen te diagnosticeren.",
    "sections": [
      {
        "id": "introduction",
        "title": "Begrijpen voordat we oordelen",
        "paragraphs": [
          "Woorden als onbeleefd, impulsief, star of dwangmatig beschrijven een indruk van gedrag, maar verklaren die nog niet. Achter vergelijkbare handelingen kunnen verschillende beperkingen van aandacht, omschakeling of remming liggen. De vraag is hoe we die grens onderzoeken zonder een mens tot een etiket te reduceren.",
          "Een biologische verklaring is geen automatische vrijbrief. Oorzaken onderzoeken, schade erkennen en herhaling proberen te voorkomen kunnen samengaan. Een mechanisme verklaren beslist op zichzelf geen morele of juridische kwestie."
        ]
      },
      {
        "id": "frontal-control",
        "title": "Frontale cortex en gedragscontrole",
        "paragraphs": [
          "De frontale cortex omvat meerdere gebieden met verschillende functies. Prefrontale systemen helpen doelen vast te houden, te plannen, gevolgen af te wegen en een passende handeling te kiezen. Ze werken samen met andere hersengebieden; ze vormen geen afzonderlijk centrum van de persoonlijkheid.",
          "Executieve controle helpt om niet automatisch de eerste impuls te volgen. Inhibitie betekent een ongepaste reactie uitstellen of stoppen. Bijvoorbeeld: de neiging opmerken om iemand te onderbreken, het gespreksdoel vasthouden en op een pauze wachten. Dit leervoorbeeld onderscheidt een impuls hebben van ernaar handelen."
        ],
        "caution": "Hedendaagse verklaringen beschrijven controle vanuit verspreide netwerken. De betrokkenheid van de prefrontale cortex betekent niet dat één gebied de persoonlijkheid volledig bepaalt.",
        "sources": [
          "executive"
        ]
      },
      {
        "id": "gage",
        "title": "Phineas Gage: een geval en zijn beperkingen",
        "paragraphs": [
          "Het historische geval van Phineas Gage roept vragen op over hersenletsel en gedrag. Na zijn ernstige letsel werden gedragsveranderingen beschreven; het geval kreeg een belangrijke plaats in de geschiedenis van onderzoek naar frontale systemen.",
          "De educatieve redenering is: letsel kan gedragsregulatie veranderen, wat anderen als persoonlijkheidsverandering ervaren. Eén observatie voorspelt niet hoe ieder ander mens met letsel zal veranderen."
        ],
        "caution": "Het historische bewijs is beperkt. Later onderzoek wijst op mogelijke aanzienlijke sociale aanpassing. Omvang en blijvendheid van veranderingen zijn onzeker; totale, onomkeerbare vernietiging van de persoonlijkheid is een overdrijving.",
        "sources": [
          "gage"
        ]
      },
      {
        "id": "disinhibition",
        "title": "Een regel kennen is iets anders dan kunnen stoppen",
        "paragraphs": [
          "Bij ontremming kan iemand een sociale regel begrijpen, maar moeite hebben een reactie op het juiste moment te onderdrukken. Weten dat onderbreken ongepast is en een opkomende reactie kunnen stoppen zijn verschillende functies.",
          "Niet elke normoverschrijding komt dus door frontaal letsel. Context, observatie door de tijd heen en alternatieve mechanismen blijven belangrijk. Een mechanisme benoemen vervangt geen individueel onderzoek."
        ]
      },
      {
        "id": "tourette",
        "title": "Het syndroom van Gilles de la Tourette: een ander mechanisme",
        "paragraphs": [
          "Bij het syndroom van Gilles de la Tourette komen motorische en vocale tics voor. Dit zijn niet zomaar slechte manieren of verborgen gedachten die ontsnappen. Sommige mensen kunnen een tic tijdelijk onderdrukken; daarmee wordt het nog geen gewone opzettelijke handeling.",
          "Onvrijwillig vloeken komt niet bij iedereen voor en is niet vereist voor de diagnose. Een vergelijkbare uiting kan een tic, een impulsieve reactie of bewuste spraak zijn. Alleen de eerste indruk onthult het mechanisme niet."
        ],
        "caution": "Tics mogen niet gelijkgesteld worden aan frontale ontremming. Vergelijkbaar zichtbaar gedrag bewijst geen gezamenlijke oorzaak.",
        "sources": [
          "tourette"
        ]
      },
      {
        "id": "temporal",
        "title": "Temporale verschijnselen: een historische hypothese",
        "paragraphs": [
          "Historische literatuur beschreef bij sommige mensen met temporaalkwabepilepsie hypergrafie — een sterk verhoogde drang om te schrijven — omslachtige, moeilijk loslatende spraak, gehechtheid aan routines en intense religieuze of filosofische preoccupaties. Dit waren specifieke waarnemingen, geen beschrijving van iedereen met epilepsie."
        ],
        "caution": "Of deze kenmerken een specifiek syndroom vormen, blijft omstreden. Religieuze betrokkenheid, graag schrijven of vaste gewoonten bewijzen op zichzelf geen epilepsie.",
        "sources": [
          "temporal"
        ]
      },
      {
        "id": "ocd",
        "title": "De deur controleren: gewoonte, ritueel en moeilijk kunnen stoppen",
        "paragraphs": [
          "Voor vertrek het slot controleren is normaal. Denk aan een andere situatie: iemand keert steeds terug; controleren vermindert even de twijfel, maar de drang komt terug. Als stoppen moeilijk wordt, kan het ritueel tijd opslokken en studie, werk en relaties hinderen.",
          "Dit voorbeeld gaat over controle en gevolgen voor het dagelijks leven, niet over een diagnose door controles te tellen. Bij OCD kunnen obsessies en/of herhaalde handelingen grote moeilijkheden veroorzaken; een losse gewoonte bewijst geen stoornis."
        ],
        "caution": "OCD is niet te verklaren als een simpele onbalans van serotonine en dopamine. Onderzoek richt zich op wisselwerkingen tussen hersennetwerken, genetische invloeden en andere factoren; de precieze oorzaken zijn niet tot één mechanisme te herleiden.",
        "sources": [
          "ocd"
        ]
      },
      {
        "id": "schizotypy",
        "title": "Schizotypie is geen schizofrenie",
        "paragraphs": [
          "Schizotypie is een onderzoeksbegrip voor kenmerken van waarneming, overtuigingen, denken en sociale interactie. Ongewone ervaringen en magisch denken behoren tot de besproken trekken. Een dergelijke trek hebben betekent niet dat iemand schizofrenie heeft.",
          "Religie, astrologie of onconventionele overtuigingen bewijzen op zichzelf geen psychische aandoening. Culturele context, het geheel van ervaringen, hun duur en invloed op het leven tellen mee; iemand op één overtuiging beoordelen is misleidend."
        ],
        "caution": "Trekken en klinische diagnoses zijn verschillende beschrijvingsniveaus. Een spectrummodel impliceert geen onvermijdelijke ontwikkeling naar ziekte.",
        "sources": [
          "schizotypy"
        ]
      },
      {
        "id": "continuum",
        "title": "Een continuüm is een vragenkaart, geen diagnostische schaal",
        "paragraphs": [
          "We kunnen een gewone trek, een uitgesproken trek, verminderde controle of dagelijks functioneren en een klinisch betekenisvolle toestand conceptueel naast elkaar zetten. Dat helpt vragen te stellen over intensiteit, flexibiliteit en gevolgen.",
          "Dit zijn geen onvermijdelijke ziektefasen. Verschillende toestanden passen niet op één lijn en een plaats op dit leerschema levert geen diagnose op. Vraag liever wat iemand kan beheersen, onder welke omstandigheden en tegen welke prijs."
        ]
      }
    ],
    "continuum": [
      "Gewone trek",
      "Uitgesproken trek",
      "Beperkte controle of functioneren",
      "Klinisch betekenisvolle toestand"
    ],
    "supportedItems": [
      "Hersensystemen dragen bij aan gedragsregulatie.",
      "Letsel of ontregeling van bepaalde systemen kan gedrag veranderen.",
      "Vergelijkbare handelingen kunnen verschillende mechanismen hebben."
    ],
    "unsupportedItems": [
      "Eén hersengebied bepaalt de persoonlijkheid volledig.",
      "Elke ongewone gewoonte wijst op ziekte.",
      "Een biologische bijdrage heft verantwoordelijkheid automatisch op.",
      "Eén gevalsbeschrijving bewijst een universele causale regel."
    ],
    "sourceNames": [
      "Executieve functies en verspreide controle",
      "Historische herbeoordeling van Gage",
      "Tics en het syndroom van Gilles de la Tourette",
      "Het omstreden syndroom van Geschwind",
      "OCD: kenmerken en onderzochte factoren",
      "Schizotypie en de relatie met het schizofreniespectrum"
    ],
    "questions": [
      {
        "question": "Iemand weet dat onderbreken ongepast is, maar stopt de reactie niet op tijd. Welk onderscheid is belangrijk?",
        "choices": [
          "Een regel kennen garandeert altijd controle.",
          "Een regel kennen en een reactie remmen zijn verschillende functies.",
          "Elke onderbreking bewijst hersenletsel."
        ],
        "explanation": "Een norm begrijpen garandeert geen succesvolle remming op een bepaald moment. Eén handeling stelt de oorzaak evenmin vast.",
        "correctIndex": 1
      },
      {
        "question": "Welke conclusie over Gage is het zorgvuldigst?",
        "choices": [
          "Zijn geval bewees dat persoonlijkheid in één gebied zit.",
          "Alle gevolgen zijn precies bekend en waren blijvend.",
          "Het geval is belangrijk, maar beperkte historische gegevens verhinderen veralgemening."
        ],
        "explanation": "Een historisch geval levert vragen en hypothesen op. Onvolledige gegevens en mogelijke latere aanpassing begrenzen conclusies.",
        "correctIndex": 2
      },
      {
        "question": "Waarom is een vocale tic niet simpelweg frontale ontremming?",
        "choices": [
          "Vergelijkbaar gedrag kan verschillende mechanismen hebben.",
          "Elke tic onthult verborgen gedachten.",
          "Tics zijn altijd bewuste normoverschrijdingen."
        ],
        "explanation": "Tics bewijzen geen verborgen bedoelingen. Alleen uiterlijke overeenkomst toont geen gedeeld mechanisme aan.",
        "correctIndex": 0
      },
      {
        "question": "Wat kan het educatieve continuüm bieden?",
        "choices": [
          "Een diagnose op basis van één sterke gewoonte.",
          "Vragen over controle, flexibiliteit en gevolgen voor het leven.",
          "De voorspelling dat een sterke trek altijd ziekte wordt."
        ],
        "explanation": "Een continuüm helpt verschillen te onderzoeken. Het is geen diagnostische schaal of onvermijdelijke verslechtering.",
        "correctIndex": 1
      },
      {
        "question": "Bij één persoon worden gedrag en een hersenverandering samen waargenomen. Wat volgt daaruit?",
        "choices": [
          "De hersenverandering verklaart al het gedrag volledig.",
          "Dezelfde relatie geldt noodzakelijk voor iedereen.",
          "Meer gegevens over causaliteit en alternatieve verklaringen zijn nodig."
        ],
        "explanation": "Samen voorkomen sluit andere oorzaken, omgekeerde richting of toeval niet uit. Eén geval bewijst geen universele wet.",
        "correctIndex": 2
      },
      {
        "question": "Wat verandert een biologische verklaring van een handeling?",
        "choices": [
          "Ze helpt controle te onderzoeken, maar beslist niet automatisch over verantwoordelijkheid.",
          "Ze heft verantwoordelijkheid altijd volledig op.",
          "Ze maakt de schade onbelangrijk."
        ],
        "explanation": "Oorzaken, controle, schade en verantwoordelijkheid hangen samen, maar zijn verschillend. Wetenschappelijke uitleg vervangt geen ethische afweging.",
        "correctIndex": 0
      }
    ]
  },
  "es": {
    "title": "The Trouble with Testosterone",
    "chapterTitle": "¿De qué tamaño es el tuyo?",
    "intro": "Leemos los ensayos de Robert M. Sapolsky sobre la biología de la conducta: exploramos mecanismos, límites de las conclusiones y preguntas sobre la responsabilidad.",
    "progress": "Disponible 1 de 17 capítulos. Los demás se incorporarán a medida que se preparen.",
    "chapter": "Capítulo",
    "chapters": "Capítulos del libro",
    "read": "Leer el primer capítulo",
    "contents": "Contenido del capítulo",
    "chapterIntro": "¿Dónde termina «así soy yo» y empieza «así funciona mi cerebro»?",
    "before": "Antes de leer",
    "beforeQuestion": "Si el cerebro influye en la conducta, ¿es la persona menos responsable de sus actos?",
    "after": "Después de leer",
    "afterQuestion": "¿Ha cambiado tu respuesta? ¿Cómo distingues ahora la causa de una acción, la capacidad de control y la responsabilidad?",
    "reflectionNote": "Reflexiona en privado. No hay puntuaciones ni una postura correcta, y no se guardan respuestas.",
    "summary": "Lectura educativa",
    "caution": "Aclaración científica",
    "conclusions": "¿Qué podemos concluir?",
    "supported": "Conclusiones fundamentadas",
    "unsupported": "Lo que no se puede deducir",
    "glossary": "Conceptos del capítulo",
    "quiz": "Comprueba tu comprensión",
    "quizIntro": "Elige una respuesta para ver la explicación de inmediato. Puedes cambiar tu elección.",
    "correct": "Correcto",
    "incorrect": "Incorrecto",
    "explanation": "Explicación",
    "sources": "Fuentes y procedencia",
    "bookSource": "El libro y su edición rusa",
    "contextSources": "Matices científicos e históricos",
    "sourceLabel": "Fuente",
    "editorial": "El texto de Sensus Vitae es una síntesis educativa independiente basada en un esquema editorial del capítulo, no una reproducción del libro. Las explicaciones y los ejemplos didácticos no son citas de Sapolsky. Las aclaraciones actuales se señalan por separado.",
    "verification": "Sigue pendiente cotejarlo con el capítulo completo de esta edición: no afirmamos reproducir la secuencia exacta de ejemplos ni las formulaciones del autor.",
    "health": "Este material ayuda a estudiar la conducta; no sirve para diagnosticarte ni para diagnosticar a otras personas.",
    "sections": [
      {
        "id": "introduction",
        "title": "Comprender antes de juzgar",
        "paragraphs": [
          "Palabras como grosero, impulsivo, rígido u obsesivo describen una impresión de la conducta, pero no la explican. Actos parecidos pueden implicar distintas limitaciones de la atención, la flexibilidad o la inhibición. La pregunta es cómo explorar esa frontera sin reducir a una persona a una etiqueta.",
          "Una explicación biológica no es una excusa automática. Podemos investigar las causas, reconocer el daño y discutir cómo evitar que se repita. Explicar un mecanismo no resuelve por sí solo una cuestión moral o jurídica."
        ]
      },
      {
        "id": "frontal-control",
        "title": "Corteza frontal y control de la conducta",
        "paragraphs": [
          "La corteza frontal comprende varias regiones con funciones distintas. Los sistemas prefrontales participan en mantener objetivos, planificar, valorar consecuencias y elegir acciones según el contexto. Trabajan junto a otras regiones cerebrales, no como un centro aislado de la personalidad.",
          "El control ejecutivo ayuda a no seguir automáticamente el primer impulso. La inhibición permite demorar o detener una respuesta inadecuada. Por ejemplo: notar las ganas de interrumpir, mantener presente el propósito de la conversación y esperar una pausa. Este ejemplo didáctico distingue tener un impulso de actuar según él."
        ],
        "caution": "Las explicaciones actuales sitúan el control en redes distribuidas. Que participe la corteza prefrontal no significa que una región determine toda la personalidad.",
        "sources": [
          "executive"
        ]
      },
      {
        "id": "gage",
        "title": "Phineas Gage: un caso y sus límites",
        "paragraphs": [
          "El caso histórico de Phineas Gage plantea preguntas sobre lesión cerebral y conducta. Tras su grave lesión se describieron cambios de comportamiento; el caso adquirió importancia en la historia del estudio de los sistemas frontales.",
          "La secuencia educativa es: una lesión puede alterar la regulación de la conducta, y los demás pueden percibirlo como un cambio de personalidad. Una observación aislada no predice cómo cambiará cualquier otra persona con una lesión."
        ],
        "caution": "Las pruebas históricas son limitadas. Un análisis posterior sugiere una posible adaptación social considerable. La magnitud y permanencia de los cambios son inciertas; hablar de destrucción total e irreversible de la personalidad exagera los datos.",
        "sources": [
          "gage"
        ]
      },
      {
        "id": "disinhibition",
        "title": "Conocer una regla no es lo mismo que poder detenerse",
        "paragraphs": [
          "Con desinhibición, una persona puede comprender una regla social y tener dificultades para frenar una respuesta en el momento necesario. Saber que interrumpir resulta inadecuado y poder detener una respuesta emergente son funciones diferentes.",
          "Esto no significa que toda infracción de una norma provenga de una lesión frontal. Importan el contexto, la observación a lo largo del tiempo y los mecanismos alternativos. Nombrar un mecanismo no sustituye el estudio individual."
        ]
      },
      {
        "id": "tourette",
        "title": "Síndrome de Tourette: un mecanismo diferente",
        "paragraphs": [
          "El síndrome de Tourette implica tics motores y vocales. No son simplemente mala educación ni pensamientos ocultos que escapan. Algunas personas pueden suprimir temporalmente un tic; eso no lo convierte en una acción intencional ordinaria.",
          "Decir involuntariamente palabras obscenas no ocurre en todas las personas ni es obligatorio para el diagnóstico. Una expresión parecida puede ser un tic, una reacción impulsiva o un comentario deliberado: la primera impresión no identifica el mecanismo."
        ],
        "caution": "No hay que equiparar los tics con la desinhibición frontal. Una conducta observable similar no demuestra una causa compartida.",
        "sources": [
          "tourette"
        ]
      },
      {
        "id": "temporal",
        "title": "Fenómenos temporales: una hipótesis histórica",
        "paragraphs": [
          "La literatura histórica describió en algunas personas con epilepsia temporal hipergrafía —un impulso muy intenso de escribir—, habla circunstancial o difícil de abandonar, apego a las rutinas e intensas preocupaciones religiosas o filosóficas. Eran observaciones particulares, no una descripción de todas las personas con epilepsia."
        ],
        "caution": "Sigue siendo controvertido que estos rasgos formen un síndrome específico. La religiosidad, el gusto por escribir o las costumbres no permiten concluir por sí solos que exista epilepsia.",
        "sources": [
          "temporal"
        ]
      },
      {
        "id": "ocd",
        "title": "Comprobar la puerta: hábito, ritual y dificultad para parar",
        "paragraphs": [
          "Comprobar la cerradura antes de salir es habitual. Pensemos en otra situación: alguien vuelve una y otra vez; comprobar reduce brevemente la duda, pero el impulso regresa. Cuando detener el ritual resulta difícil, puede consumir tiempo e interferir con el estudio, el trabajo y las relaciones.",
          "El ejemplo permite explorar el control y las consecuencias para la vida, no diagnosticar contando comprobaciones. En el TOC, las obsesiones y/o las conductas repetitivas pueden causar dificultades importantes; un hábito aislado no establece un trastorno."
        ],
        "caution": "El TOC no se explica mediante un simple desequilibrio de serotonina y dopamina. Se estudian interacciones entre redes cerebrales, influencias genéticas y otros factores; sus causas precisas no se reducen a un mecanismo.",
        "sources": [
          "ocd"
        ]
      },
      {
        "id": "schizotypy",
        "title": "Esquizotipia no significa esquizofrenia",
        "paragraphs": [
          "La esquizotipia es un concepto de investigación sobre características de percepción, creencias, pensamiento e interacción social. Entre los rasgos estudiados figuran experiencias inusuales y pensamiento mágico. Tener uno de estos rasgos no significa tener esquizofrenia.",
          "La religión, la astrología o las creencias poco convencionales no establecen por sí solas una enfermedad mental. Importan el contexto cultural, el conjunto de experiencias, su persistencia y sus efectos en la vida; juzgar por una sola creencia resulta engañoso."
        ],
        "caution": "Los rasgos y los diagnósticos clínicos son niveles de descripción diferentes. Un modelo de espectro no implica una progresión inevitable hacia una enfermedad.",
        "sources": [
          "schizotypy"
        ]
      },
      {
        "id": "continuum",
        "title": "Un continuo es un mapa de preguntas, no una escala diagnóstica",
        "paragraphs": [
          "Podemos situar conceptualmente un rasgo habitual junto a uno acentuado, una alteración del control o del funcionamiento cotidiano y una condición clínicamente significativa. Así formulamos preguntas sobre intensidad, flexibilidad y consecuencias.",
          "No son etapas inevitables de una enfermedad. Distintas condiciones no caben en una sola línea, ni una posición en este esquema educativo determina un diagnóstico. Conviene preguntar qué puede controlar una persona, en qué circunstancias y con qué esfuerzo."
        ]
      }
    ],
    "continuum": [
      "Rasgo habitual",
      "Rasgo acentuado",
      "Alteración del control o del funcionamiento",
      "Condición clínicamente significativa"
    ],
    "supportedItems": [
      "Los sistemas cerebrales participan en la regulación de la conducta.",
      "Una lesión o disfunción de ciertos sistemas puede cambiar la conducta.",
      "Actos observables similares pueden tener mecanismos diferentes."
    ],
    "unsupportedItems": [
      "Una región cerebral determina toda la personalidad.",
      "Toda costumbre inusual indica enfermedad.",
      "Una contribución biológica elimina automáticamente la responsabilidad.",
      "Un estudio de caso demuestra una regla causal universal."
    ],
    "sourceNames": [
      "Funciones ejecutivas y control distribuido",
      "Reevaluación histórica de Gage",
      "Tics y síndrome de Tourette",
      "El controvertido síndrome de Geschwind",
      "TOC: características y factores investigados",
      "Esquizotipia y su relación con el espectro de la esquizofrenia"
    ],
    "questions": [
      {
        "question": "Alguien sabe que no debe interrumpir, pero no frena a tiempo la respuesta. ¿Qué distinción importa?",
        "choices": [
          "Conocer una regla siempre garantiza el control.",
          "Conocer una regla e inhibir una respuesta son funciones diferentes.",
          "Toda interrupción demuestra una lesión cerebral."
        ],
        "explanation": "Comprender una norma no garantiza inhibir una respuesta en un momento concreto. Un solo acto tampoco establece su causa.",
        "correctIndex": 1
      },
      {
        "question": "¿Qué conclusión sobre Gage es más prudente?",
        "choices": [
          "Su caso demostró que la personalidad está en una región.",
          "Todas las consecuencias se conocen exactamente y fueron permanentes.",
          "El caso importa, pero las pruebas históricas limitadas impiden generalizarlo a todos."
        ],
        "explanation": "Un caso histórico plantea preguntas e hipótesis. Las pruebas incompletas y una posible adaptación posterior limitan las conclusiones.",
        "correctIndex": 2
      },
      {
        "question": "¿Por qué un tic vocal no es simplemente desinhibición frontal?",
        "choices": [
          "Conductas parecidas pueden surgir de mecanismos distintos.",
          "Todo tic revela pensamientos ocultos.",
          "Los tics siempre son infracciones deliberadas."
        ],
        "explanation": "Los tics no prueban intenciones ocultas. La semejanza externa no permite identificar un mecanismo compartido.",
        "correctIndex": 0
      },
      {
        "question": "¿Qué permite el continuo educativo?",
        "choices": [
          "Diagnosticar por la intensidad de un solo hábito.",
          "Preguntar por el control, la flexibilidad y los efectos en la vida.",
          "Predecir que un rasgo acentuado siempre se convertirá en enfermedad."
        ],
        "explanation": "El continuo ayuda a pensar en la variación. No es una escala diagnóstica ni una secuencia inevitable de deterioro.",
        "correctIndex": 1
      },
      {
        "question": "Se observaron un rasgo conductual y un cambio cerebral en una persona. ¿Qué se deduce?",
        "choices": [
          "El cambio explica por completo toda su conducta.",
          "La misma relación tiene que darse en todos.",
          "Hacen falta más datos sobre causalidad y explicaciones alternativas."
        ],
        "explanation": "La coincidencia no excluye otras causas, una dirección inversa o el azar. Un caso no establece una ley universal.",
        "correctIndex": 2
      },
      {
        "question": "¿Qué aporta una explicación biológica de un acto?",
        "choices": [
          "Ayuda a investigar la capacidad de control sin resolver automáticamente la responsabilidad.",
          "Siempre elimina toda responsabilidad.",
          "Hace irrelevante el daño causado."
        ],
        "explanation": "Causas, control, daño y responsabilidad están relacionados, pero son distintos. La explicación científica no sustituye la reflexión ética.",
        "correctIndex": 0
      }
    ]
  }
};
export const testosteroneChapters = Array.from({ length: 17 }, (_, index) => ({
 number: index + 1, available: index === 0,
}));
