import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test, {after} from 'node:test';
import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';
import {fetchFromWorker} from './worker-harness.mjs';

const root=fileURLToPath(new URL('..',import.meta.url));
const vite=await createServer({appType:'custom',configFile:false,root,resolve:{alias:{'@':root}},server:{middlewareMode:true,hmr:false}});
after(()=>vite.close());
const {tema2Path,tema2SectionIds,tema2Html,tema2Markdown}=await vite.ssrLoadModule('/lib/motivation-chapter-two/index.ts');
const langs=['ru','es','nl','en'];
const tema1Path='study/subjects/motivation/chapter-1';
const sourceUrls=['https://drive.google.com/file/d/1oUbb-YG0JFxnXXMpC7MMDsIJRKPylnmK/view','https://drive.google.com/file/d/1f00UeGdoE92i2mnyj3DHIm4G2fD1Z64i/view'];
const count=(text,pattern)=>(text.match(pattern)??[]).length;

test('94 existing minimum requirements point to the same substantive chapter anchors',()=>{
 const editorial=readFileSync(new URL('../docs/MOTIVATION_TEMA2_COVERAGE.md',import.meta.url),'utf8');
 const rows=[...editorial.matchAll(/^\| (\d+) \| §\d+ ([a-z-]+) \|$/gm)];
 assert.deepEqual(rows.map(row=>Number(row[1])),Array.from({length:95},(_,i)=>i+1).filter(n=>n!==87));
 for(const row of rows)assert.ok(tema2SectionIds.includes(row[2]),row[0]);
});

test('all four full translations retain section parity, tables, disclosures, sources and glossary',()=>{
 const base=tema2Html('ru').split(/<h2>/).slice(1);
 for(const lang of langs){
  const html=tema2Html(lang);
  assert.deepEqual([...tema2Markdown[lang].matchAll(/<a id="([a-z-]+)">/g)].map(m=>m[1]),tema2SectionIds.slice(1,-1));
  assert.equal(count(html,/<h2>/g),16,lang);
  assert.equal(count(html,/<table>/g),10,lang);
  assert.equal(count(html,/<details>/g),18,lang);
  assert.equal(count(html,/<summary>/g),18,lang);
  assert.doesNotMatch(html,/<details[^>]*\bopen\b/);
  assert.equal(count(html.split('<h2>14. ')[1].split('</tbody>')[0],/<th scope="row">/g),50,lang);
  assert.deepEqual([...html.matchAll(/<details><summary>[^<]+<\/summary><p><strong>([ABC])\.<\/strong>/g)].map(m=>m[1]),['A','B','C','B','C','A']);
  assert.ok(html.replace(/<[^>]+>/g,' ').split(/\s+/).length>3500,lang);
  for(const url of sourceUrls)assert.ok(html.includes(`href="${url}"`),lang);
  const sections=html.split(/<h2>/).slice(1);
  for(let i=0;i<sections.length;i++)for(const mark of [/<h3>/g,/<table>/g,/<details>/g,/<tr>/g,/<li>/g])assert.equal(count(sections[i],mark),count(base[i],mark),`${lang}/${tema2SectionIds[i]}/${mark}`);
  for(const term of ['constructo hipotético','dimensión humana','aferencia','pulsión','credibilidad','variable independiente'])assert.ok(html.toLowerCase().includes(term),`${lang}/${term}`);
 }
});

test('built routes expose anchors, equivalent locale links and reciprocal chapter navigation without D1',async()=>{
 const DB=new Proxy({},{get(){throw Error('Tema 2 must not access D1');}});
 for(const lang of langs){
  const route=`/${lang}/${tema2Path}`;
  const res=await fetchFromWorker(route,{}, {DB});assert.equal(res.status,200,route);
  const html=await res.text();
  assert.equal(count(html,/<h1\b/g),1,route);
  for(const id of tema2SectionIds){assert.ok(html.includes(`href="#${id}"`),id);assert.equal(count(html,new RegExp(`id="${id}"`,'g')),1,id);}
  for(const locale of langs){assert.ok(html.includes(`href="/${locale}/${tema2Path}"`));assert.ok(html.includes(`https://sensusvitae.club/${locale}/${tema2Path}`));}
  assert.ok(html.includes(`href="/${lang}/${tema1Path}"`));
  const first=await fetchFromWorker(`/${lang}/${tema1Path}`,{}, {DB});assert.equal(first.status,200);assert.ok((await first.text()).includes(`href="${route}"`));
  const subject=await fetchFromWorker(`/${lang}/study/subjects/motivation`,{}, {DB});assert.equal(subject.status,200);assert.equal((await subject.text()).split(`href="${route}"`).length,2);
 }
 assert.equal((await fetchFromWorker(`/fr/${tema2Path}`)).status,404);
});
