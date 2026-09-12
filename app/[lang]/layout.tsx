import{notFound}from"next/navigation";import{SiteHeader}from"@/components/site-header";import{SiteFooter}from"@/components/site-footer";import{isLanguage}from"@/lib/site-content";
export async function generateMetadata({params}:{params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if(!isLanguage(lang)) notFound();
  return {description:{ru:"Психология, философия и осознанное мышление — учебные материалы Екатерины Ионовой и клуба Sensus Vitae.",es:"Psicología, filosofía y pensamiento consciente: materiales de estudio de Jekaterina Ionova y el club Sensus Vitae.",en:"Psychology, philosophy and conscious thinking: study materials by Jekaterina Ionova and the Sensus Vitae club.",nl:"Psychologie, filosofie en bewust denken: studiemateriaal van Jekaterina Ionova en de club Sensus Vitae."}[lang]};
}
export default async function LanguageLayout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const{lang}=await params;if(!isLanguage(lang))notFound();return <><SiteHeader lang={lang}/>{children}<SiteFooter lang={lang}/></>}
