import type { Language } from "@/lib/site-content";
export const statusCopy = {
  ru: { available: "Доступно", preparing: "Готовится", preview: "Учебный шаблон" },
  nl: { available: "Beschikbaar", preparing: "In voorbereiding", preview: "Leervoorbeeld" },
  en: { available: "Available", preparing: "Preparing", preview: "Learning template" },
  es: { available: "Disponible", preparing: "En preparación", preview: "Plantilla educativa" },
};
export function ContentStatus({ lang, state }: { lang: Language; state: keyof typeof statusCopy.en }) {
  return <span data-content-status={state} className="sv-status">{statusCopy[lang][state]}</span>;
}
