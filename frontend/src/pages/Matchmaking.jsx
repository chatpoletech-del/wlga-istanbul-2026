import { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import AttendeeForm from "../components/Matchmaking/AttendeeForm";
import MatchList from "../components/Matchmaking/MatchList";
import IntelligencePack from "../components/Matchmaking/IntelligencePack";
import { matchmakingApi } from "../lib/api";
import { mockAttendees, mockMatches } from "../data/mockData";

const VIEW_QUICK = "quick";
const VIEW_NEW = "new";

export default function Matchmaking() {
  const [view, setView] = useState(VIEW_QUICK);
  const [attendees, setAttendees] = useState(mockAttendees);
  const [selectedAttendeeId, setSelectedAttendeeId] = useState("");
  const [matches, setMatches] = useState([]);
  const [attendee, setAttendee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileResult, setProfileResult] = useState(null);

  useEffect(() => {
    matchmakingApi
      .getAttendees()
      .then((list) => setAttendees(Array.isArray(list) && list.length > 0 ? list : mockAttendees))
      .catch(() => setAttendees(mockAttendees));
  }, []);

  useEffect(() => {
    if (!selectedAttendeeId) {
      setMatches([]);
      setAttendee(null);
      setProfileResult(null);
      return;
    }
    setLoading(true);
    matchmakingApi
      .getMatches(selectedAttendeeId)
      .then((res) => {
        setMatches(res.matches || []);
        setAttendee(res.attendee || null);
        setProfileResult(null);
      })
      .catch(() => {
        const fallback = attendees.find((a) => a.id === selectedAttendeeId) || mockAttendees.find((a) => a.id === selectedAttendeeId);
        setAttendee(fallback || null);
        setMatches([]);
        setProfileResult(null);
      })
      .finally(() => setLoading(false));
  }, [selectedAttendeeId, attendees]);

  const handleProfileSubmit = (form) => {
    setLoading(true);
    matchmakingApi
      .createProfile(form)
      .then((res) => {
        setProfileResult(res);
        setMatches(res.matches || []);
        setAttendee(res.attendee || null);
      })
      .catch(() => {
        const syntheticAttendee = {
          id: "ATT-NEW-" + Date.now(),
          full_name: form.full_name || "New attendee",
          job_title: form.job_title || "",
          company: form.company || "",
          country: form.country || "",
        };
        setProfileResult({ attendee: syntheticAttendee, matches: mockMatches });
        setMatches(mockMatches);
        setAttendee(syntheticAttendee);
      })
      .finally(() => setLoading(false));
  };

  const currentAttendee = profileResult?.attendee || attendee;
  const currentMatches = profileResult?.matches ?? matches;

  return (
    <>
      <Header
        title="AI Matchmaking Engine"
        subtitle="Match by business goals, value chain, and geography"
      />
      <div className="p-6 bg-white min-h-full">
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => setView(VIEW_QUICK)}
            className={`px-4 py-2 rounded-lg font-medium ${
              view === VIEW_QUICK ? "bg-sky-600 text-white" : "bg-wlga-content-surface text-wlga-content-text border border-wlga-content-border"
            }`}
          >
            Quick Match (existing attendee)
          </button>
          <button
            type="button"
            onClick={() => setView(VIEW_NEW)}
            className={`px-4 py-2 rounded-lg font-medium ${
              view === VIEW_NEW ? "bg-sky-600 text-white" : "bg-wlga-content-surface text-wlga-content-text border border-wlga-content-border"
            }`}
          >
            New Profile Form
          </button>
        </div>

        {view === VIEW_QUICK && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-wlga-content-muted mb-2">
                Select your attendee profile
              </label>
              <div className="relative max-w-xl">
                <select
                  value={selectedAttendeeId}
                  onChange={(e) => setSelectedAttendeeId(e.target.value)}
                  className="w-full min-w-[320px] px-4 py-2.5 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 cursor-pointer"
                  aria-label="Select your attendee profile"
                >
                  <option value="">— Select attendee —</option>
                  {attendees.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.full_name} · {a.company} · {a.country}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-wlga-content-muted mt-1.5">
                  {attendees.length} profile{attendees.length !== 1 ? "s" : ""} available
                </p>
              </div>
            </div>
            {currentAttendee && (
              <>
                <IntelligencePack attendeeId={currentAttendee.id} attendee={currentAttendee} matches={currentMatches} />
                <div className="mb-4 p-4 bg-wlga-content-surface border border-wlga-content-border rounded-lg max-w-xl">
                  <h3 className="font-semibold text-wlga-content-text">{currentAttendee.full_name}</h3>
                  <p className="text-sm text-wlga-content-muted">
                    {currentAttendee.job_title} · {currentAttendee.company} · {currentAttendee.country}
                  </p>
                </div>
              </>
            )}
            {loading && <p className="text-wlga-amber mb-4">Loading matches...</p>}
            {!loading && currentMatches.length > 0 && (
              <MatchList matches={currentMatches} attendee={currentAttendee} />
            )}
          </>
        )}

        {view === VIEW_NEW && (
          <>
            <AttendeeForm onSubmit={handleProfileSubmit} loading={loading} />
            {loading && <p className="mt-4 text-wlga-amber">AI is analysing 50 attendee profiles...</p>}
            {profileResult && !loading && (
              <div className="mt-8">
                <IntelligencePack attendeeId={profileResult.attendee?.id} attendee={profileResult.attendee} matches={profileResult.matches || []} />
                <MatchList matches={profileResult.matches || []} attendee={profileResult.attendee} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
