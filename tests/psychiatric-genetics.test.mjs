import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test, {after} from 'node:test';
import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';
import {fetchFromWorker} from './worker-harness.mjs';
const root=fileURLToPath(new URL('..',import.meta.url));
const vite=await createServer({appType:'custom',configFile:false,root,resolve:{alias:{'@':root}},server:{middlewareMode:true,hmr:false}});
after(()=>vite.close());
const {geneticsLesson,geneticsLessonPath,lessonSectionIds}=await vite.ssrLoadModule('/lib/psychiatric-genetics/index.ts');
const {gradeGeneticsQuiz}=await vite.ssrLoadModule('/lib/psychiatric-genetics/quiz.ts');
const languages=['ru','es','nl','en'];

test('all four complete lessons retain the source structure, quantitative findings and four-question bank',()=>{
  const shape=c=>[c.headings.length,c.intro.length,c.research.length,c.factors.length,c.variance.length,c.gwas.length,c.steps.length,...c.stats.map(s=>s.paragraphs.length),...c.biology.map(b=>b.paragraphs.length),c.life.length,c.limits.length,c.quiz.length,c.glossary.length];
  for(const lang of languages){
    const c=geneticsLesson[lang];
    assert.deepEqual(shape(c),shape(geneticsLesson.ru));
    assert.equal(c.headings.length,9);assert.equal(c.quiz.length,4);assert.equal(c.glossary.length,15);
    assert.deepEqual(c.quiz.map(q=>q.correctIndex),[1,1,2,1]);
    assert.ok(c.quiz.every(q=>q.choices.length===3&&q.explanation&&lessonSectionIds.includes(q.section)));
    const text=JSON.stringify(c);
    for(const number of ['66%','33,5','87%','238','2 795 800']){
      const variants={'33,5':['33,5','33.5'],'2 795 800':['2 795 800','2,795,800','2.795.800']};
      assert.ok((variants[number]??[number]).some(n=>text.includes(n)),`${lang}:${number}`);
    }
    assert.ok(c.glossary.every(row=>row.length===3&&row.every(cell=>cell.trim())));
  }
});

test('grading rejects incomplete and invalid attempts and scores every possible answer combination',()=>{
  for(const lang of languages){
    const qs=geneticsLesson[lang].quiz;
    for(const partial of [[],[-1,-1,-1,-1],[1,1,-1,1],[1,1,2],[1,1,2,3],[1,1,2,0.5]]) assert.equal(gradeGeneticsQuiz(qs,partial),null);
    for(let n=0;n<81;n++){
      const answers=[0,1,2,3].map(i=>Math.floor(n/3**i)%3);
      assert.equal(gradeGeneticsQuiz(qs,answers).score,answers.reduce((s,a,i)=>s+(a===[1,1,2,1][i]?1:0),0));
    }
  }
});

test('four routes return full lessons, localized deep language links, metadata, MathML and accessible quiz controls',async()=>{
  for(const lang of languages){
    const response=await fetchFromWorker(`/${lang}/${geneticsLessonPath}`);
    assert.equal(response.status,200,lang);
    const html=await response.text();
    const c=geneticsLesson[lang];
    assert.ok(html.includes(c.title));
    assert.equal((html.match(/<h1\b/g)??[]).length,1);
    for(const id of lessonSectionIds)assert.ok(html.includes(`id="${id}"`));
    for(const target of languages)assert.ok(html.includes(`href="/${target}/${geneticsLessonPath}"`));
    assert.ok(html.includes(`https://sensusvitae.club/${lang}/${geneticsLessonPath}`));
    assert.equal((html.match(/<math\b/g)??[]).length,4);
    assert.equal((html.match(/<svg role="img"/g)??[]).length,3);
    assert.equal((html.match(/type="radio"/g)??[]).length,12);
    assert.equal((html.match(/<fieldset\b/g)??[]).length,4);
    assert.ok(/<button[^>]*type="submit"[^>]*disabled/.test(html));
    assert.ok(html.includes(c.quizCopy.complete));
    assert.ok(!html.includes(`${c.quizCopy.score}:`),'no score before answering');
    assert.ok(html.includes('10.1038/s41586-025-09820-3'));
    for(const [term] of c.glossary) assert.ok(html.includes(term));
  }
  assert.equal((await fetchFromWorker(`/de/${geneticsLessonPath}`)).status,404);
});

test('Club and existing scientific news lead to one canonical lesson without replacing existing content',async()=>{
  for(const lang of languages){
    const club=await (await fetchFromWorker(`/${lang}/club`)).text();
    assert.ok(club.includes(`/${lang}/library/scientific-news#psychobiology-genetics`));
    const news=await(await fetchFromWorker(`/${lang}/library/scientific-news`)).text();
    assert.ok(news.includes(`href="/${lang}/${geneticsLessonPath}"`));
    assert.ok(news.includes('id="psychobiology-genetics"'));
    assert.ok(news.includes(`/${lang}/articles/personality-genetics-nature-2026`));
  }
});

test('interaction stays local and styles support small screens and visible focus',async()=>{
  const quiz=await readFile(new URL('../components/genetics-lesson-quiz.tsx',import.meta.url),'utf8');
  assert.doesNotMatch(quiz,/fetch\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon/);
  assert.match(quiz,/disabled=\{!result\}/);assert.match(quiz,/disabled=\{submitted\}/);
  assert.match(quiz,/setAnswers\(questions.map\(\(\)=>-1\)\)/);
  assert.match(quiz,/role="status"/);assert.match(quiz,/focus-visible/);assert.match(quiz,/min-h-11/);
  const layout=await readFile(new URL('../components/genetics-lesson.tsx',import.meta.url),'utf8');
  assert.match(layout,/overflow-x-auto/);assert.match(layout,/sm:grid-cols-2/);assert.match(layout,/overflow-wrap: anywhere/);
});

test('cell diagrams expose independent localized zoom controls and fixed-size HTML markers', async()=>{
  const zoom=await readFile(new URL('../components/genetics-figure-zoom.tsx',import.meta.url),'utf8');
  assert.match(zoom,/minWidth: expanded \? '640px'/);
  assert.match(zoom,/tabIndex=\{expanded \? 0/);
  assert.match(zoom,/aria-expanded=\{expanded\}/);
  assert.doesNotMatch(zoom,/fetch\(|localStorage|sessionStorage|sendBeacon/);
  for(const lang of languages){
    const html=await(await fetchFromWorker(`/${lang}/${geneticsLessonPath}`)).text();
    assert.equal((html.match(/data-genetics-figure-zoom/g)??[]).length,2);
    const controls=[...html.matchAll(/aria-controls="([^"]+)"/g)].map(x=>x[1]);
    assert.equal(controls.length,2);assert.equal(new Set(controls).size,2);
    for(const id of controls)assert.ok(html.includes(`id="${id}"`));
    assert.equal((html.match(/aria-expanded="false"/g)??[]).length,2);
    assert.equal((html.match(/class="absolute inline-flex size-6/g)??[]).length,8);
    assert.doesNotMatch(html,/<text\b/,'numbers use HTML rather than shrinking SVG text');
  }
});
