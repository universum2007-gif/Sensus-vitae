import Link from "next/link";
import { ArrowLeft, ExternalLink, MessageCircleQuestion } from "lucide-react";
import { notFound } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { EducationalNewsQuiz } from "@/components/educational-news-quiz";
import { GlossaryTermButton } from "@/components/glossary-term-button";
import { isLanguage, languages, staticArticles, type Language } from "@/lib/site-content";
import { getDb } from "@/db";
import { posts } from "@/db/schema";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();

  const staticArticle = staticArticles.find((article) => article.lang === lang && article.slug === slug);
  if (staticArticle) {
    const equivalentLanguages = languages.filter((language) =>
      staticArticles.some((article) => article.lang === language && article.slug === slug),
    );
    return createPageMetadata({
      lang,
      path: `articles/${encodeURIComponent(slug)}`,
      title: staticArticle.title,
      description: staticArticle.summary,
      equivalentLanguages,
    });
  }

  try {
    const [article] = await getDb()
      .select({ title: posts.title, summary: posts.summary })
      .from(posts)
      .where(and(eq(posts.slug, slug), eq(posts.language, lang), eq(posts.status, "published")))
      .limit(1);
    if (article) {
      return createPageMetadata({
        lang,
        path: `articles/${encodeURIComponent(slug)}`,
        title: article.title,
        description: article.summary,
        equivalentLanguages: [lang as Language],
      });
    }
  } catch {}

  return {};
}

export default async function ArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  let article: { category: string; title: string; summary: string; readTime?: string; body: { heading?: string; paragraphs?: string[]; bullets?: string[] }[]; source?: { label: string; href: string } } | undefined = staticArticles.find((a) => a.lang === lang && a.slug === slug);
  if (!article) {
    try {
      const [row] = await getDb().select().from(posts).where(and(eq(posts.slug, slug), eq(posts.language, lang), eq(posts.status, "published"))).limit(1);
      if (row) article = { ...row, readTime: "", body: row.body.split(/\n{2,}/).map((paragraph) => ({ paragraphs: [paragraph] })) };
    } catch {}
  }
  if (!article) notFound();
  const isPsychobiology = ["Психобиология","Генетика и поведение","Psicobiología","Psychobiology","Psychobiologie","Genética y conducta","Genetics and behaviour","Genetica en gedrag"].includes(article.category);
  const back=isPsychobiology ? {ru:"К разделу «Психобиология»",es:"Volver a Psicobiología",en:"Back to Psychobiology",nl:"Naar Psychobiologie"}[lang] : {ru:"К библиотеке",es:"Volver a la biblioteca",en:"Back to library",nl:"Naar bibliotheek"}[lang];
  const backHref=isPsychobiology ? `/${lang}/psychobiology` : `/${lang}/library`;
  const note={ru:"Учебная заметка. Материал не заменяет профессиональную медицинскую консультацию.",es:"Apunte de estudio. Este material no sustituye el asesoramiento médico profesional.",en:"Study note. This material does not replace professional medical advice.",nl:"Studienotitie. Dit materiaal vervangt geen professioneel medisch advies."}[lang];
  const isPilot = slug === "neuron-and-glia";
  const glossaryTermsForPilot = ["glia","astrocyte","oligodendrocyte","microglia","ependymal-cell","myelin"] as const;
  const glossaryCopy = {
    ru: { heading: "Глоссарий", quiz: "Проверка знаний", discussion: "Вопрос для обсуждения", related: "Связанные материалы", correct: "Верно", incorrect: "Неверно", explanation: "Объяснение", ask: "Если нейроны зависят от постоянной поддержки глии, насколько корректно представлять мозг прежде всего как сеть нейронов?" },
    es: { heading: "Glosario", quiz: "Comprobación de conocimientos", discussion: "Pregunta para debatir", related: "Material relacionado", correct: "Correcto", incorrect: "Incorrecto", explanation: "Explicación", ask: "Si las neuronas dependen del apoyo constante de la glía, ¿hasta qué punto es correcto representar el cerebro principalmente como una red de neuronas?" },
    en: { heading: "Glossary", quiz: "Mini-test", discussion: "Discussion question", related: "Related material", correct: "Correct", incorrect: "Incorrect", explanation: "Explanation", ask: "If neurons depend on constant support from glia, how accurate is it to think of the brain mainly as a network of neurons?" },
    nl: { heading: "Woordenlijst", quiz: "Kennischeck", discussion: "Discussievraag", related: "Gerelateerd materiaal", correct: "Correct", incorrect: "Onjuist", explanation: "Uitleg", ask: "Als neuronen afhankelijk zijn van constante ondersteuning door glia, hoe correct is het dan om de hersenen vooral te zien als een netwerk van neuronen?" },
  }[lang];
  const pilotQuizQuestions = {
    ru: [
      { question: "Почему мозг нельзя понять, если рассматривать только нейроны?", choices: ["Потому что нейроны не передают сигналы без участия мышц.","Потому что работа нейронов зависит от глии: она поддерживает их обмен веществ, химическую среду, защиту и нормальную передачу сигналов.","Потому что нейроны могут работать без обмена веществ.","Потому что глия заменяет нейроны в передаче сигналов."], correctIndex: 1, explanation: "Глия не просто окружает нейроны: разные типы глиальных клеток регулируют химическую среду, поддерживают обмен веществ, участвуют в работе синапсов, иммунной защите и миелинизации." },
      { question: "Какова главная роль астроцитов?", choices: ["Формировать миелиновую оболочку вокруг аксонов.","Поддерживать химическое равновесие и участвовать в работе синапсов.","Проверять повреждения и удалять ненужные элементы.","Вырабатывать спинномозговую жидкость для мозга."], correctIndex: 1, explanation: "Астроциты помогают регулировать химическую среду вокруг нейронов и синапсов." },
      { question: "Как связаны олигодендроциты и миелин?", choices: ["Олигодендроциты создают миелин в центральной нервной системе.","Миелин создаёт нейроны, а олигодендроциты его переваривают.","Олигодендроциты удаляют миелин после стимуляции.","Миелин образует клетки микроглии вокруг аксонов."], correctIndex: 0, explanation: "Олигодендроциты в ЦНС формируют миелин, который ускоряет проведение импульсов." },
      { question: "Что особенно важно делает микроглия?", choices: ["Обеспечивает быструю проводимость сигналов между нейронами.","Формирует оболочку вокруг всех синапсов.","Следит за повреждениями и удаляет ненужные элементы в мозге.","Снабжает нейроны глюкозой во время сна."], correctIndex: 2, explanation: "Микроглия выполняет иммунный надзор и помогает очищать нервную ткань." },
    ],
    es: [
      { question: "¿Por qué el cerebro no puede entenderse si solo se consideran las neuronas?", choices: ["Porque las neuronas no transmiten señales sin músculos.","Porque el funcionamiento de las neuronas depende de la glía: sostiene su metabolismo, el entorno químico, la protección y la transmisión normal de señales.","Porque las neuronas pueden funcionar sin metabolismo.","Porque la glía sustituye a las neuronas en la transmisión de señales."], correctIndex: 1, explanation: "La glía no solo rodea a las neuronas: distintos tipos de células gliales regulan el entorno químico, sostienen el metabolismo, participan en el funcionamiento de las sinapsis, la defensa inmunitaria y la mielinización." },
      { question: "¿Cuál es la función principal de los astrocitos?", choices: ["Formar la mielina alrededor de los axones.","Mantener el equilibrio químico y participar en las sinapsis.","Monitorear daños y eliminar materiales innecesarios.","Producir líquido cefalorraquídeo."], correctIndex: 1, explanation: "Los astrocitos ayudan a regular el entorno químico alrededor de las neuronas y las sinapsis." },
      { question: "¿Qué relación existe entre los oligodendrocitos y la mielina?", choices: ["Los oligodendrocitos forman la mielina en el sistema nervioso central.","La mielina forma las neuronas y los oligodendrocitos la digieren.","Los oligodendrocitos eliminan la mielina después de la estimulación.","La mielina se forma en las microglías alrededor de los axones."], correctIndex: 0, explanation: "Los oligodendrocitos del SNC forman la mielina, que acelera la conducción de los impulsos." },
      { question: "¿Qué hace especialmente la microglía?", choices: ["Proporciona una conducción rápida entre neuronas.","Forma una cubierta alrededor de todas las sinapsis.","Vigila daños y elimina elementos innecesarios en el cerebro.","Aporta glucosa a las neuronas durante el sueño."], correctIndex: 2, explanation: "La microglía realiza vigilancia inmunitaria y ayuda a limpiar el tejido nervioso." },
    ],
    en: [
      { question: "Why should neurons not be understood in isolation from glia?", choices: ["Because neurons do not transmit signals without muscles.","Because neurons depend on glia for proper functioning: glial cells support their metabolism, chemical environment, protection, and normal signal transmission.","Because neurons can work without metabolism.","Because glia replace neurons in signal transmission."], correctIndex: 1, explanation: "Glia are not just a surrounding scaffold: different glial cell types regulate the chemical environment, support metabolism, participate in synaptic function, immune defense, and myelination." },
      { question: "What is the main role of astrocytes?", choices: ["To form myelin around axons.","To maintain chemical balance and support synapses.","To monitor damage and remove unnecessary material.","To produce cerebrospinal fluid."], correctIndex: 1, explanation: "Astrocytes help regulate the chemical environment around neurons and synapses." },
      { question: "How are oligodendrocytes and myelin related?", choices: ["Oligodendrocytes form myelin in the central nervous system.","Myelin creates neurons and oligodendrocytes break it down.","Oligodendrocytes remove myelin after stimulation.","Myelin is formed by microglia around axons."], correctIndex: 0, explanation: "Oligodendrocytes in the CNS form myelin, which speeds up electrical conduction." },
      { question: "What is a key role of microglia?", choices: ["To ensure quick signal conduction between neurons.","To form a sheath around every synapse.","To monitor damage and remove unnecessary material in the brain.","To supply neurons with glucose during sleep."], correctIndex: 2, explanation: "Microglia provide immune surveillance and help clean up neural tissue." },
    ],
    nl: [
      { question: "Waarom kunnen neuronen niet los van gliacellen worden begrepen?", choices: ["Omdat neuronen geen signalen doorgeven zonder spieren.","Omdat neuronen voor hun goede werking afhankelijk zijn van glia: gliacellen ondersteunen hun metabolisme, chemische omgeving, bescherming en normale signaaloverdracht.","Omdat neuronen zonder metabolisme kunnen werken.","Omdat glia neuronen vervangt in de signaaloverdracht."], correctIndex: 1, explanation: "Glia is niet alleen een omringende ondersteuning: verschillende soorten gliacellen reguleren het chemische milieu, ondersteunen het metabolisme, spelen een rol bij synaptische functie, immuunafweer en myelinisatie." },
      { question: "Wat is de belangrijkste rol van astrocyten?", choices: ["Myeline vormen rond axonen.","Het chemische evenwicht bewaren en synapsen ondersteunen.","Schade bewaken en onnodig materiaal verwijderen.","Cerebrospinale vloeistof produceren."], correctIndex: 1, explanation: "Astrocyten helpen het chemische milieu rond neuronen en synapsen te reguleren." },
      { question: "Hoe zijn oligodendrocyten en myeline met elkaar verbonden?", choices: ["Oligodendrocyten vormen myeline in het centrale zenuwstelsel.","Myeline maakt neuronen en oligodendrocyten breken het af.","Oligodendrocyten verwijderen myeline na stimulatie.","Myeline wordt gevormd door microgliacellen rond axonen."], correctIndex: 0, explanation: "Oligodendrocyten in het CZS vormen myeline, waardoor impulsen sneller worden geleid." },
      { question: "Wat is een belangrijke rol van microgliacellen?", choices: ["Zorgen voor snelle signaalgeleiding tussen neuronen.","Vormen een laag rond elke synaps.","Bewaken beschadigingen en verwijderen onnodig materiaal in de hersenen.","Zorgen voor glucose aan neuronen tijdens de slaap."], correctIndex: 2, explanation: "Microgliacellen leveren immuunbewaking en helpen zenuwweefsel op te ruimen." },
    ],
  }[lang];
  return <main className="mx-auto max-w-3xl px-5 py-12"><Link href={backHref} className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16} />{back}</Link><article className="paper-card mt-8 rounded-[1.7rem] border bg-card px-6 py-9 sm:px-10 sm:py-12"><p className="text-xs font-bold uppercase tracking-[.15em] text-[#98722e]">{article.category}{article.readTime && ` · ${article.readTime}`}</p><h1 className="font-editorial mt-5 text-4xl font-bold leading-tight sm:text-5xl">{article.title}</h1><p className="mt-6 border-l-2 border-[#c3a35f] pl-5 text-lg leading-8 text-[#53655c]">{article.summary}</p><div className="article-copy mt-9">{article.body.map((block, i) => <section key={i}>{block.heading && <h2>{block.heading}</h2>}{block.paragraphs?.map((p) => <p key={p}>{p}</p>)}{block.bullets && <ul>{block.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}</section>)}</div>{article.source && <aside className="mt-10 rounded-2xl border bg-[#f5efe2] p-5"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#8f6c2f]">{{ru:"Источник",es:"Fuente",en:"Source",nl:"Bron"}[lang]}</p><a href={article.source.href} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-start gap-2 font-bold leading-6 underline decoration-[#b99850] underline-offset-4">{article.source.label}<ExternalLink size={16} className="mt-1 shrink-0"/></a></aside>}{isPilot && <div className="mt-10 space-y-10"><section className="rounded-[1.4rem] border border-[#e5dcc8] bg-[#fffdf9] p-5"><p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{glossaryCopy.heading}</p><div className="mt-4 flex flex-wrap gap-2">{glossaryTermsForPilot.map((id) => <GlossaryTermButton key={id} id={id} locale={lang} />)}</div></section><section className="rounded-[1.4rem] border border-[#e5dcc8] bg-[#fffdf9] p-5"><p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{glossaryCopy.quiz}</p><EducationalNewsQuiz locale={lang} copy={{ correct: glossaryCopy.correct, incorrect: glossaryCopy.incorrect, explanation: glossaryCopy.explanation }} questions={pilotQuizQuestions.map((question) => ({ question: question.question, choices: question.choices, correctIndex: question.correctIndex, explanation: question.explanation }))} /></section><section className="rounded-[1.4rem] border border-[#e5dcc8] bg-[#fffdf9] p-5"><div className="flex gap-3"><MessageCircleQuestion className="mt-0.5 shrink-0 text-[#98722e]" size={20} /><div><p className="text-xs font-bold uppercase tracking-[.12em] text-[#98722e]">{glossaryCopy.discussion}</p><p className="mt-2 leading-7 text-[#40564b]">{glossaryCopy.ask}</p></div></div></section></div>}{!isPilot && <div className="gold-rule mt-10" />}<div className="gold-rule mt-10" /><p className="mt-6 text-sm text-muted-foreground">{note}</p></article></main>;
}
