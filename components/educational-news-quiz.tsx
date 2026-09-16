"use client";

import { useState } from "react";

import type { Language } from "@/lib/site-content";

export type EducationalNewsQuizQuestion = {
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
  answerType?: "single" | "multiple";
};

export function EducationalNewsQuiz({
  questions,
  locale,
  copy,
}: {
  questions: EducationalNewsQuizQuestion[];
  locale: Language;
  copy: {
    correct: string;
    incorrect: string;
    explanation: string;
  };
}) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});

  const handleAnswer = (questionIndex: number, choiceIndex: number) => {
    setSelectedAnswers((current) => ({
      ...current,
      [questionIndex]: choiceIndex,
    }));
  };

  return (
    <div className="mt-5 space-y-5">
      {questions.map((question, questionIndex) => {
        const answerType = question.answerType ?? "single";
        const selectedAnswerIndex = selectedAnswers[questionIndex] ?? null;
        const hasAnswered = selectedAnswerIndex !== null;
        const isCorrect = hasAnswered && selectedAnswerIndex === question.correctIndex;

        return (
          <div
            key={`${question.question}-${questionIndex}`}
            className="rounded-2xl border border-[#e5dcc8] bg-[#fffefb] p-4"
          >
            <p className="font-semibold text-[#173d30]">
              {questionIndex + 1}. {question.question}
            </p>

            <fieldset className="mt-3">
              <legend className="sr-only">{question.question}</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {question.choices.map((choice, choiceIndex) => {
                  const isSelected = selectedAnswerIndex === choiceIndex;
                  const isCorrectAnswer = choiceIndex === question.correctIndex;
                  const showOutcome = hasAnswered;

                  const rowClasses = [
                    "group flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-3 text-sm text-[#1e443a] transition-colors duration-150",
                    "sv-quiz-choice",
                    isSelected ? "border-[#173d30] bg-[#edf4ef]" : "border-[#e5dcc8] bg-[#f7f1e7]",
                    showOutcome && isCorrectAnswer ? "border-[#1b7f5f] bg-[#eaf8f0]" : "",
                    showOutcome && isSelected && !isCorrectAnswer ? "border-[#9a4b47] bg-[#fdf1f0]" : "",
                  ].join(" ");

                  return (
                    <label key={`${choice}-${choiceIndex}`} className={rowClasses}>
                      <input
                        type={answerType === "single" ? "radio" : "checkbox"}
                        name={`news-question-${questionIndex}-${locale}`}
                        value={choiceIndex}
                        checked={isSelected}
                        onChange={() => handleAnswer(questionIndex, choiceIndex)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#173d30]"
                      />
                      <span className="flex-1 leading-6">{choice}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {hasAnswered ? (
              <div
                className={[
                  "mt-4 rounded-xl border px-3 py-3",
                  isCorrect ? "border-[#1b7f5f] bg-[#eaf8f0] text-[#173d30]" : "border-[#9a4b47] bg-[#fdf1f0] text-[#3d2a29]",
                ].join(" ")}
                aria-live="polite"
              >
                <p className="text-sm font-bold">
                  {isCorrect ? `✓ ${copy.correct}` : `✕ ${copy.incorrect}`}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#98722e]">
                  {copy.explanation}
                </p>
                <p className="mt-2 text-sm leading-6 text-current">{question.explanation}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
