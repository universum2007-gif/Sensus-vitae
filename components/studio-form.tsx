"use client";
import { studioText } from "@/lib/studio-translations";
import type { Language } from "@/lib/site-content";

import { useEffect, useState } from "react";
import { CheckCircle2, Save, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

type Post = { id: number; title: string; language: string; category: string; status: string };

export function StudioForm({lang = "ru"}: {lang?: Language}) {
  const t=studioText(lang);
  const [posts, setPosts] = useState<Post[]>([]);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const load = () => fetch("/api/posts?studio=1").then((r) => r.json()).then((d) => setPosts(d.posts || [])).catch(() => {});
  useEffect(() => { load(); }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const payload = { ...Object.fromEntries(new FormData(formElement).entries()), status: submitter?.value || "draft" };
    setSaving(true); setMessage("");
    const response = await fetch("/api/posts", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json();
    setSaving(false);
    if (response.ok) { setMessage(payload.status === "published" ? t("Материал опубликован") : t("Черновик сохранён")); formElement.reset(); load(); }
    else setMessage(t("Ошибка сохранения"));
  }

  return <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
    <form onSubmit={submit} className="paper-card space-y-5 rounded-[1.5rem] border bg-card p-6 sm:p-8">
      <div><label className="mb-2 block text-sm font-bold" htmlFor="title">{t("Заголовок")}</label><Input id="title" name="title" required placeholder={t("О чём этот материал?")} className="h-11" /></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className="mb-2 block text-sm font-bold" htmlFor="category">{t("Раздел")}</label><Input id="category" name="category" required placeholder={t("Психобиология")} /></div>
        <div><label className="mb-2 block text-sm font-bold" htmlFor="language">{t("Язык")}</label><NativeSelect id="language" name="language" className="w-full"><NativeSelectOption value="ru">Русский</NativeSelectOption><NativeSelectOption value="es">Español</NativeSelectOption><NativeSelectOption value="en">English</NativeSelectOption><NativeSelectOption value="nl">Nederlands</NativeSelectOption></NativeSelect></div>
      </div>
      <div><label className="mb-2 block text-sm font-bold" htmlFor="summary">{t("Краткое описание")}</label><Textarea id="summary" name="summary" required rows={3} placeholder={t("Два–три предложения для карточки материала")} /></div>
      <div><label className="mb-2 block text-sm font-bold" htmlFor="body">{t("Текст")}</label><Textarea id="body" name="body" required rows={12} placeholder={t("Напиши или вставь готовый конспект…")} className="min-h-72" /></div>
      <div className="flex flex-wrap items-center gap-3"><Button type="submit" value="draft" variant="outline" disabled={saving}><Save />{t("Сохранить черновик")}</Button><Button type="submit" value="published" disabled={saving}><Send />{saving ? t("Сохраняю…") : t("Опубликовать")}</Button>{message && <span className="flex items-center gap-2 text-sm font-bold text-[#27644d]"><CheckCircle2 size={17} />{message}</span>}</div>
    </form>
    <aside><h2 className="font-editorial text-2xl font-bold">{t("Последние материалы")}</h2><div className="mt-5 space-y-3">{posts.length ? posts.map((post) => <div key={post.id} className="rounded-xl border bg-[#faf7f0] p-4"><div className="flex justify-between gap-3"><span className="text-xs font-bold uppercase tracking-wider text-[#98722e]">{post.category} · {post.language}</span><span className={`text-xs font-bold ${post.status === "published" ? "text-[#287153]" : "text-muted-foreground"}`}>{post.status === "published" ? t("Опубликовано") : t("Черновик")}</span></div><p className="font-editorial mt-2 text-lg font-bold">{post.title}</p></div>) : <p className="rounded-xl border border-dashed p-5 text-sm leading-6 text-muted-foreground">{t("Здесь появятся твои черновики и опубликованные статьи.")}</p>}</div></aside>
  </div>;
}
