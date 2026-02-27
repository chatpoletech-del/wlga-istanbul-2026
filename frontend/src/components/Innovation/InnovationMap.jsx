import { useState } from "react";
import { latLngToSVG } from "../../data/innovationData";

const MAP_WIDTH = 960;
const MAP_HEIGHT = 500;

export default function InnovationMap({ projects, onSelectProject }) {
  const [region, setRegion] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const filtered = region ? projects.filter((p) => p.region === region) : projects;
  const regions = [
    { id: null, label: "All Regions" },
    { id: "North America", label: "North America", count: projects.filter((p) => p.region === "North America").length },
    { id: "Europe", label: "Europe", count: projects.filter((p) => p.region === "Europe").length },
    { id: "Asia Pacific", label: "Asia Pacific", count: projects.filter((p) => p.region === "Asia Pacific").length },
  ];

  return (
    <div className="tracker-surface border border-[#0D2A1A] rounded-lg overflow-hidden">
      <div className="px-4 py-2 border-b border-[#0D2A1A] tracker-display font-bold text-white text-sm" style={{ fontFamily: "Syne, sans-serif" }}>Global rLPG Innovation Map</div>
      <div className="relative bg-[#050A0F] hex-bg" style={{ minHeight: MAP_HEIGHT }}>
        <svg width="100%" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="text-[#0C1A14]" preserveAspectRatio="xMidYMid meet">
          <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="#050A0F" />
          <ellipse cx="480" cy="250" rx="380" ry="200" fill="#0C1A14" stroke="#0D2A1A" strokeWidth="1" />
          <ellipse cx="180" cy="120" rx="100" ry="80" fill="#0C1A14" stroke="#0D2A1A" strokeWidth="0.5" />
          <ellipse cx="750" cy="100" rx="80" ry="60" fill="#0C1A14" stroke="#0D2A1A" strokeWidth="0.5" />
          <ellipse cx="480" cy="380" rx="120" ry="60" fill="#0C1A14" stroke="#0D2A1A" strokeWidth="0.5" />
          <ellipse cx="750" cy="350" rx="60" ry="80" fill="#0C1A14" stroke="#0D2A1A" strokeWidth="0.5" />
          {filtered.map((p) => {
            const { x, y } = latLngToSVG(p.lat, p.lng, MAP_WIDTH, MAP_HEIGHT);
            const r = p.dotSize === "large" ? 8 : p.dotSize === "medium" ? 6 : 4;
            const className = p.status === "active" ? "project-dot-active" : "project-dot-emerging";
            return (
              <g key={p.id}>
                <circle
                  cx={x}
                  cy={y}
                  r={r + 4}
                  fill={p.color || "#00FF88"}
                  opacity="0.2"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={r}
                  fill={p.color || "#00FF88"}
                  className={p.status === "active" ? "project-dot-active" : ""}
                  style={{ cursor: "pointer", filter: "drop-shadow(0 0 6px rgba(0,255,136,0.5))" }}
                  onClick={() => onSelectProject?.(p.id)}
                  onMouseEnter={() => setTooltip({ ...p, x, y })}
                  onMouseLeave={() => setTooltip(null)}
                />
              </g>
            );
          })}
        </svg>
        {tooltip && (
          <div
            className="absolute z-10 tracker-surface border border-[#0D2A1A] rounded-lg p-3 shadow-xl text-left max-w-xs"
            style={{ left: Math.min(tooltip.x, MAP_WIDTH - 220), top: tooltip.y - 80 }}
          >
            <div className="font-semibold text-white text-sm">{tooltip.name}</div>
            <div className="text-[#4A7C5E] text-xs mt-1">{tooltip.organisations?.join(", ")}</div>
            <div className="text-xs text-slate-400 mt-1">{tooltip.technology}</div>
            <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-[#0D2A1A] text-[#00FF88]">{tooltip.status}</span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 p-4 border-t border-[#0D2A1A]">
        {regions.map((r) => (
          <button
            key={r.id ?? "all"}
            onClick={() => setRegion(r.id)}
            className={`px-4 py-2 rounded text-sm terminal-font ${region === r.id ? "bg-[#00FF88] text-[#050A0F]" : "bg-[#0C1A14] border border-[#0D2A1A] text-[#4A7C5E] hover:text-[#00FF88]"}`}
          >
            {r.label}{r.count != null ? ` (${r.count})` : ""}
          </button>
        ))}
      </div>
    </div>
  );
}
