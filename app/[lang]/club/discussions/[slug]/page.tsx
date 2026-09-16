import { notFound } from "next/navigation";
import { SectionShell } from "@/components/section-shell";
import { discussionCopy, discussionThreads } from "@/lib/discussion-content";
import { navigationCopy } from "@/lib/learning-navigation";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";
type Params = { params: Promise<{ lang: string; slug: string }> };
export async function generateMetadata({ params }: Params) {
  const { lang, slug } = await params;
  const thread = discussionThreads.find(item => item.slug === slug);
  if (!isLanguage(lang) || !thread) notFound();
  return createPageMetadata({ lang, path: `club/discussions/${slug}`, title: thread.question(lang), description: discussionCopy[lang].context });
}
export default async function DiscussionPage({ params }: Params) {
  const { lang, slug } = await params;
  const thread = discussionThreads.find(item => item.slug === slug);
  if (!isLanguage(lang) || !thread) notFound();
  return <SectionShell lang={lang} title={thread.question(lang)} intro={discussionCopy[lang].context} parent={{label:navigationCopy[lang].discussions,path:"club/discussions"}}>
    <p className="max-w-3xl rounded-2xl border bg-card p-6 leading-8 text-[#53655c]">{discussionCopy[lang].status}</p>
  </SectionShell>;
}
