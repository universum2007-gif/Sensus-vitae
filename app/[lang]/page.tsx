import Link from "next/link";
import { notFound } from "next/navigation";
import { and, desc, eq } from "drizzle-orm";
import { ArrowRight, BookMarked, Brain, ChartNoAxesColumnIncreasing, Check, FlaskConical, Lightbulb, Sparkles, Users } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { getDb } from "@/db";
import { posts } from "@/db/schema";
import { categories, isLanguage, staticArticles, ui } from "@/lib/site-content";

const icons = [Brain, ChartNoAxesColumnIncreasing, FlaskConical, Lightbulb, Users, BookMarked];
export const dynamic = "force-dynamic";

export default async function LanguageHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = ui[lang];
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
          <Link href={`/${lang}/library`} className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#174f3c] px-5 py-3 text-sm font-bold text-[#fffdf8] shadow-[0_10px_28px_rgba(23,79,60,.18)] transition hover:-translate-y-0.5 hover:bg-[#123f30] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b48a39]">{t.explore}<ArrowRight size={17}/></Link>
        </div>
        <div className="hidden items-center justify-end lg:flex"><img src="/sensus-vitae-logo-full.png" alt="Sensus Vitae — Psychology, Neuroscience, Philosophy" width="240" height="240" className="h-auto w-52 rounded-full shadow-[0_18px_55px_rgba(35,61,47,.1)]"/></div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <div className="flex items-center justify-between gap-5"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-[#e9ddc3] text-[#8f6c2f]"><Sparkles size={17}/></span><h2 className="font-editorial text-3xl font-bold sm:text-4xl">{t.latest}</h2></div><Link href={`/${lang}/library`} className="shrink-0 text-sm font-bold underline underline-offset-4">{t.all}</Link></div>
      {articles.length ? <div className="mt-7 grid gap-5 lg:grid-cols-[1.18fr_.82fr]"><ArticleCard article={articles[0]} lang={lang} featured/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">{articles.slice(1).map((a) => <ArticleCard key={`${a.language ?? a.lang}-${a.slug}`} article={a} lang={lang}/>)}</div></div> : null}
    </section>

    <section className="border-y bg-[#ece5d7]/55"><div className="mx-auto max-w-6xl px-5 py-14"><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
      <div><h2 className="font-editorial text-3xl font-bold">{t.paths}</h2><p className="mt-4 max-w-sm leading-7 text-[#607068]">{t.pathIntro}</p></div>
      <div className="grid gap-px overflow-hidden rounded-[1.4rem] border bg-border sm:grid-cols-2">{categories[lang].map(([title, description], i) => { const Icon = icons[i]; return <div key={title} className="bg-[#f9f5ec] p-6"><Icon size={21} className="mb-4 text-[#a17a34]"/><h3 className="font-editorial text-xl font-bold">{title}</h3><p className="mt-2 leading-6 text-[#607068]">{description}</p></div>; })}</div>
    </div></div></section>

    <section className="mx-auto max-w-6xl px-5 py-14"><aside className="paper-card grid gap-6 rounded-[1.6rem] border bg-[#173d30] p-7 text-[#f8f2e8] sm:p-9 lg:grid-cols-[.42fr_1fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.17em] text-[#d5b873]">{t.question}</p><p className="mt-3 text-sm italic text-[#d9d2c2]">Sensus Vitae</p></div><p className="font-editorial text-2xl font-bold leading-snug sm:text-3xl">{t.questionText}</p></aside></section>
  </main>;
}
