import { useState, useEffect } from "react";
import { POSITION_PAPERS } from "../../data/unAdvocacyData";

export default function PositionPaperDrafter(props) {
  const documents = props.documents || [];
  const preSelectedDocId = props.preSelectedDocId;
  const [docId, setDocId] = useState(preSelectedDocId || (documents[0] ? documents[0].id : ""));
  const [copied, setCopied] = useState(false);

  useEffect(function () { if (preSelectedDocId) setDocId(preSelectedDocId); }, [preSelectedDocId]);

  const paper = POSITION_PAPERS.find(function (p) { return p.relatedDocId === docId; });
  const draft = paper && paper.aiDraft ? paper.aiDraft : "No pre-built draft.";
  const wordCount = typeof draft === "string" ? draft.split(/\s+/).length : 0;

  function copyDraft() {
    if (typeof draft === "string") {
      navigator.clipboard.writeText(draft);
      setCopied(true);
      setTimeout(function () { setCopied(false); }, 2000);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3 advocacy-surface border advocacy-border rounded-lg p-4">
        <label className="block text-[#8B949E] text-sm mb-2">Document</label>
        <select value={docId} onChange={function (e) { setDocId(e.target.value); }} className="w-full doc-code px-3 py-2 advocacy-deep border advocacy-border rounded text-white text-sm mb-4">
          {documents.map(function (d) { return <option key={d.id} value={d.id}>{d.title}</option>; })}
        </select>
        <button type="button" className="w-full py-2 rounded font-medium bg-[#E8A020] text-[#0D1117]">Generate Draft</button>
      </div>
      <div className="lg:col-span-6 advocacy-surface border advocacy-border rounded-lg p-4">
        <h3 className="text-white font-semibold mb-2">AI-DRAFTED SUBMISSION</h3>
        {paper && <span className="text-xs text-[#8B949E]">{paper.type}</span>}
        <div className="mt-3 p-4 advocacy-deep rounded border advocacy-border text-[#8B949E] text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">{draft}</div>
        {paper && paper.keyArguments && paper.keyArguments.length > 0 && <ul className="list-disc list-inside text-sm text-[#8B949E] mt-3">{paper.keyArguments.map(function (a, i) { return <li key={i}>{a}</li>; })}</ul>}
        <p className="text-xs text-[#8B949E] mt-2 doc-code">{wordCount} / 2,000 words</p>
      </div>
      <div className="lg:col-span-3 advocacy-surface border advocacy-border rounded-lg p-4">
        <button type="button" onClick={copyDraft} className="w-full py-2 rounded border advocacy-border text-[#8B949E] text-sm mb-2">Copy Draft</button>
        <button type="button" className="w-full py-2 rounded border advocacy-border text-[#8B949E] text-sm mb-2">Download .docx</button>
        <button type="button" className="w-full py-2 rounded border border-[#E8A020] text-[#E8A020] text-sm mb-2">Mark In Progress</button>
        <button type="button" className="w-full py-2 rounded border border-[#3FB950] text-[#3FB950] text-sm">Mark Submitted</button>
        {copied && <p className="text-[#3FB950] text-xs mt-2">Copied.</p>}
      </div>
    </div>
  );
}
