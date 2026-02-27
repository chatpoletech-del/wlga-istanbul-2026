import os
import json
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY", ""))
MODEL = os.getenv("OPENAI_MODEL", "gpt-4o")


def _parse_json_response(text: str) -> dict:
    """Strip markdown code fences and parse JSON."""
    text = (text or "").strip()
    if text.startswith("```"):
        parts = text.split("```")
        text = parts[1] if len(parts) > 1 else text
        if text.startswith("json"):
            text = text[4:]
    return json.loads(text.strip())


def _chat(prompt: str, max_tokens: int = 800) -> str:
    response = client.chat.completions.create(
        model=MODEL,
        max_tokens=max_tokens,
        messages=[{"role": "user", "content": prompt}],
    )
    return (response.choices[0].message.content or "").strip()


def generate_match_reason(attendee_a: dict, attendee_b: dict) -> dict:
    """Generate AI match reason and category between two attendees."""
    prompt = f"""You are an expert LPG industry networking analyst for the World Liquid Gas Association (WLGA).

Analyse these two event attendees and explain why they should meet at Liquid Gas Week Istanbul 2026.

ATTENDEE A:
- Name: {attendee_a.get('full_name', '')}
- Role: {attendee_a.get('job_title', '')} at {attendee_a.get('company', '')}
- Country: {attendee_a.get('country', '')}
- Value Chain: {attendee_a.get('value_chain_position', '')}
- LPG Segment: {attendee_a.get('lpg_segment', '')}
- Primary Goal: {attendee_a.get('primary_goal', '')}
- Secondary Goal: {attendee_a.get('secondary_goal', '')}

ATTENDEE B:
- Name: {attendee_b.get('full_name', '')}
- Role: {attendee_b.get('job_title', '')} at {attendee_b.get('company', '')}
- Country: {attendee_b.get('country', '')}
- Value Chain: {attendee_b.get('value_chain_position', '')}
- LPG Segment: {attendee_b.get('lpg_segment', '')}
- Primary Goal: {attendee_b.get('primary_goal', '')}
- Secondary Goal: {attendee_b.get('secondary_goal', '')}

Respond ONLY with valid JSON in this exact format:
{{
  "reason": "2-sentence explanation of why they should meet, referencing their specific business contexts",
  "category": "one of: Buyer-Supplier | Regional Partnership | Investment Opportunity | Policy Alignment | Technical Collaboration | NGO-Industry | Peer Exchange",
  "conversation_starter": "One specific question Attendee A could ask Attendee B to start the conversation"
}}"""

    text = _chat(prompt, max_tokens=400)
    return _parse_json_response(text)


def cluster_questions(questions: list) -> dict:
    """Cluster a list of questions and return grouped clusters with labels."""
    q_list = "\n".join(
        [
            f"{i+1}. [{q.get('id', '')}] {q.get('question_text', '')} (votes: {q.get('votes', 0)})"
            for i, q in enumerate(questions)
        ]
    )

    prompt = f"""You are an AI moderator assistant for a WLGA LPG industry conference session.

Analyse these audience questions and group them into thematic clusters. For each cluster:
- Give it a clear label
- Identify the best-worded representative question to ask the speaker
- Rank it by combined audience interest

QUESTIONS:
{q_list}

Respond ONLY with valid JSON:
{{
  "clusters": [
    {{
      "cluster_id": "CLU-01",
      "label": "Short thematic label",
      "question_ids": ["Q-2001", "Q-2002"],
      "best_question": "The best single question to ask that covers this cluster",
      "total_votes": 45,
      "priority_rank": 1
    }}
  ],
  "top_5_for_moderator": ["CLU-01", "CLU-02", "CLU-03", "CLU-04", "CLU-05"],
  "moderator_note": "Brief observation about what the audience most wants to know"
}}"""

    text = _chat(prompt, max_tokens=1500)
    return _parse_json_response(text)


def search_knowledge_hub(query: str, context_chunks: list) -> dict:
    """RAG-powered search across session transcripts."""
    context = "\n\n---\n\n".join(context_chunks[:5])

    prompt = f"""You are the WLGA Knowledge Hub AI — an expert assistant for the LPG industry.

Using ONLY the session content below from Liquid Gas Week Istanbul 2026, answer the user's query.
Cite which session each piece of information comes from.
If the answer is not in the provided content, say so clearly.

SESSION CONTENT:
{context}

USER QUERY: {query}

Respond with valid JSON:
{{
  "answer": "Clear, direct answer to the query in 2-4 sentences",
  "sources": ["Session title 1", "Session title 2"],
  "key_quotes": ["Notable quote relevant to the query if any"],
  "related_topics": ["3 related topics the user might want to explore next"],
  "confidence": "high | medium | low"
}}"""

    text = _chat(prompt, max_tokens=800)
    return _parse_json_response(text)


def generate_speaker_brief(speaker: dict, audience_data: dict, session: dict) -> dict:
    """Generate a full AI speaker briefing document."""
    prompt = f"""You are an expert conference producer for WLGA (World Liquid Gas Association).

Generate a comprehensive speaker briefing document for Liquid Gas Week Istanbul 2026.

SPEAKER: {speaker.get('name', '')} — {speaker.get('title', '')}
SESSION: {session.get('title', '')} ({session.get('duration_mins', 60)} minutes)
SESSION DESCRIPTION: {session.get('description', 'Not provided')}

AUDIENCE PROFILE:
- Total attendees registered for this session: {audience_data.get('session_registrations', 200)}
- Seniority breakdown: {audience_data.get('seniority', '')}
- Top countries: {', '.join(audience_data.get('top_countries', []))}
- Value chain breakdown: {audience_data.get('value_chain', '')}
- Top 5 questions pre-submitted: {json.dumps(audience_data.get('top_questions', []))}

Respond with valid JSON:
{{
  "audience_summary": "2-3 sentence profile of who will be in the room",
  "top_3_audience_questions": ["Question 1", "Question 2", "Question 3"],
  "key_context": "3-4 sentences of relevant industry context the speaker should know",
  "suggested_talking_points": ["Point 1", "Point 2", "Point 3", "Point 4"],
  "do_not_cover": ["Topic to avoid 1", "Topic to avoid 2"],
  "opening_hook": "A suggested opening line or statistic to grab the audience's attention",
  "call_to_action": "What should the audience do or think differently after this session?"
}}"""

    text = _chat(prompt, max_tokens=1200)
    return _parse_json_response(text)


def generate_intelligence_pack_narrative(attendee: dict, matches: list) -> str:
    """Generate the personalised narrative intro for an attendee's match pack."""
    top_matches = matches[:3]
    match_summary = "\n".join(
        [
            f"- {m.get('attendee_b', {}).get('full_name', '')} ({m.get('attendee_b', {}).get('company', '')}, {m.get('attendee_b', {}).get('country', '')}): {m.get('reason', '')}"
            for m in top_matches
        ]
    )

    prompt = f"""You are the WLGA Istanbul 2026 networking AI.

Write a personalised 3-sentence introduction for {attendee.get('full_name', '')}'s "Istanbul Intelligence Pack" — a curated matchmaking report.

Their profile:
- Role: {attendee.get('job_title', '')} at {attendee.get('company', '')}
- Primary goal: {attendee.get('primary_goal', '')}
- Looking for: {attendee.get('networking_preference', '')}

Their top 3 matches:
{match_summary}

Write in a warm, professional tone. Reference their specific goals. Make them excited to attend."""

    return _chat(prompt, max_tokens=300)
