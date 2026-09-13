import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";
import { isLanguage } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({
    lang,
    path: "library/books",
    title: { ru: "Книги", nl: "Boeken", en: "Books", es: "Libros" }[lang],
    description: { ru: "Книги и основные материалы по психологии, науке и научному мышлению.", nl: "Boeken en kernmaterialen over psychologie, wetenschap en wetenschappelijk denken.", en: "Books and core materials on psychology, science and scientific thinking.", es: "Libros y materiales clave sobre psicología, ciencia y pensamiento científico." }[lang],
  });
}

export default async function LibraryBooksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const copy = {
    ru: {
      title: "Книги",
      intro: "Основные книги и материалы, которые связаны с существующими исследованиями и образовательными путями Sensus Vitae.",
      label: "Книги и чтение",
      author: "АВТОР",
      lead: "Роберт Сапольски",
      body: "Психология и физиология стресса, научное мышление и объяснения через классические тексты.",
      cta: "Открыть книгу",
      back: "Назад в библиотеку",
    },
    nl: {
      title: "Boeken",
      intro: "Belangrijkste boeken en materialen die aansluiten bij de bestaande onderzoeks- en leerpaden van Sensus Vitae.",
      label: "Boeken en lezen",
      author: "AUTEUR",
      lead: "Robert Sapolsky",
      body: "Psychologie en fysiologie van stress, wetenschappelijk denken en uitleg via klassieke teksten.",
      cta: "Open boek",
      back: "Terug naar de bibliotheek",
    },
    en: {
      title: "Books",
      intro: "Core books and reading materials connected to the existing Sensus Vitae learning paths and scientific context.",
      label: "Books and reading",
      author: "AUTHOR",
      lead: "Robert Sapolsky",
      body: "The psychology and physiology of stress, scientific thinking and explanations through classic texts.",
      cta: "Open book",
      back: "Back to library",
    },
    es: {
      title: "Libros",
      intro: "Los libros y materiales principales vinculados a los caminos educativos y de investigación existentes de Sensus Vitae.",
      label: "Libros y lectura",
      author: "AUTOR",
      lead: "Robert Sapolsky",
      body: "Psicología y fisiología del estrés, pensamiento científico y explicaciones a través de textos clásicos.",
      cta: "Abrir libro",
      back: "Volver a la biblioteca",
    },
  }[lang];

  const backLabel = copy.back;

  return (
    <main className="mx-auto min-h-[65vh] max-w-4xl px-5 py-14">
      <div className="mb-8">
        <Link href={`/${lang}/library`} className="text-sm font-bold text-[#173d30] hover:text-[#98722e]">
          ← {backLabel}
        </Link>
      </div>

      <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{copy.label}</p>
      <h1 className="font-editorial mt-4 text-4xl font-bold sm:text-5xl">{copy.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53655c]">{copy.intro}</p>

      <div className="mt-10 rounded-[1.5rem] border border-[#e5dcc8] bg-[#f9f5ee] p-6 shadow-[0_6px_20px_rgba(23,61,48,0.05)]">
        <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{copy.author}</p>
        <h2 className="mt-4 font-editorial text-3xl font-bold text-[#173d30]">{copy.lead}</h2>
        <p className="mt-3 text-[15px] leading-7 text-[#53655c]">{copy.body}</p>
        <Link href={`/${lang}/sapolsky`} className="mt-6 inline-flex rounded-full bg-[#173d30] px-5 py-3 text-sm font-bold text-[#f7f1e7] transition hover:bg-[#214b3f]">{copy.cta}</Link>
      </div>
    </main>
  );
}
