import { notFound } from "next/navigation";
import { and, desc, eq } from "drizzle-orm";
import { ArticleCard } from "@/components/article-card";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { isLanguage, staticArticles, ui } from "@/lib/site-content";
import { getDb } from "@/db";
import { posts } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function LibraryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  let articles: Array<{ slug: string; category: string; title: string; summary: string; readTime?: string; lang?: string; language?: string }> = staticArticles.filter((a) => a.lang === lang);
  try {
    const published = await getDb().select().from(posts).where(and(eq(posts.status, "published"), eq(posts.language, lang))).orderBy(desc(posts.createdAt));
    articles = [...published.map((p) => ({ ...p, readTime: "" })), ...articles];
  } catch {}
  if (!articles.length) articles = staticArticles.filter((a) => a.lang === "ru");
  const heading = {
    ru: ["Библиотека знаний", "Конспекты, объяснения и связи между идеями — собранные по мере моего обучения."],
    es: ["Biblioteca de conocimiento", "Apuntes, explicaciones y conexiones entre ideas, reunidos a medida que avanzo en mis estudios."],
    en: ["Knowledge library", "Notes, explanations and connections between ideas — collected as I learn."],
    nl: ["Kennisbibliotheek", "Notities, uitleg en verbanden tussen ideeën — verzameld tijdens mijn studie."],
  }[lang];
  const book = {
    ru:["Книжный клуб · Роберт Сапольски","Почему у зебр не бывает инфаркта","Полные конспекты глав 1–18: от физиологии стресса, сна и памяти до личности, социальных связей и управления стрессом.","Открыть главы"],
    es:["Club de lectura · Robert Sapolsky","¿Por qué las cebras no tienen úlcera?","Resúmenes completos de los capítulos 1–18: desde la fisiología del estrés, el sueño y la memoria hasta la personalidad, los vínculos sociales y el afrontamiento.","Abrir capítulos"],
    en:["Book club · Robert Sapolsky","Why Zebras Don’t Get Ulcers","Full summaries of chapters 1–18: from stress physiology, sleep and memory to personality, social connections and managing stress.","Open chapters"],
    nl:["Boekenclub · Robert Sapolsky","Waarom krijgen zebra’s geen maagzweren?","Volledige samenvattingen van hoofdstukken 1–18: van stressfysiologie, slaap en geheugen tot persoonlijkheid, sociale banden en omgaan met stress.","Open hoofdstukken"]
  }[lang];
  return <main className="mx-auto min-h-[65vh] max-w-6xl px-5 py-14"><p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{ui[lang].eyebrow}</p><h1 className="font-editorial mt-4 text-5xl font-bold">{heading[0]}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[#53655c]">{heading[1]}</p><Link href={`/${lang}/sapolsky`} className="paper-card group mt-10 grid gap-6 overflow-hidden rounded-[1.6rem] border bg-[#173d30] p-7 text-[#fffaf0] transition-transform hover:-translate-y-1 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-9"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f2d797] text-[#173d30]"><BookOpen size={27}/></span><span><span className="text-xs font-bold uppercase tracking-[.14em] text-[#d9bb78]">{book[0]}</span><span className="font-editorial mt-2 block text-3xl font-bold">{book[1]}</span><span className="mt-3 block max-w-3xl leading-7 text-[#e4ddcf]">{book[2]}</span></span><span className="inline-flex items-center gap-2 text-sm font-bold text-[#f4d896]">{book[3]}<ArrowUpRight size={17}/></span></Link><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map((a) => <ArticleCard key={`${a.language ?? a.lang}-${a.slug}`} article={a} lang={lang} />)}</div></main>;
}
