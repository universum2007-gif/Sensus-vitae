import { desc } from "drizzle-orm";
import { env } from "cloudflare:workers";
import { getDb } from "@/db";
import { contactMessages } from "@/db/schema";
import { getAuthor } from "@/lib/author";

const languages = new Set(["ru", "es", "en", "nl"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NotificationEnv = {
  RESEND_API_KEY?: string;
  CONTACT_NOTIFICATION_TO?: string;
  CONTACT_NOTIFICATION_FROM?: string;
};

async function sendContactNotification(data: {
  name: string;
  email: string;
  topic: string;
  message: string;
  language: string;
}) {
  const notificationEnv = env as unknown as NotificationEnv;
  const apiKey = notificationEnv.RESEND_API_KEY;
  const to = notificationEnv.CONTACT_NOTIFICATION_TO;
  const from = notificationEnv.CONTACT_NOTIFICATION_FROM;

  if (!apiKey || !to || !from) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Новое сообщение с Sensus Vitae: ${data.topic}`,
      text: [
        "Новое сообщение через форму Sensus Vitae",
        "",
        `Имя: ${data.name}`,
        `Email: ${data.email}`,
        `Язык сайта: ${data.language}`,
        `Тема: ${data.topic}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend rejected the notification (${response.status}): ${details}`);
  }

  return true;
}

export async function GET() {
  if (!(await getAuthor())) return Response.json({ error: "Нет доступа" }, { status: 403 });
  try {
    const messages = await getDb().select().from(contactMessages).orderBy(desc(contactMessages.createdAt)).limit(100);
    return Response.json({ messages });
  } catch {
    return Response.json({ messages: [], unavailable: true }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as Record<string, string>;
    if (data.website?.trim()) return Response.json({ ok: true }, { status: 201 });
    const name = data.name?.trim();
    const email = data.email?.trim().toLowerCase();
    const topic = data.topic?.trim();
    const message = data.message?.trim();
    const language = languages.has(data.language) ? data.language : "ru";
    if (!name || !email || !topic || !message) return Response.json({ error: "Заполните все обязательные поля" }, { status: 400 });
    if (!emailPattern.test(email)) return Response.json({ error: "Проверьте адрес электронной почты" }, { status: 400 });
    if (name.length > 100 || email.length > 254 || topic.length > 120 || message.length > 5000) return Response.json({ error: "Сообщение слишком длинное" }, { status: 400 });
    await getDb().insert(contactMessages).values({ name, email, topic, message, language });

    let notificationSent = false;
    try {
      notificationSent = await sendContactNotification({ name, email, topic, message, language });
    } catch (error) {
      console.error("Contact notification failed", error);
    }

    return Response.json({ ok: true, notificationSent }, { status: 201 });
  } catch {
    return Response.json({ error: "Не удалось отправить сообщение. Попробуйте ещё раз." }, { status: 500 });
  }
}
