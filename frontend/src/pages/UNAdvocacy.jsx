import { useState } from "react";
import AdvocacyIntro from "../components/UNAdvocacy/AdvocacyIntro";
import AdvocacyHeader from "../components/UNAdvocacy/AdvocacyHeader";
import AdvocacyStats from "../components/UNAdvocacy/AdvocacyStats";
import DocumentMonitor from "../components/UNAdvocacy/DocumentMonitor";
import DocumentFlagPanel from "../components/UNAdvocacy/DocumentFlagPanel";
import PositionPaperDrafter from "../components/UNAdvocacy/PositionPaperDrafter";
import CitationTracker from "../components/UNAdvocacy/CitationTracker";
import BriefingPackGenerator from "../components/UNAdvocacy/BriefingPackGenerator";
import BriefingPackView from "../components/UNAdvocacy/BriefingPackView";
import PartnerMap from "../components/UNAdvocacy/PartnerMap";
import { UN_DOCUMENTS, UN_SESSIONS, BRIEFING_PACKS, UN_PARTNERS } from "../data/unAdvocacyData";

const TABS = [
  { id: "monitor", label: "Document Monitor", badge: "8" },
  { id: "drafter", label: "Response Drafter", badge: "3", badgeColor: "#F85149" },
  { id: "citations", label: "Citation Tracker", badge: null },
  { id: "briefings", label: "Briefing Packs", badge: "1", badgeColor: "#4A90D9" },
  { id: "partners", label: "Partner Network", badge: null },
];

export default function UNAdvocacy() {
  const [activeTab, setActiveTab] = useState("monitor");
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [draftingForDoc, setDraftingForDoc] = useState(null);

  const handleDraftResponse = (docId) => {
    setDraftingForDoc(docId);
    setActiveTab("drafter");
  };

  const handleGoToBriefing = () => {
    setSelectedSession("SES-001");
    setActiveTab("briefings");
  };

  const activeBriefingPack = selectedSession && BRIEFING_PACKS[selectedSession] ? BRIEFING_PACKS[selectedSession] : null;

  return (
    <div style={{ background: "#0D1117", minHeight: "100vh", fontFamily: "Source Sans Pro, sans-serif" }}>
      <AdvocacyIntro />
      <AdvocacyHeader onGoToBriefing={handleGoToBriefing} />
      <AdvocacyStats />

      <div style={{ borderBottom: "1px solid #21262D", padding: "0 32px", background: "#161B22" }}>
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "14px 20px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid #4A90D9" : "2px solid transparent",
                color: activeTab === tab.id ? "#4A90D9" : "#8B949E",
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {tab.id === "monitor" && "📄 "}
              {tab.id === "drafter" && "✍️ "}
              {tab.id === "citations" && "📌 "}
              {tab.id === "briefings" && "🎒 "}
              {tab.id === "partners" && "🤝 "}
              {tab.label}
              {tab.badge && (
                <span style={{ background: tab.badgeColor || "#4A90D9", color: "#fff", borderRadius: "10px", padding: "1px 7px", fontSize: "0.7rem", fontWeight: 700 }}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "32px", display: "grid", gridTemplateColumns: selectedDoc ? "1fr 420px" : "1fr", gap: "24px" }}>
        {activeTab === "monitor" && (
          <>
            <DocumentMonitor documents={UN_DOCUMENTS} onViewDocument={setSelectedDoc} onDraftResponse={handleDraftResponse} />
            {selectedDoc && (
              <DocumentFlagPanel
                document={UN_DOCUMENTS.find((d) => d.id === selectedDoc)}
                onClose={() => setSelectedDoc(null)}
                onDraftResponse={handleDraftResponse}
              />
            )}
          </>
        )}
        {activeTab === "drafter" && <PositionPaperDrafter documents={UN_DOCUMENTS} preSelectedDocId={draftingForDoc} />}
        {activeTab === "citations" && <CitationTracker />}
        {activeTab === "briefings" && (activeBriefingPack ? <BriefingPackView pack={activeBriefingPack} onBack={() => setSelectedSession(null)} /> : <BriefingPackGenerator sessions={UN_SESSIONS} onSelectSession={setSelectedSession} />)}
        {activeTab === "partners" && <PartnerMap partners={UN_PARTNERS} />}
      </div>
    </div>
  );
}
