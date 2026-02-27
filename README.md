# WLGA Istanbul 2026 AI Suite — POC
Proof of Concept for the World Liquid Gas Association's Liquid Gas Week Istanbul 2026 — a full-stack AI-powered event experience platform.

## Quick Start
1. Copy `.env.example` to `.env` and add your `OPENAI_API_KEY`.
2. Run: `docker-compose up --build`
3. Open: http://localhost:5173

## Modules

- **Matchmaking**: http://localhost:5173/matchmaking  
- **Session Q&A**: http://localhost:5173/session-qa  
- **Knowledge Hub**: http://localhost:5173/knowledge-hub  
- **Speaker Briefs**: http://localhost:5173/speaker-briefs  

## API Docs

- Swagger UI: http://localhost:8000/docs  

## Tech Stack

| Layer        | Technology                    |
|-------------|-------------------------------|
| Frontend    | React 18 + Vite + Tailwind    |
| Backend     | Python 3.11 + FastAPI        |
| AI / LLM    | OpenAI API (e.g. gpt-4o)     |
| RAG         | ChromaDB + sentence-transformers |
| Real-time   | Socket.IO (Node.js)           |
| PDF         | WeasyPrint                    |

## Data

All 50 attendees, 40 questions, 6 session transcripts, market data, and speaker templates are pre-loaded from the WLGA POC data (see `backend/data/`).

## Running without Docker

**Backend**

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Add OPENAI_API_KEY to .env
uvicorn main:app --reload --port 8000
```

**Realtime (WebSocket)**

```bash
cd realtime
npm install
npm start
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_BASE_URL=http://localhost:8000` and `VITE_WEBSOCKET_URL=http://localhost:3001` in `frontend/.env` if needed.

## Demo Script (James Rockall Pitch)

1. **Matchmaking**: Select ATT-1001 (or new profile), show matches, download Intelligence Pack PDF.
2. **Live Q&A**: Share session-qa URL, submit questions from phones, show moderator dashboard and Run AI Clustering.
3. **Knowledge Hub**: Search e.g. "What did speakers say about BioLPG certification?" and "What commitments did the African Development Bank make?"
4. **Speaker Briefs**: Generate AI Brief for Dr. Fatih Birol (SPK-001).
