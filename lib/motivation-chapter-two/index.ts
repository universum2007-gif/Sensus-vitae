import type { Language } from '../site-content';
import ru from './ru';
import es from './es';
import en from './en';
import nl from './nl';

export const tema2Path = 'study/subjects/motivation/chapter-2';
export const tema2Title: Record<Language, string> = {
  ru: 'Мотивация: почему мы начинаем действовать, выбираем цель и продолжаем путь',
  es: 'Motivación: por qué empezamos a actuar, elegimos una meta y perseveramos',
  en: 'Motivation: why we start acting, choose a goal and keep going',
  nl: 'Motivatie: waarom we beginnen, een doel kiezen en doorgaan',
};
export const tema2CardTitle: Record<Language, string> = {
  ru: 'Глава 2. Мотивация как базовый психологический процесс',
  es: 'Tema 2. La motivación como proceso psicológico básico',
  en: 'Chapter 2. Motivation as a basic psychological process',
  nl: 'Hoofdstuk 2. Motivatie als psychologisch basisproces',
};
export const tema2Intro: Record<Language, string> = {
  ru: 'Понятия, предпосылки и методы: четыре измерения, четыре уровня анализа и три исследовательские парадигмы. Примеры и самопроверка.',
  es: 'Conceptos, antecedentes y métodos: cuatro dimensiones, cuatro niveles de análisis y tres paradigmas de investigación. Ejemplos y autoevaluación.',
  en: 'Concepts, antecedents and methods: four dimensions, four levels of analysis and three research paradigms. Examples and self-checks.',
  nl: 'Begrippen, achtergronden en methoden: vier dimensies, vier analyseniveaus en drie onderzoeksparadigma’s. Voorbeelden en zelftoetsing.',
};
export const tema2SectionIds = ['study-guide', 'motivacion', 'eor', 'distinciones', 'cognicion-emocion', 'medicion', 'filosofia', 'fisiologia', 'psicologia', 'dimensiones', 'niveles', 'paradigmas', 'contextos', 'repaso', 'glosario', 'sources'] as const;
export const tema2Markdown: Record<Language, string> = { ru, es, en, nl };

const tableLabels: Record<Language, string> = {ru:'Таблица',es:'Tabla',en:'Table',nl:'Tabel'};
const escape = (s:string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
// Deliberately limited to the trusted, repository-owned chapter format. No visitor input or raw HTML is rendered.
function inline(s:string):string {
  return escape(s).replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+|#[a-z0-9-]+)\)/g,'<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
}
function render(markdown:string,lang:Language):string {
  const lines=markdown.split('\n'); let html=''; let i=0; let table=0;
  const special=(s:string) => !s.trim() || /^#{2,3} |^\||^<details>|^<\/details>|^\d+\. |^- /.test(s);
  while(i<lines.length){
    const line=lines[i].trim();
    if(!line){i++;continue;}
    if(line.startsWith('<details>')){
      const summary=line.match(/^<details><summary>([^<]+)<\/summary>$/);
      if(!summary)throw Error('Unexpected chapter disclosure');
      const body:string[]=[];i++;while(i<lines.length&&lines[i].trim()!=='</details>')body.push(lines[i++]);
      if(i===lines.length)throw Error('Unclosed chapter disclosure');
      html+=`<details><summary>${inline(summary[1])}</summary>${render(body.join('\n'),lang)}</details>`;i++;continue;
    }
    const heading=line.match(/^(#{2,3}) (.+)$/);
    if(heading){const n=heading[1].length;html+=`<h${n}>${inline(heading[2])}</h${n}>`;i++;continue;}
    if(line.startsWith('|')){
      const rows:string[][]=[];
      while(i<lines.length&&lines[i].trim().startsWith('|'))rows.push(lines[i++].trim().slice(1,-1).split('|').map(x=>x.trim()));
      if(!rows[1]?.every(x=>/^:?-+:?$/.test(x)))throw Error('Invalid chapter table');
      table++;
      const label=`${tableLabels[lang]} ${table}: ${rows[0].join(' · ')}`;
      html+=`<div class="table-wrap" role="region" tabindex="0" aria-label="${escape(label)}"><table><caption class="sr-only">${escape(label)}</caption><thead><tr>${rows[0].map(c=>`<th scope="col">${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(2).map(row=>`<tr>${row.map((c,j)=>j===0?`<th scope="row">${inline(c)}</th>`:`<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;continue;
    }
    const list=line.match(/^(\d+\. |\- )/);
    if(list){const ordered=list[1]!=='- '; const tag=ordered?'ol':'ul';html+=`<${tag}>`;while(i<lines.length&&(ordered?/^\d+\. /:/^- /).test(lines[i].trim()))html+=`<li>${inline(lines[i++].trim().replace(ordered?/^\d+\. /:/^- /,''))}</li>`;html+=`</${tag}>`;continue;}
    const p=[line];i++;while(i<lines.length&&!special(lines[i].trim()))p.push(lines[i++].trim());
    html+=`<p>${inline(p.join(' '))}</p>`;
  }
  return html;
}
export function tema2Html(lang:Language):string {
  const markdown=tema2Markdown[lang].replace(/^# .+\n/,'')
    .replace(/### Содержание[\s\S]*?(?=<a id="motivacion">)/,'')
    .replace(/<a id="[a-z-]+"><\/a>\n/g,'');
  return render(markdown,lang);
}
