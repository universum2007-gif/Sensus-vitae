"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { type Language, ui } from "@/lib/site-content";

export function SiteHeader({ lang }: { lang: Language }) {
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const t = ui[lang];
  const pathname = usePathname();
  const languageHref = (code: Language) => {
    const segments = pathname.split("/");
    if (["ru", "es", "en", "nl"].includes(segments[1])) segments[1] = code;
    else segments.splice(1, 0, code);
    return segments.join("/") || `/${code}`;
  };

  const isSelfExploration = pathname === "/" + lang + "/study/orientation";
  const navItems = [
    { href: `/${lang}`, label: t.nav.home, active: pathname === `/${lang}` },
    { href: `/${lang}/study`, label: t.nav.study, active: !isSelfExploration && pathname.startsWith(`/${lang}/study`) },
    { href: `/${lang}/library`, label: t.nav.library, active: pathname === "/" + lang + "/glossary" || pathname.startsWith(`/${lang}/library`) || pathname.startsWith(`/${lang}/articles`) || pathname.startsWith(`/${lang}/sapolsky`) },
    { href: `/${lang}/club`, label: t.nav.club, active: isSelfExploration || pathname.startsWith(`/${lang}/club`) },
    { href: `/${lang}/about`, label: t.nav.about, active: pathname.startsWith(`/${lang}/about`) },
  ];

  return <><a href="#main-content" className="sv-skip-link">{{ru:"Перейти к содержанию",nl:"Naar de inhoud",en:"Skip to content",es:"Saltar al contenido"}[lang]}</a><header className="sticky top-0 z-50 border-b bg-[#f6f1e7]/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
      <Link href={`/${lang}`} className="flex items-center gap-3" aria-label="Sensus Vitae">
        <img src="/sensus-vitae-mark.png" alt="" width="52" height="52" className="size-12 shrink-0 object-contain"/>
        <span className="hidden sm:block"><span className="font-editorial block text-xl font-bold tracking-[.08em]">SENSUS VITAE</span><span className="hidden text-xs tracking-[.16em] text-muted-foreground lg:block">{{ru:"ТЕ ЖЕ ВОПРОСЫ. ГЛУБЖЕ ОТВЕТЫ.",es:"LAS MISMAS PREGUNTAS. RESPUESTAS MÁS PROFUNDAS.",en:"SAME QUESTIONS. DEEPER ANSWERS.",nl:"DEZELFDE VRAGEN. DIEPERE ANTWOORDEN."}[lang]}</span></span>
      </Link>
      <nav className="hidden items-center gap-1 whitespace-nowrap text-sm font-medium xl:flex">{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={item.active ? "page" : undefined} className={`whitespace-nowrap rounded-full px-3 py-2 transition ${item.active ? "bg-[#e5dcc8] text-[#174f3c]" : "hover:bg-[#eee6d6]"}`}>{item.label}</Link>)}</nav>
      <div className="flex items-center gap-0.5 sm:gap-1">{(["ru", "es", "en", "nl"] as const).map((code) => <Link key={code} href={languageHref(code)} aria-label={{ru:"Русский",nl:"Nederlands",en:"English",es:"Español"}[code]} hrefLang={code} aria-current={code === lang ? "true" : undefined} className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-2 py-1.5 text-xs font-bold uppercase sm:px-2.5 ${code === lang ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>{code}</Link>)}</div>
    </div>
    <nav className="mx-auto grid max-w-6xl grid-cols-3 gap-1 px-4 pb-3 sm:flex sm:flex-wrap text-sm font-medium xl:hidden" aria-label={{ru:"Главное меню",es:"Navegación principal",en:"Primary navigation",nl:"Hoofdnavigatie"}[lang]}>{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={item.active ? "page" : undefined} className={`inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-2 py-1.5 sm:px-3 ${item.active ? "bg-[#e5dcc8] text-[#174f3c]" : "hover:bg-[#eee6d6]"}`}>{item.label}</Link>)}</nav>
  </header></>;
}
