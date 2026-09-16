import { LinkLabel } from "@/components/link-label";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { SectionShell } from "@/components/section-shell";
import { NewsCaseLinks } from "@/components/news-case-links";
import { libraryCopy, scientificNews } from "@/lib/library-architecture";
import { isLanguage, staticArticles, ui } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/metadata";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "library/scientific-news", title: libraryCopy[lang].science, description: libraryCopy[lang].scienceIntro });
}
export default async function ScientificNewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = libraryCopy[lang];
  return <SectionShell lang={lang} title={c.science} intro={c.scienceIntro} parent={{label:ui[lang].nav.library,path:"library"}}>
    <div className="grid gap-6">{scientificNews.map(item => {
      const article = staticArticles.find(a => a.lang === lang && a.slug === item.articleSlug);
      if (!article) return null;
      const brief = item.brief?.[lang];
      return <section key={item.id}><ArticleCard article={article} lang={lang}/>
        {brief && <dl className="mt-5 space-y-5 rounded-2xl border bg-card p-6">{[brief.studied, brief.question, brief.sample, brief.method, brief.findings, brief.limitations].map((text, i) => <div key={c.briefLabels[i]}><dt className="font-bold">{c.briefLabels[i]}</dt><dd className="mt-2 leading-7">{text}</dd></div>)}<div><dt className="font-bold">{c.briefLabels[6]}</dt><dd className="mt-2"><a className="sv-ui-link" href={brief.source.href}><LinkLabel label={brief.source.label} external/></a></dd></div></dl>}
        <NewsCaseLinks showIndex={false} lang={lang} articleSlug={item.articleSlug}/>
      </section>;
    })}</div>
    <aside className="mt-10 rounded-2xl border p-6"><h2 className="font-editorial text-2xl font-bold">{c.learning}</h2><p className="mt-3 leading-7 text-[#53655c]">{c.learningIntro}</p><Link className="sv-ui-link mt-4 inline-block font-bold" href={`/${lang}/library/news`}><LinkLabel label={c.learning}/></Link></aside>
  </SectionShell>;
}
