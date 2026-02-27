import { useState } from "react";
import { latLngToSVG } from "../../data/unAdvocacyData";

const MAP_W = 960;
const MAP_H = 500;
const strengthSize = { "very-strong": 12, strong: 10, medium: 8, weak: 6 };
const strengthColor = { "very-strong": "#4A90D9", strong: "#3FB950", medium: "#E8A020", weak: "#F85149" };

export default function PartnerMap({ partners }) {
  const [tooltip, setTooltip] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2 className="advocacy-display font-bold text-white text-xl mb-2">WLGA UN Partner Network</h2>
      <p className="text-[#8B949E] text-sm mb-4">UN and multilateral partner relationships by strength</p>
      <div className="advocacy-surface border advocacy-border rounded-lg overflow-hidden mb-4">
        <div className="relative bg-[#0D1117]" style={{ minHeight: MAP_H }}>
          <svg width="100%" viewBox={"0 0 " + MAP_W + " " + MAP_H} className="text-[#161B22]" preserveAspectRatio="xMidYMid meet">
            <rect width={MAP_W} height={MAP_H} fill="#0D1117" />
            <ellipse cx="480" cy="250" rx="380" ry="200" fill="#161B22" stroke="#21262D" strokeWidth="1" />
            <ellipse cx="180" cy="120" rx="100" ry="80" fill="#161B22" stroke="#21262D" strokeWidth="0.5" />
            <ellipse cx="750" cy="100" rx="80" ry="60" fill="#161B22" stroke="#21262D" strokeWidth="0.5" />
            <ellipse cx="480" cy="380" rx="120" ry="60" fill="#161B22" stroke="#21262D" strokeWidth="0.5" />
            <ellipse cx="750" cy="350" rx="60" ry="80" fill="#161B22" stroke="#21262D" strokeWidth="0.5" />
            {(partners || []).map((p) => {
              const { x, y } = latLngToSVG(p.lat, p.lng, MAP_W, MAP_H);
              const r = strengthSize[p.strength] || 8;
              const color = strengthColor[p.strength] || "#4A90D9";
              return (
                <g key={p.id}>
                  <circle cx={x} cy={y} r={r + 3} fill={color} opacity="0.3" />
                  <circle cx={x} cy={y} r={r} fill={color} className={p.strength === "weak" ? "partner-weak" : ""} style={{ cursor: "pointer" }} onClick={() => setSelected(p)} onMouseEnter={() => setTooltip(p)} onMouseLeave={() => setTooltip(null)} />
                </g>
              );
            })}
          </svg>
          {tooltip && (
            <div className="absolute z-10 advocacy-surface border advocacy-border rounded-lg p-3 shadow-xl text-left max-w-xs" style={{ left: Math.min(tooltip.lng * 5 + 400, MAP_W - 220), top: 20 }}>
              <p className="text-white font-semibold">{tooltip.name}</p>
              <p className="text-[#8B949E] text-xs">{tooltip.fullName}</p>
              <p className="text-[#4A90D9] text-xs mt-1">{tooltip.relationship}</p>
              <p className="text-[#8B949E] text-xs mt-1">Last: {tooltip.lastEngagement}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs text-[#8B949E]">Legend:</span>
        <span className="text-xs px-2 py-0.5 rounded partner-very-strong text-white">Very Strong</span>
        <span className="text-xs px-2 py-0.5 rounded partner-strong text-white">Strong</span>
        <span className="text-xs px-2 py-0.5 rounded partner-medium text-[#0D1117]">Medium</span>
        <span className="text-xs px-2 py-0.5 rounded partner-weak text-white">Weak</span>
      </div>
      <p className="text-[#F85149] text-xs mb-4">Weakness in UNEP relationship requires urgent attention.</p>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {(partners || []).map((p) => (
          <div key={p.id} className="advocacy-surface border advocacy-border rounded-lg p-3">
            <span className="text-lg">{p.flag}</span>
            <p className="text-white font-medium text-sm mt-1">{p.name}</p>
            <p className="text-[#8B949E] text-xs">{p.relationship}</p>
            <p className="text-[#8B949E] text-xs mt-1">{p.lastEngagement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
