import { ui, type Language } from "@/lib/site-content";

export const reflectionSlug = "behaviour-and-responsibility";
export const discussionCopy: Record<Language, { open: string; context: string; status: string; self: string }> = {
  ru: { open: "Открыть вопрос для размышления", context: "Размышляем о том, как объяснения поведения связаны со свободой выбора, ответственностью и отношением к другим людям.", status: "Обсуждение готовится. Пока здесь можно познакомиться с вопросом и обдумать собственную позицию. Возможность делиться ответами появится позже.", self: "Личность · способности · интересы" },
  nl: { open: "Bekijk de reflectievraag", context: "We verkennen hoe verklaringen van gedrag samenhangen met keuzevrijheid, verantwoordelijkheid en onze omgang met anderen.", status: "Dit gesprek is in voorbereiding. Je kunt alvast over de vraag en je eigen standpunt nadenken. Reacties delen wordt later mogelijk.", self: "Persoonlijkheid · vaardigheden · interesses" },
  en: { open: "Read the reflection question", context: "Consider how explanations of behaviour relate to freedom of choice, responsibility and the way we treat other people.", status: "This discussion is being prepared. For now, explore the question and reflect on your own perspective. The ability to share responses will come later.", self: "Personality · abilities · interests" },
  es: { open: "Abrir la pregunta para reflexionar", context: "Reflexionamos sobre cómo las explicaciones del comportamiento se relacionan con la libertad de elección, la responsabilidad y el trato a los demás.", status: "Este debate está en preparación. Por ahora puedes conocer la pregunta y reflexionar sobre tu postura. Más adelante será posible compartir respuestas.", self: "Personalidad · capacidades · intereses" },
};
export const discussionThreads = [{ slug: reflectionSlug, question: (lang: Language) => ui[lang].questionText }];
