import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/section-shell";
import { ContentStatus } from "@/components/content-status";
import { GlossaryTermButton } from "@/components/glossary-term-button";
import { EducationalNewsQuiz } from "@/components/educational-news-quiz";
import { LinkLabel } from "@/components/link-label";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";
import { navigationCopy } from "@/lib/learning-navigation";
import { testosteroneCopy, testosteroneChapters, testosteroneBookPath, testosteroneOriginalTitle, testosteroneChapterOriginalTitle, testosteroneSources, testosteroneTerms } from "@/lib/testosterone-content";

type Params = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Params) {
 const { lang } = await params;
 if (!isLanguage(lang)) notFound();
 const c = testosteroneCopy[lang];
 return createPageMetadata({ lang, path: testosteroneBookPath, title: c.title, description: c.intro });
}
export default async function TestosteroneBookPage({ params }: Params) {
 const { lang } = await params;
 if (!isLanguage(lang)) notFound();
 const c = testosteroneCopy[lang];
 const nav = navigationCopy[lang];
 return <SectionShell lang={lang} title={c.title} intro={c.intro} parent={{ label: nav.books, path: "library/books" }}>
  <Link href={"/" + lang + "/club/authors/robert-sapolsky"} className="sv-ui-link font-semibold">{lang === "ru" ? "Роберт М. Сапольски" : "Robert M. Sapolsky"}</Link>
  <p className="mt-3 leading-7 text-[#53655c]">{c.progress}</p>
  <p className="mt-3 max-w-3xl text-sm leading-6 text-[#53655c]">{c.health}</p>
  <h2 className="font-editorial mt-10 text-3xl font-bold">{c.chapters}</h2>
  <ol className="mt-6 space-y-4">
   {testosteroneChapters.map(chapter => <li key={chapter.number}>
    {chapter.available ? <details id={"chapter-" + chapter.number} open className="paper-card group rounded-[1.4rem] border bg-card p-4 sm:p-6 scroll-mt-48" data-reading-chapter={chapter.number}>
     <summary className="flex min-h-11 cursor-pointer list-none items-start gap-3 [&::-webkit-details-marker]:hidden">
      <span className="font-editorial flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#173d30] text-lg font-bold text-[#f2d797]">{chapter.number}</span>
      <div className="min-w-0 flex-1"><h3 className="font-editorial break-words text-2xl font-bold">{c.chapterTitle}</h3><ContentStatus lang={lang} state="available"/></div>
      <span aria-hidden="true" className="text-xl text-[#7a5b25] group-open:rotate-45">+</span>
     </summary>
     <article className="mt-6 min-w-0 border-t pt-6 sm:px-4" data-testosterone-chapter>
      <p className="font-editorial max-w-3xl text-2xl leading-relaxed">{c.chapterIntro}</p>
      <aside className="mt-7 border-y py-5">
       <h4 className="font-editorial text-xl font-bold">{c.before}</h4>
       <p className="mt-3 leading-7">{c.beforeQuestion}</p>
       <p className="mt-2 text-sm leading-6 text-[#53655c]">{c.reflectionNote}</p>
      </aside>
      <nav aria-label={c.contents} className="mt-6 grid gap-x-5 sm:grid-cols-2">
       {c.sections.map(section => <Link key={section.id} className="sv-ui-link text-sm" href={"#chapter-1-" + section.id}>{section.title}</Link>)}
      </nav>
      <div className="mt-8 space-y-9">
       {c.sections.map(section => <section key={section.id} id={"chapter-1-" + section.id} className="scroll-mt-48">
        <h4 className="font-editorial text-2xl font-bold">{section.title}</h4>
        <div className="mt-4 max-w-3xl space-y-4 leading-8 text-[#344f43]">{section.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
        {section.id === "continuum" && <ol className="mt-5 grid gap-3 sm:grid-cols-2">{c.continuum.map((step,index) => <li key={step} className="rounded-xl border p-4 text-sm leading-6"><span className="mr-2 font-bold text-[#7a5b25]">{index + 1}.</span>{step}</li>)}</ol>}
        {section.caution && <aside className="mt-5 border-l-2 border-[#c3a35f] bg-[#fffdf9] p-4">
         <h5 className="text-sm font-bold text-[#7a5b25]">{c.caution}</h5>
         <p className="mt-2 max-w-3xl leading-7 text-[#53655c]">{section.caution}</p>
         {section.sources?.map(id => { const index = testosteroneSources.findIndex(source => source.id === id); const source = testosteroneSources[index]; return <a key={id} href={source.href} className="sv-ui-link mt-2 text-sm"><LinkLabel label={c.sourceLabel + ": " + c.sourceNames[index]} external/></a>; })}
        </aside>}
       </section>)}
      </div>
      <section className="mt-10 border-y py-7">
       <h4 className="font-editorial text-2xl font-bold">{c.conclusions}</h4>
       <div className="mt-5 grid gap-6 md:grid-cols-2">
        {[{heading:c.supported,items:c.supportedItems},{heading:c.unsupported,items:c.unsupportedItems}].map(group => <div key={group.heading}><h5 className="font-bold">{group.heading}</h5><ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-[#53655c]">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
       </div>
      </section>
      <section className="mt-9"><h4 className="font-editorial text-2xl font-bold">{c.glossary}</h4><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">{testosteroneTerms.map(id => <GlossaryTermButton key={id} id={id} locale={lang}/>)}</div></section>
      <section className="mt-9"><h4 className="font-editorial text-2xl font-bold">{c.quiz}</h4><p className="mt-3 leading-7 text-[#53655c]">{c.quizIntro}</p><EducationalNewsQuiz key={lang} locale={lang} questions={c.questions} copy={{correct:c.correct,incorrect:c.incorrect,explanation:c.explanation}}/></section>
      <aside className="mt-9 border-y py-6"><h4 className="font-editorial text-2xl font-bold">{c.after}</h4><p className="mt-3 leading-7">{c.afterQuestion}</p><p className="mt-2 text-sm leading-6 text-[#53655c]">{c.reflectionNote}</p></aside>
      <details className="mt-8 border-t pt-4">
       <summary className="min-h-11 cursor-pointer py-3 font-semibold">{c.sources}</summary>
       <div className="mt-4 space-y-5 text-sm leading-7 text-[#53655c]">
        <p>{c.editorial}</p><p>{c.verification}</p>
        <h5 className="font-bold">{c.bookSource}</h5>
        <p>Robert M. Sapolsky. <cite>{testosteroneOriginalTitle}</cite>. <cite>{testosteroneChapterOriginalTitle}</cite>.</p>
        <div className="flex flex-col items-start">
         <a className="sv-ui-link" href="https://www.simonandschuster.com/books/The-Trouble-With-Testosterone/Robert-M-Sapolsky/9780684838915"><LinkLabel label="Simon & Schuster" external/></a>
         <a className="sv-ui-link" href="https://alpinabook.ru/catalog/book-igry-testosterona/"><LinkLabel label={lang === "ru" ? "Альпина — Игры тестостерона и другие вопросы биологии поведения" : {en:"Russian edition — Alpina",nl:"Russische uitgave — Alpina",es:"Edición rusa — Alpina"}[lang]} external/></a>
        </div>
        <h5 className="font-bold">{c.contextSources}</h5>
        <ul className="space-y-3">{testosteroneSources.map((source,index) => <li key={source.id}><p>{c.sourceNames[index]}</p><a className="sv-ui-link break-words" href={source.href}><LinkLabel label={source.title} external/></a></li>)}</ul>
       </div>
      </details>
     </article>
    </details> : <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 rounded-xl border px-5 py-3" data-reading-chapter={chapter.number}><h3 className="font-editorial text-xl font-bold">{c.chapter} {chapter.number}</h3><ContentStatus lang={lang} state="preparing"/></div>}
   </li>)}
  </ol>
 </SectionShell>;
}
