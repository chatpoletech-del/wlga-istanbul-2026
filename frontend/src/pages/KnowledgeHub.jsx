import { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import SearchBar from "../components/KnowledgeHub/SearchBar";
import SearchResults from "../components/KnowledgeHub/SearchResults";
import SessionCard from "../components/KnowledgeHub/SessionCard";
import TranscriptViewer from "../components/KnowledgeHub/TranscriptViewer";
import { knowledgeApi } from "../lib/api";

export default function KnowledgeHub() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewSession, setViewSession] = useState(null);

  useEffect(() => {
    knowledgeApi.getSessions().then(setSessions).catch(() => setSessions([]));
  }, []);

  const handleSearch = (q) => {
    const term = q ?? query;
    if (!term.trim()) return;
    setLoading(true);
    setSearchResult(null);
    knowledgeApi
      .search(term)
      .then(setSearchResult)
      .catch(() => setSearchResult({ answer: "Search failed. Check API connection.", confidence: "low" }))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header
        title="Post-Event Knowledge Hub"
        subtitle="RAG-powered search across session transcripts"
      />
      <div className="p-6 max-w-4xl mx-auto bg-white min-h-full">
        <div className="mb-8">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            loading={loading}
          />
        </div>
        {searchResult && (
          <div className="mb-8">
            <SearchResults result={searchResult} />
          </div>
        )}
        <h3 className="text-lg font-semibold text-wlga-content-text mb-4">Session summaries</h3>
        <div className="grid gap-4">
          {sessions.map((s) => (
            <SessionCard
              key={s.session_id}
              session={s}
              onReadFull={() => setViewSession(s)}
            />
          ))}
        </div>
      </div>
      {viewSession && (
        <TranscriptViewer session={viewSession} onClose={() => setViewSession(null)} />
      )}
    </>
  );
}
