import { getEventStatus } from "../../data/eventsData";

export default function EventCard({ event, onViewDetails }) {
  if (!event) return null;
  const status = getEventStatus(event);
  const statusLabel = status === "live" ? "Live" : status === "upcoming" ? "Upcoming" : "Past";
  const statusColor = status === "live" ? "bg-emerald-500/20 text-emerald-400" : status === "upcoming" ? "bg-[#E8A020]/20 text-[#E8A020]" : "bg-slate-500/20 text-slate-400";

  return (
    <article
      className="event-card-border-left bg-[#131C28] rounded-r-lg overflow-hidden border border-[#1E2A3A] hover:border-[#1E2A3A]/80 transition-colors"
      style={{ borderLeftColor: event.color }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-2xl">{event.badge}</span>
          <span className="text-xs px-2 py-1 rounded bg-[#1E2A3A] text-slate-400">{event.type}</span>
        </div>
        <h3 className="font-bold text-white text-base mb-2 line-clamp-2">{event.title}</h3>
        <p className="text-slate-400 text-sm flex items-center gap-1 mb-1">
          {event.location.flag} {event.location.city}, {event.location.country}
        </p>
        <p className="text-slate-500 text-sm flex items-center gap-1 mb-2">📅 {event.dates.display}</p>
        <p className="text-slate-500 italic text-sm mb-4 line-clamp-2">{event.theme}</p>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs px-2 py-1 rounded bg-[#1E2A3A] text-slate-400">{event.expectedAttendees} attendees</span>
          <span className={`text-xs px-2 py-1 rounded ${statusColor}`}>{statusLabel}</span>
          {event.status === "past" && event.aiEnabled && (
            <span className="text-xs px-2 py-1 rounded bg-violet-500/20 text-violet-300">🤖 AI Highlights Available</span>
          )}
          {event.status === "upcoming" && event.registration?.open && (
            <span className="text-xs px-2 py-1 rounded bg-[#E8A020]/20 text-[#E8A020]">Registration Open</span>
          )}
        </div>
        <button
          onClick={() => onViewDetails(event.id)}
          className="w-full py-2 text-sm font-medium text-[#E8A020] hover:bg-[#E8A020]/10 rounded-lg transition-colors"
        >
          View Details →
        </button>
      </div>
    </article>
  );
}
