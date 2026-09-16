import { NavigationCard } from "@/components/navigation-card";
import { destinationAction } from "@/lib/catalogue-actions";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Language } from "@/lib/site-content";

export function SectionShell({ title, intro, children, parent, lang }: {
  title: string; intro: string; children: ReactNode; lang: Language;
  parent?: { label: string; path: string };
}) {
  return <main className="mx-auto min-h-[65vh] max-w-6xl px-5 py-12 sm:py-14">
    {parent && <Link href={`/${lang}/${parent.path}`} className="mb-6 inline-flex min-h-11 items-center text-sm font-bold sv-ui-link">{parent.label}</Link>}
    <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">SENSUS VITAE</p>
    <h1 className="font-editorial mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
    <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53655c]">{intro}</p>
    <div className="mt-10">{children}</div>
  </main>;
}

export function DestinationCards({ cards, label, lang }: {
  label: string; lang: Language; cards: { title: string; description: string; href: string; preparing?: boolean }[];
}) {
  return <nav aria-label={label} className={`grid gap-4 sm:grid-cols-2 ${cards.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
    {cards.map(card => <NavigationCard key={card.href} {...card} lang={lang} status={card.preparing ? "preparing" : card.href.endsWith("/library/news") ? "preview" : undefined} action={destinationAction(card.href, lang, card.preparing)}/>)}
  </nav>;
}
