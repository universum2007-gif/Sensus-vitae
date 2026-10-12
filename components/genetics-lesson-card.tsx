import Link from 'next/link';
import type { Language } from '@/lib/site-content';
import { geneticsLesson, geneticsLessonPath } from '@/lib/psychiatric-genetics';
export function GeneticsLessonCard({lang}:{lang:Language}) {
  const c=geneticsLesson[lang];
  return <section id="psychobiology-genetics" className="paper-card mb-8 scroll-mt-48 rounded-2xl border bg-card p-6">
    <p className="text-sm font-bold text-[#73571f]">{c.category} · Nature · GWAS</p>
    <h2 className="font-editorial mt-3 text-2xl font-bold leading-snug"><Link className="sv-ui-link" href={`/${lang}/${geneticsLessonPath}`}>{c.title}</Link></h2>
    <p className="mt-4 leading-7">{c.summary}</p><p className="mt-4 text-sm leading-6 text-[#53655c]">{c.date}</p>
  </section>;
}
