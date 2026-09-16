import type { Language } from "@/lib/site-content";

// Add only verified books and existing chapter routes; an empty list is planned content.
export type AcademicBook = {
  id: string;
  title: Record<Language, string>;
  chapters: { number: number; title: Record<Language, string>; path: string }[];
};
export const academicSubjects: { slug: string; categoryIndex: number; books: AcademicBook[] }[] = [
  { slug: "psychobiology", categoryIndex: 0, books: [] },
  { slug: "data-analysis", categoryIndex: 1, books: [] },
  { slug: "research-methods", categoryIndex: 2, books: [] },
  { slug: "motivation", categoryIndex: 3, books: [] },
  { slug: "social-psychology", categoryIndex: 4, books: [] },
  { slug: "history-of-psychology", categoryIndex: 5, books: [] },
];
