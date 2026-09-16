import Link from "next/link";
import type { Language } from "@/lib/site-content";
import { catalogueActions } from "@/lib/catalogue-actions";
import { ContentStatus } from "@/components/content-status";

export function BookCard({ lang, author, authorHref, title, description, metadata, href, theme, status, headingLevel = 2 }: {
  lang: Language; author: string; authorHref?: string; title: string;
  description: string; metadata?: string; href?: string; theme?: string;
  status?: "available" | "preparing"; headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return <article className="sv-catalogue-card" data-catalogue-card="book">
    {theme && <p className="mb-4 text-xs font-bold tracking-wide text-[#7a5b25]">{theme}</p>}
    <p className="text-sm font-semibold">{authorHref ? <Link href={authorHref} className="sv-ui-link inline-flex min-h-11 items-center">{author}</Link> : author}</p>
    <Heading className="font-editorial mt-3 text-3xl font-bold">{title}</Heading>
    <p className="mt-4 leading-7 text-[#53655c]">{description}</p>
    {metadata && <p className="mt-5 text-sm text-[#53655c]">{metadata}</p>}
    {status && <div className="mt-4"><ContentStatus lang={lang} state={status}/></div>}
    {href && status !== "preparing" && <Link href={href} className="sv-primary-action mt-6 self-start">{catalogueActions[lang].chapters}</Link>}
  </article>;
}
