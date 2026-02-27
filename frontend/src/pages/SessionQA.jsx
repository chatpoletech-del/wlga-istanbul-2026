import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import Header from "../components/Layout/Header";
import QuestionSubmit from "../components/SessionQA/QuestionSubmit";
import ModeratorDashboard from "../components/SessionQA/ModeratorDashboard";
import { sessionApi } from "../lib/api";

const WS_URL = (() => {
  const u = import.meta.env.VITE_WEBSOCKET_URL || "http://localhost:3001";
  return typeof u === "string" && (u.startsWith("http://") || u.startsWith("https://")) ? u : "http://localhost:3001";
})();

const TAB_ATTENDEE = "attendee";
const TAB_MODERATOR = "moderator";

export default function SessionQA() {
  const [tab, setTab] = useState(TAB_ATTENDEE);
  const [sessions, setSessions] = useState([]);
  const [sessionId, setSessionId] = useState("SES-001");
  const [questions, setQuestions] = useState([]);
  const [liveQuestions, setLiveQuestions] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [moderatorNote, setModeratorNote] = useState("");
  const [clusteringLoading, setClusteringLoading] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    sessionApi.getSessions().then(setSessions).catch(() => setSessions([]));
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    sessionApi.getQuestions(sessionId).then(setQuestions).catch(() => setQuestions([]));
  }, [sessionId]);

  useEffect(() => {
    const socket = io(WS_URL);
    socketRef.current = socket;
    socket.emit("join_session", sessionId);
    socket.on("session_state", setLiveQuestions);
    socket.on("new_question", (q) => setLiveQuestions((prev) => [...(prev || []), q]));
    socket.on("question_updated", (q) => {
      setLiveQuestions((prev) => (prev || []).map((x) => (x.id === q.id ? q : x)));
      setQuestions((prev) => (prev || []).map((x) => (x.id === q.id ? q : x)));
    });
    return () => {
      socket.off("session_state");
      socket.off("new_question");
      socket.off("question_updated");
      socket.disconnect();
    };
  }, [sessionId]);

  const handleSubmitQuestion = (body) => {
    sessionApi.submitQuestion(body).then((q) => {
      setQuestions((prev) => [...prev, q]);
      if (socketRef.current) {
        socketRef.current.emit("submit_question", {
          session_id: body.session_id,
          question_text: body.question_text,
          attendee_id: body.attendee_id,
          submitter_name: "Live Attendee",
        });
      }
    });
  };

  const handleVote = (questionId) => {
    sessionApi.voteQuestion(questionId).then(() => {
      sessionApi.getQuestions(sessionId).then(setQuestions);
      if (socketRef.current) {
        socketRef.current.emit("vote_question", { session_id: sessionId, question_id: questionId });
      }
    });
  };

  const handleRunClustering = (sid) => {
    setClusteringLoading(true);
    sessionApi
      .cluster(sid || sessionId)
      .then((res) => {
        setClusters(res.clusters || []);
        setModeratorNote(res.moderator_note || "");
      })
      .finally(() => setClusteringLoading(false));
  };

  const displayQuestions = tab === TAB_MODERATOR ? liveQuestions ?? questions : questions;

  return (
    <>
      <Header
        title="Live Session AI Companion"
        subtitle="Real-time Q&A with AI clustering for moderators"
      />
      <div className="p-6 bg-white min-h-full">
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => setTab(TAB_ATTENDEE)}
            className={`px-4 py-2 rounded-lg font-medium ${
              tab === TAB_ATTENDEE ? "bg-sky-600 text-white" : "bg-wlga-content-surface text-wlga-content-text border border-wlga-content-border"
            }`}
          >
            Attendee (Submit Questions)
          </button>
          <button
            type="button"
            onClick={() => setTab(TAB_MODERATOR)}
            className={`px-4 py-2 rounded-lg font-medium ${
              tab === TAB_MODERATOR ? "bg-sky-600 text-white" : "bg-wlga-content-surface text-wlga-content-text border border-wlga-content-border"
            }`}
          >
            Moderator View
          </button>
        </div>

        {tab === TAB_ATTENDEE && (
          <QuestionSubmit
            sessionId={sessionId}
            sessions={sessions}
            onSessionChange={setSessionId}
            questions={questions}
            onSubmit={handleSubmitQuestion}
            onVote={handleVote}
          />
        )}

        {tab === TAB_MODERATOR && (
          <ModeratorDashboard
            sessionId={sessionId}
            sessions={sessions}
            onSessionChange={setSessionId}
            questions={questions}
            liveQuestions={liveQuestions}
            clusters={clusters}
            moderatorNote={moderatorNote}
            onRunClustering={handleRunClustering}
            clusteringLoading={clusteringLoading}
          />
        )}
      </div>
    </>
  );
}
