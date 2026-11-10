# Tema 1: full four-language study guide

Review baseline: GitHub commit `52d83bcb1280173e878e14fc2bec66526fe2b5f8`, tree `db93b8521958883b79fc99faee71addddb189f81`. This tree was verified identical to published Sites v40. The working branch starts from that commit, not `main`.

The Spanish body comes from the approved 34-page `Tema_1_Analisis_Datos_ES.pdf`. RU, NL and EN translate the complete approved body. Each locale retains 12 teaching sections, 15 tables, eight graphs, 18 exercises with complete solutions, 26 expandable learning checks/solutions and 46 glossary entries. Spanish UNED terms remain beside translated key concepts and in the glossary. Existing chapter URLs remain canonical.

Textbook citations retain printed page / AD H1.pdf page numbering (PDF page = printed page minus two). The source scan's edition is not independently identified without its cover. Closed Ágora instructions were not reviewed. New synthetic datasets and explanatory additions remain explicitly identified as such.

Graphs are localized SVGs with the approved data; numerical datasets and kurtosis conventions are recorded in `lib/data-analysis-tema1/graph-data.json`. SV8's legend is placed below the plotting area so translated labels do not cover the curves. All graph captions remain in accessible HTML, and each graph has a visible full-size link. Frequency and boundary formulas use native MathML, retaining the source symbols and indices.

## Validation

- Production build passed.
- Six targeted tests cover full locale structure, every table's rows/cells/numbers, MathML equality, textbook reference parity, all 32 graph assets, mathematical datasets and responsive reading treatments.
- Two existing runtime tests passed for Análisis de Datos and Psicobiología: HTTP 200, subject navigation, language switching and complete chapter markup on all four locales.
- Two existing Psicobiología structure/navigation tests passed.
- Localized graphs were visually reviewed; no missing translated labels or curve obstruction remains.
- `git diff --check` passed.

## Remaining verification limits

The general `tsc --noEmit` command reports errors in unchanged files: missing Cloudflare runtime type declarations and the existing `StaticArticle.lang` typing in `lib/article-translations.ts`. None of its diagnostics points to the changed chapter files. The production build succeeds.

Mobile layout was checked structurally (responsive images, keyboard-focusable scrolling tables, formula overflow and 44px interaction targets). Browser/device QA remains pending: the required browser-control capability is unavailable in this environment. No preview server, browser installation or workaround was used.

No Sites source push, saved version, deployment, D1 operation, DNS/Cloudflare configuration change, secret or user-data operation was performed. PR #1 and PR #2 are unchanged. This PR remains a draft pending owner review.
