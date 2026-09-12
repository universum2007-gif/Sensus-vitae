"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Language } from "@/lib/site-content";

const copy = {
  ru:{name:"Имя",email:"Электронная почта",topic:"Тема",message:"Сообщение",nameHint:"Как к вам обращаться?",emailHint:"Чтобы я могла ответить",topicHint:"Вопрос, материал или сотрудничество",messageHint:"Напишите ваш вопрос или предложение…",consent:"Я согласен(на), что мои данные будут использованы только для ответа на это сообщение.",send:"Отправить",sending:"Отправляю…",successTitle:"Сообщение успешно отправлено",success:"Спасибо! Я получила ваше сообщение и смогу ответить по указанной электронной почте.",errorTitle:"Сообщение не отправлено",error:"Не удалось отправить сообщение. Проверьте соединение и попробуйте ещё раз."},
  es:{name:"Nombre",email:"Correo electrónico",topic:"Asunto",message:"Mensaje",nameHint:"¿Cómo te llamas?",emailHint:"Para poder responderte",topicHint:"Pregunta, material o colaboración",messageHint:"Escribe tu pregunta o propuesta…",consent:"Acepto que mis datos se utilicen únicamente para responder a este mensaje.",send:"Enviar",sending:"Enviando…",successTitle:"Mensaje enviado correctamente",success:"¡Gracias! He recibido tu mensaje y podré responder al correo indicado.",errorTitle:"El mensaje no se ha enviado",error:"No se pudo enviar el mensaje. Comprueba la conexión e inténtalo de nuevo."},
  en:{name:"Name",email:"Email",topic:"Subject",message:"Message",nameHint:"How should I address you?",emailHint:"So I can reply",topicHint:"Question, study material or collaboration",messageHint:"Write your question or idea…",consent:"I agree that my details may be used only to reply to this message.",send:"Send message",sending:"Sending…",successTitle:"Message sent successfully",success:"Thank you! I have received your message and can reply to the email address provided.",errorTitle:"Message not sent",error:"The message could not be sent. Check your connection and try again."},
  nl:{name:"Naam",email:"E-mail",topic:"Onderwerp",message:"Bericht",nameHint:"Hoe mag ik je aanspreken?",emailHint:"Zodat ik kan antwoorden",topicHint:"Vraag, studiemateriaal of samenwerking",messageHint:"Schrijf je vraag of voorstel…",consent:"Ik ga ermee akkoord dat mijn gegevens alleen worden gebruikt om op dit bericht te antwoorden.",send:"Versturen",sending:"Versturen…",successTitle:"Bericht succesvol verzonden",success:"Bedankt! Ik heb je bericht ontvangen en kan antwoorden via het opgegeven e-mailadres.",errorTitle:"Bericht niet verzonden",error:"Het bericht kon niet worden verzonden. Controleer je verbinding en probeer het opnieuw."},
} as const;

export function ContactForm({ lang }: { lang: Language }) {
  const t=copy[lang];
  const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
  const [error,setError]=useState("");
  async function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault(); const form=event.currentTarget; setStatus("sending"); setError("");
    try{const payload={...Object.fromEntries(new FormData(form).entries()),language:lang};const response=await fetch("/api/contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)});const data=await response.json();if(!response.ok)throw new Error(t.error);form.reset();setStatus("success");}
    catch(reason){setError(t.error);setStatus("error");}
  }
  return <form onSubmit={submit} className="paper-card space-y-5 rounded-[1.5rem] border bg-card p-6 sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <div><label htmlFor="contact-name" className="mb-2 block text-sm font-bold">{t.name}</label><Input id="contact-name" name="name" required maxLength={100} autoComplete="name" placeholder={t.nameHint}/></div>
      <div><label htmlFor="contact-email" className="mb-2 block text-sm font-bold">{t.email}</label><Input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder={t.emailHint}/></div>
    </div>
    <div><label htmlFor="contact-topic" className="mb-2 block text-sm font-bold">{t.topic}</label><Input id="contact-topic" name="topic" required maxLength={120} placeholder={t.topicHint}/></div>
    <div><label htmlFor="contact-message" className="mb-2 block text-sm font-bold">{t.message}</label><Textarea id="contact-message" name="message" required maxLength={5000} rows={8} placeholder={t.messageHint} className="min-h-44"/></div>
    <div className="hidden" aria-hidden="true"><label htmlFor="contact-website">Website</label><Input id="contact-website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"><input type="checkbox" required className="mt-1 size-4 accent-[#174f3c]"/>{t.consent}</label>
    <Button type="submit" disabled={status==="sending"}><Send/>{status==="sending"?t.sending:t.send}</Button>
    <div aria-live="polite">
      {status==="success"&&<div role="status" className="rounded-2xl border border-[#76a88f] bg-[#e8f3ec] p-5 text-[#174f3c]"><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0" size={24}/><div><p className="font-editorial text-xl font-bold">{t.successTitle}</p><p className="mt-2 leading-6">{t.success}</p></div></div></div>}
      {status==="error"&&<div role="alert" className="rounded-2xl border border-[#c98b8b] bg-[#f9eaea] p-5 text-[#7f2929]"><div className="flex items-start gap-3"><AlertCircle className="mt-0.5 shrink-0" size={24}/><div><p className="font-editorial text-xl font-bold">{t.errorTitle}</p><p className="mt-2 leading-6">{error||t.error}</p></div></div></div>}
    </div>
  </form>;
}
