import CitationTimeline from "./CitationTimeline";

export default function CitationTracker() {
  return (
    <div>
      <h2 className="advocacy-display font-bold text-white text-xl mb-2">WLGA Citation Tracker</h2>
      <p className="text-[#8B949E] text-sm mb-6">WLGA mentions and citations in UN and multilateral documents over time</p>
      <CitationTimeline />
    </div>
  );
}
