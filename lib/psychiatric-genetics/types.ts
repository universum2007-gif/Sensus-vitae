export type LessonQuestion = { question: string; choices: string[]; correctIndex: number; explanation: string; section: string };
export type GeneticsLesson = {
  title: string; summary: string; category: string; science: string; club: string;
  date: string; contents: string; headings: string[];
  intro: string[]; research: string[]; metrics: string[];
  factorsIntro: string; factors: { title: string; text: string }[]; factorsNote: string;
  variance: string[]; varianceLabels: string[];
  gwas: string[]; steps: string[]; exampleLabel: string; tableHeaders: string[]; tableGroups: string[];
  stats: { title: string; paragraphs: string[] }[];
  biology: { title: string; paragraphs: string[]; labels: string[]; alt: string }[]; biologyNote: string;
  life: string[]; diagnosesTitle: string; diagnoses: string;
  limitsTitle: string; limits: string[]; conclusionTitle: string; conclusion: string;
  quizIntro: string; quiz: LessonQuestion[];
  quizCopy: { submit: string; reset: string; correct: string; incorrect: string; answer: string; score: string; complete: string; review: string; privacy: string };
  glossaryHeaders: string[]; glossary: string[][]; sourceTitle: string; sourcesNote: string; heroAlt: string; figureNote: string;
};
