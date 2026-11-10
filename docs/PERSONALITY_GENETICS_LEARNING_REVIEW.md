# Personality genetics: unpublished learning expansion

Prepared 10 November 2026. Local branch: `work/personality-genetics-learning-2026-11-10`.
Baseline tree: published Sites v42 / GitHub main after PR #7, `8d4aca876b3970f8a735467222a60d92765bb265`.
The local branch starts at PR #7's tested head `a813906f0eaa23a6a332e48ec154f79e69c05909`; its tree is identical to merged main `fbabe78500a9f26d102be2a4a603da624f7485a3`.

## Source review

Schwaba T., Clapp Sullivan M. L., Akingbuwa W. A. et al. (2026). Robust inference and correlates from genetic associations with personality. Nature 658, 1226–1236.
- https://doi.org/10.1038/s41586-026-10992-9
- https://www.nature.com/articles/s41586-026-10992-9
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13589609/

Reviewed the abstract, Table 1, population-level meta-analysis, SNP heritability, polygenic prediction, familial-confounding analyses, Discussion and Methods in the full primary text. Supplementary files were not independently audited; no additional result is claimed solely from an unread supplement.

Claim coverage:
- Abstract / Fig. 1: 46 cohorts, per-trait n=611,037–1,136,711. Do not add the five trait sample sizes as unique people.
- Population-level meta-analysis: 1,260 approximately independent lead SNPs, 824 in novel trait-associated regions; threshold P<5×10^-8; extraversion median winner's-curse-corrected effect 0.009 SD per effect allele. These are not counts of causal genes.
- Characterizing SNP heritability / Table 1: EUR-like population LDSC estimates 4.8–9.3%; meta-regression predictions for typical instrument reliability 9.3–13.3%. Distinct estimands; neither is an individual prediction accuracy.
- Polygenic prediction: statistical prediction exists in independent evaluations; transfer to AFR-like groups is weaker and differs by trait. Replaces the earlier overly categorical statement about prediction with a qualified account.
- Familial analyses: limited shared-family confounding in tested estimates, not absence of environmental influence or universal causal identification.
- MR: supports some causal hypotheses under assumptions; does not establish all observed associations as causal.
- Methods: analyses were not preregistered. Online date 2 September 2026; issue date 29 October 2026.

## Teaching and implementation

One canonical route retained: `/{lang}/articles/personality-genetics-nature-2026` on RU/ES/EN/NL. All locales have the same 12-section teaching structure and five equivalent retrieval/application questions, with explanations and links back to the relevant sections.

The three-variant PGI calculation and student scenario are explicitly fictional educational examples. The Big Five are distinguished from the five shared psychiatric-genetics factors in the existing lesson. Text explains dimensions, SNP/locus, GWAS, multiplicity, effect size, heritability, PGI, family comparisons, correlation, causal assumptions, measurement and transfer.

Independent explanatory writing; no reproduction or translation of publisher prose, figures or tables. The primary paper's CC BY-NC-ND notice is not treated as permission to adapt its figures. Only bibliographic titles and necessary scientific names are retained.

Native HTML details/summary controls: no scores, answer fields, storage, new dependencies or network handlers. Contents and answer links use native anchors. The existing article template remains unchanged for other slugs. Target article's mobile heading is reduced from 36px to 30px to avoid an awkward Dutch word break at 390px.

## Validation

- Full production build and full repository suite: 39/39 passed, zero failures/skips. Repeated after the final mobile heading change.
- Four locale routes, canonical/hreflang, 12 section targets, five initially collapsed answers, answer-backlinks, source and related-lesson links checked.
- Static personality route tested with a DB binding that throws on access: route still returns 200 in all four languages.
- Browser preview: four locales at 390×844, no horizontal document overflow; RU and NL answers opened by Enter. Mobile heading and expanded-answer views inspected. No physical-device or screen-reader certification claimed. Desktop viewport geometry checked; full desktop screenshot inspection was limited by the local browser compositor.
- Existing Data Analysis, Psychobiology, psychiatric genetics, navigation and contact validation tests passed. No real email sent.

No remote source push, PR creation, Sites saved version, stage deployment, public deployment or production D1 operation performed. Public remains v42. Closed-stage review and owner approval of the text remain for a future publication task.
