// WLGA UN ADVOCACY INTELLIGENCE TOOL — PRE-INSTALLED DATASET
// Last simulated update: 24 February 2026

export const INTRO = {
  title: "UN Advocacy Intelligence Tool",
  badge: "WLGA ECOSOC Special Consultative Status · Advocacy Work Stream",
  tagline: "AI-powered intelligence ensuring WLGA walks into every UN meeting better prepared than anyone else in the room.",
  description: `The World Liquid Gas Association holds Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) — one of only ~4,483 organisations globally granted this designation under Article 71 of the UN Charter. This status gives WLGA the formal right to attend ECOSOC sessions and its subsidiary bodies, submit written statements, deliver oral interventions, and organise side events at UN meetings worldwide.

WLGA works directly with multiple UN system bodies: the UNFCCC (climate negotiations), WHO (household air pollution guidance), UNDP (SDG7 energy access programming), UNEP (environment and clean energy policy), and the UN Energy group. It maintains long-standing partnerships with the IEA, World Bank, African Development Bank, Asian Development Bank, and international NGOs including the Partnership on Clean Indoor Air and E+Co.

UN advocacy is WLGA's most strategically critical activity — and its most document-heavy. Each COP conference generates thousands of pages of text. Each SDG progress report contains dozens of LPG-relevant data points. Each WHO technical publication shapes how governments classify "clean fuels" for national policy. Without intelligent monitoring, WLGA risks missing critical references, misinformed policy positions, or windows to submit formal industry input.

This tool changes that. AI monitors 180+ UN system document sources continuously, flags every LPG-relevant mention within 24 hours of publication, tracks WLGA's citation impact in official UN documents over time, drafts formal responses in UN language and format, and generates comprehensive delegation briefing packs before every major session.`,
  keyFacts: [
    { label: "ECOSOC Status", value: "Special Consultative", icon: "🏛️", note: "Since 1970s — one of ~4,483 organisations globally" },
    { label: "UN System Partners", value: "8 Bodies", icon: "🤝", note: "UNFCCC, WHO, UNDP, UNEP, IEA, World Bank, AfDB, AsDB" },
    { label: "Documents Monitored", value: "180+ Sources", icon: "📄", note: "COP proceedings, SDG reports, IPCC, WHO guidelines" },
    { label: "WLGA Citations (2020–26)", value: "47 Confirmed", icon: "📌", note: "In official UN and multilateral documents" },
  ],
  currentStrategicTheme: "2026–2028 Strategic Review: 'Resilience in a Changing World'",
  advocacyPillars: [
    { id: "ADV-001", name: "Clean Cooking & SDG7", description: "LPG as the fastest scalable pathway to universal clean cooking access", color: "#4A90D9" },
    { id: "ADV-002", name: "Climate & NDC Inclusion", description: "Ensuring LPG is recognised in NDCs and national energy transition roadmaps", color: "#3FB950" },
    { id: "ADV-003", name: "WHO Clean Fuel Classification", description: "Maintaining LPG's designation as a WHO-approved clean fuel", color: "#E8A020" },
    { id: "ADV-004", name: "BioLPG & Renewable Recognition", description: "BioLPG and rLPG equivalent policy treatment in UN frameworks", color: "#A371F7" },
    { id: "ADV-005", name: "SDG Alignment & Finance", description: "Connecting LPG investment to SDG7, SDG3, SDG5, SDG13 and MDB financing", color: "#F85149" },
  ],
};

export const UN_SESSIONS = [
  { id: "SES-001", title: "2nd Summit on Clean Cooking in Africa", body: "IEA / UNFCCC", type: "Ministerial Summit", status: "upcoming", dates: "9–10 July 2026", location: "Safari Park Hotel, Nairobi, Kenya", flag: "🇰🇪", relevanceScore: 99, wlgaRole: "Industry Co-Chair", keyAgenda: ["Reviewing disbursement of $470M pledged", "NDC integration of clean cooking targets"], expectedDelegates: "25+ countries", wlgaDelegation: [{ name: "James Rockall", role: "CEO & MD", function: "Industry Co-Chair" }], briefingPackReady: true, color: "#4A90D9", badge: "🌍" },
  { id: "SES-002", title: "COP31 — UNFCCC Conference of the Parties", body: "UNFCCC", type: "COP", status: "upcoming", dates: "November 2026 (TBC)", location: "TBC — Australia proposed", flag: "🇦🇺", relevanceScore: 98, wlgaRole: "Accredited Observer", keyAgenda: ["NDC 3.0 implementation", "Clean cooking finance mechanisms"], expectedDelegates: "196 Parties", wlgaDelegation: [{ name: "James Rockall", role: "CEO & MD", function: "Head of delegation" }], briefingPackReady: false, color: "#3FB950", badge: "🌐" },
  { id: "SES-003", title: "UN High-Level Political Forum (HLPF) 2026", body: "UN DESA / ECOSOC", type: "ECOSOC Forum", status: "upcoming", dates: "July 2026", location: "UN HQ, New York", flag: "🇺🇸", relevanceScore: 88, wlgaRole: "ECOSOC — Written Statement", keyAgenda: ["SDG7 deep-dive", "VNRs from 40+ countries"], expectedDelegates: "193 Member States", wlgaDelegation: [{ name: "WLGA Advocacy Team", role: "Advocacy", function: "Written statement + Side event" }], briefingPackReady: false, color: "#E8A020", badge: "📊" },
  { id: "SES-004", title: "WHO Expert Consultation — Indoor Air Quality", body: "WHO", type: "Technical Consultation", status: "upcoming", dates: "Q3 2026", location: "Geneva", flag: "🇨🇭", relevanceScore: 91, wlgaRole: "Industry Expert Witness", keyAgenda: ["WHO Indoor Air Quality Guidelines", "LPG emission performance"], expectedDelegates: "WHO experts, governments, NGOs", wlgaDelegation: [{ name: "WLGA Technical Expert", role: "Technical", function: "Present LPG emission data" }], briefingPackReady: false, color: "#A371F7", badge: "🏥" },
  { id: "SES-005", title: "COP30 — Belém, Brazil", body: "UNFCCC", type: "COP", status: "past", dates: "November 2025", location: "Belém, Brazil", flag: "🇧🇷", relevanceScore: 97, wlgaRole: "Accredited Observer", keyAgenda: ["NDC 3.0", "Global Mutirão clean cooking"], wlgaOutcomes: ["COP30 names clean cooking as 6 delivery pathways", "WLGA filed formal submission — cited in Observer Report"], color: "#3FB950", badge: "✅" },
];

export const UN_DOCUMENTS = [
  { id: "DOC-001", title: "Tracking SDG 7: The Energy Progress Report 2025", body: "IEA / IRENA / UNSD / World Bank / WHO", type: "SDG Progress Report", publishedDate: "October 2025", documentRef: "SDG7-TRACK-2025", flagSentiment: "positive", flagPriority: "high", aiFlag: "POSITIVE — LPG explicitly named as primary driver of clean cooking progress.", lpgMentions: 23, keyLPGContent: [{ text: "LPG remains the dominant clean cooking solution globally.", sentiment: "positive", page: 18 }], wlgaAction: "Draft WLGA response for 2026 Tracking SDG7 consultation.", wlgaResponseStatus: "in-progress", wlgaCitationCount: 0, wlgaCited: false, sourceUrl: "https://www.iea.org/reports/tracking-sdg7", color: "#3FB950" },
  { id: "DOC-002", title: "WHO Household Air Pollution Fact Sheet — Dec 2025", body: "WHO", type: "WHO Technical Guidance", publishedDate: "December 2025", documentRef: "WHO/AQH/2025.12", flagSentiment: "positive", flagPriority: "high", aiFlag: "POSITIVE — WHO designates LPG as clean fuel.", lpgMentions: 8, keyLPGContent: [{ text: "WHO defines LPG as clean for health at point of use.", sentiment: "positive", page: 3 }], wlgaAction: "Monitor for language changes.", wlgaResponseStatus: "monitoring", wlgaCitationCount: 2, wlgaCited: true, sourceUrl: "https://www.who.int", color: "#3FB950" },
  { id: "DOC-003", title: "COP30 Global Mutirão — Clean Cooking Implementation Plan", body: "UNFCCC / COP30", type: "COP Outcome Document", publishedDate: "November 2025", documentRef: "FCCC/CP/2025/L.18", flagSentiment: "positive", flagPriority: "critical", aiFlag: "CRITICAL POSITIVE — First COP to integrate clean cooking as 6 delivery pathways. LPG named.", lpgMentions: 12, keyLPGContent: [{ text: "Clean cooking included in Global Mutirão as one of six pathways.", sentiment: "positive", page: 4 }], wlgaAction: "Publish WLGA COP30 Summary. Brief all Leadership Partners.", wlgaResponseStatus: "completed", wlgaCitationCount: 1, wlgaCited: true, sourceUrl: "https://unfccc.int/cop30", color: "#3FB950" },
  { id: "DOC-004", title: "IEA World Energy Outlook 2025", body: "IEA", type: "Major Annual Report", publishedDate: "November 2025", documentRef: "IEA-WEO-2025", flagSentiment: "mixed", flagPriority: "high", aiFlag: "MIXED — Supports LPG for clean cooking but describes LPG as transitional in OECD.", lpgMentions: 34, keyLPGContent: [{ text: "LPG described as transitional fuel in OECD economies.", sentiment: "negative", page: 203 }], wlgaAction: "Engage IEA on transitional language.", wlgaResponseStatus: "in-progress", wlgaCitationCount: 5, wlgaCited: true, sourceUrl: "https://www.iea.org", color: "#E8A020" },
  { id: "DOC-005", title: "IPCC AR6 WG III — Chapter 6 Update", body: "IPCC", type: "IPCC Report", publishedDate: "March 2025", documentRef: "IPCC-AR6-WG3-CH6", flagSentiment: "mixed", flagPriority: "medium", aiFlag: "MIXED — Acknowledges LPG for clean cooking; no explicit recommendation.", lpgMentions: 9, keyLPGContent: [{ text: "Universal clean cooking requires LPG and other clean fuels at scale.", sentiment: "positive", page: 6 }], wlgaAction: "Submit to IPCC AR7 scoping Q2 2026.", wlgaResponseStatus: "pending", wlgaCitationCount: 0, wlgaCited: false, sourceUrl: "https://www.ipcc.ch", color: "#E8A020" },
  { id: "DOC-006", title: "Africa LPG Clean Cooking Investment Brief — AfDB 2025", body: "African Development Bank", type: "MDB Publication", publishedDate: "September 2025", documentRef: "AFDB-CLEAN-COOK-2025", flagSentiment: "positive", flagPriority: "high", aiFlag: "HIGHLY POSITIVE — AfDB names LPG priority. WLGA CFLA Task Force cited.", lpgMentions: 31, keyLPGContent: [{ text: "AfDB identifies LPG as primary clean cooking fuel for Africa.", sentiment: "positive", page: 8 }], wlgaAction: "Strengthen AfDB collaboration; use $15B figure in advocacy.", wlgaResponseStatus: "completed", wlgaCitationCount: 3, wlgaCited: true, sourceUrl: "https://www.afdb.org", color: "#3FB950" },
  { id: "DOC-007", title: "UNEP Emissions Gap Report 2025", body: "UNEP", type: "UNEP Report", publishedDate: "October 2025", documentRef: "UNEP-EGR-2025", flagSentiment: "negative", flagPriority: "high", aiFlag: "NEGATIVE — No LPG mention; focuses on electric cooking and biogas.", lpgMentions: 0, keyLPGContent: [{ text: "Clean cooking section focuses on electric and biogas only.", sentiment: "negative", page: 67 }], wlgaAction: "File formal WLGA submission to UNEP for 2026 report.", wlgaResponseStatus: "in-progress", wlgaCitationCount: 0, wlgaCited: false, sourceUrl: "https://www.unep.org", color: "#F85149" },
  { id: "DOC-008", title: "IEA Energy Access Ministerial Communiqué — Feb 2026", body: "IEA", type: "Ministerial Communiqué", publishedDate: "19 February 2026", documentRef: "IEA-MINISTERIAL-FEB2026", flagSentiment: "positive", flagPriority: "critical", aiFlag: "CRITICAL POSITIVE — LPG explicitly named. James Rockall attended.", lpgMentions: 16, keyLPGContent: [{ text: "LPG has driven ~70% of global clean-cooking gains since 2010.", sentiment: "positive", page: 2 }], wlgaAction: "Circulate to Leadership Partners. Use as opening reference in 2026 submissions.", wlgaResponseStatus: "completed", wlgaCitationCount: 1, wlgaCited: true, sourceUrl: "https://www.iea.org", color: "#3FB950" },
];

export const WLGA_CITATIONS = [
  { id: "CIT-001", year: 2020, quarter: "Q2", document: "IEA World Energy Outlook 2020", body: "IEA", type: "positive", context: "WLGA cited as global authority for LPG clean cooking data." },
  { id: "CIT-002", year: 2021, quarter: "Q1", document: "Tracking SDG7 2021", body: "IEA/IRENA/WHO/World Bank", type: "positive", context: "WLGA clean cooking market data cited." },
  { id: "CIT-003", year: 2021, quarter: "Q3", document: "WHO Indoor Air Quality Guidelines", body: "WHO", type: "positive", context: "LPG designated WHO-approved clean fuel." },
  { id: "CIT-004", year: 2022, quarter: "Q1", document: "IEA Africa Energy Outlook 2022", body: "IEA", type: "positive", context: "WLGA Africa LPG data cited." },
  { id: "CIT-005", year: 2022, quarter: "Q2", document: "UNFCCC COP26 Observer Report", body: "UNFCCC", type: "positive", context: "WLGA COP26 side event cited." },
  { id: "CIT-006", year: 2022, quarter: "Q3", document: "World Bank Clean Cooking Report", body: "World Bank", type: "positive", context: "WLGA Good Practice Guides cited." },
  { id: "CIT-007", year: 2022, quarter: "Q4", document: "AfDB Energy Strategy 2022-2030", body: "AfDB", type: "positive", context: "WLGA named key partner for LPG scale-up." },
  { id: "CIT-008", year: 2023, quarter: "Q1", document: "IEA/AfDB Vision for Clean Cooking", body: "IEA / AfDB", type: "positive", context: "WLGA co-authored; cited 8 times." },
  { id: "CIT-009", year: 2023, quarter: "Q2", document: "Tracking SDG7 2023", body: "IEA/IRENA/WHO/World Bank", type: "positive", context: "WLGA global LPG data cited." },
  { id: "CIT-010", year: 2023, quarter: "Q3", document: "UNDP Energy Access Report", body: "UNDP", type: "positive", context: "WLGA distribution guidelines cited." },
  { id: "CIT-011", year: 2023, quarter: "Q4", document: "UNFCCC TEC Report 2023", body: "UNFCCC TEC", type: "neutral", context: "LPG as transitional technology." },
  { id: "CIT-012", year: 2024, quarter: "Q1", document: "IEA Summit on Clean Cooking — Outcome", body: "IEA", type: "positive", context: "WLGA Clean Cooking Declaration co-signatory." },
  { id: "CIT-013", year: 2024, quarter: "Q2", document: "Tracking SDG7 2024", body: "IEA/IRENA/WHO/World Bank", type: "positive", context: "WLGA statistics cited." },
  { id: "CIT-014", year: 2024, quarter: "Q3", document: "AfDB Clean Cooking Brief 2025", body: "AfDB", type: "positive", context: "WLGA CFLA Task Force cited." },
  { id: "CIT-015", year: 2024, quarter: "Q4", document: "OPEC Fund Clean Cooking 2024", body: "OPEC Fund", type: "positive", context: "WLGA cited as global LPG authority." },
  { id: "CIT-016", year: 2025, quarter: "Q1", document: "UN SDG Progress Report 2025", body: "UN DESA", type: "positive", context: "WLGA Africa LPG Roadmap referenced." },
  { id: "CIT-017", year: 2025, quarter: "Q3", document: "IEA World Energy Outlook 2025", body: "IEA", type: "positive", context: "WLGA cited 5 times." },
  { id: "CIT-018", year: 2025, quarter: "Q4", document: "UNFCCC COP30 Observer Report", body: "UNFCCC", type: "positive", context: "WLGA submission cited; James Rockall quoted." },
  { id: "CIT-019", year: 2026, quarter: "Q1", document: "IEA Ministerial Communiqué — Paris", body: "IEA", type: "positive", context: "WLGA participation cited." },
];

const citationsByYear = { 2020: 2, 2021: 3, 2022: 4, 2023: 4, 2024: 4, 2025: 5, 2026: 3 };
export const CITATION_BAR_DATA = Object.entries(citationsByYear).map(([year, count]) => ({ year: Number(year), count }));

export const POSITION_PAPERS = [
  { id: "POS-001", title: "WLGA Submission to UNEP Emissions Gap Report 2026", status: "in-progress", targetBody: "UNEP", targetDocument: "Emissions Gap Report 2026", deadline: "30 April 2026", type: "Formal Written Submission", aiDraftAvailable: true, relatedDocId: "DOC-007", keyArguments: ["LPG drove 70% of clean cooking gains", "WHO designates LPG as clean fuel", "Electric cooking non-viable for 600M+ Africans"], format: "UN Standard (2,000 words max)", aiDraft: `WLGA FORMAL WRITTEN SUBMISSION\nUNEP Emissions Gap Report 2026 Consultation\nSubmitted by: World Liquid Gas Association (WLGA)\nECOSOC Special Consultative Status\n\nThe World Liquid Gas Association respectfully submits this statement to UNEP for the 2026 report. WLGA notes with concern that the 2025 report's clean cooking section focuses exclusively on electric cooking and biogas, omitting LPG — the fuel that has driven approximately 70% of global clean-cooking gains since 2010 (IEA SDG7 Tracking Report).\n\nWLGA requests that the 2026 report:\n1. Acknowledge LPG's documented role as primary driver of clean cooking transitions.\n2. Recognise WHO's designation of LPG as a clean fuel at point of use.\n3. Present LPG alongside electric and biogas as a complementary pathway.\n4. Note BioLPG as renewable pathway with up to 90% GHG reduction.\n5. Quantify the 600+ million Africans without reliable electricity for cooking.\n\nContact: Cinch Munson, Director Strategy — cmunson@worldliquidgas.org`, submittedNote: null },
  { id: "POS-002", title: "WLGA COP30 Formal Written Submission", status: "completed", targetBody: "UNFCCC", targetDocument: "COP30 Submissions", deadline: "September 2025", type: "UNFCCC Written Submission", aiDraftAvailable: false, relatedDocId: "DOC-003", keyArguments: ["LPG in NDC 3.0 frameworks", "Article 6 LPG clean cooking credits"], format: "UNFCCC Formal", aiDraft: null, submittedNote: "Submitted. WLGA cited in COP30 Observer Report." },
  { id: "POS-003", title: "WLGA Input to IPCC AR7 Scoping — Chapter 6", status: "pending", targetBody: "IPCC", targetDocument: "IPCC AR7 Scoping", deadline: "Q2 2026", type: "IPCC Expert Input", aiDraftAvailable: true, relatedDocId: "DOC-005", keyArguments: ["LPG as recommended clean cooking pathway", "Health-climate co-benefits", "BioLPG in AR7"], format: "IPCC Expert Review", aiDraft: `WLGA EXPERT INPUT — IPCC AR7 SCOPING\nChapter 6: Energy Systems\n\nWLGA recommends AR7 explicitly address LPG as a documented clean cooking pathway: 70% share of global clean cooking gains 2010–2024; up to 98% reduction in indoor air pollution; WHO designation as clean fuel. AR7 should quantify health-climate co-benefits and address BioLPG as 50–90% GHG reduction pathway.`, submittedNote: null },
];

export const BRIEFING_PACKS = {
  "SES-001": {
    sessionId: "SES-001",
    title: "WLGA Delegation Briefing Pack",
    subtitle: "2nd Summit on Clean Cooking in Africa — Nairobi, 9–10 July 2026",
    generatedDate: "24 February 2026",
    classification: "WLGA Internal — Delegation Only",
    sections: [
      { title: "1. Strategic Context & WLGA Objectives", content: "The Nairobi Summit is the most important clean cooking advocacy event of 2026. WLGA OBJECTIVES: Secure adoption of Africa LPG Roadmap; establish WLGA as industry co-chair for finance working group; secure NDC 3.0 commitments from 5+ African governments; bilateral meetings with AfDB, World Bank, UNDP; ensure Communiqué names LPG as primary clean cooking pathway." },
      { title: "2. Key Agenda Items & WLGA Positioning", content: "SESSION 1 — FINANCE: Channel through LPG distribution infrastructure. SESSION 2 — NDC INTEGRATION: LPG must be explicitly named. SESSION 3 — LAST-MILE: LPG cylinders reach off-grid communities. SESSION 4 — HEALTH: 3.2M deaths/year; LPG reduces by 98%." },
      { title: "3. Key Attendees & Relationship Intelligence", content: "DR. FATIH BIROL (IEA): Confirmed Istanbul 2026 keynote. AFRICAN DEVELOPMENT BANK: Committed to LPG ($15B need). WORLD BANK: Increasingly supportive. SEFORALL: Technology-neutral; request WLGA in clean cooking tracker." },
      { title: "4. Expected Opposition Positions", content: "Electric cooking lobby: 600M Africans without reliable electricity. Biomass advocates: WHO data — improved cookstoves do NOT meet clean fuel thresholds. Anti-fossil NGOs: COP30 Mutirão includes LPG; WHO designation; BioLPG pathway." },
      { title: "5. Key Data Points — Memorise These", content: "2.1B people on solid fuels (WHO). 900M Africans lack clean cooking (IEA). LPG drove ~70% of clean cooking gains since 2010. $470M disbursed, $2.2B pledged (IEA Feb 2026). 3.2M deaths/year household air pollution. LPG reduces pollution 98%. $15B LPG investment needed Africa by 2030 (AfDB)." },
      { title: "6. WLGA Formal Deliverables", content: "PRE-SUMMIT: Africa LPG Roadmap; WLGA NDC 3.0 position paper; WLGA-AfDB brief. AT SUMMIT: James Rockall plenary; CFLA presentation; bilaterals AfDB, World Bank, UNDP. POST: Summit Summary within 48 hours." },
    ],
    urgentActions: ["Complete Africa LPG Roadmap by 15 June 2026", "Confirm bilateral requests by 1 June", "Register delegation for ECOSOC passes", "Brief Leadership Partners by 1 June"],
  },
};

export const UN_PARTNERS = [
  { id: "PAR-001", name: "IEA", fullName: "International Energy Agency", type: "Intergovernmental", relationship: "Strategic Partner", strength: "very-strong", keyContact: "Dr. Fatih Birol", lastEngagement: "18 Feb 2026 — Paris Ministerial", flag: "🌐", lat: 48.8566, lng: 2.3522 },
  { id: "PAR-002", name: "WHO", fullName: "World Health Organization", type: "UN Agency", relationship: "Technical Partner", strength: "strong", keyContact: "Air Quality & Health", lastEngagement: "Dec 2025", flag: "🏥", lat: 46.2044, lng: 6.1432 },
  { id: "PAR-003", name: "AfDB", fullName: "African Development Bank", type: "MDB", relationship: "Investment Partner", strength: "strong", keyContact: "Energy Access Division", lastEngagement: "Sep 2025", flag: "🌍", lat: 5.3599, lng: -4.0082 },
  { id: "PAR-004", name: "World Bank", fullName: "World Bank Group", type: "MDB", relationship: "Policy Partner", strength: "medium", keyContact: "Energy Sector", lastEngagement: "Oct 2025", flag: "🏛️", lat: 38.9072, lng: -77.0369 },
  { id: "PAR-005", name: "UNDP", fullName: "UN Development Programme", type: "UN Agency", relationship: "Programme Partner", strength: "medium", keyContact: "Energy Access", lastEngagement: "Jul 2025", flag: "🔵", lat: 40.7489, lng: -73.968 },
  { id: "PAR-006", name: "UNFCCC", fullName: "UN Framework Convention on Climate Change", type: "UN Body", relationship: "Accredited Observer", strength: "strong", keyContact: "NGO Relations", lastEngagement: "Nov 2025 — COP30", flag: "🌱", lat: 50.6929, lng: 7.1869 },
  { id: "PAR-007", name: "UNEP", fullName: "UN Environment Programme", type: "UN Agency", relationship: "Active Engagement Needed", strength: "weak", keyContact: "Energy Branch", lastEngagement: "None recent", flag: "⚠️", lat: -1.2921, lng: 36.8219 },
  { id: "PAR-008", name: "SEforAll", fullName: "Sustainable Energy for All", type: "UN Initiative", relationship: "Aligned", strength: "medium", keyContact: "SDG7 Team", lastEngagement: "Nov 2025", flag: "⚡", lat: 48.2082, lng: 16.3738 },
  { id: "PAR-009", name: "GLPGP", fullName: "Global LPG Partnership", type: "Industry/UN Affiliate", relationship: "Co-Advocacy", strength: "very-strong", keyContact: "Partnership Secretariat", lastEngagement: "Feb 2026", flag: "🤝", lat: -1.2921, lng: 36.8219 },
  { id: "PAR-010", name: "OPEC Fund", fullName: "OPEC Fund for International Development", type: "MDB", relationship: "Finance Partner", strength: "medium", keyContact: "Clean Cooking", lastEngagement: "Q4 2024", flag: "💰", lat: 48.2082, lng: 16.3738 },
];

export function getDocumentsByFlag(flag) {
  if (!flag) return UN_DOCUMENTS;
  return UN_DOCUMENTS.filter((d) => d.flagSentiment === flag);
}

export function getDocumentsByPriority(list) {
  const order = { critical: 0, high: 1, medium: 2, low: 3 };
  const arr = list && list.length ? [...list] : [...UN_DOCUMENTS];
  return arr.sort((a, b) => (order[a.flagPriority] ?? 4) - (order[b.flagPriority] ?? 4));
}

export function getUpcomingSessions() {
  return UN_SESSIONS.filter((s) => s.status === "upcoming");
}

export function getSentimentColor(sentiment) {
  if (sentiment === "positive") return "#3FB950";
  if (sentiment === "negative") return "#F85149";
  if (sentiment === "mixed") return "#E8A020";
  return "#8B949E";
}

export function latLngToSVG(lat, lng, mapWidth = 960, mapHeight = 500) {
  const x = (lng + 180) * (mapWidth / 360);
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = mapHeight / 2 - (mapWidth * mercN) / (2 * Math.PI);
  return { x, y };
}
