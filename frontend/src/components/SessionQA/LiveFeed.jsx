export default function LiveFeed({ questions }) {
  if (!questions?.length) return null;
  return (
    <div className="space-y-2">
      {questions.map((q) => (
        <div
          key={q.id}
          className="p-3 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-sm"
        >
          <p className="text-wlga-content-text">{q.question_text}</p>
          <p className="text-xs text-wlga-content-muted mt-1">
            {q.submitter_name || "Anonymous"} · ↑ {q.votes ?? 0}
          </p>
        </div>
      ))}
    </div>
  );
}
