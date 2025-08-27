import os
from qdrant_client import QdrantClient
from langchain_qdrant import Qdrant
from langchain_community.embeddings import HuggingFaceBgeEmbeddings

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

embeddings = HuggingFaceBgeEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

qdrant_client = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY
)

def save_vectors(chunks, doc_id):
    collection_name = "RAGify"

    vectorstore = Qdrant.from_documents(
        documents=chunks,
        embedding=embeddings,
        url=QDRANT_URL,
        api_key=QDRANT_API_KEY,
        collection_name=collection_name
    )

    return vectorstore

def load_vector(doc_id):
    collection_name = "RAGify"

    vectorstore = Qdrant(
        client=qdrant_client,
        collection_name=collection_name,
        embeddings=embeddings
    )

    retriever = vectorstore.as_retriever(
        search_kwargs={
            "k": 5,
            "filter":{"must":[{"key": "doc_id", "match": {"value": doc_id}}]}
        }
    )
    return retriever