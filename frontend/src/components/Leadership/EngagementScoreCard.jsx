import { useState, useEffect } from "react";
import { getScoreColor, getScoreLabel, getRankAmongPartners, BENCHMARK_DATA } from "../../data/leadershipData";

const LABELS = {
  eventsAttended: "Events Attended",
  thoughtLeadership: "Thought Leadership",
  workingGroups: "Working Groups",
  policyEngagement: "Policy Engagement",
  memberCollaboration: "Member Collaboration",
  mediaPresence: "Media Presence",
};

export default function EngagementScoreCard({ partner }) {
  const [anim, setAnim] = useState(0);
  const eng = partner?.engagement;
  if (!eng) return null;
  useEffect(() => {
    const t = setTimeout(() => setAnim(eng.overallScore), 100);
    return () => clearTimeout(t);
  }, [eng.overallScore]);
  const rank = getRankAmongPartners(partner.id);
  const avg = BENCHMARK_DATA.programmeAverage.overallScore;
  const diff = eng.overallScore - avg;
  const color = getScoreColor(eng.overallScore);
  const circ = 2 * Math.PI * 54;
  const offset = circ - (anim / 100) * circ;

  return (
    <div className="bg-[#131C28] border border-[#1E2A3A] rounded-xl p-6">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="relative flex-shrink-0">
          <svg width="160" height="160" className="score-gauge-arc -rotate-90">
            <circle cx="80" cy="80" r="54" fill="none" stroke="#1E2A3A" strokeWidth="12" />
            <circle
              cx="80"
              cy="80"
              r="54"
              fill="none"
              stroke={color}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold" style={{ fontFamily: "Bebas Neue, sans-serif", color }}>
              {anim}
            </span>
            <span className="text-slate-500 text-sm">/ 100</span>
            <span className="text-xs font-semibold mt-1 uppercase" style={{ color }}>
              {getScoreLabel(eng.overallScore)}
            </span>
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <div className="font-bold text-white text-lg">{partner.company}</div>
          <div className="text-slate-400 text-sm mb-2">{partner.categoryName}</div>
          <p className="text-slate-500 text-sm">#{rank} out of 8 Leadership Partners</p>
          <span className="inline-block mt-2 px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs">
            {eng.trend}
          </span>
          <p className="text-slate-400 text-sm mt-2">
            You vs Average ({avg}): {diff >= 0 ? "+" : ""}
            {diff}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 pt-6 border-t border-[#1E2A3A]">
        {Object.entries(eng.scoreBreakdown || {}).map(([k, v]) => (
          <div key={k}>
            <div className="text-xs text-slate-500 mb-1">{LABELS[k] || k}</div>
            <div className="pillar-bar">
              <div
                className="pillar-bar-fill"
                style={{ width: `${Math.min(100, v)}%`, background: getScoreColor(v) }}
              />
            </div>
            <div className="text-sm font-medium mt-1" style={{ color: getScoreColor(v) }}>
              {v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
