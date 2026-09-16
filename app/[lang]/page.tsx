import { ReflectionCard } from "@/components/reflection-card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { and, desc, eq } from "drizzle-orm";
import { Check, Sparkles } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { getDb } from "@/db";
import { posts } from "@/db/schema";
import { isLanguage, staticArticles, ui } from "@/lib/site-content";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";

import { DestinationCards } from "@/components/section-shell";
import { homeDestinations, navigationCopy } from "@/lib/learning-navigation";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, ...pageMetadataCopy.home[lang] });
}

export default async function LanguageHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = ui[lang];
  const c = navigationCopy[lang];
  let articles: Array<{ slug: string; category: string; title: string; summary: string; readTime?: string; lang?: string; language?: string }> = staticArticles.filter((a) => a.lang === lang).slice(0, 3);
  try {
    const published = await getDb().select().from(posts).where(and(eq(posts.status, "published"), eq(posts.language, lang))).orderBy(desc(posts.createdAt)).limit(3);
    articles = [...published.map((p) => ({ ...p, readTime: "" })), ...articles].slice(0, 3);
  } catch {}

  return <main>
    <section className="home-intro border-b">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1fr_.48fr] lg:items-center lg:py-14">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[.18em] text-[#98722e]">{t.eyebrow}</p>
          <h1 className="font-editorial max-w-4xl text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-6xl">{t.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4b6256]">{t.intro}</p>
          <ul className="mt-6 grid gap-2.5 text-sm font-medium text-[#3f594d] sm:grid-cols-3">{t.valuePoints.map((point) => <li key={point} className="flex items-start gap-2"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#e4d6b7] text-[#174f3c]"><Check size={13} strokeWidth={3}/></span><span>{point}</span></li>)}</ul>
          <Link href={`/${lang}/library`} className="sv-ui-link mt-7 inline-flex min-h-11 items-center font-bold">{t.explore}</Link>
        </div>
        <div className="hidden items-center justify-end lg:flex"><img src="/sensus-vitae-logo-full.png" alt="Sensus Vitae — Psychology, Neuroscience, Philosophy" width="240" height="240" className="h-auto w-52 rounded-full shadow-[0_18px_55px_rgba(35,61,47,.1)]"/></div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <h2 className="font-editorial text-3xl font-bold sm:text-4xl">{c.map}</h2>
      <p className="mb-7 mt-4 max-w-3xl leading-7 text-[#607068]">{c.mapIntro}</p>
      <DestinationCards lang={lang} label={c.map} cards={homeDestinations.map((item, i) => ({ title: c[item.key], description: c.homeDescriptions[i], href: `/${lang}/${item.path}` }))}/>
    </section>
    <section className="mx-auto max-w-6xl border-t px-5 py-12 sm:py-16">
      <div className="flex flex-wrap items-center justify-between gap-5"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-[#e9ddc3] text-[#8f6c2f]"><Sparkles size={17}/></span><h2 className="font-editorial text-3xl font-bold sm:text-4xl">{c.latest}</h2></div><Link href={`/${lang}/library`} className="shrink-0 text-sm font-bold sv-ui-link">{t.all}</Link></div>
      {articles.length ? <div className="mt-7 grid gap-5 lg:grid-cols-[1.18fr_.82fr]"><ArticleCard article={articles[0]} lang={lang} featured/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">{articles.slice(1).map((a) => <ArticleCard key={`${a.language ?? a.lang}-${a.slug}`} article={a} lang={lang}/>)}</div></div> : null}
    </section>


    <section className="mx-auto max-w-6xl px-5 py-14"><ReflectionCard lang={lang}/></section>
  </main>;
}
