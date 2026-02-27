import { LEADERSHIP_PARTNERS, BENCHMARK_DATA, getRankAmongPartners, getCategoryAvg } from "../../data/leadershipData";

export default function BenchmarkPanel({ partner }) {
  const rank = getRankAmongPartners(partner.id);
  const sorted = [...LEADERSHIP_PARTNERS].sort((a, b) => b.engagement.overallScore - a.engagement.overallScore);
  const avg = BENCHMARK_DATA.programmeAverage;
  const catAvg = getCategoryAvg(partner.category);
  const pillars = ["eventsAttended", "thoughtLeadership", "workingGroups", "policyEngagement", "memberCollaboration", "mediaPresence"];
  const pillarLabels = { eventsAttended: "Events", thoughtLeadership: "Thought Leadership", workingGroups: "Working Groups", policyEngagement: "Policy", memberCollaboration: "Collaboration", mediaPresence: "Media" };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Programme Ranking</h3>
        <p className="text-slate-300 mb-4">You rank #{rank} out of 8 Leadership Partners</p>
        <div className="space-y-2">
          {sorted.map((p, i) => {
            const isYou = p.id === partner.id;
            const score = p.engagement.overallScore;
            const label = isYou ? "You" : `Partner ${String.fromCharCode(65 + i)}`;
            return (
              <div key={p.id} className="flex items-center gap-4">
                <span className="text-slate-500 w-8 text-sm">#{i + 1}</span>
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-7 bg-[#1E2A3A] rounded overflow-hidden">
                    <div className="benchmark-bar h-full rounded" style={{ width: `${score}%`, background: isYou ? "#E8A020" : "#2A3A4A", minWidth: "24px" }}>
                      <span className="text-white text-xs px-2">{label}</span>
                    </div>
                  </div>
                  <span className="text-slate-400 text-xs w-8 text-right">{score}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Category Comparison</h3>
        <div className="flex gap-4 items-end h-24">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-[#E8A020] rounded-t h-20 max-h-20" style={{ height: `${(partner.engagement.overallScore / 100) * 80}px`, minHeight: "20px" }} />
            <span className="text-xs text-slate-400 mt-1">Your Score</span>
            <span className="text-[#E8A020] font-bold">{partner.engagement.overallScore}</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-[#3B82F6] rounded-t h-20" style={{ height: `${(catAvg / 100) * 80}px`, minHeight: "20px" }} />
            <span className="text-xs text-slate-400 mt-1">{partner.categoryName} Avg</span>
            <span className="text-blue-400 font-bold">{catAvg}</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-[#64748B] rounded-t h-20" style={{ height: `${(avg.overallScore / 100) * 80}px`, minHeight: "20px" }} />
            <span className="text-xs text-slate-400 mt-1">Programme Avg</span>
            <span className="text-slate-400 font-bold">{avg.overallScore}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Pillar Benchmarks</h3>
        <table className="w-full text-sm">
          <thead><tr className="text-slate-500 border-b border-[#1E2A3A]"><th className="text-left py-2">Pillar</th><th className="text-right py-2">Your Score</th><th className="text-right py-2">Programme Avg</th><th className="text-right py-2">Your Rank</th></tr></thead>
          <tbody className="text-slate-300">
            {pillars.map((key) => {
              const yourScore = partner.engagement.scoreBreakdown?.[key] ?? 0;
              const progAvg = avg[key] ?? 0;
              const above = yourScore >= progAvg;
              const rankList = [...LEADERSHIP_PARTNERS].sort((a, b) => (b.engagement.scoreBreakdown?.[key] ?? 0) - (a.engagement.scoreBreakdown?.[key] ?? 0));
              const yourRank = rankList.findIndex((x) => x.id === partner.id) + 1;
              return (
                <tr key={key} className={`border-b border-[#1E2A3A]/50 ${above ? "bg-emerald-500/5" : "bg-red-500/5"}`}>
                  <td className="py-2">{pillarLabels[key] || key}</td>
                  <td className="text-right">{yourScore}</td>
                  <td className="text-right">{progAvg}</td>
                  <td className="text-right">#{yourRank}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
