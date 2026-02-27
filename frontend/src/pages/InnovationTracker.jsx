import { useState } from "react";
import TrackerIntro from "../components/Innovation/TrackerIntro";
import TrackerHeader from "../components/Innovation/TrackerHeader";
import InnovationStats from "../components/Innovation/InnovationStats";
import InnovationMap from "../components/Innovation/InnovationMap";
import ProjectsGrid from "../components/Innovation/ProjectsGrid";
import WeeklyDigest from "../components/Innovation/WeeklyDigest";
import CompetitorRadar from "../components/Innovation/CompetitorRadar";
import ResponseDrafter from "../components/Innovation/ResponseDrafter";
import PatentFeed from "../components/Innovation/PatentFeed";
import FundingTracker from "../components/Innovation/FundingTracker";
import { PROJECTS, COMPETITOR_THREATS } from "../data/innovationData";

const TABS = [
  { id: "map", label: "🗺️ Innovation Map", badge: null },
  { id: "digest", label: "📰 Weekly Digest", badge: "12" },
  { id: "threats", label: "⚠️ Threat Radar", badge: "3", badgeColor: "#FF4D4D" },
  { id: "patents", label: "🔬 Patents & Research", badge: null },
  { id: "funding", label: "💰 Funding Tracker", badge: null },
];

export default function InnovationTracker() {
  const [activeTab, setActiveTab] = useState("map");
  const [selectedThreat, setSelectedThreat] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div style={{ background: "#050A0F", minHeight: "100vh", fontFamily: "Lato, sans-serif" }}>
      <TrackerIntro />
      <TrackerHeader />
      <InnovationStats />

      <div style={{ borderBottom: "1px solid #0D2A1A", padding: "0 32px", background: "#0C1A14" }}>
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "14px 20px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid #00FF88" : "2px solid transparent",
                color: activeTab === tab.id ? "#00FF88" : "#4A7C5E",
                fontFamily: "Syne, sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {tab.label}
              {tab.badge && (
                <span style={{
                  background: tab.badgeColor || "#00FF88",
                  color: tab.badgeColor ? "#fff" : "#050A0F",
                  borderRadius: "10px",
                  padding: "1px 6px",
                  fontSize: "0.7rem",
                  fontFamily: "JetBrains Mono, monospace",
                  fontWeight: 700,
                }}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "32px" }}>
        {activeTab === "map" && (
          <>
            <InnovationMap projects={PROJECTS} onSelectProject={setSelectedProject} />
            <ProjectsGrid projects={PROJECTS} selectedProjectId={selectedProject} />
          </>
        )}
        {activeTab === "digest" && <WeeklyDigest />}
        {activeTab === "threats" && (
          <div style={{ display: "grid", gridTemplateColumns: selectedThreat ? "1fr 1fr" : "1fr", gap: "24px" }}>
            <CompetitorRadar onSelectThreat={setSelectedThreat} />
            {selectedThreat && (
              <ResponseDrafter
                threat={COMPETITOR_THREATS.find((t) => t.id === selectedThreat)}
                onClose={() => setSelectedThreat(null)}
              />
            )}
          </div>
        )}
        {activeTab === "patents" && <PatentFeed />}
        {activeTab === "funding" && <FundingTracker />}
      </div>
    </div>
  );
}
