import { NavigationCard } from "@/components/navigation-card";
import { destinationAction } from "@/lib/catalogue-actions";
import { ArticleCard } from "@/components/article-card";
import { libraryCopy, libraryResourceSlugs, libraryArticleSlugs } from "@/lib/library-architecture";
import { notFound } from "next/navigation";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";
import { isLanguage, ui, staticArticles } from "@/lib/site-content";

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
        { heading: "Учебные новости", text: "Научные новости, объяснённые для обучения: что произошло, почему это важно и какие понятия стоит запомнить.", href: `/${lang}/library/news` },
        { heading: "Научные статьи", text: "Ключевые исследования, объяснения и ссылки на академические материалы по психологии и смежным областям.", href: null },
        { heading: "Конспекты", text: "Сводки, резюме и структурированные заметки для повторения и закрепления знаний.", href: null },
        { heading: "Материалы для обучения", text: "Пособия, пояснения, рубрики и полезные ресурсы для самостоятельного изучения.", href: null },
      ],
    },
    nl: {
      title: "Bibliotheek",
      intro: "Dit is een structurele landingspagina voor de bibliotheek: hier worden boeken, artikelen, nieuws en leermaterialen op een overzichtelijke manier verzameld.",
      sections: [
        { heading: "Boeken en leesmateriaal", text: "Bronnen, boeken en teksten die een systematisch begrip van het onderwerp ondersteunen.", href: `/${lang}/library/books` },
        { heading: "Leernieuws", text: "Wetenschappelijke nieuwsitems, uitgelegd voor leren: wat gebeurde, waarom is het belangrijk en welke begrippen zijn relevant.", href: `/${lang}/library/news` },
        { heading: "Wetenschappelijke artikelen", text: "Belangrijk onderzoek, uitleg en verwijzingen naar academische bronnen in de psychologie en gerelateerde vakgebieden.", href: null },
        { heading: "Samenvattingen", text: "Overzichten, samenvattingen en gestructureerde notities voor herhaling en verdieping.", href: null },
        { heading: "Leermaterialen", text: "Handleidingen, verklaringen, categorieën en nuttige bronnen voor zelfstudie.", href: null },
      ],
    },
    en: {
      title: "Library",
      intro: "This is the structural landing page for the library: a place where books, articles, news and learning materials will be collected in one accessible space.",
      sections: [
        { heading: "Books and reading materials", text: "Sources, books and texts that help build a systematic understanding of the subject.", href: `/${lang}/library/books` },
        { heading: "Learning News", text: "Scientific updates explained for learning: what happened, why it matters and which concepts are worth remembering.", href: `/${lang}/library/news` },
        { heading: "Scientific articles", text: "Key research, explanations and references to academic material in psychology and related fields.", href: null },
        { heading: "Summaries", text: "Notes, overviews and structured summaries for revision and deeper learning.", href: null },
        { heading: "Learning resources", text: "Guides, explanations, categories and useful materials for independent study.", href: null },
      ],
    },
    es: {
      title: "Biblioteca",
      intro: "Esta es la página de inicio estructural de la biblioteca: aquí se recopilarán libros, artículos, noticias y materiales de aprendizaje en un mismo espacio.",
      sections: [
        { heading: "Libros y materiales de lectura", text: "Fuentes, libros y textos que ayudan a construir una comprensión sistemática del tema.", href: `/${lang}/library/books` },
        { heading: "Noticias para aprender", text: "Actualizaciones científicas explicadas para aprender: qué ocurrió, por qué importa y qué conceptos conviene recordar.", href: `/${lang}/library/news` },
        { heading: "Artículos científicos", text: "Investigación clave, explicaciones y referencias a material académico en psicología y campos relacionados.", href: null },
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
        {[...copy.sections, { heading: libraryCopy[lang].science, text: libraryCopy[lang].scienceIntro, href: `/${lang}/library/scientific-news` }].map(({ heading, text, href }, index) => {
          href ??= index === 2 ? `/${lang}/library#scientific-articles` : index === 4 ? `/${lang}/library#learning-materials` : null;
          if (index === 1) text = libraryCopy[lang].learningIntro;
          return <NavigationCard key={heading} lang={lang} title={heading} description={text} href={href} status={!href ? "preparing" : index === 1 ? "preview" : undefined} action={href ? destinationAction(href, lang) : undefined}/>;
        })}
      </div>
      {[{ id: "scientific-articles", title: libraryCopy[lang].articles, slugs: libraryArticleSlugs }, { id: "learning-materials", title: libraryCopy[lang].resources, slugs: libraryResourceSlugs }].map((section) => <section key={section.id} id={section.id} className="mt-12 scroll-mt-8"><h2 className="font-editorial text-3xl font-bold">{section.title}</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{staticArticles.filter((article) => article.lang === lang && section.slugs.includes(article.slug)).map((article) => <ArticleCard key={article.slug} article={article} lang={lang}/>)}</div></section>)}
    </main>
  );
}
