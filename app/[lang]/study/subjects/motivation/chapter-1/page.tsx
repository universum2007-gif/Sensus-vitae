import Link from 'next/link';
import { tema2Path, tema2CardTitle } from '@/lib/motivation-chapter-two';
import { notFound } from 'next/navigation';
import { isLanguage } from '@/lib/site-content';
import { createPageMetadata } from '@/lib/metadata';
import { StudyChapter } from '@/components/study-chapter';
import { EducationalNewsQuiz } from '@/components/educational-news-quiz';
import { motivationPath, motivationTitle, motivationIntro, motivationSubject, motivationHtml, motivationSectionIds, motivationQuestions, motivationQuizTitle, motivationQuizCopy } from '@/lib/motivation-chapter-one';
type Params={params:Promise<{lang:string}>};
export async function generateMetadata({params}:Params){const {lang}=await params;if(!isLanguage(lang))notFound();return createPageMetadata({lang,path:motivationPath,title:motivationTitle[lang],description:motivationIntro[lang]});}
export default async function MotivationChapter({params}:Params){
 const {lang}=await params;if(!isLanguage(lang))notFound();
 return <><StudyChapter lang={lang} title={motivationTitle[lang]} subtitle={motivationIntro[lang]} subject={motivationSubject[lang]} subjectPath="study/subjects/motivation" chaptersLabel={{ru:'Главы',es:'Temas',en:'Chapters',nl:'Hoofdstukken'}[lang]} currentLabel={{ru:'Глава 1',es:'Tema 1',en:'Chapter 1',nl:'Hoofdstuk 1'}[lang]} html={motivationHtml(lang)} sectionIds={motivationSectionIds} introductorySectionId="study-guide" afterContent={<><section aria-labelledby="self-check"><h2 id="self-check">{motivationQuizTitle[lang]}</h2><EducationalNewsQuiz locale={lang} questions={motivationQuestions(lang)} copy={motivationQuizCopy[lang]}/></section><nav className="mt-8 border-t pt-4" aria-label={{ru:"Связанные главы",es:"Temas relacionados",en:"Related chapters",nl:"Gerelateerde hoofdstukken"}[lang]}><Link className="sv-ui-link inline-flex min-h-11 items-center" href={`/${lang}/${tema2Path}`}>{tema2CardTitle[lang]} →</Link></nav></>}/>
 <style>{`.study-chapter { min-width:0; overflow-wrap:break-word; } .study-chapter .mot-diagram { border:1px solid #cbd8ce; background:#eef3ed; border-radius:1rem; padding:1rem; margin:1.5rem 0; max-width:80ch; } .study-chapter .mot-diagram figcaption { font-weight:700; } .study-chapter .mot-diagram ol { list-style:none; padding:0; } .study-chapter .mot-diagram ol li { border-left:3px solid #98722e; padding:.6rem .8rem; background:white; margin:.65rem 0; } .study-chapter .mot-diagram h3 { font-size:1.15rem; } .study-chapter .ref { font-size:.85rem; color:#607068; } .study-chapter .mot-question { border-left:3px solid #98722e; padding-left:1rem; } .study-chapter dd { margin:0 0 1rem; max-width:80ch; } .study-chapter summary { min-height:44px; } .study-chapter .table-wrap { max-width:100%; } .study-chapter table { min-width:32rem; } .study-chapter .table-wrap:focus-visible,.study-chapter summary:focus-visible { outline:2px solid #98722e; outline-offset:3px; }`}</style></>;
}
