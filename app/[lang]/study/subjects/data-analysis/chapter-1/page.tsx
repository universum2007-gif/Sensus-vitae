import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/site-content";
import { chapterOneTranslations } from "@/lib/data-analysis-chapter-one-translations";
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
  return <StudyChapter lang={lang} title={chapter.title} subtitle={layout.subtitle}
    subject={lang === "en" ? "Data Analysis" : chapter.subject} subjectPath="study/subjects/data-analysis"
    currentLabel={layout.current} html={chapter.html}
    sectionIds={["statistics", "measurement", "frequencies", "grouping", "graphs", "distribution", "exercises", "terms", "sources"]}/>;
}
