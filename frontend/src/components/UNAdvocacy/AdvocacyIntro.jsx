import { useState } from "react";
import { INTRO } from "../../data/unAdvocacyData";

export default function AdvocacyIntro() {
  const [expandedPillar, setExpandedPillar] = useState(null);

  return (
    <section className="advocacy-surface doc-paper-bg border-b advocacy-border px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium un-blue border border-[#4A90D9]/40 mb-4 doc-code">
              ECOSOC SPECIAL CONSULTATIVE STATUS · SINCE 1970s
            </div>
            <h1 className="advocacy-display text-4xl lg:text-5xl font-bold italic text-white mb-3">
              {INTRO.title}
            </h1>
            <p className="text-[#8B949E] text-lg mb-4">{INTRO.tagline}</p>
            <p className="text-[#8B949E] text-sm leading-relaxed whitespace-pre-line">{INTRO.description}</p>
            <div className="mt-6 pl-4 border-l-4 border-[#E8A020] text-[#8B949E] text-sm italic">
              UN advocacy is WLGA most strategically critical activity. This tool ensures we walk into every meeting better prepared. — James Rockall, CEO, WLGA
            </div>
            <p className="text-[#8B949E] text-xs mt-4">Advocacy Lead: Chief Advocacy Officer, WLGA</p>
          </div>
          <div className="lg:w-[45%] grid grid-cols-2 gap-3">
            {INTRO.keyFacts.map((f) => (
              <div key={f.label} className="advocacy-deep border advocacy-border rounded-lg p-4">
                <span className="text-2xl">{f.icon}</span>
                <p className="un-blue font-semibold mt-1">{f.value}</p>
                <p className="text-[#8B949E] text-xs font-medium">{f.label}</p>
                <p className="text-[#8B949E] text-xs mt-1">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <span className="text-xs text-[#8B949E] px-2 py-1 rounded bg-[#161B22]">{INTRO.currentStrategicTheme}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {INTRO.advocacyPillars.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setExpandedPillar(expandedPillar === p.id ? null : p.id)}
              className="px-3 py-1.5 rounded text-xs font-medium text-white border"
              style={{ backgroundColor: p.color, borderColor: p.color }}
            >
              {p.name}
              {expandedPillar === p.id && <span className="block text-left mt-1 font-normal opacity-90 max-w-xs">{p.description}</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-[#4A90D9]/30">
        <p className="text-center text-xs text-[#8B949E] doc-code">180+ SOURCES MONITORED · WLGA ECOSOC STATUS · AI-POWERED INTELLIGENCE</p>
      </div>
    </section>
  );
}
