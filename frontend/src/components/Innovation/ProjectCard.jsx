import { useState } from "react";

export default function ProjectCard({ project, isExpanded, onToggle }) {
  if (!project) return null;
  const isActive = project.status === "active";
  return (
    <div className="tracker-surface border border-[#0D2A1A] rounded-lg overflow-hidden" style={{ borderLeftWidth: "4px", borderLeftColor: project.color || "#00FF88" }}>
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {isActive && <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />}
          <span className="text-xs px-2 py-0.5 rounded bg-[#0D2A1A] text-[#4A7C5E]">{project.stage}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-[#0D2A1A] text-slate-400">{project.type}</span>
        </div>
        <h3 className="tracker-display font-bold text-white text-base mb-1" style={{ fontFamily: "Syne, sans-serif" }}>{project.name}</h3>
        <p className="text-[#4A7C5E] text-xs mb-2">{project.organisations?.join(", ")}</p>
        <p className="terminal-font text-xs text-slate-400 mb-1">Tech: {project.technology}</p>
        <div className="text-[#00FF88] terminal-font text-lg font-medium mb-2">{project.carbonIntensity}</div>
        <p className="text-[#4A7C5E] text-xs">Capacity: {project.capacity}</p>
        <div className="mt-3 pl-3 border-l-2 border-[#E8A020]">
          <p className="text-xs text-slate-400 font-medium mb-1">WLGA Relevance</p>
          <p className="text-slate-300 text-xs">{project.wlgaRelevance}</p>
        </div>
        <p className="text-[#4A7C5E] text-xs mt-2">Last updated: {project.lastUpdate}</p>
        <button type="button" onClick={onToggle} className="mt-3 text-[#00FF88] text-sm font-medium hover:underline">
          {isExpanded ? "Collapse" : "View Details"} →
        </button>
        {isExpanded && <p className="mt-3 text-slate-400 text-sm leading-relaxed">{project.description}</p>}
      </div>
    </div>
  );
}
