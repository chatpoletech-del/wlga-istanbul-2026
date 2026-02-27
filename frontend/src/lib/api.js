const API_BASE = (() => {
  const u = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
  return typeof u === "string" && (u.startsWith("http://") || u.startsWith("https://")) ? u : "http://localhost:8000";
})();

/** Sanitize ID for use in URL path (prevent path traversal / injection). */
function sanitizePathId(id) {
  if (id == null || typeof id !== "string") return "";
  return id.replace(/[^A-Za-z0-9_-]/g, "") || "";
}

async function request(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || res.statusText || "Request failed");
  }
  return res.json();
}

export const matchmakingApi = {
  getAttendees: () => request("/api/matchmaking/attendees"),
  getAttendee: (id) => request(`/api/matchmaking/attendees/${sanitizePathId(id)}`),
  getMatches: (attendeeId, limit = 20) =>
    request(`/api/matchmaking/matches/${sanitizePathId(attendeeId)}?limit=${Number(limit) || 20}`),
  createProfile: (profile) =>
    request("/api/matchmaking/profile", { method: "POST", body: JSON.stringify(profile) }),
  getIntelligencePackPdfUrl: (attendeeId) =>
    `${API_BASE}/api/matchmaking/intelligence-pack/${sanitizePathId(attendeeId)}/pdf`,
};

export const sessionApi = {
  getSessions: () => request("/api/session/sessions"),
  getQuestions: (sessionId) => request(`/api/session/questions/${sanitizePathId(sessionId)}`),
  submitQuestion: (data) =>
    request("/api/session/questions", { method: "POST", body: JSON.stringify(data) }),
  voteQuestion: (questionId) =>
    request(`/api/session/questions/${sanitizePathId(questionId)}/vote`, { method: "POST" }),
  cluster: (sessionId) =>
    request(`/api/session/cluster/${sanitizePathId(sessionId)}`, { method: "POST" }),
  moderateQuestion: (questionId, action) =>
    request(`/api/session/questions/${sanitizePathId(questionId)}/moderate?action=${encodeURIComponent(String(action || ""))}`, { method: "POST" }),
};

export const knowledgeApi = {
  getSessions: () => request("/api/knowledge/sessions"),
  search: (query) => request(`/api/knowledge/search?query=${encodeURIComponent(String(query ?? ""))}`),
  getSession: (sessionId) => request(`/api/knowledge/session/${sanitizePathId(sessionId)}`),
};

export const speakerApi = {
  getSpeakers: () => request("/api/speaker/speakers"),
  generateBrief: (speakerId) =>
    request(`/api/speaker/generate-brief/${sanitizePathId(speakerId)}`, { method: "POST" }),
};

export const healthCheck = () => request("/health");
