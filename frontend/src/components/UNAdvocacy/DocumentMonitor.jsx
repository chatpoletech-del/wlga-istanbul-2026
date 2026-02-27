import { useState, useMemo } from "react";
import { getDocumentsByPriority } from "../../data/unAdvocacyData";
import DocumentCard from "./DocumentCard";

export default function DocumentMonitor({ documents, onViewDocument, onDraftResponse }) {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("priority");

  const filtered = useMemo(() => {
    let list = documents || [];
    if (filter && filter !== "all") list = list.filter((d) => d.flagSentiment === filter);
    if (sort === "priority") list = getDocumentsByPriority(list);
    else if (sort === "newest") list = [...list].sort((a, b) => (b.publishedDate || "").localeCompare(a.publishedDate || ""));
    return list;
  }, [documents, filter, sort]);

  const totalMentions = (documents || []).reduce((s, d) => s + (d.lpgMentions || 0), 0);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="advocacy-display font-bold text-white text-xl">UN Document Monitor</h2>
          <p className="text-[#8B949E] text-sm mt-1">Monitoring 180+ UN System Sources</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["all", "positive", "negative", "mixed"].map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} className={"px-3 py-1.5 rounded text-sm font-medium " + (filter === f ? "bg-[#4A90D9] text-white" : "advocacy-surface border advocacy-border text-[#8B949E]")}>
              {f === "all" ? "All (" + (documents?.length || 0) + ")" : f === "positive" ? "Positive" : f === "negative" ? "Negative" : "Mixed"}
            </button>
          ))}
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="doc-code px-3 py-1.5 rounded advocacy-surface border advocacy-border text-[#8B949E] text-sm">
            <option value="priority">Priority</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {filtered.map((doc) => (
          <DocumentCard key={doc.id} document={doc} onViewDocument={onViewDocument} onDraftResponse={onDraftResponse} />
        ))}
      </div>
      <p className="mt-6 pt-4 border-t advocacy-border text-[#8B949E] text-sm doc-code">{totalMentions} LPG mentions this month</p>
    </div>
  );
}
