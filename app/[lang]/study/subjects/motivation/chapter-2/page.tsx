import Link from 'next/link';
import {notFound} from 'next/navigation';
import {isLanguage} from '@/lib/site-content';
import {createPageMetadata} from '@/lib/metadata';
import {StudyChapter} from '@/components/study-chapter';
import {motivationSubject, motivationPath} from '@/lib/motivation-chapter-one';
import {tema2Path,tema2Title,tema2Intro,tema2Html,tema2SectionIds} from '@/lib/motivation-chapter-two';
type Params={params:Promise<{lang:string}>};
export async function generateMetadata({params}:Params){const {lang}=await params;if(!isLanguage(lang))notFound();return createPageMetadata({lang,path:tema2Path,title:tema2Title[lang],description:tema2Intro[lang]});}
export default async function MotivationChapterTwo({params}:Params){
 const {lang}=await params;if(!isLanguage(lang))notFound();
 return <><StudyChapter lang={lang} title={tema2Title[lang]} subtitle={tema2Intro[lang]} subject={motivationSubject[lang]} subjectPath="study/subjects/motivation" chaptersLabel={{ru:'Главы',es:'Temas',en:'Chapters',nl:'Hoofdstukken'}[lang]} currentLabel={{ru:'Глава 2',es:'Tema 2',en:'Chapter 2',nl:'Hoofdstuk 2'}[lang]} html={tema2Html(lang)} sectionIds={tema2SectionIds} introductorySectionId="study-guide" afterContent={<nav className="mt-8 border-t pt-4" aria-label={{ru:'Связанные главы',es:'Temas relacionados',en:'Related chapters',nl:'Gerelateerde hoofdstukken'}[lang]}><Link className="sv-ui-link inline-flex min-h-11 items-center" href={`/${lang}/${motivationPath}`}>← {{ru:'Глава 1. Введение в научную психологию',es:'Tema 1. Introducción al estudio de la Psicología',en:'Chapter 1. Introduction to scientific psychology',nl:'Hoofdstuk 1. Inleiding tot de wetenschappelijke psychologie'}[lang]}</Link></nav>}/>
 <style>{`.study-chapter { min-width:0; overflow-wrap:break-word; } .study-chapter .chapter-index { flex-shrink:0; min-width:1.2rem; white-space:nowrap; } .study-chapter .table-wrap { max-width:100%; } .study-chapter table { min-width:36rem; } .study-chapter tbody th { font-weight:500; } .study-chapter summary { min-height:44px; } .study-chapter summary:focus-visible,.study-chapter .table-wrap:focus-visible { outline:2px solid #98722e; outline-offset:3px; }`}</style></>;
}
