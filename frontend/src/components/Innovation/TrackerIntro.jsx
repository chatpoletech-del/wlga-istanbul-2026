import { INTRO } from "../../data/innovationData";

export default function TrackerIntro() {
  return (
    <section className="tracker-surface scan-line-overlay relative border-b border-[#0D2A1A] px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            <span className="terminal-font text-[#00FF88] text-xs uppercase tracking-widest">Live Intelligence Feed</span>
          </div>
          <h1 className="tracker-display text-4xl lg:text-5xl font-extrabold text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>rLPG Innovation Tracker</h1>
          <span className="inline-block px-3 py-1 rounded bg-[#0D2A1A] text-[#4A7C5E] text-xs mb-4">{INTRO.badge}</span>
          <p className="text-[#4A7C5E] text-sm mb-4">{INTRO.tagline}</p>
          <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{INTRO.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-80">
          {INTRO.keyStats.map((s) => (
            <div key={s.label} className="tracker-surface border border-[#0D2A1A] rounded-lg p-4">
              <div className="terminal-green terminal-font text-xl font-medium">{s.value}</div>
              <div className="text-[#4A7C5E] text-xs mt-1">{s.label}</div>
              <div className="text-[#4A7C5E] text-xs mt-0.5">{s.trend}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px bg-[#00FF88] mt-8" />
      <p className="terminal-font text-[#4A7C5E] text-xs uppercase tracking-wider mt-2 text-center">247 Sources Monitored · Updated Weekly · AI-Powered</p>
    </section>
  );
}
