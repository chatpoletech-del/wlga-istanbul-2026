from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import matchmaking, session_qa, knowledge_hub, speaker_brief
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="WLGA Istanbul 2026 AI Suite API",
    description="POC for WLGA Liquid Gas Week AI Event Experience",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "http://localhost:5173").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(matchmaking.router, prefix="/api/matchmaking", tags=["Matchmaking"])
app.include_router(session_qa.router, prefix="/api/session", tags=["Session Q&A"])
app.include_router(knowledge_hub.router, prefix="/api/knowledge", tags=["Knowledge Hub"])
app.include_router(speaker_brief.router, prefix="/api/speaker", tags=["Speaker Briefs"])

@app.get("/health")
def health():
    return {"status": "ok", "service": "WLGA AI Suite POC"}
