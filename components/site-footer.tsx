import Link from "next/link";
import type { Language } from "@/lib/site-content";

const copy: Record<Language, { contact: string; description: string; privacy: string; editor: string }> = {
  ru: {
    contact: "Контакты", privacy: "Конфиденциальность", editor: "Редакторская панель",
    description: "Sensus Vitae — учебно-научный проект для изучения психологии, психобиологии и смежных наук. Сайт находится в разработке и постепенно пополняется новыми материалами.",
  },
  nl: {
    contact: "Contact", privacy: "Privacy", editor: "Redactiepaneel",
    description: "Sensus Vitae is een educatief en wetenschappelijk project over psychologie, psychobiologie en verwante wetenschappen. De website is in ontwikkeling en wordt geleidelijk aangevuld met nieuw materiaal.",
  },
  en: {
    contact: "Contact", privacy: "Privacy", editor: "Editor panel",
    description: "Sensus Vitae is an educational and scientific project for exploring psychology, psychobiology and related sciences. The website is being developed, with new learning materials added over time.",
  },
  es: {
    contact: "Contacto", privacy: "Privacidad", editor: "Panel de edición",
    description: "Sensus Vitae es un proyecto educativo y científico para explorar la psicología, la psicobiología y las ciencias afines. El sitio está en desarrollo y se amplía poco a poco con nuevos materiales.",
  },
};

export function SiteFooter({ lang }: { lang: Language }) {
  const t = copy[lang];

  return (
    <footer className="mt-20 border-t bg-[#173d30] text-[#f7f1e5]">
      <div className="mx-auto max-w-6xl px-5 py-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <p className="max-w-3xl text-sm leading-6 text-[#ddd2bd]">{t.description}</p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-lg px-3 no-underline transition-colors hover:bg-white/10 hover:text-[#e4cd96]"
          >
            {t.contact}
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#ddd2bd]"><p>© Sensus Vitae · 2026</p><Link className="inline-flex min-h-11 items-center rounded px-2" href={"/" + lang + "/privacy"}>{t.privacy}</Link><Link className="inline-flex min-h-11 items-center rounded px-2" href={"/studio?lang=" + lang}>{t.editor}</Link></div>
      </div>
    </footer>
  );
}
