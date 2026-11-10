import Link from "next/link";
import { notFound } from "next/navigation";
import { GeneticsLessonCard } from "@/components/genetics-lesson-card";
import { LinkLabel } from "@/components/link-label";
import { createPageMetadata } from "@/lib/metadata";
import { libraryCopy } from "@/lib/library-architecture";
import { isLanguage } from "@/lib/site-content";

const copy = {
  ru: { title: "Учебные новости", back: "Назад в библиотеку", intro: "Учебные разборы научных исследований с объяснением методов, терминов и ограничений. Начните с опубликованного урока по психобиологии и генетике." },
  es: { title: "Noticias para aprender", back: "Volver a la biblioteca", intro: "Análisis didácticos de investigaciones científicas que explican métodos, términos y limitaciones. Empieza con la lección publicada sobre psicobiología y genética." },
  en: { title: "Learning News", back: "Back to library", intro: "Research-based lessons explaining methods, terminology and limitations. Start with the published lesson on psychobiology and genetics." },
  nl: { title: "Leernieuws", back: "Terug naar de bibliotheek", intro: "Lessen over wetenschappelijk onderzoek met uitleg over methoden, begrippen en beperkingen. Begin met de gepubliceerde les over psychobiologie en genetica." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "library/news", title: copy[lang].title, description: copy[lang].intro });
}

export default async function LibraryNewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = copy[lang];
  return <main className="mx-auto min-h-[65vh] max-w-6xl px-5 py-14">
    <Link href={`/${lang}/library`} className="text-sm font-bold text-[#173d30] sv-ui-link">{c.back}</Link>
    <p className="mt-8 text-xs font-bold tracking-[.18em] text-[#98722e]">SENSUS VITAE</p>
    <h1 className="font-editorial mt-4 text-4xl font-bold sm:text-5xl">{c.title}</h1>
    <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53655c]">{c.intro}</p>
    <div className="mt-10"><GeneticsLessonCard lang={lang}/></div>
    <Link className="sv-ui-link font-bold" href={`/${lang}/library/scientific-news`}><LinkLabel label={libraryCopy[lang].science}/></Link>
  </main>;
}
