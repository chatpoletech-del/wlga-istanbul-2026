import { PROJECTS, COMPETITOR_THREATS, FUNDING_EVENTS } from "../../data/innovationData";

const activeProjects = PROJECTS.filter((p) => p.status === "active").length;
const highThreats = COMPETITOR_THREATS.filter((t) => t.severity === "HIGH").length;
const govFunding = FUNDING_EVENTS.filter((f) => f.type.includes("Government")).slice(0, 2);

export default function InnovationStats() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="tracker-surface border border-[#0D2A1A] rounded-lg p-5 flex items-center gap-4">
        <span className="text-3xl">🌐</span>
        <div>
          <div className="terminal-green tracker-display text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>{activeProjects}</div>
          <div className="text-[#4A7C5E] text-sm">Active rLPG Projects</div>
        </div>
      </div>
      <div className="tracker-surface border border-[#0D2A1A] rounded-lg p-5 flex items-center gap-4">
        <span className="text-3xl">📊</span>
        <div>
          <div className="terminal-green tracker-display text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>~500K tonnes/yr</div>
          <div className="text-[#4A7C5E] text-sm">Current HVO BioLPG capacity</div>
          <div className="text-[#00FF88] text-xs mt-0.5">↑ 2-3x by 2028</div>
        </div>
      </div>
      <div className="tracker-surface border border-[#0D2A1A] rounded-lg p-5 flex items-center gap-4">
        <span className="text-3xl">💰</span>
        <div>
          <div className="terminal-green tracker-display text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>$4.2M + €3.1M</div>
          <div className="text-[#4A7C5E] text-sm">Government funding this month</div>
          <div className="text-[#00FF88] text-xs mt-0.5">↑ US DOE + EU Horizon</div>
        </div>
      </div>
      <div className="tracker-surface border border-[#0D2A1A] rounded-lg p-5 flex items-center gap-4">
        <span className="text-3xl">⚠️</span>
        <div>
          <div className="text-[#FF4D4D] tracker-display text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>{highThreats}</div>
          <div className="text-[#4A7C5E] text-sm">Competitor threats requiring response</div>
        </div>
      </div>
    </div>
  );
}
