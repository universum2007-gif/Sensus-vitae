import { LinkLabel } from "@/components/link-label";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/section-shell";
import { academicSubjects } from "@/lib/academic-content";
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
  return <SectionShell lang={lang} title={categories[lang][subject.categoryIndex][0]} intro={categories[lang][subject.categoryIndex][1]} parent={{label:c.study,path:"study"}}>
    <p className="text-sm leading-6 text-[#607068]">{c.subjectNote}</p>
    <h2 className="font-editorial mt-6 text-3xl font-bold">{c.books}</h2>
    {(subject.books.length || slug === "data-analysis") ? <div className="mt-6 grid gap-5">{slug === "data-analysis" && <article className="rounded-2xl border bg-card p-6"><h3 className="font-editorial text-2xl font-bold">{categories[lang][1][0]}</h3><p className="mt-3 text-sm leading-6 text-[#607068]">{({ru:"Конспект первой главы учебника UNED: понятия, измерение, частоты и распределения.",es:"Guía del capítulo 1 del manual de la UNED: conceptos, medición, frecuencias y distribuciones.",en:"Independent study guide based on Chapter 1 of the UNED textbook.",nl:"Studiegids bij hoofdstuk 1 van het UNED-studieboek: begrippen, meting, frequenties en verdelingen."})[lang]}</p><Link className="sv-ui-link mt-4 inline-block" href={`/${lang}/study/subjects/data-analysis/chapter-1`}><LinkLabel label={({ru:"Читать главу 1",es:"Leer el capítulo 1",en:"Read Chapter 1",nl:"Lees hoofdstuk 1"})[lang]}/></Link></article>}{subject.books.map(book => <article key={book.id} className="rounded-2xl border bg-card p-6"><h3 className="font-editorial text-2xl font-bold">{book.title[lang]}</h3><ul className="mt-4 space-y-3">{book.chapters.map(chapter => <li key={chapter.number}><Link className="sv-ui-link inline-block" href={`/${lang}/${chapter.path}`}><LinkLabel label={chapter.number + ". " + chapter.title[lang]}/></Link></li>)}</ul></article>)}</div> : <p className="mt-5 rounded-2xl border bg-card p-6 leading-7">{libraryCopy[lang].subjectNote}</p>}
    <p className="mt-8 leading-7">{c.learningPath}</p>
    <div className="mt-6 flex flex-wrap gap-4"><Link className="sv-ui-link font-bold" href={`/${lang}/library#learning-materials`}><LinkLabel label={libraryCopy[lang].resources}/></Link><Link className="sv-ui-link font-bold" href={`/${lang}/glossary`}><LinkLabel label={c.glossary}/></Link></div>
  </SectionShell>;
}
