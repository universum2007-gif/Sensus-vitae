import { notFound } from "next/navigation";
import { StudyChapter } from "@/components/study-chapter";
import { psychobiologyChapterOne } from "@/lib/academic-content";
import { psychobiologyChapterOneTranslations, psychobiologySectionIds } from "@/lib/psychobiology-chapter-one-translations";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";

type Params = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Params) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const chapter = psychobiologyChapterOneTranslations[lang];
  return createPageMetadata({ lang, path: psychobiologyChapterOne.path, title: chapter.title, description: chapter.intro });
}
export default async function ChapterOne({ params }: Params) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const chapter = psychobiologyChapterOneTranslations[lang];
  const current = { ru: "Глава 1", nl: "Hoofdstuk 1", en: "Chapter 1", es: "Tema 1" }[lang];
  const chapters = { ru: "Главы", nl: "Hoofdstukken", en: "Chapters", es: "Temas" }[lang];
  return <StudyChapter lang={lang} title={chapter.title} subtitle={chapter.subject}
    subject={chapter.subject} subjectPath="study/subjects/psychobiology"
    chaptersLabel={chapters} currentLabel={current} html={chapter.html} sectionIds={psychobiologySectionIds}/>;
}
