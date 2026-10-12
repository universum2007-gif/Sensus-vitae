'use client';
import { useEffect, useRef, useState } from 'react';
import type { GeneticsLesson, LessonQuestion } from '@/lib/psychiatric-genetics/types';
import { gradeGeneticsQuiz } from '@/lib/psychiatric-genetics/quiz';

export function GeneticsLessonQuiz({ questions, copy, locale }: { questions: LessonQuestion[]; copy: GeneticsLesson['quizCopy']; locale: string }) {
  const [answers, setAnswers] = useState<number[]>(() => questions.map(() => -1));
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const interacted = useRef(false);
  const result = gradeGeneticsQuiz(questions, answers);
  useEffect(() => {
    if (!interacted.current) return;
    if (submitted) resultRef.current?.focus();
    else formRef.current?.querySelector<HTMLInputElement>('input')?.focus();
  }, [submitted]);
  return <form ref={formRef} onSubmit={event => { event.preventDefault(); if (result) { interacted.current = true; setSubmitted(true); } }} className="space-y-6">
    {questions.map((q,i)=><fieldset disabled={submitted} key={i} className="rounded-2xl border border-[#e5dcc8] bg-[#fffefb] p-4 sm:p-6">
      <legend className="px-2 text-base font-bold leading-7">{i+1}. {q.question}</legend>
      <div className="grid gap-3">{q.choices.map((choice,j)=><label key={j} className="sv-quiz-choice flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-[#e5dcc8] bg-[#f7f1e7] p-3 leading-7 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#174f3c]">
        <input type="radio" name={`genetics-${locale}-${i}`} value={j} checked={answers[i] === j} onChange={()=>setAnswers(current=>current.map((v,k)=>k === i ? j : v))} className="mt-2 size-4 shrink-0 accent-[#174f3c]"/>
        <span>{String.fromCharCode(65+j)}. {choice}</span>
      </label>)}</div>
    </fieldset>)}
    {!submitted && <>
      <p id="genetics-quiz-help" className="text-sm leading-6" aria-live="polite">{!result ? copy.complete : `${answers.filter(a=>a>=0).length}/${questions.length}`}</p>
      <button type="submit" disabled={!result} aria-describedby="genetics-quiz-help" className="min-h-11 rounded-xl bg-[#174f3c] px-6 py-3 font-bold text-white disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174f3c]">{copy.submit}</button>
    </>}
    {submitted && result && <div ref={resultRef} tabIndex={-1} className="space-y-4 rounded-2xl border border-[#c3a35f] bg-[#f5efe2] p-5 focus:outline focus:outline-2 focus:outline-[#174f3c]">
      <p role="status" className="text-xl font-bold">{copy.score}: {result.score}/{questions.length}</p>
      {questions.map((q,i)=><div key={i} className="rounded-xl border bg-[#fffdf9] p-4">
        <h3 className="font-bold">{i+1}. {q.question}</h3>
        <p className="mt-2 font-bold">{result.correct[i] ? `✓ ${copy.correct}` : `✕ ${copy.incorrect}`}</p>
        <p className="mt-2 leading-7"><strong>{copy.answer}: </strong>{String.fromCharCode(65+q.correctIndex)}. {q.choices[q.correctIndex]}</p>
        <p className="mt-3 leading-7">{q.explanation}</p>
        <a href={`#${q.section}`} className="sv-ui-link mt-2 inline-flex min-h-11 items-center font-bold">{copy.review}</a>
      </div>)}
      <button type="button" onClick={()=> { setAnswers(questions.map(()=>-1)); setSubmitted(false); }} className="min-h-11 rounded-xl border border-[#174f3c] px-6 py-3 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174f3c]">{copy.reset}</button>
    </div>}
    <p className="text-sm leading-6 text-[#53655c]">{copy.privacy}</p>
  </form>;
}
