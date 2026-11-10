import Link from 'next/link';
import type { Language } from '@/lib/site-content';
import { geneticsLesson, lessonSectionIds } from '@/lib/psychiatric-genetics';
import { CellFigure, GeneticsHero } from './genetics-lesson-figures';
import { GeneticsLessonQuiz } from './genetics-lesson-quiz';
import type { ReactNode } from 'react';

const formulas = {
  or: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>OR</mi><mo>=</mo><mfrac><mfrac><mn>300</mn><mn>700</mn></mfrac><mfrac><mn>200</mn><mn>800</mn></mfrac></mfrac><mo>≈</mo><mn>1.71</mn></mrow></math>',
  threshold: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>&lt;</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup></mrow></math>',
  studyThreshold: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>&lt;</mo><mfrac><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup></mrow><mn>6</mn></mfrac><mo>≈</mo><mn>8.33</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>9</mn></mrow></msup></mrow></math>',
  correlation: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>g</mi></msub><mo>=</mo><mfrac><msub><mi>Cov</mi><mi>g</mi></msub><msqrt><mrow><msub><mi>V</mi><mrow><mi>g</mi><mn>1</mn></mrow></msub><mo>×</mo><msub><mi>V</mi><mrow><mi>g</mi><mn>2</mn></mrow></msub></mrow></msqrt></mfrac></mrow></math>',
};
function Formula({name}:{name:keyof typeof formulas}) {
  return <div className="my-5 overflow-x-auto rounded-xl border bg-[#f7f1e7] p-4 text-lg" dangerouslySetInnerHTML={{__html:formulas[name]}}/>;
}
function Paragraphs({items}:{items:string[]}) { return <>{items.map(p=><p key={p} className="mt-4 leading-8">{p}</p>)}</>; }
function Section({id,title,number,children}:{id:string;title:string;number:number;children:ReactNode}) {
  return <section id={id} className="scroll-mt-48 border-t border-[#e5dcc8] pt-9"><p className="text-sm font-bold text-[#73571f]">{String(number).padStart(2,'0')}</p><h2 className="font-editorial mt-2 text-2xl font-bold leading-snug sm:text-3xl">{title}</h2><div className="mt-5">{children}</div></section>;
}
export function GeneticsLesson({lang}:{lang:Language}) {
  const c=geneticsLesson[lang];
  return <main className="genetics-lesson mx-auto max-w-5xl px-4 py-10 sm:px-6">
    <nav aria-label={c.contents} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold">
      <Link className="sv-ui-link inline-flex min-h-11 items-center" href={`/${lang}/club`}>{c.club}</Link><span aria-hidden="true">/</span>
      <Link className="sv-ui-link inline-flex min-h-11 items-center" href={`/${lang}/library/scientific-news#psychobiology-genetics`}>{c.science}</Link><span aria-hidden="true">/</span><span>{c.category}</span>
    </nav>
    <article lang={lang} className="paper-card mt-5 rounded-[1.7rem] border bg-card p-5 sm:p-10">
      <header><p className="text-sm font-bold tracking-wide text-[#73571f]">SENSUS VITAE · {c.category} · GWAS</p>
        <h1 className="font-editorial mt-4 text-3xl font-bold leading-tight sm:text-4xl">{c.title}</h1>
        <p className="mt-5 text-sm leading-7 text-[#53655c]">{c.date}</p>
        <p className="mt-5 border-l-2 border-[#c3a35f] pl-4 text-lg leading-8">{c.summary}</p>
        <figure className="mt-7"><GeneticsHero alt={c.heroAlt}/><figcaption className="mt-3 text-sm leading-6 text-[#53655c]">{c.figureNote}. {c.heroAlt}</figcaption></figure>
      </header>
      <div className="mt-8"><Paragraphs items={c.intro}/></div>
      <nav aria-label={c.contents} className="my-9 rounded-2xl border border-[#e5dcc8] bg-[#f7f1e7] p-5"><h2 className="font-bold">{c.contents}</h2><ol className="mt-3 space-y-1">{lessonSectionIds.map((id,i)=><li key={id}><a className="sv-ui-link inline-flex min-h-11 items-center leading-7" href={`#${id}`}>{i+1}. {c.headings[i]}</a></li>)}</ol></nav>
      <div className="space-y-10">
        <Section id="research" number={1} title={c.headings[0]}>
          <div className="grid gap-3 sm:grid-cols-3">{['14','1 056 201','5'].map((value,i)=><div key={value} className="rounded-2xl border bg-[#f7f1e7] p-5"><p className="font-editorial text-3xl font-bold text-[#174f3c]">{value}</p><p className="mt-2 text-sm leading-6">{c.metrics[i]}</p></div>)}</div>
          <Paragraphs items={c.research}/>
        </Section>
        <Section id="factors" number={2} title={c.headings[1]}>
          <p className="leading-8">{c.factorsIntro}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{c.factors.map((f,i)=><div key={f.title} className="rounded-2xl border border-[#e5dcc8] bg-[#f7f1e7] p-5"><p className="text-sm font-bold text-[#73571f]">F{i+1}</p><h3 className="mt-2 text-lg font-bold">{f.title}</h3><p className="mt-3 leading-7">{f.text}</p></div>)}</div>
          <p className="mt-5 leading-8">{c.factorsNote}</p>
        </Section>
        <Section id="variance" number={3} title={c.headings[2]}>
          <Paragraphs items={c.variance}/>
          <figure className="mt-6 rounded-2xl border bg-[#f7f1e7] p-5">
            <div aria-hidden="true" className="flex h-9 overflow-hidden rounded-full"><div className="w-[66%] bg-[#174f3c]"/><div className="w-[34%] bg-[#b48a39]"/></div>
            <ul className="mt-4 space-y-2 leading-7">{c.varianceLabels.slice(0,2).map(label=><li key={label}>{label}</li>)}</ul><figcaption className="mt-3 text-sm leading-6">{c.varianceLabels[2]}</figcaption>
          </figure>
        </Section>
        <Section id="gwas" number={4} title={c.headings[3]}>
          <Paragraphs items={c.gwas.slice(0,2)}/>
          <ol className="my-6 grid gap-3 sm:grid-cols-2">{c.steps.map((step,i)=><li key={step} className="flex items-start gap-3 rounded-xl border bg-[#f7f1e7] p-4"><span aria-hidden="true" className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#174f3c] text-white">{i+1}</span><span className="leading-7">{step}</span></li>)}</ol>
          <Paragraphs items={c.gwas.slice(2)}/>
          <div className="my-5 overflow-x-auto rounded-xl border"><table className="w-full text-left text-sm"><caption className="p-4 text-left font-bold">{c.exampleLabel}</caption><thead><tr>{c.tableHeaders.map(h=><th scope="col" key={h} className="bg-[#f7f1e7] p-3 leading-6">{h}</th>)}</tr></thead><tbody>{[[300,700,'30%'],[200,800,'20%']].map((row,i)=><tr key={i}><th scope="row" className="border-t p-3 leading-6">{c.tableGroups[i]}</th>{row.map((v,j)=><td key={j} className="border-t p-3">{v}</td>)}</tr>)}</tbody></table></div>
        </Section>
        <Section id="statistics" number={5} title={c.headings[4]}>
          {c.stats.map((s,i)=><section key={s.title} className="mt-7"><h3 className="text-xl font-bold leading-7">{s.title}</h3><Paragraphs items={s.paragraphs}/>{i===0?<Formula name="or"/>:i===1?<><Formula name="threshold"/><Formula name="studyThreshold"/></>:<><Formula name="correlation"/><p className="rounded-xl border bg-[#f7f1e7] p-4 font-bold">Internalizing ↔ Substance Use · r<sub>g</sub> = 0.60; SE = 0.02</p></>}</section>)}
        </Section>
        <Section id="biology" number={6} title={c.headings[5]}>
          {c.biology.map((b,i)=><section className="mt-6" key={b.title}><h3 className="text-xl font-bold">{b.title}</h3><Paragraphs items={b.paragraphs}/><div className="mt-5"><CellFigure locale={lang} kind={i===0?'neuron':'glia'} copy={b} note={c.figureNote}/></div></section>)}
          <aside className="mt-6 rounded-2xl border-l-4 border-[#b48a39] bg-[#f7f1e7] p-5 leading-8">{c.biologyNote}</aside>
        </Section>
        <Section id="life" number={7} title={c.headings[6]}>
          <div className="rounded-2xl border bg-[#edf4ef] p-5"><Paragraphs items={c.life}/></div>
          <h3 className="mt-7 text-xl font-bold">{c.diagnosesTitle}</h3><p className="mt-4 leading-8">{c.diagnoses}</p>
          <aside className="mt-7"><h3 className="text-xl font-bold">{c.limitsTitle}</h3><ul className="mt-4 list-disc space-y-3 pl-5 leading-8">{c.limits.map(p=><li key={p}>{p}</li>)}</ul></aside>
          <h3 className="mt-7 text-xl font-bold">{c.conclusionTitle}</h3><p className="mt-4 leading-8">{c.conclusion}</p>
        </Section>
        <Section id="quiz" number={8} title={c.headings[7]}>
          <p className="mb-6 leading-8">{c.quizIntro}</p><GeneticsLessonQuiz questions={c.quiz} copy={c.quizCopy} locale={lang}/>
        </Section>
        <Section id="glossary" number={9} title={c.headings[8]}>
          <div className="grid gap-3">{c.glossary.map(([term,second,definition])=><details key={term} className="rounded-xl border bg-[#f7f1e7] p-4"><summary className="min-h-11 cursor-pointer leading-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174f3c]"><strong>{term}</strong><span className="ml-2 text-sm" lang={lang==='es'?'en':'es'}>({second})</span></summary><p className="mt-3 leading-8">{definition}</p></details>)}</div>
        </Section>
      </div>
      <footer className="mt-10 border-t pt-7"><h2 className="font-editorial text-2xl font-bold">{c.sourceTitle}</h2><p className="mt-4 leading-8">{c.sourcesNote}</p>
        <ol className="mt-4 list-decimal space-y-4 pl-5 leading-7">
          <li><a href="https://doi.org/10.1038/s41586-025-09820-3" className="sv-ui-link">Grotzinger A. D. et al. Mapping the genetic landscape across 14 psychiatric disorders. Nature 649, 406–415 (2026). DOI: 10.1038/s41586-025-09820-3.</a></li>
          <li><a href="https://doi.org/10.1038/s41562-019-0566-x" className="sv-ui-link">Grotzinger A. D. et al. Genomic structural equation modelling provides insights into the multivariate genetic architecture of complex traits. Nature Human Behaviour 3, 513–525 (2019).</a></li>
          <li><a href="https://doi.org/10.1038/ng.3406" className="sv-ui-link">Bulik-Sullivan B. et al. An atlas of genetic correlations across human diseases and traits. Nature Genetics 47, 1236–1241 (2015).</a></li>
        </ol>
        <Link className="sv-ui-link mt-5 inline-flex min-h-11 items-center font-bold" href={`/${lang}/library/scientific-news#psychobiology-genetics`}>{c.science}</Link>
      </footer>
    </article>
    <style>{`.genetics-lesson { overflow-wrap: anywhere; } .genetics-lesson p, .genetics-lesson li { max-width: 76ch; } .genetics-lesson math { min-width: max-content; } @media (prefers-reduced-motion: reduce) { .genetics-lesson * { scroll-behavior: auto; } }`}</style>
  </main>;
}
