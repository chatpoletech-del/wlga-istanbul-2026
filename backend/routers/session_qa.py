from fastapi import APIRouter, Query
from models.question import QuestionSubmission
from services.openai_service import cluster_questions
import json
import os
import uuid
from datetime import datetime

router = APIRouter()

questions_store: list = []

def load_seed_questions():
    path = os.path.join(os.path.dirname(__file__), "../data/questions.json")
    if not os.path.exists(path):
        return []
    with open(path) as f:
        return json.load(f)

@router.get("/sessions")
def list_sessions():
    return [
        {"id": "SES-001", "title": "Geopolitics of LPG: Supply Security in 2026", "duration": 75},
        {"id": "SES-002", "title": "BioLPG & Renewable LPG: The Road to Net Zero", "duration": 60},
        {"id": "SES-003", "title": "Clean Cooking: Achieving Universal LPG Access by 2030", "duration": 60},
        {"id": "SES-004", "title": "Digital Transformation in the LPG Industry", "duration": 45},
        {"id": "SES-005", "title": "LPG Safety Standards: Global Harmonisation", "duration": 60},
        {"id": "SES-006", "title": "LPG Financing & Investment Trends", "duration": 45},
    ]

@router.get("/questions/{session_id}")
def get_questions(session_id: str):
    seed = [q for q in load_seed_questions() if q.get("session_id") == session_id]
    live = [q for q in questions_store if q.get("session_id") == session_id]
    all_questions = seed + live
    return sorted(all_questions, key=lambda x: x.get("votes", 0), reverse=True)

@router.post("/questions")
def submit_question(submission: QuestionSubmission):
    question = {
        "id": f"Q-LIVE-{uuid.uuid4().hex[:6].upper()}",
        "session_id": submission.session_id,
        "session_title": "",
        "submitted_by": submission.attendee_id,
        "submitter_name": "Live Attendee",
        "question_text": submission.question_text,
        "votes": 0,
        "cluster_id": None,
        "cluster_label": None,
        "priority_rank": None,
        "moderator_selected": False,
        "status": "Submitted",
        "submitted_at": datetime.now().isoformat()
    }
    questions_store.append(question)
    return question

@router.post("/questions/{question_id}/vote")
def vote_question(question_id: str):
    for q in load_seed_questions():
        if q.get("id") == question_id:
            return {"message": "Vote recorded", "votes": q.get("votes", 0) + 1}
    for q in questions_store:
        if q.get("id") == question_id:
            q["votes"] = q.get("votes", 0) + 1
            return {"message": "Vote recorded", "votes": q["votes"]}
    return {"message": "Question not found"}

@router.post("/cluster/{session_id}")
def cluster_session_questions(session_id: str):
    seed = [q for q in load_seed_questions() if q.get("session_id") == session_id]
    live = [q for q in questions_store if q.get("session_id") == session_id]
    all_qs = seed + live
    
    if not all_qs:
        return {"clusters": [], "top_5_for_moderator": [], "moderator_note": "", "message": "No questions found"}
    
    result = cluster_questions(all_qs)
    return result

@router.post("/questions/{question_id}/moderate")
def moderate_question(question_id: str, action: str = Query(..., description="select or decline")):
    for q in questions_store:
        if q.get("id") == question_id:
            q["moderator_selected"] = (action == "select")
            q["status"] = "Asked" if action == "select" else "Declined"
            return q
    return {"message": "Question not found (seed questions cannot be moderated in POC)"}
