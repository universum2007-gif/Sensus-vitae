import Link from "next/link";
import { notFound } from "next/navigation";
import { Compass, Heart, Sparkles, Waypoints } from "lucide-react";
const languages = ["ru", "es", "en", "nl"] as const;
type Language = (typeof languages)[number];

function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

const content = {
  ru: {
    label: "УЧЁБА · ОРИЕНТАЦИЯ",
    title: "Найти своё направление",
    intro:
      "Пространство для осмысленного выбора обучения и профессионального направления. Здесь можно исследовать свои интересы, сильные стороны и предпочтения — не для получения готового ярлыка, а чтобы лучше понимать себя и возможные пути.",
    areas: [
      [
        "Интересы",
        "Какие темы, задачи и вопросы устойчиво вызывают любопытство и желание разбираться глубже.",
      ],
      [
        "Сильные стороны",
        "Какие способы мышления, навыки и виды деятельности даются естественнее или развиваются особенно успешно.",
      ],
      [
        "Предпочтения",
        "Какая среда, степень самостоятельности, тип взаимодействия и характер работы подходят лучше.",
      ],
    ],
    noteTitle: "Интерактивная самооценка",
    note:
      "Позже здесь появится научно обоснованный интерактивный инструмент для исследования возможных учебных и профессиональных направлений. Его результаты будут служить ориентиром для размышления, а не диагнозом или окончательным решением.",
    back: "← Вернуться к учёбе",
  },

  es: {
    label: "ESTUDIO · ORIENTACIÓN",
    title: "Encontrar tu dirección",
    intro:
      "Un espacio para reflexionar sobre las opciones de estudio y orientación profesional. Aquí podrás explorar tus intereses, fortalezas y preferencias para comprender mejor quién eres y qué caminos podrían encajar contigo, sin buscar una etiqueta definitiva.",
    areas: [
      [
        "Intereses",
        "Qué temas, tareas y preguntas despiertan de forma constante tu curiosidad y tus ganas de profundizar.",
      ],
      [
        "Fortalezas",
        "Qué formas de pensar, habilidades y actividades te resultan más naturales o se desarrollan especialmente bien.",
      ],
      [
        "Preferencias",
        "Qué entorno, grado de autonomía, tipo de interacción y forma de trabajo se adaptan mejor a ti.",
      ],
    ],
    noteTitle: "Autoevaluación interactiva",
    note:
      "Más adelante aparecerá aquí una herramienta interactiva basada en evidencia científica para explorar posibles direcciones académicas y profesionales. Sus resultados servirán como orientación para la reflexión, no como diagnóstico ni decisión definitiva.",
    back: "← Volver al estudio",
  },

  en: {
    label: "STUDY · ORIENTATION",
    title: "Find your direction",
    intro:
      "A space for thoughtful exploration of study and professional directions. Here you can examine your interests, strengths and preferences — not to receive a fixed label, but to understand yourself and possible paths more clearly.",
    areas: [
      [
        "Interests",
        "Which topics, tasks and questions consistently spark curiosity and a desire to explore more deeply.",
      ],
      [
        "Strengths",
        "Which ways of thinking, skills and activities come more naturally or develop particularly well.",
      ],
      [
        "Preferences",
        "Which environment, level of autonomy, type of interaction and style of work suit you best.",
      ],
    ],
    noteTitle: "Interactive self-assessment",
    note:
      "A scientifically grounded interactive tool for exploring possible academic and professional directions will be added here later. Its results will be used as a guide for reflection, not as a diagnosis or a final decision.",
    back: "← Back to study",
  },

  nl: {
    label: "STUDIE · ORIËNTATIE",
    title: "Vind je richting",
    intro:
      "Een plek om bewust na te denken over studie- en beroepsrichtingen. Hier kun je je interesses, sterke kanten en voorkeuren onderzoeken — niet om een vast label te krijgen, maar om jezelf en mogelijke richtingen beter te begrijpen.",
    areas: [
      [
        "Interesses",
        "Welke onderwerpen, taken en vragen wekken blijvend nieuwsgierigheid en de wens om je er verder in te verdiepen.",
      ],
      [
        "Sterke kanten",
        "Welke manieren van denken, vaardigheden en activiteiten natuurlijker aanvoelen of zich bijzonder goed ontwikkelen.",
      ],
      [
        "Voorkeuren",
        "Welke omgeving, mate van zelfstandigheid, vorm van samenwerking en manier van werken het beste bij je passen.",
      ],
    ],
    noteTitle: "Interactieve zelfevaluatie",
    note:
      "Later komt hier een wetenschappelijk onderbouwd interactief hulpmiddel om mogelijke studie- en beroepsrichtingen te verkennen. De uitkomsten zijn bedoeld als ondersteuning bij reflectie, niet als diagnose of definitieve beslissing.",
    back: "← Terug naar studie",
  },
} as const;

const icons = [Heart, Sparkles, Waypoints];

export default async function OrientationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const copy = content[lang];

  return (
    <main className="mx-auto min-h-[65vh] max-w-4xl px-5 py-14">
      <Link
        href={`/${lang}/study`}
        className="text-sm font-bold text-[#173d30] transition hover:text-[#98722e]"
      >
        {copy.back}
      </Link>

      <section className="mt-8">
        <div className="flex items-center gap-3 text-[#98722e]">
          <Compass className="h-5 w-5" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.18em]">
            {copy.label}
          </p>
        </div>

        <h1 className="mt-4 font-editorial text-4xl font-bold text-[#173d30] sm:text-5xl">
          {copy.title}
        </h1>

        <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#53655c]">
          {copy.intro}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {copy.areas.map(([title, description], index) => {
            const Icon = icons[index];

            return (
              <article
                key={title}
                className="rounded-[1.35rem] border border-[#e5dcc8] bg-[#fffdf8] p-6"
              >
                <Icon
                  className="h-6 w-6 text-[#98722e]"
                  aria-hidden="true"
                />
                <h2 className="mt-4 font-editorial text-2xl font-bold text-[#173d30]">
                  {title}
                </h2>
                <p className="mt-3 leading-7 text-[#53655c]">
                  {description}
                </p>
              </article>
            );
          })}
        </div>

        <section className="mt-10 rounded-[1.5rem] border border-[#e5dcc8] bg-[#f9f5ee] p-6 shadow-[0_6px_20px_rgba(23,61,48,0.05)]">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#98722e]">
            {copy.noteTitle}
          </p>

          <p className="mt-3 leading-7 text-[#53655c]">
            {copy.note}
          </p>
        </section>
      </section>
    </main>
  );
}