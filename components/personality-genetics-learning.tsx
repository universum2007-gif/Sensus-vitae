import Link from 'next/link';
import type { Language } from '@/lib/site-content';
import { personalityGeneticsLearning } from '@/lib/personality-genetics-learning';

export function PersonalityGeneticsContents({ lang }: { lang: Language }) {
  const c = personalityGeneticsLearning[lang];
  return <nav aria-label={c.contents} className="mt-8 rounded-2xl border border-[#e5dcc8] bg-[#f7f1e7] p-5">
    <h2 className="text-lg font-bold">{c.contents}</h2>
    <ol className="mt-3 space-y-2 leading-7">
      {c.body.map((s, i) => <li key={i}><a className="sv-ui-link" href={`#personality-section-${i + 1}`}>{s.heading}</a></li>)}
      <li><a className="sv-ui-link" href="#personality-self-check">{c.checkTitle}</a></li>
    </ol>
  </nav>;
}

export function PersonalityGeneticsSelfCheck({ lang }: { lang: Language }) {
  const c = personalityGeneticsLearning[lang];
  return <section id="personality-self-check" aria-labelledby="personality-check-title" className="mt-10 scroll-mt-24">
    <h2 id="personality-check-title" className="text-2xl font-bold leading-9">{c.checkTitle}</h2>
    <p className="mt-3 leading-8">{c.instruction}</p>
    <ol className="mt-5 space-y-5">
      {c.checks.map((q, i) => <li key={i} className="rounded-2xl border border-[#e5dcc8] bg-[#fffdf9] p-5">
        <h3 className="font-bold leading-7">{i + 1}. {q.question}</h3>
        <details className="mt-3" data-personality-answer={i + 1}>
          <summary className="min-h-11 cursor-pointer py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#173d30]">{c.reveal} · {i + 1}</summary>
          <p className="mt-2 leading-8">{q.answer}</p>
          <a className="sv-ui-link mt-3 inline-block py-2" href={`#personality-section-${q.section}`}>{c.returnLabel} {q.section}</a>
        </details>
      </li>)}
    </ol>
    <div className="mt-8 space-y-4 leading-7">
      <p><a className="sv-ui-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13589609/">{c.fullText}</a></p>
      <p><Link className="sv-ui-link" href={`/${lang}/library/scientific-news/psychiatric-genetics-14`}>{c.related}</Link></p>
    </div>
  </section>;
}
