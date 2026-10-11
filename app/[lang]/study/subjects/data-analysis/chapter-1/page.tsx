import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/site-content";
import { chapterOneTranslations, dataAnalysisSectionIds } from "@/lib/data-analysis-chapter-one-translations";
import { dataAnalysisChapterOne } from "@/lib/academic-content";
import { StudyChapter } from "@/components/study-chapter";
import { createPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Params) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const chapter = chapterOneTranslations[lang];
  return createPageMetadata({ lang, path: dataAnalysisChapterOne.path, title: chapter.title, description: chapter.intro });
}
export default async function ChapterOne({ params }: Params) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const chapter = chapterOneTranslations[lang];
  const layout = {
    ru: { subtitle: "Измерение · частоты · группировка · распределения", current: "Глава 1" },
    es: { subtitle: "Medición · frecuencias · agrupación · distribuciones", current: "Tema 1" },
    en: { subtitle: "Measurement · frequencies · grouping · distributions", current: "Chapter 1" },
    nl: { subtitle: "Meting · frequenties · groepering · verdelingen", current: "Hoofdstuk 1" },
  }[lang];
  const chapters = { ru: "Главы", es: "Temas", nl: "Hoofdstukken", en: "Chapters" }[lang];
  return <><StudyChapter lang={lang} title={chapter.title} subtitle={layout.subtitle}
    subject={lang === "en" ? "Data Analysis" : chapter.subject} subjectPath="study/subjects/data-analysis"
    chaptersLabel={chapters} currentLabel={layout.current} html={chapter.html}
    sectionIds={dataAnalysisSectionIds}/>
    <style>{`
      .study-chapter .tema1-box { border-left: 4px solid #20594e; background: #eaf1eb; padding: 1rem 1.2rem; margin: 1.5rem 0; max-width: 80ch; }
      .study-chapter .tema1-equations { border-left: 4px solid #20594e; background: #eaf1eb; padding: .5rem 1rem; margin: 1.5rem 0; overflow-x: auto; }
      .study-chapter .ref { font-size: .875rem; line-height: 1.65; color: #52665b; }
      .study-chapter .tema1-figure { margin: 1.5rem 0; max-width: 100%; }
      .study-chapter .tema1-figure img { display: block; width: 100%; height: auto; background: white; }
      .study-chapter .tema1-figure figcaption { font-size: .9rem; line-height: 1.65; margin-top: .75rem; max-width: 80ch; }
      .study-chapter .tema1-graph-link { display: block; min-height: 44px; }
      .study-chapter .table-wrap:focus-visible, .study-chapter .tema1-graph-link:focus-visible { outline: 2px solid #7a5b25; outline-offset: 4px; }
      .study-chapter .exercise { padding-top: 1rem; margin-top: 1.5rem; border-top: 1px solid #cbd8ce; }
      .study-chapter summary { min-height: 44px; padding: .25rem 0; }
      @media (max-width: 639px) { .study-chapter .tema1-box { padding: .8rem 1rem; } .study-chapter .tema1-equations { padding: .4rem .6rem; } }
    `}</style></>;
}
