import { BookCard } from "@/components/book-card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/section-shell";
import { authors } from "@/lib/author-catalogue";
import { navigationCopy } from "@/lib/learning-navigation";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return createPageMetadata({ lang, path: "library/books", title: c.books, description: c.catalogueIntro });
}
export default async function BooksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return <SectionShell lang={lang} title={c.books} intro={c.catalogueIntro} parent={{ label: c.library, path: "library" }}>
    <div className="grid gap-5 md:grid-cols-2">{authors.flatMap((author) => author.books.map((book) => <BookCard key={book.path} lang={lang} author={author.copy[lang].name} authorHref={"/" + lang + "/club/authors/" + author.slug} title={book.title(lang)} description={book.description(lang)} metadata={book.metadata(lang)} href={"/" + lang + "/" + book.path}/>))}</div>
    <Link className="mt-8 inline-block py-2 font-bold sv-ui-link" href={`/${lang}/library`}>{c.library}</Link>
  </SectionShell>;
}
