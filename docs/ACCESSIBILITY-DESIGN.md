# Sensus Vitae — Accessibility and Design Policy

## 1. Design identity

Sensus Vitae should feel:

- calm;
- academic;
- contemporary;
- warm;
- intelligent;
- trustworthy.

The website should not feel like:

- a sales funnel;
- a commercial clinic;
- a children's learning platform;
- a generic AI-generated website;
- an advertising portal.

Preserve the established Sensus Vitae visual identity unless a redesign is explicitly approved.

---

## 2. Accessibility target

Aim for WCAG 2.2 AA where reasonably achievable.

Accessibility should be considered during design and implementation rather than treated as a final cosmetic check.

Important areas include:

- semantic HTML;
- keyboard navigation;
- visible focus states;
- sufficient contrast;
- text resizing;
- heading hierarchy;
- form labels;
- meaningful link text;
- screen-reader compatibility;
- alternative text for meaningful images;
- reduced-motion preferences;
- sufficiently large touch targets.

Do not rely on color alone to communicate meaning.

---

## 3. Dyslexia-friendly presentation

Sensus Vitae should be especially comfortable for readers who may have dyslexia or difficulty reading dense academic text.

Prefer:

- clear body typography;
- comfortable font size;
- generous line height;
- reasonable line length;
- clear paragraph spacing;
- predictable navigation;
- strong heading hierarchy;
- visual chunking;
- manageable paragraph length;
- lists and tables when they genuinely improve comprehension.

Avoid:

- decorative fonts for body text;
- excessive italics;
- excessive ALL CAPS;
- dense walls of text;
- unnecessarily narrow line spacing;
- visually confusing layouts.

Dyslexia-friendly design does not mean oversimplifying scientific content.

Improve presentation, not intellectual depth.

---

## 4. Reading hierarchy

Long educational articles should be easy to scan without losing conceptual structure.

Use:

- one clear page title;
- logical heading levels;
- short descriptive section headings;
- callouts only when they add educational value;
- adequate whitespace;
- consistent visual patterns.

Do not use headings merely for visual size.

Maintain semantic heading order.

---

## 5. Mobile-first design

All important educational functionality must work on mobile.

Check:

- navigation;
- menus;
- language switcher;
- article layout;
- images;
- captions;
- tables;
- glossary interactions;
- quizzes;
- forms;
- buttons;
- audio/video controls when present.

Avoid unnecessary horizontal scrolling.

If a table cannot fit comfortably on a small screen, use an accessible responsive treatment rather than shrinking text to an unreadable size.

---

## 6. Images and scientific illustrations

Scientific illustrations should support understanding.

Prefer:

- one central educational idea per illustration;
- restrained visual complexity;
- clear hierarchy;
- limited text inside images;
- meaningful scientific metaphors;
- consistent visual language.

Long explanations should normally remain in HTML text rather than being embedded inside an image.

Meaningful images require useful alternative text.

Decorative images should not create unnecessary screen-reader noise.

Do not use an image merely to fill empty space.

---

## 7. Sensus Vitae illustration style

Where new educational illustrations are created, prefer a calm, editorial, scientific style consistent with the existing project.

Avoid:

- sensational medical imagery;
- excessive visual effects;
- generic corporate stock imagery;
- childish educational graphics;
- unnecessary logos inside illustrations;
- large amounts of text embedded in images.

Illustrations should complement the article rather than compete with it.

---

## 8. Forms

Forms must have:

- explicit labels;
- clear instructions where necessary;
- accessible error messages;
- keyboard usability;
- visible focus;
- understandable success states.

Do not use placeholder text as the only label.

Errors should explain how to correct the problem.

---

## 9. Interactive learning components

Glossaries, quizzes and other educational interactions must remain usable:

- with a keyboard;
- with touch;
- on small screens;
- with assistive technology where practical.

Interactive targets should be large enough to use comfortably.

State changes should be communicated accessibly.

For quiz-specific rules, also follow `docs/LEARNING.md`.

---

## 10. Motion and animation

Use animation sparingly.

Do not make important educational information dependent on animation.

Respect reduced-motion preferences where relevant.

Avoid unnecessary movement that distracts from reading or learning.

---

## 11. Language and typography

RU / NL / EN / ES must remain readable and visually consistent.

Check that chosen fonts properly support:

- Cyrillic;
- Latin characters;
- Spanish diacritics;
- Dutch text.

Do not allow translation length differences to break:

- buttons;
- menus;
- cards;
- headings;
- mobile layouts.

---

## 12. Accessibility regression

When modifying shared styles, navigation, typography or reusable components, check representative existing pages.

A visual improvement is not successful if it makes another language, page type or device less accessible.

---

## 13. Design decision principle

When choosing between visual novelty and educational clarity, choose educational clarity.

When choosing between compactness and comfortable reading, prefer comfortable reading unless space is genuinely constrained.

The design should make serious scientific material easier to approach without making it look simplistic.
