import os
import chromadb
from typing import List
from dotenv import load_dotenv
from langchain_core.documents import Document
from langchain_ollama import OllamaEmbeddings

load_dotenv() 

embeddings = OllamaEmbeddings(model="nomic-embed-text")

CHROMA_HOST = os.getenv("CHROMA_HOST")

chroma_client = chromadb.HttpClient(host=CHROMA_HOST, port=8000)
chroma_client.heartbeat()

COLLECTION_NAME = os.getenv("CHROMA_COLLECTION")

collection = chroma_client.get_or_create_collection(
    name=COLLECTION_NAME,
    metadata={"hnsw:space": "cosine"}
)

def save_vectors(chunks: List[Document], doc_id: str) -> None:
    ids = []
    texts = []
    metadatas = []

    for i, chunk in enumerate(chunks):
        ids.append(f"{doc_id}_{i}")
        texts.append(chunk.page_content)

        metadata = dict(chunk.metadata) if chunk.metadata else {}
        metadata["doc_id"] = doc_id
        metadatas.append(metadata)

    vectors = embeddings.embed_documents(texts)

    collection.add(
        ids=ids,
        documents=texts,
        metadatas=metadatas,
        embeddings=vectors
    )


def load_vector(query: str, doc_id: str, k: int = 5):
    """
    Returns top-k chunks for a query scoped to a document
    """

    query_embedding = embeddings.embed_query(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=k,
        where={"doc_id": doc_id}
    )

    return results
