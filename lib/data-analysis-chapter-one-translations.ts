export type ChapterLocale = "ru" | "es" | "nl";

const frequencyRows = [
  ["1–5", "0.5–5.5", "3", "13", "0.325", "13", "0.325", "32.5%"],
  ["6–10", "5.5–10.5", "8", "12", "0.300", "25", "0.625", "62.5%"],
  ["11–15", "10.5–15.5", "13", "8", "0.200", "33", "0.825", "82.5%"],
  ["16–20", "15.5–20.5", "18", "4", "0.100", "37", "0.925", "92.5%"],
  ["21–25", "20.5–25.5", "23", "2", "0.050", "39", "0.975", "97.5%"],
  ["26–30", "25.5–30.5", "28", "1", "0.025", "40", "1.000", "100.0%"],
];
function table(headers: string[], rows: string[][]) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map(s => `<th>${s}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(s => `<td>${s}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function frequencyTable(first: string[]) {
  return table([...first, "nᵢ", "pᵢ", "nₐ", "pₐ", "Pₐ"], frequencyRows);
}
const frequencyFormulas = `<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>k</mi></munderover><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>n</mi><mo>;</mo><mspace width="1em"/><msub><mi>p</mi><mi>i</mi></msub><mo>=</mo><mfrac><msub><mi>n</mi><mi>i</mi></msub><mi>n</mi></mfrac><mo>;</mo><mspace width="1em"/><msub><mi>P</mi><mi>i</mi></msub><mo>=</mo><mn>100</mn><msub><mi>p</mi><mi>i</mi></msub></mrow></math><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>n</mi><mrow><mi>a</mi><mo>,</mo><mi>i</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>i</mi></munderover><msub><mi>n</mi><mi>j</mi></msub><mo>;</mo><mspace width="1em"/><msub><mi>p</mi><mrow><mi>a</mi><mo>,</mo><mi>i</mi></mrow></msub><mo>=</mo><mfrac><msub><mi>n</mi><mrow><mi>a</mi><mo>,</mo><mi>i</mi></mrow></msub><mi>n</mi></mfrac><mo>;</mo><mspace width="1em"/><msub><mi>P</mi><mrow><mi>a</mi><mo>,</mo><mi>i</mi></mrow></msub><mo>=</mo><mn>100</mn><msub><mi>p</mi><mrow><mi>a</mi><mo>,</mo><mi>i</mi></mrow></msub></mrow></math>`;
const boundaryFormulas = `<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>L</mi><mi>E</mi></msub><mo>=</mo><msub><mi>L</mi><mi>A</mi></msub><mo>−</mo><mfrac><mi>u</mi><mn>2</mn></mfrac><mo>;</mo><mspace width="1em"/><msub><mi>U</mi><mi>E</mi></msub><mo>=</mo><msub><mi>U</mi><mi>A</mi></msub><mo>+</mo><mfrac><mi>u</mi><mn>2</mn></mfrac></mrow></math><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>M</mi><mo>=</mo><mfrac><mrow><msub><mi>L</mi><mi>E</mi></msub><mo>+</mo><msub><mi>U</mi><mi>E</mi></msub></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>L</mi><mi>A</mi></msub><mo>+</mo><msub><mi>U</mi><mi>A</mi></msub></mrow><mn>2</mn></mfrac><mo>;</mo><mspace width="1em"/><mi>w</mi><mo>=</mo><msub><mi>U</mi><mi>E</mi></msub><mo>−</mo><msub><mi>L</mi><mi>E</mi></msub></mrow></math>`;
const terms = table(["English", "Español", "Русский"], [
  ["Population", "población", "генеральная совокупность"],
  ["Sample", "muestra", "выборка"],
  ["Parameter", "parámetro", "параметр совокупности"],
  ["Sample statistic", "estadístico muestral", "выборочная статистика"],
  ["Absolute frequency", "frecuencia absoluta", "абсолютная частота"],
  ["Relative frequency", "frecuencia relativa", "относительная частота"],
  ["Cumulative frequency", "frecuencia acumulada", "накопленная частота"],
  ["Class boundaries", "límites exactos / reales", "точные границы интервала"],
  ["Class midpoint", "punto medio del intervalo", "середина интервала"],
  ["Skewness", "asimetría", "асимметрия"],
  ["Kurtosis", "curtosis / apuntamiento", "эксцесс (куртозис)"],
]);
const sources = `<ol><li>Suárez Falcón, J. C., Pozo Cabanillas, P., San Luis Costas, C., &amp; Recio Saboya, P. (2019). <em>Introducción al análisis de datos: Aplicaciones en psicología y ciencias de la salud</em>, 2nd ed., Chapter 1, “Conceptos básicos y organización de datos.” ISBN 978-84-17765-42-2. The UNED 2026/27 course guide identifies this as the basic textbook.</li><li>Additional explanations: <a href="https://doi.org/10.1126/science.103.2684.677">Stevens (1946)</a>; <a href="https://openstax.org/books/introductory-statistics-2e/pages/1-3-frequency-frequency-tables-and-levels-of-measurement">OpenStax</a>; <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm">NIST/SEMATECH</a>. These do not replace the assigned chapter.</li></ol>`;

export const chapterOneTranslations: Record<ChapterLocale, { title: string; intro: string; subject: string; html: string }> = {
  ru: {
    title: "Введение в анализ данных", intro: "Глава 1 · Измерение, частоты и распределения", subject: "Анализ данных",
    html: `<blockquote><p>Самостоятельный конспект первой главы основного учебника UNED. Дополнительные пояснения отделены от содержания главы.</p></blockquote>
<h2>1. Статистика в психологическом исследовании</h2>
<p>Психологическое исследование превращает наблюдения в данные, которые можно организовать, описать и интерпретировать. Упрощённые этапы: сформулировать вопрос; выдвинуть проверяемую гипотезу; выбрать план исследования, измерения и способ отбора; собрать и проанализировать данные; обсудить результаты и границы выводов; сообщить о методах и результатах. Анализ связан с интерпретацией, но числовой результат сам по себе не даёт психологического объяснения.</p>
<p><strong>Описательная статистика</strong> обобщает наблюдавшиеся данные таблицами, графиками и показателями. <strong>Статистический вывод</strong> опирается на вероятностную модель и её допущения, чтобы судить о совокупности по выборке. Качество обобщения также зависит от отбора и измерения изучаемого свойства. <a href="https://openstax.org/books/introductory-statistics-2e/pages/1-1-definitions-of-statistics-probability-and-key-terms">OpenStax, §1.1</a>.</p>
<p><strong>Генеральная совокупность</strong> — все единицы, о которых хотят сделать вывод; <strong>выборка</strong> — реально наблюдавшаяся часть. Она не становится репрезентативной автоматически: отбор может вносить смещение. <strong>Параметр</strong> описывает совокупность (среднее μ, дисперсия σ², доля π); <strong>выборочная статистика</strong> вычисляется по выборке (в главе, среди прочего, X̄, S²ₓ и P, с. 10). Обозначения могут различаться между учебниками.</p>
${table(["Вопрос", "Совокупность", "Выборка"], [["Среднее время учёбы всех записанных на курс студентов", "Все студенты курса в определённом году", "Студенты, время учёбы которых было измерено"]])}
<h2>2. Переменные и уровни измерения</h2>
<p>С. С. Стивенс выделил номинальный, порядковый, интервальный уровни и уровень отношений. Они различаются тем, какие сравнения чисел обоснованны. Схема не заменяет оценки того, как измерено психологическое свойство. <a href="https://doi.org/10.1126/science.103.2684.677">Stevens, 1946</a>; <a href="https://openstax.org/books/introductory-statistics-2e/pages/1-3-frequency-frequency-tables-and-levels-of-measurement">OpenStax, §1.3</a>.</p>
${table(["Шкала", "Допустимое сравнение", "Пример", "Ограничение"], [
["Номинальная", "Совпадение / различие категорий", "Группа лечения, диагноз", "Код 1 или 2 — ярлык, не количество"],
["Порядковая", "Порядок категорий", "Низкая / средняя / высокая тяжесть симптомов", "Расстояния между рангами могут быть неодинаковы"],
["Интервальная", "Равные разности", "Температура °C; некоторые стандартизованные баллы приблизительно", "Условный нуль: 40 не означает вдвое больше свойства, чем 20"],
["Отношений", "Разности и истинный нуль", "Время реакции, число ошибок, часы учёбы", "Отношения относятся к свойству и единице измерения"]
])}
<p>IQ или балл опросника <strong>нельзя автоматически считать интервальной шкалой</strong> только из-за числовой записи. Это зависит от инструмента и анализа. Нулевой балл не доказывает отсутствия свойства.</p>
<p><strong>Дискретные</strong> переменные имеют отдельные значения (например, число ошибок); <strong>непрерывные</strong> теоретически допускают промежуточные значения (время реакции), хотя прибор округляет результат. В эксперименте <strong>независимой переменной</strong> манипулируют или назначают её условия, <strong>зависимую</strong> измеряют. В наблюдательном исследовании предиктор может лишь наблюдаться. Другие факторы способны смешивать связь.</p>
<h2>3. Таблицы частот</h2>
<p>Пусть n — число наблюдений, nᵢ — число наблюдений в классе i, k — число исчерпывающих непересекающихся классов. Абсолютная частота — nᵢ; относительная — pᵢ; процент — Pᵢ. Накопленные частоты относятся к классам <strong>до i включительно</strong> (индекс i добавлен для ясности к обозначениям учебника nₐ, pₐ, Pₐ):</p>${frequencyFormulas}
<p>Проверки: сумма nᵢ равна n, сумма pᵢ — 1, последний накопленный процент — 100%. Накопление требует содержательного порядка и не подходит к неупорядоченным номинальным категориям (с. 26).</p>
<h3>Пример: экзаменационная тревожность у 40 студентов</h3>
<p>Пример 1.1 учебника группирует целочисленные результаты в классы 1–5, 6–10 и следующие. Объединены данные таблиц 1.5 и 1.6 (с. 29–30).</p>
${frequencyTable(["Класс", "Точные границы", "Середина"])}
<p>В первых двух классах 13 + 12 = 25 результатов; накопленная доля 25/40 = 0.625, то есть <strong>62.5%</strong>. Для значения на общей границе нужна единая договорённость, например [0.5, 5.5) и [5.5, 10.5). Записанные целые баллы здесь на границу не попадают.</p>
<h2>4. Группировка и границы интервалов</h2>
<p>Глава <strong>не предписывает</strong> k ≈ √n или R = (Xₘₐₓ − Xₘᵢₙ) + u как обязательные формулы выбора числа и ширины классов. Группировать можно по-разному, при этом теряется часть деталей (с. 28). Наблюдаемые значения идут от 2 до 30; интервалы шириной 5 начинаются с 1–5, но 2–6 … 27–31 тоже допустимы (с. 29). Шесть классов здесь пример, а обычный размах наблюдений равен 30 − 2 = 28.</p>
<p>Если данные <strong>округлены</strong> до единицы записи u, кажущиеся границы Lₐ и Uₐ превращаются в непрерывные границы Lₑ и Uₑ. M — середина класса, w — ширина:</p>${boundaryFormulas}
<p>Это границы записи, а не физическая точность прибора. Поправка для целых чисел 0.5; для одного десятичного знака 0.05; для двух 0.005 (с. 29–31). Запись 18.56 соответствует [18.555, 18.565) при указанном правиле включения. Класс 10–12 имеет границы 9.5–12.5 и ширину 3 (с. 44).</p>
<h2>5. Выбор графика</h2>
${table(["Данные", "График", "На что смотреть"], [
["Неупорядоченные категории", "Столбики, иногда круговая диаграмма", "Промежутки отделяют категории; угол сектора = 360° pᵢ"],
["Упорядоченные категории", "Столбики в содержательном порядке", "Сохранить порядок на оси"],
["Дискретный счёт", "Столбики", "Не подразумевать ненаблюдаемые промежуточные значения"],
["Сгруппированные непрерывные измерения", "Гистограмма, полигон частот", "Соседние классы имеют общую границу; при разной ширине сравнивать плотность nᵢ/w"],
["Две количественные переменные", "Диаграмма рассеяния", "Связь не доказывает причинность"]
])}
<p>Полигон соединяет точки над серединами классов. Он показывает форму сгруппированных данных, а не восстанавливает каждое исходное наблюдение. <a href="https://openstax.org/books/introductory-statistics-2e/pages/2-2-histograms-frequency-polygons-and-time-series-graphs">OpenStax, §2.2</a>; <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/histogra.htm">NIST</a>.</p>
<h2>6. Центр, разброс и форма</h2>
<ul><li><strong>Центральная тенденция:</strong> расположение типичных значений.</li><li><strong>Вариативность:</strong> ширина разброса наблюдений.</li><li><strong>Асимметрия:</strong> длинный хвост справа — положительная, слева — отрицательная. Трудный тест может дать много низких баллов с правым хвостом, но нужно смотреть реальные данные.</li><li><strong>Куртозис:</strong> в вводном описании более острая форма — лептокуртическая, более плоская — платикуртическая, промежуточная — мезокуртическая (с. 39). Формальные показатели вводятся позже. Дополнительное уточнение: куртозис отражает также поведение хвостов и не всегда сводится к высоте пика. <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm">NIST</a>.</li></ul>
<h2>7. Задачи: сначала ответьте самостоятельно</h2>
<p><strong>1.</strong> Время реакции записано в миллисекундах. Какая шкала и тип переменной?</p><details><summary>Решение</summary><p>Длительность обычно относится к непрерывной переменной шкалы отношений с осмысленным нулём. Прибор может округлять; записанные 0 мс могут отражать его разрешение.</p></details>
<p><strong>2.</strong> Балл округлён до двух знаков и записан как 18.56. Каков интервал?</p><details><summary>Решение</summary><p>Единица записи 0.01, половина 0.005. Полуоткрытый интервал [18.555, 18.565).</p></details>
<p><strong>3.</strong> Какова ширина целочисленного класса 10–12 с поправкой 0.5 по краям?</p><details><summary>Решение</summary><p>Границы 9.5 и 12.5; ширина 12.5 − 9.5 = 3.</p></details>
<p><strong>4.</strong> Какой процент баллов в таблице не превышает 10?</p><details><summary>Решение</summary><p>25 из 40 находятся в первых двух классах: 25/40 × 100 = 62.5%.</p></details>
<h2>Термины: английский — испанский — русский</h2>${terms}<h2>Источники и границы конспекта</h2>${sources}`
  },
  es: {
    title: "Introducción al análisis de datos", intro: "Capítulo 1 · Medición, frecuencias y distribuciones", subject: "Análisis de datos",
    html: `<blockquote><p>Guía de estudio independiente basada en el capítulo 1 del manual básico de la UNED. Las aclaraciones adicionales se distinguen del contenido del capítulo.</p></blockquote>
<h2>1. La estadística en la investigación psicológica</h2>
<p>La investigación psicológica transforma las observaciones en datos que se pueden organizar, describir e interpretar. Una secuencia simplificada consiste en formular una pregunta, proponer una hipótesis contrastable, elegir diseño, medidas y muestreo, recoger y analizar datos, discutir resultados y límites de las conclusiones, y comunicar métodos y resultados. Análisis e interpretación están vinculados, pero una cifra por sí sola no ofrece una explicación psicológica.</p>
<p>La <strong>estadística descriptiva</strong> resume los datos observados con tablas, gráficos e indicadores. La <strong>estadística inferencial</strong> usa un modelo probabilístico y sus supuestos para hablar de una población a partir de una muestra. La calidad de la generalización depende también del muestreo y de la medición del constructo. <a href="https://openstax.org/books/introductory-statistics-2e/pages/1-1-definitions-of-statistics-probability-and-key-terms">OpenStax, §1.1</a>.</p>
<p>La <strong>población</strong> es el conjunto del que se quieren extraer conclusiones; la <strong>muestra</strong> es la parte observada. No es representativa automáticamente: la selección puede introducir sesgo. Un <strong>parámetro</strong> describe la población (media μ, varianza σ², proporción π); un <strong>estadístico muestral</strong> se calcula con la muestra (entre los símbolos del capítulo, X̄, S²ₓ y P, p. 10). La notación puede variar entre manuales.</p>
${table(["Pregunta", "Población", "Muestra"], [["Tiempo medio de estudio de todo el alumnado matriculado", "Todos los estudiantes del curso en el año definido", "Estudiantes cuyo tiempo de estudio se midió"]])}
<h2>2. Variables y niveles de medición</h2>
<p>S. S. Stevens distinguió las escalas nominal, ordinal, de intervalo y de razón según las comparaciones justificadas por los números. El esquema no sustituye la evaluación de cómo se operacionaliza un constructo psicológico. <a href="https://doi.org/10.1126/science.103.2684.677">Stevens, 1946</a>; <a href="https://openstax.org/books/introductory-statistics-2e/pages/1-3-frequency-frequency-tables-and-levels-of-measurement">OpenStax, §1.3</a>.</p>
${table(["Escala", "Comparación válida", "Ejemplo", "Límite"], [
["Nominal", "Igualdad / diferencia entre categorías", "Grupo de tratamiento, diagnóstico", "Un código 1 o 2 es etiqueta, no cantidad"],
["Ordinal", "Orden de categorías", "Gravedad baja / media / alta de síntomas", "Las distancias entre rangos pueden ser desiguales"],
["Intervalo", "Diferencias iguales", "Temperatura °C; ciertas puntuaciones estandarizadas aproximadamente", "Cero convencional: 40 no es el doble del atributo que 20"],
["Razón", "Diferencias y cero verdadero", "Duración de respuesta, número de errores, horas de estudio", "Las razones se refieren al atributo y la unidad medidos"]
])}
<p>El CI o la puntuación de un cuestionario <strong>no son automáticamente de intervalo</strong> por expresarse con números. Depende de la escala y del análisis. Una puntuación cero no demuestra ausencia total del rasgo.</p>
<p>Las variables <strong>discretas</strong> toman valores separados, a menudo recuentos; las <strong>continuas</strong> pueden en principio tomar valores intermedios, aunque el instrumento los redondee. En un experimento se manipula o asigna la <strong>variable independiente</strong> y se mide la <strong>dependiente</strong>. En estudios observacionales un predictor puede observarse sin manipularse. Otras variables pueden confundir la relación.</p>
<h2>3. Tablas de frecuencias</h2>
<p>Sean n el número total de observaciones, nᵢ el recuento en la clase i y k el número de clases exhaustivas sin solapamiento. La frecuencia absoluta es nᵢ, la relativa pᵢ y el porcentaje Pᵢ. Las acumuladas abarcan <strong>hasta la clase i inclusive</strong> (añadimos el índice i para aclarar nₐ, pₐ y Pₐ del manual):</p>${frequencyFormulas}
<p>Comprobaciones: la suma de nᵢ es n, la de pᵢ es 1 y el último porcentaje acumulado es 100%. La acumulación requiere un orden significativo; no sirve para categorías nominales sin orden (p. 26).</p>
<h3>Ejemplo: ansiedad ante exámenes en 40 estudiantes</h3>
<p>El ejemplo 1.1 del manual agrupa las puntuaciones enteras en 1–5, 6–10, etc. Esta tabla reúne los datos de las tablas 1.5 y 1.6 (pp. 29–30).</p>
${frequencyTable(["Clase", "Límites exactos", "Punto medio"])}
<p>En las dos primeras clases hay 13 + 12 = 25 puntuaciones: proporción acumulada 25/40 = 0.625, o <strong>62.5%</strong>. Un valor situado exactamente en un límite compartido requiere una convención uniforme, por ejemplo [0.5, 5.5) y [5.5, 10.5). Los valores enteros registrados aquí no caen en esos límites.</p>
<h2>4. Agrupación y límites de clase</h2>
<p>El capítulo <strong>no prescribe</strong> k ≈ √n ni R = (Xₘₐₓ − Xₘᵢₙ) + u como fórmulas obligatorias para escoger número y amplitud de clases. Son posibles distintas agrupaciones y al agrupar se pierde detalle (p. 28). Los valores observados van de 2 a 30; las clases de amplitud 5 empiezan en 1–5, aunque 2–6 … 27–31 también servirían (p. 29). Seis clases son un ejemplo, no un resultado obligatorio de la raíz cuadrada. El recorrido observado habitual es 30 − 2 = 28.</p>
<p>Cuando los datos se <strong>redondean</strong> a una unidad de registro u, los límites aparentes Lₐ y Uₐ se representan mediante límites continuos Lₑ y Uₑ. M es el punto medio y w la amplitud:</p>${boundaryFormulas}
<p>Son límites de registro, no la exactitud física del instrumento. Para enteros el ajuste es 0.5, para un decimal 0.05 y para dos 0.005 (pp. 29–31). El 18.56 registrado corresponde a [18.555, 18.565) con la convención indicada. La clase entera 10–12 tiene límites 9.5–12.5 y amplitud 3 (p. 44).</p>
<h2>5. Elección del gráfico</h2>
${table(["Datos", "Gráfico", "Precaución"], [
["Categorías sin orden", "Barras; a veces sectores", "Los espacios separan categorías; ángulo del sector = 360° pᵢ"],
["Categorías ordenadas", "Barras en orden significativo", "Mantener el orden en el eje"],
["Recuentos discretos", "Barras", "No sugerir valores intermedios no observados"],
["Medidas continuas agrupadas", "Histograma, polígono de frecuencias", "Las clases contiguas comparten límites; si las amplitudes difieren, comparar densidad nᵢ/w"],
["Dos variables cuantitativas", "Diagrama de dispersión", "Asociación no demuestra causalidad"]
])}
<p>El polígono une los puntos sobre los puntos medios de las clases. Muestra la forma de los datos agrupados, pero no recupera cada observación original. <a href="https://openstax.org/books/introductory-statistics-2e/pages/2-2-histograms-frequency-polygons-and-time-series-graphs">OpenStax, §2.2</a>; <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/histogra.htm">NIST</a>.</p>
<h2>6. Centro, dispersión y forma</h2>
<ul><li><strong>Tendencia central:</strong> ubicación de los valores típicos.</li><li><strong>Variabilidad:</strong> amplitud de la dispersión.</li><li><strong>Asimetría:</strong> cola larga a la derecha, positiva; a la izquierda, negativa. Una prueba difícil podría producir muchas notas bajas y cola derecha, pero hay que comprobar los datos.</li><li><strong>Curtosis:</strong> en la explicación introductoria, una forma más apuntada es leptocúrtica, una más plana platicúrtica y la comparación intermedia mesocúrtica (p. 39). Los estadísticos formales llegan más adelante. Como precisión adicional, la curtosis también refleja las colas y no siempre se reduce a la altura del pico. <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm">NIST</a>.</li></ul>
<h2>7. Ejercicios: intenta responder antes de abrir la solución</h2>
<p><strong>1.</strong> El tiempo de reacción se registra en milisegundos. ¿Escala y tipo de variable?</p><details><summary>Solución</summary><p>La duración suele tratarse como variable continua de razón, con cero significativo. El aparato puede redondear; 0 ms registrados podrían indicar un límite de resolución.</p></details>
<p><strong>2.</strong> Una puntuación redondeada a dos decimales aparece como 18.56. ¿Qué intervalo representa?</p><details><summary>Solución</summary><p>La unidad es 0.01, la mitad 0.005; intervalo semiabierto [18.555, 18.565).</p></details>
<p><strong>3.</strong> ¿Cuál es la amplitud de la clase entera 10–12 con ajuste de 0.5 en los extremos?</p><details><summary>Solución</summary><p>Límites 9.5 y 12.5; amplitud 12.5 − 9.5 = 3.</p></details>
<p><strong>4.</strong> ¿Qué porcentaje de puntuaciones de la tabla no supera 10?</p><details><summary>Solución</summary><p>Las dos primeras clases contienen 25 de 40: 25/40 × 100 = 62.5%.</p></details>
<h2>Términos: inglés — español — ruso</h2>${terms}<h2>Fuentes y alcance</h2>${sources}`
  },
  nl: {
    title: "Inleiding tot data-analyse", intro: "Hoofdstuk 1 · Meting, frequenties en verdelingen", subject: "Data-analyse",
    html: `<blockquote><p>Een zelfstandige studiegids gebaseerd op hoofdstuk 1 van het basisboek van de UNED. Aanvullende toelichtingen zijn van de hoofdstukinhoud te onderscheiden.</p></blockquote>
<h2>1. Statistiek in psychologisch onderzoek</h2>
<p>Psychologisch onderzoek zet waarnemingen om in gegevens die geordend, beschreven en geïnterpreteerd kunnen worden. Een vereenvoudigde volgorde: een vraag formuleren; een toetsbare hypothese opstellen; opzet, metingen en steekproef kiezen; gegevens verzamelen en analyseren; resultaten en de grenzen van conclusies bespreken; methoden en resultaten rapporteren. Analyse hangt samen met interpretatie, maar een getal op zichzelf is nog geen psychologische verklaring.</p>
<p><strong>Beschrijvende statistiek</strong> vat waargenomen gegevens samen in tabellen, grafieken en kengetallen. <strong>Inferentiële statistiek</strong> gebruikt een kansmodel en aannames om op basis van een steekproef uitspraken over een populatie te doen. De kwaliteit van de generalisatie hangt ook af van de steekproeftrekking en de meting van het construct. <a href="https://openstax.org/books/introductory-statistics-2e/pages/1-1-definitions-of-statistics-probability-and-key-terms">OpenStax, §1.1</a>.</p>
<p>De <strong>populatie</strong> omvat alle eenheden waarover de studie iets wil zeggen; de <strong>steekproef</strong> is het onderzochte deel. Dat is niet vanzelf representatief: selectie kan vertekening veroorzaken. Een <strong>parameter</strong> beschrijft de populatie (gemiddelde μ, variantie σ², proportie π); een <strong>steekproefstatistiek</strong> wordt uit de steekproef berekend (in het hoofdstuk onder meer X̄, S²ₓ en P, p. 10). Notatie kan per boek verschillen.</p>
${table(["Vraag", "Populatie", "Steekproef"], [["Gemiddelde studietijd van alle ingeschreven studenten", "Alle studenten van de afgebakende cursus en het studiejaar", "Studenten van wie de studietijd is gemeten"]])}
<h2>2. Variabelen en meetniveaus</h2>
<p>S. S. Stevens onderscheidde nominale, ordinale, interval- en ratioschalen naar de vergelijkingen die de getallen rechtvaardigen. Het schema neemt de vraag hoe een psychologisch construct is gemeten niet weg. <a href="https://doi.org/10.1126/science.103.2684.677">Stevens, 1946</a>; <a href="https://openstax.org/books/introductory-statistics-2e/pages/1-3-frequency-frequency-tables-and-levels-of-measurement">OpenStax, §1.3</a>.</p>
${table(["Schaal", "Geldige vergelijking", "Voorbeeld", "Beperking"], [
["Nominaal", "Dezelfde / een andere categorie", "Behandelgroep, diagnose", "Code 1 of 2 is een label, geen hoeveelheid"],
["Ordinaal", "Volgorde van categorieën", "Lage / matige / hoge ernst van symptomen", "Afstanden tussen rangen hoeven niet gelijk te zijn"],
["Interval", "Gelijke verschillen", "Temperatuur °C; sommige gestandaardiseerde scores bij benadering", "Afgesproken nul: 40 is niet tweemaal zoveel van de eigenschap als 20"],
["Ratio", "Verschillen en werkelijk nulpunt", "Reactieduur, aantal fouten, studie-uren", "Verhoudingen hebben betrekking op eigenschap en eenheid"]
])}
<p>IQ of een vragenlijstscore mag <strong>niet automatisch als intervalschaal</strong> gelden omdat er een getal staat. Dat hangt van de schaal en analyse af. Een nulscore bewijst op zichzelf geen volledige afwezigheid van de eigenschap.</p>
<p><strong>Discrete</strong> variabelen hebben gescheiden waarden, vaak tellingen; <strong>continue</strong> variabelen kunnen in beginsel tussenliggende waarden aannemen, al rondt een instrument af. In een experiment wordt de <strong>onafhankelijke variabele</strong> gemanipuleerd of toegewezen en de <strong>afhankelijke</strong> gemeten. Bij observationeel onderzoek kan een voorspeller slechts worden waargenomen. Andere variabelen kunnen de samenhang vertekenen.</p>
<h2>3. Frequentietabellen</h2>
<p>Laat n het totale aantal waarnemingen zijn, nᵢ het aantal in klasse i en k het aantal uitputtende, niet overlappende klassen. De absolute frequentie is nᵢ, de relatieve pᵢ en het percentage Pᵢ. De cumulatieve maten gelden <strong>tot en met klasse i</strong> (de index i verduidelijkt de boeknotatie nₐ, pₐ en Pₐ):</p>${frequencyFormulas}
<p>Controleer: de som van nᵢ is n, van pᵢ is 1 en het laatste cumulatieve percentage 100%. Cumuleren vereist een betekenisvolle volgorde en is niet geschikt voor ongeordende nominale categorieën (p. 26).</p>
<h3>Voorbeeld: tentamenangst bij 40 studenten</h3>
<p>Voorbeeld 1.1 van het studieboek groepeert gehele scores in 1–5, 6–10 enzovoort. De tabel combineert tabellen 1.5 en 1.6 (pp. 29–30).</p>
${frequencyTable(["Klasse", "Werkelijke grenzen", "Midden"])}
<p>De eerste twee klassen bevatten 13 + 12 = 25 scores: cumulatieve proportie 25/40 = 0.625, oftewel <strong>62.5%</strong>. Voor een waarde precies op een gedeelde grens is één consequente afspraak nodig, zoals [0.5, 5.5) en [5.5, 10.5). De geregistreerde gehele scores vallen niet op die grenzen.</p>
<h2>4. Groeperen en klassengrenzen</h2>
<p>Het hoofdstuk schrijft <strong>niet</strong> k ≈ √n of R = (Xₘₐₓ − Xₘᵢₙ) + u voor als verplichte regels voor aantal en breedte van klassen. Verschillende indelingen zijn mogelijk en groeperen verliest detail (p. 28). Waarnemingen lopen van 2 tot 30; klassen van breedte 5 beginnen bij 1–5, maar 2–6 … 27–31 kan ook (p. 29). Zes klassen zijn een voorbeeld, geen verplichte uitkomst van een wortelregel. Het gewone waargenomen bereik is 30 − 2 = 28.</p>
<p>Wanneer metingen zijn <strong>afgerond</strong> op registratie-eenheid u, worden de schijnbare grenzen Lₐ en Uₐ weergegeven als continue grenzen Lₑ en Uₑ. M is het midden, w de breedte:</p>${boundaryFormulas}
<p>Dit zijn registratiegrenzen, niet de fysieke nauwkeurigheid van het apparaat. De aanpassing bij gehele waarden is 0.5, bij één decimaal 0.05 en bij twee decimalen 0.005 (pp. 29–31). De geregistreerde 18.56 hoort onder de genoemde halfopen afspraak bij [18.555, 18.565). De gehele klasse 10–12 heeft grenzen 9.5–12.5 en breedte 3 (p. 44).</p>
<h2>5. Een grafiek kiezen</h2>
${table(["Gegevens", "Grafiek", "Let op"], [
["Ongeordende categorieën", "Staafdiagram, soms cirkeldiagram", "Ruimte tussen staven scheidt categorieën; sectorhoek = 360° pᵢ"],
["Geordende categorieën", "Staven in betekenisvolle volgorde", "Behoud die volgorde op de as"],
["Discrete aantallen", "Staafdiagram", "Suggereer geen niet waargenomen tussenwaarden"],
["Gegroepeerde continue metingen", "Histogram, frequentiepolygoon", "Aangrenzende klassen delen grenzen; bij ongelijke breedte vergelijk dichtheid nᵢ/w"],
["Twee kwantitatieve variabelen", "Spreidingsdiagram", "Samenhang bewijst geen oorzaak"]
])}
<p>Een frequentiepolygoon verbindt punten boven de klassenmiddens. Hij toont de vorm van gegroepeerde gegevens, niet alle oorspronkelijke waarnemingen. <a href="https://openstax.org/books/introductory-statistics-2e/pages/2-2-histograms-frequency-polygons-and-time-series-graphs">OpenStax, §2.2</a>; <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/histogra.htm">NIST</a>.</p>
<h2>6. Centrum, spreiding en vorm</h2>
<ul><li><strong>Centrale tendens:</strong> waar de typische waarden liggen.</li><li><strong>Variabiliteit:</strong> hoe ver de waarnemingen uiteen liggen.</li><li><strong>Scheefheid:</strong> een lange rechterstaart is positief; een lange linkerstaart negatief. Een moeilijke toets kan veel lage scores en een rechterstaart geven, maar controleer de gegevens.</li><li><strong>Kurtosis:</strong> in de inleiding is een spitsere verdeling leptokurtisch, een plattere platykurtisch en de vergelijking daartussen mesokurtisch (p. 39). Formele statistieken volgen later. Als aanvullende nuance: kurtosis weerspiegelt ook het gedrag van de staarten en is niet altijd tot piekhoogte te herleiden. <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm">NIST</a>.</li></ul>
<h2>7. Oefeningen: antwoord voordat je de oplossing opent</h2>
<p><strong>1.</strong> Reactieduur wordt in milliseconden gemeten. Welk meetniveau en type variabele?</p><details><summary>Oplossing</summary><p>Duur wordt doorgaans behandeld als een continue ratiovariabele met betekenisvol nulpunt. Het apparaat kan afronden; 0 ms op het scherm kan beperkte resolutie aangeven.</p></details>
<p><strong>2.</strong> Een op twee decimalen afgeronde score is 18.56. Welk interval hoort daarbij?</p><details><summary>Oplossing</summary><p>De registratie-eenheid is 0.01, de helft 0.005. Halfopen interval [18.555, 18.565).</p></details>
<p><strong>3.</strong> Wat is de breedte van de gehele klasse 10–12 met correctie 0.5 aan beide zijden?</p><details><summary>Oplossing</summary><p>Grenzen 9.5 en 12.5; breedte 12.5 − 9.5 = 3.</p></details>
<p><strong>4.</strong> Welk percentage in de tabel heeft een score van hoogstens 10?</p><details><summary>Oplossing</summary><p>De eerste twee klassen bevatten 25 van 40 scores: 25/40 × 100 = 62.5%.</p></details>
<h2>Begrippen: Engels — Spaans — Russisch</h2>${terms}<h2>Bronnen en afbakening</h2>${sources}`
  },
};
