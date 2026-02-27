import { UN_DOCUMENTS, UN_SESSIONS, BRIEFING_PACKS } from "../../data/unAdvocacyData";

const criticalCount = UN_DOCUMENTS.filter((d) => d.flagPriority === "critical").length;
const pendingPapers = 3;
const nairobiReady = UN_SESSIONS.some((s) => s.id === "SES-001" && BRIEFING_PACKS["SES-001"]);

export default function AdvocacyHeader({ onGoToBriefing }) {
  return (
    <div className="sticky top-0 z-10 advocacy-surface border-b advocacy-border px-6 py-3 flex flex-wrap items-center gap-4">
      <span className="doc-code text-[#8B949E]">
        🏛️ ECOSOC Status: <span className="un-blue">Special Consultative</span>
      </span>
      <span className="doc-code text-[#8B949E]">
        📄 <span className="un-blue">{UN_DOCUMENTS.length}</span> Documents Flagged This Month
      </span>
      <span className="doc-code text-[#8B949E]">
        🚨 <span className="un-blue">{criticalCount}</span> Critical Alerts
      </span>
      <span className="doc-code text-[#8B949E]">
        📌 <span className="un-blue">47</span> Lifetime Citations
      </span>
      <span className="doc-code text-[#8B949E]">
        📅 Next Session: <span className="un-blue">Nairobi 9 Jul</span>
      </span>
      <span className="doc-code text-[#8B949E]">
        📝 <span className="un-blue">{pendingPapers}</span> Pending Submissions
      </span>
      {nairobiReady ? (
        <button
          type="button"
          onClick={onGoToBriefing}
          className="ml-auto px-3 py-1.5 rounded text-xs font-semibold bg-[#E8A020] text-[#0D1117] hover:opacity-90"
        >
          🤖 Briefing Pack Ready: Nairobi Summit →
        </button>
      ) : (
        <span className="doc-code text-[#8B949E] ml-auto">🤖 AI Briefing Ready: Nairobi Summit</span>
      )}
    </div>
  );
}
