import Link from "next/link";
import { ArrowLeft, BookOpen, Brain, MessageCircleQuestion } from "lucide-react";
import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/site-content";
import { sapolskyContent } from "@/lib/sapolsky-content";

export default async function SapolskyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = sapolskyContent[lang];
  const back = { ru:"К библиотеке", es:"Volver a la biblioteca", en:"Back to library", nl:"Naar bibliotheek" }[lang];

  return <main className="mx-auto max-w-5xl px-5 py-12">
    <Link href={`/${lang}/library`} className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16}/>{back}</Link>
    <section className="paper-card relative mt-8 overflow-hidden rounded-[1.8rem] border bg-[#173d30] p-7 text-[#fffaf0] sm:p-12">
      <div className="absolute -right-10 -top-14 select-none text-[13rem] font-black leading-none text-white/[.045]" aria-hidden="true">Z</div>
      <p className="text-xs font-bold tracking-[.17em] text-[#d9bb78]">{c.eyebrow}</p>
      <div className="mt-5 flex items-start gap-4"><BookOpen className="mt-2 shrink-0 text-[#d9bb78]" size={30}/><div><h1 className="font-editorial text-4xl font-bold leading-tight sm:text-6xl">{c.title}</h1><p className="mt-4 text-lg text-[#e4ddcf]">{c.subtitle}</p></div></div>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-[#eee7d9]">{c.intro}</p>
    </section>

    <div className="mt-10 flex items-center gap-3"><Brain className="text-[#98722e]"/><h2 className="font-editorial text-3xl font-bold">{c.chaptersLabel}</h2></div>
    <div className="mt-7 space-y-5">
      {c.chapters.map((chapter) => <details key={chapter.number} className="paper-card group rounded-[1.4rem] border bg-card p-6 open:shadow-[0_18px_50px_rgba(35,61,47,.09)]" open={chapter.number===1}>
        <summary className="flex cursor-pointer list-none items-start gap-5 [&::-webkit-details-marker]:hidden">
          <span className="font-editorial flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#173d30] text-lg font-bold text-[#f2d797]">{chapter.number}</span>
          <div className="flex-1"><h3 className="font-editorial text-2xl font-bold leading-tight">{chapter.title}</h3><p className="mt-2 leading-7 text-[#526359]">{chapter.summary}</p></div>
          <span className="mt-2 text-2xl text-[#98722e] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <div className="ml-0 mt-6 border-t pt-6 sm:ml-16">
          <h4 className="text-sm font-bold uppercase tracking-[.12em] text-[#8f6c2f]">{c.keyIdeas}</h4>
          <ul className="mt-3 space-y-2 leading-7 text-[#526359]">{chapter.points.map((point)=><li key={point} className="flex gap-3"><span className="text-[#b48a39]">•</span><span>{point}</span></li>)}</ul>
          <div className="mt-6 rounded-xl bg-[#f4efe4] p-4"><p className="text-xs font-bold uppercase tracking-[.12em] text-[#8f6c2f]">{c.termsLabel}</p><p className="mt-2 leading-7 text-[#40564b]">{chapter.terms}</p></div>
          <div className="mt-4 flex gap-3 rounded-xl border border-[#d9c99f] p-4"><MessageCircleQuestion className="mt-1 shrink-0 text-[#98722e]" size={20}/><div><p className="text-xs font-bold uppercase tracking-[.12em] text-[#8f6c2f]">{c.questionLabel}</p><p className="mt-2 leading-7 text-[#40564b]">{chapter.question}</p></div></div>
          {chapter.fullText && <section className="mt-6 rounded-2xl border border-[#d9c99f] bg-[#fffdf8] p-5 sm:p-7">
            <h4 className="font-editorial text-2xl font-bold text-[#173d30]">{c.fullTextLabel}</h4>
            <div className="mt-5 space-y-5 text-[1.02rem] leading-8 text-[#40564b]">
              {chapter.fullText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>}
        </div>
      </details>)}
    </div>
    <p className="mt-9 text-sm leading-6 text-muted-foreground">{c.note}</p>
  </main>;
}
