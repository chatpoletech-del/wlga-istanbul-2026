import { useState } from "react";

export default function DocumentCard({ document: doc, onViewDocument, onDraftResponse }) {
  const [expanded, setExpanded] = useState(false);
  const content = doc.keyLPGContent || [];
  const showContent = expanded ? content : content.slice(0, 1);
  const border = doc.flagPriority === "critical" ? "doc-critical" : doc.flagSentiment === "negative" ? "doc-negative" : doc.flagSentiment === "mixed" ? "doc-mixed" : "doc-positive";

  return (
    <div className={"advocacy-surface border advocacy-border rounded-lg " + border}>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded font-semibold bg-[#8B949E]/20 text-[#8B949E]">{doc.flagPriority.toUpperCase()}</span>
          <span className="doc-code text-xs text-[#8B949E] px-2 py-0.5 rounded bg-[#21262D]">{doc.type}</span>
        </div>
        <p className="text-[#8B949E] text-xs doc-code">{doc.body} · {doc.documentRef}</p>
        <h3 className="advocacy-display font-bold text-white text-base mt-1">{doc.title}</h3>
        <p className="text-[#8B949E] text-xs">{doc.publishedDate}</p>
        <div className="mt-3 p-3 advocacy-deep rounded border-l-4 border-[#4A90D9]">
          <p className="text-xs font-semibold text-[#4A90D9]">AI ASSESSMENT:</p>
          <p className="text-[#8B949E] text-sm mt-1">{doc.aiFlag}</p>
        </div>
        <p className="mt-2 text-xs un-blue font-semibold">{doc.lpgMentions} LPG mentions</p>
        {content.length > 0 && (
          <div className="mt-3">
            {showContent.map((item, i) => (
              <div key={i} className="pl-2 border-l-2 border-[#21262D] text-[#8B949E] text-xs py-1">
                p.{item.page} {item.text} <span className="ml-2 px-1 rounded bg-[#3FB950]/20 text-[#3FB950]">{item.sentiment}</span>
              </div>
            ))}
            {content.length > 1 && (
              <button type="button" onClick={() => setExpanded(!expanded)} className="text-xs un-blue mt-1">Show {expanded ? "less" : "all " + content.length}</button>
            )}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs px-2 py-0.5 rounded bg-[#8B949E]/20 text-[#8B949E]">{doc.wlgaResponseStatus}</span>
          {doc.wlgaCited && <span className="text-xs px-2 py-0.5 rounded bg-[#4A90D9]/20 text-[#4A90D9]">WLGA Cited</span>}
          <button type="button" onClick={() => onViewDocument(doc.id)} className="text-xs un-blue">View Full Analysis</button>
          <button type="button" onClick={() => onDraftResponse(doc.id)} className="text-xs text-[#E8A020]">Draft Response</button>
        </div>
      </div>
    </div>
  );
}
