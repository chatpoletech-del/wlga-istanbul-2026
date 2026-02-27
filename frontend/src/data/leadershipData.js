// WLGA LEADERSHIP PARTNER PROGRAMME — PRE-INSTALLED DATASET
// Based on real Leadership Partners from worldliquidgas.org/leadership-partner-programme
// Launched: 10 February 2026

export const PROGRAMME_INTRO = {
  launchDate: "10 February 2026",
  title: "WLGA Leadership Partner Programme",
  tagline: "Recognising the companies leading the industry and creating its future.",
  description: `The WLGA Leadership Partner Programme is an invitation-only initiative launched on 10th February 2026, recognising WLGA member companies that demonstrate outstanding leadership through strategic engagement, innovation, and active contributions to the global Liquid Gas industry.

Leadership Partners are the most senior, strategically engaged voices in the WLGA community. They shape industry direction through thought leadership, policymaker engagement, and active participation across WLGA's four strategic work streams: Advocacy, Safety & Business Improvement, Sustainable Growth & Innovation, and Communications & Awareness.

This private dashboard gives each Leadership Partner a real-time view of their engagement across WLGA's global initiatives — measuring impact, benchmarking performance, and surfacing the most relevant speaking and collaboration opportunities aligned to their strategic priorities.`,
  ceoQuote: {
    text: "The Leadership Partner Programme is a powerful new initiative of the WLGA that leverages industry leaders to support external engagement with policymakers and stakeholders, while acting as a multiplier for leadership, insight, and impact across the global Liquid Gas industry.",
    author: "James Rockall",
    title: "CEO and Managing Director, WLGA",
  },
  programmeCategories: [
    { id: "CAT-001", name: "Digital Intelligence", color: "#3B82F6", icon: "💡", description: "Leading digitalisation, data, and IoT innovation across the LPG value chain" },
    { id: "CAT-002", name: "Innovation", color: "#A855F7", icon: "⚡", description: "Driving R&D, new technologies, and next-generation energy solutions" },
    { id: "CAT-003", name: "Market Intelligence", color: "#E8A020", icon: "📊", description: "Delivering pricing data, analytics, and market transparency" },
    { id: "CAT-004", name: "Supply & Trading", color: "#EF4444", icon: "🔄", description: "Midstream infrastructure, NGL supply chains, and global LPG trade" },
    { id: "CAT-005", name: "Development", color: "#10B981", icon: "🌱", description: "Energy access, clean cooking, and sustainable development in emerging markets" },
    { id: "CAT-006", name: "Advocacy", color: "#F59E0B", icon: "🏛️", description: "Policy engagement, regulatory frameworks, and industry representation" },
  ],
  contact: {
    name: "Cinch Munson",
    title: "Director, Strategy, Partnerships, and Business Development",
    email: "cmunson@worldliquidgas.org",
  },
};

export const LEADERSHIP_PARTNERS = [
  {
    id: "LP-001",
    company: "Anova",
    country: "USA",
    flag: "🇺🇸",
    category: "CAT-001",
    categoryName: "Digital Intelligence",
    website: "https://www.anova.com",
    tagline: "Global leader in remote monitoring of industrial assets",
    description: "Anova is the global leader in remote monitoring of industrial assets, providing Industrial Internet of Things solutions for the LPG industry.",
    focusAreas: ["IoT & Remote Monitoring", "Digitalisation", "Safety Technology", "Operational Efficiency"],
    primaryContact: "Sarah Chen",
    contactTitle: "VP Global Partnerships",
    memberSince: 2018,
    lpProgrammeSince: "February 2026",
    engagement: {
      overallScore: 87,
      trend: "+5 vs last quarter",
      eventsAttended: [
        { name: "Liquid Gas Week Rio 2025", role: "Exhibitor + Panellist", date: "Sep 2025", points: 15 },
        { name: "WLGA Innovation Summit Tokyo 2026", role: "Presenter", date: "Mar 2026", points: 12 },
        { name: "WLGA Member Engagement Q1 2026", role: "Working Group Member", date: "Feb 2026", points: 8 },
      ],
      thoughtLeadership: [
        { title: "IoT Solutions Transforming LPG Cylinder Fleet Management", type: "White Paper", date: "Jan 2026", reach: "2,400 members", points: 10 },
        { title: "Remote Monitoring for Safety Compliance in Emerging Markets", type: "Webinar", date: "Nov 2025", reach: "380 attendees", points: 8 },
        { title: "Interview: The Voice Magazine — Digitalisation in LPG", type: "Media", date: "Oct 2025", reach: "3,200 readers", points: 6 },
      ],
      workingGroups: [
        { name: "Digitalisation Working Group", role: "Co-Chair", contributions: 7, points: 20 },
        { name: "Safety & Business Improvement", role: "Member", contributions: 3, points: 9 },
      ],
      policyEngagement: [
        { name: "IEA Clean Cooking Digital Infrastructure Consultation", role: "Industry Expert Witness", date: "Dec 2025", points: 12 },
      ],
      scoreBreakdown: { eventsAttended: 35, thoughtLeadership: 24, workingGroups: 29, policyEngagement: 12, memberCollaboration: 10, mediaPresence: 8 },
    },
  },
  {
    id: "LP-002",
    company: "DCC Energy",
    country: "Ireland",
    flag: "🇮🇪",
    category: "CAT-002",
    categoryName: "Innovation",
    website: "https://www.dcc.ie",
    tagline: "Customer-focused energy business, specialising in cleaner energy distribution",
    description: "DCC is a customer-focused energy business specialising in sales, marketing, and distribution of secure, cleaner energy solutions. FTSE 100, Dublin.",
    focusAreas: ["BioLPG", "Renewable Energy", "Clean Distribution", "Innovation"],
    primaryContact: "Michael O'Brien",
    contactTitle: "Head of LPG Strategy",
    memberSince: 2010,
    lpProgrammeSince: "February 2026",
    engagement: {
      overallScore: 92,
      trend: "+8 vs last quarter",
      eventsAttended: [
        { name: "Liquid Gas Week Rio 2025", role: "Platinum Sponsor + Keynote Panellist", date: "Sep 2025", points: 20 },
        { name: "Liquid Gas Week Cape Town 2024", role: "Gold Sponsor + Exhibition", date: "Oct 2024", points: 18 },
        { name: "WLGA Member Engagement Q4 2025", role: "Working Group Chair", date: "Nov 2025", points: 10 },
        { name: "WLGA Innovation Summit Tokyo 2026", role: "Invited Speaker", date: "Mar 2026", points: 12 },
      ],
      thoughtLeadership: [
        { title: "The BioLPG Commercial Pathway: DCC's 2030 Strategy", type: "Report", date: "Feb 2026", reach: "5,100 members + media", points: 12 },
        { title: "Decarbonising Residential Heating with Renewable LPG", type: "Policy Brief", date: "Dec 2025", reach: "EU Commission, IEA", points: 15 },
        { title: "WLGA The Voice: Innovation Leadership Interview", type: "Media", date: "Jan 2026", reach: "4,200 readers", points: 8 },
      ],
      workingGroups: [
        { name: "Sustainable Growth & Innovation", role: "Chair", contributions: 11, points: 25 },
        { name: "BioLPG Certification Working Group", role: "Founding Member", contributions: 8, points: 18 },
      ],
      policyEngagement: [
        { name: "EU RED III Implementation Consultation", role: "Industry Representative", date: "Nov 2025", points: 15 },
        { name: "IEA Net Zero Working Group", role: "LPG Industry Expert", date: "Sep 2025", points: 12 },
      ],
      scoreBreakdown: { eventsAttended: 60, thoughtLeadership: 35, workingGroups: 43, policyEngagement: 27, memberCollaboration: 18, mediaPresence: 15 },
    },
  },
  {
    id: "LP-003",
    company: "OPIS",
    country: "USA",
    flag: "🇺🇸",
    category: "CAT-003",
    categoryName: "Market Intelligence",
    website: "https://www.opis.com",
    tagline: "Trusted data and insights for global energy and chemical markets",
    description: "OPIS delivers trusted data and insights for energy and chemical markets worldwide. Industry-recognised benchmarks for LPG markets.",
    focusAreas: ["LPG Pricing Benchmarks", "Market Intelligence", "Trading Analytics", "Price Risk Management"],
    primaryContact: "Jennifer Walsh",
    contactTitle: "VP Energy Partnerships",
    memberSince: 2015,
    lpProgrammeSince: "February 2026",
    engagement: {
      overallScore: 79,
      trend: "+2 vs last quarter",
      eventsAttended: [
        { name: "Liquid Gas Week Rio 2025", role: "Gold Sponsor + Data Partner", date: "Sep 2025", points: 18 },
        { name: "WLGA Middle East Summit Muscat 2025", role: "Market Intelligence Speaker", date: "Nov 2025", points: 15 },
        { name: "WLGA Member Engagement Q2 2026", role: "Working Group Member", date: "May 2026", points: 8 },
      ],
      thoughtLeadership: [
        { title: "Global LPG Price Outlook H1 2026", type: "Market Report", date: "Jan 2026", reach: "2,800 industry subscribers", points: 10 },
        { title: "CP Aramco vs Spot: Evolving Pricing Dynamics", type: "Webinar", date: "Dec 2025", reach: "520 traders", points: 8 },
      ],
      workingGroups: [
        { name: "Market Intelligence Working Group", role: "Data Provider", contributions: 9, points: 18 },
        { name: "Advocacy — Policy Data Support", role: "Contributor", contributions: 4, points: 10 },
      ],
      policyEngagement: [
        { name: "G20 Energy Transition LPG Data Submission", role: "Data Provider", date: "Oct 2025", points: 10 },
      ],
      scoreBreakdown: { eventsAttended: 41, thoughtLeadership: 18, workingGroups: 28, policyEngagement: 10, memberCollaboration: 12, mediaPresence: 9 },
    },
  },
  {
    id: "LP-004",
    company: "PERC",
    country: "USA",
    flag: "🇺🇸",
    category: "CAT-002",
    categoryName: "Innovation",
    website: "https://propane.com",
    tagline: "Leading propane safety, training, and R&D investment",
    description: "The Propane Education & Research Council (PERC) provides leading propane safety and training programs and invests in R&D of new propane-powered technologies.",
    focusAreas: ["Safety Training", "R&D", "Propane Technology", "Industry Education"],
    primaryContact: "Tucker Perkins",
    contactTitle: "President & CEO",
    memberSince: 2012,
    lpProgrammeSince: "February 2026",
    engagement: {
      overallScore: 84,
      trend: "+3 vs last quarter",
      eventsAttended: [
        { name: "Liquid Gas Week Rio 2025", role: "Speaker — Digital & Safety Session", date: "Sep 2025", points: 15 },
        { name: "Liquid Gas Week Cape Town 2024", role: "Panellist — Energy Access", date: "Oct 2024", points: 12 },
        { name: "WLGA Member Engagement Q3 2025", role: "Safety Working Group", date: "Aug 2025", points: 8 },
      ],
      thoughtLeadership: [
        { title: "Propane Technology Innovation Report 2025", type: "Annual Report", date: "Dec 2025", reach: "Industry-wide", points: 12 },
        { title: "Safety Training Best Practices for Emerging Markets", type: "Good Practice Guide", date: "Oct 2025", reach: "WLGA members + NGOs", points: 10 },
        { title: "Autogas R&D: Next-Generation Vehicle Integration", type: "Technical Paper", date: "Sep 2025", reach: "1,800 engineers", points: 8 },
      ],
      workingGroups: [
        { name: "Safety & Business Improvement", role: "Co-Chair", contributions: 10, points: 22 },
        { name: "Communications & Awareness", role: "Member", contributions: 5, points: 12 },
      ],
      policyEngagement: [
        { name: "US EPA Clean Fuel Standards Consultation", role: "Industry Representative", date: "Jan 2026", points: 12 },
        { name: "UNECE Vehicle Regulations Working Group", role: "Technical Expert", date: "Nov 2025", points: 10 },
      ],
      scoreBreakdown: { eventsAttended: 35, thoughtLeadership: 30, workingGroups: 34, policyEngagement: 22, memberCollaboration: 15, mediaPresence: 11 },
    },
  },
  {
    id: "LP-005",
    company: "S&P Global",
    country: "USA",
    flag: "🇺🇸",
    category: "CAT-005",
    categoryName: "Development",
    website: "https://www.spglobal.com",
    tagline: "Essential Intelligence® for global energy and commodities markets",
    description: "S&P Global provides Essential Intelligence through data, technologies, and expert analysis for global energy and commodities markets.",
    focusAreas: ["Energy Data & Analytics", "Market Research", "Sustainability Intelligence", "Industry Events"],
    primaryContact: "Dr. Carlos Pascual",
    contactTitle: "VP Global Energy Advisory",
    memberSince: 2008,
    lpProgrammeSince: "February 2026",
    engagement: {
      overallScore: 91,
      trend: "+11 vs last quarter",
      eventsAttended: [
        { name: "Liquid Gas Week Rio 2025", role: "Platinum Sponsor + Research Keynote", date: "Sep 2025", points: 20 },
        { name: "WLGA Middle East Summit Muscat 2025", role: "Data & Analytics Partner", date: "Nov 2025", points: 15 },
        { name: "Liquid Gas Week Istanbul 2026", role: "Headline Sponsor (confirmed)", date: "Oct 2026", points: 20 },
        { name: "WLGA Innovation Summit Tokyo 2026", role: "Industry Outlook Speaker", date: "Mar 2026", points: 12 },
      ],
      thoughtLeadership: [
        { title: "Global LPG Outlook 2026–2030: Demand, Supply, and Price Scenarios", type: "CERA Report", date: "Feb 2026", reach: "Global industry + policymakers", points: 18 },
        { title: "Energy Transition and LPG: Risk and Opportunity Analysis", type: "Research", date: "Jan 2026", reach: "G20 Energy Ministries + WLGA members", points: 15 },
        { title: "Platts LPG Price Assessment: Methodology Review", type: "Technical Paper", date: "Nov 2025", reach: "Global traders", points: 10 },
      ],
      workingGroups: [
        { name: "Advocacy", role: "Senior Advisor", contributions: 12, points: 28 },
        { name: "Sustainable Growth & Innovation", role: "Data Partner", contributions: 8, points: 18 },
      ],
      policyEngagement: [
        { name: "IEA Net Zero 2050 Industry Advisory", role: "Contributing Author", date: "Dec 2025", points: 18 },
        { name: "COP30 LPG Industry Position Paper", role: "Lead Author", date: "Nov 2025", points: 15 },
        { name: "G20 Energy Ministers LPG Data Briefing", role: "Presenter", date: "Sep 2025", points: 12 },
      ],
      scoreBreakdown: { eventsAttended: 67, thoughtLeadership: 43, workingGroups: 46, policyEngagement: 45, memberCollaboration: 22, mediaPresence: 19 },
    },
  },
  {
    id: "LP-006",
    company: "Suburban Propane",
    country: "USA",
    flag: "🇺🇸",
    category: "CAT-006",
    categoryName: "Advocacy",
    website: "https://www.suburbanpropane.com",
    tagline: "Nationwide propane distributor serving ~1 million customers across 42 US states",
    description: "Suburban Propane Partners, L.P. is a publicly traded MLP on the NYSE. Nationwide distributor of propane, renewable propane, RNG, and fuel oil.",
    focusAreas: ["Propane Distribution", "Renewable Propane", "Advocacy", "Community Engagement"],
    primaryContact: "Michael Stivala",
    contactTitle: "President & CEO",
    memberSince: 2005,
    lpProgrammeSince: "February 2026",
    engagement: {
      overallScore: 76,
      trend: "+1 vs last quarter",
      eventsAttended: [
        { name: "Liquid Gas Week Rio 2025", role: "Delegate + Panel Speaker", date: "Sep 2025", points: 15 },
        { name: "WLGA Member Engagement Q1 2026", role: "Advocacy Working Group", date: "Feb 2026", points: 8 },
        { name: "Liquid Gas Week Cape Town 2024", role: "Delegate", date: "Oct 2024", points: 10 },
      ],
      thoughtLeadership: [
        { title: "Renewable Propane: The North American Roadmap", type: "Position Paper", date: "Jan 2026", reach: "US Congress + WLGA", points: 12 },
        { title: "Community LPG Access: 100 Years of Customer Service", type: "Impact Report", date: "Nov 2025", reach: "1M+ customers + investors", points: 8 },
      ],
      workingGroups: [
        { name: "Advocacy", role: "Member", contributions: 6, points: 14 },
        { name: "Communications & Awareness", role: "Contributor", contributions: 4, points: 10 },
      ],
      policyEngagement: [
        { name: "US EPA Renewable Fuel Standard Consultation", role: "Industry Representative", date: "Dec 2025", points: 12 },
      ],
      scoreBreakdown: { eventsAttended: 33, thoughtLeadership: 20, workingGroups: 24, policyEngagement: 12, memberCollaboration: 10, mediaPresence: 7 },
    },
  },
  {
    id: "LP-007",
    company: "Targa Resources",
    country: "USA",
    flag: "🇺🇸",
    category: "CAT-004",
    categoryName: "Supply & Trading",
    website: "https://www.targaresources.com",
    tagline: "Leading North American midstream infrastructure and NGL supply chain provider",
    description: "Targa Resources is a leading provider of midstream services and one of the largest independent infrastructure companies in North America.",
    focusAreas: ["Midstream Infrastructure", "NGL Supply Chain", "LPG Export", "Energy Infrastructure"],
    primaryContact: "Matthew Meloy",
    contactTitle: "President & CEO",
    memberSince: 2016,
    lpProgrammeSince: "February 2026",
    engagement: {
      overallScore: 82,
      trend: "+6 vs last quarter",
      eventsAttended: [
        { name: "Liquid Gas Week Rio 2025", role: "Gold Sponsor + Trading Panel", date: "Sep 2025", points: 18 },
        { name: "WLGA Middle East Summit Muscat 2025", role: "Supply Chain Speaker", date: "Nov 2025", points: 15 },
        { name: "WLGA Innovation Summit Tokyo 2026", role: "NGL Infrastructure Presenter", date: "Mar 2026", points: 12 },
      ],
      thoughtLeadership: [
        { title: "US LPG Export Capacity: 2026–2030 Infrastructure Outlook", type: "Market Intelligence", date: "Feb 2026", reach: "Global LPG traders + investors", points: 12 },
        { title: "Midstream Safety: Zero Incident Operations Framework", type: "Best Practice Guide", date: "Dec 2025", reach: "WLGA Safety WG", points: 8 },
      ],
      workingGroups: [
        { name: "Supply Chain & Logistics Working Group", role: "Chair", contributions: 8, points: 20 },
        { name: "Safety & Business Improvement", role: "Member", contributions: 5, points: 12 },
      ],
      policyEngagement: [
        { name: "US DOE LPG Export Regulatory Framework", role: "Industry Input", date: "Jan 2026", points: 10 },
        { name: "FERC Natural Gas Pipeline Safety Review", role: "Technical Expert", date: "Oct 2025", points: 8 },
      ],
      scoreBreakdown: { eventsAttended: 45, thoughtLeadership: 20, workingGroups: 32, policyEngagement: 18, memberCollaboration: 14, mediaPresence: 10 },
    },
  },
  {
    id: "LP-008",
    company: "TotalEnergies",
    country: "France",
    flag: "🇫🇷",
    category: "CAT-005",
    categoryName: "Development",
    website: "https://www.totalenergies.com",
    tagline: "Global integrated energy company committed to more reliable, affordable, and sustainable energy",
    description: "TotalEnergies is a global integrated energy company producing and marketing oil, biofuels, natural gas, green gases, renewable energies, and electricity. Operations in ~120 countries.",
    focusAreas: ["BioLPG Production", "Clean Cooking Africa", "Renewable Energy", "Global LPG Supply"],
    primaryContact: "Patrick Pouyanné",
    contactTitle: "Chairman & CEO",
    memberSince: 2001,
    lpProgrammeSince: "February 2026",
    engagement: {
      overallScore: 95,
      trend: "+9 vs last quarter",
      eventsAttended: [
        { name: "Liquid Gas Week Rio 2025", role: "Platinum Sponsor + Keynote Speaker", date: "Sep 2025", points: 20 },
        { name: "IEA Clean Cooking Ministerial Nairobi 2026", role: "Industry Co-Chair", date: "Jul 2026", points: 20 },
        { name: "WLGA Innovation Summit Tokyo 2026", role: "BioLPG Keynote", date: "Mar 2026", points: 15 },
        { name: "Liquid Gas Week Cape Town 2024", role: "Platinum Sponsor + Keynote", date: "Oct 2024", points: 20 },
        { name: "WLGA Middle East Summit Muscat 2025", role: "Title Sponsor", date: "Nov 2025", points: 18 },
      ],
      thoughtLeadership: [
        { title: "BioLPG Scale-up: TotalEnergies 2026 Production Target", type: "Announcement", date: "Feb 2026", reach: "Global media + WLGA members", points: 18 },
        { title: "Clean Cooking for Africa: TotalEnergies $200M Commitment", type: "Press Release + WLGA Joint", date: "Jan 2026", reach: "UN, IEA, 50+ NGOs, global media", points: 22 },
        { title: "Decarbonising LPG Distribution: A 10-Year Roadmap", type: "White Paper", date: "Dec 2025", reach: "Industry + policymakers", points: 15 },
        { title: "WLGA The Voice Magazine — CEO Interview", type: "Media", date: "Oct 2025", reach: "5,000+ readers", points: 10 },
      ],
      workingGroups: [
        { name: "Sustainable Growth & Innovation", role: "Co-Chair", contributions: 14, points: 30 },
        { name: "BioLPG Certification Working Group", role: "Founding Co-Chair", contributions: 12, points: 26 },
        { name: "Advocacy", role: "Senior Advisor", contributions: 10, points: 22 },
      ],
      policyEngagement: [
        { name: "COP30 LPG Industry Delegation Leader", role: "Head of Delegation", date: "Nov 2025", points: 22 },
        { name: "IEA Net Zero 2050 LPG Advisory Panel", role: "Lead", date: "Dec 2025", points: 18 },
        { name: "EU BioLPG Regulatory Framework", role: "Industry Representative", date: "Jan 2026", points: 15 },
        { name: "UN SDG7 Clean Cooking Expert Group", role: "Industry Co-Chair", date: "Sep 2025", points: 18 },
      ],
      scoreBreakdown: { eventsAttended: 93, thoughtLeadership: 65, workingGroups: 78, policyEngagement: 73, memberCollaboration: 35, mediaPresence: 28 },
    },
  },
];

export const QUARTERLY_REPORTS = {
  "LP-001": {
    quarter: "Q1 2026",
    generatedDate: "1 April 2026",
    partnerName: "Anova",
    executiveSummary: "Anova delivered a strong Q1 2026 performance as a WLGA Leadership Partner, with an engagement score of 87/100 — 5 points above the Leadership Partner average of 82. Your IoT and remote monitoring thought leadership continues to position Anova as the definitive voice on digitalisation within the global LPG industry. Your co-chairmanship of the Digitalisation Working Group drove 7 concrete deliverables in Q1, including the WLGA Digital Transformation Toolkit published in February 2026.",
    pillarPerformance: [
      { pillar: "Events & Presence", score: 35, max: 40, comment: "Exceptional — presented at both Rio 2025 and Tokyo 2026. Consider submitting an abstract for Istanbul 2026 main stage." },
      { pillar: "Thought Leadership", score: 24, max: 35, comment: "Good output. The IoT white paper reached 2,400 readers. A technical standard proposal could significantly boost this pillar." },
      { pillar: "Working Group Impact", score: 29, max: 35, comment: "Strong. Your Digitalisation WG co-chairmanship produced 7 deliverables — the highest in this pillar among all partners." },
      { pillar: "Policy Engagement", score: 12, max: 25, comment: "This is your growth area. One policy engagement in Q1. The IEA Digital Infrastructure consultation is available in Q2 — we recommend participation." },
    ],
    keyAchievements: [
      "Co-chaired the Digitalisation Working Group — 7 deliverables delivered in Q1",
      "White paper reached 2,400 WLGA members — highest IoT content reach in 12 months",
      "Presented at WLGA Innovation Summit Tokyo 2026 to 280 senior industry leaders",
      "Contributed expertise to IEA Clean Cooking Digital Infrastructure Consultation",
    ],
    opportunitiesIdentified: [
      { title: "Istanbul 2026 — Digitalisation Keynote", type: "Speaking", deadline: "30 June 2026", relevance: "98%", description: "The Istanbul main stage has a dedicated 'Digital Transformation' session. WLGA recommends Anova as the lead speaker given your WG chairmanship." },
      { title: "WLGA AI Guide Chapter — IoT Standards", type: "Thought Leadership", deadline: "15 May 2026", relevance: "95%", description: "WLGA is updating the AI Guide with a new IoT standards chapter. Your expertise makes Anova the ideal co-author." },
      { title: "IEA Clean Cooking Digital Infra Q2 Consultation", type: "Policy", deadline: "20 May 2026", relevance: "88%", description: "Follow-up to your December 2025 participation. This is the final input window before IEA publishes formal guidance." },
    ],
    nextQuarterPriorities: [
      "Submit abstract for Istanbul 2026 Digitalisation main stage session",
      "Author IoT Standards chapter for WLGA AI Guide (due May 15)",
      "Participate in IEA Clean Cooking Digital Infrastructure Q2 consultation",
      "Explore co-branding with WLGA for a joint digital safety standards brief",
    ],
    benchmarkNote: "Anova ranks 4th out of 8 Leadership Partners by overall engagement score (87/100). Your strongest pillar is Working Group Impact — you lead all partners in this dimension. Your growth opportunity is Policy Engagement, where you currently rank 7th.",
  },
  "LP-008": {
    quarter: "Q1 2026",
    generatedDate: "1 April 2026",
    partnerName: "TotalEnergies",
    executiveSummary: "TotalEnergies delivered an extraordinary Q1 2026 as WLGA's highest-ranked Leadership Partner, achieving an engagement score of 95/100 — the highest across all 8 partners and 13 points above the Leadership Partner average. Your leadership across BioLPG, clean cooking, and COP30 advocacy has made TotalEnergies the most impactful individual industry voice in global LPG policy in Q1 2026. The $200M clean cooking commitment announced jointly with WLGA in January received coverage in over 180 global media outlets.",
    pillarPerformance: [
      { pillar: "Events & Presence", score: 93, max: 100, comment: "Exceptional across all events. Platinum presence at 5 WLGA events in 12 months — the highest of all partners." },
      { pillar: "Thought Leadership", score: 65, max: 80, comment: "Outstanding. The $200M clean cooking announcement generated the highest WLGA media coverage of any partner publication in 3 years." },
      { pillar: "Working Group Impact", score: 78, max: 90, comment: "You chair or co-chair 3 working groups simultaneously — an unprecedented level of commitment." },
      { pillar: "Policy Engagement", score: 73, max: 80, comment: "Exceptional — you led COP30 delegation and co-chaired the UN SDG7 expert group. Consider the G20 Energy Ministers briefing in Q2." },
    ],
    keyAchievements: [
      "Led WLGA's COP30 industry delegation — the most visible LPG presence at a UN climate conference in history",
      "Announced $200M clean cooking commitment jointly with WLGA — covered by 180+ global media",
      "Co-chaired BioLPG Certification Working Group: global certification framework published March 2026",
      "Delivered BioLPG keynote at Tokyo Innovation Summit — cited by IEA in Net Zero working paper",
    ],
    opportunitiesIdentified: [
      { title: "Istanbul 2026 — Opening Plenary Keynote", type: "Speaking", deadline: "30 June 2026", relevance: "99%", description: "WLGA proposes TotalEnergies CEO as co-keynote with Dr. Fatih Birol at the Istanbul opening plenary." },
      { title: "G20 Energy Ministers Clean Cooking Briefing — Q2", type: "Policy", deadline: "25 May 2026", relevance: "97%", description: "Follow-up to COP30. G20 energy ministers meet in June — WLGA recommends TotalEnergies as industry representative." },
      { title: "WLGA/IEA Joint BioLPG Scaling Report", type: "Thought Leadership", deadline: "30 June 2026", relevance: "96%", description: "IEA has requested WLGA co-author a global BioLPG scaling report. TotalEnergies is the natural lead contributor." },
    ],
    nextQuarterPriorities: [
      "Confirm Istanbul 2026 opening plenary co-keynote with Dr. Fatih Birol",
      "Represent industry at G20 Energy Ministers meeting on clean cooking (June)",
      "Lead contribution to WLGA/IEA Joint BioLPG Scaling Report",
      "Expand BioLPG Certification WG to include 3 additional Asian member markets",
    ],
    benchmarkNote: "TotalEnergies ranks 1st out of 8 Leadership Partners on all engagement dimensions. You lead in Events (93/100), Thought Leadership (65/80), Working Groups (78/90), and Policy Engagement (73/80). You set the benchmark for all other partners across every category.",
  },
};

export const BENCHMARK_DATA = {
  programmeAverage: { overallScore: 83.3, eventsAttended: 46, thoughtLeadership: 29, workingGroups: 36, policyEngagement: 24, memberCollaboration: 17, mediaPresence: 12 },
  topPerformerAnon: { overallScore: 95, eventsAttended: 93, thoughtLeadership: 65, workingGroups: 78, policyEngagement: 73, label: "Partner A (Digital Intelligence category leader)" },
  categoryAverages: { "CAT-001": 87, "CAT-002": 88, "CAT-003": 79, "CAT-004": 82, "CAT-005": 93, "CAT-006": 76 },
};

export const ALL_OPPORTUNITIES = [
  { id: "OPP-001", title: "Istanbul 2026 — Main Stage Speaking Slot", type: "Speaking Opportunity", event: "Liquid Gas Week Istanbul 2026", deadline: "30 June 2026", dateOfActivity: "12–16 October 2026", relevantCategories: ["CAT-001", "CAT-002", "CAT-003", "CAT-004", "CAT-005", "CAT-006"], description: "WLGA is now accepting abstracts for main stage sessions at Liquid Gas Week Istanbul 2026. Leadership Partners are given priority consideration for keynote and panel speaking slots.", potentialReach: "2,000+ delegates, 75+ countries, global media", pointsValue: 20, urgency: "high" },
  { id: "OPP-002", title: "BioLPG Certification Working Group — Q2 Chair", type: "Working Group", event: "Ongoing", deadline: "15 May 2026", dateOfActivity: "From June 2026", relevantCategories: ["CAT-002", "CAT-005"], description: "The BioLPG Certification Working Group needs a Q2 2026 co-chair. This is a high-visibility role that directly influences emerging global certification standards.", potentialReach: "14 countries, EU Commission, IEA", pointsValue: 25, urgency: "high" },
  { id: "OPP-003", title: "WLGA/IEA Joint BioLPG Scaling Report — Contributing Author", type: "Thought Leadership", event: "WLGA/IEA Publication", deadline: "30 June 2026", dateOfActivity: "Publication: September 2026", relevantCategories: ["CAT-002", "CAT-005"], description: "IEA has requested WLGA co-author a global BioLPG scaling report for release ahead of Istanbul 2026.", potentialReach: "IEA global distribution, G20 Energy Ministers, 180+ WLGA members", pointsValue: 18, urgency: "medium" },
  { id: "OPP-004", title: "IEA Clean Cooking Q2 Digital Consultation", type: "Policy Engagement", event: "IEA Consultation", deadline: "20 May 2026", dateOfActivity: "May–June 2026", relevantCategories: ["CAT-001", "CAT-005"], description: "Follow-up to the December 2025 consultation. The IEA is finalising guidance on digital infrastructure for clean cooking LPG delivery.", potentialReach: "IEA member countries, UN SDG7 working group", pointsValue: 12, urgency: "medium" },
  { id: "OPP-005", title: "WLGA Digital Transformation Toolkit — Co-Author", type: "Thought Leadership", event: "WLGA Publication", deadline: "31 May 2026", dateOfActivity: "Publication: July 2026", relevantCategories: ["CAT-001"], description: "WLGA is developing a Digital Transformation Toolkit for SME LPG distributors.", potentialReach: "300+ WLGA member companies, 125 countries", pointsValue: 10, urgency: "low" },
  { id: "OPP-006", title: "G20 Energy Ministers Clean Cooking Briefing", type: "Policy Engagement", event: "G20 Energy Ministers Meeting", deadline: "25 May 2026", dateOfActivity: "June 2026", relevantCategories: ["CAT-005", "CAT-006"], description: "G20 Energy Ministers meet in June 2026. WLGA is preparing an industry briefing and requires Leadership Partners to provide market intelligence.", potentialReach: "G20 governments, global media, IEA", pointsValue: 15, urgency: "high" },
  { id: "OPP-007", title: "Middle East LPG Summit 2026 — Founding Sponsor", type: "Event Sponsorship", event: "WLGA Middle East Summit 2026", deadline: "1 September 2026", dateOfActivity: "Q4 2026 (date TBC)", relevantCategories: ["CAT-003", "CAT-004"], description: "WLGA is planning a second Middle East LPG Summit following the success of Muscat 2025.", potentialReach: "2,000+ Middle East & global delegates", pointsValue: 18, urgency: "low" },
  { id: "OPP-008", title: "WINLPG Mentorship Programme — Corporate Champion", type: "Industry Initiative", event: "Ongoing", deadline: "31 May 2026", dateOfActivity: "From June 2026", relevantCategories: ["CAT-001", "CAT-002", "CAT-003", "CAT-004", "CAT-005", "CAT-006"], description: "WLGA is seeking Leadership Partner companies to champion the WINLPG Mentorship Programme.", potentialReach: "200 mentees, global WLGA visibility", pointsValue: 12, urgency: "medium" },
];

export function getPartnerById(id) {
  return LEADERSHIP_PARTNERS.find((p) => p.id === id);
}
export function getOpportunitiesForPartner(partner) {
  return ALL_OPPORTUNITIES.filter((opp) => opp.relevantCategories.includes(partner.category)).sort((a, b) => {
    const urgencyOrder = { high: 0, medium: 1, low: 2 };
    return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
  });
}
export function getScoreColor(score) {
  if (score >= 90) return "#10B981";
  if (score >= 80) return "#E8A020";
  if (score >= 70) return "#3B82F6";
  return "#EF4444";
}
export function getScoreLabel(score) {
  if (score >= 90) return "Exceptional";
  if (score >= 80) return "Strong";
  if (score >= 70) return "Good";
  return "Developing";
}
export function getRankAmongPartners(partnerId) {
  const sorted = [...LEADERSHIP_PARTNERS].sort((a, b) => b.engagement.overallScore - a.engagement.overallScore);
  return sorted.findIndex((p) => p.id === partnerId) + 1;
}
export function getCategoryAvg(categoryId) {
  const catPartners = LEADERSHIP_PARTNERS.filter((p) => p.category === categoryId);
  if (!catPartners.length) return 0;
  return Math.round(catPartners.reduce((sum, p) => sum + p.engagement.overallScore, 0) / catPartners.length);
}
