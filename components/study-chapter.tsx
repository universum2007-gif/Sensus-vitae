import Link from "next/link";
import type { Language } from "@/lib/site-content";

const labels = {
  ru: { breadcrumb: "Навигация по учебному разделу", study: "Учёба", contents: "Содержание" },
  es: { breadcrumb: "Ruta de navegación del curso", study: "Estudio", contents: "Contenido" },
  en: { breadcrumb: "Study breadcrumb", study: "Study", contents: "Contents" },
  nl: { breadcrumb: "Navigatie binnen de studie", study: "Studie", contents: "Inhoud" },
};

/** Splits trusted, repository-owned chapter HTML without rewriting its content. */
function chapterSections(html: string, sectionIds: readonly string[]) {
  const headings = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)];
  if (headings.length !== sectionIds.length) throw new Error("Chapter headings must match the stable section IDs");
  return {
    introduction: html.slice(0, headings[0].index),
    sections: headings.map((heading, index) => ({
      id: sectionIds[index],
      label: heading[1].replace(/<[^>]*>/g, "").replace(/^\d+\.\s*/, "").replace(/\s+/g, " ").trim(),
      html: heading[0].replace(/<h2\b[^>]*>/, `<h2 id="${sectionIds[index]}" tabindex="-1">`) + html.slice(heading.index! + heading[0].length, headings[index + 1]?.index ?? html.length),
    })),
  };
}

export function StudyChapter({ lang, title, subtitle, subject, subjectPath, currentLabel, html, sectionIds }: {
  lang: Language; title: string; subtitle: string; subject: string; subjectPath: string;
  currentLabel: string; html: string; sectionIds: readonly string[];
}) {
  const copy = labels[lang];
  const content = chapterSections(html, sectionIds);
  return <main className="mx-auto min-h-[65vh] max-w-6xl px-5 py-8 sm:py-10">
    <nav aria-label={copy.breadcrumb} className="mb-5 text-sm text-[#607068]">
      <ol className="flex flex-wrap items-center gap-x-2">
        <li><Link className="sv-ui-link inline-flex min-h-11 items-center" href={`/${lang}/study`}>{copy.study}</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link className="sv-ui-link inline-flex min-h-11 items-center" href={`/${lang}/${subjectPath}`}>{subject}</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="inline-flex min-h-11 items-center">{currentLabel}</li>
      </ol>
    </nav>
    <h1 className="font-editorial max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
    <p className="mt-3 max-w-3xl text-sm leading-6 text-[#607068]">{subtitle}</p>
    <style>{"\n.study-chapter { font-size: 1rem; line-height: 1.75; color: #263b31; }\n.study-chapter h2 { font-family: Georgia, serif; font-size: 1.9rem; line-height: 1.2; margin: 2.5rem 0 1rem; color: #173d30; }\n.study-chapter h3 { font-family: Georgia, serif; font-size: 1.4rem; margin: 2rem 0 .7rem; color: #174f3c; }\n.study-chapter p, .study-chapter ul, .study-chapter ol { margin: 0 0 1.15rem; }\n.study-chapter ul, .study-chapter ol { padding-left: 1.6rem; }\n.study-chapter li { margin: .4rem 0; }\n.study-chapter a { color: #165a43; text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }\n.study-chapter blockquote { border-left: 4px solid #b38a4d; padding: .65rem 1.2rem; background: #f6f1e7; margin: 1.5rem 0; }\n.study-chapter blockquote p { margin: 0; }\n.study-chapter table { border-collapse: collapse; width: 100%; font-size: .95rem; }\n.study-chapter thead { background: #e8eee9; }\n.study-chapter th, .study-chapter td { padding: .65rem .8rem; border: 1px solid #cbd8ce; text-align: left; vertical-align: top; }\n.study-chapter .table-wrap { overflow-x: auto; margin: 1.5rem 0; }\n.study-chapter math[display='block'] { overflow-x: auto; max-width: 100%; margin: 1.4rem 0; }\n.study-chapter details { border: 1px solid #cbd8ce; border-radius: .8rem; padding: .9rem 1rem; margin: 1rem 0; background: #fff; }\n.study-chapter summary { cursor: pointer; font-weight: 700; color: #174f3c; }\n\n.study-chapter p, .study-chapter ul, .study-chapter ol, .study-chapter blockquote, .study-chapter details { max-width: 80ch; }\n.study-chapter h2[id] { scroll-margin-top: 12rem; }\n.study-chapter h2[id]:focus-visible { outline: 2px solid #7a5b25; outline-offset: 4px; }\n.study-chapter blockquote { margin-top: 0; }\n.study-chapter .chapter-contents { margin: 2rem 0; padding: 1rem 0; border-top: 1px solid #e5dcc8; border-bottom: 1px solid #e5dcc8; }\n.study-chapter .chapter-contents h2 { margin: 0 0 .5rem; font-size: 1.25rem; }\n.study-chapter .chapter-contents ol { list-style: none; padding: 0; margin: 0; }\n.study-chapter .chapter-contents li { margin: 0; }\n.study-chapter .chapter-contents a { display: flex; align-items: baseline; gap: .75rem; min-height: 44px; padding: .5rem 0; font-size: .875rem; line-height: 1.6; text-decoration: none; }\n.study-chapter .chapter-contents a:hover { color: #7a5b25; text-decoration: underline; }\n.study-chapter .chapter-contents .chapter-index { color: #7a5b25; font-size: .75rem; font-variant-numeric: tabular-nums; }\n@media (min-width: 1280px) { .study-chapter h2[id] { scroll-margin-top: 7rem; } }\n@media (max-width: 639px) { .study-chapter h2 { font-size: 1.5rem; } }\n"}</style>
    <article className="study-chapter mt-6">
      <div dangerouslySetInnerHTML={{ __html: content.introduction }}/>
      <nav className="chapter-contents" aria-labelledby="chapter-contents-title">
        <h2 id="chapter-contents-title">{copy.contents}</h2>
        <ol>{content.sections.map((section, index) => <li key={section.id}>
          <a href={`#${section.id}`}><span className="chapter-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{section.label}</span></a>
        </li>)}</ol>
      </nav>
      <div dangerouslySetInnerHTML={{ __html: content.sections.map(section => section.html).join("") }}/>
    </article>
  </main>;
}
