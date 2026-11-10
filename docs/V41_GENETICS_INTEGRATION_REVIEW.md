# v41 + psychiatric genetics lesson: integration review

## Isolated source

Integration branch: `work/v41-nature-lesson-integration-2026-10-12`.
Parent: PR #3 HEAD `d8f7a8a091a1bd3644ae999c699aa0832d12fa2c`, tree `93756d14b2b2c836839fb135f9c1562848c4a5d6`.

Only the checked lesson delta relative to the common v40 source `52d83bcb1280173e878e14fc2bec66526fe2b5f8` was applied. No merge, cherry-pick of unrelated changes, reset of an existing checkout, or update to PR #3 / PR #5 / main occurred.

Original lesson: PR #5 `8c26bdfe82dd21ece5eebb3320fc603e55c1684c`.
Mobile fix: branch `work/nature-14-disorders-mobile-2026-10-12`, GitHub commit `dc27a570f24ffe6fca93d4804d99b4d702c95016`, tree `bc93e49aa5f673b8e6c6ae5a7982372faa8ceb4b`.

All 45 paths changed by v41 relative to the common baseline are byte-identical to PR #3 HEAD. All 17 lesson paths in the reviewed mobile tree were transferred exactly. The path sets are disjoint. This integration adds only those lesson paths and this review note to PR #3's tree.

The Draft PR targets the PR #3 branch so reviewers see the lesson delta. Creating it does not modify PR #3. It must not be merged without separate owner permission.

## Mobile diagrams

Cell-diagram numbers use 14px HTML text in 24px badges; they do not shrink with the SVG. The biology illustrations have independent RU/ES/NL/EN enlarge/reduce controls. Enlarging keeps the illustration at least 640px wide inside a horizontal scroll region. The viewport receives focus, ARIA-expanded/control/description relationships identify its state, and reducing returns focus to the button. Native scrolling supports touch and keyboard. Existing localized HTML labels and SVG alt descriptions remain.

No dialog, focus trap, new library dependency, external image request, answer storage or tracking was added. The controls do not change lesson text, MathML or quiz answers.

## Verified integrated behavior

- Production build exited successfully, reported Build complete, and generated Worker/client artifacts.
- All 37 repository tests passed (no skipped tests), including v41 Data Analysis coverage, Psicobiología, lesson routes, source integrity and existing navigation regressions.
- RU/ES/NL/EN lesson pages, Data Analysis chapter 1, Psicobiología chapter 1 and navigation checked by the runtime tests.
- Nine lesson sections, four MathML formulas, three scientific SVG illustrations, 15 glossary definitions and four-question answer bank retained.
- 108 quiz DOM assertions passed across the four languages: incomplete/partial attempts, 0/4, 4/4, 3/4, all feedback, locking, reset and focus.
- 84 figure-zoom DOM assertions passed across the four languages: two independent controls, localized names, unique IDs, expansion/collapse, 640px minimum width, status description and focus restoration.
- Responsive classes and overflow treatment checked structurally; diagram marker font size remains constant instead of scaling to 5–7px on a narrow phone.
- General `tsc --noEmit` reports the same existing errors in unchanged Cloudflare runtime typings and `lib/article-translations.ts`; no new lesson file appears in diagnostics.
- No runtime dependencies or hosting-manifest changes.

## Remaining release blockers

Actual browser/device layout, real keyboard scrolling and assistive-technology testing are still unverified: the required browser-control capability is unavailable. DOM checks do not substitute for those checks. Before publishing, visually inspect 320/390px phones, a 768px tablet and a desktop, including enlarged scroll regions.

The previous Sites publish-on-push window remains unproven closed. No workaround or new Sites write credential was used. Source tree has no `.github` workflow files; writes in this task are to separate GitHub branches through the GitHub connector, not the independent Sites source repository. No push to Sites, Save Version or deployment was performed. The integration is an unpublished release candidate.

Before any production operation: obtain documented closure/expiry evidence for the last window (or platform support confirmation), refresh production/source identities, confirm the saved rollback archive, approve the exact integrated tree and explicitly authorize the separate Sites synchronization/save/deploy steps. Preserve D1/DNS/Cloudflare/user data and existing audience. The next Sites version number is assigned by the platform, not assumed from a branch name.
