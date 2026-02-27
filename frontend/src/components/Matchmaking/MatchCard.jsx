export default function MatchCard({ match, rank }) {
  const b = match.attendee_b || {};
  const score = match.score ?? 0;
  const scoreClass =
    score >= 85 ? "bg-emerald-600 text-white" : score >= 70 ? "bg-sky-500 text-white" : "bg-sky-100 text-sky-700";

  return (
    <div className="bg-wlga-content-surface border border-wlga-content-border rounded-lg p-4">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {rank != null && (
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 text-xs font-bold flex items-center justify-center">
                {rank}
              </span>
            )}
            <span className="font-semibold text-wlga-content-text">{b.full_name}</span>
          </div>
          <p className="text-sm text-wlga-content-muted mt-0.5">
            {b.job_title} · {b.company} · {b.country}
          </p>
        </div>
        <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-sm font-bold ${scoreClass}`}>
          {score}%
        </span>
      </div>
      {match.reason && (
        <p className="text-sm text-wlga-content-text/90 mt-3 pl-8 border-l-2 border-emerald-400">
          {match.reason}
        </p>
      )}
      {match.category && (
        <span className="inline-block mt-2 text-xs bg-sky-100 text-sky-700 border border-sky-200 px-2 py-0.5 rounded">
          {match.category}
        </span>
      )}
      {b.linkedin_url && (() => {
        const u = String(b.linkedin_url).trim();
        const isSafe = u.startsWith("https://") && !u.includes("javascript:");
        if (!isSafe) return null;
        return (
          <a
            href={u}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-sky-600 hover:underline"
          >
            View LinkedIn →
          </a>
        );
      })()}
    </div>
  );
}
