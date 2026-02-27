export default function SearchResults({ result }) {
  if (!result) return null;
  const { answer, sources, key_quotes, related_topics, confidence } = result;

  return (
    <div className="space-y-4">
      <div className="border-l-4 border-sky-500 bg-sky-50/80 rounded-r-lg p-4">
        <p className="text-wlga-content-text">{answer}</p>
        {confidence && (
          <p className="text-xs text-wlga-content-muted mt-2">
            Confidence: <span className="capitalize text-sky-600">{confidence}</span>
          </p>
        )}
      </div>
      {sources?.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-wlga-content-muted mb-1">Sources</h4>
          <ul className="text-sm text-wlga-content-text list-disc list-inside">
            {sources.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
      {key_quotes?.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-wlga-content-muted mb-1">Key quotes</h4>
          <ul className="text-sm text-wlga-content-text/90 italic space-y-1">
            {key_quotes.map((q, i) => (
              <li key={i}>"{q}"</li>
            ))}
          </ul>
        </div>
      )}
      {related_topics?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {related_topics.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-slate-200 rounded text-wlga-content-text"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
