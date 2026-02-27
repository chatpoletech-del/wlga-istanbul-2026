import { useState, useCallback, useEffect } from "react";
import { VIDEO_HIGHLIGHTS, CHATBOT_QA } from "../../data/eventsData";
import VideoChatbot from "./VideoChatbot";

export default function VideoHighlights({ eventId }) {
  const videos = VIDEO_HIGHLIGHTS[eventId] || [];
  const [selectedVideo, setSelectedVideo] = useState(videos[0] || null);
  const [chatByVideo, setChatByVideo] = useState({});
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    const v = videos[0];
    if (v && !chatByVideo[v.id]?.length) {
      const welcome = "Hi! I'm your AI assistant for this session. Ask me anything about what was discussed in '" + v.title + "' — key announcements, statistics, quotes, or topics covered.";
      setChatByVideo((c) => ({ ...c, [v.id]: [{ role: "assistant", text: welcome }] }));
    }
  }, [eventId]);

  const getMessages = useCallback((videoId) => {
    return chatByVideo[videoId] || [];
  }, [chatByVideo]);

  const getSuggested = useCallback((videoId) => {
    const qa = CHATBOT_QA[videoId] || [];
    return qa.slice(0, 3).map((x) => x.q);
  }, []);

  const handleSendMessage = useCallback((videoId, text) => {
    const video = videos.find((v) => v.id === videoId);
    if (!video) return;
    const prev = getMessages(videoId);
    const userMsg = { role: "user", text };
    setChatByVideo((c) => ({ ...c, [videoId]: [...prev, userMsg] }));
    setTyping(true);
    const delay = 800 + Math.random() * 400;
    setTimeout(() => {
      const qa = CHATBOT_QA[videoId] || [];
      const match = qa.find((x) => x.q.toLowerCase().trim() === text.toLowerCase().trim());
      const answer = match ? match.a : "Based on this session, I can tell you that " + (video.chatbotContext || "this session covered key industry topics.") + " For that specific question, I'd recommend reviewing the full session transcript. What else can I help you with?";
      setChatByVideo((c) => ({ ...c, [videoId]: [...(c[videoId] || []), { role: "assistant", text: answer }] }));
      setTyping(false);
    }, delay);
  }, [videos, getMessages]);

  const onVideoSelect = (v) => {
    setSelectedVideo(v);
    setTyping(false);
    setChatByVideo((c) => {
      if (c[v.id]?.length) return c;
      const welcome = "Hi! I'm your AI assistant for this session. Ask me anything about what was discussed in '" + v.title + "' — key announcements, statistics, quotes, or topics covered.";
      return { ...c, [v.id]: [{ role: "assistant", text: welcome }] };
    });
  };

  if (videos.length === 0) return <p className="text-slate-400">No video highlights for this event.</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {videos.map((v) => (
            <button key={v.id} onClick={() => onVideoSelect(v)} className={"shrink-0 px-4 py-2 rounded-full text-sm font-medium " + (selectedVideo?.id === v.id ? "bg-[#E8A020] text-[#0A0E14]" : "bg-[#131C28] border border-[#1E2A3A] text-slate-400")}>{v.title}</button>
          ))}
        </div>
        {selectedVideo && (
          <>
            <div className="video-placeholder relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-slate-600 mb-2" style={{ fontFamily: "Bebas Neue, sans-serif" }}>VIDEO</span>
                <div className="video-play-icon">▶</div>
                <p className="text-slate-500 text-sm mt-3 text-center px-4">{selectedVideo.title}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white">{selectedVideo.title}</h3>
              <p className="text-slate-400 text-sm">{selectedVideo.speaker} · <span className="text-[#E8A020]">{selectedVideo.duration}</span></p>
              <p className="text-slate-300 text-sm mt-2">{selectedVideo.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedVideo.keyTopics?.map((t) => <span key={t} className="text-xs px-2 py-1 rounded bg-[#1E2A3A] text-slate-400">{t}</span>)}
              </div>
              <p className="text-slate-500 text-xs mt-2">📌 AI chatbot on the right is context-aware for this video.</p>
            </div>
          </>
        )}
      </div>
      <div className="lg:col-span-2 bg-[#131C28] border border-[#1E2A3A] rounded-lg overflow-hidden flex flex-col" style={{ minHeight: "400px" }}>
        <div className="p-4 border-b border-[#1E2A3A]">
          <h3 className="font-semibold text-white">🤖 AI Video Assistant</h3>
          {selectedVideo && <p className="text-slate-400 text-sm mt-1">Currently discussing: {selectedVideo.title}</p>}
        </div>
        {selectedVideo ? (
          <VideoChatbot
            video={selectedVideo}
            messages={getMessages(selectedVideo.id)}
            onSendMessage={(text) => handleSendMessage(selectedVideo.id, text)}
            suggestedQuestions={getSuggested(selectedVideo.id)}
            isTyping={typing}
          />
        ) : (
          <div className="p-4 text-slate-400 text-sm">Select a video to start.</div>
        )}
      </div>
    </div>
  );
}
