import { PROGRAMME_INTRO } from "../../data/leadershipData";

export default function LeadershipIntro() {
  const { launchDate, tagline, description, ceoQuote, programmeCategories, contact } = PROGRAMME_INTRO;
  return (
    <section className="bg-[#0D1321] border-b border-[#E8A020]/40" style={{ borderTop: "2px solid rgba(232,160,32,0.3)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E8A020]/20 text-[#E8A020] text-xs font-semibold mb-4">
              🏆 WLGA LEADERSHIP PARTNER PROGRAMME · Launched {launchDate}
            </span>
            <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              LEADERSHIP PARTNER PROGRAMME
            </h1>
            <p className="text-slate-300 text-lg mb-4">{tagline}</p>
            <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line mb-6">{description}</p>
            <blockquote className="pl-4 border-l-4 border-[#E8A020] text-slate-300 text-sm italic">
              {ceoQuote.text}
              <footer className="mt-2 not-italic text-slate-500 text-xs">
                — {ceoQuote.author}, {ceoQuote.title}
              </footer>
            </blockquote>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-2">
              {programmeCategories.map((cat) => (
                <span
                  key={cat.id}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border"
                  style={{ borderColor: cat.color, color: cat.color, background: `${cat.color}15` }}
                >
                  {cat.icon} {cat.name}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              8 Current Leadership Partners · Launched February 2026 · Invitation Only
            </p>
            <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg px-4 py-3 text-sm text-slate-400">
              Programme contact: <span className="text-[#E8A020] font-medium">{contact.name}</span>, {contact.title}
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-[#E8A020]/50" />
    </section>
  );
}
