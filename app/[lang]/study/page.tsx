import Link from "next/link";
import { notFound } from "next/navigation";
import { BookText, FileText, GraduationCap, LibraryBig, Sparkles } from "lucide-react";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";
import { isLanguage, ui } from "@/lib/site-content";

const copy = {
  ru: {
    title: "Учебный путь", 
    intro: "Это начало нового раздела для structured-набора материалов, тем и проверок знаний. Здесь будет собран учебный контент, связанный с психобиологией, методами исследования и научным мышлением.",
    items: [
      ["Предметы UNED", "Темы, связанные с учебной программой, фундаментальными понятиями и вопросами, которые помогают выстраивать программу обучения."],
      ["Резюме глав", "Краткие и структурированные резюме глав, чтобы связать идеи, механизмы и научное обоснование в единый контекст."],
      ["Учебные материалы", "Собранные заметки, объяснения и связки между темами для более глубокого и устойчивого понимания."],
      ["Тесты / Проверка знаний", "Минимальные проверки понимания для закрепления ключевых идей без перегрузки и без искусственной сложности."],
      ["Glossary", "Краткие определения и термины, которые помогут удерживать язык науки и точные понятия."],
    ],
  },
  es: {
    title: "Ruta de estudio",
    intro: "Este es el comienzo de una nueva sección para organizar materiales, temas y comprobaciones de aprendizaje. Aquí se reunirá contenido educativo vinculado a la psicobiología, los métodos de investigación y el pensamiento científico.",
    items: [
      ["UNED Subjects", "Temas relacionados con el programa de estudios, conceptos fundamentales y preguntas que ayudan a estructurar el aprendizaje."],
      ["Chapter Summaries", "Resúmenes breves y estructurados de capítulos para conectar ideas, mecanismos y fundamentos científicos en un mismo contexto."],
      ["Learning Materials", "Apuntes, explicaciones y conexiones entre temas para una comprensión más profunda y duradera."],
      ["Quizzes / Knowledge Checks", "Pequeñas comprobaciones de comprensión para fijar ideas clave sin exceso ni dificultad artificial."],
      ["Glossary", "Definiciones breves y términos para mantener un lenguaje científico preciso y constante."],
    ],
  },
  en: {
    title: "Study path",
    intro: "This is the beginning of a new section for organising materials, topics and learning checks. It will gather educational content connected to psychobiology, research methods and scientific thinking.",
    items: [
      ["UNED Subjects", "Topics linked to the study programme, core concepts and questions that help structure learning over time."],
      ["Chapter Summaries", "Short, structured chapter summaries that connect ideas, mechanisms and scientific reasoning in one place."],
      ["Learning Materials", "Collected notes, explanations and links between themes that support deeper and more durable understanding."],
      ["Quizzes / Knowledge Checks", "Brief checks for understanding that reinforce key ideas without overload or artificial complexity."],
      ["Glossary", "Short definitions and terms that help preserve precise scientific language and conceptual clarity."],
    ],
  },
  nl: {
    title: "Studieweg",
    intro: "Dit is het begin van een nieuw onderdeel voor het ordenen van materialen, thema’s en kennischecks. Hier wordt onderwijsinhoud verzameld die verband houdt met psychobiologie, onderzoeksmethoden en wetenschappelijk denken.",
    items: [
      ["UNED Subjects", "Onderwerpen die gekoppeld zijn aan het studieprogramma, kernconcepten en vragen die het leren structureren."],
      ["Chapter Summaries", "Korte, gestructureerde samenvattingen van hoofdstukken om ideeën, mechanismen en wetenschappelijke argumenten samen te brengen."],
      ["Learning Materials", "Verzamelde notities, uitleg en verbanden tussen thema’s om dieper en duurzamer begrip te ontwikkelen."],
      ["Quizzes / Knowledge Checks", "Korte controlevragen om kernideeën vast te houden zonder te veel belasting of kunstmatige complexiteit."],
      ["Glossary", "Korte definities en termen die helpen bij heldere en precieze wetenschapstaal."],
    ],
  },
} as const;

const icons = [GraduationCap, BookText, FileText, Sparkles, LibraryBig];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "study", ...pageMetadataCopy.study[lang] });
}

export default async function StudyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = copy[lang];

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">SENSUS VITAE</p>
          <h1 className="font-editorial mt-4 text-5xl font-bold">{c.title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#53655c]">{c.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${lang}/library`} className="inline-flex min-h-11 items-center rounded-full bg-[#174f3c] px-5 py-3 text-sm font-bold text-[#fffdf8] transition hover:bg-[#123f30]">
              {ui[lang].nav.library}
            </Link>
            <Link href={`/${lang}`} className="inline-flex min-h-11 items-center rounded-full border border-[#d7c8a6] bg-[#f9f4eb] px-5 py-3 text-sm font-bold text-[#1d4a3a] transition hover:bg-[#f3e9d3]">
              {ui[lang].nav.home}
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {c.items.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <article key={title} className="paper-card rounded-[1.4rem] border bg-card p-6">
                <Icon className="text-[#a17a34]" size={22} />
                <h2 className="font-editorial mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-3 leading-7 text-[#5d6d64]">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
