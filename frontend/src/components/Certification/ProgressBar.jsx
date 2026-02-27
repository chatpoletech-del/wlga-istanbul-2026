export default function ProgressBar({ current, total, answeredCount }) {
  const pct = total ? Math.round((answeredCount / total) * 100) : 0;

  return (
    <div className="mb-6">
      <div className="h-1.5 bg-[#1E2A3A] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#E8A020] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-slate-400">
          {answeredCount} of {total} questions answered
        </span>
        <div className="flex gap-1">
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i + 1 < current
                  ? "bg-[#10B981]"
                  : i + 1 === current
                  ? "bg-[#E8A020] animate-pulse"
                  : "bg-[#1E2A3A]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
