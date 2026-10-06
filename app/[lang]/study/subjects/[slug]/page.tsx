import { LinkLabel } from "@/components/link-label";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/section-shell";
import { academicSubjects, academicReadingCopy, dataAnalysisLayoutCopy } from "@/lib/academic-content";
import { libraryCopy } from "@/lib/library-architecture";
import { navigationCopy } from "@/lib/learning-navigation";
import { categories, isLanguage } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/metadata";
type Params = { params: Promise<{ lang: string; slug: string }> };
export async function generateMetadata({ params }: Params) {
  const { lang, slug } = await params;
  const subject = academicSubjects.find(item => item.slug === slug);
  if (!isLanguage(lang) || !subject) notFound();
  return createPageMetadata({ lang, path: `study/subjects/${slug}`, title: categories[lang][subject.categoryIndex][0], description: libraryCopy[lang].subjectNote });
}
export default async function SubjectPage({ params }: Params) {
  const { lang, slug } = await params;
  const subject = academicSubjects.find(item => item.slug === slug);
  if (!isLanguage(lang) || !subject) notFound();
  const c = navigationCopy[lang];
  const reading = academicReadingCopy[lang];
  const isDataAnalysis = slug === "data-analysis";
  if (isDataAnalysis) {
    const copy = dataAnalysisLayoutCopy[lang];
    return <main className="mx-auto min-h-[65vh] max-w-6xl px-5 py-12 sm:py-14">
      <Link href={`/${lang}/study`} className="mb-6 inline-flex min-h-11 items-center text-sm font-bold sv-ui-link">{c.study}</Link>
      <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">SENSUS VITAE</p>
      <h1 className="font-editorial mt-4 text-3xl font-bold sm:text-5xl">{categories[lang][subject.categoryIndex][0]}</h1>
      <p lang="es" className="mt-4 text-sm leading-6 text-[#607068]">Introducción al Análisis de Datos · Grado en Psicología · UNED</p>
      <p className="mt-3 max-w-3xl leading-7 text-[#53655c]">{copy.intro}</p>
      <section className="mt-8" aria-labelledby="subject-chapters">
        <h2 id="subject-chapters" className="font-editorial text-2xl font-bold sm:text-3xl">{reading.chapters}</h2>
        <ol className="mt-4 space-y-4">{subject.books.flatMap(book => book.chapters.map(chapter => <li key={chapter.path} className="rounded-2xl border bg-card px-5 py-5 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{copy.chapter} {String(chapter.number).padStart(2, "0")}</p>
          <h3 className="font-editorial mt-2 text-2xl font-bold">{chapter.title[lang].replace(/^(?:Глава|Tema|Chapter|Hoofdstuk) \d+\.\s*/, "")}</h3>
          <p className="mt-3 text-sm leading-6 text-[#607068]">{chapter.cardDescription?.[lang] ?? chapter.description?.[lang]}</p>
          <Link className="sv-primary-action mt-4 gap-2" href={`/${lang}/${chapter.path}`}>{reading.read}<span aria-hidden="true">→</span></Link>
        </li>))}</ol>
      </section>
      <section className="mt-8" aria-labelledby="subject-source">
        <h2 id="subject-source" className="font-editorial text-xl font-semibold">{reading.source}</h2>
        <div className="mt-3 space-y-3">{subject.books.map(book => <div key={book.id} className="rounded-2xl border bg-card px-5 py-4 sm:px-6">
          {book.source && <p className="text-sm leading-6 text-[#607068]">{book.source.authors} ({book.source.year}).</p>}
          <h3 className="font-editorial mt-2 text-lg font-medium leading-relaxed">{book.title[lang]}</h3>
          {book.originalTitle && lang !== book.originalTitle.language && <p className="mt-2 text-xs leading-5 text-[#607068]">{reading.originalTitle}: <span lang={book.originalTitle.language}>{book.originalTitle.text}</span></p>}
          {book.source && <p className="mt-2 text-sm text-[#607068]">{book.source.edition[lang]}.</p>}
        </div>)}</div>
      </section>
      <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t pt-4 text-sm" aria-label={c.materials}>
        <Link className="sv-ui-link inline-flex min-h-11 items-center font-semibold" href={`/${lang}/library#learning-materials`}>{libraryCopy[lang].resources}</Link>
        <Link className="sv-ui-link inline-flex min-h-11 items-center font-semibold" href={`/${lang}/glossary`}>{c.glossary}</Link>
      </nav>
    </main>;
  }
  return <SectionShell lang={lang} title={categories[lang][subject.categoryIndex][0]} intro={categories[lang][subject.categoryIndex][1]} parent={{label:c.study,path:"study"}}>
    <p className="text-sm leading-6 text-[#607068]">{subject.description?.[lang] ?? c.subjectNote}</p>
    {subject.books.length ? <div className="mt-6 space-y-10">{subject.books.map(book => <section key={book.id}>
      <h2 className="font-editorial text-3xl font-bold">{book.source ? reading.source : c.books}</h2>
      <div className="mt-5 rounded-2xl border bg-card p-6">
        {book.source && <p className="text-sm leading-7 text-[#607068]">{book.source.authors} ({book.source.year}).</p>}
        <h3 className={isDataAnalysis ? "font-editorial mt-3 text-xl font-medium leading-relaxed" : "font-editorial mt-3 text-2xl font-bold"}>{book.title[lang]}</h3>
        {book.originalTitle && lang !== book.originalTitle.language && <p className="mt-3 text-sm leading-6 text-[#607068]">{reading.originalTitle}: <span lang={book.originalTitle.language}>{book.originalTitle.text}</span></p>}
        {book.source && <p className="mt-3 text-sm text-[#607068]">{book.source.edition[lang]}.</p>}
      </div>
      <h2 className="font-editorial mt-8 text-3xl font-bold">{reading.chapters}</h2>
      <ol className="mt-5 space-y-5">{book.chapters.map(chapter => <li key={chapter.number} className="rounded-2xl border bg-card p-6">
        <h3 className="font-editorial text-2xl font-bold">{chapter.title[lang]}</h3>
        {chapter.description && <p className="mt-3 leading-7 text-[#607068]">{chapter.description[lang]}</p>}
        <Link className={isDataAnalysis ? "sv-primary-action mt-5 gap-2" : "sv-ui-link mt-4 inline-block font-bold"} href={`/${lang}/${chapter.path}`}><LinkLabel label={reading.read}/>{isDataAnalysis && <span aria-hidden="true">→</span>}</Link>
      </li>)}</ol>
    </section>)}</div> : <><h2 className="font-editorial mt-6 text-3xl font-bold">{c.books}</h2><p className="mt-5 rounded-2xl border bg-card p-6 leading-7">{libraryCopy[lang].subjectNote}</p></>}
    {!isDataAnalysis && <p className="mt-8 leading-7">{c.learningPath}</p>}
    <div className="mt-6 flex flex-wrap gap-4"><Link className="sv-ui-link font-bold" href={`/${lang}/library#learning-materials`}><LinkLabel label={libraryCopy[lang].resources}/></Link><Link className="sv-ui-link font-bold" href={`/${lang}/glossary`}><LinkLabel label={c.glossary}/></Link></div>
  </SectionShell>;
}
