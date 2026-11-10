# Motivation — Tema 1 release candidate

Prepared 2026-11-10 from GitHub main `53bf27c8b3abf90c681486b1fc563c1bc41e39b8`, whose tree `4af79b3c43f20e37525058bf8a3d912390c6b70a` matches published Sites v43. Branch: `work/motivation-tema1-2026-11-10`.

## Content and sources

Canonical route: `/{ru,es,en,nl}/study/subjects/motivation/chapter-1`. No prior motivation chapter existed; the subject now has one book and one chapter. Four equivalent full translations retain Spanish UNED terminology. The chapter includes learning goals, a timeline, four method phases and the six-step worked example, seven perspectives with representatives and limitations, basic/applied complementarity, eight basic processes, a motivation bridge, exam revision, a defined glossary, two accessible HTML diagrams, 16 application questions with native disclosures and the eight original authored question objectives in the existing quiz component. Feedback explains both distractors. No user responses are saved or sent.

The supplied chapter scan was checked at printed/PDF pp. 3–16; those numbers agree. Author on p. 1: Francisco Javier Menéndez Balaña. Publication metadata (first edition, 2026, ISBN 9788410409699) is supported by the publisher catalogue and UNED course 62011089, 2026/2027. The scan lacks a publication-details page; the article states this distinction. Historical works such as Dorsch are secondary citations through the chapter.

- Chapter: https://drive.google.com/file/d/12PwzoMoN_3iUHYkIQV0dxXW3aH4jIc4M/view
- Minimum requirements: https://drive.google.com/file/d/1LX-uPr5nvqhsz_AplcqXZNXWRKvjQoWb/view
- Publisher: https://www.editorialsanzytorres.com/libros/manual-de-psicologia-de-la-motivacion/9788410409699/
- UNED: https://www.uned.es/universidad/inicio/estudios/grados/grado-en-psicologia/asignaturas.html?codAsignatura=62011089&codTitulacion=6201

Coverage is substantive and mapped individually in the public chapter source (`motivationCoverage`): 1–7 everyday/scientific; 8–12 history; 13–24 definition; 25–30 and 37–40 scientific knowledge/goals/standards; 31–36 method; 41–42 perspectives; 43–45 behaviour; 46–48 cognition; 49–51 biology; 52–54 psychodynamics; 55–57 humanism; 58–60 evolution; 61–63 sociocultural; 64–67 basic/applied; 68–76 processes. Each anchor includes an application question and a hidden explanation. This is coverage of all 76 requirements, not a claim that eight multiple-choice questions test every requirement or guarantee exam success.

## Validation

- Final application build passed. Relevant tests: 16 unique tests passed across motivation (3), existing personality-genetics lesson (3), psychiatric-genetics lesson (6) and UI components (4). The first new test run had an incorrect expected count of 15 disclosures; corrected to 16 and all three new tests passed again. No old data-analysis tests were run.
- Built Worker responses: all four chapter routes and subject cards HTTP 200; unsupported locale HTTP 404; canonical/hreflang metadata and all section links checked.
- Throwing D1 proxy proves the new routes do not access a database. Database schema, migrations, bindings, contact form, dependencies and other lessons are unchanged.
- Browser QA on the built Worker via a loopback-only read-only server: RU/ES/EN/NL at 375 and 390 CSS px; no document overflow; all three tables scroll inside their containers. All 16 details open and close with Enter on each locale. All eight quizzes accept wrong and right answers with localized explanations on every locale; feedback is absent before input. Language navigation RU → ES confirmed, desktop 1280px inspected.
- Source-only v43 rollback ZIP retained outside repository: `motivation-tema1-work/Sensus_Vitae_v43_before_motivation_sources.zip`, SHA256 `29f8d0bb24cfc7936e9517d9f37ea15e42bb94f4e5c0031020f1dfcc4d7fe0b5`. This is not a database backup. Reference PDFs, private data, credentials and local review scripts are excluded from GitHub.

## Publication hold

Not published and not sent to Sites source repositories. Production remains v43; owner-private stage remains v3. The current Sites credentials return `publish_on_push_accepted=false` and `publish_on_push_expires_at=null`. These do not prove expiry or cancellation of the historical window. No documented closure/expiry evidence was found in the available release records and tool responses. The user explicitly requires that evidence before any Sites push. No undocumented endpoint was used, and no access policy was changed.

Before release: obtain authoritative closure/expiry evidence or a documented platform resolution; refresh source and audience, compare the exact candidate tree, then follow the normal helper → private-stage build/deploy/QA → explicit production save/deploy → four live URL checks. No production D1 operations are authorized. This PR is a reviewable draft, not a deployed version.
