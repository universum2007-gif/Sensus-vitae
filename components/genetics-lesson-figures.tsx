import { GeneticsFigureZoom } from "./genetics-figure-zoom";
import type { Language } from "@/lib/site-content";
import type { GeneticsLesson } from '@/lib/psychiatric-genetics/types';

// Original vector schematics. Labels stay in HTML so they remain readable on phones.
export function GeneticsHero({ alt }: { alt: string }) {
  const strand = (phase: number) => Array.from({length: 81}, (_, i) => { const y = 85 + i * 370 / 80; const x = 180 + 55 * Math.sin(i / 80 * 3 * Math.PI + phase); return `${i === 0 ? "M" : "L"}${x} ${y}`; }).join(" ");
  return <svg role="img" aria-label={alt} viewBox="0 0 960 540" className="aspect-video w-full rounded-2xl border bg-[#f6f1e7]">
    <rect width="960" height="540" fill="#f6f1e7"/>
    <g fill="none" stroke="#174f3c" strokeWidth="4">
      <path d={strand(0)}/><path d={strand(Math.PI)}/>
      {Array.from({length: 16}, (_, i) => 95 + i * 23).map(y => { const dx = 55 * Math.sin((y - 85) / 370 * 3 * Math.PI); return <path key={y} d={`M${180 + dx} ${y} H${180 - dx}`} stroke="#a27b30" strokeWidth="3"/>; })}
      <path d="M458 102 C410 58 347 105 355 154 C313 159 309 226 338 247 C299 287 327 344 369 350 C356 414 420 451 466 416 M466 111 V416 M485 103 C530 64 590 95 591 147 C638 156 650 219 618 246 C659 294 638 344 591 357 C603 415 533 450 485 417 M485 112 V416" fill="#e7eee4"/>
      <path d="M368 165 Q419 178 433 131 M352 252 Q409 227 441 280 M374 345 Q423 320 442 388 M518 132 Q536 194 585 171 M512 277 Q575 234 619 255 M509 384 Q542 318 585 345" strokeWidth="3"/>
      <g stroke="#98722e" strokeWidth="2">
        <path d="M396 180 L436 245 L382 303 L425 364 M436 245 L535 207 L566 294 L528 365 M535 207 L579 173 M566 294 L591 338 M382 303 L353 252"/>
      </g>
      <path d="M258 267 H305 M662 267 H702" strokeDasharray="7 9"/>
      {[120,195,270,345,420].map((y,i)=><g key={y}><path d={`M705 270 Q730 ${y} 783 ${y}`} stroke="#98722e" strokeDasharray="7 9"/><circle cx="820" cy={y} r="27" fill={i%2?'#e5dcc8':'#dce8dc'}/></g>)}
    </g>
    {[ [396,180],[436,245],[382,303],[425,364],[535,207],[566,294],[528,365],[579,173] ].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#98722e"/>)}
  </svg>;
}

export function CellFigure({ kind, copy, note, locale }: { kind: 'neuron' | 'glia'; copy: GeneticsLesson['biology'][number]; note: string; locale: Language }) {
  return <figure className="rounded-2xl border border-[#e5dcc8] bg-[#f7f1e7] p-4 sm:p-6">
    <GeneticsFigureZoom locale={locale} title={copy.title}>
    <svg role="img" aria-label={copy.alt} viewBox="0 0 640 300" className="w-full">
      <rect width="640" height="300" fill="#f7f1e7"/>
      {kind === 'neuron' ? <>
        <g stroke="#174f3c" strokeWidth="5" fill="none" strokeLinecap="round">
          <path d="M150 145 L89 92 L55 85 M89 92 L78 40 M150 145 L75 153 L35 125 M75 153 L37 190 M150 145 L91 213 L82 261 M91 213 L41 239 M150 145 L138 70 L111 37 M138 70 L168 36"/>
          <path d="M193 151 C250 125 340 184 435 151 L506 151 M506 151 L556 87 L605 67 M556 87 L571 36 M506 151 L560 156 L609 127 M560 156 L609 188 M506 151 L555 220 L602 247 M555 220 L555 264"/>
        </g>
        <ellipse cx="170" cy="150" rx="40" ry="32" fill="#dce8dc" stroke="#174f3c" strokeWidth="3"/><circle cx="170" cy="150" r="13" fill="#b48a39"/>
        <g fill="#b48a39">{[[605,67],[571,36],[609,127],[609,188],[602,247],[555,264]].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="6"/>)}</g>
      </> : <>
        <g stroke="#174f3c" strokeWidth="5" fill="none"><path d="M55 192 H595 M55 260 H595"/><path d="M320 69 C230 100 190 130 148 190 M320 69 C375 120 425 115 492 190 M320 69 C272 130 281 215 281 260"/></g>
        <g fill="#e5d5aa" stroke="#98722e" strokeWidth="2">{[110,225,340,455].map(x=><g key={x}><rect x={x} y="178" width="84" height="28" rx="13"/><rect x={x} y="246" width="84" height="28" rx="13"/></g>)}</g>
        <ellipse cx="320" cy="65" rx="35" ry="26" fill="#dce8dc" stroke="#174f3c" strokeWidth="3"/><circle cx="320" cy="65" r="11" fill="#b48a39"/>
      </>}
    </svg>
    {kind === "neuron" ? <><Number x={55} y={106} value={1}/><Number x={174} y={207} value={2}/><Number x={357} y={112} value={3}/><Number x={585} y={212} value={4}/></> : <><Number x={395} y={35} value={1}/><Number x={73} y={230} value={2}/><Number x={152} y={149} value={3}/><Number x={210} y={220} value={4}/></>}
    </GeneticsFigureZoom>
    <ol className="mt-3 grid gap-2 text-sm leading-6 sm:grid-cols-2">{copy.labels.map((label,i)=><li key={label} className="flex items-start gap-2"><span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#174f3c] text-white">{i+1}</span>{label}</li>)}</ol>
    <figcaption className="mt-4 text-sm text-[#53655c]">{note}</figcaption>
  </figure>;
}
function Number({x,y,value}:{x:number;y:number;value:number}) {
  return <span aria-hidden="true" className="absolute inline-flex size-6 items-center justify-center rounded-full bg-[#174f3c] text-sm font-bold leading-none text-white" style={{ left: `${x / 640 * 100}%`, top: `${y / 300 * 100}%`, transform: "translate(-50%, -50%)" }}>{value}</span>;
}
