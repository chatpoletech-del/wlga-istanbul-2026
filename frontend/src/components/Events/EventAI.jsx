import { useState } from "react";
import SessionSummaryCard from "./SessionSummaryCard";
import MatchmakingWidget from "./MatchmakingWidget";
import VideoHighlights from "./VideoHighlights";
import { AI_SESSION_SUMMARIES } from "../../data/eventsData";

const SUB_TABS = [
  { id: "summaries", label: "📄 Session Summaries" },
  { id: "matchmaking", label: "🤝 Who Should I Meet?" },
  { id: "video", label: "🎬 Video Highlights" },
];

export default function EventAI({ eventId, eventTitle }) {
  const [subTab, setSubTab] = useState("summaries");
  const summaries = AI_SESSION_SUMMARIES[eventId] || [];

  return (
    <div className="space-y-6">
      <div className="flex border-b border-[#1E2A3A] gap-2">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setSubTab(t.id)}
            className={"px-4 py-2 text-sm font-medium " + (subTab === t.id ? "text-[#E8A020] border-b-2 border-[#E8A020]" : "text-slate-400 hover:text-slate-300")}
          >
            {t.label}
          </button>
        ))}
      </div>
      {subTab === "summaries" && (
        <div className="space-y-4">
          {summaries.map((s) => <SessionSummaryCard key={s.id} summary={s} />)}
        </div>
      )}
      {subTab === "matchmaking" && <MatchmakingWidget eventId={eventId} />}
      {subTab === "video" && <VideoHighlights eventId={eventId} />}
    </div>
  );
}
