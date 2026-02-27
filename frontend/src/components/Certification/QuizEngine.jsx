import { useState, useEffect } from "react";
import { getQuestionsForCourse, calculateScore } from "../../data/certificationData";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function QuizEngine({ courseId, userName, onComplete, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    setQuestions(getQuestionsForCourse(courseId, 10));
  }, [courseId]);

  useEffect(() => {
    const t = setInterval(() => setTimeElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const currentQ = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const canProceed = answers[currentIndex] !== undefined;
  const isLast = currentIndex === questions.length - 1;

  const handleNext = () => {
    if (!canProceed) return;
    if (isLast) {
      const answerArray = questions.map((_, i) => answers[i] ?? 0);
      const result = calculateScore(answerArray, questions, timeElapsed);
      onComplete(result);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#0A0E14] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0E14] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <button
            type="button"
            onClick={onBack}
            className="text-slate-400 hover:text-white text-sm"
          >
            ← Back to courses
          </button>
          <span className="text-slate-400 font-mono text-sm">{formatTime(timeElapsed)}</span>
        </div>

        <ProgressBar
          current={currentIndex + 1}
          total={questions.length}
          answeredCount={answeredCount}
        />

        <QuestionCard
          question={currentQ}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentIndex]}
          onSelect={(idx) => setAnswers((a) => ({ ...a, [currentIndex]: idx }))}
        />

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceed}
            className="px-6 py-2.5 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg disabled:opacity-50 hover:opacity-90"
          >
            {isLast ? "Submit Assessment" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}
