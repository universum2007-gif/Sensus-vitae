import Link from "next/link";
import { ContentStatus } from "@/components/content-status";
import type { Language } from "@/lib/site-content";

export function NavigationCard({ title, description, href, action, lang, status, headingLevel = 2 }: {
  title: string; description: string; href?: string | null; action?: string;
  lang: Language; status?: "preparing" | "preview"; headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  const content = <>
    <Heading className="font-editorial text-2xl font-bold">{title}</Heading>
    <p className="mt-3 leading-7 text-[#53655c]">{description}</p>
    <div className="mt-auto pt-6">
      {status && <div className="mb-3"><ContentStatus lang={lang} state={status}/></div>}
      {href && action && <span className="sv-card-action">{action}</span>}
    </div>
  </>;
  return href
    ? <Link href={href} className="sv-catalogue-card sv-card-link" data-catalogue-card="navigation">{content}</Link>
    : <article className="sv-catalogue-card" data-catalogue-card="navigation">{content}</article>;
}
