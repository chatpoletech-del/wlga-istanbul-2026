import { useState, useEffect } from "react";
import { WLGA_CITATIONS, CITATION_BAR_DATA } from "../../data/unAdvocacyData";

const bodyColors = { IEA: "#4A90D9", WHO: "#3FB950", UNFCCC: "#E8A020", AfDB: "#0D9488", "World Bank": "#8B5CF6", UNDP: "#06B6D4", "UN DESA": "#64748B", "OPEC Fund": "#F59E0B" };

export default function CitationTimeline() {
  const [bodyFilter, setBodyFilter] = useState(null);
  const [mounted, setMounted] = useState(false);
  const maxCount = Math.max(...(CITATION_BAR_DATA?.map((d) => d.count) || [1]), 1);

  useEffect(() => setMounted(true), []);

  const filtered = bodyFilter ? WLGA_CITATIONS.filter((c) => c.body && c.body.includes(bodyFilter)) : WLGA_CITATIONS;
  const bodies = [...new Set(WLGA_CITATIONS.map((c) => c.body).filter(Boolean))];

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="advocacy-surface border advocacy-border rounded-lg p-4">
          <p className="text-2xl font-bold un-blue">{WLGA_CITATIONS.length}</p>
          <p className="text-[#8B949E] text-sm">Total Citations</p>
        </div>
        <div className="advocacy-surface border advocacy-border rounded-lg p-4">
          <p className="text-2xl font-bold un-blue">{WLGA_CITATIONS.filter((c) => c.year === 2026).length}</p>
          <p className="text-[#8B949E] text-sm">This Year (2026)</p>
        </div>
        <div className="advocacy-surface border advocacy-border rounded-lg p-4">
          <p className="text-2xl font-bold un-blue">IEA</p>
          <p className="text-[#8B949E] text-sm">Most Cited Body (15)</p>
        </div>
        <div className="advocacy-surface border advocacy-border rounded-lg p-4">
          <p className="text-2xl font-bold un-blue">5</p>
          <p className="text-[#8B949E] text-sm">Longest Streak (years)</p>
        </div>
      </div>
      <div className="advocacy-surface border advocacy-border rounded-lg p-6 mb-6">
        <h3 className="text-white font-semibold mb-4">Citations by year</h3>
        <div className="flex items-end gap-2 h-40">
          {(CITATION_BAR_DATA || []).map((d) => (
            <div key={d.year} className="flex-1 flex flex-col items-center">
              <div
                className="citation-bar w-full rounded-t min-h-[4px]"
                style={{
                  height: mounted ? (d.count / maxCount) * 120 + "px" : "0",
                  backgroundColor: d.year === 2026 ? "#E8A020" : "#4A90D9",
                }}
              />
              <span className="text-[#8B949E] text-xs mt-2">{d.year}</span>
              <span className="doc-code text-[#4A90D9] text-xs">{d.count}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <button type="button" onClick={() => setBodyFilter(null)} className={"px-3 py-1.5 rounded text-sm " + (!bodyFilter ? "bg-[#4A90D9] text-white" : "advocacy-surface border advocacy-border text-[#8B949E]")}>All</button>
        {bodies.slice(0, 8).map((b) => (
          <button key={b} type="button" onClick={() => setBodyFilter(bodyFilter === b ? null : b)} className={"px-3 py-1.5 rounded text-sm " + (bodyFilter === b ? "bg-[#4A90D9] text-white" : "advocacy-surface border advocacy-border text-[#8B949E]")}>{b}</button>
        ))}
      </div>
      <div className="space-y-3">
        {filtered.map((c) => (
          <div key={c.id} className="advocacy-surface border advocacy-border rounded-lg p-4 flex gap-3">
            <div className="w-1 rounded-full shrink-0" style={{ backgroundColor: bodyColors[c.body] || "#4A90D9" }} />
            <div>
              <span className="text-xs px-2 py-0.5 rounded bg-[#21262D] text-[#8B949E]">{c.year} {c.quarter}</span>
              <h4 className="text-white font-medium text-sm mt-1">{c.document}</h4>
              <p className="text-[#8B949E] text-xs">{c.body} · {c.type}</p>
              <p className="text-[#8B949E] text-sm mt-1">{c.context}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
