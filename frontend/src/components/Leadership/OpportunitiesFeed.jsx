import { useState } from "react";
import { getOpportunitiesForPartner } from "../../data/leadershipData";

export default function OpportunitiesFeed({ partner }) {
  const [expressed, setExpressed] = useState(new Set());
  const opportunities = getOpportunitiesForPartner(partner);
  const count = opportunities.length;
  const categoryName = partner.categoryName || "focus";

  const toggleInterest = (id) => setExpressed((s) => (s.has(id) ? new Set([...s].filter((x) => x !== id)) : new Set([...s, id])));

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">AI-Surfaced Opportunities — Aligned to Your Strategic Priorities</h3>
      <p className="text-slate-400 text-sm mb-6">We identified {count} opportunities aligned to your {categoryName} focus area.</p>
      <div className="space-y-4">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className={`bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 opportunity-card-${opp.urgency}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className="text-xs px-2 py-1 rounded bg-[#1E2A3A] text-slate-400 mr-2">{opp.type}</span>
                <h4 className="font-semibold text-white mt-2">{opp.title}</h4>
                <p className="text-slate-500 text-xs mt-0.5">{opp.event}</p>
                <p className="text-slate-400 text-sm mt-2">{opp.description}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-500">
                  <span>Deadline: {opp.deadline}</span>
                  <span>Reach: {opp.potentialReach}</span>
                  <span className="text-[#E8A020]">+{opp.pointsValue} engagement points if completed</span>
                </div>
              </div>
              <button
                onClick={() => toggleInterest(opp.id)}
                className="shrink-0 px-4 py-2 border border-[#E8A020] text-[#E8A020] rounded-lg text-sm hover:bg-[#E8A020]/10"
              >
                {expressed.has(opp.id) ? "Interest Logged" : "Express Interest"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
