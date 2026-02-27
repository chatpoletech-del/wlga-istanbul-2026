import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Matchmaking from "./pages/Matchmaking";
import SessionQA from "./pages/SessionQA";
import KnowledgeHub from "./pages/KnowledgeHub";
import SpeakerBriefs from "./pages/SpeakerBriefs";
import Certification from "./pages/Certification";
import Events from "./pages/Events";
import LeadershipPartners from "./pages/LeadershipPartners";
import InnovationTracker from "./pages/InnovationTracker";
import UNAdvocacy from "./pages/UNAdvocacy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="certification" element={<Certification />} />
          <Route path="events" element={<Events />} />
          <Route path="leadership-partners" element={<LeadershipPartners />} />
          <Route path="innovation-tracker" element={<InnovationTracker />} />
          <Route path="un-advocacy" element={<UNAdvocacy />} />
          <Route path="matchmaking" element={<Matchmaking />} />
          <Route path="session-qa" element={<SessionQA />} />
          <Route path="knowledge-hub" element={<KnowledgeHub />} />
          <Route path="speaker-briefs" element={<SpeakerBriefs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
