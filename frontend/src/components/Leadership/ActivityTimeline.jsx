import { useState } from "react";

function flattenActivities(partner) {
  const eng = partner?.engagement;
  if (!eng) return [];
  const out = [];
  (eng.eventsAttended || []).forEach((e) => out.push({ date: e.date, type: "Event", title: e.name, detail: e.role, points: e.points, color: "#E8A020" }));
  (eng.thoughtLeadership || []).forEach((t) => out.push({ date: t.date, type: "Publication", title: t.title, detail: t.type, points: t.points, color: "#A855F7" }));
  (eng.workingGroups || []).forEach((w) => out.push({ date: "Ongoing", type: "Working Group", title: w.name, detail: w.role + " - " + w.contributions + " contributions", points: w.points, color: "#3B82F6" }));
  (eng.policyEngagement || []).forEach((p) => out.push({ date: p.date, type: "Policy", title: p.name, detail: p.role, points: p.points, color: "#10B981" }));
  return out.sort((a, b) => {
    const d = (x) => (x.date === "Ongoing" ? "0000" : x.date.replace(/\s/g, ""));
    return d(b).localeCompare(d(a));
  });
}

export default function ActivityTimeline({ partner }) {
  const all = flattenActivities(partner);
  const [show, setShow] = useState(8);
  const visible = all.slice(0, show);
  const hasMore = all.length > show;

  return (
    <div>
      <div className="flex flex-col">
        {visible.map((a, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="timeline-dot" style={{ background: a.color }} />
              {i < visible.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="pb-4 flex-1">
              <div className="text-slate-500 text-xs">{a.date}</div>
              <span className="text-xs px-2 py-0.5 rounded bg-[#1E2A3A] text-slate-400 mr-2">{a.type}</span>
              <span className="font-semibold text-white">{a.title}</span>
              <p className="text-slate-400 text-sm mt-0.5">{a.detail}</p>
              {a.points != null && <span className="text-xs text-emerald-400">+{a.points} pts</span>}
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <button onClick={() => setShow((s) => s + 8)} className="mt-4 text-sm text-[#E8A020] hover:underline">
          Load more activity
        </button>
      )}
    </div>
  );
}
