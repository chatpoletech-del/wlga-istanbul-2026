import { useState } from "react";
import { PATENTS_AND_PAPERS } from "../../data/innovationData";

export default function PatentFeed() {
  const [filter, setFilter] = useState("all");
  let filtered = PATENTS_AND_PAPERS;
  if (filter === "Patent") filtered = PATENTS_AND_PAPERS.filter((p) => p.type === "Patent");
  else if (filter === "Paper") filtered = PATENTS_AND_PAPERS.filter((p) => p.type === "Academic Paper");
  else if (filter === "high") filtered = PATENTS_AND_PAPERS.filter((p) => p.relevanceScore >= 90);

  const btn = (id, label) => (
    <button
      key={id}
      onClick={() => setFilter(id)}
      className={"px-4 py-2 rounded text-sm " + (filter === id ? "bg-[#00FF88] text-[#050A0F]" : "bg-[#0C1A14] border border-[#0D2A1A] text-[#4A7C5E]")}
      style={{ fontFamily: "JetBrains Mono, monospace" }}
    >
      {label}
    </button>
  );

  return (
    <div>
      <p style={{ color: "#4A7C5E", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        Monitoring 189 patents across USPTO, EPO, WIPO + academic sources including Scopus, Web of Science
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {btn("all", "All")}
        {btn("Patent", "Patents")}
        {btn("Paper", "Academic Papers")}
        {btn("high", "High Relevance (≥90)")}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filtered.map((item) => (
          <div key={item.id} style={{ background: "#0C1A14", border: "1px solid #0D2A1A", borderRadius: "8px", padding: "1rem" }}>
            <span style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "4px", background: item.type === "Patent" ? "rgba(168,85,247,0.2)" : "rgba(59,130,246,0.2)", color: item.type === "Patent" ? "#A855F7" : "#3B82F6" }}>{item.type}</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#4A7C5E", fontSize: "0.75rem", marginLeft: "0.5rem" }}>{item.registry || item.journal}</span>
            <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "0.875rem", marginTop: "0.5rem" }}>{item.title}</h3>
            <p style={{ color: "#4A7C5E", fontSize: "0.75rem" }}>{item.applicant || item.authors} · {item.filedDate || item.publishedDate}</p>
            <div style={{ marginTop: "0.5rem", height: "6px", background: "#0D2A1A", borderRadius: "999px", width: "96px", overflow: "hidden" }}>
              <div style={{ height: "100%", background: "#00FF88", borderRadius: "999px", width: item.relevanceScore + "%" }} />
            </div>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginTop: "0.5rem" }}>{item.summary}</p>
            {item.tags && item.tags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "0.5rem" }}>
                {item.tags.map((t) => (
                  <span key={t} style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "4px", background: "#0D2A1A", color: "#4A7C5E" }}>{t}</span>
                ))}
              </div>
            )}
            <button type="button" style={{ marginTop: "0.5rem", color: "#00FF88", fontSize: "0.75rem" }}>View Source →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
