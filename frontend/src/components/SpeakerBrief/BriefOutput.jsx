export default function BriefOutput({ speaker, brief }) {
  if (!brief) return null;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="p-4 bg-wlga-content-surface border border-wlga-content-border rounded-lg">
        <h4 className="text-sm font-semibold text-wlga-content-muted mb-2">Audience Summary</h4>
        <p className="text-wlga-content-text">{brief.audience_summary}</p>
      </div>
      {brief.top_3_audience_questions?.length > 0 && (
        <div className="p-4 bg-wlga-content-surface border border-wlga-content-border rounded-lg">
          <h4 className="text-sm font-semibold text-wlga-content-muted mb-2">Top 3 Audience Questions</h4>
          <ol className="list-decimal list-inside space-y-1 text-wlga-content-text">
            {brief.top_3_audience_questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        </div>
      )}
      {brief.key_context && (
        <div className="p-4 bg-wlga-content-surface border border-wlga-content-border rounded-lg">
          <h4 className="text-sm font-semibold text-wlga-content-muted mb-2">Key Context</h4>
          <p className="text-wlga-content-text">{brief.key_context}</p>
        </div>
      )}
      {brief.suggested_talking_points?.length > 0 && (
        <div className="p-4 bg-wlga-content-surface border border-wlga-content-border rounded-lg">
          <h4 className="text-sm font-semibold text-wlga-content-muted mb-2">Suggested Talking Points</h4>
          <ol className="list-decimal list-inside space-y-1 text-wlga-content-text">
            {brief.suggested_talking_points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </div>
      )}
      {brief.do_not_cover?.length > 0 && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <h4 className="text-sm font-semibold text-red-400 mb-2">Do NOT Cover</h4>
          <ul className="list-disc list-inside space-y-0.5 text-red-700">
            {brief.do_not_cover.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {brief.opening_hook && (
        <div className="p-4 bg-sky-50 border border-sky-200 rounded-lg">
          <h4 className="text-sm font-semibold text-sky-700 mb-2">Opening Hook</h4>
          <p className="text-wlga-content-text">{brief.opening_hook}</p>
        </div>
      )}
      {brief.call_to_action && (
        <div className="p-4 bg-wlga-content-surface border border-wlga-content-border rounded-lg">
          <h4 className="text-sm font-semibold text-wlga-content-muted mb-2">Call to Action</h4>
          <p className="text-wlga-content-text">{brief.call_to_action}</p>
        </div>
      )}
    </div>
  );
}
