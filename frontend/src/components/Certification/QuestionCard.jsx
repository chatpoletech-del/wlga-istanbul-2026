export default function QuestionCard({ question, questionNumber, totalQuestions, selectedAnswer, onSelect }) {
  const labels = ["A", "B", "C", "D"];
  const difficultyConfig = {
    easy: { label: "◆ Easy", color: "text-emerald-400 border-emerald-500/50" },
    medium: { label: "✦ Medium", color: "text-amber-400 border-amber-500/50" },
    hard: { label: "⚡ Hard", color: "text-red-400 border-red-500/50" },
  };
  const diff = difficultyConfig[question?.difficulty] || difficultyConfig.medium;

  return (
    <div className="rounded-xl border-2 border-[#1E2A3A] bg-[#111720] p-6 transition-colors hover:border-amber-500/30">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded border ${diff.color}`}>
          {diff.label}
        </span>
      </div>
      <p className="text-[1.1rem] font-semibold text-slate-100 mb-6 leading-relaxed">
        {question?.question}
      </p>
      <div className="space-y-2">
        {question?.options?.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(idx)}
            className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg border-2 transition-all ${
              selectedAnswer === idx
                ? "border-[#E8A020] bg-amber-500/20 text-white"
                : "border-[#1E2A3A] bg-[#0A0E14] text-slate-300 hover:border-amber-500/40"
            }`}
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-bold">
              {labels[idx]}
            </span>
            <span>{opt}</span>
            {selectedAnswer === idx && (
              <span className="ml-auto text-amber-400">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
