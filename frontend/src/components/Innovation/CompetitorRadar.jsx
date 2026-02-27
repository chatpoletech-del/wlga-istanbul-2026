import { useState } from "react";
import { COMPETITOR_THREATS } from "../../data/innovationData";
import ThreatCard from "./ThreatCard";

export default function CompetitorRadar({ onSelectThreat }) {
  const [severityFilter, setSeverityFilter] = useState("all");
  const filtered = severityFilter === "all" ? COMPETITOR_THREATS : COMPETITOR_THREATS.filter((t) => t.severity === severityFilter);
  const highCount = COMPETITOR_THREATS.filter((t) => t.severity === "HIGH").length;
  const medCount = COMPETITOR_THREATS.filter((t) => t.severity === "MEDIUM").length;
  const lowCount = COMPETITOR_THREATS.filter((t) => t.severity === "LOW").length;
  const sorted = [...filtered].sort((a, b) => {
    const order = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    return order[a.severity] - order[b.severity];
  });

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <h2 className="tracker-display font-bold text-white text-lg" style={{ fontFamily: "Syne, sans-serif" }}>⚠️ Competitor Threat Radar</h2>
        <span className="px-2 py-0.5 rounded bg-[#FF4D4D]/20 text-[#FF4D4D] text-sm font-bold">{COMPETITOR_THREATS.filter((t) => t.status === "active").length} ACTIVE THREATS</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "HIGH", "MEDIUM", "LOW"].map((s) => (
          <button
            key={s}
            onClick={() => setSeverityFilter(s)}
            className={`px-4 py-2 rounded text-sm terminal-font ${
              severityFilter === s ? "bg-[#00FF88] text-[#050A0F]" : "tracker-surface border border-[#0D2A1A] text-[#4A7C5E] hover:text-[#00FF88]"
            }`}
          >
            {s === "all" ? "All" : s === "HIGH" ? "🔴 HIGH (" + highCount + ")" : s === "MEDIUM" ? "🟡 MEDIUM (" + medCount + ")" : "🔵 LOW (" + lowCount + ")"}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {sorted.map((t) => (
          <ThreatCard key={t.id} threat={t} onDraftResponse={(threat) => onSelectThreat(threat?.id)} />
        ))}
      </div>
      <p className="text-[#4A7C5E] text-xs mt-6">Monitoring: Hydrogen Europe · World Biogas Association · Hydrogen Council · Clean Energy States Alliance · REN21 · AEBIOM · IRENA</p>
      <p className="text-[#4A7C5E] text-xs mt-1">Sources scanned this week: 247</p>
    </div>
  );
}
