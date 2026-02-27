import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects, selectedProjectId }) {
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.region === filter);
  const regions = [
    { id: "all", label: "All Regions", count: projects.length },
    { id: "North America", label: "North America", count: projects.filter((p) => p.region === "North America").length },
    { id: "Europe", label: "Europe", count: projects.filter((p) => p.region === "Europe").length },
    { id: "Asia Pacific", label: "Asia Pacific", count: projects.filter((p) => p.region === "Asia Pacific").length },
  ];
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2 mb-6">
        {regions.map((r) => (
          <button
            key={r.id}
            onClick={() => setFilter(r.id)}
            className={`px-4 py-2 rounded text-sm font-medium terminal-font ${
              filter === r.id ? "bg-[#00FF88] text-[#050A0F]" : "tracker-surface border border-[#0D2A1A] text-[#4A7C5E] hover:text-[#00FF88]"
            }`}
          >
            {r.label} ({r.count})
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            isExpanded={expandedId === p.id || selectedProjectId === p.id}
            onToggle={() => setExpandedId(expandedId === p.id ? null : p.id)}
          />
        ))}
      </div>
    </div>
  );
}
