export default function QuestionCluster({ cluster, onSelect, onDecline }) {
  const best = cluster?.best_question;
  const ids = cluster?.question_ids || [];
  const label = cluster?.label || "Cluster";
  const totalVotes = cluster?.total_votes ?? 0;

  return (
    <div className="border border-wlga-content-border rounded-lg overflow-hidden bg-wlga-content-surface">
      <div className="px-4 py-2 bg-slate-200/60 flex justify-between items-center">
        <span className="font-semibold text-wlga-content-text">{label}</span>
        <span className="text-sm text-sky-600">↑ {totalVotes} votes</span>
      </div>
      <div className="p-4 space-y-3">
        {best && (
          <p className="text-sm text-emerald-700 border-l-2 border-emerald-500 pl-3">
            {best}
          </p>
        )}
        {ids.length > 1 && (
          <p className="text-xs text-wlga-content-muted">
            Groups {ids.length} similar question(s)
          </p>
        )}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onSelect?.(cluster)}
            className="px-3 py-1.5 text-sm bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200"
          >
            ✓ Select
          </button>
          <button
            type="button"
            onClick={() => onDecline?.(cluster)}
            className="px-3 py-1.5 text-sm bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
          >
            ✗ Decline
          </button>
        </div>
      </div>
    </div>
  );
}
