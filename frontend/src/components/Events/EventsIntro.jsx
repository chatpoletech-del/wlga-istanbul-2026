import { EVENTS_PAGE_INTRO } from "../../data/eventsData";

export default function EventsIntro() {
  const { description, stats } = EVENTS_PAGE_INTRO;
  return (
    <section className="border-b border-[#E8A020]/40 bg-[#0D1321]" style={{ borderTop: "2px solid rgba(232,160,32,0.3)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/wlga-logo.svg" alt="WLGA" className="h-8 w-auto opacity-90" />
              <span className="font-bold text-[#E8A020] tracking-widest text-sm uppercase" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                WLGA GLOBAL EVENTS HUB
              </span>
            </div>
            <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">{description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value }) => (
              <div key={label} className="text-center p-4 rounded-lg bg-[#131C28]/60 border border-[#1E2A3A]">
                <div className="text-2xl font-bold text-[#E8A020]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{value}</div>
                <div className="text-xs text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-[#E8A020]/50" />
    </section>
  );
}
