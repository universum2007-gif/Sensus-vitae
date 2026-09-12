# Sensus Vitae — SEO Policy

## 1. Purpose

SEO should help people find legitimate, useful Sensus Vitae educational material.

SEO must never compromise:

- scientific accuracy;
- readability;
- accessibility;
- privacy;
- educational quality.

Optimize for humans first and search engines second.

---

## 2. Core technical SEO

Where relevant, public educational pages should have:

- a unique and meaningful page title;
- a useful meta description;
- semantic heading structure;
- a correct canonical URL;
- clean and stable URLs;
- appropriate internal links;
- inclusion in the sitemap when intended for indexing;
- correct robots behavior;
- Open Graph metadata where useful;
- structured data only when it truthfully represents the page.

Do not add structured data merely to attempt to obtain richer search results.

---

## 3. Multilingual SEO

Sensus Vitae supports:

RU / NL / EN / ES

Equivalent translated pages should be connected correctly.

Where appropriate, use valid `hreflang` relationships.

Each language version should:

- have its own appropriate language metadata;
- use natural titles and descriptions;
- preserve scientific meaning;
- avoid mechanically duplicated metadata.

Do not allow multilingual architecture to create unnecessary duplicate indexing.

The language switcher and SEO architecture should agree about which pages are equivalents.

---

## 4. Canonical content

Each educational resource should normally have one canonical page per language.

Do not create duplicate pages solely to place the same content in multiple categories.

Use:

- internal links;
- navigation;
- taxonomy;
- related-content systems;
- search;

to expose the same canonical resource from different areas of the site.

Be especially careful with book summaries, glossary content and multilingual pages.

---

## 5. URLs

Prefer stable, understandable URLs.

Do not change an established public URL merely to make it slightly prettier.

Before changing an indexed URL:

1. identify existing internal links;
2. identify possible external links;
3. assess indexing consequences;
4. plan an appropriate redirect if the change is genuinely necessary;
5. request owner approval for significant URL changes.

Avoid unnecessary redirect chains.

---

## 6. Sitemap

The sitemap should represent the public content intended for search indexing.

When adding or removing important public pages, check whether sitemap behavior remains correct.

Do not include:

- private pages;
- duplicate variants;
- utility endpoints;
- pages intentionally excluded from indexing.

Do not modify sitemap architecture globally during an unrelated task.

---

## 7. Robots and indexing

Treat `robots.txt`, robots meta directives and other indexing controls as sensitive infrastructure.

Before changing them, verify that the change will not accidentally remove legitimate Sensus Vitae content from search engines.

Do not block important public educational content without a clear reason.

Do not make global indexing changes as part of a small unrelated feature.

---

## 8. Editorial SEO

Titles and descriptions should accurately represent the educational content.

Prefer language a real student or interested reader might naturally search for.

Do not use:

- keyword stuffing;
- hidden text;
- misleading titles;
- exaggerated claims;
- clickbait;
- doorway pages;
- automatically generated low-quality pages.

Scientific uncertainty should not be removed from a title or description merely to make it more attractive.

---

## 9. Internal linking

Use internal links to help readers understand relationships between concepts.

Useful connections may include:

- article → glossary term;
- article → related concept;
- book → chapter summary;
- chapter → author/book page;
- psychology concept → psychobiology explanation;
- article → relevant learning material.

Internal linking should primarily improve learning and navigation.

Do not create large numbers of artificial links purely for SEO.

---

## 10. Scientific sources and external links

Where educationally appropriate, link to reliable scientific sources.

Prefer:

- original research;
- peer-reviewed journals;
- reputable scientific institutions;
- authoritative educational or governmental sources.

External scientific links should help readers verify or deepen their understanding.

Do not add low-quality external links merely for perceived SEO benefit.

---

## 11. Images

For meaningful educational images:

- use descriptive filenames where practical;
- provide useful alt text;
- optimize file size;
- preserve visual quality;
- avoid unnecessary duplication.

Alt text exists primarily for accessibility.

Do not stuff keywords into alt text.

---

## 12. Performance and SEO

SEO improvements should not significantly degrade performance.

Avoid adding heavy scripts or third-party tools merely for SEO.

Prefer lightweight implementation.

Coordinate performance decisions with `docs/ENGINEERING.md`.

---

## 13. Google indexing

Organic Google indexing does not require paid advertising.

Sensus Vitae should be designed to be discoverable through legitimate organic search.

Google Search Console or similar webmaster tools may be useful for:

- indexing status;
- sitemap submission;
- crawl problems;
- search-performance diagnostics.

Do not introduce paid advertising merely to improve organic indexing.

Do not add analytics or tracking automatically as part of Search Console or SEO work.

Privacy rules in `docs/PRIVACY-LEGAL.md` still apply.

---

## 14. SEO changes that require caution

Before making significant changes to:

- URLs;
- canonical tags;
- hreflang;
- redirects;
- sitemap generation;
- robots directives;
- site-wide metadata;
- domain configuration;

check for possible indexing regressions.

If there is meaningful risk of losing indexed content or breaking existing links, stop and explain the risk before implementation.

---

## 15. SEO success principle

A successful Sensus Vitae SEO improvement makes high-quality educational content easier to discover without making the content less accurate, less accessible, more invasive or more commercial.
