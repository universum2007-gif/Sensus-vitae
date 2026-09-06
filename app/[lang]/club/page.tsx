import { notFound } from "next/navigation";
import { BookOpen, MessageCircle, Scale, Sparkles } from "lucide-react";
import { isLanguage } from "@/lib/site-content";

const copy = {
  ru: { title:"Клуб осознанной жизни", intro:"Sensus Vitae — пространство живого мышления, диалога и исследования важных вопросов жизни.", items:[["Открытые дискуссии","Свобода воли, любовь, страх, мораль, счастье, смерть и время."],["Книги и авторы","Разбираем идеи глубже пересказа и связываем их с современной психологией."],["Дилеммы и дебаты","Учимся видеть аргументы, проверять убеждения и менять мнение при новых данных."],["Личная рефлексия","Соединяем знание с собственным опытом без давления и готовых ответов."]] },
  es: { title:"Club para una vida consciente", intro:"Sensus Vitae es un espacio para pensar, dialogar y explorar las grandes preguntas de la vida.", items:[["Conversaciones abiertas","Libre albedrío, amor, miedo, moral, felicidad, muerte y tiempo."],["Libros y pensadores","Profundizamos más allá del resumen y relacionamos las ideas con la psicología contemporánea."],["Dilemas y debate","Aprendemos a evaluar argumentos y a revisar nuestras creencias cuando cambian las pruebas."],["Reflexión personal","Relacionamos el conocimiento con la experiencia propia, sin presión ni respuestas prefabricadas."]] },
  en: { title:"A club for conscious living", intro:"Sensus Vitae is a space for thoughtful dialogue and the exploration of life's important questions.", items:[["Open conversations","Free will, love, fear, morality, happiness, death and time."],["Books and thinkers","We go beyond summaries and connect ideas with contemporary psychology."],["Dilemmas and debate","We learn to test beliefs and update them when evidence changes."],["Personal reflection","We connect knowledge with experience, without pressure or ready-made answers."]] },
  nl: { title:"Club voor bewust leven", intro:"Sensus Vitae is een ruimte voor levend denken, dialoog en onderzoek naar belangrijke levensvragen.", items:[["Open gesprekken","Vrije wil, liefde, angst, moraal, geluk, dood en tijd."],["Boeken en denkers","We gaan verder dan samenvattingen en verbinden ideeën met moderne psychologie."],["Dilemma's en debat","We leren overtuigingen toetsen en bijstellen bij nieuwe informatie."],["Persoonlijke reflectie","We verbinden kennis met ervaring, zonder druk of kant-en-klare antwoorden."]] },
} as const;

const icons = [MessageCircle, BookOpen, Scale, Sparkles];

export default async function ClubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = copy[lang];
  return <main className="mx-auto max-w-6xl px-5 py-14"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
    <div className="lg:sticky lg:top-32">
      <img src="/sensus-vitae-logo-full.png" alt="Sensus Vitae" width="200" height="200" className="mb-7 h-auto w-36 rounded-full shadow-[0_16px_45px_rgba(35,61,47,.08)]"/>
      <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">SENSUS VITAE</p>
      <h1 className="font-editorial mt-4 text-5xl font-bold">{c.title}</h1>
      <p className="mt-6 text-lg leading-8 text-[#53655c]">{c.intro}</p>
      <blockquote className="font-editorial mt-9 border-l-2 border-[#b48a39] pl-5 text-2xl italic">“Same questions. Deeper answers.”</blockquote>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">{c.items.map(([title, text], i) => { const Icon = icons[i]; return <article key={title} className="paper-card rounded-[1.4rem] border bg-card p-6"><Icon className="text-[#a17a34]"/><h2 className="font-editorial mt-5 text-xl font-bold">{title}</h2><p className="mt-3 leading-7 text-[#5d6d64]">{text}</p></article>; })}</div>
  </div></main>;
}
