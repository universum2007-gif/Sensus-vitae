import { NavigationCard } from "@/components/navigation-card";
import { catalogueActions } from "@/lib/catalogue-actions";
import { academicSubjects } from "@/lib/academic-content";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/section-shell";
import { academicYears, navigationCopy } from "@/lib/learning-navigation";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";
import { categories, isLanguage } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "study", ...pageMetadataCopy.study[lang] });
}
export default async function StudyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return <SectionShell lang={lang} title={c.study} intro={c.studyIntro}>
    {academicYears.map((year) => <section key={year.id} id={year.id}>
      <p className="text-sm font-bold tracking-wide text-[#98722e]">{year.year === 1 ? c.year : year.year} · Grado en Psicología — UNED</p>
      <h2 className="font-editorial mt-3 text-3xl font-bold">{c.subjects}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#607068]">{c.subjectNote}</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{year.subjectIndexes.map((index) => {
        const [title, description] = categories[lang][index];
        const subject = academicSubjects.find((item) => item.categoryIndex === index)!;
        return <NavigationCard key={title} lang={lang} title={title} description={description} href={"/" + lang + "/study/subjects/" + subject.slug} headingLevel={3} status={subject.books.length ? undefined : "preparing"} action={subject.books.length ? catalogueActions[lang].study : catalogueActions[lang].planned}/>;
      })}</div>
    </section>)}
    <aside className="mt-10 rounded-[1.4rem] border bg-[#ece5d7]/55 p-6">
      <h2 className="font-editorial text-2xl font-bold">{c.materials}</h2>
      <p className="mt-3 leading-7">{c.learningPath}</p>
      <p className="mt-3 text-sm leading-6 text-[#607068]">{c.yearNote}</p>
      <div className="mt-5 flex flex-wrap gap-5"><Link className="py-2 font-bold rounded-sm text-[#174f3c] no-underline transition-colors hover:text-[#98722e]" href={`/${lang}/glossary`}>{c.glossary}</Link><Link className="py-2 font-bold rounded-sm text-[#174f3c] no-underline transition-colors hover:text-[#98722e]" href={`/${lang}/library`}>{c.library}</Link></div>
    </aside>
  </SectionShell>;
}
