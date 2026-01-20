import os
import chromadb
from typing import List
from dotenv import load_dotenv
from langchain_core.documents import Document
from langchain_huggingface import HuggingFaceEmbeddings

load_dotenv() 

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

client = chromadb.CloudClient(
  api_key=os.getenv("CHROMA_API_KEY"),
  tenant=os.getenv("CHROMA_TENANT"),
  database=os.getenv("CHROMA_DATABASE")
)

COLLECTION_NAME = os.getenv("CHROMA_COLLECTION")

collection = client.get_or_create_collection(
    name=COLLECTION_NAME
)

def save_vectors(chunks: List[Document], doc_id: str) -> None:
    """
    chunks: List[LangChain Document]
    doc_id: UUID string
    """

    ids = []
    documents = []
    metadatas = []

    for i, chunk in enumerate(chunks):
        ids.append(f"{doc_id}_{i}")
        documents.append(chunk.page_content)

        metadata = dict(chunk.metadata) if chunk.metadata else {}
        metadata["doc_id"] = doc_id
        metadatas.append(metadata)

    collection.add(
        ids=ids,
        documents=documents,
        metadatas=metadatas
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
