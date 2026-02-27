import { useState } from "react";
import { COUNTER_RESPONSES } from "../../data/innovationData";

export default function ResponseDrafter({ threat, onClose }) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const response = threat ? COUNTER_RESPONSES[threat.id] : null;

  const handleCopy = () => {
    if (response?.aiDraft) {
      navigator.clipboard?.writeText(response.aiDraft);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  if (!threat) return null;

  return (
    <div className="tracker-surface border border-[#0D2A1A] rounded-xl overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-[#0D2A1A] flex items-center justify-between">
        <h3 className="tracker-display font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>🤖 AI Counter-Response</h3>
        <button type="button" onClick={onClose} className="text-[#4A7C5E] hover:text-white text-xl">×</button>
      </div>
      <div className="p-6 flex-1 grid grid-cols-1 lg:grid-cols-5 gap-6 overflow-auto">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <p className="text-[#4A7C5E] text-xs mb-1">Threat</p>
            <p className="text-white text-sm font-semibold">{threat.title}</p>
            <p className="text-slate-400 text-xs mt-2">{threat.summary?.slice(0, 200)}...</p>
          </div>
          {response && (
            <>
              <div>
                <p className="text-[#4A7C5E] text-xs">Key points</p>
                <ul className="list-disc list-inside text-slate-300 text-sm mt-1">{response.keyPoints?.map((k, i) => <li key={i}>{k}</li>)}</ul>
              </div>
              <p className="text-[#E8A020] text-xs">⏱ Deadline: {response.deadline}</p>
              <p className="text-[#4A7C5E] text-xs">Target: {response.target}</p>
            </>
          )}
        </div>
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="tracker-display font-semibold text-white" style={{ fontFamily: "Syne, sans-serif" }}>🤖 AI-Drafted Counter-Response</span>
            {response && <span className="text-xs px-2 py-0.5 rounded bg-[#0D2A1A] text-[#4A7C5E]">{response.type}</span>}
          </div>
          {response ? (
            <div className="tracker-surface border border-[#0D2A1A] rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans">{response.aiDraft}</pre>
            </div>
          ) : (
            <div className="tracker-surface border border-[#0D2A1A] rounded-lg p-8 text-center">
              <p className="text-[#4A7C5E]">🤖 Generating counter-response draft...</p>
              <div className="mt-4 h-2 bg-[#0D2A1A] rounded-full overflow-hidden w-48 mx-auto"><div className="h-full w-1/2 bg-[#00FF88] rounded-full animate-pulse" /></div>
            </div>
          )}
          {response && (
            <div className="flex flex-wrap gap-2 mt-4">
              <button type="button" onClick={handleCopy} className="px-4 py-2 rounded bg-[#00FF88] text-[#050A0F] text-sm font-medium hover:opacity-90">{copied ? "✓ Copied" : "📋 Copy Draft"}</button>
              <button type="button" onClick={handleShare} className="px-4 py-2 rounded border border-[#00FF88] text-[#00FF88] text-sm hover:bg-[#00FF88]/10">{shared ? "✓ Sent" : "📧 Share with WLGA Team"}</button>
              <button type="button" className="px-4 py-2 rounded border border-[#0D2A1A] text-[#4A7C5E] text-sm">✏️ Mark as In Progress</button>
            </div>
          )}
        </div>
      </div>
      <div className="p-3 border-t border-[#0D2A1A] text-[#4A7C5E] text-xs text-center">AI-generated draft — review and approve before submission.</div>
    </div>
  );
}
