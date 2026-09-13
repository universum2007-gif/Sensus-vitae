import Link from "next/link";
import { notFound } from "next/navigation";
import { EducationalNewsQuiz } from "@/components/educational-news-quiz";
import { GlossaryTermButton } from "@/components/glossary-term-button";
import { createPageMetadata } from "@/lib/metadata";
import { demoKeyTermsByLocale, educationalNewsCategories, educationalNewsDemoList } from "@/lib/educational-news";
import { isLanguage } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return createPageMetadata({
    lang,
    path: "library/news",
    title: { ru: "Учебные новости", es: "Noticias para aprender", en: "Learning News", nl: "Leernieuws" }[lang],
    description: { ru: "Научные новости, объяснённые для обучения и понимания без чрезмерного упрощения.", es: "Noticias científicas explicadas para aprender y comprender sin simplificar de forma excesiva.", en: "Scientific developments explained for learning and understanding without oversimplification.", nl: "Wetenschappelijke ontwikkelingen uitgelegd voor leren en begrip zonder overmatige vereenvoudiging." }[lang],
  });
}

export default async function LibraryNewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const copy = {
    ru: {
      title: "Учебные новости",
      intro: "Отобранные научные события и идеи, объяснённые для обучения: что произошло, почему это важно и как это связано с научным мышлением.",
      categories: "Темы",
      news: "Новости для обучения",
      back: "Назад в библиотеку",
      source: "Источник",
      why: "Почему это важно",
      concepts: "Ключевые термины",
      quiz: "Проверка знаний",
      demo: "ДЕМО-ЭЛЕМЕНТ",
      openSource: "Открыть источник",
      learningPrompt: "Выберите ответ и проверьте объяснение.",
      answerLabel: "Ответ",
      correct: "Верно",
      incorrect: "Неверно",
      explanation: "Объяснение",
    },
    es: {
      title: "Noticias para aprender",
      intro: "Desarrollos científicos seleccionados explicados para aprender: qué pasó, por qué importa y cómo se relacionan con el pensamiento científico.",
      categories: "Temas",
      news: "Noticias para aprender",
      back: "Volver a la biblioteca",
      source: "Fuente",
      why: "Por qué importa",
      concepts: "Términos clave",
      quiz: "Comprobación de conocimientos",
      demo: "ELEMENTO DEMO",
      openSource: "Abrir la fuente",
      learningPrompt: "Elige una respuesta y comprueba la explicación.",
      answerLabel: "Respuesta",
      correct: "Correcto",
      incorrect: "Incorrecto",
      explanation: "Explicación",
    },
    en: {
      title: "Learning News",
      intro: "Selected scientific developments explained for learning: what happened, why it matters and how it connects to scientific thinking.",
      categories: "Topics",
      news: "Learning news",
      back: "Back to library",
      source: "Source",
      why: "Why this matters",
      concepts: "Key terms",
      quiz: "Knowledge check",
      demo: "DEMO ITEM",
      openSource: "Open source",
      learningPrompt: "Choose an answer and check the explanation.",
      answerLabel: "Answer",
      correct: "Correct",
      incorrect: "Incorrect",
      explanation: "Explanation",
    },
    nl: {
      title: "Leernieuws",
      intro: "Geselecteerde wetenschappelijke ontwikkelingen uitgelegd voor leren: wat gebeurde, waarom het belangrijk is en hoe het verband houdt met wetenschappelijk denken.",
      categories: "Onderwerpen",
      news: "Leernieuws",
      back: "Terug naar de bibliotheek",
      source: "Bron",
      why: "Waarom dit belangrijk is",
      concepts: "Kernbegrippen",
      quiz: "Kennischeck",
      demo: "DEMO-ITEM",
      openSource: "Bron openen",
      learningPrompt: "Kies een antwoord en controleer de uitleg.",
      answerLabel: "Antwoord",
      correct: "Correct",
      incorrect: "Onjuist",
      explanation: "Uitleg",
    },
  }[lang];

  const item = educationalNewsDemoList[0];
  const categoryItems = educationalNewsCategories[lang];

  return (
    <main className="mx-auto min-h-[65vh] max-w-6xl px-5 py-14">
      <div className="mb-8">
        <Link href={`/${lang}/library`} className="text-sm font-bold text-[#173d30] hover:text-[#98722e]">
          ← {copy.back}
        </Link>
      </div>

      <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{copy.news}</p>
      <h1 className="font-editorial mt-4 text-4xl font-bold sm:text-5xl">{copy.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53655c]">{copy.intro}</p>

      <section className="mt-10">
        <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{copy.categories}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {categoryItems.map((category) => (
            <span key={category.id} className="rounded-full border border-[#d9cfb2] bg-[#f7f1e7] px-3 py-2 text-sm font-medium text-[#173d30]">
              {category.label}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <article className="rounded-[1.5rem] border border-[#e5dcc8] bg-[#f9f5ee] p-6 shadow-[0_6px_20px_rgba(23,61,48,0.05)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#98722e]">{copy.demo}</p>
              <h2 className="mt-2 font-editorial text-3xl font-bold text-[#173d30]">{item.title[lang]}</h2>
            </div>
            <span className="inline-flex rounded-full border border-[#d9cfb2] bg-[#fffaf1] px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-[#173d30]">
              {item.category[lang]}
            </span>
          </div>

          <p className="mt-4 text-sm font-medium text-[#53655c]">{item.date}</p>
          <p className="mt-4 text-[15px] leading-7 text-[#53655c]">{item.summary[lang]}</p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-[#e5dcc8] bg-[#fffdf9] p-5">
              <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{copy.why}</p>
              <p className="mt-3 text-[15px] leading-7 text-[#53655c]">{item.whyThisMatters[lang]}</p>
            </div>
            <div className="rounded-2xl border border-[#e5dcc8] bg-[#fffdf9] p-5">
              <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{copy.source}</p>
              <p className="mt-3 text-[15px] leading-6 text-[#173d30] font-semibold">{item.sourceName}</p>
              <Link href={item.sourceUrl} className="mt-3 inline-flex text-sm font-bold text-[#173d30] underline decoration-[#b99850] underline-offset-4 hover:text-[#98722e]">
                {copy.openSource}
              </Link>
              {item.doi ? <p className="mt-2 text-xs text-[#53655c]">DOI: {item.doi}</p> : null}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#e5dcc8] bg-[#fffdf9] p-5">
            <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{copy.concepts}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {demoKeyTermsByLocale[lang].map((term) => (
                <GlossaryTermButton key={term.id} id={term.id as any} locale={lang} />
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#e5dcc8] bg-[#fffdf9] p-5">
            <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{copy.quiz}</p>
            <p className="mt-3 text-sm text-[#53655c]">{copy.learningPrompt}</p>
            <EducationalNewsQuiz
              locale={lang}
              copy={{
                correct: copy.correct,
                incorrect: copy.incorrect,
                explanation: copy.explanation,
              }}
              questions={item.quiz.map((question) => ({
                question: question.question[lang],
                choices: question.choices[lang],
                correctIndex: question.correctIndex,
                explanation: question.explanation[lang],
              }))}
            />
          </div>
        </article>
      </section>
    </main>
  );
}
