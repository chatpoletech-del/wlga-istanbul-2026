import { useState } from "react";

export default function SessionSummaryCard({ summary }) {
  const [showQuote, setShowQuote] = useState(false);
  const [showActions, setShowActions] = useState(false);
  if (!summary) return null;
  const { sessionTitle, speaker, duration, aiSummary, keyQuote, actionItems, tags } = summary;
  return (
    <article className="border-t-[3px] border-[#E8A020] bg-[#131C28] rounded-b-lg border border-[#1E2A3A] overflow-hidden relative">
      <div className="p-5">
        <h3 className="font-bold text-white text-lg mb-2">{sessionTitle}</h3>
        <p className="text-slate-400 text-sm flex items-center gap-2 mb-2">🎤 {speaker}</p>
        <span className="text-xs px-2 py-1 rounded bg-[#1E2A3A] text-slate-400">{duration}</span>
        <div className="mt-4"><p className="text-slate-300 text-sm leading-relaxed">{aiSummary}</p></div>
        {keyQuote && <div className="mt-4"><button onClick={() => setShowQuote(!showQuote)} className="text-[#A855F7] italic text-sm font-medium hover:underline">{showQuote ? "Hide" : "Show"} Key Quote</button>{showQuote && <blockquote className="mt-2 pl-4 border-l-2 border-[#A855F7]/50 text-[#A855F7] italic text-sm">{keyQuote}</blockquote>}</div>}
        {actionItems?.length > 0 && <div className="mt-4"><button onClick={() => setShowActions(!showActions)} className="text-[#E8A020] text-sm font-medium hover:underline">{showActions ? "Hide" : "Show"} Action Items</button>{showActions && <ul className="mt-2 space-y-1 list-disc list-inside text-slate-400 text-sm">{actionItems.map((a, i) => <li key={i}>{a}</li>)}</ul>}</div>}
        {tags?.length > 0 && <div className="flex flex-wrap gap-2 mt-4">{tags.map((t) => <span key={t} className="text-xs px-2 py-1 rounded bg-[#1E2A3A] text-slate-400">{t}</span>)}</div>}
        <div className="absolute bottom-2 right-2 text-[10px] text-slate-600">AI-Generated Summary</div>
      </div>
    </article>
  );
}
