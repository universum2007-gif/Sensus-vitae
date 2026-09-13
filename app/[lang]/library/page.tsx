import Link from "next/link";
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
        { heading: "Книги и материалы", text: "Источники, книги, тексты и основные чтения, которые помогут строить системное понимание предмета.", href: `/${lang}/library/books` },
        { heading: "Научные статьи", text: "Ключевые исследования, объяснения и ссылки на академические материалы по психологии и смежным областям.", href: null },
        { heading: "Новости и обновления", text: "Краткие заметки о новых исследованиях, темах и важных идеях в науке.", href: null },
        { heading: "Конспекты", text: "Сводки, резюме и структурированные заметки для повторения и закрепления знаний.", href: null },
        { heading: "Материалы для обучения", text: "Пособия, пояснения, рубрики и полезные ресурсы для самостоятельного изучения.", href: null },
      ],
    },
    nl: {
      title: "Bibliotheek",
      intro: "Dit is een structurele landingspagina voor de bibliotheek: hier worden boeken, artikelen, nieuws en leermaterialen op een overzichtelijke manier verzameld.",
      sections: [
        { heading: "Boeken en leesmateriaal", text: "Bronnen, boeken en teksten die een systematisch begrip van het onderwerp ondersteunen.", href: `/${lang}/library/books` },
        { heading: "Wetenschappelijke artikelen", text: "Belangrijk onderzoek, uitleg en verwijzingen naar academische bronnen in de psychologie en gerelateerde vakgebieden.", href: null },
        { heading: "Nieuws en onderzoeksupdates", text: "Korte updates over nieuw onderzoek, actuele thema’s en belangrijke wetenschappelijke ideeën.", href: null },
        { heading: "Samenvattingen", text: "Overzichten, samenvattingen en gestructureerde notities voor herhaling en verdieping.", href: null },
        { heading: "Leermaterialen", text: "Handleidingen, verklaringen, categorieën en nuttige bronnen voor zelfstudie.", href: null },
      ],
    },
    en: {
      title: "Library",
      intro: "This is the structural landing page for the library: a place where books, articles, news and learning materials will be collected in one accessible space.",
      sections: [
        { heading: "Books and reading materials", text: "Sources, books and texts that help build a systematic understanding of the subject.", href: `/${lang}/library/books` },
        { heading: "Scientific articles", text: "Key research, explanations and references to academic material in psychology and related fields.", href: null },
        { heading: "News and research updates", text: "Short updates on new findings, research themes and important scientific ideas.", href: null },
        { heading: "Summaries", text: "Notes, overviews and structured summaries for revision and deeper learning.", href: null },
        { heading: "Learning resources", text: "Guides, explanations, categories and useful materials for independent study.", href: null },
      ],
    },
    es: {
      title: "Biblioteca",
      intro: "Esta es la página de inicio estructural de la biblioteca: aquí se recopilarán libros, artículos, noticias y materiales de aprendizaje en un mismo espacio.",
      sections: [
        { heading: "Libros y materiales de lectura", text: "Fuentes, libros y textos que ayudan a construir una comprensión sistemática del tema.", href: `/${lang}/library/books` },
        { heading: "Artículos científicos", text: "Investigación clave, explicaciones y referencias a material académico en psicología y campos relacionados.", href: null },
        { heading: "Noticias y actualizaciones de investigación", text: "Actualizaciones breves sobre nuevos hallazgos, temas de investigación e ideas científicas relevantes.", href: null },
        { heading: "Resúmenes", text: "Apuntes, síntesis y resúmenes estructurados para repasar y profundizar.", href: null },
        { heading: "Recursos de aprendizaje", text: "Guías, explicaciones, categorías y materiales útiles para el estudio independiente.", href: null },
      ],
    },
  }[lang];

  return (
    <main className="mx-auto min-h-[65vh] max-w-6xl px-5 py-14">
      <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{ui[lang].eyebrow}</p>
      <h1 className="font-editorial mt-4 text-4xl font-bold sm:text-5xl">{copy.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53655c]">{copy.intro}</p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {copy.sections.map(({ heading, text, href }) => {
          const cardContent = (
            <>
              <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">Library</p>
              <h2 className="mt-4 font-editorial text-2xl font-bold text-[#173d30]">{heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#53655c]">{text}</p>
            </>
          );

          if (href) {
            return (
              <Link key={heading} href={href} className="block rounded-[1.5rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173d30]">
                <article className="h-full rounded-[1.5rem] border border-[#e5dcc8] bg-[#f9f5ee] p-6 shadow-[0_6px_20px_rgba(23,61,48,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(23,61,48,0.08)]">
                  {cardContent}
                </article>
              </Link>
            );
          }

          return (
            <article key={heading} className="rounded-[1.5rem] border border-[#e5dcc8] bg-[#f9f5ee] p-6 shadow-[0_6px_20px_rgba(23,61,48,0.05)]">
              {cardContent}
            </article>
          );
        })}
      </div>
    </main>
  );
}
