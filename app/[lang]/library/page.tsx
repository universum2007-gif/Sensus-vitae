import { notFound } from "next/navigation";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";
import { isLanguage, ui } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "library", ...pageMetadataCopy.library[lang] });
}

export default async function LibraryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const copy = {
    ru: {
      title: "Библиотека знаний",
      intro: "Это структурная страница библиотеки: здесь будет собираться научная и учебная подборка по книгам, статьям, новостям и материалам для обучения.",
      sections: [
        ["Книги и материалы", "Источники, книги, тексты и основные чтения, которые помогут строить системное понимание предмета."],
        ["Научные статьи", "Ключевые исследования, объяснения и ссылки на академические материалы по психологии и смежным областям."],
        ["Новости и обновления", "Краткие заметки о новых исследованиях, темах и важных идеях в науке."],
        ["Конспекты", "Сводки, резюме и структурированные заметки для повторения и закрепления знаний."],
        ["Материалы для обучения", "Пособия, пояснения, рубрики и полезные ресурсы для самостоятельного изучения."],
      ],
    },
    nl: {
      title: "Bibliotheek",
      intro: "Dit is een structurele landingspagina voor de bibliotheek: hier worden boeken, artikelen, nieuws en leermaterialen op een overzichtelijke manier verzameld.",
      sections: [
        ["Boeken en leesmateriaal", "Bronnen, boeken en teksten die een systematisch begrip van het onderwerp ondersteunen."],
        ["Wetenschappelijke artikelen", "Belangrijk onderzoek, uitleg en verwijzingen naar academische bronnen in de psychologie en gerelateerde vakgebieden."],
        ["Nieuws en onderzoeksupdates", "Korte updates over nieuw onderzoek, actuele thema’s en belangrijke wetenschappelijke ideeën."],
        ["Samenvattingen", "Overzichten, samenvattingen en gestructureerde notities voor herhaling en verdieping."],
        ["Leermaterialen", "Handleidingen, verklaringen, categorieën en nuttige bronnen voor zelfstudie."],
      ],
    },
    en: {
      title: "Library",
      intro: "This is the structural landing page for the library: a place where books, articles, news and learning materials will be collected in one accessible space.",
      sections: [
        ["Books and reading materials", "Sources, books and texts that help build a systematic understanding of the subject."],
        ["Scientific articles", "Key research, explanations and references to academic material in psychology and related fields."],
        ["News and research updates", "Short updates on new findings, research themes and important scientific ideas."],
        ["Summaries", "Notes, overviews and structured summaries for revision and deeper learning."],
        ["Learning resources", "Guides, explanations, categories and useful materials for independent study."],
      ],
    },
    es: {
      title: "Biblioteca",
      intro: "Esta es la página de inicio estructural de la biblioteca: aquí se recopilarán libros, artículos, noticias y materiales de aprendizaje en un mismo espacio.",
      sections: [
        ["Libros y materiales de lectura", "Fuentes, libros y textos que ayudan a construir una comprensión sistemática del tema."],
        ["Artículos científicos", "Investigación clave, explicaciones y referencias a material académico en psicología y campos relacionados."],
        ["Noticias y actualizaciones de investigación", "Actualizaciones breves sobre nuevos hallazgos, temas de investigación e ideas científicas relevantes."],
        ["Resúmenes", "Apuntes, síntesis y resúmenes estructurados para repasar y profundizar."],
        ["Recursos de aprendizaje", "Guías, explicaciones, categorías y materiales útiles para el estudio independiente."],
      ],
    },
  }[lang];

  return (
    <main className="mx-auto min-h-[65vh] max-w-6xl px-5 py-14">
      <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{ui[lang].eyebrow}</p>
      <h1 className="font-editorial mt-4 text-4xl font-bold sm:text-5xl">{copy.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53655c]">{copy.intro}</p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {copy.sections.map(([heading, text]) => (
          <article key={heading} className="rounded-[1.5rem] border border-[#e5dcc8] bg-[#f9f5ee] p-6 shadow-[0_6px_20px_rgba(23,61,48,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">Library</p>
            <h2 className="mt-4 font-editorial text-2xl font-bold text-[#173d30]">{heading}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#53655c]">{text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
