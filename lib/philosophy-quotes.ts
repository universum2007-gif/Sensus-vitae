import type { Language } from './site-content';

// Localized wording supplied by the site owner; sources checked in the primary texts.
type Quote = { text: string; author: string };
export const russellQuote: Record<Language, Quote> = {
  ru: { text: '«Хорошая жизнь — та, что вдохновляется любовью и направляется знанием».', author: 'Бертран Рассел' },
  es: { text: '«La buena vida es aquella inspirada por el amor y guiada por el conocimiento».', author: 'Bertrand Russell' },
  nl: { text: '‘Het goede leven wordt geïnspireerd door liefde en geleid door kennis.’', author: 'Bertrand Russell' },
  en: { text: '“The good life is one inspired by love and guided by knowledge.”', author: 'Bertrand Russell' },
};
export const russellSource = { title: 'What I Believe', year: 1925, href: 'https://www.gutenberg.org/files/73782/73782-h/73782-h.htm' };

export const spinozaQuote: Record<Language, Quote> = {
  ru: { text: '«Не высмеивать, не оплакивать, не проклинать, а понимать».', author: 'Бенедикт Спиноза' },
  es: { text: '«No ridiculizar, no lamentar, no detestar, sino comprender».', author: 'Baruch Spinoza' },
  nl: { text: '‘Niet bespotten, niet betreuren, niet verafschuwen, maar begrijpen.’', author: 'Baruch Spinoza' },
  en: { text: '“Not to ridicule, not to lament, not to detest, but to understand.”', author: 'Baruch Spinoza' },
};
export const spinozaSource = {
  title: { ru: 'Политический трактат', es: 'Tratado político', nl: 'Politiek traktaat', en: 'Political Treatise' },
  section: 'I, §4',
  href: 'https://constitution.org/2-Authors/bs/poltr_01.htm',
};
