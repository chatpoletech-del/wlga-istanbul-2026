import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { healthCheck } from "../../lib/api";

const modules = [
  {
    path: "/matchmaking",
    name: "AI Matchmaking Engine",
    description: "Match attendees by business goals, value chain, and geography.",
    stat: "50 Attendees · 200 Matches Generated",
    icon: "◆",
  },
  {
    path: "/session-qa",
    name: "Live Session AI Companion",
    description: "Real-time Q&A with AI clustering for moderators.",
    stat: "6 Sessions · 40 Questions",
    icon: "◇",
  },
  {
    path: "/knowledge-hub",
    name: "Post-Event Knowledge Hub",
    description: "RAG-powered search across session transcripts.",
    stat: "6 Session Transcripts",
    icon: "▣",
  },
  {
    path: "/speaker-briefs",
    name: "Speaker Brief Generator",
    description: "AI-generated briefing documents for speakers.",
    stat: "8 Speakers",
    icon: "▤",
  },
];

const stats = [
  { label: "Total Attendees", value: "50" },
  { label: "Sessions", value: "6" },
  { label: "Questions", value: "40+" },
  { label: "Sponsors", value: "—" },
];

export default function DashboardHome() {
  const [live, setLive] = useState(false);
  useEffect(() => {
    healthCheck().then(() => setLive(true)).catch(() => setLive(false));
  }, []);

  return (
      <div className="min-h-screen bg-grid bg-sky-100">
          <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl tracking-wider text-sky-700 mb-2">
            WLGA ISTANBUL 2026 AI SUITE
          </h1>
          <p className="text-wlga-content-muted">
            Liquid Gas Week — AI-Powered Event Experience POC
          </p>
          {live && (
            <span className="inline-block mt-2 text-xs text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
              API connected
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {modules.map((mod) => (
            <Link
              key={mod.path}
              to={mod.path}
              className="block bg-wlga-content-surface border border-wlga-content-border rounded-xl p-6 hover:border-sky-400 transition-colors group"
            >
              <span className="text-2xl text-sky-600 block mb-3">{mod.icon}</span>
              <h2 className="text-lg font-semibold text-wlga-content-text group-hover:text-sky-700 transition-colors">
                {mod.name}
              </h2>
              <p className="text-sm text-wlga-content-muted mt-1 mb-3">{mod.description}</p>
              <p className="text-xs text-sky-600">{mod.stat}</p>
              <span className="inline-block mt-3 text-sm font-medium text-sky-600">
                Launch Module →
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 py-6 border-t border-wlga-content-border">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl text-sky-700">{value}</div>
              <div className="text-xs text-wlga-content-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
