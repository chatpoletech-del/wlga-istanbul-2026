import { useState, useMemo } from "react";
import EventCard from "./EventCard";

const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "Flagship Annual Event", label: "Flagship" },
  { value: "Regional Summit", label: "Regional" },
  { value: "Member Working Meetings", label: "Members Only" },
  { value: "Innovation Summit", label: "Innovation" },
  { value: "Ministerial Meeting", label: "Ministerial" },
];

export default function EventsGrid({ events, onViewEvent, activeTab, onTabChange, upcomingCount = 0, pastCount = 0 }) {
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(() => {
    if (filter === "all") return events;
    return events.filter((e) => e.type === filter);
  }, [events, filter]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex border-b border-[#1E2A3A] mb-6">
        <button
          onClick={() => onTabChange("upcoming")}
          className={`px-6 py-3 font-medium text-sm transition-colors ${
            activeTab === "upcoming"
              ? "text-[#E8A020] border-b-2 border-[#E8A020]"
              : "text-slate-400 hover:text-slate-300"
          }`}
        >
          Upcoming Events ({upcomingCount})
        </button>
        <button
          onClick={() => onTabChange("past")}
          className={`px-6 py-3 font-medium text-sm transition-colors ${
            activeTab === "past"
              ? "text-[#E8A020] border-b-2 border-[#E8A020]"
              : "text-slate-400 hover:text-slate-300"
          }`}
        >
          Past Events ({pastCount})
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filter === opt.value
                ? "bg-[#E8A020] text-[#0A0E14]"
                : "bg-[#131C28] text-slate-400 hover:text-slate-300 border border-[#1E2A3A]"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ev) => (
          <EventCard key={ev.id} event={ev} onViewDetails={(id) => onViewEvent(id)} />
        ))}
      </div>
    </section>
  );
}
