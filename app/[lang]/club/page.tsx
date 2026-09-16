import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, MessageCircle, NotebookPen, Quote, Sparkles, Users, CircleHelp } from "lucide-react";
import { isLanguage, ui } from "@/lib/site-content";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";

const copy = {
  ru: {
    title: "Клуб осознанной жизни",
    intro: "Клуб будет объединять чтение, размышления, обсуждения и короткие проверки знаний вокруг научных идей и важных вопросов жизни.",
    items: [
      ["Общее чтение и книги", "Первый проект совместного чтения клуба — Роберт Сапольски «Почему у зебр не бывает язв». Читаем по главам, разбираем ключевые идеи и используем вопросы для размышления и обсуждения."],
      ["Темы для обсуждения", "Вопросы по смыслу, морали, психологии, отношениям, привычкам и научному мышлению."],
      ["Автор дня", "Краткий взгляд на мыслителя, исследователя или автора, чьи идеи помогают глубже смотреть на темы клуба."],
      ["Термин дня", "Небольшие пояснения к ключевым понятиям, которые важны для понимания и дальнейшего чтения."],
      ["Вопрос дня", "Один размышляющий вопрос для ежедневного внимательного рассмотрения и обсуждения."],
      ["Встречи и активности", "Регулярные обсуждения, встречи и способы поддерживать живое сообщество вокруг обучения."],
      ["Самопроверка", "Короткие вопросы и мини-проверки, связанные с материалами клуба и темами чтения."],
    ],
    projectTitle: "Роберт Сапольски / Почему у зебр не бывает язв",
    authorName: "Роберт Сапольски",
    authorBlurb: "Психология и физиология стресса, научное мышление и глубокое чтение о том, как тело и мозг реагируют на давление.",
    authorImageAlt: "Портрет Роберта Сапольски",
    openLabel: "Открыть материал Сапольски",
    projectLabel: "Проект клуба",
    authorLabel: "Автор дня",
    photoLabel: "Фото",
  },
  es: {
    title: "Club para una vida consciente",
    intro: "El club reunirá lectura, reflexión, debate y breves comprobaciones de conocimiento en torno a ideas científicas y preguntas importantes sobre la vida.",
    items: [
      ["Lectura compartida y libros", "El primer proyecto de lectura conjunta del club es Robert Sapolsky «¿Por qué las cebras no tienen úlcera?». Leemos capítulo a capítulo, analizamos ideas clave y usamos preguntas para reflexionar y debatir."],
      ["Preguntas para debatir", "Cuestiones sobre significado, moral, psicología, relaciones, hábitos y pensamiento científico."],
      ["Autor del día", "Una mirada breve a un pensador o autor cuyas ideas ayudan a profundizar en los temas del club."],
      ["Término del día", "Explicaciones breves de conceptos clave para comprender mejor la lectura y el estudio."],
      ["Pregunta del día", "Una sola pregunta para reflexionar y discutir cada día con atención."],
      ["Encuentros y actividades", "Debates periódicos, encuentros y maneras de mantener una comunidad viva alrededor del aprendizaje."],
      ["Autoevaluación", "Preguntas cortas y mini-comprobaciones relacionadas con los materiales del club."],
    ],
    projectTitle: "Robert Sapolsky / ¿Por qué las cebras no tienen úlcera?",
    authorName: "Robert Sapolsky",
    authorBlurb: "Psicología y fisiología del estrés, pensamiento científico y lectura profunda sobre cómo el cuerpo y el cerebro responden a la presión.",
    authorImageAlt: "Retrato de Robert Sapolsky",
    openLabel: "Abrir material de Sapolsky",
    projectLabel: "Proyecto del club",
    authorLabel: "Autor del día",
    photoLabel: "Foto",
  },
  en: {
    title: "A club for conscious living",
    intro: "The club will bring together reading, reflection, discussion and short knowledge checks around scientific ideas and important questions in life.",
    items: [
      ["Shared reading and books", "The first joint reading project of the club is Robert Sapolsky’s Why Zebras Don’t Get Ulcers. We read chapter by chapter, unpack key ideas, and use reflection and discussion questions along the way."],
      ["Discussion prompts", "Questions on meaning, morality, psychology, relationships, habits and scientific thinking."],
      ["Author of the day", "A short look at a thinker or author whose ideas deepen the themes of the club."],
      ["Term of the day", "Brief explanations of key concepts for better understanding and further reading."],
      ["Question of the day", "One reflective question to consider and discuss each day."],
      ["Meetings and community activities", "Regular conversations, gatherings and ways to keep a living community around learning."],
      ["Self-check quizzes", "Short questions and mini-checks connected to club materials and reading themes."],
    ],
    projectTitle: "Robert Sapolsky / Why Zebras Don’t Get Ulcers",
    authorName: "Robert Sapolsky",
    authorBlurb: "The psychology and physiology of stress, scientific thinking and a deeper reading of how the body and brain respond to pressure.",
    authorImageAlt: "Portrait of Robert Sapolsky",
    openLabel: "Open Sapolsky material",
    projectLabel: "Club project",
    authorLabel: "Author of the day",
    photoLabel: "Photo",
  },
  nl: {
    title: "Club voor bewust leven",
    intro: "De club brengt samen lezen, reflectie, discussie en korte kennischecks rond wetenschappelijke ideeën en belangrijke levensvragen.",
    items: [
      ["Gezamenlijk lezen en boeken", "Het eerste gezamenlijke leesproject van de club is Robert Sapolsky’s Waarom krijgen zebra’s geen maagzweren? We lezen hoofdstuk voor hoofdstuk, bespreken de kernideeën en gebruiken vragen voor reflectie en gesprek."],
      ["Discussievragen", "Vragen over betekenis, moraal, psychologie, relaties, gewoonten en wetenschappelijk denken."],
      ["Auteur van de dag", "Een kort kijkje in de ideeën van een denker of auteur die de thema’s van de club verdiept."],
      ["Term van de dag", "Korte uitleg van kernbegrippen voor beter begrip en verder lezen."],
      ["Vraag van de dag", "Één reflectieve vraag om aandachtig te overdenken en te bespreken."],
      ["Vergaderingen en activiteiten", "Regelmatige gesprekken, bijeenkomsten en manieren om een levendige leercommunity te onderhouden."],
      ["Zelftoetsen", "Korte vragen en mini-checks gekoppeld aan clubmaterialen en leesonderwerpen."],
    ],
    projectTitle: "Robert Sapolsky / Waarom krijgen zebra’s geen maagzweren?",
    authorName: "Robert Sapolsky",
    authorBlurb: "De psychologie en fysiologie van stress, wetenschappelijk denken en een dieper inzicht in hoe lichaam en brein reageren op druk.",
    authorImageAlt: "Portret van Robert Sapolsky",
    openLabel: "Open Sapolsky-materiaal",
    projectLabel: "Clubproject",
    authorLabel: "Auteur van de dag",
    photoLabel: "Foto",
  },
} as const;

const icons = [BookOpen, MessageCircle, Sparkles, NotebookPen, Quote, Users, CircleHelp];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "club", ...pageMetadataCopy.club[lang] });
}

export default async function ClubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const c = copy[lang];
  const projectHref = `/${lang}/sapolsky`;

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{ui[lang].eyebrow}</p>
          <h1 className="font-editorial mt-4 text-4xl font-bold sm:text-5xl">{c.title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#53655c]">{c.intro}</p>
          <blockquote className="font-editorial mt-9 border-l-2 border-[#b48a39] pl-5 text-2xl italic">
            {{ ru: "«Те же вопросы. Глубже ответы.»", es: "«Las mismas preguntas. Respuestas más profundas.»", en: "“Same questions. Deeper answers.”", nl: "“Dezelfde vragen. Diepere antwoorden.”" }[lang]}
          </blockquote>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {c.items.map(([title, text], index) => {
            const Icon = icons[index];
            const isSharedReading = index === 0;
            const isAuthorOfDay = index === 2;

            return (
              <article key={title} className="paper-card rounded-[1.4rem] border bg-card p-6">
                <Icon className="text-[#a17a34]" />
                <h2 className="font-editorial mt-5 text-xl font-bold text-[#173d30]">{title}</h2>
                <p className="mt-3 leading-7 text-[#5d6d64]">{text}</p>

                {isSharedReading ? (
                  <div className="mt-4 rounded-2xl border border-[#d9cfb2] bg-[#f7f1e7] p-3">
                    <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{c.projectLabel}</p>
                    <p className="mt-2 font-semibold text-[#173d30]">{c.projectTitle}</p>
                   <Link href={projectHref} className="mt-3 inline-flex rounded-lg border border-[#d9cfb2] bg-[#f1eee6] px-3 py-2 text-sm font-bold text-[#173d30] no-underline transition hover:bg-[#e7e1d3]">
                      {c.openLabel}
                    </Link>
                  </div>
                ) : null}

                {isAuthorOfDay ? (
                  <div className="mt-4 flex gap-3 rounded-2xl border border-[#d9cfb2] bg-[#f7f1e7] p-3">
                    <img
                      src="/robert-sapolsky.jpg"
                      alt={c.authorImageAlt}
                      className="h-16 w-16 shrink-0 rounded-xl border border-[#d9cfb2] object-cover"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{c.authorLabel}</p>
                      <p className="mt-2 font-editorial text-xl font-bold text-[#173d30]">{c.authorName}</p>
                      <p className="mt-2 text-sm leading-6 text-[#53655c]">{c.authorBlurb}</p>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
