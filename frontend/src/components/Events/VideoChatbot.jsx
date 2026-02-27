import { useRef, useEffect } from "react";

export default function VideoChatbot({ video, messages, onSendMessage, suggestedQuestions, isTyping }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col min-h-0">
        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 p-4" style={{ maxHeight: "400px" }}>
          {messages.map((m, i) => (
            <div key={i} className={"flex " + (m.role === "user" ? "justify-end" : "justify-start")}>
              <div className={m.role === "user" ? "chatbot-bubble-user" : "chatbot-bubble-ai"}>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="chatbot-bubble-ai">
                <span className="typing-indicator"><span></span><span></span><span></span></span>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-[#1E2A3A]">
          <form onSubmit={(e) => { e.preventDefault(); const inp = e.target.querySelector('input'); if (inp?.value?.trim()) { onSendMessage(inp.value.trim()); inp.value = ""; } }} className="flex gap-2 mb-3">
            <input type="text" placeholder="Ask about this session..." className="flex-1 px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white text-sm" />
            <button type="submit" className="px-3 py-2 bg-[#E8A020] text-[#0A0E14] rounded font-medium">→</button>
          </form>
          {suggestedQuestions?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q, i) => (
                <button key={i} type="button" onClick={() => onSendMessage(q)} className="text-xs px-2 py-1.5 rounded-full bg-[#1E2A3A] text-slate-300 hover:bg-[#2A3A4A] border border-[#1E2A3A]">
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
