import { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import BriefForm from "../components/SpeakerBrief/BriefForm";
import BriefOutput from "../components/SpeakerBrief/BriefOutput";
import { speakerApi } from "../lib/api";

export default function SpeakerBriefs() {
  const [speakers, setSpeakers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [brief, setBrief] = useState(null);
  const [speaker, setSpeaker] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    speakerApi.getSpeakers().then(setSpeakers).catch(() => setSpeakers([]));
  }, []);

  const handleGenerate = (speakerId) => {
    setLoading(true);
    setError(null);
    setBrief(null);
    speakerApi
      .generateBrief(speakerId)
      .then((res) => {
        if (res.error) setError(res.error);
        else {
          setBrief(res.brief);
          setSpeaker(res.speaker);
          setSelectedId(speakerId);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header
        title="Speaker Brief Generator"
        subtitle="AI-generated briefing documents for speakers"
      />
      <div className="p-6 bg-white min-h-full">
        <BriefForm
          speakers={speakers}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onGenerate={handleGenerate}
          loading={loading}
        />
        {error && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
            {error}
          </div>
        )}
        {brief && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-wlga-content-text mb-4">Brief output</h3>
            <BriefOutput speaker={speaker} brief={brief} />
          </div>
        )}
      </div>
    </>
  );
}
