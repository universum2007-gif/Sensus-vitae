import type { LessonQuestion } from './types';
// Null denotes an incomplete or invalid attempt: it cannot produce a score.
export function gradeGeneticsQuiz(questions: LessonQuestion[], answers: number[]) {
  if (answers.length !== questions.length || !questions.every((q,i) => Number.isInteger(answers[i]) && answers[i] >= 0 && answers[i] < q.choices.length)) return null;
  const correct = questions.map((q,i) => answers[i] === q.correctIndex);
  return { correct, score: correct.filter(Boolean).length };
}
