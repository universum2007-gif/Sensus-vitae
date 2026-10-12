# Four-language psychiatric genetics lesson — review

## Result and scope

A full RU/ES/NL/EN lesson explains shared genetic influences across 14 psychiatric disorders and related conditions. It is based on the supplied `Sensus_Vitae_Nature_14_disorders_source_RU.md` (12 October 2026), not a replacement news brief. All source explanations, the fictional carrier table, life example, diagnostic implications, limitations, four-question answer bank and ten original glossary concepts are retained. Five additional glossary definitions clarify GWAS, SNP, OR, p-value and statistical significance.

Canonical route: `/{lang}/library/scientific-news/psychiatric-genetics-14`.
Discovery: Club → existing Scientific News → Psychobiology and genetics → lesson. No duplicate news directory or duplicate article was created.

The nine numbered sections follow the task's requested order. The source file's diagnostic implications, limitations and conclusion are preserved within section 7. The source file contains specifications for illustrations rather than image binaries. Three original SVG schematics implement those specifications, with localized alt text and HTML labels; they are explicitly not identical to the chat images. The GWAS process and 66/34 display are accessible HTML diagrams. Formulas use native MathML.

## Scientific review and corrections

Primary source: Grotzinger et al., *Mapping the genetic landscape across 14 psychiatric disorders*, DOI https://doi.org/10.1038/s41586-025-09820-3.

| Item | Verified source / editorial treatment |
| --- | --- |
| Dates | Online 10 December 2025; Nature 649, 406–415 (2026). Lesson dated 12 October 2026; not presented as newly published research. |
| Sample | Abstract: 1,056,201 cases across input datasets. Not described as newly recruited or necessarily unique participants; possible overlap explained. Nicotine used continuous Fagerström scores. |
| Factors | Main text, “Genomic SEM identifies five factors”, Fig. 1: Compulsive, SB, Neurodevelopmental, Internalizing, SUD. Weak and cross-loadings preserved. These are latent genomic factors, not new diagnoses or individual genes. |
| 66% | Abstract's approximate average explained genetic variance; main text's 33.5% **median** residual variance is distinguished from the mean. 66/34 is an explicitly rounded teaching display inside the SNP-genetic model, not genes versus environment or individual risk. Tourette residual 87% illustrates heterogeneity. |
| Variant/locus counts | Methods: 2,795,800 SNPs shared across input GWAS; abstract/discussion: 238 loci associated with at least one correlated factor. No claim that each locus is one causal gene. |
| Correlation | Main text confirms Internalizing–SUD r_g = 0.60, SE = 0.02. Formula, SE, proportional magnitudes, possible cancellation at r_g = 0 and limits on causality explained. |
| OR | Fictional carrier 2×2 table: (300/700)/(200/800) = 12/7 ≈ 1.71. Not a per-allele GWAS estimate, individual probability, risk ratio or causal finding. Case–control sampling caveat added. |
| p = 0.003 | Kept as a separate hypothetical test result. It is **not** the p-value calculated from the fictional 300/200 table. Conditional interpretation includes the null and test assumptions and “equally or more extreme”. |
| GWAS threshold | Conventional 5×10^-8 retained; Methods' factor-GWAS threshold 8.33×10^-9 added (six-factor Bonferroni correction, including p-factor). Other analyses have other thresholds. |
| Cells | Discussion and enrichment analyses: SB enriched in excitatory neuronal annotations including hippocampal CA1/CA3; Internalizing more consistently in adult glia including oligodendrocytes, precursors and Bergmann glia, also excitatory neurons. No exclusive cell-to-diagnosis assignment or causal myelin claim. |
| Gene–environment example | Preserved as illustration, not empirical proof of interaction. Joint contributions distinguished from a statistically demonstrated interaction; sleep/support are not guarantees. |
| Limitations | EUR-like ancestry restriction, unequal power, common-variant scope, diagnostic/control/assortative-mating biases, replication/functional validation and lack of individual diagnostic certainty. |

Methodological sources additionally linked: Grotzinger et al. (2019), DOI 10.1038/s41562-019-0566-x; Bulik-Sullivan et al. (2015), DOI 10.1038/ng.3406.

## Interaction and accessibility

Exactly four single-answer questions with three choices each. Key: B, B, C, B. Submit stays disabled until all four are answered; programmatic incomplete submission also produces no result. Submission scores 0–4, locks choices and explains every answer with the correct choice and a link back to the relevant section. Reset clears selections and feedback and restores focus to the first radio. Results receive focus and a status announcement.

Native radio groups/legends, visible focus, text-based correct/incorrect indicators, 44px minimum choice/button targets, responsive cards, local table overflow, scalable SVG, HTML figure labels and expandable glossary definitions. Quiz responses live only in React memory: no network, persistence, tracking or new user data.

## Isolation and validation

Branch `work/nature-14-disorders-lesson-2026-10-12` starts from PR #2 / v40-equivalent source `52d83bcb1280173e878e14fc2bec66526fe2b5f8`. The draft PR targets that branch, so it contains only the lesson changes. It does not depend on, update, overwrite or merge PR #3 / v41.

v41 HEAD inspected: `d8f7a8a091a1bd3644ae999c699aa0832d12fa2c`. Its changed-path set and this lesson's changed-path set do not overlap. This establishes file-level separation at that HEAD, not a promise about future changes. No merge operation was performed.

Validation:
- Production build passed and generated runnable Worker/client artifacts.
- 30 repository tests passed, including five new lesson tests and existing Data Analysis / Psicobiología runtime regressions.
- All four lesson routes returned HTTP 200; invalid language returned 404. Deep language switching, canonical/hreflang, discovery links, four MathML formulas, three accessible SVG illustrations, 12 radio inputs and 15 glossary definitions checked.
- Every possible four-question answer combination (81 per language) graded correctly; incomplete/invalid attempts rejected.
- 108 DOM assertions across four languages verified unanswered/partial submission, 0/4, 4/4, 3/4, feedback, choice locking, reset and focus. Run with temporary jsdom tooling; no runtime dependency added.
- Vector illustrations rendered for static visual inspection.
- General `tsc --noEmit` still reports errors in unchanged Cloudflare runtime typings and `lib/article-translations.ts`; no new lesson file is named in its diagnostics.
- Browser/device layout, actual screen-reader and real keyboard interaction remain unverified: required browser-control capability unavailable. Responsive and accessibility behavior has structural/DOM verification only; do not call this a full mobile visual sign-off.

## Publication remains blocked

No push to Sites, merge, Save Version or deployment. No D1/DNS/Cloudflare/user-data change. The hosting manifest is unchanged.

Earlier READ-ONLY diagnosis: Sites latest saved version v40; its deployment succeeded; v40 archive retained for rollback. Installed `site-workflow.mjs` pushes before packaging. The previously opened publish-on-push window has not been proven expired or cancelled; null credential metadata does not resolve it. Before any Sites transfer, resolve this through documented platform evidence/support, refresh production/source state, review the intended version's contents, and obtain the owner's separate confirmation. The lesson draft PR must not be deployed as a substitute for v41 or overwrite its changes.
