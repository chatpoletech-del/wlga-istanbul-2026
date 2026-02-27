export default function TranscriptViewer({ session, onClose }) {
  if (!session) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-white border border-wlga-content-border shadow-xl rounded-xl max-w-2xl w-full max-h-[80vh] overflow-auto p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-wlga-content-text">{session.title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-wlga-content-muted hover:text-wlga-content-text"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-wlga-content-muted">{session.speaker}</p>
        {session.key_quote && (
          <blockquote className="my-3 pl-3 border-l-2 border-wlga-amber text-wlga-amber/90 italic">
            {session.key_quote}
          </blockquote>
        )}
        <p className="text-sm text-wlga-content-text/90 whitespace-pre-wrap">{session.summary}</p>
        {session.action_items && (
          <p className="mt-3 text-sm text-wlga-green">{session.action_items}</p>
        )}
      </div>
    </div>
  );
}
