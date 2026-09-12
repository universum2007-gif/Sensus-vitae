import Link from "next/link";
import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/site-content";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";

const copy = {
  ru: {
    eyebrow: "КОНФИДЕНЦИАЛЬНОСТЬ",
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 12 сентября 2026 года",
    intro: "Эта политика описывает, как Sensus Vitae в настоящее время обрабатывает данные, отправленные через контактную форму.",
    sections: [
      ["О Sensus Vitae", ["Sensus Vitae — некоммерческий научно-образовательный сайт для студентов и заинтересованных читателей. Контактными сообщениями управляет владелец сайта."]],
      ["Какие данные собирает контактная форма", ["Когда вы отправляете сообщение, форма собирает имя, адрес электронной почты, тему, текст сообщения и язык страницы. Контактная система также добавляет время отправки.", "Эти данные используются только для получения, хранения, обработки сообщения и ответа на него. Адрес электронной почты необходим, чтобы владелец сайта мог вам ответить."]],
      ["Хранение и доставка электронной почты", ["Контактное сообщение сохраняется в базе данных D1 сайта и доступно владельцу через защищённый редакторский раздел.", "Для доставки уведомления необходимые данные сообщения — имя, адрес электронной почты, язык, тема и текст — передаются через существующую систему Resend и настроенный почтовый ящик."]],
      ["Без рекламы и продажи данных", ["Sensus Vitae в настоящее время не использует рекламу, поведенческое отслеживание или аналитику в связи с контактной формой. Данные из контактных сообщений не продаются."]],
      ["Защита информации", ["Применяются разумные технические меры: секреты почтовой системы хранятся на сервере, контактный раздел требует авторизации, а доступ к сообщениям ограничен владельцем сайта. Ни одна интернет-система не может гарантировать абсолютную безопасность."]],
      ["Срок хранения", ["Срок хранения контактных сообщений сейчас пересматривается. На данный момент фиксированный срок автоматического удаления не установлен. Эта политика не обещает срок, который ещё не утверждён."]],
      ["Вопросы о ваших данных", ["Чтобы задать вопрос о своих данных или запросить их просмотр, исправление либо удаление, используйте контактную форму и укажите, что обращение касается персональных данных. Для поиска сообщения может потребоваться адрес электронной почты и примерная дата отправки."]],
    ],
    contact: "Перейти к контактной форме",
  },
  nl: {
    eyebrow: "PRIVACY",
    title: "Privacyverklaring",
    updated: "Laatst bijgewerkt: 12 september 2026",
    intro: "Deze verklaring beschrijft hoe Sensus Vitae momenteel omgaat met gegevens die via het contactformulier worden verzonden.",
    sections: [
      ["Over Sensus Vitae", ["Sensus Vitae is een niet-commerciële wetenschappelijke en educatieve website voor studenten en geïnteresseerde lezers. De eigenaar van de website beheert de contactberichten."]],
      ["Welke gegevens het contactformulier verzamelt", ["Wanneer je een bericht verstuurt, verzamelt het formulier je naam, e-mailadres, onderwerp, bericht en de taal van de pagina. Het contactsysteem voegt ook het tijdstip van verzending toe.", "Deze gegevens worden alleen gebruikt om het bericht te ontvangen, op te slaan, te behandelen en te beantwoorden. Het e-mailadres is nodig zodat de eigenaar van de website kan antwoorden."]],
      ["Opslag en e-mailbezorging", ["Het contactbericht wordt opgeslagen in de D1-database van de website en is voor de eigenaar toegankelijk via een beveiligde redactieruimte.", "Om een melding te bezorgen, worden de noodzakelijke berichtgegevens — naam, e-mailadres, taal, onderwerp en bericht — verwerkt via het bestaande Resend-systeem en de ingestelde mailbox."]],
      ["Geen advertenties of verkoop van gegevens", ["Sensus Vitae gebruikt momenteel geen advertenties, gedragstracking of analytics in verband met het contactformulier. Gegevens uit contactberichten worden niet verkocht."]],
      ["Beveiliging van informatie", ["Er worden redelijke technische maatregelen gebruikt: geheimen van het e-mailsysteem blijven op de server, de contactomgeving vereist autorisatie en alleen de eigenaar heeft toegang tot de berichten. Geen enkel internetsysteem kan absolute veiligheid garanderen."]],
      ["Bewaartermijn", ["De bewaartermijn voor contactberichten wordt momenteel beoordeeld. Er is op dit moment geen vaste termijn voor automatische verwijdering. Deze verklaring belooft geen termijn die nog niet is vastgesteld."]],
      ["Vragen over je gegevens", ["Gebruik het contactformulier om een vraag te stellen over je gegevens of om inzage, correctie of verwijdering te verzoeken. Vermeld dat het verzoek persoonsgegevens betreft. Om het bericht terug te vinden, kunnen het e-mailadres en de geschatte verzenddatum nodig zijn."]],
    ],
    contact: "Naar het contactformulier",
  },
  en: {
    eyebrow: "PRIVACY",
    title: "Privacy Policy",
    updated: "Last updated: 12 September 2026",
    intro: "This policy describes how Sensus Vitae currently handles information submitted through the contact form.",
    sections: [
      ["About Sensus Vitae", ["Sensus Vitae is a non-commercial scientific and educational website for students and interested readers. Contact messages are managed by the website owner."]],
      ["Information collected by the contact form", ["When you send a message, the form collects your name, email address, subject, message and the language of the page. The contact system also adds the submission time.", "This information is used only to receive, store, handle and respond to the message. The email address is needed so that the website owner can reply."]],
      ["Storage and email delivery", ["The contact message is stored in the website’s D1 database and is available to the owner through a protected editor area.", "To deliver a notification, the necessary message information — name, email address, language, subject and message — is processed through the existing Resend system and the configured email mailbox."]],
      ["No advertising or sale of data", ["Sensus Vitae does not currently use advertising, behavioural tracking or analytics in connection with the contact form. Contact-message information is not sold."]],
      ["Protecting the information", ["Reasonable technical measures are used: email-system secrets remain on the server, the contact area requires authorisation, and access to messages is restricted to the website owner. No internet system can guarantee absolute security."]],
      ["Retention", ["The retention period for contact messages is currently under review. No fixed automatic deletion period has yet been established. This policy does not promise a period that has not been approved."]],
      ["Questions about your information", ["Use the contact form to ask about your information or request access, correction or deletion. State that the request concerns personal data. The email address and approximate submission date may be needed to locate the message."]],
    ],
    contact: "Go to the contact form",
  },
  es: {
    eyebrow: "PRIVACIDAD",
    title: "Política de privacidad",
    updated: "Última actualización: 12 de septiembre de 2026",
    intro: "Esta política describe cómo Sensus Vitae trata actualmente la información enviada mediante el formulario de contacto.",
    sections: [
      ["Sobre Sensus Vitae", ["Sensus Vitae es un sitio web científico y educativo sin fines comerciales para estudiantes y lectores interesados. La persona propietaria del sitio gestiona los mensajes de contacto."]],
      ["Información que recoge el formulario", ["Cuando envías un mensaje, el formulario recoge tu nombre, dirección de correo electrónico, asunto, mensaje y el idioma de la página. El sistema de contacto también añade la hora de envío.", "Esta información se utiliza únicamente para recibir, guardar, gestionar y responder al mensaje. La dirección de correo electrónico es necesaria para que la persona propietaria del sitio pueda responder."]],
      ["Almacenamiento y entrega por correo electrónico", ["El mensaje de contacto se guarda en la base de datos D1 del sitio y está disponible para la persona propietaria mediante un área editorial protegida.", "Para entregar una notificación, los datos necesarios del mensaje — nombre, dirección de correo electrónico, idioma, asunto y mensaje — se procesan mediante el sistema existente de Resend y el buzón de correo configurado."]],
      ["Sin publicidad ni venta de datos", ["Sensus Vitae no utiliza actualmente publicidad, seguimiento del comportamiento ni analítica en relación con el formulario de contacto. La información de los mensajes no se vende."]],
      ["Protección de la información", ["Se aplican medidas técnicas razonables: los secretos del sistema de correo permanecen en el servidor, el área de contacto requiere autorización y el acceso a los mensajes está limitado a la persona propietaria del sitio. Ningún sistema de internet puede garantizar una seguridad absoluta."]],
      ["Conservación", ["El periodo de conservación de los mensajes de contacto se está revisando. Actualmente no se ha establecido un plazo fijo de eliminación automática. Esta política no promete un plazo que todavía no haya sido aprobado."]],
      ["Preguntas sobre tus datos", ["Utiliza el formulario de contacto para preguntar por tus datos o solicitar acceso, corrección o eliminación. Indica que la solicitud se refiere a datos personales. Para localizar el mensaje pueden ser necesarios la dirección de correo electrónico y la fecha aproximada de envío."]],
    ],
    contact: "Ir al formulario de contacto",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "privacy", ...pageMetadataCopy.privacy[lang] });
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const content = copy[lang];

  return <main className="mx-auto max-w-3xl px-5 py-14">
    <p className="text-xs font-bold tracking-[.18em] text-[#98722e]">{content.eyebrow}</p>
    <h1 className="font-editorial mt-4 text-4xl font-bold sm:text-5xl">{content.title}</h1>
    <p className="mt-3 text-sm text-muted-foreground">{content.updated}</p>
    <p className="mt-6 text-lg leading-8 text-[#53655c]">{content.intro}</p>
    <article className="paper-card mt-8 space-y-8 rounded-[1.7rem] border bg-card px-6 py-9 sm:px-10 sm:py-12">
      {content.sections.map(([heading, paragraphs]) => <section key={heading}>
        <h2 className="font-editorial text-2xl font-bold">{heading}</h2>
        <div className="mt-3 space-y-3 leading-7 text-[#40564b]">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>)}
      <Link href={`/${lang}/contact`} className="inline-flex rounded-full border px-5 py-2.5 text-sm font-bold text-[#174f3c] hover:bg-secondary">{content.contact}</Link>
    </article>
  </main>;
}
