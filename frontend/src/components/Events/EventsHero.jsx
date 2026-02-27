import { useState, useEffect } from "react";

function Countdown({ targetDate }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const start = new Date(targetDate);
  const diff = Math.max(0, start - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return (
    <div className="flex gap-3">
      <div className="countdown-unit">
        <span className="text-2xl font-bold text-[#E8A020]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{days}</span>
        <span className="text-xs text-slate-500">Days</span>
      </div>
      <div className="countdown-unit">
        <span className="text-2xl font-bold text-[#E8A020]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{hours}</span>
        <span className="text-xs text-slate-500">Hours</span>
      </div>
    </div>
  );
}

export default function EventsHero({ event, onViewDetails, onRegister }) {
  if (!event) return null;
  const { dates, location, theme, registration } = event;
  const keynote = event.speakers?.find((s) => s.type === "Keynote");
  return (
    <section className="event-hero-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E8A020]/20 text-[#E8A020] text-xs font-semibold mb-4">
              FEATURED EVENT
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {event.title.toUpperCase()}
            </h1>
            <p className="text-slate-400 italic mb-4">{theme}</p>
            <p className="text-slate-300 text-sm mb-2">
              {location.flag} {location.city}, {location.country} · {location.venue}
            </p>
            <p className="text-[#E8A020] text-sm flex items-center gap-2 mb-4">
              <span>📅</span> {dates.display}
            </p>
            {keynote && (
              <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg px-4 py-3 mb-4 inline-block">
                <span className="text-amber-400">⭐ Keynote: {keynote.name}, {keynote.title}</span>
              </div>
            )}
            <div className="bg-red-500/15 border border-red-500/40 rounded px-4 py-2 mb-6 text-red-300 text-sm">
              🔴 Only 14% of exhibition space remaining — secure your booth now
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onRegister(registration?.types?.[0])}
                className="px-5 py-2.5 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg hover:bg-[#d4911a] transition-colors"
              >
                Register Now →
              </button>
              <button
                onClick={onViewDetails}
                className="px-5 py-2.5 border border-[#E8A020] text-[#E8A020] font-semibold rounded-lg hover:bg-[#E8A020]/10 transition-colors"
              >
                View Full Details
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Countdown targetDate={dates.start} />
          </div>
        </div>
      </div>
    </section>
  );
}
