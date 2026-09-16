import type { Language } from "@/lib/site-content";
export const sourceCopy = {
  ru: { primary: "Источник конспекта", chapter: "глава", context: "Дополнительный научный контекст: источники", note: "Эти публикации относятся только к отдельно обозначенным современным уточнениям выше. Источник конспекта главы — книга Роберта Сапольски." },
  nl: { primary: "Bron van de samenvatting", chapter: "hoofdstuk", context: "Aanvullende wetenschappelijke context: bronnen", note: "Deze publicaties ondersteunen uitsluitend de afzonderlijk aangeduide actuele toelichtingen hierboven. De bron van de hoofdstuksamenvatting is het boek van Robert Sapolsky." },
  en: { primary: "Source of the summary", chapter: "chapter", context: "Additional scientific context: sources", note: "These publications support only the separately labelled modern qualifications above. The source of the chapter summary is Robert Sapolsky’s book." },
  es: { primary: "Fuente del resumen", chapter: "capítulo", context: "Contexto científico adicional: fuentes", note: "Estas publicaciones respaldan únicamente las aclaraciones actuales identificadas por separado arriba. La fuente del resumen del capítulo es el libro de Robert Sapolsky." },
};
export const externalReferenceHeadings = new Set([
  "Источники к современному уточнению", "Sources for the modern qualification",
  "Fuentes para la actualización científica", "Bronnen voor de wetenschappelijke actualisering",
]);
export function SapolskyContextSources({ paragraphs, lang }: { paragraphs: string[]; lang: Language }) {
  const references: { label: string; url: string }[] = [];
  for (let i = 0; i < paragraphs.length; i++) {
    if (!externalReferenceHeadings.has(paragraphs[i])) continue;
    while (i + 1 < paragraphs.length && paragraphs[i + 1].startsWith("* ") && /https?:\/\//.test(paragraphs[i + 1])) {
      const reference = paragraphs[++i].slice(2);
      const urlIndex = reference.search(/https?:\/\//);
      references.push({ label: reference.slice(0, urlIndex).trim(), url: reference.slice(urlIndex) });
    }
  }
  if (!references.length) return null;
  const c = sourceCopy[lang];
  return <aside data-scientific-context className="mt-6 rounded-2xl border bg-[#f4efe4] p-5 sm:p-7">
    <h4 className="font-editorial text-xl font-bold">{c.context}</h4>
    <p className="mt-3 text-sm leading-7 text-[#53655c]">{c.note}</p>
    <ul className="mt-5 space-y-4">{references.map(reference => <li key={reference.url}><a href={reference.url} className="sv-ui-link inline-block text-sm leading-7">{reference.label} ↗</a></li>)}</ul>
  </aside>;
}
