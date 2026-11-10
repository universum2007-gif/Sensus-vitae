import assert from 'node:assert/strict';
import test, {after} from 'node:test';
import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';
import {fetchFromWorker} from './worker-harness.mjs';
const root=fileURLToPath(new URL('..',import.meta.url));
const vite=await createServer({appType:'custom',configFile:false,root,resolve:{alias:{'@':root}},server:{middlewareMode:true,hmr:false}});
after(()=>vite.close());
const m=await vite.ssrLoadModule('/lib/motivation-chapter-one.ts');
const {academicSubjects}=await vite.ssrLoadModule('/lib/academic-content.ts');
const langs=['ru','es','en','nl'];
test('76 minimum requirements map once to substantive sections in all four complete translations',()=>{
 assert.deepEqual(m.motivationCoverage.map(c=>c.number),Array.from({length:76},(_,i)=>i+1));
 for(const c of m.motivationCoverage)assert.ok(m.motivationSectionIds.includes(c.section));
 const reference=m.motivationHtml('ru');
 for(const lang of langs){
  const html=m.motivationHtml(lang);
  assert.equal((html.match(/<h2>/g)||[]).length,m.motivationSectionIds.length);
  assert.equal((html.match(/<p>/g)||[]).length,(reference.match(/<p>/g)||[]).length);
  assert.equal((html.match(/<details>/g)||[]).length,16);
  assert.doesNotMatch(html,/<details[^>]*\bopen\b/);
  assert.equal((html.match(/<figure/g)||[]).length,2);
  assert.ok(html.replace(/<[^>]+>/g,' ').split(/\s+/).length>2200,lang);
  for(const key of ['motivación','emoción','aprendizaje','atención','memoria','percepción','pensamiento','lenguaje'])assert.ok(html.includes(`<strong lang="es">${key}</strong>`));
  const quizzes=m.motivationQuestions(lang);assert.equal(quizzes.length,8);
  for(const q of quizzes){assert.equal(q.choices.length,3);assert.ok(q.explanation.length>90);assert.ok(q.correctIndex>=0&&q.correctIndex<3);}
 }
});
test('one canonical chapter card per language, with all real section anchors and no database calls',async()=>{
 const subject=academicSubjects.find(s=>s.slug==='motivation');assert.equal(subject.books.length,1);assert.equal(subject.books[0].chapters.length,1);
 const DB=new Proxy({},{get(){throw Error('The motivation study chapter must not access D1');}});
 for(const lang of langs){
  const path=`/${lang}/${m.motivationPath}`;
  const res=await fetchFromWorker(path,{}, {DB});assert.equal(res.status,200,path);
  const html=await res.text();assert.equal((html.match(/<h1\b/g)||[]).length,1);
  for(const id of m.motivationSectionIds)assert.ok(html.includes(`id="${id}"`),id);
  for(const target of [...m.motivationHtml(lang).matchAll(/href="#([^"]+)"/g)])assert.ok(html.includes(`id="${target[1]}"`),target[1]);
  assert.equal((html.match(/<fieldset/g)||[]).length,8);
  assert.doesNotMatch(html,/<div[^>]+aria-live="polite"/,'feedback starts hidden');
  assert.ok(html.includes(`https://sensusvitae.club${path}`));
  for(const locale of langs)assert.ok(html.includes(`https://sensusvitae.club/${locale}/${m.motivationPath}`));
  const subjectRes=await fetchFromWorker(`/${lang}/study/subjects/motivation`,{}, {DB});assert.equal(subjectRes.status,200);const subjectHtml=await subjectRes.text();assert.ok(subjectHtml.includes(`href="${path}"`));assert.ok(subjectHtml.includes('id="chapters"'));
 }
});
test('unsupported chapter locale remains unavailable',async()=>{assert.equal((await fetchFromWorker(`/fr/${m.motivationPath}`)).status,404);});
