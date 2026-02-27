import { useState } from "react";
import EventsIntro from "../components/Events/EventsIntro";
import EventsHero from "../components/Events/EventsHero";
import EventsGrid from "../components/Events/EventsGrid";
import EventDetail from "../components/Events/EventDetail";
import RegistrationModal from "../components/Events/RegistrationModal";
import { EVENTS, getUpcomingEvents, getPastEvents, getFeaturedEvent } from "../data/eventsData";

export default function Events() {
  const [view, setView] = useState("list");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showRegModal, setShowRegModal] = useState(false);
  const [selectedRegType, setSelectedRegType] = useState(null);

  const featuredEvent = getFeaturedEvent();
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  const handleViewDetails = (eventId) => {
    setSelectedEvent(EVENTS.find((e) => e.id === eventId));
    setView("detail");
    window.scrollTo(0, 0);
  };

  const handleRegister = (type) => {
    setSelectedRegType(type);
    setShowRegModal(true);
  };

  return (
    <div style={{ background: "#0A0E14", minHeight: "100vh" }}>
      {view === "list" && (
        <>
          <EventsIntro />
          <EventsHero event={featuredEvent} onViewDetails={() => handleViewDetails(featuredEvent?.id)} onRegister={handleRegister} />
          <EventsGrid
            events={activeTab === "upcoming" ? upcomingEvents : pastEvents}
            onViewEvent={handleViewDetails}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            upcomingCount={upcomingEvents.length}
            pastCount={pastEvents.length}
          />
        </>
      )}
      {view === "detail" && selectedEvent && (
        <EventDetail event={selectedEvent} onBack={() => setView("list")} onRegister={handleRegister} />
      )}
      {showRegModal && (
        <RegistrationModal
          event={selectedEvent || featuredEvent}
          registrationType={selectedRegType}
          onClose={() => setShowRegModal(false)}
        />
      )}
    </div>
  );
}
