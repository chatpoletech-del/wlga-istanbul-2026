import { useState } from "react";

export default function BriefingPackView({ pack, onBack }) {
  const [openSection, setOpenSection] = useState(null);
  const [checked, setChecked] = useState({});

  if (!pack) return null;

  const toggleCheck = (i) => setChecked((c) => ({ ...c, [i]: !c[i] }));

  return (
    <div className="advocacy-surface border advocacy-border rounded-lg overflow-hidden">
      <div className="p-6 border-b advocacy-border bg-[#0D1117]">
        <button type="button" onClick={onBack} className="text-[#4A90D9] text-sm mb-4">Back to sessions</button>
        <h1 className="advocacy-display font-bold text-white text-2xl">WLGA Delegation Briefing Pack</h1>
        <p className="text-[#8B949E] mt-1">{pack.subtitle}</p>
        <p className="doc-code text-xs text-[#8B949E] mt-2">CLASSIFICATION: {pack.classification}</p>
        <p className="text-xs text-[#8B949E] mt-1">Generated {pack.generatedDate}</p>
      </div>
      {pack.urgentActions && pack.urgentActions.length > 0 && (
        <div className="p-4 border-b border-[#F85149]/50 bg-[#F85149]/5">
          <h3 className="text-[#F85149] font-semibold text-sm mb-2">URGENT ACTIONS</h3>
          {pack.urgentActions.map((action, i) => (
            <label key={i} className="flex items-center gap-2 text-[#8B949E] text-sm py-1">
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggleCheck(i)} />
              {action}
            </label>
          ))}
        </div>
      )}
      <div className="p-6 space-y-2">
        {(pack.sections || []).map((sec, i) => (
          <div key={i} className="border advocacy-border rounded-lg overflow-hidden">
            <button type="button" onClick={() => setOpenSection(openSection === i ? null : i)} className="w-full p-4 text-left flex justify-between advocacy-surface hover:bg-[#161B22]">
              <span className="advocacy-display font-semibold text-white">{sec.title}</span>
              <span className="text-[#8B949E]">{openSection === i ? "-" : "+"}</span>
            </button>
            {openSection === i && <div className="p-4 advocacy-deep border-t advocacy-border text-[#8B949E] text-sm whitespace-pre-wrap">{sec.content}</div>}
          </div>
        ))}
      </div>
      <div className="p-4 border-t advocacy-border flex gap-2">
        <button type="button" onClick={() => window.print()} className="px-4 py-2 rounded border advocacy-border text-[#8B949E] text-sm">Print</button>
        <button type="button" className="px-4 py-2 rounded border advocacy-border text-[#8B949E] text-sm">Download PDF</button>
        <button type="button" className="px-4 py-2 rounded border advocacy-border text-[#8B949E] text-sm">Share</button>
      </div>
    </div>
  );
}
