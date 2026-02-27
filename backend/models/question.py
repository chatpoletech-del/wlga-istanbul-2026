from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Question(BaseModel):
    id: Optional[str] = None
    session_id: str
    session_title: str
    submitted_by: str         # Attendee ID
    submitter_name: str
    question_text: str
    votes: int = 0
    cluster_id: Optional[str] = None
    cluster_label: Optional[str] = None
    priority_rank: Optional[int] = None
    moderator_selected: bool = False
    status: str = "Submitted"  # Submitted | Reviewed | Asked | Declined
    submitted_at: str = datetime.now().isoformat()

class QuestionSubmission(BaseModel):
    session_id: str
    attendee_id: str
    question_text: str
