"use client";

import { useId, useMemo, useRef, useState } from "react";

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
  const trigger = useRef<HTMLButtonElement>(null);
  const term = useMemo(() => getGlossaryTermForLocale(id, locale), [id, locale]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="sv-concept"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        onClick={() => setIsOpen((current) => !current)}
      >
        {term.term}
      </button>

      {isOpen ? (
        <div
          id={dialogId}
          className="sv-concept-definition"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-editorial text-lg font-bold text-[#173d30]">{term.term}</h3>
            <button
              type="button"
              aria-label={`${{ ru: "Закрыть", nl: "Sluiten", en: "Close", es: "Cerrar" }[locale]} ${term.term}`}
              onClick={() => { setIsOpen(false); trigger.current?.focus(); }}
              className="min-h-11 min-w-11 rounded-md border border-[#d9cfb2] px-2 py-1 text-xs font-bold uppercase tracking-[.12em] text-[#173d30] hover:bg-[#f7f1e7]"
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
