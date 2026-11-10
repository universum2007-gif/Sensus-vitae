import assert from 'node:assert/strict';
import test, { after } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { fetchFromWorker } from './worker-harness.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const vite = await createServer({ appType: 'custom', configFile: false, root, resolve: { alias: { '@': root } }, server: { middlewareMode: true, hmr: false } });
after(() => vite.close());
const { personalityGeneticsLearning: lessons, personalityGeneticsSlug: slug } = await vite.ssrLoadModule('/lib/personality-genetics-learning.ts');
const { staticArticles } = await vite.ssrLoadModule('/lib/site-content.ts');
const langs = ['ru', 'es', 'en', 'nl'];

test('personality learning content preserves equivalent objectives, numerical qualifications and answer targets in four languages', () => {
  for (const lang of langs) {
    const c = lessons[lang];
    assert.equal(c.body.length, 12, lang);
    assert.equal(c.checks.length, 5, lang);
    assert.deepEqual(c.body.map(s => [s.paragraphs?.length ?? 0, s.bullets?.length ?? 0]), lessons.ru.body.map(s => [s.paragraphs?.length ?? 0, s.bullets?.length ?? 0]));
    for (const [i, s] of c.body.entries()) assert.ok(s.heading.startsWith(`${i + 1}. `));
    assert.deepEqual(c.checks.map(q => q.section), [4, 5, 6, 7, 10]);
    const article = staticArticles.filter(a => a.lang === lang && a.slug === slug);
    assert.equal(article.length, 1, 'one canonical article per locale');
    assert.deepEqual(article[0].body, c.body);
    assert.match(article[0].source.href, /10\.1038\/s41586-026-10992-9$/);
    const prose = JSON.stringify(c.body);
    assert.match(prose, /4[.,]8–9[.,]3%/);
    assert.match(prose, /9[.,]3–13[.,]3%/);
    assert.match(prose, /0[.,]009/);
    assert.match(prose, /824/);
    assert.match(prose, /5 × 10⁻⁸/);
    assert.match(prose, /EUR-like/);
    assert.match(prose, /AFR-like/);
  }
});

test('all expanded personality routes render without database access and retain equivalent metadata and local disclosures', async () => {
  const database = new Proxy({}, { get() { throw new Error('Personality static route must not access the database'); } });
  for (const lang of langs) {
    const pathname = `/${lang}/articles/${slug}`;
    const response = await fetchFromWorker(pathname, {}, { DB: database });
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.equal((html.match(/id="personality-section-\d+"/g) ?? []).length, 12);
    assert.equal((html.match(/data-personality-answer="\d+"/g) ?? []).length, 5);
    const details = [...html.matchAll(/<details\b([^>]*)>/g)];
    assert.equal(details.length, 5);
    for (const d of details) assert.doesNotMatch(d[1], /\bopen\b/, 'answers start collapsed');
    assert.equal((html.match(/<summary\b/g) ?? []).length, 5);
    assert.ok(html.includes(`https://sensusvitae.club${pathname}`));
    for (const other of langs) assert.ok(html.includes(`https://sensusvitae.club/${other}/articles/${slug}`));
    for (const target of [4, 5, 6, 7, 10]) assert.ok(html.includes(`href="#personality-section-${target}"`));
    assert.ok(html.includes(`/${lang}/library/scientific-news/psychiatric-genetics-14`));
    assert.ok(html.includes('https://pmc.ncbi.nlm.nih.gov/articles/PMC13589609/'));
    assert.doesNotMatch(html, /<input\b|<textarea\b/, 'self-check does not collect answers');
  }
});

test('unknown personality locale remains unavailable', async () => {
  assert.equal((await fetchFromWorker(`/fr/articles/${slug}`)).status, 404);
});
