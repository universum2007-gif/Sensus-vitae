import Link from "next/link";
import type { Language } from "@/lib/site-content";
import { catalogueActions } from "@/lib/catalogue-actions";
import { scientificNews } from "@/lib/library-architecture";
const articleLabels = {
  ru: { review: "Научный обзор", article: "Учебная статья", read: "Читать обзор" },
  nl: { review: "Onderzoeksoverzicht", article: "Leerartikel", read: "Lees het overzicht" },
  en: { review: "Research overview", article: "Learning article", read: "Read the overview" },
  es: { review: "Resumen de investigación", article: "Artículo educativo", read: "Leer el resumen" },
};

export function ArticleCard({ article, lang, featured = false }: {
  article: { slug: string; category: string; title: string; summary: string; readTime?: string };
  lang: Language; featured?: boolean;
}) {
  const isReview = scientificNews.some(item => item.articleSlug === article.slug);
  const labels = articleLabels[lang];
  return <Link href={"/" + lang + "/articles/" + article.slug} className="sv-catalogue-card sv-card-link" data-catalogue-card="article">
    <p className="mb-5 text-xs font-bold uppercase tracking-[.12em] text-[#7a5b25]">{isReview ? labels.review : labels.article}{article.readTime && <span className="font-normal normal-case tracking-normal text-muted-foreground"> · {article.readTime}</span>}</p>
    <p className="mb-3 text-sm text-[#53655c]">{article.category}</p>
    <h3 className={"font-editorial font-bold leading-tight " + (featured ? "text-3xl sm:text-4xl" : "text-2xl")}>{article.title}</h3>
    <p className="mt-4 flex-1 leading-7 text-[#526359]">{article.summary}</p>
    <span className="sv-card-action mt-7">{isReview ? labels.read : catalogueActions[lang].article}</span>
  </Link>;
}
