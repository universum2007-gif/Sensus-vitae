import Link from "next/link";
import { notFound } from "next/navigation";
import { Brain, Dna } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { isLanguage, staticArticles, type Language } from "@/lib/site-content";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";

const copy: Record<Language, { eyebrow:string; title:string; lead:string; back:string; genetics:string; geneticsLead:string; foundations:string; languageNote:string }> = {
  ru:{eyebrow:"УЧЕБНОЕ НАПРАВЛЕНИЕ",title:"Психобиология",lead:"Как мозг, нервная система, генетика, гормоны, опыт и среда вместе участвуют в формировании поведения.",back:"На главную",genetics:"Генетика и поведение",geneticsLead:"Исследования о наследственных предрасположенностях, полигенности и взаимодействии генов со средой.",foundations:"Основы психобиологии",languageNote:""},
  es:{eyebrow:"ÁREA DE ESTUDIO",title:"Psicobiología",lead:"Cómo el cerebro, el sistema nervioso, la genética, las hormonas, la experiencia y el ambiente participan en la conducta.",back:"Volver al inicio",genetics:"Genética y conducta",geneticsLead:"Estudios sobre predisposiciones heredadas, poligenicidad e interacción entre genes y ambiente.",foundations:"Fundamentos de psicobiología",languageNote:"Este nuevo apunte está disponible en ruso."},
  en:{eyebrow:"LEARNING AREA",title:"Psychobiology",lead:"How the brain, nervous system, genetics, hormones, experience and environment jointly shape behaviour.",back:"Back home",genetics:"Genetics and behaviour",geneticsLead:"Research on inherited predispositions, polygenicity and gene–environment interplay.",foundations:"Psychobiology foundations",languageNote:"This new study note is available in Russian."},
  nl:{eyebrow:"LEERGEBIED",title:"Psychobiologie",lead:"Hoe hersenen, zenuwstelsel, genetica, hormonen, ervaring en omgeving samen gedrag vormen.",back:"Naar start",genetics:"Genetica en gedrag",geneticsLead:"Onderzoek naar erfelijke aanleg, polygeniciteit en de wisselwerking tussen genen en omgeving.",foundations:"Basis van de psychobiologie",languageNote:"Deze nieuwe studienotitie is beschikbaar in het Russisch."},
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "psychobiology", ...pageMetadataCopy.psychobiology[lang] });
}

export default async function PsychobiologyPage({params}:{params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if(!isLanguage(lang)) notFound();
  const c={...copy[lang], languageNote:""};
  const genetics=staticArticles.find((a)=>a.lang===lang&&a.slug==="personality-genetics-nature-2026")!;
  const foundation=staticArticles.find((a)=>a.lang===lang&&a.slug==="neuron-and-glia") ?? staticArticles.find((a)=>a.lang==="ru"&&a.slug==="neuron-and-glia")!;

  return <main className="mx-auto min-h-[70vh] max-w-6xl px-5 py-12 sm:py-16">
    <Link href={`/${lang}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold">{c.back}</Link>
    <header className="mt-7 grid gap-6 border-b pb-10 lg:grid-cols-[1fr_.38fr] lg:items-end">
      <div><p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{c.eyebrow}</p><h1 className="font-editorial mt-4 text-5xl font-bold sm:text-6xl">{c.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[#53655c]">{c.lead}</p></div>
      <div className="hidden justify-end lg:flex"><span className="grid size-24 place-items-center rounded-full border bg-[#e9ddc3] text-[#174f3c]"><Brain size={42}/></span></div>
    </header>

    <section className="py-10 sm:py-12" aria-labelledby="genetics-heading">
      <div className="mb-6 flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e9ddc3] text-[#8f6c2f]"><Dna size={21}/></span><div><h2 id="genetics-heading" className="font-editorial text-3xl font-bold">{c.genetics}</h2><p className="mt-2 max-w-3xl leading-7 text-[#607068]">{c.geneticsLead}</p>{c.languageNote&&<p className="mt-2 text-sm font-bold text-[#8f6c2f]">{c.languageNote}</p>}</div></div>
      <div className="max-w-3xl"><ArticleCard article={genetics} lang={lang}/></div>
    </section>

    <section className="border-t py-10 sm:py-12" aria-labelledby="foundations-heading">
      <h2 id="foundations-heading" className="font-editorial mb-6 text-3xl font-bold">{c.foundations}</h2>
      <div className="max-w-3xl"><ArticleCard article={foundation} lang={lang}/></div>
    </section>
  </main>;
}
