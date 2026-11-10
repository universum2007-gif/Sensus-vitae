import type { Language, StaticArticle } from './site-content';

type Check = { question: string; answer: string; section: number };
type Lesson = {
  readTime: string; contents: string; checkTitle: string; instruction: string;
  reveal: string; returnLabel: string; fullText: string; related: string;
  body: StaticArticle['body']; checks: Check[];
};
export const personalityGeneticsSlug = 'personality-genetics-nature-2026';
export const personalityGeneticsSource = {
  label: 'Schwaba T., Clapp Sullivan M. L., Akingbuwa W. A. et al. Robust inference and correlates from genetic associations with personality. Nature 658, 1226–1236 (2026). DOI: 10.1038/s41586-026-10992-9',
  href: 'https://doi.org/10.1038/s41586-026-10992-9',
};

export const personalityGeneticsLearning: Record<Language, Lesson> = {
  ru: {
    readTime: '15 мин', contents: 'Содержание разбора', checkTitle: 'Самопроверка: объясни своими словами',
    instruction: 'Сначала сформулируй ответ самостоятельно, затем открой разбор. Ответы не вводятся, не сохраняются и не отправляются на сервер.',
    reveal: 'Показать объяснение', returnLabel: 'Вернуться к разделу', fullText: 'Полный текст первоисточника в PubMed Central', related: 'Связанный урок: генетические механизмы 14 психических расстройств',
    body: [
      { heading: '1. Какой вопрос задаёт исследование?', paragraphs: [
        'Узнаваемые привычки думать, чувствовать и действовать образуют относительно устойчивые черты личности. Относительно устойчивые — не значит неизменные. Исследовательский вопрос здесь: какие различия ДНК статистически связаны с различиями измеренных черт и насколько устойчивы эти связи?',
        'Статья Schwaba и соавторов опубликована онлайн 2 сентября 2026 года, в выпуске Nature — 29 октября. Метаанализ объединяет 46 когорт; объём выборки зависит от черты: от 611 037 до 1 136 711 участников. Это не пять независимых групп, которые можно сложить: одни люди могли оцениваться по нескольким чертам. Это разбор опубликованной работы, а не сообщение о новом исследовании сегодня.',
      ] },
      { heading: '2. Большая пятёрка: шкалы, а не пять типов людей', paragraphs: [
        'Big Five описывает широкие измерения личности. Человек получает положение на каждой шкале; его не помещают в одну из пяти коробок. Опросник измеряет ответы о привычном поведении, а не читает личность непосредственно из мозга или ДНК.',
      ], bullets: [
        'Экстраверсия — склонность к социальной активности, энергичности и напористости.',
        'Доброжелательность — склонность к сотрудничеству, доверию и учёту интересов других.',
        'Добросовестность — организованность, самодисциплина и настойчивость в достижении целей.',
        'Нейротизм — склонность чаще испытывать отрицательные эмоции; это черта, а не диагноз.',
        'Открытость опыту — любознательность, интерес к идеям, воображению и новым впечатлениям. Высокий балл не делает человека «лучше».',
      ] },
      { heading: '3. Как GWAS связывает ДНК и баллы опросника', paragraphs: [
        'SNP — вариант одной позиции ДНК. GWAS проверяет, связана ли дозировка варианта, обычно 0, 1 или 2 копии выбранного аллеля, со средним баллом черты при учёте заданных поправок. Затем метаанализ объединяет оценки разных когорт, учитывая их статистическую точность.',
        'Проверяются миллионы вариантов, поэтому случайные совпадения неизбежны. Порог P < 5 × 10⁻⁸ помогает учитывать множественные проверки. Малое p-value не означает большой эффект и не является вероятностью того, что гипотеза верна. Соседние варианты могут наследоваться совместно: ведущий SNP отмечает сигнал в области генома, но не обязательно является причинным вариантом.',
      ] },
      { heading: '4. Много находок — очень малые отдельные эффекты', paragraphs: [
        'Авторы сообщили о 1 260 приблизительно независимых ведущих SNP для пяти черт; 824 находились в областях, ранее не связанных с соответствующей чертой. Это не 1 260 «генов характера». Локус — область генома; один сигнал может указывать на несколько возможных биологических путей.',
        'Для экстраверсии медианная оценка среди ведущих SNP после поправки на завышение обнаруженных эффектов составляла 0,009 стандартного отклонения на копию аллеля. Это очень небольшое среднее различие, а не прибавка к характеру конкретного человека. Статистическая обнаружимость растёт с размером выборки, даже когда практический эффект мал.',
      ] },
      { heading: '5. Наследуемость: о различиях в группе, не о долях человека', paragraphs: [
        'SNP-наследуемость оценивает долю вариации измеренного признака в изучаемой популяции, связанную с учитываемыми распространёнными вариантами в данной модели. В популяционном анализе LDSC для EUR-like данных оценки составили 4,8–9,3% в зависимости от черты. Это не вся возможная наследуемость и не точность индивидуального прогноза.',
        'Оставшуюся долю нельзя просто назвать «влиянием воспитания»: в ней остаются неучтённые генетические влияния, особенности модели и ошибка измерения наряду со средовыми различиями. Более надёжные опросники давали более высокие оценки: для типичной надёжности авторы оценили диапазон 9,3–13,3%. Это другой анализ, а не исправление первого числа.',
      ] },
      { heading: '6. Полигенный индекс и учебный пример', paragraphs: [
        'Полигенный индекс (PGI) суммирует дозировки многих аллелей с весами, полученными из GWAS. Для проверки прогноза нужны люди, чьи данные не использовались при оценке этих весов: иначе модель может казаться точнее, чем она есть.',
        'Вымышленный пример, не данные статьи: пусть три условных варианта имеют веса +0,02, −0,01 и +0,03, а число копий равно 1, 2 и 0. Индекс равен 1 × 0,02 + 2 × (−0,01) + 0 × 0,03 = 0. Такой ноль — сумма в условной шкале, а не отсутствие генетических влияний или «нулевая экстраверсия». Реальные индексы используют гораздо больше вариантов.',
        'В статье индексы статистически предсказывали соответствующие черты в независимых проверках. Поэтому говорить, что предсказания вообще нет, неправильно. Но ограниченный групповой прогноз не превращается в точный тест характера: распределения людей с разными индексами сильно перекрываются, а перенос между популяциями требует отдельной проверки.',
      ] },
      { heading: '7. Зачем сравнивать братьев, сестёр и близнецов?', paragraphs: [
        'Связь ДНК и поведения между семьями может включать семейную среду и различия между группами населения. Например, генотип родителей может быть связан с тем, какие условия они создают ребёнку. Это один из возможных путей ген–средовой корреляции, а не обязательно прямой эффект унаследованного варианта.',
        'Сравнения внутри семьи используют различия унаследованных вариантов между родственниками, частично удерживая общие условия постоянными. В работе семейные анализы в целом поддержали устойчивость ассоциаций и небольшую роль общего семейного смешения в проверенных оценках. Это не доказывает, что среда не важна: индивидуальный опыт, неточность измерения и предпосылки метода остаются.',
      ] },
      { heading: '8. Генетическая корреляция и причинность', paragraphs: [
        'Генетическая корреляция означает, что оценки генетических влияний на два признака связаны. Она не говорит, какая доля людей имеет оба признака, и сама не устанавливает причинную стрелку. Общие варианты могут воздействовать на несколько процессов.',
        'Авторы также применяли менделевскую рандомизацию для проверки возможных причинных направлений. Генетические варианты здесь служат инструментами; нужны предпосылки об их связи с изучаемым фактором, смешением и альтернативными путями к исходу. Результаты поддерживают некоторые причинные гипотезы, но это не эксперимент по изменению личности и не доказательство причинности каждой найденной связи.',
      ] },
      { heading: '9. Как применить идею без генетических ярлыков', paragraphs: [
        'Учебная ситуация, не результат статьи: два студента с похожей склонностью к тревожным переживаниям готовятся к экзамену. У одного есть понятный план и поддержка; другой сталкивается с перегрузкой. Разное поведение совместимо с похожей предрасположенностью. По этой истории нельзя вычислить генотип или установить взаимодействие генов и среды — для этого нужен специальный анализ.',
        'Полезный вывод для чтения новостей: спроси, что измерено, в какой группе, как велик эффект и проверяли ли переносимость. Ни индекс, ни одна черта не определяют ценность человека. Эта работа не обосновывает отбор людей на учёбу или работу по генетическому «профилю личности».',
      ] },
      { heading: '10. Ограничения и что ещё нужно проверить', bullets: [
        'Основная мощность получена в EUR-like выборках. Эти обозначения описывают генетическое сходство с референсами, а не жёсткие биологические категории. Прогнозы переносились на AFR-like группы слабее и не одинаково для всех черт.',
        'Результат зависит от опросника, надёжности, самоотчёта или оценки другим человеком. Огромная выборка не устраняет систематическую ошибку измерения или отбора участников.',
        'Анализы не были предварительно зарегистрированы. Это не делает результаты ложными, но затрудняет независимое различение заранее заданных и поисковых проверок.',
        'Малое p-value, семейная устойчивость и статистический прогноз отвечают на разные вопросы. Ни одно из них само по себе не раскрывает полную биологическую цепочку от ДНК к поведению.',
      ] },
      { heading: '11. Мини-глоссарий и связь с другим уроком', bullets: [
        'Аллель — один из вариантов последовательности в определённой позиции; SNP — однонуклеотидный вариант.',
        'Локус — область генома; полигенность — участие множества генетических вариантов.',
        'Стандартное отклонение — мера разброса; 0,009 таких единицы — очень малый средний сдвиг.',
        'PGI — взвешенная сумма вариантов; SNP-наследуемость — оценка вариации признака в популяции. Это разные величины.',
        'Смешение — влияние другого фактора, осложняющее интерпретацию связи; надёжность измерения — его воспроизводимость при соответствующих условиях.',
        'Большая пятёрка описывает черты. Другой урок на сайте рассматривает 14 психических расстройств: его пять общих факторов — отдельная статистическая модель, а не Большая пятёрка.',
      ] },
      { heading: '12. Источник и вопрос для размышления', paragraphs: [
        'Проверены аннотация, Table 1 и разделы Population-level meta-analysis, Characterizing SNP heritability, Polygenic prediction of personality, Evaluating familial confounding, Discussion и Methods первоисточника, ссылка ниже. Числа относятся к указанным анализам. Объяснения, арифметический пример и задания составлены Sensus Vitae самостоятельно; рисунки и таблицы издателя не воспроизводятся.',
        'Какие дополнительные данные понадобились бы, чтобы от групповой генетической связи перейти к полезному и справедливому решению о конкретном человеке? Подумай о точности, переносимости, цели и последствиях ошибки.',
      ] },
    ],
    checks: [
      { question: 'Найдено много значимых SNP. Почему это не список «генов характера»?', answer: 'SNP отмечает статистическую ассоциацию; соседние варианты могут наследоваться совместно. Отдельные эффекты малы, локус не равен причинному гену, а черта полигенна. Значимость не показывает величину эффекта.', section: 4 },
      { question: 'Если SNP-наследуемость равна 9%, можно ли сказать: «9% моей личности — гены»?', answer: 'Нет. Это оценка различий измеренной черты между людьми в определённых условиях и модели, а не разложение одного человека на генетическую и средовую части. Остаток также нельзя целиком приписать воспитанию.', section: 5 },
      { question: 'У условного PGI веса +0,02, −0,01, +0,03 и дозировки 1, 2, 0. Каков результат и смысл нуля?', answer: '0,02 − 0,02 + 0 = 0. Вклады взаимно компенсировались в условной шкале. Ноль не означает отсутствия генетических влияний и не является нулевым баллом личности.', section: 6 },
      { question: 'Семейные сравнения сохранили ассоциацию. Доказывает ли это, что воспитание не влияет на личность?', answer: 'Нет. Они уменьшают некоторые виды общего семейного смешения. Они не исключают индивидуальную среду, все альтернативные пути или ограничения модели и не измеряют общий вклад воспитания.', section: 7 },
      { question: 'Значимый PGI у одной группы предложили использовать для точного прогноза у другого населения. Что проверить?', answer: 'Независимую проверку, величину и неопределённость прогноза, сопоставимость измерений и переносимость. Значимый групповой эффект не гарантирует точности для отдельного человека или другой популяции.', section: 10 },
    ],
  },
  es: {
    readTime: '15 min', contents: 'Contenido del análisis', checkTitle: 'Autoevaluación: explícalo con tus palabras',
    instruction: 'Formula primero tu respuesta y después abre la explicación. No se introducen, guardan ni envían respuestas al servidor.',
    reveal: 'Mostrar explicación', returnLabel: 'Volver al apartado', fullText: 'Texto completo de la fuente en PubMed Central', related: 'Lección relacionada: mecanismos genéticos de 14 trastornos psiquiátricos',
    body: [
      { heading: '1. ¿Qué pregunta plantea el estudio?', paragraphs: [
        'Las formas habituales de pensar, sentir y actuar constituyen rasgos de personalidad relativamente estables. Relativamente estable no significa inmutable. La pregunta es qué diferencias de ADN se asocian estadísticamente con diferencias en los rasgos medidos y hasta qué punto son consistentes esas asociaciones.',
        'El artículo de Schwaba y colaboradores se publicó en línea el 2 de septiembre de 2026 y en el número de Nature del 29 de octubre. El metaanálisis reúne 46 cohortes; según el rasgo, incluye entre 611 037 y 1 136 711 participantes. No son cinco grupos independientes que puedan sumarse: una persona puede haber sido evaluada en varios rasgos. Esta es una explicación de un trabajo publicado, no una noticia de un estudio aparecido hoy.',
      ] },
      { heading: '2. Los Cinco Grandes: dimensiones, no cinco tipos de personas', paragraphs: [
        'Big Five describe dimensiones amplias de personalidad. Cada persona ocupa una posición en cada escala; no se la coloca en una de cinco cajas. Un cuestionario mide respuestas sobre conductas habituales, no lee directamente la personalidad en el cerebro o el ADN.',
      ], bullets: [
        'Extraversión: tendencia a la actividad social, la energía y la asertividad.',
        'Amabilidad: tendencia a cooperar, confiar y considerar los intereses ajenos.',
        'Responsabilidad: organización, autodisciplina y perseverancia en los objetivos.',
        'Neuroticismo: tendencia a experimentar emociones negativas; es un rasgo, no un diagnóstico.',
        'Apertura a la experiencia: curiosidad e interés por ideas, imaginación y experiencias nuevas. Una puntuación alta no hace a alguien «mejor».',
      ] },
      { heading: '3. Cómo relaciona un GWAS el ADN con las puntuaciones', paragraphs: [
        'Un SNP es una variante en una posición del ADN. Un GWAS examina si la dosis de una variante, normalmente 0, 1 o 2 copias de un alelo elegido, se asocia con la puntuación media del rasgo, considerando los ajustes especificados. El metaanálisis combina las estimaciones de distintas cohortes según su precisión estadística.',
        'Al examinar millones de variantes aparecen coincidencias por azar. El umbral P < 5 × 10⁻⁸ ayuda a tener en cuenta las pruebas múltiples. Un valor p pequeño no implica un efecto grande ni expresa la probabilidad de que una hipótesis sea verdadera. Variantes cercanas pueden heredarse conjuntamente: el SNP principal señala una región, pero no tiene por qué ser la variante causal.',
      ] },
      { heading: '4. Muchos hallazgos y efectos individuales muy pequeños', paragraphs: [
        'Los autores identificaron 1 260 SNP principales aproximadamente independientes entre los cinco rasgos; 824 estaban en regiones no asociadas previamente con el rasgo correspondiente. No son 1 260 «genes del carácter». Un locus es una región del genoma y puede apuntar a varias vías biológicas posibles.',
        'Para extraversión, la mediana del efecto de los SNP principales, corregida por la sobreestimación de efectos descubiertos, fue de 0,009 desviaciones típicas por copia del alelo. Es una diferencia media muy pequeña, no una cantidad que se añada al carácter de una persona. Una muestra mayor permite detectar efectos pequeños sin convertirlos en efectos importantes en la práctica.',
      ] },
      { heading: '5. Heredabilidad: diferencias entre personas, no porciones de una persona', paragraphs: [
        'La heredabilidad basada en SNP estima qué proporción de la variación del rasgo medido en la población estudiada se relaciona con variantes comunes consideradas por el modelo. En el análisis poblacional LDSC con datos EUR-like, las estimaciones fueron del 4,8–9,3%, según el rasgo. No representan toda la heredabilidad posible ni la precisión de una predicción individual.',
        'La parte restante no puede llamarse simplemente «efecto de la educación»: incluye influencias genéticas no captadas, características del modelo y error de medida, además de diferencias ambientales. Con instrumentos más fiables las estimaciones eran mayores: para una fiabilidad típica, los autores estimaron un 9,3–13,3%. Es otro análisis, no una corrección de la primera cifra.',
      ] },
      { heading: '6. Índice poligénico y ejemplo didáctico', paragraphs: [
        'Un índice poligénico (PGI) suma las dosis de muchos alelos con pesos estimados en un GWAS. Para evaluar su predicción se necesitan personas cuyos datos no se hayan usado para estimar esos pesos; de lo contrario, el rendimiento puede parecer mejor de lo que es.',
        'Ejemplo inventado, no datos del artículo: tres variantes tienen pesos +0,02, −0,01 y +0,03, y dosis 1, 2 y 0. El índice es 1 × 0,02 + 2 × (−0,01) + 0 × 0,03 = 0. Ese cero es una suma en una escala hipotética, no ausencia de influencia genética ni «extraversión cero». Los índices reales incluyen muchas más variantes.',
        'En el artículo, los índices predijeron estadísticamente los rasgos correspondientes en evaluaciones independientes. Sería incorrecto afirmar que no hay predicción alguna. Sin embargo, una predicción grupal limitada no constituye una prueba precisa del carácter: las distribuciones se solapan ampliamente y la transferencia entre poblaciones requiere comprobación.',
      ] },
      { heading: '7. ¿Para qué comparar hermanos y gemelos?', paragraphs: [
        'Una asociación entre ADN y conducta entre familias puede incorporar el entorno familiar y diferencias entre grupos de población. Por ejemplo, el genotipo parental puede relacionarse con las condiciones creadas para el hijo. Es una posible correlación gen–ambiente, no necesariamente un efecto directo de la variante heredada.',
        'Las comparaciones intrafamiliares aprovechan diferencias en las variantes heredadas entre familiares, manteniendo parcialmente constantes condiciones compartidas. En el estudio respaldaron, en conjunto, la consistencia de las asociaciones y una contribución pequeña de la confusión familiar compartida en las estimaciones examinadas. Esto no demuestra que el ambiente carezca de importancia: siguen presentes las experiencias individuales, el error de medida y los supuestos del método.',
      ] },
      { heading: '8. Correlación genética y causalidad', paragraphs: [
        'Una correlación genética indica que las estimaciones de influencias genéticas sobre dos rasgos están relacionadas. No expresa qué proporción de personas tiene ambos rasgos ni establece por sí sola una dirección causal. Variantes compartidas pueden influir en varios procesos.',
        'Los autores también utilizaron aleatorización mendeliana para examinar posibles direcciones causales. Las variantes actúan como instrumentos: se requieren supuestos sobre su relación con la exposición, la confusión y las vías alternativas hacia el resultado. Los análisis apoyan algunas hipótesis causales, pero no equivalen a un experimento que cambie la personalidad ni prueban la causalidad de toda asociación.',
      ] },
      { heading: '9. Aplicar la idea sin etiquetas genéticas', paragraphs: [
        'Situación didáctica, no resultado del artículo: dos estudiantes con una propensión parecida a preocuparse preparan un examen. Uno cuenta con un plan claro y apoyo; el otro está sobrecargado. Conductas diferentes son compatibles con predisposiciones semejantes. La historia no permite calcular genotipos ni demostrar una interacción gen–ambiente: hace falta un análisis específico.',
        'Al leer noticias, pregunta qué se midió, en qué grupo, cuál es la magnitud del efecto y si se evaluó su transferencia. Ni un índice ni un rasgo determinan el valor de una persona. El trabajo no justifica seleccionar estudiantes o trabajadores mediante un «perfil genético de personalidad».',
      ] },
      { heading: '10. Limitaciones y comprobaciones pendientes', bullets: [
        'La potencia principal procede de muestras EUR-like. Estas etiquetas expresan semejanza genética con referencias, no categorías biológicas rígidas. La predicción fue menor en grupos AFR-like y no se transfirió igual para todos los rasgos.',
        'Los resultados dependen del cuestionario, la fiabilidad y de si informa la propia persona u otra. Una muestra enorme no elimina sesgos sistemáticos de medida o selección.',
        'Los análisis no se prerregistraron. Esto no los vuelve falsos, pero dificulta distinguir de forma independiente las pruebas planificadas de las exploratorias.',
        'Un valor p pequeño, la consistencia intrafamiliar y la predicción estadística responden a preguntas distintas. Ninguno revela por sí solo la cadena biológica completa del ADN a la conducta.',
      ] },
      { heading: '11. Miniglosario y conexión con otra lección', bullets: [
        'Alelo: una variante de secuencia en una posición; SNP: variante de un solo nucleótido.',
        'Locus: región del genoma; poligenicidad: participación de muchas variantes genéticas.',
        'Desviación típica: medida de dispersión; 0,009 unidades representan un desplazamiento medio muy pequeño.',
        'PGI: suma ponderada de variantes; heredabilidad SNP: estimación de variación del rasgo en una población. Son cantidades diferentes.',
        'Confusión: influencia de otro factor que complica interpretar una asociación; fiabilidad de medida: reproducibilidad en las condiciones pertinentes.',
        'Los Cinco Grandes describen rasgos. La otra lección del sitio estudia 14 trastornos: sus cinco factores comunes son otro modelo estadístico, no los Cinco Grandes.',
      ] },
      { heading: '12. Fuente y pregunta para reflexionar', paragraphs: [
        'Se comprobaron el resumen, Table 1 y los apartados Population-level meta-analysis, Characterizing SNP heritability, Polygenic prediction of personality, Evaluating familial confounding, Discussion y Methods de la fuente enlazada abajo. Las cifras corresponden a los análisis indicados. Sensus Vitae redactó sus propias explicaciones, ejemplo aritmético y actividades; no se reproducen figuras ni tablas editoriales.',
        '¿Qué información adicional necesitarías para pasar de una asociación genética grupal a una decisión útil y justa sobre una persona? Considera precisión, transferencia, propósito y consecuencias del error.',
      ] },
    ],
    checks: [
      { question: 'Hay muchos SNP significativos. ¿Por qué no son una lista de «genes del carácter»?', answer: 'Un SNP señala una asociación; variantes cercanas pueden heredarse juntas. Los efectos individuales son pequeños, un locus no equivale a un gen causal y el rasgo es poligénico. La significación no mide la magnitud.', section: 4 },
      { question: 'Si la heredabilidad SNP es del 9%, ¿puedo decir «el 9% de mi personalidad son genes»?', answer: 'No. Estima diferencias del rasgo medido entre personas bajo condiciones y un modelo concretos; no divide a una persona en partes genéticas y ambientales. El resto tampoco equivale íntegramente a educación.', section: 5 },
      { question: 'Pesos +0,02, −0,01, +0,03 y dosis 1, 2, 0: ¿cuál es el PGI y qué significa cero?', answer: '0,02 − 0,02 + 0 = 0. Las contribuciones se compensan en una escala hipotética. Cero no implica ausencia de influencias genéticas ni una puntuación nula de personalidad.', section: 6 },
      { question: 'La asociación persiste dentro de las familias. ¿Demuestra que la educación no influye?', answer: 'No. Estas comparaciones reducen algunos tipos de confusión familiar compartida. No excluyen el ambiente individual, todas las vías alternativas o las limitaciones del modelo, ni miden todo el efecto de la educación.', section: 7 },
      { question: 'Se propone usar un PGI significativo en un grupo para predecir con precisión en otra población. ¿Qué comprobarías?', answer: 'Validación independiente, magnitud e incertidumbre de la predicción, comparabilidad de medidas y transferencia. Un efecto grupal significativo no garantiza precisión individual ni en otra población.', section: 10 },
    ],
  },
  en: {
    readTime: '15 min', contents: 'Guide to this lesson', checkTitle: 'Self-check: explain it in your own words',
    instruction: 'Form your own answer first, then open the explanation. No answers are entered, saved or sent to a server.',
    reveal: 'Show explanation', returnLabel: 'Return to the section', fullText: 'Full primary paper in PubMed Central', related: 'Related lesson: shared genetic mechanisms across 14 psychiatric disorders',
    body: [
      { heading: '1. What question does the study ask?', paragraphs: [
        'Habitual ways of thinking, feeling and acting form relatively stable personality traits. Relatively stable does not mean unchangeable. The question here is which DNA differences are statistically associated with differences in measured traits, and how consistent those associations are.',
        'Schwaba and colleagues published the paper online on 2 September 2026, with the Nature issue dated 29 October. The meta-analysis combines 46 cohorts, with 611,037 to 1,136,711 participants depending on the trait. These are not five independent groups to add together: a person may have measurements of several traits. This lesson explains an existing paper, rather than reporting a study released today.',
      ] },
      { heading: '2. The Big Five: dimensions, not five kinds of people', paragraphs: [
        'The Big Five describe broad personality dimensions. A person has a position on each scale rather than belonging in one of five boxes. A questionnaire measures answers about habitual behaviour; it does not read personality directly from the brain or DNA.',
      ], bullets: [
        'Extraversion: a tendency towards social activity, energy and assertiveness.',
        'Agreeableness: a tendency towards cooperation, trust and consideration for others.',
        'Conscientiousness: organisation, self-discipline and persistence towards goals.',
        'Neuroticism: a tendency to experience negative emotions; a trait, not a diagnosis.',
        'Openness to experience: curiosity and interest in ideas, imagination and new experiences. A high score does not make someone a better person.',
      ] },
      { heading: '3. How GWAS connects DNA with questionnaire scores', paragraphs: [
        'A SNP is a variant at one DNA position. GWAS tests whether variant dosage, usually 0, 1 or 2 copies of a selected allele, is associated with the average trait score under specified adjustments. Meta-analysis combines estimates from different cohorts according to their statistical precision.',
        'Testing millions of variants produces chance findings. The threshold P < 5 × 10⁻⁸ helps account for multiple testing. A small p-value does not imply a large effect or give the probability that a hypothesis is true. Nearby variants may be inherited together: a lead SNP marks a signal in a region but need not itself be causal.',
      ] },
      { heading: '4. Many findings, very small individual effects', paragraphs: [
        'The authors reported 1,260 approximately independent lead SNPs across the five traits; 824 were in regions not previously associated with the respective trait. These are not 1,260 personality genes. A locus is a genomic region and may point towards several possible biological pathways.',
        'For extraversion, the median association among lead SNPs, corrected for overestimation of discovered effects, was 0.009 standard deviations per allele copy. This is a very small average difference, not an amount added to a particular person’s character. Larger samples can detect tiny effects without making those effects practically large.',
      ] },
      { heading: '5. Heritability describes group differences, not pieces of a person', paragraphs: [
        'SNP heritability estimates the proportion of variation in the measured trait in the studied population associated with common variants captured by a particular model. Population-level LDSC estimates in EUR-like data ranged from 4.8–9.3% across traits. This is neither all possible heritability nor the accuracy of an individual prediction.',
        'The remainder cannot simply be called parenting: it includes genetic influences not captured, model limitations and measurement error as well as environmental differences. More reliable questionnaires yielded higher estimates: the authors estimated 9.3–13.3% for typical reliability. This is a different analysis, not a correction of the first figure.',
      ] },
      { heading: '6. A polygenic index and a worked example', paragraphs: [
        'A polygenic index (PGI) sums many allele dosages using weights estimated in a GWAS. Evaluating prediction requires people whose data were not used to estimate those weights; otherwise performance can look better than it really is.',
        'Invented teaching example, not paper data: three variants have weights +0.02, −0.01 and +0.03, with dosages 1, 2 and 0. The index is 1 × 0.02 + 2 × (−0.01) + 0 × 0.03 = 0. Zero is a sum on a hypothetical scale, not an absence of genetic influence or zero extraversion. Real indices involve many more variants.',
        'The paper found statistically significant prediction of the corresponding traits in independent evaluations. It would therefore be wrong to say there is no prediction at all. Limited group-level prediction, however, is not a precise personality test: distributions overlap substantially, and transfer between populations needs separate evaluation.',
      ] },
      { heading: '7. Why compare siblings and twins?', paragraphs: [
        'An association between DNA and behaviour across families can include family environments and differences between population groups. Parental genotype, for instance, may be associated with conditions parents create for a child. This is one possible route of gene–environment correlation, rather than necessarily a direct effect of an inherited variant.',
        'Within-family comparisons use differences in inherited variants between relatives while partly holding shared conditions constant. In this paper, family analyses broadly supported consistent associations and a small role of shared familial confounding in the estimates examined. This does not show that environments are unimportant: individual experiences, measurement error and methodological assumptions remain.',
      ] },
      { heading: '8. Genetic correlation and causation', paragraphs: [
        'Genetic correlation means that estimated genetic influences on two traits are associated. It does not give the proportion of people with both traits or establish a causal direction by itself. Shared variants may influence several processes.',
        'The authors also used Mendelian randomization to examine possible causal directions. Genetic variants serve as instruments, requiring assumptions about their relationship with the exposure, confounding and alternative pathways to the outcome. Results support some causal hypotheses, but are not an experiment changing personality or proof that every association is causal.',
      ] },
      { heading: '9. Applying the idea without genetic labels', paragraphs: [
        'Teaching scenario, not a study finding: two students with a similar tendency to worry prepare for an exam. One has a clear plan and support; the other is overloaded. Different behaviour is compatible with similar predispositions. The story cannot identify a genotype or demonstrate gene–environment interaction, which requires a specific analysis.',
        'When reading a headline, ask what was measured, in which group, how large the effect was and whether transfer was tested. Neither an index nor a trait determines someone’s worth. This research does not justify selecting students or employees using a genetic personality profile.',
      ] },
      { heading: '10. Limitations and further checks', bullets: [
        'Most statistical power came from EUR-like samples. These labels refer to genetic similarity to references, not rigid biological categories. Prediction transferred less well to AFR-like groups and not equally for every trait.',
        'Findings depend on the questionnaire, reliability and self-report versus another person’s ratings. A huge sample does not remove systematic measurement or participation biases.',
        'Analyses were not preregistered. This does not make findings false, but makes planned and exploratory tests harder to distinguish independently.',
        'A small p-value, consistency within families and statistical prediction answer different questions. None alone reveals a complete biological chain from DNA to behaviour.',
      ] },
      { heading: '11. Mini-glossary and connection to another lesson', bullets: [
        'Allele: a sequence variant at a position; SNP: a single-nucleotide variant.',
        'Locus: a genomic region; polygenicity: involvement of many genetic variants.',
        'Standard deviation: a measure of spread; 0.009 units is a very small average shift.',
        'PGI: a weighted sum of variants; SNP heritability: an estimate of population trait variation. They are different quantities.',
        'Confounding: another influence complicating interpretation of an association; measurement reliability: reproducibility under relevant conditions.',
        'The Big Five describe traits. The other lesson covers 14 psychiatric disorders: its five shared factors are a different statistical model, not the Big Five.',
      ] },
      { heading: '12. Source and a question for reflection', paragraphs: [
        'The abstract, Table 1 and the sections Population-level meta-analysis, Characterizing SNP heritability, Polygenic prediction of personality, Evaluating familial confounding, Discussion and Methods were checked against the primary paper linked below. Numbers refer to the specified analyses. Sensus Vitae independently wrote the explanations, arithmetic example and learning checks; publisher figures and tables are not reproduced.',
        'What additional evidence would be needed to turn a group-level genetic association into a useful and fair decision about one person? Consider accuracy, transfer, purpose and the consequences of error.',
      ] },
    ],
    checks: [
      { question: 'Many SNPs are significant. Why is this not a list of personality genes?', answer: 'A SNP marks an association; nearby variants may be inherited together. Individual effects are small, a locus is not a causal gene, and the trait is polygenic. Statistical significance does not measure effect size.', section: 4 },
      { question: 'If SNP heritability is 9%, can I say that 9% of my personality is genetic?', answer: 'No. It estimates differences in the measured trait between people under particular conditions and a model; it does not divide one person into genetic and environmental parts. The remainder is not entirely parenting either.', section: 5 },
      { question: 'Weights +0.02, −0.01, +0.03 and dosages 1, 2, 0: what is the PGI and what does zero mean?', answer: '0.02 − 0.02 + 0 = 0. Contributions cancel on a hypothetical scale. Zero does not mean no genetic influences or a zero personality score.', section: 6 },
      { question: 'The association persists within families. Does this prove parenting has no influence?', answer: 'No. These comparisons reduce some forms of shared familial confounding. They do not exclude individual environments, every alternative pathway or model limitations, and do not measure the whole influence of parenting.', section: 7 },
      { question: 'A significant PGI in one group is proposed for precise prediction in another population. What should be checked?', answer: 'Independent validation, predictive effect size and uncertainty, comparable measurement and transferability. A significant group-level effect does not guarantee accuracy for a person or a different population.', section: 10 },
    ],
  },
  nl: {
    readTime: '15 min', contents: 'Inhoud van deze uitleg', checkTitle: 'Zelftoets: leg het in eigen woorden uit',
    instruction: 'Formuleer eerst zelf een antwoord en open daarna de uitleg. Antwoorden worden niet ingevoerd, opgeslagen of naar een server verzonden.',
    reveal: 'Toon de uitleg', returnLabel: 'Terug naar het onderdeel', fullText: 'Volledige oorspronkelijke publicatie in PubMed Central', related: 'Verwante les: gedeelde genetische mechanismen bij 14 psychiatrische aandoeningen',
    body: [
      { heading: '1. Welke vraag stelt het onderzoek?', paragraphs: [
        'Gewoonlijke manieren van denken, voelen en handelen vormen relatief stabiele persoonlijkheidstrekken. Relatief stabiel betekent niet onveranderlijk. De vraag is welke DNA-verschillen statistisch samenhangen met verschillen in gemeten trekken en hoe consistent die verbanden zijn.',
        'Het artikel van Schwaba en collega’s verscheen online op 2 september 2026 en in het Nature-nummer van 29 oktober. De meta-analyse combineert 46 cohorten, met 611.037 tot 1.136.711 deelnemers per trek. Dit zijn geen vijf onafhankelijke groepen die je kunt optellen: één persoon kan op meerdere trekken zijn gemeten. Deze les bespreekt een bestaande publicatie, geen onderzoek dat vandaag is verschenen.',
      ] },
      { heading: '2. De Big Five: dimensies, geen vijf mensentypen', paragraphs: [
        'De Big Five beschrijven brede persoonlijkheidsdimensies. Iedereen heeft een positie op elke schaal, in plaats van in één van vijf hokjes te vallen. Een vragenlijst meet antwoorden over gewoonlijk gedrag en leest persoonlijkheid niet rechtstreeks uit hersenen of DNA.',
      ], bullets: [
        'Extraversie: neiging tot sociale activiteit, energie en assertiviteit.',
        'Vriendelijkheid: neiging tot samenwerking, vertrouwen en rekening houden met anderen.',
        'Consciëntieusheid: organisatie, zelfdiscipline en volharding bij doelen.',
        'Neuroticisme: neiging tot negatieve emoties; een trek, geen diagnose.',
        'Openheid voor ervaringen: nieuwsgierigheid en belangstelling voor ideeën, verbeelding en nieuwe ervaringen. Een hoge score maakt iemand niet tot een beter mens.',
      ] },
      { heading: '3. Hoe verbindt een GWAS DNA met vragenlijstscores?', paragraphs: [
        'Een SNP is een variant op één DNA-positie. Een GWAS onderzoekt of de dosering van een variant, meestal 0, 1 of 2 kopieën van een gekozen allel, samenhangt met de gemiddelde trekscore onder vastgelegde correcties. Een meta-analyse combineert schattingen uit cohorten volgens hun statistische precisie.',
        'Bij miljoenen toetsen ontstaan toevallige bevindingen. De grens P < 5 × 10⁻⁸ helpt rekening te houden met meervoudig toetsen. Een kleine p-waarde betekent geen groot effect en geeft niet de kans dat een hypothese waar is. Nabije varianten kunnen samen worden overgeërfd: een leidende SNP markeert een signaal in een regio, maar hoeft zelf niet causaal te zijn.',
      ] },
      { heading: '4. Veel bevindingen, zeer kleine afzonderlijke effecten', paragraphs: [
        'De auteurs vonden 1.260 bij benadering onafhankelijke leidende SNP’s voor de vijf trekken; 824 lagen in gebieden die niet eerder met de betreffende trek waren verbonden. Dit zijn geen 1.260 persoonlijkheidsgenen. Een locus is een genoomgebied en kan naar meerdere mogelijke biologische routes wijzen.',
        'Bij extraversie was de mediane associatie van leidende SNP’s, na correctie voor overschatting van ontdekte effecten, 0,009 standaarddeviatie per allelkopie. Dat is een heel klein gemiddeld verschil, geen hoeveelheid die aan iemands karakter wordt toegevoegd. Grotere steekproeven maken kleine effecten aantoonbaar zonder ze praktisch groot te maken.',
      ] },
      { heading: '5. Erfelijkheid gaat over groepsverschillen, niet delen van een mens', paragraphs: [
        'SNP-erfelijkheid schat welk deel van de variatie in een gemeten trek in de onderzochte populatie samenhangt met de veelvoorkomende varianten die een bepaald model omvat. De populatieschattingen met LDSC voor EUR-like gegevens liepen per trek van 4,8–9,3%. Dat is niet alle mogelijke erfelijkheid en ook niet de nauwkeurigheid van een individuele voorspelling.',
        'Het overige deel kun je niet simpelweg opvoeding noemen: het omvat ook niet-gevangen genetische invloeden, modelbeperkingen en meetfouten naast omgevingsverschillen. Betrouwbaardere vragenlijsten leverden hogere schattingen op: bij typische betrouwbaarheid schatten de auteurs 9,3–13,3%. Dit is een andere analyse, geen correctie van het eerste getal.',
      ] },
      { heading: '6. Een polygene index met rekenvoorbeeld', paragraphs: [
        'Een polygene index (PGI) telt doseringen van veel allelen op met gewichten uit een GWAS. Voor toetsing van de voorspelling zijn mensen nodig wier gegevens niet zijn gebruikt om die gewichten te schatten; anders kan de prestatie beter lijken dan zij is.',
        'Verzonnen leervoorbeeld, geen onderzoeksgegevens: drie varianten hebben gewichten +0,02, −0,01 en +0,03, en doseringen 1, 2 en 0. De index is 1 × 0,02 + 2 × (−0,01) + 0 × 0,03 = 0. Nul is een som op een hypothetische schaal, niet de afwezigheid van genetische invloed of nul extraversie. Echte indices bevatten veel meer varianten.',
        'In het artikel voorspelden de indices de betreffende trekken statistisch in onafhankelijke toetsen. Zeggen dat er helemaal geen voorspelling is, zou dus onjuist zijn. Een beperkte groepsvoorspelling is echter geen nauwkeurige karaktertest: de verdelingen overlappen sterk en overdracht tussen populaties moet apart worden onderzocht.',
      ] },
      { heading: '7. Waarom broers, zussen en tweelingen vergelijken?', paragraphs: [
        'Een verband tussen DNA en gedrag tussen gezinnen kan ook gezinsomgevingen en verschillen tussen bevolkingsgroepen omvatten. Het genotype van ouders kan bijvoorbeeld samenhangen met de omstandigheden die zij voor hun kind scheppen. Dit is een mogelijke gen–omgevingscorrelatie en niet noodzakelijk een direct effect van een geërfde variant.',
        'Vergelijkingen binnen gezinnen gebruiken verschillen in geërfde varianten tussen verwanten terwijl gedeelde omstandigheden gedeeltelijk constant blijven. In dit onderzoek ondersteunden ze globaal consistente associaties en een kleine bijdrage van gedeelde familiale confounding aan de onderzochte schattingen. Dit bewijst niet dat de omgeving onbelangrijk is: individuele ervaringen, meetfouten en methodologische aannames blijven bestaan.',
      ] },
      { heading: '8. Genetische correlatie en causaliteit', paragraphs: [
        'Een genetische correlatie betekent dat geschatte genetische invloeden op twee trekken samenhangen. Zij geeft niet het aandeel mensen met beide kenmerken en bepaalt op zichzelf geen causale richting. Gedeelde varianten kunnen meerdere processen beïnvloeden.',
        'De auteurs gebruikten ook mendeliaanse randomisatie om mogelijke causale richtingen te onderzoeken. Varianten dienen als instrumenten, met aannames over hun relatie met de blootstelling, confounding en andere routes naar de uitkomst. De resultaten ondersteunen sommige causale hypothesen, maar vormen geen experiment dat persoonlijkheid verandert of bewijs dat elk verband causaal is.',
      ] },
      { heading: '9. De gedachte toepassen zonder genetische etiketten', paragraphs: [
        'Leersituatie, geen onderzoeksresultaat: twee studenten met een vergelijkbare neiging tot piekeren bereiden een tentamen voor. De ene heeft een duidelijk plan en steun; de andere is overbelast. Verschillend gedrag past bij vergelijkbare aanleg. Uit dit verhaal kun je geen genotype berekenen of gen–omgevingsinteractie aantonen; daarvoor is specifiek onderzoek nodig.',
        'Vraag bij een nieuwsbericht wat is gemeten, in welke groep, hoe groot het effect is en of overdraagbaarheid is getoetst. Een index of trek bepaalt niet iemands waarde. Dit onderzoek rechtvaardigt geen selectie van studenten of werknemers op basis van een genetisch persoonlijkheidsprofiel.',
      ] },
      { heading: '10. Beperkingen en verdere controles', bullets: [
        'De meeste statistische kracht kwam uit EUR-like steekproeven. Deze termen beschrijven genetische gelijkenis met referenties, geen starre biologische categorieën. De voorspelling was zwakker bij AFR-like groepen en niet voor alle trekken even overdraagbaar.',
        'Uitkomsten hangen af van de vragenlijst, betrouwbaarheid en zelfrapportage tegenover beoordelingen door anderen. Een enorme steekproef verwijdert geen systematische meet- of selectiebias.',
        'De analyses waren niet vooraf geregistreerd. Dat maakt de resultaten niet onwaar, maar bemoeilijkt het onafhankelijk onderscheiden van geplande en verkennende toetsen.',
        'Een kleine p-waarde, consistentie binnen gezinnen en statistische voorspelling beantwoorden verschillende vragen. Geen daarvan onthult op zichzelf de volledige biologische keten van DNA naar gedrag.',
      ] },
      { heading: '11. Minibegrippenlijst en verbinding met een andere les', bullets: [
        'Allel: een sequentievariant op een positie; SNP: een variant van één nucleotide.',
        'Locus: een gebied in het genoom; polygeniciteit: betrokkenheid van veel genetische varianten.',
        'Standaarddeviatie: maat voor spreiding; 0,009 eenheden is een heel kleine gemiddelde verschuiving.',
        'PGI: gewogen som van varianten; SNP-erfelijkheid: schatting van trekvariatie in een populatie. Dit zijn verschillende grootheden.',
        'Confounding: een andere invloed die interpretatie van een verband bemoeilijkt; meetbetrouwbaarheid: reproduceerbaarheid onder relevante omstandigheden.',
        'De Big Five beschrijven trekken. De andere les bespreekt 14 psychiatrische aandoeningen: de vijf gedeelde factoren daar vormen een ander statistisch model, niet de Big Five.',
      ] },
      { heading: '12. Bron en reflectievraag', paragraphs: [
        'De samenvatting, Table 1 en de onderdelen Population-level meta-analysis, Characterizing SNP heritability, Polygenic prediction of personality, Evaluating familial confounding, Discussion en Methods zijn gecontroleerd aan de hand van de hieronder gelinkte bron. Getallen horen bij de genoemde analyses. Sensus Vitae schreef de uitleg, het rekenvoorbeeld en de zelftoets zelfstandig; uitgeversfiguren en tabellen worden niet overgenomen.',
        'Welke extra informatie zou nodig zijn om van een genetisch groepsverband naar een nuttige en eerlijke beslissing over één persoon te gaan? Denk aan nauwkeurigheid, overdracht, doel en de gevolgen van fouten.',
      ] },
    ],
    checks: [
      { question: 'Er zijn veel significante SNP’s. Waarom is dat geen lijst persoonlijkheidsgenen?', answer: 'Een SNP markeert een associatie; nabije varianten kunnen samen worden overgeërfd. Afzonderlijke effecten zijn klein, een locus is geen causaal gen en de trek is polygeen. Significantie meet geen effectgrootte.', section: 4 },
      { question: 'Als SNP-erfelijkheid 9% is, kan ik zeggen dat 9% van mijn persoonlijkheid genetisch is?', answer: 'Nee. Dit schat verschillen in de gemeten trek tussen mensen onder bepaalde omstandigheden en een model; het verdeelt één mens niet in genetische en omgevingsdelen. De rest is ook niet volledig opvoeding.', section: 5 },
      { question: 'Gewichten +0,02, −0,01, +0,03 en doseringen 1, 2, 0: wat is de PGI en wat betekent nul?', answer: '0,02 − 0,02 + 0 = 0. De bijdragen heffen elkaar op op een hypothetische schaal. Nul betekent niet dat genetische invloeden ontbreken of dat de persoonlijkheidsscore nul is.', section: 6 },
      { question: 'Het verband blijft binnen gezinnen bestaan. Bewijst dit dat opvoeding geen invloed heeft?', answer: 'Nee. Deze vergelijkingen verminderen sommige vormen van gedeelde familiale confounding. Ze sluiten individuele omgevingen, alle alternatieve routes en modelbeperkingen niet uit en meten niet de totale invloed van opvoeding.', section: 7 },
      { question: 'Een significante PGI uit één groep wordt voorgesteld voor exacte voorspelling in een andere populatie. Wat moet je controleren?', answer: 'Onafhankelijke validatie, effectgrootte en onzekerheid van de voorspelling, vergelijkbare metingen en overdraagbaarheid. Een significant groepseffect garandeert geen nauwkeurigheid voor één persoon of een andere populatie.', section: 10 },
    ],
  },
};
