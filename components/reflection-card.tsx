import Link from "next/link";
import { discussionCopy, reflectionSlug } from "@/lib/discussion-content";
import { ui, type Language } from "@/lib/site-content";

export function ReflectionCard({ lang }: { lang: Language }) {
  return <Link href={`/${lang}/club/discussions/${reflectionSlug}`} className="group block rounded-[1.6rem] border border-transparent bg-[#173d30] p-7 text-[#f8f2e8] transition-colors hover:border-[#b48a39] hover:bg-[#214b3b] sm:p-9">
    <p className="text-xs font-bold uppercase tracking-[.17em] text-[#d5b873]">{ui[lang].question}</p>
    <p className="font-editorial mt-4 max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">{ui[lang].questionText}</p>
    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e4cd96]">{discussionCopy[lang].open}</span>
  </Link>;
}
