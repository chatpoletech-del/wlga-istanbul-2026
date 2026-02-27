// WLGA rLPG INNOVATION TRACKER — PRE-INSTALLED DATASET
// Last simulated refresh: Week of 24 February 2026

export const TRACKER_META = {
  lastRefreshed: "24 February 2026, 08:00 UTC",
  nextDigestDate: "3 March 2026",
  monitoredSources: 247,
  totalProjectsTracked: 34,
  totalPatentsMonitored: 189,
  activeThreatAlerts: 3,
  weeklyDigestNumber: 12,
};

export const INTRO = {
  title: "rLPG Innovation Tracker",
  badge: "WLGA Sustainable Growth & Innovation Working Group",
  tagline: "Real-time global intelligence on Renewable LPG, BioLPG, and the decarbonisation frontier.",
  description: `The rLPG Innovation Tracker is WLGA's dedicated intelligence platform for monitoring the global Renewable LPG and BioLPG innovation ecosystem. It serves the Sustainable Growth & Innovation (SGI) Working Group with weekly AI-curated intelligence across four domains: active rLPG/BioLPG projects worldwide, emerging patents and academic research, government grants and startup funding, and competitor energy association policy positions that require WLGA counter-response.

Renewable LPG (rLPG) and BioLPG are WLGA's #1 decarbonisation narrative with policymakers. BioLPG delivers up to 90% carbon savings versus conventional LPG and is chemically identical — meaning existing infrastructure, appliances, and distribution networks require zero modification. As the hydrogen and biomass lobbies intensify their policy campaigns, WLGA must track competitor narratives in real time and respond with evidence-based counter-positions.

This tracker monitors 247 global sources — including patent databases (USPTO, EPO), academic repositories (Scopus, Web of Science), government grant portals (EU Horizon, US DOE, UK DESNZ), and energy association publications — updating weekly to deliver the SGI Working Group a single, curated intelligence view of the rLPG innovation landscape.`,
  keyStats: [
    { value: "~500K tonnes/yr", label: "Current global HVO BioLPG production capacity", trend: "↑ 2-3x by 2028" },
    { value: "90%", label: "Max carbon savings of BioLPG vs conventional LPG", trend: "Feedstock dependent" },
    { value: "$15B+", label: "Global rLPG infrastructure investment needed by 2035", trend: "Opportunity" },
    { value: "19.8%", label: "EU BioLPG market growth projected 2026–2035", trend: "↑ Accelerating" },
  ],
};

export const PROJECTS = [
  { id: "PRJ-001", name: "Cool LPG — GTI Energy / rLPG North America Consortium", type: "Technology Development", status: "active", stage: "Pilot", country: "USA", region: "North America", city: "Chicago, IL", lat: 41.8781, lng: -87.6298, organisations: ["GTI Energy", "rLPG North America", "BioLPG LLC"], technology: "Biogas-to-rLPG (Cool LPG process)", feedstock: "Dairy waste, animal waste, landfill gas", carbonIntensity: "Negative CI (carbon negative)", capacity: "Pilot scale — prototype plant targeted 2026–2027", investment: "Undisclosed consortium funding", description: "The Cool LPG process converts biogas through a dry reformer into syngas, then to methanol, then to renewable propane and butane. rLPG North America consortium is co-funding R&D to commercialise the technology.", wlgaRelevance: "Critical — leading on-purpose rLPG production pathway independent of HVO.", lastUpdate: "January 2025", sourceUrl: "https://www.worldliquidgas.org/news/energy-companies-accelerate-speed-of-development-of-cool-lpg-technology/", color: "#00FF88", dotSize: "large" },
  { id: "PRJ-002", name: "Blossman Gas — 15M Gallon rLPG Transport Deployment", type: "Commercial Deployment", status: "active", stage: "Commercial", country: "USA", region: "North America", city: "Multiple US States", lat: 35.0, lng: -90.0, organisations: ["Blossman Gas", "rLPG North America"], technology: "HVO co-product renewable propane", feedstock: "Fats, oils, and grease (FOG)", carbonIntensity: "~70% reduction vs fossil LPG", capacity: "15+ million gallons/year by 2025", investment: "Private — Blossman Gas balance sheet", description: "Blossman Gas is deploying over 15 million gallons of renewable LPG into the US transportation sector.", wlgaRelevance: "High — showcases real commercial-scale deployment.", lastUpdate: "October 2024", sourceUrl: "https://www.worldliquidgas.org/news/renewable-liquid-gas-gains-momentum-in-the-u-s-transportation-sector/", color: "#00FF88", dotSize: "large" },
  { id: "PRJ-003", name: "SHV Energy / Futuria Fuels — 100% Renewable by 2040", type: "Corporate Decarbonisation Programme", status: "active", stage: "Scale-up", country: "Netherlands", region: "Europe", city: "The Hague", lat: 52.0705, lng: 4.3007, organisations: ["SHV Energy", "Futuria Fuels"], technology: "HVO BioLPG + Power-to-X", feedstock: "Used cooking oil (UCO), waste fats and oils", carbonIntensity: "Up to 90% reduction", capacity: "Target 100% renewable product portfolio by 2040", investment: "Part of SHV Energy's corporate decarbonisation investment", description: "Futuria Fuels is rolling out BioLPG across Europe. Signed deal with L'Oréal for 150 tonnes/year BioLPG from UCO.", wlgaRelevance: "Very high — largest single corporate commitment to 100% renewable liquid gas.", lastUpdate: "July 2024", sourceUrl: "https://www.worldliquidgas.org/story/bio-sourced-lpg-a-fully-renewable-fuel-for-the-future/", color: "#00FF88", dotSize: "large" },
  { id: "PRJ-004", name: "Friedrich Scharr KG + GLG Energy — Europe Cool LPG Partners", type: "Technology Development", status: "active", stage: "Research", country: "Germany / Italy", region: "Europe", city: "Stuttgart / Milan", lat: 48.7758, lng: 9.1829, organisations: ["Friedrich Scharr KG", "GLG Energy S.r.l.", "GTI Energy"], technology: "Cool LPG (biogas-to-rLPG)", feedstock: "Agricultural biogas, municipal waste", carbonIntensity: "Negative CI potential", capacity: "R&D — targeting European pilot deployment", investment: "Consortium R&D funding", description: "German and Italian LPG distributors joined the Cool LPG consortium for European application.", wlgaRelevance: "High — European beachhead for Cool LPG pathway.", lastUpdate: "February 2023", sourceUrl: "https://www.worldliquidgas.org/news/energy-companies-accelerate-speed-of-development-of-cool-lpg-technology/", color: "#00FF88", dotSize: "medium" },
  { id: "PRJ-005", name: "Primagaz (SHV) — L'Oréal BioLPG Industrial Supply Deal", type: "Commercial B2B Deployment", status: "active", stage: "Commercial", country: "France", region: "Europe", city: "Paris", lat: 48.8566, lng: 2.3522, organisations: ["Primagaz", "SHV Energy", "L'Oréal"], technology: "HVO BioLPG", feedstock: "Used cooking oil exclusively", carbonIntensity: "~90% CO2 reduction vs oil", capacity: "150 tonnes/year over 5 years", investment: "Commercial contract — €3M+ estimated value", description: "Primagaz delivering 150 tonnes/year BioLPG to L'Oréal, saving 1,915 tonnes CO2 annually.", wlgaRelevance: "Very high — WLGA's #1 showcase for corporate BioLPG demand.", lastUpdate: "November 2021 (ongoing)", sourceUrl: "https://www.worldliquidgas.org/story/bio-sourced-lpg-a-fully-renewable-fuel-for-the-future/", color: "#00FF88", dotSize: "medium" },
  { id: "PRJ-006", name: "Oberon Fuels — Renewable DME Commercial Production", type: "Commercial Production", status: "active", stage: "Commercial", country: "USA", region: "North America", city: "Brawley, CA", lat: 32.9792, lng: -115.5289, organisations: ["Oberon Fuels"], technology: "Biomass/biogas-to-rDME", feedstock: "Wastewater biogas", carbonIntensity: "Carbon negative", capacity: "Commercial production since 2021", investment: "Venture-backed", description: "Oberon Fuels commercially producing renewable DME since 2021. rDME can be blended with LPG.", wlgaRelevance: "Medium-high — rDME is important adjacent liquid renewable fuel.", lastUpdate: "July 2025", sourceUrl: "https://www.worldliquidgas.org/key-focus-areas/renewable-liquid-gas/", color: "#E8A020", dotSize: "medium" },
  { id: "PRJ-007", name: "Petredec — BioLPG Supply Chain Innovation", type: "Supply Chain Development", status: "active", stage: "Scale-up", country: "Singapore / Global", region: "Asia Pacific", city: "Singapore", lat: 1.3521, lng: 103.8198, organisations: ["Petredec"], technology: "BioLPG trading and certification", feedstock: "Various HVO pathways", carbonIntensity: "50–85% reduction depending on feedstock", capacity: "International BioLPG trading volumes", investment: "Corporate programme", description: "Petredec announced programme to integrate BioLPG into international trading operations.", wlgaRelevance: "High — mainstream trading company adoption validates BioLPG trajectory.", lastUpdate: "June 2025", sourceUrl: "https://www.worldliquidgas.org/key-focus-areas/renewable-liquid-gas/", color: "#00FF88", dotSize: "medium" },
  { id: "PRJ-008", name: "UK BioLPG Market — £100M+ Industry Investment", type: "Market Development", status: "active", stage: "Commercial", country: "United Kingdom", region: "Europe", city: "London", lat: 51.5074, lng: -0.1278, organisations: ["Liquid Gas UK", "SHV Energy UK", "Calor Gas", "DCC Energy"], technology: "HVO BioLPG", feedstock: "Used cooking oil, tallow, waste oils", carbonIntensity: "Up to 90% reduction vs oil", capacity: "£100M+ invested; EU BioLPG market forecast +19.8% growth 2026–2035", investment: "£100M+ industry investment", description: "UK BioLPG market one of the most commercially advanced. Off-grid rural properties switching to BioLPG.", wlgaRelevance: "Very high — primary reference case for policymakers.", lastUpdate: "January 2026", sourceUrl: "https://renewableenergyinstaller.co.uk/2026/01/what-is-the-future-for-natural-gas-lpg-biolpg-in-the-uk-energy-market/", color: "#00FF88", dotSize: "large" },
  { id: "PRJ-009", name: "PERC — Renewable Propane Agricultural & Fleet Deployments", type: "Market Development", status: "active", stage: "Commercial", country: "USA", region: "North America", city: "Washington DC", lat: 38.9072, lng: -77.0369, organisations: ["PERC", "Multiple US distributors"], technology: "HVO co-product renewable propane", feedstock: "Canola, camelina, waste oils", carbonIntensity: "~70% reduction vs fossil propane", capacity: "Growing US renewable propane market", investment: "PERC R&D budget + industry co-investment", description: "PERC driving renewable propane adoption across agricultural, fleet, and forklift segments.", wlgaRelevance: "High — PERC is WLGA Leadership Partner.", lastUpdate: "May 2024", sourceUrl: "https://www.worldliquidgas.org/key-focus-areas/renewable-liquid-gas/", color: "#00FF88", dotSize: "medium" },
  { id: "PRJ-010", name: "Power-to-X / e-LPG — TotalEnergies & European R&D Consortia", type: "Technology Development", status: "emerging", stage: "Research", country: "France / EU", region: "Europe", city: "Paris", lat: 48.8566, lng: 2.3522, organisations: ["TotalEnergies", "Various EU Horizon projects"], technology: "Power-to-LPG (green hydrogen + captured CO2)", feedstock: "Green hydrogen + CO2", carbonIntensity: "Potentially carbon neutral to negative", capacity: "Early R&D — demonstration scale expected by 2028", investment: "EU Horizon Europe funding + TotalEnergies R&D", description: "Power-to-X uses green hydrogen and captured CO2 to synthesise propane. e-LPG could reach commercial economics by 2030–2035.", wlgaRelevance: "Strategic — final frontier of rLPG decarbonisation.", lastUpdate: "December 2025", sourceUrl: "https://fliphtml5.com/addge/odkv/Renewable_LPG_The_Decarbonised_Future_2023/", color: "#3B82F6", dotSize: "small" },
];

export const PATENTS_AND_PAPERS = [
  { id: "PAT-001", title: "Catalytic Conversion of Biogas to Renewable Propane via Methanol Intermediate", type: "Patent", registry: "USPTO", number: "US 2025/0193847 A1", applicant: "GTI Energy / BioLPG LLC", filedDate: "March 2025", status: "Pending", relevanceScore: 98, summary: "Core patent application for the Cool LPG process. Critical for WLGA to monitor.", tags: ["Cool LPG", "Biogas", "On-purpose rLPG", "GTI Energy"] },
  { id: "PAT-002", title: "Drop-in Renewable LPG Blending and Certification System Using Mass Balance Methodology", type: "Patent", registry: "EPO", number: "EP 4 312 895 B1", applicant: "SHV Energy / Futuria Fuels", filedDate: "November 2024", status: "Granted", relevanceScore: 88, summary: "SHV Energy's granted European patent for BioLPG certification in mixed supply chains.", tags: ["Mass Balance", "Certification", "BioLPG", "SHV Energy"] },
  { id: "PAT-003", title: "Dimethyl Ether Production from Agricultural Residue via Biomass Gasification", type: "Patent", registry: "USPTO", number: "US 11,987,543 B2", applicant: "Oberon Fuels", filedDate: "September 2023", status: "Granted", relevanceScore: 75, summary: "Oberon Fuels' granted patent for biomass gasification to rDME production.", tags: ["rDME", "Biomass", "Gasification", "Oberon Fuels"] },
  { id: "PAP-001", title: "Life Cycle Assessment of Renewable Propane from HVO Co-production: Regional Variation in Carbon Intensity", type: "Academic Paper", journal: "Renewable and Sustainable Energy Reviews", authors: "Chen, K. et al. (BioLPG LLC / GTI Energy)", publishedDate: "October 2025", doi: "10.1016/j.rser.2025.114872", relevanceScore: 95, summary: "Peer-reviewed LCA confirming HVO-derived BioLPG achieves 65–92% GHG reduction. WLGA should cite in policymaker submissions.", tags: ["LCA", "Carbon Intensity", "HVO", "RED III"] },
  { id: "PAP-002", title: "Biogas-to-LPG via Cool Process: Techno-Economic Analysis at Commercial Scale", type: "Academic Paper", journal: "Applied Energy", authors: "Weidie, S. et al. (rLPG North America / GTI Energy)", publishedDate: "January 2026", doi: "10.1016/j.apenergy.2026.121234", relevanceScore: 92, summary: "First peer-reviewed TEA of Cool LPG at commercial scale. Production cost $0.78–$1.12/litre.", tags: ["Cool LPG", "Techno-Economic", "GTI Energy"] },
  { id: "PAP-003", title: "Renewable LPG in the African Clean Cooking Transition: Feedstock Availability and Scale Potential", type: "Academic Paper", journal: "Energy for Sustainable Development", authors: "WLGA SGI Working Group / Global LPG Partnership", publishedDate: "December 2025", doi: "10.1016/j.esd.2025.101234", relevanceScore: 90, summary: "Co-authored by WLGA SGI. Models BioLPG potential from agricultural residues across 22 Sub-Saharan African countries.", tags: ["Africa", "Clean Cooking", "Feedstock", "WLGA Research"] },
];

export const FUNDING_EVENTS = [
  { id: "FND-001", recipient: "GTI Energy / BioLPG LLC", amount: "$4.2M", funder: "US Department of Energy (DOE)", type: "Government Grant", programme: "Bioenergy Technologies Office (BETO) FY2025", date: "August 2025", purpose: "Cool LPG process pilot scale-up", wlgaNote: "US DOE formally funding Cool LPG — signals US government recognition.", relevanceScore: 98, flag: "🇺🇸" },
  { id: "FND-002", recipient: "Friedrich Scharr KG / GLG Energy", amount: "€3.1M", funder: "EU Horizon Europe", type: "Government Grant", programme: "Horizon Europe Call 2025 — LC-NRG-04-2025", date: "October 2025", purpose: "European Cool LPG pilot demonstration", wlgaNote: "EU Horizon funded European Cool LPG partners.", relevanceScore: 95, flag: "🇪🇺" },
  { id: "FND-003", recipient: "Oberon Fuels", amount: "$28M", funder: "Venture Capital (Series C)", type: "Startup Funding", programme: "Series C — Energy Impact Partners, Spring Lane Capital", date: "June 2025", purpose: "rDME scale-up and Southeast Asia expansion", wlgaNote: "rDME gaining significant VC backing.", relevanceScore: 72, flag: "🇺🇸" },
  { id: "FND-004", recipient: "Neste (HVO BioLPG co-production expansion)", amount: "€1.5B", funder: "Corporate + EIB", type: "Corporate + Public Investment", programme: "Neste Rotterdam refinery HVO expansion", date: "September 2025", purpose: "Rotterdam HVO capacity — +60,000 tonnes/year BioLPG", wlgaNote: "Largest single increase in BioLPG supply capacity through 2027.", relevanceScore: 90, flag: "🇫🇮" },
  { id: "FND-005", recipient: "UK BioLPG Industry", amount: "£100M+", funder: "Industry self-investment", type: "Industry Investment", programme: "UK BioLPG Infrastructure Build-out", date: "2022–2025 cumulative", purpose: "BioLPG storage, blending, distribution across UK", wlgaNote: "Largest voluntary industry investment in rLPG globally.", relevanceScore: 88, flag: "🇬🇧" },
  { id: "FND-006", recipient: "Power-to-LPG Consortium (EU)", amount: "€18M", funder: "EU Horizon Europe + FCH JU", type: "Government Grant", programme: "Hydrogen and Fuel Cell Technologies JU — Call 2025", date: "November 2025", purpose: "Power-to-X synthetic propane demonstration", wlgaNote: "First direct EU funding for e-LPG.", relevanceScore: 85, flag: "🇪🇺" },
];

export const COMPETITOR_THREATS = [
  { id: "THR-001", severity: "HIGH", status: "active", organisation: "Hydrogen Europe", type: "Policy Position", title: "Hydrogen Europe calls for 'Renewable Gas' EU taxonomy to exclude liquid fuels", date: "18 February 2026", summary: "Hydrogen Europe submitted a consultation response arguing that BioLPG should NOT receive green taxonomy treatment, on the basis of 'combustion lock-in'. This directly threatens commercial viability of BioLPG in European capital markets.", threatToWLGA: "CRITICAL — If adopted, would remove BioLPG from EU Taxonomy-aligned investment.", suggestedResponse: "WLGA should file urgent counter-submission to EU Commission (deadline: 31 March 2026).", deadline: "31 March 2026", sourceUrl: "https://www.hydrogeneurope.eu/consultation-responses", countryImpact: ["EU-27"], responseStatus: "pending", color: "#FF4D4D" },
  { id: "THR-002", severity: "HIGH", status: "active", organisation: "World Biogas Association (WBA)", type: "Policy Position", title: "WBA 2026 Policy Platform positions biomethane as the only viable clean fuel for residential heating", date: "10 February 2026", summary: "WBA's 2026 platform explicitly positions biomethane as the ONLY viable clean gaseous fuel for European residential heating — no mention of BioLPG. Endorsed by 47 European biogas companies.", threatToWLGA: "HIGH — Directly competing for residential heating decarbonisation narrative.", suggestedResponse: "WLGA should publish comparative briefing: BioLPG vs Biomethane for Off-Grid Decarbonisation.", deadline: "Before April 2026 EU Energy Council", sourceUrl: "https://www.worldbiogasassociation.org", countryImpact: ["Germany", "France", "Netherlands", "Belgium", "Italy", "Spain"], responseStatus: "in-progress", color: "#FF4D4D" },
  { id: "THR-003", severity: "MEDIUM", status: "monitoring", organisation: "Hydrogen Council", type: "Narrative Campaign", title: "Hydrogen Council 'End of Combustion' campaign targets liquid fuel appliances in EU new builds", date: "5 January 2026", summary: "Campaign advocating for ban on all new gas and liquid fuel appliance installations from 2028. Materials include 'liquid fuels including LPG and its derivatives' as fuels that 'cannot provide a credible path to net zero'.", threatToWLGA: "MEDIUM — Campaign conflates fossil LPG with BioLPG.", suggestedResponse: "WLGA should correct mischaracterisation in media; distinguish renewable LPG from fossil LPG.", deadline: "Ongoing — before EU Building Regulation consultation Q2 2026", sourceUrl: "https://hydrogencouncil.com/en/pathway-to-net-zero/", countryImpact: ["EU-27"], responseStatus: "pending", color: "#E8A020" },
  { id: "THR-004", severity: "LOW", status: "monitoring", organisation: "Clean Energy States Alliance (CESA)", type: "State Policy", title: "US State Alliance recommends excluding propane (including renewable) from clean heating standards in 8 states", date: "28 January 2026", summary: "CESA recommendations for 8 US states exclude renewable propane from qualifying as 'clean fuel'. PERC is engaged at state level.", threatToWLGA: "LOW (US-specific) — precedent could inform EU/UK regulatory thinking.", suggestedResponse: "Monitor PERC's engagement. No immediate WLGA action required.", deadline: "Ongoing", sourceUrl: "https://www.cleanenergystates.org", countryImpact: ["USA (8 states)"], responseStatus: "monitoring", color: "#3B82F6" },
];

export const WEEKLY_DIGEST = {
  weekNumber: 12,
  dateRange: "17–24 February 2026",
  publishedDate: "24 February 2026",
  generatedBy: "WLGA AI Innovation Tracker",
  recipientGroup: "Sustainable Growth & Innovation (SGI) Working Group",
  headline: "CRITICAL: Hydrogen Europe files taxonomy submission threatening BioLPG; US DOE Cool LPG grant confirmed; EU Horizon funds European Cool LPG pilot",
  urgentAlerts: 2,
  newProjects: 1,
  newPatents: 2,
  newFunding: 3,
  executiveSummary: "Week 12 brings the most significant competitive threat of the year: Hydrogen Europe has filed a formal EU Taxonomy consultation response seeking to exclude BioLPG from Taxonomy-aligned investment. WLGA has 5 weeks (deadline: 31 March) to file a counter-response. Simultaneously, positive signals: US DOE formally confirmed $4.2M in Cool LPG funding, and EU Horizon has granted €3.1M to the European Cool LPG consortium.",
  sections: [
    { id: "SEC-001", category: "🚨 URGENT — Competitor Threat", priority: 1, items: [
      { title: "Hydrogen Europe EU Taxonomy Submission — BioLPG Exclusion", date: "18 Feb 2026", source: "Hydrogen Europe Official Consultation Response", summary: "Hydrogen Europe filed a consultation response calling for BioLPG to be excluded from EU Taxonomy. Deadline for WLGA counter-response: 31 March 2026.", actionRequired: true, actionType: "counter-response", relatedThreatId: "THR-001" },
      { title: "World Biogas Association 2026 Platform — Biomethane Only Heating Narrative", date: "10 Feb 2026", source: "WBA EU Energy Council Submission", summary: "WBA's 2026 platform explicitly excludes BioLPG from EU residential heating decarbonisation policy.", actionRequired: true, actionType: "policy-brief", relatedThreatId: "THR-002" },
    ]},
    { id: "SEC-002", category: "✅ Positive Developments", priority: 2, items: [
      { title: "US DOE Confirms $4.2M Cool LPG Grant", date: "19 Feb 2026", source: "US DOE BETO Award Announcement", summary: "US Department of Energy formally confirmed $4.2M grant to GTI Energy and BioLPG LLC for Cool LPG pilot scale-up.", actionRequired: false, actionType: null },
      { title: "EU Horizon Grants €3.1M to European Cool LPG Pilot", date: "20 Feb 2026", source: "EU Horizon Europe Grant Database", summary: "European Cool LPG development partners receive EU Horizon funding for first European pilot demonstration.", actionRequired: false, actionType: "comms-opportunity" },
      { title: "Blossman Gas Q4 2025: 12M Gallons rLPG Delivered", date: "15 Feb 2026", source: "Blossman Gas Public Disclosure", summary: "Blossman Gas reported 12 million gallons of renewable LPG to US transport customers in Q4 2025.", actionRequired: false, actionType: "case-study" },
    ]},
    { id: "SEC-003", category: "🔬 Patents & Research", priority: 3, items: [
      { title: "GTI Energy Cool LPG Patent Enters USPTO Substantive Examination", date: "21 Feb 2026", source: "USPTO Patent Database", summary: "US Patent Application 2025/0193847 has entered substantive examination phase at USPTO.", actionRequired: false, actionType: null, relatedPatentId: "PAT-001" },
      { title: "New Academic Paper: Techno-Economic Analysis Confirms Cool LPG at $0.78–$1.12/L", date: "22 Feb 2026", source: "Applied Energy Journal", summary: "First peer-reviewed TEA of Cool LPG published — production costs competitive with fossil propane.", actionRequired: true, actionType: "distribute", relatedPaperId: "PAP-002" },
    ]},
    { id: "SEC-004", category: "💰 Funding & Investment", priority: 4, items: [
      { title: "Neste Rotterdam HVO Expansion Draws €1.5B — Adds 60,000t BioLPG/yr", date: "17 Feb 2026", source: "Neste Press Release + EIB", summary: "Neste confirmed €1.5B Rotterdam refinery expansion. Will increase BioLPG co-production by ~60,000 tonnes by 2027.", actionRequired: false, actionType: "market-intelligence", relatedFundingId: "FND-004" },
      { title: "EU Power-to-LPG Consortium Receives €18M Horizon Funding", date: "18 Feb 2026", source: "EU Horizon Europe Database", summary: "Power-to-X synthetic propane consortium receives €18M EU Horizon grant for demonstration plant.", actionRequired: false, actionType: "monitor", relatedFundingId: "FND-006" },
    ]},
  ],
};

export const COUNTER_RESPONSES = {
  "THR-001": {
    title: "Draft WLGA Counter-Response: EU Taxonomy — BioLPG Inclusion",
    type: "Formal Consultation Response",
    deadline: "31 March 2026",
    target: "European Commission — DG FISMA Sustainable Finance Taxonomy",
    aiDraft: "WLGA FORMAL CONSULTATION RESPONSE\nEU Sustainable Finance Taxonomy Review — BioLPG Classification\n\nThe World Liquid Gas Association (WLGA) submits this response in opposition to proposals to exclude Bio-sourced LPG (BioLPG) from EU Taxonomy-aligned investment.\n\n1. BioLPG delivers up to 90% lifecycle GHG reduction versus fossil LPG, meeting the Taxonomy's substantial contribution to climate change mitigation threshold.\n\n2. BioLPG is already recognised as a qualifying renewable fuel under EU RED III.\n\n3. The 'combustion lock-in' argument is incorrect. BioLPG is a drop-in fuel using existing LPG infrastructure. Taxonomy-aligned BioLPG investment does NOT lock in fossil fuel infrastructure.\n\n4. The IEA Net Zero by 2050 roadmap identifies renewable liquid fuels as necessary for off-grid communities and existing distribution infrastructure.\n\n5. 15 million EU households are off-grid and cannot access biomethane grid injection. BioLPG is the only scalable, commercially available renewable fuel that can reach these households.\n\nWLGA requests that the Commission maintain BioLPG's eligibility for Taxonomy-aligned investment.",
    keyPoints: ["90% GHG reduction meets Taxonomy threshold", "Already recognised under EU RED III", "Drop-in fuel = no stranded asset lock-in", "IEA Net Zero roadmap alignment", "15M off-grid EU homes have no other Taxonomy option"],
    status: "draft",
  },
  "THR-002": {
    title: "Draft WLGA Policy Brief: BioLPG vs Biomethane for Off-Grid Heating",
    type: "Policy Brief",
    deadline: "April 2026 EU Energy Council",
    target: "EU Energy Ministers + Energy Council Secretariat",
    aiDraft: "WLGA POLICY BRIEF\nBioLPG vs Biomethane: The Evidence for Off-Grid Residential Decarbonisation\n\nKEY FINDING: 15 million EU homes are off-grid. Biomethane grid injection serves only grid-connected homes. BioLPG is the only renewable fuel that can reach off-grid households using existing cylinder and bulk delivery infrastructure.\n\nCOMPARATIVE ANALYSIS:\n- Carbon intensity: BioLPG 90% reduction (UCO) vs Biomethane 80–95%. Equivalent at best-in-class feedstock.\n- Infrastructure: BioLPG — zero new infrastructure. Biomethane — requires gas grid connection.\n- Off-grid reach: BioLPG can reach any LPG customer globally. Biomethane limited to grid-connected customers.\n- Commercial availability: BioLPG commercially available today in 15+ EU countries.\n\nCONCLUSION: For 15 million EU off-grid homes, BioLPG is the ONLY viable Taxonomy-aligned clean fuel. EU and national policies should support both pathways.",
    keyPoints: ["15 million EU off-grid homes can't access biomethane", "Equivalent carbon intensity at best-in-class", "BioLPG requires zero new infrastructure", "Commercially available today", "Complementary, not competing, solutions"],
    status: "draft",
  },
};

export const MAP_CONFIG = {
  defaultCenter: { lat: 35, lng: 10 },
  defaultZoom: "world",
  regions: [
    { id: "north-america", label: "North America", projectCount: 4, lat: 40, lng: -100 },
    { id: "europe", label: "Europe", projectCount: 5, lat: 50, lng: 10 },
    { id: "asia-pacific", label: "Asia Pacific", projectCount: 1, lat: 15, lng: 110 },
  ],
};

export function latLngToSVG(lat, lng, mapWidth = 960, mapHeight = 500) {
  const x = (lng + 180) * (mapWidth / 360);
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = mapHeight / 2 - (mapWidth * mercN) / (2 * Math.PI);
  return { x, y };
}

export function getProjectsByRegion(region) {
  if (!region) return PROJECTS;
  return PROJECTS.filter((p) => p.region === region);
}

export function getProjectsByType(type) {
  if (!type) return PROJECTS;
  return PROJECTS.filter((p) => p.type === type);
}

export function getHighSeverityThreats() {
  return COMPETITOR_THREATS.filter((t) => t.severity === "HIGH");
}

export function getActiveThreats() {
  return COMPETITOR_THREATS.filter((t) => t.status === "active");
}

export function getThreatSeverityColor(severity) {
  if (severity === "HIGH") return "#FF4D4D";
  if (severity === "MEDIUM") return "#E8A020";
  return "#3B82F6";
}

export function getProjectStatusColor(status) {
  if (status === "active") return "#00FF88";
  if (status === "emerging") return "#3B82F6";
  return "#64748B";
}
