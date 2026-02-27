/**
 * Engagement score calculation helpers for WLGA Leadership Partner Programme
 */

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

export function scoreToArcOffset(score, circumference = 283) {
  const clamped = Math.min(100, Math.max(0, score));
  return circumference - (clamped / 100) * circumference;
}
