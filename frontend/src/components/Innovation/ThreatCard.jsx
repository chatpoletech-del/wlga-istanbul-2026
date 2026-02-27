import { useState } from "react";

export default function ThreatCard({ threat, onDraftResponse }) {
  const [expanded, setExpanded] = useState(false);
  if (!threat) return null;
  const severityClass = threat.severity === "HIGH" ? "threat-high" : threat.severity === "MEDIUM" ? "threat-medium" : "threat-low";
  const statusLabel = threat.responseStatus === "pending" ? "⏳ Pending" : threat.responseStatus === "in-progress" ? "🔄 In Progress" : "👁️ Monitoring";
  return (
    <div className={`tracker-surface border border-[#0D2A1A] rounded-lg ${severityClass}`}>
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: threat.color + "30", color: threat.color }}>{threat.severity}</span>
          <span className="text-[#4A7C5E] text-sm">{threat.organisation}</span>
          <span className="text-[#4A7C5E] text-xs">{threat.date}</span>
        </div>
        <h3 className="font-bold text-white text-base mb-2">{threat.title}</h3>
        <p className="text-slate-400 text-sm">{expanded ? threat.summary : threat.summary?.slice(0, 150) + "..."}</p>
        <button type="button" onClick={() => setExpanded(!expanded)} className="text-[#00FF88] text-xs mt-1"> {expanded ? "Less" : "More"} </button>
        {expanded && threat.threatToWLGA && (
          <div className="mt-3 pl-3 border-l-2 border-[#FF4D4D]"><p className="text-xs text-slate-400">Threat to WLGA</p><p className="text-slate-300 text-sm">{threat.threatToWLGA}</p></div>
        )}
        {expanded && threat.deadline && <p className="text-[#E8A020] text-xs mt-2">⏱ {threat.deadline}</p>}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs px-2 py-0.5 rounded bg-[#0D2A1A] text-[#4A7C5E]">{statusLabel}</span>
          <button type="button" onClick={() => onDraftResponse?.(threat)} className="text-[#00FF88] text-sm font-medium hover:underline">Draft Counter-Response →</button>
        </div>
      </div>
    </div>
  );
}
