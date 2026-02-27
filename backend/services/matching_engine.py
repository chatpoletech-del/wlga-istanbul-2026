import json
import os
from typing import List, Tuple

def load_attendees() -> List[dict]:
    path = os.path.join(os.path.dirname(__file__), "../data/attendees.json")
    with open(path) as f:
        return json.load(f)

def compute_compatibility_score(a: dict, b: dict) -> int:
    """
    Score compatibility between two attendees (0-100).
    Uses weighted scoring across 5 dimensions.
    """
    score = 0

    # 1. Value chain complementarity (0-30 pts)
    chain_pairs = {
        ("Producer", "Distributor"): 30,
        ("Producer", "Trader"): 28,
        ("Trader", "Distributor"): 25,
        ("Equipment Manufacturer", "Distributor"): 22,
        ("Equipment Manufacturer", "Producer"): 18,
        ("NGO/Development", "Distributor"): 20,
        ("NGO/Development", "Producer"): 15,
        ("rLPG/BioLPG", "Distributor"): 25,
        ("rLPG/BioLPG", "Trader"): 22,
    }
    vc_a = (a.get("value_chain_position") or "").split("/")[0].strip()
    vc_b = (b.get("value_chain_position") or "").split("/")[0].strip()
    pair = (vc_a, vc_b)
    rev_pair = (vc_b, vc_a)
    score += chain_pairs.get(pair, chain_pairs.get(rev_pair, 8 if vc_a != vc_b else 5))

    # 2. Goal alignment (0-25 pts)
    goal_keywords_a = set((a.get("primary_goal", "") + " " + a.get("secondary_goal", "")).lower().split())
    goal_keywords_b = set((b.get("primary_goal", "") + " " + b.get("secondary_goal", "")).lower().split())
    overlap = len(goal_keywords_a & goal_keywords_b)
    score += min(25, overlap * 3)

    # 3. Geographic complementarity (0-20 pts)
    same_country = a.get("country") == b.get("country")
    region_map = {
        "Turkey": "EMEA", "Saudi Arabia": "MENA", "UAE": "MENA", "Egypt": "MENA",
        "Nigeria": "Africa", "Kenya": "Africa", "South Africa": "Africa", "Ghana": "Africa", "Angola": "Africa", "Morocco": "Africa", "Ivory Coast": "Africa",
        "India": "S.Asia", "Pakistan": "S.Asia", "Bangladesh": "S.Asia",
        "Indonesia": "SE.Asia", "Vietnam": "SE.Asia", "Thailand": "SE.Asia", "Malaysia": "SE.Asia", "Japan": "E.Asia",
        "Brazil": "LatAm", "Argentina": "LatAm", "Colombia": "LatAm", "Mexico": "LatAm",
        "UK": "Europe", "France": "Europe", "Germany": "Europe", "Netherlands": "Europe", "Italy": "Europe", "Spain": "Europe", "Poland": "Europe",
        "USA": "N.America", "Australia": "Oceania", "Singapore": "SE.Asia",
    }
    region_a = region_map.get(a.get("country", ""), "Other")
    region_b = region_map.get(b.get("country", ""), "Other")
    if same_country:
        score += 5
    elif region_a != region_b:
        score += 20
    else:
        score += 12

    # 4. Segment fit (0-15 pts)
    seg_a = (a.get("lpg_segment") or "").split("/")[0].strip()
    seg_b = (b.get("lpg_segment") or "").split("/")[0].strip()
    if seg_a == seg_b:
        score += 8
    else:
        score += 15

    # 5. Session interest overlap (0-10 pts)
    sess_a = set(a.get("sessions_of_interest", []))
    sess_b = set(b.get("sessions_of_interest", []))
    common = len(sess_a & sess_b)
    score += min(10, common * 3)

    weight_a = a.get("match_weight", 0.85)
    weight_b = b.get("match_weight", 0.85)
    final = score * ((weight_a + weight_b) / 2)

    return max(0, min(100, round(final)))


def get_top_matches(attendee_id: str, top_n: int = 20) -> List[Tuple[dict, int]]:
    """Return top N matches for a given attendee, sorted by score."""
    attendees = load_attendees()
    target = next((a for a in attendees if a.get("id") == attendee_id), None)
    if not target:
        return []

    scored = []
    for other in attendees:
        if other.get("id") == attendee_id:
            continue
        score = compute_compatibility_score(target, other)
        scored.append((other, score))

    return sorted(scored, key=lambda x: x[1], reverse=True)[:top_n]
