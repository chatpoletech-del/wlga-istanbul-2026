// ─────────────────────────────────────────────────────────────────────────────
// WLGA EVENTS DATA — PRE-INSTALLED DATASET
// Based on real events from worldliquidgas.org & liquidgasweek.com
// ─────────────────────────────────────────────────────────────────────────────

export const EVENTS_PAGE_INTRO = {
  title: "WLGA Global Events Hub",
  tagline: "Connect. Learn. Lead the Future of LPG.",
  description: `Welcome to the WLGA Events Hub — your single destination for all World Liquid Gas Association events, summits, and industry gatherings across the globe.

WLGA brings together over 300 member companies from 125 countries through world-class events that drive industry progress. From the flagship Liquid Gas Week to regional summits, innovation forums, and ministerial meetings — this hub keeps you informed, registered, and connected.

Each event page features AI-powered tools including session summaries, personalised networking matchmaking, and an interactive post-event knowledge hub where you can query session recordings in real time.`,
  stats: [
    { label: "Annual Events", value: "12+" },
    { label: "Countries Represented", value: "125" },
    { label: "Member Companies", value: "300+" },
    { label: "2025 Rio Delegates", value: "1,700+" },
  ],
};

export const EVENTS = [
  {
    id: "EVT-001",
    title: "Liquid Gas Week Istanbul 2026",
    shortTitle: "LGW Istanbul 2026",
    type: "Flagship Annual Event",
    status: "upcoming",
    featured: true,
    dates: { start: "2026-10-12", end: "2026-10-16", display: "12–16 October 2026" },
    location: { city: "Istanbul", country: "Turkey", venue: "Istanbul Congress Center", flag: "🇹🇷" },
    theme: "Resilience in a Changing World",
    description: `Liquid Gas Week is WLGA's annual global flagship event reuniting stakeholders from the entire Liquid Gas value chain — policymakers, industry leaders, intergovernmental organisations, and media. The 2026 edition in Istanbul promises to be the largest yet.

Confirmed keynote: Dr. Fatih Birol, Executive Director of the International Energy Agency (IEA) — one of the world's most influential voices on global energy and climate policy.

With only 14% of exhibition space remaining, Istanbul 2026 is shaping up to be a landmark event for the global LPG industry under the theme "Resilience in a Changing World."`,
    highlights: [
      "Keynote: Dr. Fatih Birol, IEA Executive Director",
      "3-day international exhibition — 86% of space already booked",
      "High-level conference sessions across 4 strategic pillars",
      "WLGA Working Group meetings (members only)",
      "WLGA Women in LPG (WINLPG) networking events",
      "WLGA Youth Council sessions",
      "World LPG Challenge startup competition finals",
      "Gala dinner and awards ceremony",
    ],
    speakers: [
      { name: "Dr. Fatih Birol", title: "Executive Director, IEA", type: "Keynote" },
      { name: "James Rockall", title: "CEO, WLGA", type: "Host" },
      { name: "Melih Poyraz", title: "CEO, Aygaz & WLGA Vice President", type: "Panellist" },
      { name: "Cinch Munson", title: "Director of Strategy & Business Development, WLGA", type: "Panellist" },
    ],
    registration: {
      open: true,
      url: "https://www.liquidgasweek.com",
      earlyBirdDeadline: "2026-06-30",
      types: [
        { name: "Full Delegate Pass", price: "£2,450", description: "Full 5-day access including exhibition, all sessions, networking events and gala dinner" },
        { name: "Exhibition Visitor (3-day)", price: "£450", description: "Access to exhibition floor and public sessions for 3 days" },
        { name: "WLGA Member Rate", price: "£1,950", description: "Discounted rate for staff of WLGA member companies" },
        { name: "Exhibition Booth", price: "From £8,500", description: "Secure your exhibition space — only 14% remaining" },
      ],
    },
    capacity: 2500,
    expectedAttendees: "2,000+",
    countries: "75+",
    color: "#E8A020",
    badge: "🏆",
    image: "istanbul",
    tags: ["Flagship", "Exhibition", "Conference", "Networking", "IEA Keynote"],
    aiEnabled: true,
  },
  {
    id: "EVT-002",
    title: "WLGA Strategic Innovation Summit 2026",
    shortTitle: "Innovation Summit Tokyo",
    type: "Innovation Summit",
    status: "upcoming",
    featured: false,
    dates: { start: "2026-03-10", end: "2026-03-11", display: "10–11 March 2026" },
    location: { city: "Tokyo", country: "Japan", venue: "Tokyo Prince Hotel & Otemachi Mitsui Conference", flag: "🇯🇵" },
    theme: "The Role of LP Gas under Uncertain Energy Conditions: Appropriate Pathways to Low-Carbon Energy",
    description: `The 2026 WLGA Strategic Innovation Summit is the LPG industry's premier event for charting the next wave of technology, digitalisation, and energy solutions. Organised jointly with the Japan LPG Association, this exclusive invitation-only event brings together key industry leaders to debate the future of LPG. Held alongside the International LPG Seminar 2026 at Nikkei Hall, Tokyo. Free to attend for invited guests.`,
    highlights: [
      "Co-organised with Japan LPG Association",
      "Held alongside International LPG Seminar 2026 at Nikkei Hall",
      "WLGA Board Meeting (Board Members only — 9 March)",
      "WLGA Industry Council Meeting (IC Members only)",
      "Focus: Digitalisation, technology, and low-carbon pathways",
      "Invitation-only — priority to Industry Council Members",
      "Free to attend for qualified participants",
    ],
    speakers: [
      { name: "James Rockall", title: "CEO, WLGA", type: "Host" },
      { name: "Japan LPG Association Representatives", title: "Japan LPG Association", type: "Co-host" },
      { name: "WLGA Industry Council Members", title: "Various Companies", type: "Panellist" },
    ],
    registration: {
      open: true,
      url: "https://www.worldliquidgas.org/event/wlga-strategic-innovation-summit-2026/",
      earlyBirdDeadline: null,
      types: [
        { name: "International LPG Seminar 2026 (Day 1 & 2)", price: "Free", description: "Open to all — register at Nikkei Hall" },
        { name: "WLGA Innovation Summit", price: "Free (Invitation Only)", description: "Priority to Industry Council Members and select guests" },
        { name: "WLGA Industry Council Meeting", price: "Members Only", description: "Open to Industry Council Members only" },
      ],
    },
    capacity: 300,
    expectedAttendees: "200–300",
    countries: "30+",
    color: "#3B82F6",
    badge: "⚡",
    image: "tokyo",
    tags: ["Innovation", "Invitation Only", "Members", "Technology"],
    aiEnabled: false,
  },
  {
    id: "EVT-003",
    title: "IEA Clean Cooking Ministerial Meeting 2026",
    shortTitle: "Clean Cooking Ministerial",
    type: "Ministerial Meeting",
    status: "upcoming",
    featured: false,
    dates: { start: "2026-07-09", end: "2026-07-10", display: "9–10 July 2026" },
    location: { city: "Nairobi", country: "Kenya", venue: "Safari Park Hotel, Nairobi", flag: "🇰🇪" },
    theme: "Summit on Clean Cooking in Africa — From Pledges to Action",
    description: `The Second Summit on Clean Cooking in Africa, hosted in Nairobi. WLGA is a key industry partner, positioning LPG as the fastest scalable pathway to universal clean cooking access. $470 million has already been disbursed across 22 African countries, with $2.2 billion pledged.`,
    highlights: [
      "Chaired by Netherlands Deputy PM Sophie Hermans",
      "Focus: Translating $2.2B pledges into delivery actions",
      "WLGA CEO James Rockall presenting industry position",
      "Dr. Fatih Birol (IEA) and Chris Wright (US Energy Secretary) participating",
      "25+ countries and 23+ organisations attending",
      "Outcomes feed into global SDG 7 targets for 2030",
      "LPG industry investment and policy commitments",
    ],
    speakers: [
      { name: "James Rockall", title: "CEO, WLGA", type: "Industry Representative" },
      { name: "Dr. Fatih Birol", title: "Executive Director, IEA", type: "Speaker" },
      { name: "Sophie Hermans", title: "Deputy Prime Minister, Netherlands", type: "Chair" },
      { name: "Chris Wright", title: "Secretary of Energy, USA", type: "Speaker" },
    ],
    registration: {
      open: false,
      url: "https://www.worldliquidgas.org",
      earlyBirdDeadline: null,
      types: [
        { name: "Government Delegations", price: "By Invitation", description: "Open to government representatives by invitation" },
        { name: "Industry Observers", price: "By Application", description: "Limited industry observer places — contact WLGA" },
      ],
    },
    capacity: 500,
    expectedAttendees: "400+",
    countries: "50+",
    color: "#10B981",
    badge: "🌍",
    image: "nairobi",
    tags: ["Clean Cooking", "Africa", "Ministerial", "Policy", "SDG 7"],
    aiEnabled: false,
  },
  {
    id: "EVT-004",
    title: "WLGA Member Engagement Meetings (MEMs) — Q2 2026",
    shortTitle: "Member Engagement Q2",
    type: "Member Working Meetings",
    status: "upcoming",
    featured: false,
    dates: { start: "2026-05-19", end: "2026-05-21", display: "19–21 May 2026" },
    location: { city: "Paris", country: "France", venue: "WLGA Headquarters & Online (Hybrid)", flag: "🇫🇷" },
    theme: "Advancing WLGA's Four Work Streams",
    description: `WLGA Member Engagement Meetings (MEMs) are working sessions focused on the four primary WLGA work streams: Advocacy, Safety & Business Improvement, Sustainable Growth & Innovation, and Communications & Awareness. Hybrid meetings free for WLGA member company staff.`,
    highlights: [
      "ADV: Advocacy Working Group sessions",
      "SBI: Safety & Business Improvement Working Group",
      "SGI: Sustainable Growth & Innovation Working Group",
      "COM: Communications & Awareness Working Group",
      "Hybrid format — in-person in Paris + online via Teams",
      "Free for all WLGA member company staff",
      "Coffee break networking sessions",
    ],
    speakers: [
      { name: "WLGA Working Group Chairs", title: "Various", type: "Facilitators" },
      { name: "Member Company Representatives", title: "300+ member companies", type: "Participants" },
    ],
    registration: {
      open: true,
      url: "https://www.worldliquidgas.org/events/",
      earlyBirdDeadline: null,
      types: [
        { name: "WLGA Member (In-person)", price: "Free", description: "Free for staff of WLGA member companies — Paris HQ" },
        { name: "WLGA Member (Online)", price: "Free", description: "Free online access via Microsoft Teams — members only" },
      ],
    },
    capacity: 200,
    expectedAttendees: "150+",
    countries: "40+",
    color: "#A855F7",
    badge: "🤝",
    image: "paris",
    tags: ["Members Only", "Working Groups", "Hybrid", "Free"],
    aiEnabled: false,
  },
  {
    id: "EVT-005",
    title: "Liquid Gas Week Rio 2025",
    shortTitle: "LGW Rio 2025",
    type: "Flagship Annual Event",
    status: "past",
    featured: false,
    dates: { start: "2025-09-22", end: "2025-09-26", display: "22–26 September 2025" },
    location: { city: "Rio de Janeiro", country: "Brazil", venue: "Riocentro Convention Centre", flag: "🇧🇷" },
    theme: "Delivering Energy for Life",
    description: `Liquid Gas Week 2025 in Rio de Janeiro drew more than 1,700 delegates from 70 countries. Brazil's Minister of Mines and Energy Alexandre Silveira delivered a ministerial keynote. Featured the launch of the WLGA Youth Council's AI guide and the 10th anniversary celebration of Women in LPG (WINLPG).`,
    highlights: [
      "1,700+ delegates from 70 countries",
      "Ministerial keynote: Alexandre Silveira, Brazil Minister of Mines & Energy",
      "WLGA Youth Council launched AI guide",
      "WINLPG 10th Anniversary celebration",
      "Hybrid format — in-person and online",
      "World LPG Challenge competition",
      "Focus: Digital transformation, safety, sustainability",
    ],
    speakers: [
      { name: "Alexandre Silveira", title: "Minister of Mines & Energy, Brazil", type: "Keynote" },
      { name: "James Rockall", title: "CEO, WLGA", type: "Host" },
      { name: "Brooke Siebert", title: "Ferrellgas", type: "Speaker" },
      { name: "Tucker Perkins", title: "PERC (Propane Education & Research Council)", type: "Speaker" },
      { name: "Sonya Higginbotham", title: "Worthington Enterprises", type: "Speaker" },
    ],
    registration: { open: false, url: "#", types: [] },
    capacity: 2000,
    expectedAttendees: "1,700",
    countries: "70",
    color: "#EF4444",
    badge: "🌟",
    image: "rio",
    tags: ["Past Event", "Exhibition", "Hybrid", "Youth Council", "WINLPG"],
    aiEnabled: true,
  },
  {
    id: "EVT-006",
    title: "WLGA Middle East LPG Summit & Expo 2025",
    shortTitle: "Middle East Summit Muscat",
    type: "Regional Summit",
    status: "past",
    featured: false,
    dates: { start: "2025-11-10", end: "2025-11-11", display: "10–11 November 2025" },
    location: { city: "Muscat", country: "Oman", venue: "Oman Convention & Exhibition Centre (OCEC)", flag: "🇴🇲" },
    theme: "The Middle East as a Pivotal Hub for LPG Innovation and Trade",
    description: `The WLGA Middle East LPG Summit & Expo 2025 was held under the patronage of the Oman Ministry of Commerce, Industry & Investment Promotion. The largest LPG-focused gathering in the Middle East history, with over 80 exhibiting companies and 2,000+ participants.`,
    highlights: [
      "Held under patronage of Oman Ministry of Commerce",
      "80+ exhibiting companies",
      "2,000+ participants expected",
      "Supported by Oman Energy Association (OPAL)",
      "Sponsored by NGC, Bharat Tanks Vessels, Ragasco",
      "Focus: Middle East as global LPG innovation hub",
      "LPG trade, investment, and technology showcase",
    ],
    speakers: [
      { name: "James Rockall", title: "CEO, WLGA", type: "Speaker" },
      { name: "Oman MOCIIP Representatives", title: "Government of Oman", type: "Patron" },
      { name: "OPAL Representatives", title: "Oman Energy Association", type: "Co-host" },
    ],
    registration: { open: false, url: "#", types: [] },
    capacity: 2500,
    expectedAttendees: "2,000+",
    countries: "50+",
    color: "#F59E0B",
    badge: "🏛️",
    image: "muscat",
    tags: ["Past Event", "Regional", "Middle East", "Exhibition"],
    aiEnabled: true,
  },
  {
    id: "EVT-007",
    title: "Liquid Gas Week Cape Town 2024",
    shortTitle: "LGW Cape Town 2024",
    type: "Flagship Annual Event",
    status: "past",
    featured: false,
    dates: { start: "2024-10-14", end: "2024-10-18", display: "14–18 October 2024" },
    location: { city: "Cape Town", country: "South Africa", venue: "Cape Town International Convention Centre (CTICC)", flag: "🇿🇦" },
    theme: "Energy For All",
    description: `Liquid Gas Week 2024 in Cape Town celebrated the event's return to South Africa after 17 years, under the theme "Energy For All." The event brought the global LPG industry together to address universal energy access. Oryx Energies and other African LPG leaders were prominent participants.`,
    highlights: [
      "Return to South Africa after 17 years",
      "Theme: Energy For All — universal energy access",
      "Strong African participation and ministerial presence",
      "Focus on clean cooking access in Sub-Saharan Africa",
      "World LPG Challenge — sustainability-focused startups",
      "WINLPG networking events",
    ],
    speakers: [
      { name: "James Rockall", title: "CEO, WLGA", type: "Host" },
      { name: "African Energy Ministers", title: "Multiple African Governments", type: "Keynote" },
    ],
    registration: { open: false, url: "#", types: [] },
    capacity: 2000,
    expectedAttendees: "1,500+",
    countries: "65+",
    color: "#10B981",
    badge: "🌍",
    image: "capetown",
    tags: ["Past Event", "Africa", "Energy Access", "Exhibition"],
    aiEnabled: true,
  },
];

export const AI_SESSION_SUMMARIES = {
  "EVT-005": [
    { id: "SUM-001", sessionTitle: "Opening Plenary: Delivering Energy for Life", speaker: "Alexandre Silveira, Minister of Mines & Energy, Brazil", duration: "90 mins", aiSummary: "Brazil's Minister of Mines and Energy opened Liquid Gas Week 2025 with a call for LPG to be central to Latin America's energy transition strategy. He highlighted that LPG provides clean cooking access to over 30 million Brazilian households and called on international industry partners to accelerate investment in the region's distribution infrastructure. Key statistics presented: Brazil has 97% LPG household penetration — the highest in the world. The minister committed Brazil to reaching 100% clean cooking by 2030 and announced a new federal programme subsidising first-cylinder access for 500,000 low-income families.", keyQuote: "LPG is not a legacy fuel in Brazil — it is the backbone of our clean energy future for millions of families.", actionItems: ["Brazil federal clean cooking programme for 500,000 families announced", "Call for accelerated private investment in Latin American LPG distribution", "Commitment to 100% clean cooking access in Brazil by 2030"], tags: ["Policy", "Clean Cooking", "Latin America", "Ministerial"] },
    { id: "SUM-002", sessionTitle: "Digital Transformation: AI and the Future of LPG Distribution", speaker: "WLGA Youth Council & Industry Panel", duration: "60 mins", aiSummary: "The WLGA Youth Council launched their landmark AI Guide for the LPG Industry during this session. The panel examined practical AI deployments: cylinder fleet optimisation using computer vision (reducing losses by 19%), AI-powered demand forecasting for distributors, and digital safety inspection tools deployed across 4,200 field technicians in Indonesia. Discussion highlighted the significant capability gap between large multinationals and small regional distributors.", keyQuote: "The data has always been there. We just weren't listening to it. AI gives the entire industry new ears.", actionItems: ["WLGA AI Guide for LPG Industry published — available to all members", "WLGA to establish a Digital Transformation Toolkit for SME distributors", "SHV Energy to share cylinder-tracking algorithm with WLGA members"], tags: ["AI", "Digital", "Youth Council", "Technology"] },
    { id: "SUM-003", sessionTitle: "Women in LPG (WINLPG) 10th Anniversary Forum", speaker: "WINLPG Network", duration: "120 mins", aiSummary: "The WINLPG 10th Anniversary Forum celebrated a decade of progress on gender inclusion. Presentations showed a 34% increase in women in senior LPG industry roles over ten years, though this still represents only 18% of leadership positions globally. A new WINLPG Mentorship Programme pairing 200 emerging female leaders with C-suite executives was announced.", keyQuote: "When we invest in women in energy, we invest in the entire industry's future.", actionItems: ["WINLPG Mentorship Programme launched — 200 pairings in Year 1", "WLGA to include WINLPG representation in all major panels from 2026", "Annual WINLPG progress report to be published alongside WLGA Annual Report"], tags: ["WINLPG", "Gender", "Leadership", "Diversity"] },
    { id: "SUM-004", sessionTitle: "Safety Excellence: Zero Harm in LPG Operations", speaker: "WLGA Safety & Business Improvement Working Group", duration: "75 mins", aiSummary: "The Safety Excellence session presented the global LPG safety incident data for 2024, showing a 12% reduction in reported incidents year-on-year. Key case studies: India's cylinder inspection digitalisation programme (reducing valve failure incidents by 28%), and Nigeria's dealer safety certification scheme reaching 12,000 last-mile distributors. WLGA's new anonymous global incident reporting portal was introduced.", keyQuote: "Every incident that doesn't happen is a family kept safe. That's the only metric that matters.", actionItems: ["WLGA anonymous incident reporting portal launched — available to all members", "Global LPG safety incident database to be published annually from 2026", "WLGA to develop a Safety Certification Programme for last-mile distributors"], tags: ["Safety", "Standards", "Incident Reporting", "Best Practice"] },
  ],
  "EVT-006": [
    { id: "SUM-005", sessionTitle: "Middle East LPG Trade: Flows, Pricing, and Future Demand", speaker: "James Rockall, CEO WLGA & Industry Trading Panel", duration: "60 mins", aiSummary: "The opening session positioned the Middle East as pivotal hubs driving the next generation of global LPG trade innovation. James Rockall noted that the region now accounts for 38% of global LPG exports. The trading panel discussed Saudi Aramco's CP pricing mechanism and AI-powered price forecasting tools. A new WLGA Middle East chapter coordination mechanism was announced.", keyQuote: "The Middle East is not just supplying the world's LPG — it is increasingly innovating the technology and commercial models that will define the industry's future.", actionItems: ["WLGA Middle East Chapter coordination programme launched", "Regional LPG demand forecast report to be published Q1 2026", "AI pricing tools best practice guide for traders to be developed"], tags: ["Trading", "Middle East", "Pricing", "Market Intelligence"] },
    { id: "SUM-006", sessionTitle: "LPG Infrastructure Investment in Emerging Markets", speaker: "National Gas Company (NGC) Oman & Financial Panel", duration: "60 mins", aiSummary: "The infrastructure investment session highlighted that $15 billion in new LPG infrastructure investment is required across Africa and South Asia over the next decade. Innovative financing models were presented including blended finance structures. NGC Oman presented its expanded storage terminal programme and new digital distribution management system.", keyQuote: "The infrastructure investment gap is solvable — but only if we align government de-risking with private capital at scale.", actionItems: ["WLGA to publish an LPG Infrastructure Investment Guide for emerging markets", "Blended finance framework template to be shared with member companies", "WLGA Investment Roundtable scheduled for London, September 2026"], tags: ["Investment", "Infrastructure", "Finance", "Emerging Markets"] },
  ],
  "EVT-007": [
    { id: "SUM-007", sessionTitle: "Energy For All: LPG's Role in Universal Access", speaker: "African Energy Ministers & WLGA Leadership", duration: "90 mins", aiSummary: "The opening plenary framed LPG's central role in achieving universal energy access in Africa, where 600 million people still lack access to clean cooking fuels. Ministers from Kenya, Nigeria, South Africa, and Ghana presented their national LPG access programmes. LPG has driven 70% of global clean-cooking gains since 2010.", keyQuote: "LPG is the only fuel that can reach 600 million Africans in the timeframe the climate and health crises demand. The alternative is not a renewable — it is continued biomass.", actionItems: ["4 African governments committed to LPG clean cooking subsidy programmes", "WLGA to establish Africa Clean Cooking Working Group", "Joint WLGA-African Development Bank clean cooking finance facility in development"], tags: ["Africa", "Clean Cooking", "Policy", "Energy Access", "Ministerial"] },
  ],
};

export const MATCHMAKING_PROFILES = [
  { id: "MP-001", name: "Ahmed Al-Rashidi", title: "VP Business Development", company: "Saudi Aramco LPG", country: "Saudi Arabia", goal: "Find European BioLPG distribution partners", valueChain: "Producer" },
  { id: "MP-002", name: "Elena Dubois", title: "Head of Sustainability", company: "TotalEnergies LPG", country: "France", goal: "Connect with BioLPG feedstock suppliers globally", valueChain: "Producer/Trader" },
  { id: "MP-003", name: "Amara Mensah", title: "CEO", company: "Afrigas Kenya", country: "Kenya", goal: "Find clean cooking finance partners and cylinder suppliers", valueChain: "Distributor" },
  { id: "MP-004", name: "Carlos Martinez", title: "Director of Operations", company: "Ultragaz Brazil", country: "Brazil", goal: "Digital transformation tools and AI distribution systems", valueChain: "Distributor" },
  { id: "MP-005", name: "Liu Wei", title: "Head of Trading", company: "PetroChina LPG", country: "China", goal: "Establish new LPG supply routes from US Gulf Coast", valueChain: "Trader" },
  { id: "MP-006", name: "Priya Patel", title: "Head of LPG Division", company: "Indian Oil Corporation", country: "India", goal: "Safety standards and cylinder management best practices", valueChain: "Distributor" },
  { id: "MP-007", name: "Marco Rossi", title: "Sales Director", company: "Cavagna Group", country: "Italy", goal: "Connect with distributors in emerging markets for equipment supply", valueChain: "Equipment Manufacturer" },
  { id: "MP-008", name: "Sarah Johnson", title: "Head of Clean Cooking", company: "CleanCooking Alliance", country: "USA", goal: "Partner with LPG distributors on last-mile access programmes in Africa", valueChain: "NGO/Development" },
];

export const MATCH_REASONS_POOL = [
  "Both operating in overlapping African markets — distributor meets NGO partner",
  "Producer meets distributor: European supply chain opportunity for BioLPG",
  "Equipment supplier meets emerging market distributor — high sales potential",
  "Both focused on digital transformation and AI tools for LPG operations",
  "Trading desk seeks new Asian supply routes — producer seeking new buyers",
  "Finance NGO meets distributor needing clean cooking programme capital",
  "Safety standards alignment — both working on cylinder inspection programmes",
  "Autogas opportunity: vehicle market developer meets fuel distributor",
];

export const VIDEO_HIGHLIGHTS = {
  "EVT-005": [
    { id: "VID-001", title: "Opening Ceremony & Ministerial Keynote", speaker: "Alexandre Silveira, Brazil Minister of Mines & Energy", duration: "12:34", thumbnail: "opening-ceremony", description: "Brazil's Minister opens Liquid Gas Week 2025 with a vision for LPG's role in Latin America's clean energy future.", transcript: `Welcome to Liquid Gas Week 2025, Rio de Janeiro. Brazil stands as proof of what LPG can achieve — 97% household penetration. Today I announce a new federal programme: 500,000 Brazilian families will receive their first LPG cylinder and regulator at zero cost before the end of 2026.`, keyTopics: ["Clean cooking access", "Brazil federal programme", "500,000 families", "Energy policy", "LPG subsidy"], chatbotContext: "This video covers the opening ceremony of Liquid Gas Week Rio 2025 and the Brazilian Minister's keynote announcing a new federal clean cooking programme for 500,000 families. Brazil's 97% LPG household penetration and call for private sector investment in LPG distribution across Latin America." },
    { id: "VID-002", title: "AI & Digital Transformation in LPG — Youth Council Session", speaker: "WLGA Youth Council & Industry Panel", duration: "18:45", thumbnail: "digital-session", description: "The WLGA Youth Council launches the landmark AI Guide for the LPG Industry.", transcript: `The data has always been there. We just weren't listening to it. AI gives the entire industry new ears. Today we launch the WLGA AI Guide for the LPG Industry.`, keyTopics: ["WLGA AI Guide launch", "SHV Energy fleet optimisation", "Pertamina safety app", "Digital transformation", "Youth Council"], chatbotContext: "This session covers the WLGA Youth Council's launch of the AI Guide at Rio 2025. Topics include SHV Energy's 19% reduction in empty-run deliveries using AI, Pertamina Gas safety app in Indonesia, Indian Oil's AI demand forecasting, and WLGA's Digital Transformation Toolkit for SME distributors." },
    { id: "VID-003", title: "WINLPG 10th Anniversary — Women Leading Energy Transition", speaker: "WINLPG Network — 45 Countries", duration: "22:18", thumbnail: "winlpg-anniversary", description: "A landmark celebration of 10 years of Women in LPG. WINLPG Mentorship Programme announced.", transcript: `Ten years ago, there was no WINLPG. Today we gather from 45 countries. I am proud to announce the WINLPG Mentorship Programme: 200 pairings in Year One.`, keyTopics: ["WINLPG 10th anniversary", "Gender diversity", "Mentorship programme", "Leadership", "Women in energy"], chatbotContext: "This video covers the WINLPG 10th Anniversary Forum at Rio 2025. WINLPG Mentorship Programme with 200 pairings, WLGA commitment to no all-male panels from 2026, 34% increase in women in senior LPG roles over 10 years (18% of leadership)." },
  ],
  "EVT-006": [
    { id: "VID-004", title: "Middle East LPG Trade: The New Global Hub", speaker: "James Rockall, CEO WLGA & Trading Panel", duration: "15:22", thumbnail: "middle-east-trade", description: "James Rockall and leading Middle East traders discuss the region's growing role as the global LPG innovation hub.", transcript: `The Middle East now accounts for 38% of global LPG exports. WLGA is today announcing a new Middle East Chapter coordination programme.`, keyTopics: ["Middle East LPG trade", "CP Aramco pricing", "AI trading tools", "WLGA Middle East Chapter"], chatbotContext: "This video covers the Middle East LPG trade session at the Muscat Summit. James Rockall announced the WLGA Middle East Chapter. Middle East accounts for 38% of global LPG exports, AI-powered price forecasting 70% better accuracy." },
    { id: "VID-005", title: "Infrastructure Investment: Closing the Emerging Market Gap", speaker: "National Gas Company Oman & Finance Panel", duration: "19:07", thumbnail: "infrastructure-investment", description: "Discussion on the $15 billion investment gap in emerging market LPG infrastructure and blended finance models.", transcript: `There is a $15 billion infrastructure investment gap in LPG distribution across Africa and South Asia. National Gas Company Oman will today commit $500 million to expanding regional storage and distribution infrastructure.`, keyTopics: ["$15B investment gap", "Blended finance", "Infrastructure development", "Africa", "Emerging markets"], chatbotContext: "This video covers the infrastructure investment session at Muscat 2025. NGC Oman announced $500 million commitment. $15 billion LPG infrastructure gap in Africa and South Asia, blended finance, WLGA regulatory framework guide Q1 2026." },
  ],
  "EVT-007": [
    { id: "VID-006", title: "Energy For All: LPG's Mandate in Africa", speaker: "African Energy Ministers & James Rockall", duration: "25:44", thumbnail: "cape-town-plenary", description: "The opening plenary from Cape Town 2024 — African ministers commit to LPG clean cooking programmes.", transcript: `600 million Africans still cook on fire and smoke. LPG has driven 70% of global clean-cooking gains since 2010. Combined clean cooking LPG programmes targeting 200 million African households before 2030.`, keyTopics: ["Energy access", "600 million Africans", "Clean cooking", "200 million households", "Africa strategy"], chatbotContext: "Opening plenary from Liquid Gas Week Cape Town 2024. Ministers committed to 200 million African households for LPG clean cooking by 2030. Kenya 70% LPG penetration by 2028, Nigeria subsidy reform, South Africa energy transition roadmap. 600 million Africans still on biomass." },
  ],
};

export const CHATBOT_QA = {
  "VID-001": [
    { q: "What programme did the Minister announce?", a: "The Brazilian Minister of Mines and Energy announced a federal programme providing first LPG cylinders and regulators at zero cost to 500,000 low-income families before the end of 2026." },
    { q: "What is Brazil's LPG penetration rate?", a: "Brazil has 97% household LPG penetration — the highest in the world — making it the global benchmark for LPG clean cooking success." },
    { q: "What is the event theme?", a: "Liquid Gas Week 2025 in Rio was held under the theme 'Delivering Energy for Life', underscoring LPG's transformative impact on billions of people globally." },
  ],
  "VID-002": [
    { q: "What did SHV Energy achieve with AI?", a: "SHV Energy used AI-powered cylinder fleet optimisation and computer vision to reduce empty-run deliveries by 19% over 18 months, saving significant operational costs and fuel consumption." },
    { q: "What is the WLGA AI Guide?", a: "The WLGA AI Guide for the LPG Industry is the first official WLGA publication dedicated to AI applications across the value chain, launched by the WLGA Youth Council at Rio 2025." },
    { q: "How did Pertamina use AI for safety?", a: "Pertamina Gas deployed a mobile safety inspection app to 4,200 field technicians in Indonesia, resulting in a 28% reduction in safety incident rates in the first year." },
  ],
  "VID-003": [
    { q: "What is the WINLPG Mentorship Programme?", a: "The WINLPG Mentorship Programme pairs 200 emerging female LPG industry leaders with C-suite executives across WLGA member companies. Applications opened at the 10th Anniversary Forum in Rio 2025." },
    { q: "What percentage of LPG leadership is female?", a: "Women now represent 18% of senior leadership positions in the LPG industry — a 34% increase over the 10 years since WINLPG was founded, though significant progress remains needed." },
    { q: "What panel commitment did WLGA make?", a: "WLGA committed that from 2026, no major WLGA conference panel will be all-male — a direct response to advocacy by WINLPG over its 10-year history." },
  ],
  "VID-004": [
    { q: "What share of global LPG exports does the Middle East account for?", a: "The Middle East accounts for 38% of global LPG exports, with Saudi Arabia, UAE, and Oman as the primary exporting nations." },
    { q: "What is the WLGA Middle East Chapter?", a: "The WLGA Middle East Chapter coordination programme was announced at the Muscat Summit, bringing together member companies across the Gulf region to share intelligence, align on advocacy, and raise operational standards." },
    { q: "How accurate are AI trading forecasting tools?", a: "AI-powered price forecasting tools are achieving 70% better accuracy in anticipating Saudi Aramco CP (Contract Price) movements compared to traditional models, according to the Muscat Summit trading panel." },
  ],
  "VID-005": [
    { q: "How large is the LPG infrastructure investment gap?", a: "There is an estimated $15 billion infrastructure investment gap in LPG distribution across Africa and South Asia over the next decade — representing both a challenge and a significant commercial opportunity." },
    { q: "What did NGC Oman commit to?", a: "National Gas Company (NGC) Oman committed $500 million to expanding regional storage and distribution infrastructure across the Gulf over the next 3 years, inviting partner companies to co-invest." },
    { q: "What are the three investment barriers?", a: "The three perceived barriers to LPG infrastructure investment in emerging markets are: (1) political risk, addressed through blended finance de-risking, (2) regulatory uncertainty, addressed through WLGA's regulatory framework programme, and (3) energy transition concerns, addressed by IEA Net Zero roadmap support for LPG access." },
  ],
  "VID-006": [
    { q: "How many Africans still cook on biomass?", a: "600 million Africans still cook on polluting solid biomass fuels — wood, charcoal, and dung — creating severe indoor air pollution, deforestation, and gender inequality." },
    { q: "What did Kenya commit to?", a: "Kenya committed to achieving 70% LPG household penetration by 2028, one of the most ambitious clean cooking targets set by an African government." },
    { q: "What is the 70% figure in the context of clean cooking?", a: "LPG has driven approximately 70% of all global clean-cooking gains since 2010 — making it the most proven pathway to addressing the SDG 7 cooking access gap, ahead of any other technology." },
  ],
};

// Re-export status/date helpers from utils for single import from eventsData
export { getEventStatus, getDaysUntilEvent } from "../utils/eventHelpers";

export function getUpcomingEvents() {
  return EVENTS.filter((e) => e.status === "upcoming").sort((a, b) => new Date(a.dates.start) - new Date(b.dates.start));
}

export function getPastEvents() {
  return EVENTS.filter((e) => e.status === "past").sort((a, b) => new Date(b.dates.start) - new Date(a.dates.start));
}

export function getFeaturedEvent() {
  return EVENTS.find((e) => e.featured) || getUpcomingEvents()[0];
}

export function getEventById(id) {
  return EVENTS.find((e) => e.id === id);
}
