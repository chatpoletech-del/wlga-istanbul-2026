from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from models.attendee import AttendeeProfile
from services.matching_engine import get_top_matches, load_attendees, compute_compatibility_score
from services.openai_service import generate_match_reason, generate_intelligence_pack_narrative
from services.pdf_service import generate_intelligence_pack_pdf
import uuid
from datetime import datetime

router = APIRouter()

def _profile_to_dict(profile: AttendeeProfile) -> dict:
    d = profile.model_dump() if hasattr(profile, "model_dump") else profile.dict()
    return d

@router.get("/attendees")
def list_attendees():
    """Return all 50 attendees for demo purposes."""
    return load_attendees()

@router.get("/attendees/{attendee_id}")
def get_attendee(attendee_id: str):
    attendees = load_attendees()
    attendee = next((a for a in attendees if a.get("id") == attendee_id), None)
    if not attendee:
        raise HTTPException(status_code=404, detail="Attendee not found")
    return attendee

@router.post("/profile")
def create_attendee_profile(profile: AttendeeProfile):
    """Accept a new attendee profile and return their top matches immediately."""
    profile.id = f"ATT-DEMO-{uuid.uuid4().hex[:6].upper()}"
    p_dict = _profile_to_dict(profile)
    attendees = load_attendees()
    
    matches = []
    for other in attendees[:50]:
        score = compute_compatibility_score(p_dict, other)
        if score >= 60:
            matches.append((other, score))
    
    matches = sorted(matches, key=lambda x: x[1], reverse=True)[:20]
    
    results = []
    for other, score in matches[:10]:
        try:
            ai_data = generate_match_reason(p_dict, other)
            reason = ai_data.get("reason", "Strong business alignment")
            category = ai_data.get("category", "Peer Exchange")
            starter = ai_data.get("conversation_starter", "")
        except Exception:
            reason = "Complementary business profiles with strong networking potential"
            category = "Peer Exchange"
            starter = ""
        
        results.append({
            "match_id": f"MATCH-{uuid.uuid4().hex[:8].upper()}",
            "attendee_a": p_dict,
            "attendee_b": other,
            "score": score,
            "reason": reason,
            "category": category,
            "conversation_starter": starter,
            "generated_at": datetime.now().isoformat()
        })
    
    for other, score in matches[10:]:
        results.append({
            "match_id": f"MATCH-{uuid.uuid4().hex[:8].upper()}",
            "attendee_a": p_dict,
            "attendee_b": other,
            "score": score,
            "reason": "Strong compatibility based on business profile analysis",
            "category": "Peer Exchange",
            "conversation_starter": "",
            "generated_at": datetime.now().isoformat()
        })
    
    return {
        "attendee": p_dict,
        "total_matches": len(results),
        "matches": results
    }

@router.get("/matches/{attendee_id}")
def get_matches(attendee_id: str, limit: int = 20):
    """Get pre-computed top matches for an existing attendee."""
    top_matches = get_top_matches(attendee_id, top_n=limit)
    if not top_matches:
        raise HTTPException(status_code=404, detail="Attendee not found")
    
    attendees = load_attendees()
    target = next((a for a in attendees if a.get("id") == attendee_id), None)
    
    results = []
    for other, score in top_matches:
        results.append({
            "match_id": f"MATCH-{uuid.uuid4().hex[:8].upper()}",
            "attendee_b": other,
            "score": score,
            "category": "Peer Exchange",
            "reason": "Based on business profile compatibility analysis"
        })
    
    return {"attendee": target, "matches": results, "total": len(results)}

@router.get("/intelligence-pack/{attendee_id}/pdf")
def download_intelligence_pack(attendee_id: str):
    """Generate and download a PDF Intelligence Pack for an attendee."""
    top_matches = get_top_matches(attendee_id, top_n=20)
    if not top_matches:
        raise HTTPException(status_code=404, detail="Attendee not found")
    
    attendees = load_attendees()
    target = next((a for a in attendees if a.get("id") == attendee_id), None)
    
    match_list = [{"attendee_b": other, "score": score, "reason": "Compatible profile", "category": "Peer"} 
                  for other, score in top_matches]
    
    narrative = generate_intelligence_pack_narrative(target, match_list)
    pdf_bytes = generate_intelligence_pack_pdf(target, match_list, narrative)
    
    return StreamingResponse(
        iter([pdf_bytes]),
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename=Istanbul_2026_Pack_{attendee_id}.pdf"}
    )
