import { testosteroneBookPath, testosteroneCopy } from "@/lib/testosterone-content";
import { clubContent } from "@/lib/club-content";
import { sapolskyContent } from "@/lib/sapolsky-content";
import type { Language } from "@/lib/site-content";

// Shared catalogue records link to canonical reading projects.
export const authors = [{
  slug: "robert-sapolsky",
  image: "/robert-sapolsky.jpg",
  copy: Object.fromEntries((["ru", "nl", "en", "es"] as const).map(lang => [lang, {
    name: clubContent[lang].authorName,
    description: clubContent[lang].authorBlurb,
    imageAlt: clubContent[lang].authorImageAlt,
  }])) as Record<Language, { name: string; description: string; imageAlt: string }>,
  books: [
    { path: "sapolsky", title: (lang: Language) => sapolskyContent[lang].title, description: (lang: Language) => clubContent[lang].items[0][1], metadata: (lang: Language) => ({ru:"18 глав",nl:"18 hoofdstukken",en:"18 chapters",es:"18 capítulos"}[lang]) },
    { path: testosteroneBookPath, title: (lang: Language) => testosteroneCopy[lang].title, description: (lang: Language) => testosteroneCopy[lang].intro, metadata: (lang: Language) => testosteroneCopy[lang].progress },
  ],
}];
