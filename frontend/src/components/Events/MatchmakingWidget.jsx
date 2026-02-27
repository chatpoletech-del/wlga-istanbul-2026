import { useState } from "react";
import { MATCHMAKING_PROFILES, MATCH_REASONS_POOL } from "../../data/eventsData";

const INDUSTRY_OPTIONS = ["Producer", "Distributor", "Trader", "Equipment Manufacturer", "NGO/Development", "Government", "Other"];
const GOAL_OPTIONS = ["Find distribution partners", "Secure supply", "Technology partnerships", "Clean cooking programmes", "Safety standards", "Investment", "Other"];
const REGION_OPTIONS = ["Europe", "Americas", "Asia Pacific", "Middle East", "Africa"];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchmakingWidget({ eventId }) {
  const [role, setRole] = useState("");
  const [goal, setGoal] = useState("");
  const [region, setRegion] = useState("");
  const [matches, setMatches] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const count = 4 + Math.floor(Math.random() * 3);
    const shuffled = shuffle(MATCHMAKING_PROFILES).slice(0, count);
    const reasons = shuffle(MATCH_REASONS_POOL);
    setMatches(
      shuffled.map((p, i) => ({
        ...p,
        score: 75 + Math.floor(Math.random() * 21),
        reason: reasons[i % reasons.length],
      }))
    );
  };

  return (
    <div className="space-y-6">
      <p className="text-slate-300 text-sm">
        Tell us about yourself and we'll show you who to connect with at this event.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-slate-400 text-sm mb-1">Your Industry Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-3 py-2 bg-[#131C28] border border-[#1E2A3A] rounded text-white">
            <option value="">Select</option>
            {INDUSTRY_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-1">Your Primary Goal</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full px-3 py-2 bg-[#131C28] border border-[#1E2A3A] rounded text-white">
            <option value="">Select</option>
            {GOAL_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-1">Your Region</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full px-3 py-2 bg-[#131C28] border border-[#1E2A3A] rounded text-white">
            <option value="">Select</option>
            {REGION_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="px-4 py-2.5 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg hover:bg-[#d4911a]">
          Find My Matches →
        </button>
      </form>
      {matches.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {matches.map((m) => (
            <div key={m.id} className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-semibold text-white">{m.name}</div>
                  <div className="text-slate-400 text-sm">{m.title}, {m.company}</div>
                  <div className="text-slate-500 text-xs">{m.country}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-medium">{m.score}% match</span>
              </div>
              <p className="text-slate-400 text-xs mb-3">{m.reason}</p>
              <button className="w-full py-2 text-sm border border-[#E8A020] text-[#E8A020] rounded-lg hover:bg-[#E8A020]/10" title="Coming Soon">
                Connect — Coming Soon
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
