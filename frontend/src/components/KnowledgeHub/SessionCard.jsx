import { useState } from "react";

export default function SessionCard({ session, onReadFull }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-wlga-content-surface border border-wlga-content-border rounded-lg overflow-hidden">
      <div
        className="p-4 cursor-pointer"
        onClick={() => setExpanded((e) => !e)}
      >
        <h3 className="font-semibold text-wlga-content-text">{session.title}</h3>
        <p className="text-sm text-wlga-content-muted mt-0.5">{session.speaker}</p>
        {session.key_quote && (
          <p className="text-sm text-sky-600/90 mt-2 italic">"{session.key_quote}"</p>
        )}
        <button
          type="button"
          className="mt-2 text-sm text-sky-600 hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            onReadFull?.(session);
          }}
        >
          Read Full Summary
        </button>
      </div>
      {expanded && session.summary && (
        <div className="px-4 pb-4 pt-0 border-t border-wlga-content-border">
          <p className="text-sm text-wlga-content-text/90">{session.summary}</p>
        </div>
      )}
    </div>
  );
}
