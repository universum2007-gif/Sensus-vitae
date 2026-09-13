"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { PenLine } from "lucide-react";
import { type Language, ui } from "@/lib/site-content";

export function SiteHeader({ lang }: { lang: Language }) {
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const t = ui[lang];
  const contactLabel = { ru: "Контакты", es: "Contacto", en: "Contact", nl: "Contact" }[lang];
  const pathname = usePathname();
  const languageHref = (code: Language) => {
    const segments = pathname.split("/");
    if (["ru", "es", "en", "nl"].includes(segments[1])) segments[1] = code;
    else segments.splice(1, 0, code);
    return segments.join("/") || `/${code}`;
  };

  const navItems = [
    { href: `/${lang}`, label: t.nav.home, active: pathname === `/${lang}` },
    { href: `/${lang}/study`, label: t.nav.study, active: pathname.startsWith(`/${lang}/study`) },
    { href: `/${lang}/library`, label: t.nav.library, active: pathname.startsWith(`/${lang}/library`) || pathname.startsWith(`/${lang}/articles`) || pathname.startsWith(`/${lang}/sapolsky`) },
    { href: `/${lang}/club`, label: t.nav.club, active: pathname.startsWith(`/${lang}/club`) },
    { href: `/${lang}/about`, label: t.nav.about, active: pathname.startsWith(`/${lang}/about`) },
    { href: `/${lang}/contact`, label: contactLabel, active: pathname.startsWith(`/${lang}/contact`) },
  ];

  return <header className="sticky top-0 z-50 border-b bg-[#f6f1e7]/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
      <Link href={`/${lang}`} className="flex items-center gap-3" aria-label="Sensus Vitae">
        <img src="/sensus-vitae-mark.png" alt="" width="52" height="52" className="size-12 shrink-0 object-contain"/>
        <span className="hidden sm:block"><span className="font-editorial block text-xl font-bold tracking-[.08em]">SENSUS VITAE</span><span className="hidden text-xs tracking-[.16em] text-muted-foreground lg:block">{{ru:"ТЕ ЖЕ ВОПРОСЫ. ГЛУБЖЕ ОТВЕТЫ.",es:"LAS MISMAS PREGUNTAS. RESPUESTAS MÁS PROFUNDAS.",en:"SAME QUESTIONS. DEEPER ANSWERS.",nl:"DEZELFDE VRAGEN. DIEPERE ANTWOORDEN."}[lang]}</span></span>
      </Link>
      <nav className="hidden items-center gap-1 text-sm font-medium md:flex">{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={item.active ? "page" : undefined} className={`rounded-full px-3 py-2 transition ${item.active ? "bg-[#e5dcc8] text-[#174f3c]" : "hover:bg-[#eee6d6]"}`}>{item.label}</Link>)}</nav>
      <div className="flex items-center gap-0.5 sm:gap-1">{(["ru", "es", "en", "nl"] as const).map((code) => <Link key={code} href={languageHref(code)} className={`rounded-full px-2 py-1.5 text-xs font-bold uppercase sm:px-2.5 ${code === lang ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>{code}</Link>)}<Link href={`/studio?lang=${lang}`} className="ml-0.5 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground sm:ml-1" aria-label={{ru:"Редакторская панель",es:"Panel de edición",en:"Editor panel",nl:"Redactiepaneel"}[lang]}><PenLine size={17}/></Link></div>
    </div>
    <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3 text-sm font-medium md:hidden" aria-label={{ru:"Главное меню",es:"Navegación principal",en:"Primary navigation",nl:"Hoofdnavigatie"}[lang]}>{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={item.active ? "page" : undefined} className={`shrink-0 rounded-full px-3 py-1.5 ${item.active ? "bg-[#e5dcc8] text-[#174f3c]" : "hover:bg-[#eee6d6]"}`}>{item.label}</Link>)}</nav>
  </header>;
}
