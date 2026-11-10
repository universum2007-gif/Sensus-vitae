'use client';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import type { Language } from '@/lib/site-content';

const zoomCopy = {
  ru: { enlarge: 'Увеличить схему', reduce: 'Уменьшить схему', hint: 'Увеличенная схема прокручивается по горизонтали: проведи пальцем или используй стрелки клавиатуры, когда область схемы в фокусе.' },
  es: { enlarge: 'Ampliar el esquema', reduce: 'Reducir el esquema', hint: 'El esquema ampliado se desplaza horizontalmente: desliza el dedo o utiliza las flechas del teclado cuando el área del esquema tenga el foco.' },
  nl: { enlarge: 'Schema vergroten', reduce: 'Schema verkleinen', hint: 'Het vergrote schema is horizontaal te verschuiven: veeg met je vinger of gebruik de pijltoetsen wanneer het schemagebied de focus heeft.' },
  en: { enlarge: 'Enlarge diagram', reduce: 'Reduce diagram', hint: 'The enlarged diagram scrolls horizontally: swipe or use the keyboard arrow keys while the diagram area has focus.' },
};

export function GeneticsFigureZoom({ children, locale, title }: { children: ReactNode; locale: Language; title: string }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const regionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const interacted = useRef(false);
  const copy = zoomCopy[locale];
  useEffect(() => {
    if (!interacted.current) return;
    if (expanded) regionRef.current?.focus({ preventScroll: true });
    else buttonRef.current?.focus({ preventScroll: true });
  }, [expanded]);
  return <div data-genetics-figure-zoom>
    <button ref={buttonRef} type="button" aria-expanded={expanded} aria-controls={id} aria-label={`${expanded ? copy.reduce : copy.enlarge}: ${title}`} onClick={() => { interacted.current = true; setExpanded(value => !value); }} className="mb-4 inline-flex min-h-11 items-center rounded-xl border border-[#174f3c] bg-[#fffdf9] px-4 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174f3c]">
      {expanded ? copy.reduce : copy.enlarge}
    </button>
    <div ref={regionRef} id={id} role="region" aria-label={title} aria-describedby={expanded ? `${id}-hint` : undefined} tabIndex={expanded ? 0 : undefined} className="overflow-x-auto rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174f3c]">
      <div className="relative w-full" style={{ minWidth: expanded ? '640px' : undefined }}>{children}</div>
    </div>
    {expanded && <p id={`${id}-hint`} className="mt-3 text-sm leading-6" role="status">{copy.hint}</p>}
  </div>;
}
