export const mockAttendees = [
  { id: "ATT-1001", full_name: "James Silva", company: "Aygaz", country: "Turkey", job_title: "CEO" },
  { id: "ATT-1002", full_name: "Fatma Yilmaz", company: "BOTAŞ", country: "Turkey", job_title: "Head of Strategy" },
  { id: "ATT-1003", full_name: "Maria Santos", company: "Repsol", country: "Spain", job_title: "Director, LPG Business" },
  { id: "ATT-1004", full_name: "Hans Weber", company: "SHV Energy", country: "Netherlands", job_title: "Head of Sustainability" },
  { id: "ATT-1005", full_name: "Priya Sharma", company: "Indian Oil", country: "India", job_title: "VP Commercial" },
];

/** Mock matches for when createProfile/getMatches API is unavailable. Used as "other attendees" to show as matches. */
export const mockMatches = [
  { match_id: "mock-1", attendee_b: mockAttendees[0], score: 94, reason: "Aligned on value chain and regional expansion goals.", category: "Value chain" },
  { match_id: "mock-2", attendee_b: mockAttendees[1], score: 88, reason: "Strong fit for policy and strategy discussions.", category: "Strategy" },
  { match_id: "mock-3", attendee_b: mockAttendees[2], score: 85, reason: "Complementary goals in BioLPG and supply.", category: "BioLPG" },
  { match_id: "mock-4", attendee_b: mockAttendees[3], score: 82, reason: "Sustainability and clean cooking alignment.", category: "Sustainability" },
  { match_id: "mock-5", attendee_b: mockAttendees[4], score: 79, reason: "Commercial and market expansion overlap.", category: "Commercial" },
];

export const mockSessions = [
  { id: "SES-001", title: "Geopolitics of LPG: Supply Security in 2026", duration: 75 },
  { id: "SES-002", title: "BioLPG & Renewable LPG: The Road to Net Zero", duration: 60 },
];

export const mockQuestions = [
  { id: "Q-2001", question_text: "How should distributors prepare for supply disruptions?", votes: 24 },
];

export const mockSearchResult = {
  answer: "Speakers highlighted that LPG is a public health intervention and that supply diversification is critical. WLGA is publishing a Supply Security Risk Framework by Q3 2026.",
  sources: ["Geopolitics of LPG: Supply Security in 2026"],
  related_topics: ["BioLPG certification", "Supply security", "Clean cooking"],
  confidence: "high",
};

export const mockSpeakers = [
  { id: "SPK-001", name: "Dr. Fatih Birol", title: "Executive Director, IEA", session_title: "Geopolitics of LPG: Supply Security in 2026" },
];
