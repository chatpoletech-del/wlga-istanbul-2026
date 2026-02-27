// ─────────────────────────────────────────────────────────────────────────────
// WLGA CERTIFICATION QUESTION BANK — PRE-INSTALLED DATASET
// LPG Industry Knowledge Assessment — 5 Modules, 50 Questions Total
// 10 Questions randomly selected per exam attempt
// ─────────────────────────────────────────────────────────────────────────────

export const WLGA_BRANDING = {
  primaryColor: "#E8A020",
  darkBg: "#0A0E14",
  surface: "#111720",
  green: "#10B981",
  red: "#EF4444",
  blue: "#3B82F6",
  certTitle: "WLGA Certified LPG Professional",
  certBody: "World Liquid Gas Association",
  certWebsite: "www.worldliquidgas.org",
  passMark: 70,
  totalQuestions: 10,
};

export const COURSES = [
  {
    id: "CERT-001",
    title: "LPG Fundamentals & Safety",
    level: "Foundation",
    duration: "15 mins",
    description: "Core knowledge of LPG properties, safe handling, storage requirements, and international safety standards.",
    badge: "🛡️",
    color: "#3B82F6",
    questionIds: ["Q001","Q002","Q003","Q004","Q005","Q006","Q007","Q008","Q009","Q010",
                  "Q011","Q012","Q013","Q014","Q015"],
  },
  {
    id: "CERT-002",
    title: "LPG Market & Global Trade",
    level: "Professional",
    duration: "15 mins",
    description: "Global LPG supply chains, market dynamics, pricing mechanisms, and key trade routes.",
    badge: "🌍",
    color: "#E8A020",
    questionIds: ["Q016","Q017","Q018","Q019","Q020","Q021","Q022","Q023","Q024","Q025",
                  "Q026","Q027","Q028","Q029","Q030"],
  },
  {
    id: "CERT-003",
    title: "Sustainable LPG & BioLPG",
    level: "Advanced",
    duration: "15 mins",
    description: "Renewable LPG, BioLPG production, carbon reduction pathways, and clean energy transition.",
    badge: "🌱",
    color: "#10B981",
    questionIds: ["Q031","Q032","Q033","Q034","Q035","Q036","Q037","Q038","Q039","Q040",
                  "Q041","Q042","Q043","Q044","Q045"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// QUESTION BANK — 45 Questions across 3 modules
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_QUESTIONS = [
  { id: "Q001", module: "CERT-001", difficulty: "easy", question: "What are the two main components of commercial LPG?", options: ["Methane and ethane", "Propane and butane", "Propylene and butylene", "Ethylene and acetylene"], correctIndex: 1, explanation: "Commercial LPG is primarily a mixture of propane (C3H8) and butane (C4H10), derived from natural gas processing and crude oil refining.", reference: "WLGA LPG Industry Good Practice Guide, Section 1.2" },
  { id: "Q002", module: "CERT-001", difficulty: "easy", question: "At what approximate pressure does LPG liquefy at room temperature (20°C)?", options: ["0.5 – 1 bar", "2 – 8 bar", "15 – 20 bar", "50 – 70 bar"], correctIndex: 1, explanation: "LPG liquefies at relatively low pressures — propane at approximately 8 bar and butane at approximately 2 bar at 20°C.", reference: "WLGA Technical Standards Reference, Chapter 3" },
  { id: "Q003", module: "CERT-001", difficulty: "medium", question: "What is the lower flammability limit (LFL) of propane in air?", options: ["0.5%", "2.1%", "5.0%", "9.5%"], correctIndex: 1, explanation: "Propane has a Lower Flammability Limit (LFL) of 2.1% and an Upper Flammability Limit (UFL) of 9.5% in air.", reference: "WLGA Safety Training Module 2" },
  { id: "Q004", module: "CERT-001", difficulty: "medium", question: "Why must LPG storage cylinders never be stored below ground level or in basements?", options: ["Because LPG vapour is lighter than air and rises", "Because LPG vapour is heavier than air and accumulates in low points", "Because underground temperatures are too low for LPG", "Because underground storage violates international trade law"], correctIndex: 1, explanation: "LPG vapour is heavier than air. Any gas leak will accumulate in low-lying areas creating a serious explosion hazard.", reference: "WLGA Good Practice Guide: Cylinder Storage Safety" },
  { id: "Q005", module: "CERT-001", difficulty: "easy", question: "What colour is typically used for LPG cylinders in most European markets to indicate they contain LPG?", options: ["Red", "Blue", "Orange or red-brown", "Yellow with a black band"], correctIndex: 2, explanation: "Under EN 1089-3, LPG cylinders in Europe are typically identified by an orange or red-brown colour shoulder band.", reference: "EN 1089-3 European Cylinder Identification Standard" },
  { id: "Q006", module: "CERT-001", difficulty: "hard", question: "According to WLGA safety guidelines, what is the minimum separation distance between an LPG bulk storage vessel (capacity >5 tonnes) and a building opening?", options: ["1 metre", "3 metres", "7.5 metres", "15 metres"], correctIndex: 2, explanation: "WLGA and NFPA 58 guidelines generally require a minimum 7.5 metre separation between LPG bulk vessels above 5 tonnes and building openings.", reference: "WLGA Bulk LPG Storage Safety Guidelines, Table 4.1" },
  { id: "Q007", module: "CERT-001", difficulty: "medium", question: "What is the primary function of a pressure relief valve (PRV) on an LPG cylinder?", options: ["To control the flow rate of gas to the appliance", "To automatically release gas if pressure exceeds a safe limit", "To prevent gas from entering the cylinder during transport", "To measure the amount of gas remaining in the cylinder"], correctIndex: 1, explanation: "A Pressure Relief Valve (PRV) automatically opens to release gas when internal pressure exceeds a predetermined safe limit.", reference: "WLGA Cylinder Safety Standards, Section 6.3" },
  { id: "Q008", module: "CERT-001", difficulty: "easy", question: "Which international standard governs the design and testing of LPG cylinders for the refillable market?", options: ["ISO 4706", "ISO 9001", "ASTM D1250", "IEC 62133"], correctIndex: 0, explanation: "ISO 4706 is the primary international standard for refillable welded steel LPG cylinders.", reference: "ISO 4706: Refillable welded steel cylinders for LPG" },
  { id: "Q009", module: "CERT-001", difficulty: "hard", question: "What is a BLEVE and what are the primary conditions that cause it?", options: ["Boiling Liquid Expanding Vapour Explosion — caused by external fire heating an LPG vessel", "Bi-Level Energy Venting Explosion — caused by overfilling a cylinder", "Back-pressure Liquefied Evaporation Venting Event — caused by valve failure", "Burst Limit Expansion Vapour Evacuation — caused by corrosion"], correctIndex: 0, explanation: "A BLEVE occurs when an LPG vessel is exposed to external fire, causing the liquid to boil rapidly and the vessel to suddenly rupture.", reference: "WLGA Emergency Response Training, Module 4" },
  { id: "Q010", module: "CERT-001", difficulty: "medium", question: "Under UN Recommendations on the Transport of Dangerous Goods, LPG is classified as:", options: ["Class 2.1 — Flammable Gas", "Class 3 — Flammable Liquid", "Class 4.1 — Flammable Solid", "Class 6.1 — Toxic Substance"], correctIndex: 0, explanation: "LPG is classified as Class 2.1 (Flammable Gas) under the UN Model Regulations. UN number 1075 applies.", reference: "UN Recommendations on Transport of Dangerous Goods, Rev.22" },
  { id: "Q011", module: "CERT-001", difficulty: "easy", question: "What is the typical calorific value (energy content) of commercial LPG compared to natural gas?", options: ["LPG has lower energy density than natural gas", "LPG has approximately the same energy density as natural gas", "LPG has approximately 2.5–3x higher energy density than natural gas by volume", "LPG has 10x higher energy density than natural gas"], correctIndex: 2, explanation: "LPG has a gross calorific value of approximately 93-94 MJ/m³ (propane) compared to natural gas at approximately 38-40 MJ/m³.", reference: "WLGA LPG Properties Reference Guide" },
  { id: "Q012", module: "CERT-001", difficulty: "medium", question: "Which organisation maintains the primary international safety standards for LPG vehicle fuel systems (autogas)?", options: ["WLGA", "UNECE (United Nations Economic Commission for Europe)", "IATA", "IMO"], correctIndex: 1, explanation: "UNECE Regulation No. 67 is the primary international standard for LPG vehicle fuel systems (autogas).", reference: "UNECE Regulation 67 — LPG Vehicle Fuel Equipment" },
  { id: "Q013", module: "CERT-001", difficulty: "hard", question: "What percentage of LPG cylinder incidents globally are attributable to user error rather than product/equipment failure?", options: ["Approximately 15%", "Approximately 35%", "Approximately 60–70%", "Approximately 90%"], correctIndex: 2, explanation: "Industry studies show that 60–70% of LPG cylinder incidents are attributable to user error.", reference: "WLGA Global LPG Safety Incident Analysis, 2023" },
  { id: "Q014", module: "CERT-001", difficulty: "easy", question: "Why is odourant (mercaptan) added to LPG?", options: ["To improve the energy efficiency of combustion", "To prevent corrosion in steel cylinders", "Because LPG is naturally odourless, the odourant provides a detectable warning of leaks", "To meet international colour-coding requirements"], correctIndex: 2, explanation: "Pure LPG is naturally colourless and odourless. Ethyl mercaptan is added to create a detectable smell for leak warning.", reference: "WLGA Odourant Standards and Best Practices Guide" },
  { id: "Q015", module: "CERT-001", difficulty: "medium", question: "An LPG cylinder should be condemned and removed from service when:", options: ["It is more than 5 years old", "It shows signs of corrosion, dents, bulging, or the valve cannot be fully closed", "It has been used for more than 100 refills", "The customer requests a new cylinder"], correctIndex: 1, explanation: "Cylinders should be removed from service when they show physical damage including corrosion, dents, bulging, or damaged valve.", reference: "WLGA Cylinder Inspection and Requalification Guidelines" },
  { id: "Q016", module: "CERT-002", difficulty: "easy", question: "Approximately how many people globally rely on LPG as their primary cooking fuel?", options: ["100 million", "500 million", "Over 1 billion", "3 billion"], correctIndex: 2, explanation: "Over 1 billion people worldwide use LPG as their primary cooking and heating fuel.", reference: "IEA World Energy Outlook 2024; WLGA Statistical Review" },
  { id: "Q017", module: "CERT-002", difficulty: "medium", question: "Which country is the world's largest exporter of LPG?", options: ["Saudi Arabia", "Russia", "United States", "Qatar"], correctIndex: 2, explanation: "The United States became the world's largest LPG exporter following the shale gas revolution.", reference: "IEA Oil Market Report; WLGA Statistical Review of Global LPG 2024" },
  { id: "Q018", module: "CERT-002", difficulty: "medium", question: "What does 'autogas' refer to in the LPG industry?", options: ["LPG used in automated industrial processes", "LPG used as a vehicle fuel in internal combustion engines", "Automatically blended LPG for residential use", "LPG traded through automated commodity exchanges"], correctIndex: 1, explanation: "Autogas is the term for LPG used as a vehicle fuel. Turkey is the world's largest autogas market.", reference: "WLGA Autogas Market Report 2024" },
  { id: "Q019", module: "CERT-002", difficulty: "hard", question: "What is the 'CP Aramco' pricing mechanism in the LPG market?", options: ["A carbon pricing mechanism applied to LPG by Saudi Arabia", "The Saudi Aramco Contract Price, a monthly benchmark price for LPG published by Saudi Aramco", "A pipeline tariff charged by Saudi Aramco for LPG transit", "A quality certification programme for LPG products"], correctIndex: 1, explanation: "The Saudi Aramco Contract Price (CP) is the monthly benchmark price for propane and butane delivered to Asian buyers.", reference: "WLGA LPG Trading and Pricing Reference Guide" },
  { id: "Q020", module: "CERT-002", difficulty: "easy", question: "Which of the following is the primary source of LPG production?", options: ["Coal gasification", "Natural gas processing and crude oil refining", "Nuclear energy byproducts", "Biomass fermentation"], correctIndex: 1, explanation: "Approximately 60% of global LPG comes from natural gas processing and 40% from crude oil refining.", reference: "WLGA Statistical Review of Global LPG, Production Chapter" },
  { id: "Q021", module: "CERT-002", difficulty: "medium", question: "What is a Very Large Gas Carrier (VLGC) and what is its approximate cargo capacity?", options: ["A large LPG cylinder truck carrying 20,000 cylinders", "A specialised LPG tanker ship with capacity of approximately 80,000–85,000 cubic metres", "A pipeline compressor station handling over 1 million m³/day", "A bulk storage terminal with capacity over 100,000 tonnes"], correctIndex: 1, explanation: "A VLGC is the largest class of LPG tanker, with cargo capacity of approximately 80,000–85,000 cubic metres.", reference: "WLGA LPG Shipping and Logistics Guide" },
  { id: "Q022", module: "CERT-002", difficulty: "hard", question: "Which region accounts for the largest share of global LPG consumption?", options: ["North America", "Europe", "Asia Pacific", "Middle East & Africa"], correctIndex: 2, explanation: "Asia Pacific accounts for approximately 45–50% of global LPG consumption.", reference: "WLGA Statistical Review of Global LPG, Regional Demand Chapter" },
  { id: "Q023", module: "CERT-002", difficulty: "medium", question: "What does 'LPG in bulk' mean in a commercial distribution context?", options: ["Selling LPG in cylinder packs of 12 or more", "Delivering LPG directly to a customer's fixed storage tank by tanker truck", "Importing LPG in containers of more than 1,000 litres", "Trading LPG in quantities greater than 1,000 tonnes"], correctIndex: 1, explanation: "LPG 'in bulk' refers to delivery directly from a road tanker into a customer's fixed storage vessel.", reference: "WLGA LPG Distribution Models and Best Practices" },
  { id: "Q024", module: "CERT-002", difficulty: "easy", question: "What is the primary reason LPG is considered particularly important for Sub-Saharan Africa?", options: ["Sub-Saharan Africa is the world's largest LPG producer", "LPG offers a clean alternative to biomass cooking fuels, reducing deforestation and indoor air pollution", "LPG is the only fuel that works in hot climates", "Sub-Saharan African countries have the highest autogas vehicle penetration"], correctIndex: 1, explanation: "LPG clean cooking programmes address indoor air pollution, deforestation, and gender inequality in the region.", reference: "WHO Indoor Air Quality Guidelines; WLGA Clean Cooking Strategy" },
  { id: "Q025", module: "CERT-002", difficulty: "hard", question: "What is the key difference between a 'spot' LPG cargo and a 'term' supply contract?", options: ["Spot cargoes are for domestic distribution; term contracts are for export only", "Spot cargoes are single, one-off purchase/sale agreements at current market price; term contracts are longer-duration agreements for regular supply at agreed pricing mechanisms", "Spot cargoes carry lower quality LPG; term contracts guarantee specification compliance", "Spot cargoes require WLGA certification; term contracts do not"], correctIndex: 1, explanation: "Spot cargoes are individual transactions at prevailing market price; term contracts provide supply security over 1–3 years.", reference: "WLGA LPG Trading Fundamentals Course" },
  { id: "Q026", module: "CERT-002", difficulty: "medium", question: "In which country did autogas first become widely adopted as a mainstream vehicle fuel?", options: ["Germany", "Turkey", "Netherlands", "South Korea"], correctIndex: 2, explanation: "The Netherlands was the first country to develop widespread autogas infrastructure, beginning in the 1960s.", reference: "WLGA History of Autogas Development" },
  { id: "Q027", module: "CERT-002", difficulty: "easy", question: "What does 'LPG penetration rate' measure in a national market?", options: ["The pressure at which LPG enters distribution pipelines", "The percentage of households using LPG as their primary cooking/heating fuel", "The rate at which LPG dissolves into soil if spilled", "The number of LPG cylinders per square kilometre"], correctIndex: 1, explanation: "LPG penetration rate measures the proportion of households using LPG as their primary energy source.", reference: "WLGA Market Development Framework" },
  { id: "Q028", module: "CERT-002", difficulty: "hard", question: "What is 'cylinder pooling' and what problem does it solve in the LPG distribution industry?", options: ["Storing cylinders in water to test for leaks", "A system where multiple distributors share a common cylinder fleet, reducing capital costs and improving asset utilisation", "Combining several small cylinders into one large storage vessel", "A pricing mechanism that averages cylinder costs across a national market"], correctIndex: 1, explanation: "Cylinder pooling allows cylinders to be owned and managed collectively, reducing fragmentation.", reference: "WLGA Cylinder Management Best Practice Guide" },
  { id: "Q029", module: "CERT-002", difficulty: "medium", question: "Which international body is responsible for setting LPG quality specifications used in international trade?", options: ["WLGA", "ISO (International Organisation for Standardisation)", "OPEC", "WTO"], correctIndex: 1, explanation: "ISO standards (ISO 9162, 9163, 4256) define quality specifications for LPG in international trade.", reference: "ISO 9162/9163/4256 — LPG Quality Specifications" },
  { id: "Q030", module: "CERT-002", difficulty: "easy", question: "What is the WLGA and approximately how many member companies does it have?", options: ["A European regulatory body with 25 members", "The World Liquid Gas Association — a global trade association with over 300 member companies across 125 countries", "A UN agency with 50 member states", "A certification body with 100 accredited laboratories"], correctIndex: 1, explanation: "WLGA is the global trade association for the LPG industry, with over 300 members in 125 countries.", reference: "WLGA About Us — worldliquidgas.org" },
  { id: "Q031", module: "CERT-003", difficulty: "easy", question: "What is BioLPG and how is it produced?", options: ["LPG extracted from biological organisms like algae", "Renewable LPG chemically identical to conventional LPG but produced from biological feedstocks such as waste oils, agricultural residues, and bio-naphtha", "A blend of LPG and natural biogas", "LPG treated with biological agents to reduce emissions"], correctIndex: 1, explanation: "BioLPG is chemically identical to fossil LPG but produced from renewable feedstocks.", reference: "WLGA BioLPG & Renewable LPG Development Guide" },
  { id: "Q032", module: "CERT-003", difficulty: "medium", question: "What is the approximate carbon intensity reduction of BioLPG compared to conventional LPG on a lifecycle basis?", options: ["5–10% reduction", "20–30% reduction", "50–90% reduction depending on feedstock", "100% carbon neutral in all cases"], correctIndex: 2, explanation: "BioLPG's lifecycle carbon intensity varies by feedstock; waste-based can achieve 80–90% reduction.", reference: "WLGA Renewable LPG Carbon Intensity Analysis 2024" },
  { id: "Q033", module: "CERT-003", difficulty: "medium", question: "What is the EU's Renewable Energy Directive (RED III) and why is it relevant to the BioLPG industry?", options: ["A directive that bans LPG in residential heating after 2030", "EU legislation setting binding targets for renewable energy use, within which BioLPG can qualify as a renewable fuel if it meets sustainability criteria", "A standard for LPG cylinder design that reduces carbon emissions", "An international treaty replacing the Paris Agreement for the energy sector"], correctIndex: 1, explanation: "RED III sets binding EU renewable targets; BioLPG can qualify if it meets sustainability criteria.", reference: "EU RED III Directive 2023/2413; WLGA BioLPG Policy Guide" },
  { id: "Q034", module: "CERT-003", difficulty: "hard", question: "Which feedstock pathway is currently most commercially scaled for BioLPG production?", options: ["Direct fermentation of sugar crops", "Hydrotreatment of vegetable oils and animal fats (HVO process), which generates BioLPG as a co-product", "Gasification of municipal solid waste", "Anaerobic digestion of sewage sludge"], correctIndex: 1, explanation: "The HVO process is the most commercially established BioLPG production pathway.", reference: "WLGA BioLPG Supply Chain Analysis" },
  { id: "Q035", module: "CERT-003", difficulty: "easy", question: "Why is LPG's role in clean cooking considered part of its sustainability contribution?", options: ["Because LPG appliances are 100% recyclable", "Because switching from biomass to LPG dramatically reduces indoor air pollution, deforestation, and CO2-equivalent emissions from inefficient combustion", "Because LPG production has zero carbon emissions", "Because LPG use does not produce any combustion emissions"], correctIndex: 1, explanation: "Replacing solid biomass with LPG reduces indoor air pollution, deforestation, and emissions.", reference: "WHO, IEA, WLGA Clean Cooking Position Paper" },
  { id: "Q036", module: "CERT-003", difficulty: "medium", question: "What is 'Power-to-LPG' (or e-LPG) and why is it significant for the energy transition?", options: ["A process that converts LPG into electrical power for the grid", "A pathway to produce synthetic LPG (propane/butane) using green hydrogen and CO2 from renewable electricity, creating a carbon-neutral LPG", "An energy storage system that uses LPG to store excess wind power", "A new type of LPG appliance that maximises combustion efficiency"], correctIndex: 1, explanation: "Power-to-LPG uses green hydrogen and captured CO2 to synthesise propane/butane.", reference: "WLGA Sustainable Growth & Innovation Working Group Report 2024" },
  { id: "Q037", module: "CERT-003", difficulty: "hard", question: "What is the 'mass balance' approach in BioLPG certification?", options: ["Measuring the physical weight of BioLPG in storage tanks", "A book-keeping method that allows conventional LPG and BioLPG to be mixed in the supply chain while tracking the renewable content by volume, without requiring physical separation", "Balancing CO2 emissions between different LPG applications", "A regulatory requirement to balance BioLPG imports and exports"], correctIndex: 1, explanation: "Mass balance tracks the renewable attribute separately while allowing physical mixing in the supply chain.", reference: "ISCC System; WLGA BioLPG Certification Framework" },
  { id: "Q038", module: "CERT-003", difficulty: "medium", question: "How does LPG compare to other fossil fuels in terms of CO2 emissions per unit of energy delivered?", options: ["LPG emits more CO2 per unit of energy than coal", "LPG emits approximately the same CO2 as coal", "LPG emits approximately 20% less CO2 than coal and 12% less than oil per unit of energy", "LPG is a zero-carbon fuel"], correctIndex: 2, explanation: "LPG emits approximately 20% less CO2 than coal and 12% less than oil per unit of energy.", reference: "WLGA Environmental Benefits of LPG Technical Brief" },
  { id: "Q039", module: "CERT-003", difficulty: "easy", question: "What does the 'World LPG Challenge' run by WLGA seek to identify?", options: ["The country with the highest LPG safety standards", "Innovative startups and projects using LPG or BioLPG to solve global energy and sustainability challenges", "The fastest cylinder refilling operation in the world", "The most efficient LPG appliance design"], correctIndex: 1, explanation: "The World LPG Challenge identifies startups using LPG/BioLPG for energy and sustainability innovation.", reference: "WLGA World LPG Challenge Programme" },
  { id: "Q040", module: "CERT-003", difficulty: "hard", question: "Under the Paris Agreement framework, why might LPG-using countries need to develop BioLPG supply chains by 2035?", options: ["Because the Paris Agreement mandates a switch to LPG by all countries", "Because Nationally Determined Contributions (NDCs) require progressive carbon reductions that make unabated fossil LPG increasingly incompatible with national climate targets", "Because LPG will be taxed at 500% under the Paris Agreement", "Because LPG is specifically named as a prohibited fuel under the Paris Agreement"], correctIndex: 1, explanation: "NDCs require progressive emissions reductions; BioLPG offers a drop-in replacement for continuity.", reference: "WLGA Paris Agreement Implications for the LPG Industry, 2024" },
  { id: "Q041", module: "CERT-003", difficulty: "medium", question: "What is 'dimethyl ether' (DME) and how does it relate to the LPG industry's sustainability pathway?", options: ["A chemical added to LPG to reduce odour", "A clean-burning fuel with similar properties to LPG that can be produced from biomass, waste, or green hydrogen, and blended with or substituted for LPG", "A type of corrosion inhibitor used in LPG storage tanks", "An impurity found in low-quality LPG that must be removed"], correctIndex: 1, explanation: "DME is a clean-burning fuel with properties similar to LPG; it can be blended or used standalone.", reference: "WLGA DME and Future Fuels Working Group" },
  { id: "Q042", module: "CERT-003", difficulty: "easy", question: "What is the UN Sustainable Development Goal (SDG) most directly addressed by expanding LPG clean cooking access?", options: ["SDG 1: No Poverty", "SDG 7: Affordable and Clean Energy", "SDG 13: Climate Action", "SDG 14: Life Below Water"], correctIndex: 1, explanation: "SDG 7 (Affordable and Clean Energy) is most directly relevant to LPG clean cooking access.", reference: "UN SDG 7 Framework; WLGA SDG Contribution Report" },
  { id: "Q043", module: "CERT-003", difficulty: "hard", question: "What is 'additionality' in the context of BioLPG and carbon credits?", options: ["Adding BioLPG to conventional LPG blends", "The principle that carbon credit generation requires emissions reductions that would not have occurred without the specific intervention — i.e., the BioLPG project must go 'beyond business as usual'", "The additional cost premium charged for BioLPG vs conventional LPG", "Adding new LPG infrastructure in markets that previously had none"], correctIndex: 1, explanation: "Additionality means emission reductions must be additional to what would have occurred anyway.", reference: "Gold Standard; Verra VCS; WLGA Carbon Finance Guide for LPG" },
  { id: "Q044", module: "CERT-003", difficulty: "medium", question: "What is the IEA's 'Net Zero by 2050' roadmap's position on LPG in emerging economies?", options: ["LPG must be immediately phased out in all countries", "LPG can continue to play a role in developing economies for cooking and heating where it displaces more carbon-intensive fuels, with progressive shift to renewable versions", "LPG should be replaced by coal gasification in developing economies", "The IEA does not mention LPG in its Net Zero roadmap"], correctIndex: 1, explanation: "The IEA acknowledges LPG's role in developing economies with progressive transition to BioLPG.", reference: "IEA Net Zero by 2050 Roadmap, 2021" },
  { id: "Q045", module: "CERT-003", difficulty: "easy", question: "Compared to petrol/gasoline vehicles, what is the approximate NOx (nitrogen oxide) emission reduction of LPG autogas vehicles?", options: ["5% reduction", "Up to 90% reduction in NOx emissions", "LPG vehicles emit more NOx than petrol vehicles", "LPG vehicles have zero NOx emissions"], correctIndex: 1, explanation: "LPG autogas vehicles can achieve up to 90% reduction in NOx emissions compared to petrol.", reference: "WLGA Autogas Air Quality Benefits Research" },
];

export function getQuestionsForCourse(courseId, count = 10) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return [];
  const pool = ALL_QUESTIONS.filter(q => course.questionIds.includes(q.id));
  return shuffleArray(pool).slice(0, Math.min(count, pool.length));
}

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function calculateScore(answers, questions, timeElapsed = 0) {
  let correct = 0;
  const breakdown = questions.map((q, i) => {
    const isCorrect = answers[i] === q.correctIndex;
    if (isCorrect) correct++;
    return {
      question: q.question,
      userAnswer: q.options[answers[i]],
      correctAnswer: q.options[q.correctIndex],
      isCorrect,
      explanation: q.explanation,
      reference: q.reference,
      difficulty: q.difficulty,
    };
  });
  const percentage = Math.round((correct / questions.length) * 100);
  return {
    correct,
    wrong: questions.length - correct,
    total: questions.length,
    percentage,
    passed: percentage >= WLGA_BRANDING.passMark,
    grade: percentage >= 90 ? "Distinction" : percentage >= 80 ? "Merit" : percentage >= 70 ? "Pass" : "Not Passed",
    breakdown,
    timeElapsed,
  };
}

export function generateCertificateId(name, courseId) {
  const ts = Date.now().toString(36).toUpperCase();
  const nameCode = name.replace(/\s/g, "").substring(0, 3).toUpperCase() || "XXX";
  return `WLGA-${courseId}-${nameCode}-${ts}`;
}
