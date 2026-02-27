from pydantic import BaseModel
from typing import Optional, List

class AttendeeProfile(BaseModel):
    id: Optional[str] = None
    full_name: str
    job_title: str
    company: str
    country: str
    value_chain_position: str  # Producer | Trader | Distributor | Equipment Manufacturer | NGO | rLPG
    company_size: str          # <50 | 50-200 | 200-1000 | 1000-5000 | >5000
    lpg_segment: str           # Residential | Autogas | Industrial | Clean Cooking | BioLPG | Trading
    primary_goal: str
    secondary_goal: str
    sessions_of_interest: List[str]
    networking_preference: str  # Open to all | Same region | Same value chain | Strategic only
    open_to_intro: bool = True
    match_weight: float = 0.85
    email: Optional[str] = None
    linkedin_url: Optional[str] = None
    vip_status: str = "Delegate"  # Speaker | VIP | Delegate

class MatchResult(BaseModel):
    match_id: str
    attendee_a: AttendeeProfile
    attendee_b: AttendeeProfile
    score: int  # 0-100
    reason: str
    category: str
    generated_at: str
