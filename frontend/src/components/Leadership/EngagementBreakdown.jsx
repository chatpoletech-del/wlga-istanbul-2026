import { useState } from "react";
import { getScoreColor } from "../../data/leadershipData";

export default function EngagementBreakdown({ partner }) {
  const [open, setOpen] = useState({ events: true, thought: true, wg: true, policy: true });
  const eng = partner?.engagement;
  if (!eng) return null;

  const eventsTotal = eng.eventsAttended?.reduce((s, e) => s + (e.points || 0), 0) ?? 0;
  const thoughtTotal = eng.thoughtLeadership?.reduce((s, t) => s + (t.points || 0), 0) ?? 0;
  const wgTotal = eng.workingGroups?.reduce((s, w) => s + (w.points || 0), 0) ?? 0;
  const policyTotal = eng.policyEngagement?.reduce((s, p) => s + (p.points || 0), 0) ?? 0;
  const maxPillar = Math.max(eventsTotal, thoughtTotal, wgTotal, policyTotal, 1);

  const Section = ({ title, keyName, total, maxVal, children }) => (
    <div>
      <button onClick={() => setOpen((o) => ({ ...o, [keyName]: !o[keyName] }))} className="w-full flex items-center justify-between py-2 text-left text-white font-semibold">
        {title}
        <span className="text-slate-400 text-sm">{open[keyName] ? "▼" : "▶"}</span>
      </button>
      <div className="pillar-bar mb-2">
        <div className="pillar-bar-fill" style={{ width: `${(total / maxVal) * 100}%`, background: getScoreColor((total / 60) * 100) }} />
      </div>
      {open[keyName] && children}
    </div>
  );

  return (
    <div className="space-y-6">
      <Section title="Events Attended" keyName="events" total={eventsTotal} maxVal={maxPillar}>
        <table className="w-full text-sm">
          <thead><tr className="text-slate-500 border-b border-[#1E2A3A]"><th className="text-left py-2">Event Name</th><th className="text-left py-2">Role</th><th className="text-left py-2">Date</th><th className="text-right py-2">Points</th></tr></thead>
          <tbody className="text-slate-300">
            {eng.eventsAttended?.map((e, i) => <tr key={i} className="border-b border-[#1E2A3A]/50"><td className="py-2">{e.name}</td><td>{e.role}</td><td>{e.date}</td><td className="text-right text-[#E8A020]">{e.points}</td></tr>)}
            <tr className="font-bold text-[#E8A020]"><td colSpan={3} className="py-2">Total</td><td className="text-right">{eventsTotal}</td></tr>
          </tbody>
        </table>
      </Section>
      <Section title="Thought Leadership" keyName="thought" total={thoughtTotal} maxVal={maxPillar}>
        <table className="w-full text-sm">
          <thead><tr className="text-slate-500 border-b border-[#1E2A3A]"><th className="text-left py-2">Title</th><th className="text-left py-2">Type</th><th className="text-left py-2">Date</th><th className="text-left py-2">Reach</th><th className="text-right py-2">Points</th></tr></thead>
          <tbody className="text-slate-300">
            {eng.thoughtLeadership?.map((t, i) => <tr key={i} className="border-b border-[#1E2A3A]/50"><td className="py-2">{t.title}</td><td>{t.type}</td><td>{t.date}</td><td>{t.reach}</td><td className="text-right text-[#E8A020]">{t.points}</td></tr>)}
            <tr className="font-bold text-[#E8A020]"><td colSpan={4} className="py-2">Total</td><td className="text-right">{thoughtTotal}</td></tr>
          </tbody>
        </table>
      </Section>
      <Section title="Working Groups" keyName="wg" total={wgTotal} maxVal={maxPillar}>
        <table className="w-full text-sm">
          <thead><tr className="text-slate-500 border-b border-[#1E2A3A]"><th className="text-left py-2">Working Group</th><th className="text-left py-2">Role</th><th className="text-left py-2">Contributions</th><th className="text-right py-2">Points</th></tr></thead>
          <tbody className="text-slate-300">
            {eng.workingGroups?.map((w, i) => <tr key={i} className="border-b border-[#1E2A3A]/50"><td className="py-2">{w.name}</td><td>{w.role}</td><td>{w.contributions}</td><td className="text-right text-[#E8A020]">{w.points}</td></tr>)}
            <tr className="font-bold text-[#E8A020]"><td colSpan={3} className="py-2">Total</td><td className="text-right">{wgTotal}</td></tr>
          </tbody>
        </table>
      </Section>
      <Section title="Policy Engagement" keyName="policy" total={policyTotal} maxVal={maxPillar}>
        <table className="w-full text-sm">
          <thead><tr className="text-slate-500 border-b border-[#1E2A3A]"><th className="text-left py-2">Initiative</th><th className="text-left py-2">Role</th><th className="text-left py-2">Date</th><th className="text-right py-2">Points</th></tr></thead>
          <tbody className="text-slate-300">
            {eng.policyEngagement?.map((p, i) => <tr key={i} className="border-b border-[#1E2A3A]/50"><td className="py-2">{p.name}</td><td>{p.role}</td><td>{p.date}</td><td className="text-right text-[#E8A020]">{p.points}</td></tr>)}
            <tr className="font-bold text-[#E8A020]"><td colSpan={3} className="py-2">Total</td><td className="text-right">{policyTotal}</td></tr>
          </tbody>
        </table>
      </Section>
    </div>
  );
}
