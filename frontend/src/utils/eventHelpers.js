/**
 * Event date formatting and status helpers for WLGA Events Hub
 */

/**
 * Format ISO date string for display (e.g. "12–16 October 2026")
 */
export function formatEventDateRange(startStr, endStr) {
  if (!startStr) return "";
  const start = new Date(startStr);
  const end = endStr ? new Date(endStr) : start;
  const opts = { day: "numeric", month: "long", year: "numeric" };
  const startF = start.toLocaleDateString("en-GB", opts);
  const endF = end.toLocaleDateString("en-GB", opts);
  if (startF === endF) return startF;
  return `${start.getDate()}–${end.getDate()} ${end.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}`;
}

/**
 * Get human-readable status: "live" | "upcoming" | "past"
 */
export function getEventStatus(event) {
  const now = new Date();
  const start = new Date(event.dates.start);
  const end = new Date(event.dates.end);
  if (now >= start && now <= end) return "live";
  if (now < start) return "upcoming";
  return "past";
}

/**
 * Days until event start (positive = future, negative = past)
 */
export function getDaysUntilEvent(dateStr) {
  const now = new Date();
  const event = new Date(dateStr);
  return Math.ceil((event - now) / (1000 * 60 * 60 * 24));
}

/**
 * Country list for registration dropdown (~50 countries)
 */
export const REGISTRATION_COUNTRIES = [
  "United Kingdom", "United States", "France", "Germany", "Spain", "Italy", "Netherlands", "Belgium", "Turkey", "Brazil",
  "Japan", "China", "India", "South Korea", "Australia", "Canada", "Mexico", "Argentina", "Chile", "Colombia",
  "Saudi Arabia", "UAE", "Oman", "Qatar", "Kuwait", "Egypt", "Kenya", "South Africa", "Nigeria", "Ghana",
  "Indonesia", "Malaysia", "Singapore", "Thailand", "Vietnam", "Philippines", "Pakistan", "Bangladesh", "Poland", "Sweden",
  "Norway", "Denmark", "Finland", "Switzerland", "Austria", "Portugal", "Greece", "Ireland", "New Zealand", "Israel",
];

export const HEAR_ABOUT_OPTIONS = [
  "WLGA website",
  "Liquid Gas Week website",
  "Email from WLGA",
  "Colleague / referral",
  "LinkedIn / social media",
  "Industry publication",
  "Other",
];
