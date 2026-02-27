import { POSITION_PAPERS } from "../../data/unAdvocacyData";

export default function DocumentFlagPanel({ document: doc, onClose, onDraftResponse }) {
  if (!doc) return null;
  const relatedPaper = POSITION_PAPERS.find((p) => p.relatedDocId === doc.id);

  return (
    <div className="advocacy-surface border advocacy-border rounded-lg sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="p-4 border-b advocacy-border flex justify-between items-start">
        <h2 className="advocacy-display font-bold text-white text-lg">{doc.title}</h2>
        <button type="button" onClick={onClose} className="text-[#8B949E] hover:text-white text-xl leading-none">×</button>
      </div>
      <div className="p-4 space-y-4">
        <p className="text-[#8B949E] text-sm">{doc.body} · {doc.documentRef} · {doc.publishedDate}</p>
        <div className="p-3 advocacy-deep rounded border-l-4 border-[#4A90D9]">
          <p className="text-xs font-semibold text-[#4A90D9]">AI ASSESSMENT</p>
          <p className="text-[#8B949E] text-sm mt-1">{doc.aiFlag}</p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-2">LPG mentions</h4>
          {(doc.keyLPGContent || []).map((item, i) => (
            <div key={i} className="pl-2 border-l-2 border-[#21262D] text-[#8B949E] text-sm py-2">
              <span className="text-[#4A90D9] doc-code">p.{item.page}</span> {item.text}
              <span className={`ml-2 px-1 rounded text-xs ${item.sentiment === "positive" ? "bg-[#3FB950]/20 text-[#3FB950]" : item.sentiment === "negative" ? "bg-[#F85149]/20 text-[#F85149]" : "bg-[#E8A020]/20 text-[#E8A020]"}`}>{item.sentiment}</span>
            </div>
          ))}
        </div>
        <div className="pl-4 border-l-4 border-[#E8A020]">
          <h4 className="text-[#E8A020] text-sm font-semibold mb-1">WLGA Strategic Importance</h4>
          <p className="text-[#8B949E] text-sm">{doc.wlgaAction}</p>
        </div>
        {doc.wlgaCitationCount > 0 && (
          <p className="text-[#8B949E] text-xs">Previous WLGA citations in documents from this body: {doc.wlgaCitationCount}</p>
        )}
        <button
          type="button"
          onClick={() => onDraftResponse?.(doc.id)}
          className="w-full py-2 rounded font-medium bg-[#4A90D9] text-white hover:opacity-90"
        >
          Draft Formal Response
        </button>
      </div>
    </div>
  );
}
