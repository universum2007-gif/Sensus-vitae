"use client";
import { useMemo, useState } from "react";
import { GlossaryTermButton } from "@/components/glossary-term-button";
import { glossarySequence, getGlossaryTermForLocale } from "@/lib/glossary";
import type { Language } from "@/lib/site-content";
const copy = {
  ru: { search: "Найти понятие", alphabet: "По первой букве", all: "Все", empty: "Понятия не найдены. Попробуйте другой запрос.", count: "Найдено", reset: "Сбросить" },
  nl: { search: "Zoek een begrip", alphabet: "Op beginletter", all: "Alles", empty: "Geen begrippen gevonden. Probeer een andere zoekterm.", count: "Gevonden", reset: "Wissen" },
  en: { search: "Find a concept", alphabet: "By first letter", all: "All", empty: "No concepts found. Try a different search.", count: "Found", reset: "Reset" },
  es: { search: "Buscar un concepto", alphabet: "Por letra inicial", all: "Todos", empty: "No se encontraron conceptos. Prueba otra búsqueda.", count: "Encontrados", reset: "Restablecer" },
};
const normalize = (value: string, lang: Language) => value.toLocaleLowerCase(lang).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
export function GlossaryBrowser({ lang }: { lang: Language }) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("");
  const c = copy[lang];
  const entries = useMemo(() => glossarySequence.map(id => ({ id, ...getGlossaryTermForLocale(id, lang) })).sort((a, b) => a.term.localeCompare(b.term, lang)), [lang]);
  const letters = [...new Set(entries.map(item => item.term[0].toLocaleUpperCase(lang)))];
  const shown = entries.filter(item => (!letter || item.term[0].toLocaleUpperCase(lang) === letter) && normalize(item.term, lang).includes(normalize(query.trim(), lang)));
  return <div>
    <label htmlFor="glossary-search" className="block font-semibold">{c.search}</label>
    <div className="mt-3 flex flex-wrap gap-3">
      <input id="glossary-search" type="search" value={query} onChange={event => setQuery(event.target.value)} className="min-h-11 min-w-0 flex-1 rounded-xl border bg-card px-4 py-2" />
      <button type="button" className="sv-ui-link min-h-11 px-4" onClick={() => { setQuery(""); setLetter(""); }}>{c.reset}</button>
    </div>
    <div role="group" aria-label={c.alphabet} className="mt-5 flex flex-wrap gap-1">
      {["", ...letters].map(value => <button key={value} type="button" aria-pressed={letter === value} onClick={() => setLetter(value)} className={`min-h-11 min-w-11 rounded-lg border px-3 ${letter === value ? "bg-[#173d30] text-white" : "bg-card text-[#173d30]"}`}>{value || c.all}</button>)}
    </div>
    <p className="mt-4 text-sm text-[#53655c]" role="status">{c.count}: {shown.length}</p>
    {shown.length ? <ul className="mt-5 grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">{shown.map(item => <li key={item.id} id={item.id} className="min-w-0 rounded-xl border bg-card p-3"><GlossaryTermButton id={item.id} locale={lang}/></li>)}</ul> : <p className="mt-5">{c.empty}</p>}
  </div>;
}
