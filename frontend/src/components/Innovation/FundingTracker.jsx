import { FUNDING_EVENTS } from "../../data/innovationData";

const totalGov = FUNDING_EVENTS.filter((f) => f.type.includes("Government")).reduce((s, f) => s + (f.amount.includes("M") ? parseFloat(f.amount.replace(/[^0-9.]/g, "")) : 0), 0);

export default function FundingTracker() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        <span className="text-[#4A7C5E]">6 Funding Events This Month</span>
        <span className="terminal-green terminal-font">$4.2M US Gov</span>
        <span className="terminal-green terminal-font">€21.1M+ EU</span>
        <span className="terminal-green terminal-font">£100M+ Industry</span>
      </div>
      <div className="space-y-4">
        {FUNDING_EVENTS.map((f) => (
          <div key={f.id} className="tracker-surface border border-[#0D2A1A] rounded-lg p-4 flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{f.flag}</span>
              <div>
                <div className="terminal-green tracker-display text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>{f.amount}</div>
                <div className="text-[#4A7C5E] text-xs">{f.funder}</div>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-xs px-2 py-0.5 rounded bg-[#0D2A1A] text-[#4A7C5E]">{f.type}</span>
              <p className="font-semibold text-white text-sm mt-2">{f.recipient}</p>
              <p className="text-[#4A7C5E] text-xs">{f.programme}</p>
              <p className="text-slate-400 text-xs mt-1">{f.date} · {f.purpose}</p>
              <div className="mt-3 pl-3 border-l-2 border-[#E8A020]">
                <p className="text-xs text-slate-400">WLGA Note</p>
                <p className="text-slate-300 text-sm">{f.wlgaNote}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full" style={{ background: f.relevanceScore >= 90 ? "#00FF88" : f.relevanceScore >= 75 ? "#E8A020" : "#64748B" }} title={f.relevanceScore + "% relevance"} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 tracker-surface border border-[#0D2A1A] rounded-lg text-center">
        <p className="text-[#4A7C5E] text-sm">Total tracked this quarter: $4.2M US DOE + €3.1M EU Horizon + €1.5B Neste + €18M Power-to-LPG + £100M+ UK industry + $28M Oberon — rLPG/BioLPG globally</p>
      </div>
    </div>
  );
}
