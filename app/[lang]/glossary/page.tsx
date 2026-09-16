import { notFound } from "next/navigation";
import { GlossaryBrowser } from "@/components/glossary-browser";
import { SectionShell } from "@/components/section-shell";
import { navigationCopy } from "@/lib/learning-navigation";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return createPageMetadata({ lang, path: "glossary", title: c.glossary, description: c.glossaryIntro });
}
export default async function GlossaryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return <SectionShell lang={lang} title={c.glossary} intro={c.glossaryIntro} parent={{ label: c.library, path: "library" }}>
    <GlossaryBrowser lang={lang}/>
  </SectionShell>;
}
