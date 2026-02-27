import { LEADERSHIP_PARTNERS, PROGRAMME_INTRO, getScoreColor, getRankAmongPartners } from "../../data/leadershipData";

export default function PartnerSelector({ onSelectPartner }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-xl font-semibold text-white mb-6">
        Select a Leadership Partner to view their private dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {LEADERSHIP_PARTNERS.map((p) => {
          const rank = getRankAmongPartners(p.id);
          const scoreColor = getScoreColor(p.engagement.overallScore);
          return (
            <div
              key={p.id}
              className="partner-card bg-[#131C28] border border-[#1E2A3A] rounded-lg p-5 transition-all cursor-pointer"
              onClick={() => onSelectPartner(p.id)}
            >
              <div className="font-bold text-white text-base mb-2">{p.company}</div>
              <p className="text-slate-400 text-sm flex items-center gap-1 mb-2">
                {p.flag} {p.country}
              </p>
              <span
                className="inline-block px-2 py-1 rounded text-xs font-medium mb-3"
                style={{ color: PROGRAMME_INTRO.programmeCategories.find((c) => c.id === p.category)?.color || "#E8A020", background: "#1E2A3A" }}
              >
                {p.categoryName}
              </span>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-500">Ranked #{rank} / 8 Partners</span>
                <span
                  className="text-sm font-bold px-2 py-1 rounded"
                  style={{ background: `${scoreColor}20`, color: scoreColor }}
                >
                  {p.engagement.overallScore}/100
                </span>
              </div>
              <button
                type="button"
                className="w-full py-2 text-sm font-medium text-[#E8A020] border border-[#E8A020] rounded-lg hover:bg-[#E8A020]/10 transition-colors"
                onClick={(e) => { e.stopPropagation(); onSelectPartner(p.id); }}
              >
                View Dashboard →
              </button>
            </div>
          );
        })}
      </div>
      <p className="text-slate-500 text-xs mt-6 text-center">
        POC Note: In production, each Leadership Partner logs in securely to view only their own dashboard.
      </p>
    </section>
  );
}
