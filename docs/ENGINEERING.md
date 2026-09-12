# Sensus Vitae — Engineering Policy

## 1. Engineering principle

Sensus Vitae should remain:

- secure;
- reliable;
- maintainable;
- lightweight;
- understandable;
- inexpensive to operate.

Prefer the smallest robust implementation that solves the actual problem.

Do not introduce unnecessary architectural complexity.

---

## 2. Secure defaults

Never expose or commit:

- API keys;
- passwords;
- access tokens;
- Resend secrets;
- environment secrets;
- credentials;
- private visitor data;
- sensitive configuration.

Secrets belong in appropriate environment or secret-management systems, never in public frontend code or repository content.

Validate and sanitize external input where relevant.

Use maintained dependencies and secure implementation patterns.

---

## 3. Preserve working functionality

A new feature is not successful if it breaks an existing feature.

Before modifying shared code, identify what depends on it.

When changing:

- navigation, check representative deep pages;
- language handling, check all four languages;
- shared styles, check representative page types;
- responsive layout, check mobile;
- URLs, check internal links and indexing implications;
- reusable components, check existing consumers.

Avoid unrelated refactoring during focused tasks.

---

## 4. Performance

Keep the site lightweight.

Prefer:

- minimal JavaScript;
- optimized images;
- appropriate modern image formats;
- lazy loading where useful;
- stable layouts;
- reusable components;
- efficient asset delivery.

Avoid introducing a heavy framework or library for a minor feature that can reasonably be implemented with the existing architecture.

Do not sacrifice accessibility or educational quality for marginal performance gains.

---

## 5. Dependencies

Before adding a dependency, ask:

1. Is it genuinely necessary?
2. Can the existing project already solve the problem?
3. Is it actively maintained?
4. Does it introduce security risk?
5. Does it introduce privacy implications?
6. Does it significantly increase bundle size?
7. Does it create vendor lock-in?
8. Does it introduce recurring cost?

Prefer existing infrastructure and low-maintenance solutions.

---

## 6. Cost awareness

Sensus Vitae is currently a non-commercial educational project.

Prefer:

- free or open-source tools;
- existing infrastructure;
- low recurring costs;
- low-maintenance solutions.

Do not activate or subscribe to a recurring paid service without explicit owner approval.

If a paid service would materially improve the project, explain:

- the benefit;
- the cost;
- the free or cheaper alternatives;
- the consequences of not using it.

Then wait for approval.

---

## 7. Regression testing

After meaningful changes, test the requested behavior and representative existing functionality.

Relevant regression checks may include:

- build;
- runtime errors;
- navigation;
- deep links;
- RU / NL / EN / ES;
- language switching;
- mobile layout;
- chapter pages;
- Books & Authors;
- glossary;
- quizzes;
- images;
- internal links;
- contact form;
- accessibility basics;
- metadata;
- deployment behavior.

The exact test scope should match the risk of the change.

---

## 8. Multilingual regression

When a shared feature changes, verify representative behavior in:

RU
NL
EN
ES

Do not assume that a component working in English will automatically work with:

- longer Dutch text;
- Cyrillic;
- Spanish diacritics;
- different word lengths;
- translated navigation labels.

Check layout as well as functionality.

---

## 9. Mobile regression

For meaningful frontend changes, verify mobile behavior.

At minimum consider:

- navigation;
- language switching;
- reading width;
- typography;
- images;
- tables;
- forms;
- glossary interactions;
- quizzes;
- buttons;
- media controls where present.

Do not accept desktop-only success as completion.

---

## 10. Learning-component testing

When implementing quizzes or learning checks, verify:

- answer keys;
- correct answers;
- incorrect answers;
- unanswered questions;
- partial completion;
- retry/reset behavior where present;
- educational feedback;
- keyboard interaction;
- mobile interaction;
- accessible state communication;
- all relevant language versions.

Also follow `docs/LEARNING.md`.

---

## 11. Contact-form testing

Treat the existing working contact form carefully.

Do not replace the Resend implementation during unrelated work.

When changes affect the form or shared infrastructure around it, verify:

- successful submission;
- validation;
- accessible errors;
- success state;
- no secret exposure;
- no unnecessary personal-data collection.

Do not send repeated real test emails unnecessarily.

---

## 12. Git and repository safety

Before substantial work:

- inspect repository status;
- understand the current branch;
- identify uncommitted work;
- avoid overwriting newer changes;
- understand whether the repository matches production.

Keep changes focused.

Do not mix unrelated modifications into one task.

Do not commit secrets.

Do not force-push or rewrite shared history without explicit approval.

---

## 13. Production safety

Do not assume that a local or repository version is newer than the deployed website.

Before substantial synchronization or migration work:

1. compare versions;
2. identify differences;
3. preserve newer production changes;
4. establish a safe baseline.

Do not deploy automatically unless the task and owner approval clearly require deployment.

---

## 14. No unrequested features

Do not automatically add:

- user accounts;
- authentication systems;
- leaderboards;
- points;
- badges;
- streaks;
- social feeds;
- advertising;
- subscriptions;
- push notifications;
- public AI chatbots;
- analytics dashboards;
- behavioral tracking.

You may recommend a feature when it clearly supports the educational goal.

Implementation requires owner approval where appropriate.

---

## 15. Maintainability

Prefer code that a future developer or AI agent can understand.

Use:

- clear naming;
- existing project conventions;
- reusable components when genuinely reusable;
- focused functions;
- minimal duplication;
- concise comments where they explain non-obvious decisions.

Do not create abstraction merely for abstraction's sake.

---

## 16. Failure handling

User-facing failures should be understandable.

Avoid exposing:

- stack traces;
- internal paths;
- secret values;
- infrastructure details.

Where practical, fail gracefully.

A broken optional feature should not make the core educational page unusable.

---

## 17. Testing before completion

Before reporting a meaningful task as complete:

1. run the relevant build or validation;
2. test the requested behavior;
3. perform proportionate regression checks;
4. review changed files;
5. verify no secrets or unrelated changes were introduced.

If a relevant test cannot be performed, state that clearly.

Do not claim something was tested when it was not.

---

## 18. Reporting

After meaningful implementation work, report in plain language:

- what changed;
- which files changed;
- what was tested;
- whether the build passed;
- whether all four languages were checked where relevant;
- whether mobile was checked;
- any remaining risks or limitations;
- anything requiring owner approval.

The report should be understandable to a non-developer owner.

---

## 19. Engineering success principle

Good engineering for Sensus Vitae is not the most complicated solution.

It is the solution that preserves the working site, supports learning, respects privacy and accessibility, remains maintainable, and introduces the least unnecessary risk.
