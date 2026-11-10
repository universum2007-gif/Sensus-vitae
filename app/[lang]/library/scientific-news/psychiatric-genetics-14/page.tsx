import { notFound } from 'next/navigation';
import { GeneticsLesson } from '@/components/genetics-lesson';
import { geneticsLesson, geneticsLessonPath } from '@/lib/psychiatric-genetics';
import { isLanguage } from '@/lib/site-content';
import { createPageMetadata } from '@/lib/metadata';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if (!isLanguage(lang)) notFound();
  const c=geneticsLesson[lang];
  return createPageMetadata({lang,path:geneticsLessonPath,title:c.title,description:c.summary});
}
export default async function Page({params}:{params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if (!isLanguage(lang)) notFound();
  return <GeneticsLesson lang={lang}/>;
}
