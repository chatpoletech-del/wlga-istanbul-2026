import { useState } from "react";
import LeadershipIntro from "../components/Leadership/LeadershipIntro";
import PartnerSelector from "../components/Leadership/PartnerSelector";
import PartnerDashboard from "../components/Leadership/PartnerDashboard";
import { getPartnerById } from "../data/leadershipData";

export default function LeadershipPartners() {
  const [view, setView] = useState("home");
  const [selectedPartnerId, setSelectedPartnerId] = useState(null);

  const handleSelectPartner = (partnerId) => {
    setSelectedPartnerId(partnerId);
    setView("dashboard");
    window.scrollTo(0, 0);
  };

  const selectedPartner = selectedPartnerId ? getPartnerById(selectedPartnerId) : null;

  return (
    <div style={{ background: "#0A0E14", minHeight: "100vh" }}>
      {view === "home" && (
        <>
          <LeadershipIntro />
          <PartnerSelector onSelectPartner={handleSelectPartner} />
        </>
      )}
      {view === "dashboard" && selectedPartner && (
        <PartnerDashboard
          partner={selectedPartner}
          onBack={() => {
            setView("home");
            setSelectedPartnerId(null);
          }}
        />
      )}
    </div>
  );
}
