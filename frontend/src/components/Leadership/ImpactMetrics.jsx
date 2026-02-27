export default function ImpactMetrics({ partner: p }) {
  if (!p?.engagement) return null;
  const eng = p.engagement;
  const eventsCount = eng.eventsAttended?.length ?? 0;
  const reachSum = (eng.thoughtLeadership || []).reduce((s, t) => {
    const m = (t.reach || "").match(/(\d[\d,]*)/);
    return s + (m ? parseInt(m[1].replace(/,/g, ""), 10) : 0);
  }, 0);
  const wgContributions = (eng.workingGroups || []).reduce((s, w) => s + (w.contributions || 0), 0);
  const policyCount = eng.policyEngagement?.length ?? 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#E8A020] mb-1" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{eventsCount}</div>
        <div className="text-slate-400 text-sm">Total Events</div>
        <div className="text-slate-500 text-xs mt-1">events attended as Leadership Partner</div>
      </div>
      <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#E8A020] mb-1" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{reachSum > 0 ? reachSum.toLocaleString() : "—"}</div>
        <div className="text-slate-400 text-sm">Content Reach</div>
        <div className="text-slate-500 text-xs mt-1">industry professionals reached</div>
      </div>
      <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#E8A020] mb-1" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{wgContributions}</div>
        <div className="text-slate-400 text-sm">WG Contributions</div>
        <div className="text-slate-500 text-xs mt-1">working group contributions</div>
      </div>
      <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#E8A020] mb-1" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{policyCount}</div>
        <div className="text-slate-400 text-sm">Policy Influence</div>
        <div className="text-slate-500 text-xs mt-1">policy consultations participated</div>
      </div>
    </div>
  );
}
