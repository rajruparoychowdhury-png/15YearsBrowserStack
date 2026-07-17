import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { QUESTIONS } from "../data/quizData";

interface QuizProps {
  onComplete: (answers: string[]) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUESTIONS.length;
  const progressPercent = Math.round((currentQuestionIndex / totalQuestions) * 100);

  const handleOptionSelect = (persona: string) => {
    if (animating) return;
    setDirection("forward");
    setAnimating(true);

    const newAnswers = [...answers, persona];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnimating(false);
      } else {
        onComplete(newAnswers);
      }
    }, 250);
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0 && !animating) {
      setDirection("backward");
      setAnimating(true);

      setTimeout(() => {
        setAnswers((prev) => prev.slice(0, -1));
        setCurrentQuestionIndex((prev) => prev - 1);
        setAnimating(false);
      }, 250);
    }
  };

  return (
    <div className="w-full max-w-2xl space-y-6">
      {/* Top Bar with Back Button and Question Counter */}
      <div className="flex items-center justify-between min-h-[40px]">
        {currentQuestionIndex > 0 ? (
          <button
            onClick={handleGoBack}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-50 active:bg-slate-100 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div className="h-8 w-20" /> // Spacer to avoid shifting
        )}
        <span className="text-sm font-medium text-slate-500">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
      </div>
      
      {/* Progress Bar and Percentage */}
      <div className="space-y-2">
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full gradient-accent rounded-full transition-all duration-300" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-end">
          <span className="text-xs font-semibold text-indigo-600">{progressPercent}% Complete</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ x: direction === "forward" ? 20 : -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === "forward" ? -20 : 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          {/* Question Title */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm mt-4">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-950 leading-snug">
              {currentQuestion.text}
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleOptionSelect(option.persona)}
                className="w-full text-left bg-white p-5 rounded-xl border border-slate-200/80 text-slate-700 font-medium hover:border-indigo-300 hover:bg-indigo-50/20 active:bg-indigo-50 transition-all text-sm md:text-base flex items-start gap-4 glow-hover"
              >
                <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center font-bold flex-shrink-0 text-xs">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="pt-0.5">
                  {option.text}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

