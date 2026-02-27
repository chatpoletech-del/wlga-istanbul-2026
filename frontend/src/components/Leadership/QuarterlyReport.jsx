import { useState } from "react";
import { QUARTERLY_REPORTS } from "../../data/leadershipData";

export default function QuarterlyReport({ partnerId, partnerName }) {
  const report = QUARTERLY_REPORTS[partnerId];
  const [open, setOpen] = useState({ summary: true, pillar: true, achievements: true, opps: true, priorities: true, benchmark: true });

  if (!report) {
    return (
      <div className="bg-[#131C28] border border-[#1E2A3A] rounded-xl p-8 text-center">
        <p className="text-slate-400 mb-4">AI report generation in progress...</p>
        <p className="text-slate-500 text-sm">Your Q1 2026 report will be ready by 5 April 2026.</p>
        <div className="mt-6 h-2 bg-[#1E2A3A] rounded-full overflow-hidden max-w-md mx-auto">
          <div className="h-full bg-[#E8A020]/50 rounded-full animate-pulse" style={{ width: "60%" }} />
        </div>
      </div>
    );
  }

  const { quarter, generatedDate, executiveSummary, pillarPerformance, keyAchievements, opportunitiesIdentified, nextQuarterPriorities, benchmarkNote } = report;

  return (
    <div className="bg-[#131C28] border border-[#1E2A3A] rounded-xl overflow-hidden relative">
      <div className="p-6 border-b border-[#1E2A3A]">
        <span className="inline-block px-3 py-1 rounded-full bg-[#E8A020]/20 text-[#E8A020] text-xs font-semibold mb-2">WLGA Leadership Partner Programme</span>
        <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{quarter} IMPACT REPORT</h2>
        <p className="text-xl text-slate-300 mt-1">{partnerName}</p>
        <p className="text-slate-500 text-xs mt-1">AI-Generated - {generatedDate}</p>
      </div>
      <div className="p-6 space-y-6">
        <section className="relative">
          <button onClick={() => setOpen((o) => ({ ...o, summary: !o.summary }))} className="font-semibold text-white flex items-center justify-between w-full">1. Executive Summary <span>{open.summary ? "▼" : "▶"}</span></button>
          {open.summary && <p className="text-slate-300 text-sm mt-2 leading-relaxed">{executiveSummary}</p>}
          <span className="quarterly-report-watermark">AI Generated</span>
        </section>
        <section>
          <button onClick={() => setOpen((o) => ({ ...o, pillar: !o.pillar }))} className="font-semibold text-white flex items-center justify-between w-full">2. Pillar Performance <span>{open.pillar ? "▼" : "▶"}</span></button>
          {open.pillar && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {pillarPerformance?.map((p, i) => (
                <div key={i} className="bg-[#0A0E14] border border-[#1E2A3A] rounded-lg p-4">
                  <div className="flex justify-between text-sm mb-2"><span className="text-slate-300">{p.pillar}</span><span className="text-[#E8A020]">{p.score} / {p.max}</span></div>
                  <div className="pillar-bar mb-2"><div className="pillar-bar-fill" style={{ width: `${(p.score / p.max) * 100}%`, background: p.score >= p.max * 0.8 ? "#10B981" : p.score >= p.max * 0.5 ? "#E8A020" : "#EF4444" }} /></div>
                  <p className="text-slate-500 text-xs">{p.comment}</p>
                </div>
              ))}
            </div>
          )}
        </section>
        <section>
          <button onClick={() => setOpen((o) => ({ ...o, achievements: !o.achievements }))} className="font-semibold text-white flex items-center justify-between w-full">3. Key Achievements This Quarter <span>{open.achievements ? "▼" : "▶"}</span></button>
          {open.achievements && (
            <ul className="mt-2 space-y-2">
              {keyAchievements?.map((a, i) => <li key={i} className="flex gap-2 text-slate-300 text-sm"><span className="text-emerald-500">✓</span> {a}</li>)}
            </ul>
          )}
        </section>
        <section>
          <button onClick={() => setOpen((o) => ({ ...o, opps: !o.opps }))} className="font-semibold text-white flex items-center justify-between w-full">4. AI-Surfaced Opportunities <span>{open.opps ? "▼" : "▶"}</span></button>
          {open.opps && (
            <div className="space-y-3 mt-4">
              {opportunitiesIdentified?.map((o, i) => (
                <div key={i} className="bg-[#0A0E14] border border-[#1E2A3A] rounded-lg p-4">
                  <div className="flex items-center gap-2 flex-wrap"><span className="font-medium text-white">{o.title}</span><span className="text-xs px-2 py-0.5 rounded bg-[#1E2A3A] text-slate-400">{o.type}</span><span className="text-xs text-[#E8A020]">{o.relevance} relevance</span></div>
                  <p className="text-slate-500 text-xs mt-1">Deadline: {o.deadline}</p>
                  <p className="text-slate-400 text-sm mt-2">{o.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
        <section>
          <button onClick={() => setOpen((o) => ({ ...o, priorities: !o.priorities }))} className="font-semibold text-white flex items-center justify-between w-full">5. Priorities for Next Quarter <span>{open.priorities ? "▼" : "▶"}</span></button>
          {open.priorities && <ol className="mt-2 list-decimal list-inside space-y-1 text-slate-300 text-sm">{nextQuarterPriorities?.map((p, i) => <li key={i}>{p}</li>)}</ol>}
        </section>
        <section>
          <button onClick={() => setOpen((o) => ({ ...o, benchmark: !o.benchmark }))} className="font-semibold text-white flex items-center justify-between w-full">6. Benchmark Summary <span>{open.benchmark ? "▼" : "▶"}</span></button>
          {open.benchmark && <p className="text-slate-400 text-sm mt-2">{benchmarkNote}</p>}
        </section>
      </div>
      <div className="p-6 border-t border-[#1E2A3A] flex gap-3">
        <button className="px-4 py-2 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg">Download Report PDF</button>
        <button className="px-4 py-2 border border-[#E8A020] text-[#E8A020] rounded-lg" onClick={() => navigator.clipboard?.writeText(window.location.href)}>Share with Team</button>
      </div>
    </div>
  );
}
