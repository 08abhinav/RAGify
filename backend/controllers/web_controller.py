import os
from dotenv import load_dotenv
from state import save_vectors
from langchain_community.document_loaders import WebBaseLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load environment variables
load_dotenv()
os.environ["USER_AGENT"] = os.getenv("USER_AGENT", "ragify/1.0")

def process_web(url, doc_id):
    try:
        # Load webpage with proper User-Agent
        documents = WebBaseLoader(
            url,
            header_template={"User-Agent": os.environ["USER_AGENT"]}
        ).load()

        # Split into chunks
        splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
        chunks = splitter.split_documents(documents)

        # Attach doc_id metadata to every chunk
        for chunk in chunks:
            chunk.metadata["doc_id"] = doc_id

        # Save into Qdrant
        save_vectors(chunks, doc_id)
        return True

    except Exception as e:
        raise RuntimeError(f"Error processing web page: {str(e)}")
