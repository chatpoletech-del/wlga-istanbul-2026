from pydantic import BaseModel
from typing import Optional
from .attendee import AttendeeProfile

class MatchResult(BaseModel):
    match_id: str
    attendee_a: Optional[dict] = None
    attendee_b: dict
    score: int
    reason: str
    category: str
    conversation_starter: Optional[str] = None
    generated_at: Optional[str] = None
