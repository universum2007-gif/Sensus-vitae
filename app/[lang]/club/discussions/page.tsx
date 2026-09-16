import { ReflectionCard } from "@/components/reflection-card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionShell } from "@/components/section-shell";
import { clubContent } from "@/lib/club-content";
import { navigationCopy } from "@/lib/learning-navigation";
import { sapolskyContent } from "@/lib/sapolsky-content";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return createPageMetadata({ lang, path: "club/discussions", title: c.discussions, description: c.discussionIntro });
}
export default async function DiscussionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = navigationCopy[lang];
  return <SectionShell lang={lang} title={c.discussions} intro={c.discussionIntro} parent={{ label: c.club, path: "club" }}>
    <div className="mb-10"><ReflectionCard lang={lang}/></div>
    <div className="grid gap-5 sm:grid-cols-2">{[1, 4, 5, 6].map((index) => {
      const [title, text] = clubContent[lang].items[index];
      return <article key={title} className="paper-card rounded-[1.4rem] border bg-card p-6"><h2 className="font-editorial text-2xl font-bold">{title}</h2><p className="mt-3 leading-7 text-[#53655c]">{text}</p></article>;
    })}</div>
    <section className="mt-12"><h2 className="font-editorial text-3xl font-bold">{c.questions}</h2>
      <Link className="mt-3 inline-block py-2 font-bold sv-ui-link" href={`/${lang}/sapolsky`}>{sapolskyContent[lang].title} · {c.bookCount}</Link>
      <div className="mt-5 space-y-3">{sapolskyContent[lang].chapters.map((chapter) => <details key={chapter.number} className="rounded-xl border bg-card p-5"><summary className="cursor-pointer font-editorial text-xl font-bold">{chapter.number}. {chapter.title}</summary><p className="mt-4 leading-7 text-[#53655c]">{chapter.question}</p></details>)}</div>
    </section>
  </SectionShell>;
}
