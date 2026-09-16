import { testosteroneBookPath } from "@/lib/testosterone-content";
import type { Language } from "@/lib/site-content";

export type AuthorProfileCopy = {
 lead: string; affiliation: string; education: string; bio: string[];
 editorialLabel: string; editorial: string; journey: string; journeyIntro: string;
 themes: string[]; descriptions: string[]; onSite: string; availableText: string;
 readAll: string; reflection: string; reflectionText: string; reflectionAction: string;
 sources: string; bioSources: string; bookSources: string; sourceLabels: string[];
};

export const sapolskyProfile: Record<Language, AuthorProfileCopy> = {
  "ru": {
    "lead": "От стресса отдельной клетки — к вопросу о том, почему человек поступает именно так.",
    "affiliation": "Профессор биологии, неврологии и неврологических наук, нейрохирургии в Stanford University.",
    "education": "Биологическая антропология — Harvard University. Докторская степень по нейроэндокринологии — Rockefeller University.",
    "bio": [
      "Роберт Моррис Сапольски — нейроэндокринолог, приматолог и популяризатор науки о поведении. Его работа соединяет биологию, нейронауку и исследование поведения: от физиологии стресса и работы мозга до социальных отношений и причин человеческих поступков.",
      "Его научный путь объединяет лабораторные исследования и полевые наблюдения. Получив образование в области биологической антропологии и нейроэндокринологии, Сапольски много лет изучал диких бабуинов в Кении: как социальная среда, иерархия и отношения между животными связаны со стрессом и физиологией организма.",
      "Один из центральных вопросов его ранних работ можно сформулировать так: почему физиологическая реакция, которая помогает пережить кратковременную опасность, при длительной или повторной активации может сама способствовать проблемам со здоровьем?",
      "Этот вопрос позволяет проследить путь от физиологии стресса к более широкой проблеме: почему мы ведём себя именно так, как ведём себя? Задача — понять взаимосвязь биологии и социальной истории.",
      "В более поздних книгах он рассматривает поведение на разных уровнях — от процессов в мозге непосредственно перед поступком до гормонов, развития, предыдущего опыта, социальной среды, культуры и эволюционной истории.",
      "В «Всё решено: Жизнь без свободы воли» Сапольски делает наиболее дискуссионный шаг: защищает детерминистскую позицию и ставит под сомнение традиционное представление о свободе воли. Из неё он выводит вопросы об ответственности, наказании и морали. Это аргумент автора, а не установленный научный консенсус; его основания и выводы остаются предметом научной и философской дискуссии."
    ],
    "editorialLabel": "Редакционный взгляд Sensus Vitae",
    "editorial": "От клетки — к стрессу. От стресса — к поведению. От поведения — к вопросу о свободе воли.",
    "journey": "Маршрут идей Сапольского",
    "journeyIntro": "Пять книг — пять способов расширить вопрос о поведении. Это редакционный маршрут чтения, а не строгая хронология исследований: лабораторная и полевая работа Сапольского развивались параллельно.",
    "themes": [
      "Стресс и организм",
      "Гормоны и поведение",
      "Социальная жизнь приматов",
      "Почему мы поступаем именно так?",
      "Можем ли мы поступить иначе?"
    ],
    "descriptions": [
      "Реакция на стресс помогает мобилизовать организм при острой опасности. Сапольски объясняет, почему её хроническая активация, в том числе из-за психологических и социальных стрессоров, может повышать риск заболеваний. От физиологического механизма книга ведёт к вопросу о том, как мы живём со стрессом.",
      "Сборник эссе о связях биологии, гормонов, поведения и человеческой культуры. Сапольски показывает, чем опасны простые биологические объяснения: влияние гормонов нужно рассматривать вместе с контекстом и опытом, а не сводить к формуле «тестостерон вызывает агрессию».",
      "Личный рассказ о полевой работе с бабуинами в Африке. Наблюдения за иерархией, социальными отношениями, стрессом и повседневным поведением приматов соседствуют с опытом самого исследователя. Книга помогает понять, как жизнь в поле формировала его научные вопросы.",
      "Сапольски движется назад во времени от отдельного поступка. Что происходило в мозге за мгновения до него? Как повлияли гормоны, развитие и прежний опыт? Как связаны социальная среда, культура и эволюционная история? Поведение предстаёт результатом взаимодействия этих уровней, а не одной причины.",
      "От объяснения причин поведения Сапольски переходит к вопросу о свободе воли. Он защищает сильную детерминистскую позицию и обсуждает её последствия для ответственности и наказания. Это его аргументированная позиция; вопросы свободы воли, детерминизма и моральной ответственности остаются открытыми для научной и философской дискуссии."
    ],
    "onSite": "На Sensus Vitae",
    "availableText": "Здесь полностью доступен проект чтения книги «Почему у зебр не бывает язв»: резюме всех 18 глав, ключевые понятия и вопросы для размышления. Также доступна первая глава «Игр тестостерона и других вопросов биологии поведения»; остальные 16 глав и материалы по трём другим книгам готовятся.",
    "readAll": "Читать 18 глав",
    "reflection": "От чтения к размышлению",
    "reflectionText": "Вернитесь к вопросам по главам: они помогают связать идеи книги с собственными наблюдениями и проверить понимание.",
    "reflectionAction": "Смотреть вопросы по главам",
    "sources": "Источники профиля",
    "bioSources": "Биография и научная работа",
    "bookSources": "Книги — страницы издателей",
    "sourceLabels": [
      "Stanford — должности и исследования",
      "Rockefeller — биографический очерк",
      "Cornell — образование и научный путь",
      "UC Davis — дискуссия о свободе воли"
    ]
  },
  "en": {
    "lead": "From stress in a single cell to the question of why we act as we do.",
    "affiliation": "Professor of Biology, Neurology and Neurological Sciences, and Neurosurgery at Stanford University.",
    "education": "Biological anthropology at Harvard University; a doctorate in neuroendocrinology from Rockefeller University.",
    "bio": [
      "Robert Morris Sapolsky is a neuroendocrinologist, primatologist and writer on the science of behaviour. His work connects biology, neuroscience and behavioural research: from stress physiology and the brain to social relationships and the causes of human actions.",
      "His scientific career brings together laboratory research and field observation. Trained in biological anthropology and neuroendocrinology, he spent many years studying wild baboons in Kenya, examining how social environments, hierarchies and relationships relate to stress and physiology.",
      "One central question in his early work can be put simply: why can a physiological response that helps an organism survive a brief danger contribute to health problems when activated repeatedly or for too long?",
      "That question offers a route from stress physiology to a broader problem: why do we behave as we do? The aim is to understand how biology and social history interact.",
      "In his later books, he examines behaviour at several levels: brain processes immediately before an action, hormones, development, previous experience, social environments, culture and evolutionary history.",
      "In Determined, Sapolsky takes his most controversial step: he defends a deterministic position and challenges traditional notions of free will. He explores what this would mean for responsibility, punishment and morality. This is the author's argument, not an established scientific consensus; its premises and implications remain subjects of scientific and philosophical debate."
    ],
    "editorialLabel": "The Sensus Vitae editorial perspective",
    "editorial": "From the cell to stress. From stress to behaviour. From behaviour to the question of free will.",
    "journey": "A journey through Sapolsky’s ideas",
    "journeyIntro": "Five books that progressively widen the question of behaviour. This is an editorial reading route, not a strict research chronology: Sapolsky’s laboratory and fieldwork developed alongside one another.",
    "themes": [
      "Stress and the body",
      "Hormones and behaviour",
      "The social lives of primates",
      "Why do we act as we do?",
      "Could we have acted otherwise?"
    ],
    "descriptions": [
      "The stress response mobilises the body during acute danger. Sapolsky explains why chronic activation, including in response to psychological and social stressors, can increase vulnerability to illness. The book moves from physiological mechanisms to the question of how we live with stress.",
      "A collection of essays on the connections between biology, hormones, behaviour and human culture. Sapolsky explores the pitfalls of simple biological explanations: hormonal effects need to be understood in context and in relation to experience, not reduced to the claim that testosterone causes aggression.",
      "A personal account of fieldwork with baboons in Africa. Observations of hierarchy, social relationships, stress and everyday primate behaviour sit alongside the researcher's own experiences. The book provides context for how life in the field shaped his scientific questions.",
      "Sapolsky works backwards in time from an action. What happened in the brain moments before it? What roles did hormones, development and earlier experience play? How do social environments, culture and evolutionary history fit in? Behaviour emerges from the interaction of these levels, rather than a single cause.",
      "From explaining the causes of behaviour, Sapolsky turns to free will. He advances a strongly deterministic argument and explores its implications for responsibility and punishment. This is his argued position; free will, determinism and moral responsibility remain subjects of scientific and philosophical debate."
    ],
    "onSite": "On Sensus Vitae",
    "availableText": "The reading project for Why Zebras Don’t Get Ulcers is fully available here: all 18 chapter summaries, key concepts and questions for reflection. The first chapter of The Trouble with Testosterone is also available; its remaining 16 chapters and materials for the other three books are in preparation.",
    "readAll": "Read all 18 chapters",
    "reflection": "From reading to reflection",
    "reflectionText": "Return to the chapter questions to connect the book’s ideas with your own observations and check your understanding.",
    "reflectionAction": "Explore the chapter questions",
    "sources": "Profile sources",
    "bioSources": "Biography and research",
    "bookSources": "Books — publisher pages",
    "sourceLabels": [
      "Stanford — appointments and research",
      "Rockefeller — biographical portrait",
      "Cornell — education and scientific career",
      "UC Davis — the free-will debate"
    ]
  },
  "nl": {
    "lead": "Van stress in één cel naar de vraag waarom mensen doen wat ze doen.",
    "affiliation": "Hoogleraar biologie, neurologie en neurologische wetenschappen, en neurochirurgie aan Stanford University.",
    "education": "Biologische antropologie aan Harvard University; gepromoveerd in de neuro-endocrinologie aan Rockefeller University.",
    "bio": [
      "Robert Morris Sapolsky is neuro-endocrinoloog, primatoloog en schrijver over de wetenschap van gedrag. Zijn werk verbindt biologie, neurowetenschap en gedragsonderzoek: van stressfysiologie en de hersenen tot sociale relaties en de oorzaken van menselijk handelen.",
      "Zijn wetenschappelijke loopbaan combineert laboratoriumonderzoek met veldobservaties. Na zijn opleiding in biologische antropologie en neuro-endocrinologie bestudeerde hij jarenlang wilde bavianen in Kenia: hoe hangen hun sociale omgeving, hiërarchie en onderlinge relaties samen met stress en lichamelijke processen?",
      "Een centrale vraag uit zijn vroege werk is eenvoudig te formuleren: waarom kan een lichamelijke reactie die helpt om kortdurend gevaar te overleven, bij langdurige of herhaalde activering zelf bijdragen aan gezondheidsproblemen?",
      "Die vraag voert van stressfysiologie naar een breder probleem: waarom gedragen we ons zoals we ons gedragen? Het gaat erom de wisselwerking tussen biologie en sociale geschiedenis te begrijpen.",
      "In zijn latere boeken bekijkt hij gedrag op verschillende niveaus: hersenprocessen vlak voor een handeling, hormonen, ontwikkeling, eerdere ervaringen, sociale omgeving, cultuur en evolutionaire geschiedenis.",
      "In Determined zet Sapolsky zijn meest omstreden stap: hij verdedigt een deterministisch standpunt en trekt traditionele opvattingen over de vrije wil in twijfel. Hij onderzoekt de gevolgen daarvan voor verantwoordelijkheid, straf en moraal. Dit is zijn betoog, geen vaststaande wetenschappelijke consensus; de uitgangspunten en conclusies blijven onderwerp van wetenschappelijk en filosofisch debat."
    ],
    "editorialLabel": "De redactionele blik van Sensus Vitae",
    "editorial": "Van cel naar stress. Van stress naar gedrag. Van gedrag naar de vraag naar de vrije wil.",
    "journey": "Een route door Sapolsky’s ideeën",
    "journeyIntro": "Vijf boeken die de vraag naar gedrag steeds verder verbreden. Dit is een redactionele leesroute, geen strikte onderzoekschronologie: Sapolsky’s laboratoriumonderzoek en veldwerk ontwikkelden zich naast elkaar.",
    "themes": [
      "Stress en het lichaam",
      "Hormonen en gedrag",
      "Het sociale leven van primaten",
      "Waarom doen we wat we doen?",
      "Hadden we anders kunnen handelen?"
    ],
    "descriptions": [
      "De stressreactie mobiliseert het lichaam bij acuut gevaar. Sapolsky legt uit waarom chronische activering, ook door psychologische en sociale stressoren, de kwetsbaarheid voor ziekte kan vergroten. Het boek voert van lichamelijke mechanismen naar de vraag hoe we met stress leven.",
      "Een essaybundel over de samenhang tussen biologie, hormonen, gedrag en menselijke cultuur. Sapolsky laat zien waar simpele biologische verklaringen tekortschieten: de invloed van hormonen vraagt om aandacht voor context en ervaring, niet om de formule dat testosteron agressie veroorzaakt.",
      "Een persoonlijk verslag van veldwerk met bavianen in Afrika. Observaties van hiërarchie, sociale relaties, stress en dagelijks primatengedrag worden verweven met de ervaringen van de onderzoeker. Zo wordt zichtbaar hoe het leven in het veld zijn wetenschappelijke vragen vormde.",
      "Sapolsky redeneert vanuit een handeling terug in de tijd. Wat gebeurde er vlak daarvoor in de hersenen? Welke rol speelden hormonen, ontwikkeling en eerdere ervaringen? Hoe passen sociale omgeving, cultuur en evolutionaire geschiedenis in dat verhaal? Gedrag komt voort uit hun wisselwerking, niet uit één oorzaak.",
      "Van de oorzaken van gedrag gaat Sapolsky naar de vrije wil. Hij verdedigt een uitgesproken deterministisch standpunt en onderzoekt de gevolgen voor verantwoordelijkheid en straf. Het blijft zijn beargumenteerde positie: vrije wil, determinisme en morele verantwoordelijkheid zijn onderwerp van wetenschappelijk en filosofisch debat."
    ],
    "onSite": "Op Sensus Vitae",
    "availableText": "Het leesproject bij Waarom krijgen zebra’s geen maagzweren? is hier volledig beschikbaar: alle 18 hoofdstuksamenvattingen, kernbegrippen en reflectievragen. Ook het eerste hoofdstuk van The Trouble with Testosterone is beschikbaar; de overige 16 hoofdstukken en het materiaal bij de drie andere boeken zijn in voorbereiding.",
    "readAll": "Lees alle 18 hoofdstukken",
    "reflection": "Van lezen naar reflectie",
    "reflectionText": "Keer terug naar de vragen per hoofdstuk om de ideeën uit het boek te verbinden met je eigen waarnemingen en je begrip te toetsen.",
    "reflectionAction": "Bekijk de hoofdstukvragen",
    "sources": "Bronnen bij dit profiel",
    "bioSources": "Biografie en onderzoek",
    "bookSources": "Boeken — uitgeverspagina’s",
    "sourceLabels": [
      "Stanford — aanstellingen en onderzoek",
      "Rockefeller — biografisch portret",
      "Cornell — opleiding en wetenschappelijke loopbaan",
      "UC Davis — het debat over de vrije wil"
    ]
  },
  "es": {
    "lead": "Del estrés en una célula a la pregunta de por qué actuamos como lo hacemos.",
    "affiliation": "Profesor de Biología, Neurología y Ciencias Neurológicas, y Neurocirugía en Stanford University.",
    "education": "Antropología biológica en Harvard University; doctorado en neuroendocrinología en Rockefeller University.",
    "bio": [
      "Robert Morris Sapolsky es neuroendocrinólogo, primatólogo y divulgador de la ciencia del comportamiento. Su trabajo conecta la biología, la neurociencia y el estudio de la conducta: desde la fisiología del estrés y el cerebro hasta las relaciones sociales y las causas de nuestros actos.",
      "Su trayectoria combina la investigación de laboratorio y la observación de campo. Formado en antropología biológica y neuroendocrinología, estudió durante muchos años a los babuinos salvajes de Kenia: cómo se relacionan el entorno social, las jerarquías y los vínculos entre animales con el estrés y la fisiología.",
      "Una pregunta central de sus primeros trabajos puede formularse así: ¿por qué una respuesta fisiológica que ayuda a sobrevivir a un peligro breve puede contribuir a problemas de salud cuando se activa de forma prolongada o repetida?",
      "Esa pregunta conduce de la fisiología del estrés a un problema más amplio: ¿por qué nos comportamos como lo hacemos? Se trata de comprender la interacción entre la biología y la historia social.",
      "En sus libros posteriores examina la conducta en varios niveles: los procesos cerebrales inmediatamente anteriores a una acción, las hormonas, el desarrollo, la experiencia previa, el entorno social, la cultura y la historia evolutiva.",
      "En Determined, Sapolsky da su paso más controvertido: defiende una posición determinista y cuestiona las nociones tradicionales del libre albedrío. Explora sus consecuencias para la responsabilidad, el castigo y la moral. Es la tesis del autor, no un consenso científico establecido; sus fundamentos e implicaciones siguen siendo objeto de debate científico y filosófico."
    ],
    "editorialLabel": "La perspectiva editorial de Sensus Vitae",
    "editorial": "De la célula al estrés. Del estrés a la conducta. De la conducta a la pregunta por el libre albedrío.",
    "journey": "Un recorrido por las ideas de Sapolsky",
    "journeyIntro": "Cinco libros que amplían progresivamente la pregunta por la conducta. Es un itinerario editorial de lectura, no una cronología estricta de investigación: el laboratorio y el trabajo de campo de Sapolsky se desarrollaron en paralelo.",
    "themes": [
      "El estrés y el organismo",
      "Hormonas y conducta",
      "La vida social de los primates",
      "¿Por qué actuamos como lo hacemos?",
      "¿Podríamos haber actuado de otro modo?"
    ],
    "descriptions": [
      "La respuesta al estrés moviliza al organismo ante un peligro inmediato. Sapolsky explica por qué su activación crónica, también ante factores psicológicos y sociales, puede aumentar la vulnerabilidad a las enfermedades. El libro parte de los mecanismos fisiológicos para preguntarse cómo vivimos con el estrés.",
      "Una colección de ensayos sobre las relaciones entre biología, hormonas, conducta y cultura humana. Sapolsky muestra los riesgos de las explicaciones biológicas demasiado simples: la influencia hormonal exige atender al contexto y a la experiencia, no reducirse a la fórmula de que la testosterona causa agresividad.",
      "Un relato personal del trabajo de campo con babuinos en África. Las observaciones sobre jerarquía, relaciones sociales, estrés y conducta cotidiana se entrelazan con las experiencias del investigador. El libro permite comprender cómo la vida en el campo fue dando forma a sus preguntas científicas.",
      "Sapolsky retrocede en el tiempo a partir de una acción. ¿Qué ocurrió en el cerebro instantes antes? ¿Cómo influyeron las hormonas, el desarrollo y las experiencias previas? ¿Qué papel tienen el entorno social, la cultura y la historia evolutiva? La conducta surge de la interacción entre estos niveles, no de una causa única.",
      "Tras explicar las causas de la conducta, Sapolsky aborda el libre albedrío. Defiende una tesis marcadamente determinista y examina sus consecuencias para la responsabilidad y el castigo. Es su posición argumentada: el libre albedrío, el determinismo y la responsabilidad moral siguen siendo objeto de debate científico y filosófico."
    ],
    "onSite": "En Sensus Vitae",
    "availableText": "El proyecto de lectura de ¿Por qué las cebras no tienen úlcera? está disponible completo: los resúmenes de los 18 capítulos, conceptos clave y preguntas de reflexión. También está disponible el primer capítulo de The Trouble with Testosterone; los otros 16 capítulos y los materiales de los tres libros restantes están en preparación.",
    "readAll": "Leer los 18 capítulos",
    "reflection": "De la lectura a la reflexión",
    "reflectionText": "Vuelve a las preguntas de cada capítulo para relacionar las ideas del libro con tus propias observaciones y comprobar tu comprensión.",
    "reflectionAction": "Consultar las preguntas por capítulo",
    "sources": "Fuentes del perfil",
    "bioSources": "Biografía e investigación",
    "bookSources": "Libros — páginas de las editoriales",
    "sourceLabels": [
      "Stanford — cargos e investigación",
      "Rockefeller — semblanza biográfica",
      "Cornell — formación y trayectoria científica",
      "UC Davis — el debate sobre el libre albedrío"
    ]
  }
};

export const profileBiographySources = [
 "https://profiles.stanford.edu/robert-sapolsky",
 "https://www.rockefeller.edu/news/17962-alumnus-robert-sapolsky-honored-with-2008-lewis-thomas-prize/",
 "https://news.cornell.edu/stories/1998/09/biologist-robert-sapolsky-talks-stress-oct-14",
 "https://mindbrain.ucdavis.edu/events/exploring-mind-do-we-have-free-will-mitchell-and-sapolsky-debate",
];
export const profileBooks = [
 { path: "sapolsky", title: "Why Zebras Don’t Get Ulcers", source: "https://us.macmillan.com/books/9780805073690/whyzebrasdontgetulcers/", available: true },
 { path: testosteroneBookPath, title: "The Trouble with Testosterone", titleRu: "Игры тестостерона и другие вопросы биологии поведения", source: "https://www.simonandschuster.com/books/The-Trouble-With-Testosterone/Robert-M-Sapolsky/9781439125052", available: true },
 { title: "A Primate’s Memoir", titleRu: "Записки примата: Необычайная жизнь учёного среди павианов", source: "https://www.simonandschuster.net/books/A-Primates-Memoir/Robert-M-Sapolsky/9780743202411", available: false },
 { title: "Behave", titleRu: "Биология добра и зла: Как наука объясняет наши поступки", source: "https://www.penguin.co.uk/books/414929/behave-by-robert-sapolsky/9780099575061", available: false },
 { title: "Determined", titleRu: "Всё решено: Жизнь без свободы воли", source: "https://www.penguinrandomhouse.com/books/592344/determined-by-robert-m-sapolsky/", available: false },
];
