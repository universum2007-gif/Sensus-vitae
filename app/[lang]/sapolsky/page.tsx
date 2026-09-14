import Link from "next/link";
import { ArrowLeft, BookOpen, Brain, MessageCircleQuestion } from "lucide-react";
import { notFound } from "next/navigation";
import { GlossaryTermButton } from "@/components/glossary-term-button";
import { type GlossaryTermId } from "@/lib/glossary";
import { isLanguage } from "@/lib/site-content";
import { sapolskyContent } from "@/lib/sapolsky-content";
import { createPageMetadata, pageMetadataCopy } from "@/lib/metadata";

const subsectionHeadings = new Set([
  "Итог главы", "Chapter conclusion", "Conclusión del capítulo", "Conclusie van het hoofdstuk",
  "Важные нюансы", "Important qualifications", "Matices importantes", "Belangrijke nuances",
  "Объяснение Сапольски", "Sapolsky’s explanation", "La explicación de Sapolsky", "Sapolsky’s uitleg",
  "Что добавляет современная наука", "What current science adds", "Lo que añade la ciencia actual", "Wat de huidige wetenschap toevoegt",
  "Источники к современному уточнению", "Sources for the modern qualification", "Fuentes para la actualización científica", "Bronnen voor de wetenschappelijke actualisering",
]);

const sapolskyGuideTerms: Record<"ru" | "es" | "en" | "nl", Record<number, GlossaryTermId[]>> = {
  ru: {
    1: ["stress-response", "homeostasis", "allostasis", "allostatic-load"],
    2: ["autonomic-nervous-system", "sympathetic-nervous-system", "parasympathetic-nervous-system", "hpa-axis", "glucocorticoids"],
    3: ["hypertension", "atherosclerosis", "inflammation"],
    4: ["glucocorticoids", "insulin", "insulin-resistance", "glycogen"],
    5: ["gut-brain-axis", "helicobacter-pylori", "peptic-ulcer", "functional-disorder"],
    6: ["growth-hormone", "early-life-stress", "psychosocial-dwarfism", "maternal-care", "developmental-programming"],
    7: ["reproductive-axis", "hpg-axis", "libido", "testosterone", "prolactin"],
    8: ["psychoneuroimmunology", "inflammation", "immunosuppression", "autoimmunity"],
    9: ["pain-asymbolia", "nociception", "gate-control", "analgesia", "endogenous-opioids"],
    10: ["declarative-memory", "procedural-memory", "hippocampus", "neurogenesis"],
    11: ["slow-wave-sleep", "rem-sleep", "memory-consolidation", "sleep-deprivation", "crh"],
    12: ["allostatic-load", "glucocorticoid-cascade", "successful-ageing", "hippocampal-feedback"],
    13: ["predictability", "perceived-control", "social-support", "cognitive-appraisal"],
    14: ["anhedonia", "learned-helplessness", "monoamine-system", "anterior-cingulate-cortex"],
    15: ["amygdala", "hostility", "emotional-suppression", "temperament"],
    16: ["dopamine", "tolerance", "opponent-process", "sensation-seeking", "dependence"],
    17: ["social-capital", "socioeconomic-status", "subjective-socioeconomic-status", "inequality", "allostatic-load"],
    18: ["coping", "cognitive-flexibility", "problem-focused-coping", "emotion-focused-coping"],
  },
  es: {
    1: ["stress-response", "homeostasis", "allostasis", "allostatic-load"],
    2: ["autonomic-nervous-system", "sympathetic-nervous-system", "parasympathetic-nervous-system", "hpa-axis", "glucocorticoids"],
    3: ["hypertension", "atherosclerosis", "inflammation"],
    4: ["glucocorticoids", "insulin", "insulin-resistance", "glycogen"],
    5: ["gut-brain-axis", "helicobacter-pylori", "peptic-ulcer", "functional-disorder"],
    6: ["growth-hormone", "early-life-stress", "psychosocial-dwarfism", "maternal-care", "developmental-programming"],
    7: ["reproductive-axis", "hpg-axis", "libido", "testosterone", "prolactin"],
    8: ["psychoneuroimmunology", "inflammation", "immunosuppression", "autoimmunity"],
    9: ["pain-asymbolia", "nociception", "gate-control", "analgesia", "endogenous-opioids"],
    10: ["declarative-memory", "procedural-memory", "hippocampus", "neurogenesis"],
    11: ["slow-wave-sleep", "rem-sleep", "memory-consolidation", "sleep-deprivation", "crh"],
    12: ["allostatic-load", "glucocorticoid-cascade", "successful-ageing", "hippocampal-feedback"],
    13: ["predictability", "perceived-control", "social-support", "cognitive-appraisal"],
    14: ["anhedonia", "learned-helplessness", "monoamine-system", "anterior-cingulate-cortex"],
    15: ["amygdala", "hostility", "emotional-suppression", "temperament"],
    16: ["dopamine", "tolerance", "opponent-process", "sensation-seeking", "dependence"],
    17: ["social-capital", "socioeconomic-status", "subjective-socioeconomic-status", "inequality", "allostatic-load"],
    18: ["coping", "cognitive-flexibility", "problem-focused-coping", "emotion-focused-coping"],
  },
  en: {
    1: ["stress-response", "homeostasis", "allostasis", "allostatic-load"],
    2: ["autonomic-nervous-system", "sympathetic-nervous-system", "parasympathetic-nervous-system", "hpa-axis", "glucocorticoids"],
    3: ["hypertension", "atherosclerosis", "inflammation"],
    4: ["glucocorticoids", "insulin", "insulin-resistance", "glycogen"],
    5: ["gut-brain-axis", "helicobacter-pylori", "peptic-ulcer", "functional-disorder"],
    6: ["growth-hormone", "early-life-stress", "psychosocial-dwarfism", "maternal-care", "developmental-programming"],
    7: ["reproductive-axis", "hpg-axis", "libido", "testosterone", "prolactin"],
    8: ["psychoneuroimmunology", "inflammation", "immunosuppression", "autoimmunity"],
    9: ["pain-asymbolia", "nociception", "gate-control", "analgesia", "endogenous-opioids"],
    10: ["declarative-memory", "procedural-memory", "hippocampus", "neurogenesis"],
    11: ["slow-wave-sleep", "rem-sleep", "memory-consolidation", "sleep-deprivation", "crh"],
    12: ["allostatic-load", "glucocorticoid-cascade", "successful-ageing", "hippocampal-feedback"],
    13: ["predictability", "perceived-control", "social-support", "cognitive-appraisal"],
    14: ["anhedonia", "learned-helplessness", "monoamine-system", "anterior-cingulate-cortex"],
    15: ["amygdala", "hostility", "emotional-suppression", "temperament"],
    16: ["dopamine", "tolerance", "opponent-process", "sensation-seeking", "dependence"],
    17: ["social-capital", "socioeconomic-status", "subjective-socioeconomic-status", "inequality", "allostatic-load"],
    18: ["coping", "cognitive-flexibility", "problem-focused-coping", "emotion-focused-coping"],
  },
  nl: {
    1: ["stress-response", "homeostasis", "allostasis", "allostatic-load"],
    2: ["autonomic-nervous-system", "sympathetic-nervous-system", "parasympathetic-nervous-system", "hpa-axis", "glucocorticoids"],
    3: ["hypertension", "atherosclerosis", "inflammation"],
    4: ["glucocorticoids", "insulin", "insulin-resistance", "glycogen"],
    5: ["gut-brain-axis", "helicobacter-pylori", "peptic-ulcer", "functional-disorder"],
    6: ["growth-hormone", "early-life-stress", "psychosocial-dwarfism", "maternal-care", "developmental-programming"],
    7: ["reproductive-axis", "hpg-axis", "libido", "testosterone", "prolactin"],
    8: ["psychoneuroimmunology", "inflammation", "immunosuppression", "autoimmunity"],
    9: ["pain-asymbolia", "nociception", "gate-control", "analgesia", "endogenous-opioids"],
    10: ["declarative-memory", "procedural-memory", "hippocampus", "neurogenesis"],
    11: ["slow-wave-sleep", "rem-sleep", "memory-consolidation", "sleep-deprivation", "crh"],
    12: ["allostatic-load", "glucocorticoid-cascade", "successful-ageing", "hippocampal-feedback"],
    13: ["predictability", "perceived-control", "social-support", "cognitive-appraisal"],
    14: ["anhedonia", "learned-helplessness", "monoamine-system", "anterior-cingulate-cortex"],
    15: ["amygdala", "hostility", "emotional-suppression", "temperament"],
    16: ["dopamine", "tolerance", "opponent-process", "sensation-seeking", "dependence"],
    17: ["social-capital", "socioeconomic-status", "subjective-socioeconomic-status", "inequality", "allostatic-load"],
    18: ["coping", "cognitive-flexibility", "problem-focused-coping", "emotion-focused-coping"],
  },
};

function FullSummary({paragraphs}:{paragraphs:string[]}) {
  const blocks: React.ReactNode[] = [];
  for (let i=0;i<paragraphs.length;i++) {
    const paragraph=paragraphs[i];
    if (paragraph.startsWith("* ")) {
      const items=[];
      while (i<paragraphs.length && paragraphs[i].startsWith("* ")) items.push(paragraphs[i++].slice(2));
      i--;
      blocks.push(<ul key={i} className="list-disc space-y-3 pl-6">{items.map((item,j)=><li key={j}>{item}</li>)}</ul>);
    } else if ((/^\d\. /.test(paragraph) && paragraph.length<100) || subsectionHeadings.has(paragraph)) {
      blocks.push(<h5 key={i} className="font-editorial pt-3 text-xl font-bold text-[#173d30]">{paragraph}</h5>);
    } else blocks.push(<p key={i}>{paragraph}</p>);
  }
  return <>{blocks}</>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return createPageMetadata({ lang, path: "sapolsky", ...pageMetadataCopy.sapolsky[lang] });
}

export default async function SapolskyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const c = sapolskyContent[lang];
  const back = { ru:"К библиотеке", es:"Volver a la biblioteca", en:"Back to library", nl:"Naar bibliotheek" }[lang];

  return <main className="mx-auto max-w-5xl px-5 py-12">
    <Link href={`/${lang}/library`} className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16}/>{back}</Link>
    <section className="paper-card relative mt-8 overflow-hidden rounded-[1.8rem] border bg-[#173d30] p-7 text-[#fffaf0] sm:p-12">
      <div className="absolute -right-10 -top-14 select-none text-[13rem] font-black leading-none text-white/[.045]" aria-hidden="true">Z</div>
      <p className="text-xs font-bold tracking-[.17em] text-[#d9bb78]">{c.eyebrow}</p>
      <div className="mt-5 flex items-start gap-4"><BookOpen className="mt-2 shrink-0 text-[#d9bb78]" size={30}/><div><h1 className="font-editorial text-4xl font-bold leading-tight sm:text-6xl">{c.title}</h1><p className="mt-4 text-lg text-[#e4ddcf]">{c.subtitle}</p></div></div>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-[#eee7d9]">{c.intro}</p>
    </section>

    <div className="mt-10 flex items-center gap-3"><Brain className="text-[#98722e]"/><h2 className="font-editorial text-3xl font-bold">{c.chaptersLabel}</h2></div>
    <div className="mt-7 space-y-5">
      {c.chapters.map((chapter) => <details key={chapter.number} className="paper-card group rounded-[1.4rem] border bg-card p-6 open:shadow-[0_18px_50px_rgba(35,61,47,.09)]" open={chapter.number===1}>
        <summary className="flex cursor-pointer list-none items-start gap-5 [&::-webkit-details-marker]:hidden">
          <span className="font-editorial flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#173d30] text-lg font-bold text-[#f2d797]">{chapter.number}</span>
          <div className="flex-1"><h3 className="font-editorial text-2xl font-bold leading-tight">{chapter.title}</h3><p className="mt-2 leading-7 text-[#526359]">{chapter.summary}</p></div>
          <span className="mt-2 text-2xl text-[#98722e] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <div className="ml-0 mt-6 border-t pt-6 sm:ml-16">
          {chapter.number === 1 && <img
            src="/sapolsky-chapter-1.png"
            alt={{ru:"Лев преследует зебру в саванне; женщина за ноутбуком размышляет о повседневных заботах.",es:"Un león persigue a una cebra; una mujer ante su portátil piensa en sus preocupaciones cotidianas.",en:"A lion chases a zebra; a woman at her laptop thinks about everyday worries.",nl:"Een leeuw achtervolgt een zebra; een vrouw bij haar laptop denkt aan dagelijkse zorgen."}[lang]}
            width={1536}
            height={1024}
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 2 && <img
            src="/sapolsky-chapter-2.png"
            alt={{ru:"Художественная иллюстрация нервной и гормональной реакции на стресс: мозг, надпочечники и телесные реакции.",es:"Ilustración artística de la respuesta nerviosa y hormonal al estrés: cerebro, suprarrenales y reacciones corporales.",en:"Artistic illustration of neural and hormonal stress responses: the brain, adrenal glands and bodily reactions.",nl:"Artistieke illustratie van zenuw- en hormoonreacties op stress: hersenen, bijnieren en lichamelijke reacties."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 3 && <img
            src="/sapolsky-chapter-3.png"
            alt={{ru:"Художественная иллюстрация стресса и сердечно-сосудистой системы: сердце, сосуд, измерение давления, приматы и задумчивая женщина.",es:"Ilustración artística del estrés y el sistema cardiovascular: corazón, arteria, medición de presión, primates y una mujer pensativa.",en:"Artistic illustration of stress and the cardiovascular system: a heart, artery, pressure gauge, primates and a thoughtful woman.",nl:"Artistieke illustratie van stress en het hart-vaatstelsel: hart, slagader, drukmeter, primaten en een nadenkende vrouw."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 4 && <img
            src="/sapolsky-chapter-4.png"
            alt={{ru:"Художественная иллюстрация стресса и обмена веществ: погоня за зеброй, силуэт человека, печень, мышцы и символические запасы энергии.",es:"Ilustración artística del estrés y el metabolismo: una cebra perseguida, silueta humana, hígado, músculos y reservas simbólicas de energía.",en:"Artistic illustration of stress and metabolism: a zebra being chased, a human silhouette, liver, muscles and symbolic energy stores.",nl:"Artistieke illustratie van stress en stofwisseling: een achtervolgde zebra, menselijk silhouet, lever, spieren en symbolische energievoorraden."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 5 && <img
            src="/sapolsky-chapter-5.png"
            alt={{ru:"Художественная иллюстрация стресса и пищеварения: задумчивая женщина, изображение желудка и увеличенные бактерии.",es:"Ilustración artística del estrés y la digestión: una mujer pensativa, un estómago y bacterias ampliadas.",en:"Artistic illustration of stress and digestion: a thoughtful woman, a stomach and magnified bacteria.",nl:"Artistieke illustratie van stress en spijsvertering: een peinzende vrouw, een maag en uitvergrote bacteriën."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 6 && <img
            src="/sapolsky-chapter-6.png"
            alt={{ru:"Художественная иллюстрация раннего развития: мать с ребёнком, силуэт беременной женщины, спираль ДНК и этапы роста.",es:"Ilustración artística del desarrollo temprano: una madre con su bebé, la silueta de una embarazada, una hélice de ADN y etapas de crecimiento.",en:"Artistic illustration of early development: a mother with her baby, a pregnant silhouette, a DNA helix and stages of growth.",nl:"Artistieke illustratie van vroege ontwikkeling: een moeder met haar baby, een zwanger silhouet, een DNA-helix en groeifasen."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 7 && <img
            src="/sapolsky-chapter-7.png"
            alt={{ru:"Художественная иллюстрация стрессовой реакции: задумчивая женщина, примат, мозг и надпочечники с обозначениями CRH, ACTH и кортизола, рядом пасущаяся зебра.",es:"Ilustración artística de la respuesta al estrés: una mujer pensativa, un primate, cerebro y glándulas suprarrenales con las etiquetas CRH, ACTH y cortisol, junto a una cebra pastando.",en:"Artistic illustration of the stress response: a thoughtful woman, a primate, brain and adrenal glands labelled CRH, ACTH and cortisol, beside a grazing zebra.",nl:"Artistieke illustratie van de stressreactie: een peinzende vrouw, een primaat, hersenen en bijnieren met de labels CRH, ACTH en cortisol, naast een grazende zebra."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 8 && <img
            src="/sapolsky-chapter-8.png"
            alt={{ru:"Иллюстрация острого и хронического стресса: женщина и зебра, мозг и надпочечники, символы систем организма; подписи на английском.",es:"Ilustración del estrés agudo y crónico: una mujer y una cebra, cerebro y glándulas suprarrenales, símbolos de los sistemas corporales; etiquetas en inglés.",en:"Illustration of acute and chronic stress: a woman and a zebra, brain and adrenal glands, and symbols of body systems, with English labels.",nl:"Illustratie van acute en chronische stress: een vrouw en een zebra, hersenen en bijnieren, en symbolen van lichaamssystemen; Engelse bijschriften."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 9 && <img
            src="/sapolsky-chapter-9.png"
            alt={{ru:"Художественная иллюстрация стресса и боли: зебра убегает от льва, женщина держится за плечо, светящиеся линии связывают мозг с болезненными участками тела.",es:"Ilustración artística del estrés y el dolor: una cebra huye de un león, una mujer se sujeta el hombro y líneas luminosas conectan el cerebro con las zonas doloridas del cuerpo.",en:"Artistic illustration of stress and pain: a zebra flees a lion, a woman holds her shoulder, and glowing lines connect the brain with painful areas of the body.",nl:"Artistieke illustratie van stress en pijn: een zebra vlucht voor een leeuw, een vrouw houdt haar schouder vast en lichtgevende lijnen verbinden de hersenen met pijnlijke lichaamsdelen."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 10 && <img
            src="/sapolsky-chapter-10.png"
            alt={{ru:"Художественная иллюстрация памяти: задумчивая женщина, силуэт головы с деревом из светящихся ветвей и фотографиями, переходящими в тёмные рассыпающиеся образы.",es:"Ilustración artística de la memoria: una mujer pensativa y una silueta de cabeza con un árbol de ramas luminosas y fotografías que se transforman en imágenes oscuras y fragmentadas.",en:"Artistic illustration of memory: a thoughtful woman and a head silhouette containing a tree of glowing branches and photographs fading into dark, fragmented images.",nl:"Artistieke illustratie van het geheugen: een peinzende vrouw en een hoofdsilhouet met een boom van lichtgevende takken en foto’s die overgaan in donkere, uiteenvallende beelden."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 11 && <img
            src="/sapolsky-chapter-11.png"
            alt={{ru:"Художественная иллюстрация: женщина наблюдает за двумя зебрами в светлом и мрачном пейзажах, между ними спираль ДНК, листья и изображение мозга.",es:"Ilustración artística: una mujer observa dos cebras en paisajes luminosos y oscuros, separadas por una hélice de ADN, hojas y una imagen del cerebro.",en:"Artistic illustration: a woman observes two zebras in bright and dark landscapes, separated by a DNA helix, leaves and an image of the brain.",nl:"Artistieke illustratie: een vrouw kijkt naar twee zebra’s in lichte en donkere landschappen, met daartussen een DNA-helix, bladeren en een afbeelding van de hersenen."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 12 && <img
            src="/sapolsky-chapter-12.png"
            alt={{ru:"Художественная иллюстрация покоя и напряжения: женщина со спящим ребёнком в солнечном пейзаже и женщина, держащаяся за голову, под тёмными облаками; над ними изображения мозга.",es:"Ilustración artística de calma y tensión: una mujer con un niño dormido en un paisaje soleado y otra sujetándose la cabeza bajo nubes oscuras, con imágenes del cerebro sobre ambas.",en:"Artistic illustration of calm and tension: a woman with a sleeping child in a sunny landscape and another holding her head beneath dark clouds, with images of the brain above them.",nl:"Artistieke illustratie van rust en spanning: een vrouw met een slapend kind in een zonnig landschap en een vrouw die haar hoofd vasthoudt onder donkere wolken, met hersenafbeeldingen boven hen."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 13 && <img
            src="/sapolsky-chapter-13.png"
            alt={{ru:"Художественная иллюстрация: мать обнимает ребёнка в солнечном пейзаже, рядом силуэт человека с мозгом и надпочечниками, справа тревожная женщина под тёмными облаками в форме льва.",es:"Ilustración artística: una madre abraza a su hijo en un paisaje soleado, junto a una silueta humana con cerebro y glándulas suprarrenales; a la derecha, una mujer preocupada bajo nubes oscuras con forma de león.",en:"Artistic illustration: a mother embraces her child in a sunny landscape, beside a human silhouette showing the brain and adrenal glands; on the right, a worried woman beneath dark lion-shaped clouds.",nl:"Artistieke illustratie: een moeder omhelst haar kind in een zonnig landschap, naast een menselijk silhouet met hersenen en bijnieren; rechts een bezorgde vrouw onder donkere wolken in de vorm van een leeuw."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 14 && <img
            src="/sapolsky-chapter-14.png"
            alt={{ru:"Художественная иллюстрация: задумчивая женщина с изображением мозга, слева сцена угрозы со львом под тёмными облаками, справа спокойный силуэт женщины и зебра в солнечном пейзаже.",es:"Ilustración artística: una mujer pensativa con una imagen del cerebro, una escena amenazante con un león bajo nubes oscuras a la izquierda y una silueta serena con una cebra en un paisaje soleado a la derecha.",en:"Artistic illustration: a thoughtful woman with an image of the brain, a threatening lion beneath dark clouds on the left, and a calm female silhouette with a zebra in a sunny landscape on the right.",nl:"Artistieke illustratie: een peinzende vrouw met een hersenafbeelding, links een dreigende leeuw onder donkere wolken en rechts een rustig vrouwelijk silhouet met een zebra in een zonnig landschap."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 15 && <img
            src="/sapolsky-chapter-15.png"
            alt={{ru:"Художественная иллюстрация: задумчивая женщина, свободные зебры и зебра у ограды, изображения мозга и надпочечников, светящиеся линии и символы органов рядом с каменными ступенями.",es:"Ilustración artística: una mujer pensativa, cebras libres y una cebra junto a una valla, imágenes del cerebro y las glándulas suprarrenales, líneas luminosas y símbolos de órganos junto a escalones de piedra.",en:"Artistic illustration: a thoughtful woman, free zebras and a zebra beside a fence, images of the brain and adrenal glands, glowing lines and organ symbols beside stone steps.",nl:"Artistieke illustratie: een peinzende vrouw, vrije zebra’s en een zebra bij een hek, afbeeldingen van hersenen en bijnieren, lichtgevende lijnen en orgaansymbolen naast stenen treden."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 16 && <img
            src="/sapolsky-chapter-16.png"
            alt={{ru:"Художественная иллюстрация: задумчивая женщина, группа павианов, изображения мозга и надпочечников и сцены общения и одиночества среди людей.",es:"Ilustración artística: una mujer pensativa, un grupo de babuinos, imágenes del cerebro y las glándulas suprarrenales y escenas de interacción social y soledad entre personas.",en:"Artistic illustration: a thoughtful woman, a group of baboons, images of the brain and adrenal glands, and scenes of social interaction and loneliness among people.",nl:"Artistieke illustratie: een peinzende vrouw, een groep bavianen, afbeeldingen van hersenen en bijnieren en scènes van sociaal contact en eenzaamheid tussen mensen."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 17 && <img
            src="/sapolsky-chapter-17.jpeg"
            alt={{ru:"Художественная иллюстрация социальной иерархии и здоровья: люди находятся на разных уровнях каменной лестницы рядом с указателями «Статус», «Контроль», «Принадлежность», «Возможности» и «Здоровье».",es:"Ilustración artística de la jerarquía social y la salud: varias personas ocupan distintos niveles de una escalera de piedra junto a señales de estatus, control, pertenencia, oportunidades y salud.",en:"Artistic illustration of social hierarchy and health: people occupy different levels of stone steps beside signs for status, control, belonging, opportunities and health.",nl:"Artistieke illustratie van sociale hiërarchie en gezondheid: mensen bevinden zich op verschillende niveaus van een stenen trap naast wegwijzers voor status, controle, verbondenheid, kansen en gezondheid."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          {chapter.number === 18 && <img
            src="/sapolsky-chapter-18.jpeg"
            alt={{ru:"Художественная иллюстрация способов справляться со стрессом: женщина смотрит на символы социальной поддержки, движения, равновесия, здорового питания и заботы о мозге.",es:"Ilustración artística de formas de afrontar el estrés: una mujer contempla símbolos de apoyo social, ejercicio, equilibrio, alimentación saludable y cuidado del cerebro.",en:"Artistic illustration of ways to cope with stress: a woman looks at symbols of social support, exercise, balance, healthy food and brain care.",nl:"Artistieke illustratie van manieren om met stress om te gaan: een vrouw kijkt naar symbolen van sociale steun, beweging, evenwicht, gezonde voeding en zorg voor de hersenen."}[lang]}
            width={1536}
            height={1024}
            loading="lazy"
            className="mb-7 block h-auto w-full rounded-2xl"
          />}
          <h4 className="text-sm font-bold uppercase tracking-[.12em] text-[#8f6c2f]">{c.keyIdeas}</h4>
          <ul className="mt-3 space-y-2 leading-7 text-[#526359]">{chapter.points.map((point)=><li key={point} className="flex gap-3"><span className="text-[#b48a39]">•</span><span>{point}</span></li>)}</ul>
          <div className="mt-6 rounded-xl bg-[#f4efe4] p-4"><p className="text-xs font-bold uppercase tracking-[.12em] text-[#8f6c2f]">{c.termsLabel}</p><div className="mt-3 flex flex-wrap gap-2">{(sapolskyGuideTerms[lang][chapter.number] ?? []).map((termId) => <GlossaryTermButton key={`${chapter.number}-${termId}`} id={termId} locale={lang} />)}</div></div>
          <div className="mt-4 flex gap-3 rounded-xl border border-[#d9c99f] p-4"><MessageCircleQuestion className="mt-1 shrink-0 text-[#98722e]" size={20}/><div><p className="text-xs font-bold uppercase tracking-[.12em] text-[#8f6c2f]">{c.questionLabel}</p><p className="mt-2 leading-7 text-[#40564b]">{chapter.question}</p></div></div>
          {chapter.fullText && <section className="mt-6 rounded-2xl border border-[#d9c99f] bg-[#fffdf8] p-5 sm:p-7">
            <h4 className="font-editorial text-2xl font-bold text-[#173d30]">{c.fullTextLabel}</h4>
            <div className="mt-5 space-y-5 text-[1.02rem] leading-8 text-[#40564b]">
              <FullSummary paragraphs={chapter.fullText}/>
            </div>
          </section>}
        </div>
      </details>)}
    </div>
    <p className="mt-9 text-sm leading-6 text-muted-foreground">{c.note}</p>
  </main>;
}
