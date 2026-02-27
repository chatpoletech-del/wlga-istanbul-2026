import chromadb
import json
import os
from chromadb.utils import embedding_functions

ef = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"
)

CHROMA_PATH = os.path.join(os.path.dirname(__file__), "..", "chroma_db")
client = chromadb.PersistentClient(path=CHROMA_PATH)

def get_or_create_collection(name: str):
    return client.get_or_create_collection(name=name, embedding_function=ef)


def ingest_transcripts():
    """Load session transcripts into ChromaDB vector store."""
    collection = get_or_create_collection("wlga_knowledge_hub")
    
    if collection.count() > 0:
        return
    
    path = os.path.join(os.path.dirname(__file__), "../data/transcripts.json")
    with open(path) as f:
        transcripts = json.load(f)
    
    documents, metadatas, ids = [], [], []
    
    for t in transcripts:
        documents.append(t.get("summary", ""))
        metadatas.append({
            "session_id": t.get("session_id", ""),
            "session_title": t.get("title", ""),
            "speaker": t.get("speaker", ""),
            "type": "summary"
        })
        ids.append(f"{t.get('session_id', '')}_summary")
        
        if t.get("key_quote"):
            documents.append(t["key_quote"])
            metadatas.append({
                "session_id": t.get("session_id", ""),
                "session_title": t.get("title", ""),
                "speaker": t.get("speaker", ""),
                "type": "quote"
            })
            ids.append(f"{t.get('session_id', '')}_quote")
        
        if t.get("action_items"):
            documents.append(t["action_items"])
            metadatas.append({
                "session_id": t.get("session_id", ""),
                "session_title": t.get("title", ""),
                "speaker": t.get("speaker", ""),
                "type": "action_items"
            })
            ids.append(f"{t.get('session_id', '')}_actions")
    
    if documents:
        collection.add(documents=documents, metadatas=metadatas, ids=ids)
    print("✅ Ingested transcripts into ChromaDB")


def search_transcripts(query: str, n_results: int = 5) -> list:
    """Search the knowledge hub and return relevant chunks with metadata."""
    collection = get_or_create_collection("wlga_knowledge_hub")
    count = collection.count()
    if count == 0:
        ingest_transcripts()
        count = collection.count()
    
    if count == 0:
        return []
    
    results = collection.query(
        query_texts=[query],
        n_results=min(n_results, count)
    )
    
    chunks = []
    for i, doc in enumerate(results["documents"][0]):
        meta = results["metadatas"][0][i]
        chunks.append({
            "content": doc,
            "session_title": meta.get("session_title", ""),
            "speaker": meta.get("speaker", ""),
            "type": meta.get("type", ""),
            "distance": results["distances"][0][i] if results.get("distances") else 0
        })
    
    return chunks


def ingest_market_data():
    """Load LPG market data into a separate ChromaDB collection."""
    collection = get_or_create_collection("wlga_market_data")
    
    if collection.count() > 0:
        return
    
    path = os.path.join(os.path.dirname(__file__), "../data/market_data.json")
    if not os.path.exists(path):
        return
    with open(path) as f:
        market_data = json.load(f)
    
    documents, metadatas, ids = [], [], []
    for entry in market_data:
        text = f"LPG demand in {entry.get('region', '')} for {entry.get('application', '')}: {entry.get('data_summary', '')}"
        documents.append(text)
        metadatas.append({"region": entry.get("region", ""), "application": entry.get("application", "")})
        ids.append(f"market_{entry.get('region', '')}_{entry.get('application', '')}".replace(" ", "_"))
    
    if documents:
        collection.add(documents=documents, metadatas=metadatas, ids=ids)
    print("✅ Ingested market data into ChromaDB")
