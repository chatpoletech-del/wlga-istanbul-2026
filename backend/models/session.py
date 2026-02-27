from pydantic import BaseModel
from typing import Optional, List

class SessionSummary(BaseModel):
    session_id: str
    title: str
    speaker: str
    duration_mins: int
    summary: str
    key_quote: Optional[str] = None
    action_items: Optional[str] = None
