"use client";

import { useId, useMemo, useState } from "react";

import type { Language } from "@/lib/site-content";
import { getGlossaryTermForLocale, glossaryTerms } from "@/lib/glossary";

export function GlossaryTermButton({
  id,
  locale,
}: {
  id: keyof typeof glossaryTerms;
  locale: Language;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogId = useId();
  const term = useMemo(() => getGlossaryTermForLocale(id, locale), [id, locale]);

  return (
    <>
      <button
        type="button"
        className="rounded-full border border-[#d9cfb2] bg-[#edf2ee] px-2.5 py-1 text-sm font-medium text-[#173d30] transition hover:border-[#173d30] hover:bg-[#e6f0ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98722e] focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        onClick={() => setIsOpen((current) => !current)}
      >
        {term.term}
      </button>

      {isOpen ? (
        <div
          id={dialogId}
          role="dialog"
          aria-modal="false"
          aria-label={term.term}
          className="mt-3 rounded-2xl border border-[#d9cfb2] bg-[#fffdf9] p-4 text-left shadow-[0_10px_28px_rgba(23,61,48,0.08)]"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-editorial text-lg font-bold text-[#173d30]">{term.term}</h3>
            <button
              type="button"
              aria-label={`Close ${term.term}`}
              onClick={() => setIsOpen(false)}
              className="rounded-md border border-[#d9cfb2] px-2 py-1 text-xs font-bold uppercase tracking-[.12em] text-[#173d30] hover:bg-[#f7f1e7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98722e] focus-visible:ring-offset-2"
            >
              ×
            </button>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#53655c]">{term.shortDefinition}</p>
          {term.extendedDefinition ? (
            <p className="mt-2 text-sm leading-6 text-[#53655c]">{term.extendedDefinition}</p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
