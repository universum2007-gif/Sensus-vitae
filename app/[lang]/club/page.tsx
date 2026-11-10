import Link from "next/link";
import { geneticsLesson } from "@/lib/psychiatric-genetics";
import { ReflectionCard } from "@/components/reflection-card";
import { notFound } from "next/navigation";
import { DestinationCards, SectionShell } from "@/components/section-shell";
import { clubContent } from "@/lib/club-content";
import { clubDestinations, navigationCopy } from "@/lib/learning-navigation";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";
import { spinozaQuote, spinozaSource } from "@/lib/philosophy-quotes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "club", ...pageMetadataCopy.club[lang] });
}
export default async function ClubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  const quote = spinozaQuote[lang];
  return <SectionShell lang={lang} title={clubContent[lang].title} intro={clubContent[lang].intro}>
    <figure className="mb-10 max-w-3xl" data-quote="spinoza">
      <blockquote cite={spinozaSource.href} className="font-editorial text-2xl leading-relaxed text-[#173d30] sm:text-3xl"><p>{quote.text}</p></blockquote>
      <figcaption className="mt-4 text-[#98722e]">
        <span className="text-base font-medium">— {quote.author}</span>
        <span className="mt-1 block text-xs leading-6 text-[#607068]"><a className="sv-ui-link" href={spinozaSource.href}><cite className="not-italic">{spinozaSource.title[lang]}</cite>, {spinozaSource.section}</a></span>
      </figcaption>
    </figure>
    <DestinationCards lang={lang} label={c.club} cards={clubDestinations.map((item, i) => ({ preparing: item.key === "self", title: c[item.key], description: c.clubDescriptions[i], href: `/${lang}/${item.path}` }))}/>
    <aside className="mt-8 rounded-2xl border bg-card p-6"><h2 className="font-editorial text-2xl font-bold"><Link className="sv-ui-link inline-flex min-h-11 items-center" href={`/${lang}/library/scientific-news#psychobiology-genetics`}>{geneticsLesson[lang].science} · {geneticsLesson[lang].category}</Link></h2><p className="mt-3 leading-7">{geneticsLesson[lang].title}</p></aside>
    <div className="mt-10"><ReflectionCard lang={lang}/></div>
    <blockquote className="font-editorial mt-10 border-l-2 border-[#b48a39] pl-5 text-2xl italic">
      {{ ru: "«Те же вопросы. Глубже ответы.»", es: "«Las mismas preguntas. Respuestas más profundas.»", en: "“Same questions. Deeper answers.”", nl: "“Dezelfde vragen. Diepere antwoorden.”" }[lang]}
    </blockquote>
  </SectionShell>;
}
