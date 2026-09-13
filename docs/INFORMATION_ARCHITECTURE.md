# Sensus Vitae Information Architecture

## Purpose

This document defines the target information architecture for Sensus Vitae before any content migration. It is a planning document only and does not change live routes, navigation, or content placement yet.

The goal is to preserve the current public site while clarifying how educational content should be grouped as the project grows. The architecture must remain multilingual, scientifically grounded, and easy to maintain across RU / NL / EN / ES.

---

## 1. STUDY

Purpose:
- UNED study materials
- course subjects
- textbook chapter summaries
- study notes
- glossaries
- self-check quizzes
- learning progress / review materials

### Intended role

Study is the core learning section. It should hold materials that support structured learning, revision, and progression through a subject area.

### Recommended structure

- Study landing page
- Subject-based groupings
- Chapter summaries and notes
- Glossary and terminology support
- Self-check quizzes and repeated review
- Progress-focused materials for revision and recap

### Design principles

- Keep learning content sequenced and understandable
- Separate learning materials from pure reference or discussion content
- Prefer direct educational value over decorative grouping
- Keep terminology consistent across languages

---

## 2. LIBRARY

Purpose:
- books and reading materials
- scientific articles
- research updates / news
- summaries
- external learning resources
- Sapolsky and other book-based content

### Intended role

Library is the reference and discovery section. It should hold reading material, research content, historical or conceptual summaries, and external resources that expand learning without being the main study pathway itself.

### Recommended structure

- Library landing page
- Book-based collections
- Research and article collections
- News and current-science updates
- Summary collections and chapter notes
- Resource links and external learning materials

### Design principles

- Use Library as the broad accumulation and retrieval area
- Keep Study focused on structured learning and progression
- Treat book-specific content as a Finder or collection area rather than as a separate redesign
- Preserve the current public URLs of existing materials where possible

---

## 3. CLUB

Purpose:
- shared reading
- discussion prompts
- author of the day
- term of the day
- question of the day
- meetings / community activities
- optional club quizzes

### Intended role

Club is the social and reflective layer. It supports conversation, interpretation, informal learning, and community connection around books, ideas, and scientific questions.

### Recommended structure

- Club landing page
- Shared reading sets
- Discussion prompts and reading questions
- Daily or weekly author / term / question features
- Community meeting and activity information
- Optional low-pressure quizzes tied to club material

### Design principles

- Keep Club distinct from Study, even when the underlying material overlaps
- Use Club for communal reflection and interpretation rather than direct academic teaching
- Keep discussion features lightweight and easy to maintain
- Preserve a low-friction experience for casual readers and students alike

---

## 4. SELF-DISCOVERY / ORIENTATION

This section is proposed but not implemented yet.

### Proposed questions

- "What should I study?"
- "What work may suit me?"
- "What should I focus on?"

### Recommendation

The best fit is a Study subsection first, not a full top-level section and not a standalone Club tool.

### Rationale

- The questions are primarily educational and developmental, not primarily social or community-oriented.
- They align better with learning pathways, guided orientation, and review sequences.
- A Study subsection can later evolve into a more advanced advisory feature without forcing a new top-level section too early.
- A Club tool would be too weakly aligned because the use case is self-assessment and direction, not discussion or conversation.

### Proposed future placement

- Preferred: Study > Orientation / Self-discovery
- Secondary option: a dedicated but small subpage under Study
- Not recommended yet: a stand-alone top-level section

This should be considered a future improvement only, not part of the current migration plan.

---

## 5. CONTENT MIGRATION MAP

| Existing content type | Target section | Keep existing URL? | Migration priority | Notes |
| --- | --- | --- | --- | --- |
| UNED materials | Study | Yes | High | Keep the learning path structured and subject-oriented. |
| Sapolsky chapters | Library | Yes | High | Book-based content belongs in Library while preserving existing chapter routes. |
| Scientific news | Library | Yes, where possible | Medium | Treat as a reference and update stream rather than as a study pathway. |
| Glossary content | Study | Yes, where possible | High | Glossary should support learning and conceptual clarity. |
| Quizzes | Study | Yes, where possible | High | Keep self-checks linked to learning materials and revision. |
| Author of the day | Club | Yes, where possible | Medium | Social or reflective feature; should not be mixed into Study. |
| Term of the day | Club or Study | Yes, where possible | Medium | If used for learning support, it may belong in Study; if reflective, Club is acceptable. |
| Question of the day | Club | Yes, where possible | Medium | Best fit for reflective community prompts. |
| Book club materials | Club | Yes, where possible | Medium | Keep discussion and reading-group framing distinct from Library articles. |
| External learning resources | Library | Yes, where possible | Medium | They support broader learning but are not core curriculum. |
| Study notes and summaries | Study | Yes, where possible | High | This is the main educational scaffolding. |

---

## 6. MIGRATION PRINCIPLES

- Preserve public URLs where possible.
- Use redirects only when necessary and only when the change is clearly justified.
- Migrate in small reversible batches.
- Do not mix structural migration with redesign.
- Preserve RU / NL / EN / ES consistency during every migration batch.
- Test after each migration batch.
- Keep existing routes stable unless a migration has explicit owner approval.
- Maintain scientific clarity and avoid oversimplifying educational explanations.
- Keep the architecture legible for students, readers, and future maintainers.

---

## Summary of the proposed architecture

The proposed structure is:

- Study: structured learning and academic progress
- Library: reading, research, reference, and broad discovery
- Club: reflection, discussion, community activity, and light interactive features
- Self-discovery / orientation: a future Study subsection for guidance and personal direction

This architecture keeps the site understandable without forcing a redesign. It preserves current URLs, supports multilingual consistency, and makes future migration manageable in small, reversible batches.
