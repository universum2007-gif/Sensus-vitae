import { LinkLabel } from "@/components/link-label";
import Link from "next/link";
import { educationalNewsDemoList } from "@/lib/educational-news";
import { learningCasesForNews, libraryCopy, scientificNews } from "@/lib/library-architecture";
import type { Language } from "@/lib/site-content";

export function NewsCaseLinks({ lang, articleSlug, sourceNewsId, showIndex = true }: { lang: Language; articleSlug?: string; sourceNewsId?: string; showIndex?: boolean }) {
  const c = libraryCopy[lang];
  const news = scientificNews.find(item => articleSlug ? item.articleSlug === articleSlug : item.id === sourceNewsId);
  if (!news) return null;
  if (sourceNewsId) return <Link className="sv-ui-link inline-block mt-5 font-bold" href={`/${lang}/articles/${news.articleSlug}`}><LinkLabel label={c.scienceLink}/></Link>;
  const cases = learningCasesForNews(news.id, educationalNewsDemoList);
  if (!showIndex && !cases.length) return null;
  return <nav aria-label={c.science} className="mt-6 flex flex-wrap gap-3">
    {showIndex && <Link className="sv-ui-link font-bold" href={`/${lang}/library/scientific-news`}><LinkLabel label={c.science}/></Link>}
    {cases.map(item => <Link key={item.id} className="sv-ui-link font-bold" href={`/${lang}/library/news#${item.id}`}><LinkLabel label={c.learningLink + ": " + item.title[lang]}/></Link>)}
  </nav>;
}
