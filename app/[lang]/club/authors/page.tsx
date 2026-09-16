import { notFound } from "next/navigation";
import { DestinationCards, SectionShell } from "@/components/section-shell";
import { authors } from "@/lib/author-catalogue";
import { navigationCopy } from "@/lib/learning-navigation";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return createPageMetadata({ lang, path: "club/authors", title: c.authors, description: c.authorsIntro });
}
export default async function AuthorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return <SectionShell lang={lang} title={c.authors} intro={c.authorsIntro} parent={{ label: c.club, path: "club" }}>
    <DestinationCards lang={lang} label={c.authors} cards={authors.map((author) => ({ title: author.copy[lang].name, description: author.copy[lang].description, href: `/${lang}/club/authors/${author.slug}` }))}/>
  </SectionShell>;
}
