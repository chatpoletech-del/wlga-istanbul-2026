import { WEEKLY_DIGEST } from "../../data/innovationData";
import DigestCard from "./DigestCard";

export default function WeeklyDigest() {
  const d = WEEKLY_DIGEST;
  return (
    <div className="tracker-surface border border-[#0D2A1A] rounded-xl overflow-hidden">
      <div className="p-6 border-b border-[#0D2A1A]">
        <div className="flex flex-wrap items-center gap-4 mb-2">
          <span className="tracker-display font-bold text-white text-lg" style={{ fontFamily: "Syne, sans-serif" }}>🤖 AI Weekly Digest</span>
          <span className="terminal-font text-[#4A7C5E] text-sm">Week {d.weekNumber} | {d.dateRange}</span>
          <span className="px-2 py-0.5 rounded bg-[#FF4D4D]/20 text-[#FF4D4D] text-xs font-bold">{d.urgentAlerts} URGENT ALERTS</span>
        </div>
        <h2 className="text-xl font-bold text-white mt-4 mb-2">{d.headline}</h2>
        <div className="pl-4 border-l-4 border-[#E8A020] mt-4">
          <p className="text-slate-300 text-sm leading-relaxed">{d.executiveSummary}</p>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {d.sections?.map((sec) => (
          <div key={sec.id}>
            <h3 className="tracker-display font-semibold text-white mb-3" style={{ fontFamily: "Syne, sans-serif" }}>{sec.category}</h3>
            <div className="space-y-3">
              {sec.items?.map((item, i) => <DigestCard key={i} item={item} />)}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-[#0D2A1A] text-center text-[#4A7C5E] text-xs terminal-font">Next digest: 3 March 2026</div>
    </div>
  );
}
