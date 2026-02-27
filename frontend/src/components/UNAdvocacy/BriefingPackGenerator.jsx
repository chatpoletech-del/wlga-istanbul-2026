export default function BriefingPackGenerator({ sessions, onSelectSession }) {
  const upcoming = (sessions || []).filter((s) => s.status === "upcoming");
  const past = (sessions || []).filter((s) => s.status === "past");
  return (
    <div>
      <h2 className="advocacy-display font-bold text-white text-xl mb-2">AI Delegation Briefing Packs</h2>
      <p className="text-[#8B949E] text-sm mb-6">Pre-session briefing packs</p>
      <div className="space-y-4">
        {upcoming.map((s) => (
          <div key={s.id} className="advocacy-surface border advocacy-border rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-[#8B949E] text-sm">{s.dates} · {s.location}</p>
              <p className="text-xs text-[#4A90D9] mt-1">{s.wlgaRole}</p>
            </div>
            {s.briefingPackReady ? <button type="button" onClick={() => onSelectSession(s.id)} className="px-4 py-2 rounded font-medium bg-[#E8A020] text-[#0D1117]">View Briefing Pack</button> : <button type="button" className="px-4 py-2 rounded border advocacy-border text-[#8B949E] text-sm">Generate</button>}
          </div>
        ))}
        {past.length > 0 && <div className="mt-6"><h4 className="text-[#8B949E] text-sm mb-2">Past</h4>{past.map((s) => <div key={s.id} className="advocacy-surface border advocacy-border rounded-lg p-3 mb-2"><p className="text-white text-sm">{s.title}</p><p className="text-[#8B949E] text-xs">{s.dates}</p></div>)}</div>}
      </div>
    </div>
  );
}
