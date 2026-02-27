export default function BriefForm({ speakers, selectedId, onSelect, onGenerate, loading }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {speakers?.map((speaker) => (
        <div
          key={speaker.id}
          className={`p-4 rounded-lg border cursor-pointer transition-colors ${
            selectedId === speaker.id
              ? "border-sky-500 bg-sky-50"
              : "border-wlga-content-border bg-wlga-content-surface hover:border-sky-400"
          }`}
          onClick={() => onSelect?.(speaker.id)}
        >
          <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-lg font-bold mb-2">
            {speaker.name?.charAt(0) || "?"}
          </div>
          <h3 className="font-semibold text-wlga-content-text">{speaker.name}</h3>
          <p className="text-xs text-wlga-content-muted">{speaker.title}</p>
          <p className="text-xs text-sky-600 mt-1">{speaker.session_title}</p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onGenerate?.(speaker.id);
            }}
            disabled={loading}
            className="mt-3 w-full py-2 text-sm bg-sky-600 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            Generate AI Brief
          </button>
        </div>
      ))}
    </div>
  );
}
