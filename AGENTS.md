# Sensus Vitae — Project Instructions

## 1. Project

Sensus Vitae is a multilingual, non-commercial scientific and educational website:

https://sensusvitae.club

The project focuses on psychology, psychobiology, neuroscience, genetics and behavior, cognitive psychology, motivation, social psychology, research methods, statistics, history and philosophy of psychology, scientific research, and educational materials based on books and authors.

Supported languages:

- Russian (RU)
- Dutch (NL)
- English (EN)
- Spanish (ES)

The website is intended for students and interested readers.

The central educational principle is:

> Make complex scientific knowledge understandable without making it scientifically simplistic.

The site should help readers understand, connect, remember, apply, and critically evaluate scientific knowledge.

---

## 2. Priority hierarchy

When requirements conflict, use this order:

1. Safety and security
2. Law and privacy
3. Scientific accuracy and integrity
4. Preservation of working functionality
5. Accessibility
6. Educational usefulness
7. Mobile usability
8. Maintainability
9. Performance
10. SEO
11. Visual polish
12. Novel features

Never sacrifice a higher-priority requirement merely to improve a lower-priority one.

---

## 3. Protect the working website

Treat the current working Sensus Vitae website as valuable production software.

Do not:

- redesign the website without explicit approval;
- delete existing content without approval;
- change established URLs or routes unnecessarily;
- replace working functionality merely because another implementation seems cleaner;
- overwrite a newer production version with an older repository version;
- refactor unrelated code during a focused task;
- change deployment, domain, hosting, contact infrastructure, or core architecture without approval.

Before making a meaningful change:

1. inspect the current implementation;
2. identify dependencies;
3. identify possible regressions;
4. choose the smallest robust solution.

---

## 4. GitHub and production

GitHub should serve as the long-term source of truth for the project.

Before assuming the repository represents production:

1. compare the repository with the latest working deployed version;
2. identify meaningful differences;
3. protect any production changes that are not yet represented in GitHub;
4. establish a safe baseline before substantial development.

Never commit:

- API keys;
- passwords;
- access tokens;
- Resend secrets;
- environment secrets;
- credentials;
- private visitor data;
- database exports containing personal data.

---

## 5. Multilingual consistency

Important public content and functionality should work consistently in:

RU / NL / EN / ES.

When modifying a shared feature, check all four languages.

The language switcher should preserve the equivalent page whenever an equivalent translation exists.

Do not send the user back to the homepage merely because they change language on a deep content page.

Translations should preserve meaning and scientific accuracy rather than mechanically translating word-for-word.

---

## 6. Mobile first

A feature is not complete if it only works on desktop.

For meaningful changes, check at least:

- navigation;
- language switching;
- article readability;
- images;
- tables;
- glossary;
- quizzes and learning checks;
- forms;
- buttons and touch targets;
- deep content pages.

Avoid unnecessary horizontal scrolling.

---

## 7. Policy files

Before working on a task, read this file completely and then read the policy files relevant to the task.

The project policies are:

- `docs/CONTENT.md` — scientific, editorial, books/authors, NotebookLM and glossary rules
- `docs/LEARNING.md` — active learning, quizzes and educational feedback
- `docs/PRIVACY-LEGAL.md` — GDPR/AVG, copyright, contact form and third-party services
- `docs/ACCESSIBILITY-DESIGN.md` — accessibility, dyslexia-friendly design, mobile and visual identity
- `docs/SEO.md` — technical and editorial SEO
- `docs/ENGINEERING.md` — security, performance, testing, regression prevention and cost control

Do not mechanically apply unrelated policies.

Use the files relevant to the current task.

---

## 8. Stop and ask before proceeding

Stop and request owner approval before implementing anything that introduces or materially changes:

- recurring paid services;
- collection of new personal data;
- analytics, behavioral tracking or advertising;
- third-party data transfers;
- user accounts or authentication;
- payments or subscriptions;
- public-facing AI functionality;
- major redesign;
- domain or hosting configuration;
- contact infrastructure;
- deletion of substantial content;
- framework migration;
- major URL or routing changes;
- legally uncertain functionality.

You may identify and recommend such changes, but do not implement them without approval.

---

## 9. Standard workflow

For meaningful tasks use:

Understand → Assess → Plan → Implement → Test → Review → Report

### Understand
Clarify the actual educational or technical goal.

### Assess
Inspect the current implementation and relevant policies.

### Plan
Choose the smallest maintainable solution and identify possible regressions.

### Implement
Change only what is required.

### Test
Test the requested behavior and representative existing functionality.

### Review
Check scientific integrity, accessibility, privacy, security, mobile behavior and multilingual consistency where relevant.

### Report
Explain clearly:

- what changed;
- what was tested;
- what remains uncertain;
- what requires owner approval.

---

## 10. Definition of done

A task is complete only when, where relevant:

- the requested behavior works;
- existing functionality has not regressed;
- RU/NL/EN/ES have been considered;
- mobile behavior has been checked;
- accessibility requirements have been considered;
- privacy and security requirements have been considered;
- scientific claims remain accurate;
- relevant tests/build checks pass;
- no secrets or private data were introduced;
- the implementation is maintainable;
- the final report is understandable to a non-developer owner.

---

## 11. Long-term direction

Sensus Vitae should evolve into an interconnected multilingual educational knowledge system rather than a collection of isolated pages.

Optimize for:

- understanding;
- scientific quality;
- connections between concepts;
- active learning;
- accessibility;
- trustworthy sourcing;
- long-term maintainability.

Do not optimize primarily for page count, novelty, engagement tricks, or unnecessary features.
