import { ReflectionCard } from "@/components/reflection-card";
import { notFound } from "next/navigation";
import { DestinationCards, SectionShell } from "@/components/section-shell";
import { clubContent } from "@/lib/club-content";
import { clubDestinations, navigationCopy } from "@/lib/learning-navigation";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "club", ...pageMetadataCopy.club[lang] });
}
export default async function ClubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return <SectionShell lang={lang} title={clubContent[lang].title} intro={clubContent[lang].intro}>
    <DestinationCards lang={lang} label={c.club} cards={clubDestinations.map((item, i) => ({ preparing: item.key === "self", title: c[item.key], description: c.clubDescriptions[i], href: `/${lang}/${item.path}` }))}/>
    <div className="mt-10"><ReflectionCard lang={lang}/></div>
    <blockquote className="font-editorial mt-10 border-l-2 border-[#b48a39] pl-5 text-2xl italic">
      {{ ru: "«Те же вопросы. Глубже ответы.»", es: "«Las mismas preguntas. Respuestas más profundas.»", en: "“Same questions. Deeper answers.”", nl: "“Dezelfde vragen. Diepere antwoorden.”" }[lang]}
    </blockquote>
  </SectionShell>;
}
