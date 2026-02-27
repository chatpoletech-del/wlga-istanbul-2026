import { TRACKER_META } from "../../data/innovationData";

export default function TrackerHeader() {
  const m = TRACKER_META;
  return (
    <div className="sticky top-0 z-10 tracker-surface border-b border-[#0D2A1A] px-8 py-3 flex flex-wrap items-center gap-4">
      <span className="text-[#4A7C5E] text-xs">🗺️ {m.totalProjectsTracked} Projects</span>
      <span className="text-[#4A7C5E] text-xs">📄 {m.totalPatentsMonitored} Patents</span>
      <span className="text-[#4A7C5E] text-xs">🚨 {m.activeThreatAlerts} Threats</span>
      <span className="text-[#4A7C5E] text-xs">💰 6 Funding</span>
      <span className="text-[#4A7C5E] text-xs">📅 Next: {m.nextDigestDate}</span>
      <span className="terminal-font text-[#00FF88] text-sm">🔄 {m.lastRefreshed.split(",")[0]}</span>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-[#4A7C5E] text-xs">🤖 Digest #{m.weeklyDigestNumber}...</span>
        <div className="w-24 h-1.5 bg-[#0D2A1A] rounded-full overflow-hidden"><div className="h-full w-2/3 bg-[#00FF88] rounded-full animate-pulse" /></div>
      </div>
    </div>
  );
}
