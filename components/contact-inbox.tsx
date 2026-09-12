"use client";
import { studioText } from "@/lib/studio-translations";
import type { Language } from "@/lib/site-content";

import { useEffect, useState } from "react";
import { Inbox, Mail } from "lucide-react";

type ContactMessage={id:number;name:string;email:string;topic:string;message:string;language:string;createdAt:string};

export function ContactInbox({lang = "ru"}: {lang?: Language}){const t=studioText(lang);
  const[messages,setMessages]=useState<ContactMessage[]>([]);const[loading,setLoading]=useState(true);const[unavailable,setUnavailable]=useState(false);
  useEffect(()=>{fetch("/api/contact").then(r=>r.json()).then(data=>{setMessages(data.messages||[]);setUnavailable(Boolean(data.unavailable));}).catch(()=>setUnavailable(true)).finally(()=>setLoading(false));},[]);
  return <section className="mt-14"><div className="flex items-center gap-3"><Inbox className="text-[#98722e]"/><div><p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{t("ОБРАТНАЯ СВЯЗЬ")}</p><h2 className="font-editorial mt-1 text-3xl font-bold">{t("Сообщения с сайта")}</h2></div></div>
    <div className="mt-6 space-y-4">{loading?<p className="text-muted-foreground">{t("Загружаю сообщения…")}</p>:unavailable?<p className="rounded-xl border border-dashed p-5 text-muted-foreground">{t("Сообщения временно недоступны.")}</p>:messages.length?messages.map(item=><article key={item.id} className="paper-card rounded-2xl border bg-card p-5 sm:p-6"><div className="flex flex-col justify-between gap-3 sm:flex-row"><div><p className="text-xs font-bold uppercase tracking-wider text-[#98722e]">{item.language} · {new Date(item.createdAt+"Z").toLocaleString({ru:"ru-RU",es:"es-ES",en:"en-GB",nl:"nl-NL"}[lang])}</p><h3 className="font-editorial mt-2 text-xl font-bold">{item.topic}</h3></div><a href={`mailto:${encodeURIComponent(item.email)}?subject=${encodeURIComponent(`Re: ${item.topic}`)}`} className="inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-sm font-bold hover:bg-secondary"><Mail size={16}/>{t("Ответить")}</a></div><p className="mt-4 whitespace-pre-wrap leading-7 text-[#344f43]">{item.message}</p><p className="mt-4 text-sm text-muted-foreground">{item.name} · {item.email}</p></article>):<p className="rounded-xl border border-dashed p-5 text-muted-foreground">{t("Новых сообщений пока нет.")}</p>}</div>
  </section>;
}
