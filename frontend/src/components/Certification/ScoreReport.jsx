import { useState } from "react";
import CertFailure from "./CertFailure";
import { WLGA_BRANDING } from "../../data/certificationData";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

export default function ScoreReport({
  scoreResult,
  userName,
  courseName,
  courseId,
  onDownloadCert,
  onRetake,
  onBack,
}) {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [showFailureModal, setShowFailureModal] = useState(false);

  if (!scoreResult) return null;

  const {
    percentage,
    grade,
    correct,
    wrong,
    total,
    breakdown,
    timeElapsed = 0,
    passed,
  } = scoreResult;
  const passMark = WLGA_BRANDING.passMark;

  const easyBreakdown = breakdown.filter((b) => b.difficulty === "easy");
  const mediumBreakdown = breakdown.filter((b) => b.difficulty === "medium");
  const hardBreakdown = breakdown.filter((b) => b.difficulty === "hard");
  const easyCorrect = easyBreakdown.filter((b) => b.isCorrect).length;
  const mediumCorrect = mediumBreakdown.filter((b) => b.isCorrect).length;
  const hardCorrect = hardBreakdown.filter((b) => b.isCorrect).length;

  const handleCertClick = () => {
    if (passed) onDownloadCert();
    else setShowFailureModal(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0E14] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full border-4 border-[#1E2A3A] mb-4">
            <div
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{
                background: passed
                  ? "radial-gradient(circle, #10B98122 0%, transparent 70%)"
                  : "radial-gradient(circle, #EF444422 0%, transparent 70%)",
              }}
            >
              <span className="font-display text-5xl text-white">{percentage}%</span>
            </div>
          </div>
          <div
            className={
              passed
                ? "inline-block px-3 py-1 rounded text-sm font-bold mb-2 bg-emerald-500/30 text-emerald-400"
                : "inline-block px-3 py-1 rounded text-sm font-bold mb-2 bg-amber-500/30 text-amber-400"
            }
          >
            {grade.toUpperCase().replace(" ", "_")}
          </div>
          {passed ? (
            <p className="text-emerald-400">Congratulations! You passed.</p>
          ) : (
            <p className="text-amber-400">You scored below the pass mark.</p>
          )}
          <p className="text-slate-500 text-sm mt-2">
            Correct: {correct} | Wrong: {wrong} | Time: {formatTime(timeElapsed)}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Question breakdown</h3>
          <p className="text-slate-500 text-sm mb-3">
            Easy: {easyCorrect}/{easyBreakdown.length} | Medium: {mediumCorrect}/
            {mediumBreakdown.length} | Hard: {hardCorrect}/{hardBreakdown.length}
          </p>
          <div className="space-y-2">
            {breakdown.map((row, i) => (
              <div key={i} className="rounded-lg border border-[#1E2A3A] bg-[#111720] p-3">
                <div className="flex items-start gap-2">
                  <span className={row.isCorrect ? "text-emerald-400" : "text-red-400"}>
                    {row.isCorrect ? "✓" : "✗"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-300 truncate max-w-md">
                      {row.question.length > 80 ? row.question.slice(0, 80) + "…" : row.question}
                    </p>
                    {!row.isCorrect && (
                      <p className="text-xs text-slate-500 mt-1">
                        Your answer: {row.userAnswer} — Correct: {row.correctAnswer}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                    className="text-amber-400 text-xs font-medium"
                  >
                    {expandedIdx === i ? "Collapse" : "Expand"}
                  </button>
                </div>
                {expandedIdx === i && (
                  <div className="mt-3 pt-3 border-t border-[#1E2A3A] text-sm text-slate-400">
                    <p className="mb-1">{row.explanation}</p>
                    <p className="text-xs text-slate-500">{row.reference}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCertClick}
            className={
              passed
                ? "px-6 py-2.5 font-semibold rounded-lg bg-[#E8A020] text-[#0A0E14] hover:opacity-90"
                : "px-6 py-2.5 font-semibold rounded-lg bg-slate-700 text-slate-400 cursor-not-allowed"
            }
            title={!passed ? "Score 70% or above to unlock certificate" : ""}
          >
            Download My Certificate
          </button>
          <button
            type="button"
            onClick={onRetake}
            className="px-6 py-2.5 border border-slate-500 text-slate-300 font-medium rounded-lg hover:bg-[#1E2A3A]"
          >
            Retake Assessment
          </button>
          <button type="button" onClick={onBack} className="text-slate-500 hover:text-white text-sm">
            Back to Courses
          </button>
        </div>
      </div>

      {showFailureModal && (
        <CertFailure
          score={percentage}
          passMark={passMark}
          onRetake={() => {
            setShowFailureModal(false);
            onRetake();
          }}
          onClose={() => setShowFailureModal(false)}
        />
      )}
    </div>
  );
}
