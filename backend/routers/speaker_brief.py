from fastapi import APIRouter
from services.openai_service import generate_speaker_brief
import json
import os

router = APIRouter()

@router.get("/speakers")
def list_speakers():
    path = os.path.join(os.path.dirname(__file__), "../data/speakers.json")
    if not os.path.exists(path):
        return []
    with open(path) as f:
        return json.load(f)

@router.post("/generate-brief/{speaker_id}")
def generate_brief(speaker_id: str):
    path = os.path.join(os.path.dirname(__file__), "../data/speakers.json")
    if not os.path.exists(path):
        return {"error": "Speaker not found"}
    with open(path) as f:
        speakers = json.load(f)
    
    speaker = next((s for s in speakers if s.get("id") == speaker_id), None)
    if not speaker:
        return {"error": "Speaker not found"}
    
    audience_data = {
        "session_registrations": speaker.get("expected_audience", 200),
        "seniority": "68% C-suite, 22% VP/Director, 10% Manager",
        "top_countries": speaker.get("top_audience_countries", ["Turkey", "Saudi Arabia", "UK", "USA", "UAE"]),
        "value_chain": "35% Distributor, 28% Producer, 18% Trader, 12% Equipment, 7% NGO",
        "top_questions": speaker.get("pre_submitted_questions", [])
    }
    
    session = {
        "title": speaker.get("session_title", ""),
        "duration_mins": speaker.get("duration_mins", 60),
        "description": speaker.get("session_description", "")
    }
    
    try:
        brief = generate_speaker_brief(speaker, audience_data, session)
        return {"speaker": speaker, "brief": brief}
    except Exception as e:
        return {"error": str(e), "speaker": speaker, "brief": None}
