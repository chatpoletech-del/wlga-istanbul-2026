import { useState } from "react";

export default function QuestionSubmit({ sessionId, sessions, onSessionChange, onSubmit, onVote, questions }) {
  const [text, setText] = useState("");
  const [attendeeId, setAttendeeId] = useState("ATT-1001");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit({ session_id: sessionId, attendee_id: attendeeId, question_text: text.trim() });
    setText("");
  };

  const session = sessions?.find((s) => s.id === sessionId);
  const list = questions || [];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <label className="text-sm text-wlga-content-muted">Session:</label>
        <select
          value={sessionId}
          onChange={(e) => onSessionChange?.(e.target.value)}
          className="px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text"
        >
          {sessions?.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
        <label className="text-sm text-wlga-content-muted">As:</label>
        <input
          type="text"
          value={attendeeId}
          onChange={(e) => setAttendeeId(e.target.value)}
          placeholder="Attendee ID"
          className="px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text w-32"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your question..."
          rows={3}
          className="w-full px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text placeholder-wlga-content-muted focus:border-sky-500 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:opacity-90"
        >
          Submit question
        </button>
      </form>
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-wlga-content-text mb-2">Questions for this session</h4>
        <ul className="space-y-2">
          {list.map((q) => (
            <li
              key={q.id}
              className="flex items-start justify-between gap-3 p-3 bg-wlga-content-surface border border-wlga-content-border rounded-lg"
            >
              <span className="text-sm text-wlga-content-text">{q.question_text}</span>
              <button
                type="button"
                onClick={() => onVote?.(q.id)}
                className="flex-shrink-0 px-2 py-1 text-xs bg-slate-200 rounded text-sky-600 hover:bg-sky-100"
              >
                ↑ {q.votes ?? 0}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
