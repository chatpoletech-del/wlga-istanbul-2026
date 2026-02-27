export default function CertFailure({ score, passMark, onRetake, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-[#111720] border-2 border-red-500/50 rounded-xl max-w-md w-full p-6 shadow-xl">
        <div className="text-center mb-4">
          <span className="text-5xl">⚠️</span>
          <h2 className="text-xl font-bold text-white mt-2">Certificate Not Available</h2>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          Your score of <strong className="text-white">{score}%</strong> does not meet the
          minimum pass mark of <strong className="text-amber-400">{passMark}%</strong> required
          for WLGA certification.
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          To receive your WLGA Certified LPG Professional certificate, you must score 70% or
          above on the assessment.
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          We encourage you to review the question explanations below and retake the assessment
          when ready.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onRetake}
            className="flex-1 px-4 py-2.5 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg hover:opacity-90"
          >
            Retake Assessment
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-slate-500 text-slate-300 font-medium rounded-lg hover:bg-slate-800"
          >
            Review My Answers
          </button>
        </div>
      </div>
    </div>
  );
}
