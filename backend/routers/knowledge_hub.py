from fastapi import APIRouter
from services.rag_service import search_transcripts, ingest_transcripts, ingest_market_data
from services.openai_service import search_knowledge_hub
import json
import os

router = APIRouter()

def _ensure_ingested():
    try:
        ingest_transcripts()
        ingest_market_data()
    except Exception:
        pass

@router.get("/sessions")
def list_session_summaries():
    path = os.path.join(os.path.dirname(__file__), "../data/transcripts.json")
    if not os.path.exists(path):
        return []
    with open(path) as f:
        return json.load(f)

@router.get("/search")
def search(query: str = ""):
    if not query.strip():
        return {"answer": "", "sources": [], "key_quotes": [], "related_topics": [], "confidence": "low", "chunks": []}
    
    _ensure_ingested()
    chunks = search_transcripts(query, n_results=5)
    context_texts = [c["content"] for c in chunks]
    
    if not context_texts:
        return {
            "answer": "No relevant session content found for this query. Try searching for topics like BioLPG, supply security, clean cooking, or digital transformation.",
            "sources": [],
            "key_quotes": [],
            "related_topics": ["BioLPG certification", "Supply security", "Clean cooking"],
            "confidence": "low",
            "chunks": []
        }
    
    try:
        ai_response = search_knowledge_hub(query, context_texts)
    except Exception:
        ai_response = {
            "answer": "Unable to generate AI answer. Please check your API key or try a different query.",
            "sources": [],
            "key_quotes": [],
            "related_topics": [],
            "confidence": "low"
        }
    
    return {
        **ai_response,
        "chunks": chunks[:3]
    }

@router.get("/session/{session_id}")
def get_session_detail(session_id: str):
    path = os.path.join(os.path.dirname(__file__), "../data/transcripts.json")
    if not os.path.exists(path):
        return {"error": "Session not found"}
    with open(path) as f:
        sessions = json.load(f)
    session = next((s for s in sessions if s.get("session_id") == session_id), None)
    if not session:
        return {"error": "Session not found"}
    return session
