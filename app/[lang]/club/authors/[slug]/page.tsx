import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/section-shell";
import { BookCard } from "@/components/book-card";
import { LinkLabel } from "@/components/link-label";
import { authors } from "@/lib/author-catalogue";
import { sapolskyProfile, profileBooks, profileBiographySources } from "@/lib/sapolsky-profile";
import { navigationCopy } from "@/lib/learning-navigation";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";
type Params = { params: Promise<{ lang: string; slug: string }> };
export async function generateMetadata({ params }: Params) {
  const { lang, slug } = await params;
  const author = authors.find((item) => item.slug === slug);
  if (!isLanguage(lang) || !author) notFound();
  return createPageMetadata({ lang, path: "club/authors/" + slug, title: author.copy[lang].name, description: author.copy[lang].description });
}
export default async function AuthorPage({ params }: Params) {
  const { lang, slug } = await params;
  const author = authors.find((item) => item.slug === slug);
  if (!isLanguage(lang) || !author) notFound();
  const c = navigationCopy[lang];
  const profile = author.slug === "robert-sapolsky" ? sapolskyProfile[lang] : undefined;
  const readingBook = author.books[0];
  const portrait = <img src={author.image} alt={author.copy[lang].imageAlt} width={1254} height={1254} className={profile ? "h-auto w-40 max-w-full rounded-2xl md:w-full" : "h-auto w-50 rounded-2xl"}/>;
  return <SectionShell lang={lang} title={author.copy[lang].name} intro={profile?.lead ?? author.copy[lang].description} parent={{ label: c.authors, path: "club/authors" }}>
    {profile ? <>
      <div className="grid items-start gap-8 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] lg:gap-12">
        <aside className="space-y-5">
          {portrait}
          <p className="max-w-sm text-sm leading-6 text-[#53655c]">{profile.affiliation}</p>
          <p className="max-w-sm border-t pt-5 text-sm leading-6 text-[#53655c]">{profile.education}</p>
        </aside>
        <div className="max-w-3xl space-y-5 leading-8 text-[#344f43]" data-author-biography>
          {profile.bio.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
      <aside className="mt-10 border-y py-6">
        <p className="text-xs font-bold tracking-wide text-[#7a5b25]">{profile.editorialLabel}</p>
        <p className="font-editorial mt-3 max-w-4xl text-2xl leading-relaxed">{profile.editorial}</p>
      </aside>
      <section className="mt-12" aria-labelledby="book-journey">
        <h2 id="book-journey" className="font-editorial text-3xl font-bold">{profile.journey}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#53655c]">{profile.journeyIntro}</p>
        <ol className="mt-7 grid gap-5 md:grid-cols-2">
          {profileBooks.map((book, index) => { const project = author.books.find(item => item.path === book.path); return <li key={book.title} className={index === 0 ? "md:col-span-2" : ""}>
            <BookCard lang={lang} author={author.copy[lang].name} headingLevel={3} theme={profile.themes[index]}
              title={project ? project.title(lang) : lang === "ru" ? book.titleRu ?? book.title : book.title} description={profile.descriptions[index]}
              metadata={project?.metadata(lang)} status={book.available ? "available" : "preparing"}
              href={project ? "/" + lang + "/" + project.path : undefined}/>
          </li>; })}
        </ol>
      </section>
      <section className="mt-12 border-t pt-8" aria-labelledby="on-sensus-vitae">
        <h2 id="on-sensus-vitae" className="font-editorial text-3xl font-bold">{profile.onSite}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#53655c]">{profile.availableText}</p>
        <Link href={"/" + lang + "/" + readingBook.path} className="sv-primary-action mt-6">{profile.readAll}</Link>
        <h3 className="font-editorial mt-8 text-2xl font-bold">{profile.reflection}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-[#53655c]">{profile.reflectionText}</p>
        <Link className="sv-ui-link mt-3 font-semibold" href={"/" + lang + "/club/discussions"}>{profile.reflectionAction}</Link>
      </section>
      <details className="mt-10 border-t pt-5 text-sm text-[#53655c]">
        <summary className="min-h-11 cursor-pointer py-3 font-semibold">{profile.sources}</summary>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div><h3 className="font-semibold">{profile.bioSources}</h3><ul className="mt-2 space-y-1">
            {profileBiographySources.map((href, index) => <li key={href}><a className="sv-ui-link" href={href}><LinkLabel label={profile.sourceLabels[index]} external/></a></li>)}
          </ul></div>
          <div><h3 className="font-semibold">{profile.bookSources}</h3><ul className="mt-2 space-y-1">
            {profileBooks.map(book => <li key={book.source}><a className="sv-ui-link" href={book.source}><LinkLabel label={lang === "ru" ? book.titleRu ?? book.title : book.title} external/></a></li>)}
          </ul></div>
        </div>
      </details>
    </> : <div className="grid gap-8 md:grid-cols-[200px_1fr]">
      {portrait}
      <section><h2 className="font-editorial text-3xl font-bold">{c.books}</h2>
        <ul className="mt-5 space-y-5">{author.books.map(book => <li key={book.path}><Link className="font-editorial inline-block py-2 text-2xl font-bold sv-ui-link" href={"/" + lang + "/" + book.path}>{book.title(lang)}</Link></li>)}</ul>
        <Link className="sv-ui-link mt-6 font-semibold" href={"/" + lang + "/club/discussions"}>{c.discussions}</Link>
      </section>
    </div>}
  </SectionShell>;
}
