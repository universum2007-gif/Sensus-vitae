# Sensus Vitae — Privacy, Legal and Copyright Policy

## 1. General principle

Sensus Vitae is a non-commercial scientific and educational website intended primarily for users in Europe.

Privacy, data protection and copyright should be considered by design, not added only after a feature is built.

When legal requirements are uncertain or may have changed, do not guess.

Flag the issue for owner review and, where appropriate, verify the current official EU or Dutch guidance before implementation.

---

## 2. GDPR / AVG principles

When personal data is processed, follow the principles of the GDPR / AVG:

- lawfulness, fairness and transparency;
- purpose limitation;
- data minimization;
- accuracy where relevant;
- storage limitation;
- integrity and confidentiality;
- accountability.

Collect only the personal data genuinely necessary for the intended function.

Do not collect data merely because it might be useful later.

---

## 3. Contact form and Resend

The existing Sensus Vitae contact form uses Resend and currently works.

Do not replace or materially redesign the working contact infrastructure without a clear reason and owner approval.

The contact form should request only the minimum information necessary to receive and respond to a message.

Do not expose:

- Resend API keys;
- credentials;
- environment secrets;
- private configuration;
- visitor messages;
- personal contact data.

Secrets must never be committed to GitHub or exposed in client-side code.

If contact-form data handling changes, check whether the Privacy Policy also needs updating.

---

## 4. Tracking, analytics and cookies

Default to privacy-preserving operation.

Do not automatically add:

- Google Analytics;
- Meta Pixel;
- advertising trackers;
- behavioral analytics;
- heatmaps;
- session recording;
- fingerprinting;
- cross-site tracking;
- advertising cookies.

Before introducing non-essential tracking, report to the owner:

1. what would be collected;
2. why it is needed;
3. where the data would be sent;
4. which third parties would receive it;
5. whether consent is required;
6. whether international data transfers are involved;
7. whether a more privacy-preserving alternative exists.

Do not use dark patterns to obtain consent.

Rejecting optional tracking should be as understandable and practical as accepting it.

---

## 5. Third-party services

Before adding a new external service, script, embed, font provider, analytics service, AI provider or other third-party dependency, assess:

- privacy;
- cookies and local storage;
- security;
- personal-data transfers;
- international transfers where relevant;
- accessibility;
- performance;
- recurring cost;
- vendor dependency;
- whether the feature can be implemented without the third party.

Do not introduce a third-party service merely for convenience if the existing project can reasonably provide the functionality itself.

---

## 6. External media

External video, audio and other embedded media may create privacy or tracking implications.

Where appropriate, prefer:

- privacy-enhanced embedding;
- click-to-load mechanisms;
- locally hosted media;
- or another privacy-preserving approach.

Do not automatically embed Google Drive, YouTube, NotebookLM or other third-party content without checking the privacy and technical implications.

The educational page should remain understandable even if external media is unavailable.

---

## 7. Privacy Policy

The site's Privacy Policy must describe the actual data processing performed by the website.

Do not add generic boilerplate describing tools or data collection that the site does not actually use.

When functionality changes in a way that affects personal data, cookies, third parties, storage or communication, flag whether the Privacy Policy requires an update.

---

## 8. Copyright

Assume third-party:

- books;
- articles;
- images;
- illustrations;
- photographs;
- diagrams;
- videos;
- audio;
- substantial text;

are protected by copyright unless there is a clear reason to conclude otherwise.

Prefer:

- original Sensus Vitae explanations;
- original summaries and commentary;
- original diagrams and illustrations;
- public-domain material;
- properly licensed material;
- media with verified reuse permission.

Do not copy an image merely because it is publicly visible online.

---

## 9. Quotations and educational use

Use quotations only when they serve a genuine educational, critical, analytical or explanatory purpose.

Keep quotations proportionate to that purpose.

Clearly identify the source and author where required.

Do not reproduce substantial parts of a protected work under the assumption that educational intent automatically makes reproduction lawful.

Book summaries and educational commentary should follow the independent-content rules in `docs/CONTENT.md`.

If a planned use is legally uncertain, flag it rather than silently assuming an exception applies.

---

## 10. AI-generated and AI-assisted content

AI-generated text, images, audio or video may be used when appropriate, but AI generation does not remove the need to check:

- copyright;
- scientific accuracy;
- attribution;
- privacy;
- third-party terms;
- publication rights.

Do not deliberately imitate the distinctive style of a living artist.

When AI tools summarize protected material, review the final publication for excessive reproduction or overly close reconstruction.

---

## 11. Sensitive and health-related data

Do not introduce functionality that collects sensitive personal data without explicit owner approval and a fresh privacy/legal assessment.

This includes, where relevant:

- health information;
- psychological profiles;
- diagnoses;
- biometric data;
- political or religious information;
- sexual-life information;
- other special-category personal data.

Sensus Vitae educational psychology content should not require visitors to disclose sensitive personal information.

---

## 12. Features requiring fresh legal/privacy review

Before implementing any of the following, stop and request approval and a fresh review:

- user accounts;
- profiles;
- payments;
- subscriptions;
- advertising;
- behavioral profiling;
- public user-generated content;
- public-facing AI chat;
- storage of quiz or learning profiles;
- health-data collection;
- services directed specifically at children;
- automated decision-making affecting users;
- new marketing or tracking systems.

Do not assume that the current legal setup automatically covers future functionality.

---

## 13. Accessibility and consumer protection

Do not use manipulative interface patterns.

Important privacy and consent information should be understandable and accessible.

Where applicable, consider current European accessibility and consumer-protection requirements alongside GDPR/AVG.

The project should aim for accessible design even where a particular legal accessibility obligation may not strictly apply.

---

## 14. Security and privacy by design

Use secure and privacy-preserving defaults.

Do not expose private information in:

- source code;
- browser bundles;
- HTML;
- URLs;
- logs;
- error messages;
- public repositories.

Minimize retention of personal information.

Do not create unnecessary copies of visitor data.

---

## 15. Legal uncertainty

EU and Dutch digital law evolves.

Do not present this policy file as a substitute for professional legal advice.

When a new feature materially changes data processing, commercial activity, platform functionality or legal risk:

1. identify the issue;
2. stop before implementation when necessary;
3. verify current authoritative guidance;
4. explain the practical implications to the owner;
5. request approval before proceeding.
