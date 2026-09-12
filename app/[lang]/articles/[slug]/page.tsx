import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { isLanguage, staticArticles } from "@/lib/site-content";
import { getDb } from "@/db";
import { posts } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function ArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  let article: { category: string; title: string; summary: string; readTime?: string; body: { heading?: string; paragraphs?: string[]; bullets?: string[] }[]; source?: { label: string; href: string } } | undefined = staticArticles.find((a) => a.lang === lang && a.slug === slug);
  if (!article) {
    try {
      const [row] = await getDb().select().from(posts).where(and(eq(posts.slug, slug), eq(posts.language, lang), eq(posts.status, "published"))).limit(1);
      if (row) article = { ...row, readTime: "", body: row.body.split(/\n{2,}/).map((paragraph) => ({ paragraphs: [paragraph] })) };
    } catch {}
  }
  if (!article) notFound();
  const isPsychobiology = ["Психобиология","Генетика и поведение","Psicobiología","Psychobiology","Psychobiologie","Genética y conducta","Genetics and behaviour","Genetica en gedrag"].includes(article.category);
  const back=isPsychobiology ? {ru:"К разделу «Психобиология»",es:"Volver a Psicobiología",en:"Back to Psychobiology",nl:"Naar Psychobiologie"}[lang] : {ru:"К библиотеке",es:"Volver a la biblioteca",en:"Back to library",nl:"Naar bibliotheek"}[lang];
  const backHref=isPsychobiology ? `/${lang}/psychobiology` : `/${lang}/library`;
  const note={ru:"Учебная заметка. Материал не заменяет профессиональную медицинскую консультацию.",es:"Apunte de estudio. Este material no sustituye el asesoramiento médico profesional.",en:"Study note. This material does not replace professional medical advice.",nl:"Studienotitie. Dit materiaal vervangt geen professioneel medisch advies."}[lang];
  return <main className="mx-auto max-w-3xl px-5 py-12"><Link href={backHref} className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16} />{back}</Link><article className="paper-card mt-8 rounded-[1.7rem] border bg-card px-6 py-9 sm:px-10 sm:py-12"><p className="text-xs font-bold uppercase tracking-[.15em] text-[#98722e]">{article.category}{article.readTime && ` · ${article.readTime}`}</p><h1 className="font-editorial mt-5 text-4xl font-bold leading-tight sm:text-5xl">{article.title}</h1><p className="mt-6 border-l-2 border-[#c3a35f] pl-5 text-lg leading-8 text-[#53655c]">{article.summary}</p><div className="article-copy mt-9">{article.body.map((block, i) => <section key={i}>{block.heading && <h2>{block.heading}</h2>}{block.paragraphs?.map((p) => <p key={p}>{p}</p>)}{block.bullets && <ul>{block.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}</section>)}</div>{article.source && <aside className="mt-10 rounded-2xl border bg-[#f5efe2] p-5"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#8f6c2f]">{{ru:"Источник",es:"Fuente",en:"Source",nl:"Bron"}[lang]}</p><a href={article.source.href} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-start gap-2 font-bold leading-6 underline decoration-[#b99850] underline-offset-4">{article.source.label}<ExternalLink size={16} className="mt-1 shrink-0"/></a></aside>}<div className="gold-rule mt-10" /><p className="mt-6 text-sm text-muted-foreground">{note}</p></article></main>;
}
