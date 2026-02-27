export default function DigestCard({ item, onViewDetails }) {
  const isUrgent = item.actionRequired;
  const stripColor = isUrgent ? "#FF4D4D" : "#3B82F6";
  return (
    <div className="tracker-surface border border-[#0D2A1A] rounded-lg flex" style={{ borderLeftWidth: "4px", borderLeftColor: stripColor }}>
      <div className="p-4 flex-1">
        <div className="font-semibold text-white text-sm">{item.title}</div>
        <div className="terminal-font text-[#4A7C5E] text-xs mt-1">{item.date} · {item.source}</div>
        <p className="text-slate-400 text-sm mt-2">{item.summary}</p>
        {item.actionRequired && <span className="inline-block mt-2 px-2 py-0.5 rounded bg-[#E8A020]/20 text-[#E8A020] text-xs">⚡ Action Required</span>}
      </div>
    </div>
  );
}
