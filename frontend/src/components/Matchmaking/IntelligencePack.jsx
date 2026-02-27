import { useState } from "react";

const API_BASE = (() => {
  const u = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
  return typeof u === "string" && (u.startsWith("http://") || u.startsWith("https://")) ? u : "http://localhost:8000";
})();

/** Sanitize for URL path and filename: allow only alphanumeric, dash, underscore. */
function sanitizeId(id) {
  if (id == null || typeof id !== "string") return "";
  return id.replace(/[^A-Za-z0-9_-]/g, "") || "attendee";
}

async function generateIntelligencePackPDF(attendeeId, attendee, matches) {
  const { default: jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = pdf.internal.pageSize.getWidth();
  let y = 20;

  pdf.setFontSize(18);
  pdf.text("WLGA Istanbul 2026", pageW / 2, y, { align: "center" });
  y += 8;
  pdf.setFontSize(14);
  pdf.text("Matchmaking Intelligence Pack", pageW / 2, y, { align: "center" });
  y += 15;

  pdf.setFontSize(12);
  pdf.text("Attendee profile", 14, y);
  y += 8;
  pdf.setFontSize(10);
  const name = attendee?.full_name || "Attendee";
  const title = attendee?.job_title || "";
  const company = attendee?.company || "";
  const country = attendee?.country || "";
  pdf.text(`Name: ${name}`, 14, y);
  y += 6;
  pdf.text(`Title: ${title}`, 14, y);
  y += 6;
  pdf.text(`Company: ${company}`, 14, y);
  y += 6;
  pdf.text(`Country: ${country}`, 14, y);
  y += 12;

  if (matches && matches.length > 0) {
    pdf.setFontSize(12);
    pdf.text("Top matches", 14, y);
    y += 8;
    pdf.setFontSize(10);
    matches.slice(0, 10).forEach((m, i) => {
      const b = m.attendee_b || {};
      const score = m.score ?? 0;
      const line = `${i + 1}. ${b.full_name || "—"} (${b.company || ""}) — ${score}%`;
      if (y > 270) {
        pdf.addPage();
        y = 20;
      }
      pdf.text(line, 14, y);
      y += 6;
    });
  }

  pdf.setFontSize(8);
  pdf.text(`Generated for ${attendeeId} · WLGA AI Matchmaking · POC`, 14, 285);
  return pdf;
}

export default function IntelligencePack({ attendeeId, attendee, matches }) {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);

  const safeId = sanitizeId(attendeeId);
  const url = `${API_BASE}/api/matchmaking/intelligence-pack/${safeId}/pdf`;
  const fileName = `Istanbul_2026_Pack_${safeId}.pdf`;

  const handleDownload = async () => {
    if (!safeId) return;
    setDownloading(true);
    setError(null);
    try {
      const res = await fetch(url, { method: "GET" });
      if (res.ok) {
        const blob = await res.blob();
        const href = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = href;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(href);
        return;
      }
    } catch (_) {
      // Backend not available — generate PDF client-side
    }
    try {
      const pdf = await generateIntelligencePackPDF(safeId, attendee, matches);
      pdf.save(fileName);
    } catch (err) {
      console.error("PDF generation failed:", err);
      setError("Download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50"
      >
        {downloading ? "Preparing PDF…" : "Download Intelligence Pack PDF"}
      </button>
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      {attendee && !error && (
        <p className="text-sm text-wlga-content-muted mt-2">
          Curated report for {attendee.full_name}
        </p>
      )}
    </div>
  );
}
