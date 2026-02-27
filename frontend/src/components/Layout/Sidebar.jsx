import { NavLink } from "react-router-dom";
import { EVENTS, getEventStatus } from "../../data/eventsData";

const hasLiveEvent = () => EVENTS.some((e) => getEventStatus(e) === "live");

const navItems = [
  { path: "/", label: "Dashboard", icon: "◉" },
  { path: "/certification", label: "Certification", icon: "🏆", badge: "NEW" },
  { path: "/events", label: "WLGA Events", icon: "🗓️", badge: hasLiveEvent() ? "LIVE" : "NEW", badgeLive: hasLiveEvent() },
  { path: "/leadership-partners", label: "Leadership Partners", icon: "⭐", badge: "NEW" },
  { path: "/innovation-tracker", label: "rLPG Tracker", icon: "🌱", badge: "LIVE", trackerGreen: true },
  { path: "/un-advocacy", label: "UN Advocacy", icon: "🏛️", badge: "NEW", unAdvocacy: true },
  { path: "/matchmaking", label: "AI Matchmaking", icon: "◆" },
  { path: "/session-qa", label: "Live Session Q&A", icon: "◇" },
  { path: "/knowledge-hub", label: "Knowledge Hub", icon: "▣" },
  { path: "/speaker-briefs", label: "Speaker Briefs", icon: "▤" },
];

export default function Sidebar() {
  return (
    <aside className="w-56 min-h-screen bg-wlga-sky border-r border-sky-400/50 flex flex-col">
      <div className="p-4 border-b border-sky-400/50">
        <img src="/wlga-logo.svg" alt="WLGA Istanbul 2026" className="h-20 w-auto" />
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ path, label, icon, badge, badgeLive, trackerGreen, unAdvocacy }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) => {
              if (trackerGreen) {
                return `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative nav-tracker ${isActive ? "nav-tracker-active" : "nav-tracker-inactive"}`;
              }
              if (unAdvocacy) {
                return `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative nav-un-advocacy ${isActive ? "nav-un-advocacy-active" : "nav-un-advocacy-inactive"}`;
              }
              return `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative ${
                isActive ? "bg-white/90 text-sky-800 border border-sky-600/40 shadow-sm" + (path === "/certification" || path === "/events" || path === "/leadership-partners" ? " border-l-4 border-l-[#E8A020]" : "") : "text-sky-900 hover:bg-white/60"
              }`;
            }}
          >
            <span className={trackerGreen ? "nav-tracker-icon" : unAdvocacy ? "nav-un-advocacy-icon" : (path === "/" || path === "/certification" || path === "/events" || path === "/leadership-partners" ? "text-sky-700" : "text-sky-800")}>{icon}</span>
            {label}
            {badge && (
              <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded ${trackerGreen ? "nav-tracker-badge" : unAdvocacy ? "bg-[#E8A020] text-[#0A0E14]" : badgeLive ? "bg-emerald-500 text-white" : "bg-[#E8A020] text-[#0A0E14]"}`}>
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-sky-400/50 text-xs text-sky-800/80">
        WLGA AI Suite POC · v1.0
      </div>
    </aside>
  );
}
