import { useState } from "react";
import { getEventStatus } from "../../data/eventsData";
import EventAI from "./EventAI";
import { AI_SESSION_SUMMARIES } from "../../data/eventsData";
import SessionSummaryCard from "./SessionSummaryCard";

const TABS = ["Overview", "Programme", "Speakers", "Registration", "AI Features"];

export default function EventDetail(props) {
  const { event, onBack, onRegister } = props;
  const [activeTab, setActiveTab] = useState("Overview");
  if (!event) return null;
  const isPast = event.status === "past";
  const showAITab = isPast && event.aiEnabled;
  const tabs = showAITab ? TABS : TABS.filter((t) => t !== "AI Features");

  return (
    <div className="min-h-screen bg-[#0A0E14]">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button onClick={onBack} className="text-[#E8A020] hover:underline mb-6">← All Events</button>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
          <p className="text-slate-400 italic mb-2">{event.theme}</p>
          <p className="text-slate-300 text-sm">{event.location.flag} {event.location.city}, {event.location.country}</p>
          <p className="text-[#E8A020] text-sm mt-1">📅 {event.dates.display}</p>
        </div>
        <div className="flex border-b border-[#1E2A3A] gap-1 mb-8">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={"px-4 py-2.5 text-sm " + (activeTab === tab ? "text-[#E8A020] border-b-2 border-[#E8A020]" : "text-slate-400")}>{tab}</button>
          ))}
        </div>
        {activeTab === "Overview" && (
          <div className="space-y-6">
            <p className="text-slate-300 whitespace-pre-line">{event.description}</p>
            <ul className="space-y-2">{event.highlights.map((h, i) => <li key={i} className="flex gap-2 text-slate-300 text-sm"><span className="text-[#E8A020]">✓</span> {h}</li>)}</ul>
            <div className="flex gap-6 text-sm text-slate-400">Attendees: {event.expectedAttendees} · Countries: {event.countries} · Capacity: {event.capacity}</div>
          </div>
        )}
        {activeTab === "Programme" && (
          isPast && AI_SESSION_SUMMARIES[event.id] ? (
            <div className="space-y-4">{AI_SESSION_SUMMARIES[event.id].map((s) => <SessionSummaryCard key={s.id} summary={s} />)}</div>
          ) : (
            <p className="text-slate-400">Programme to be announced.</p>
          )
        )}
        {activeTab === "Speakers" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {event.speakers?.map((s, i) => <div key={i} className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4"><div className="font-semibold text-white">{s.name}</div><div className="text-slate-400 text-sm">{s.title}</div><span className="text-xs px-2 py-1 rounded bg-[#1E2A3A] text-[#E8A020]">{s.type}</span></div>)}
          </div>
        )}
        {activeTab === "Registration" && (
          isPast ? (
            <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-6 text-center">
              <p className="text-slate-400 mb-4">This event has concluded.</p>
              {event.aiEnabled && <button onClick={() => setActiveTab("AI Features")} className="px-4 py-2 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg">View AI Highlights →</button>}
            </div>
            ) : event.registration?.open ? (
            <div className="space-y-4">
              {event.registration.earlyBirdDeadline && <p className="text-[#E8A020] text-sm">Early bird deadline: {event.registration.earlyBirdDeadline}</p>}
              {event.registration.types.map((type, i) => <div key={i} className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 flex justify-between items-center"><div><div className="font-semibold text-white">{type.name}</div><div className="text-[#E8A020] text-sm">{type.price}</div><div className="text-slate-400 text-sm">{type.description}</div></div><button onClick={() => onRegister(type)} className="px-4 py-2 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg">Register Now</button></div>)}
            </div>
          ) : (
            <p className="text-slate-400">Registration not yet open.</p>
          )
        )}
        {activeTab === "AI Features" && showAITab && <EventAI eventId={event.id} eventTitle={event.title} />}
      </div>
    </div>
  );
}
