import tempfile
from fastapi import UploadFile, HTTPException
from langchain_community.document_loaders import Docx2txtLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from state import save_vectors

def process_doc(file: UploadFile, doc_id: str):
    try:
        # Save uploaded file to a temp .docx
        with tempfile.NamedTemporaryFile(delete=False, suffix=".docx") as temp_file:
            content = file.file.read()
            temp_file.write(content)
            temp_file.flush()
            file_path = temp_file.name

        # Load DOCX into documents
        loader = Docx2txtLoader(file_path)
        docs = loader.load()

        # Split into chunks
        splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        chunks = splitter.split_documents(docs)

        # Attach doc_id metadata
        for chunk in chunks:
            chunk.metadata["doc_id"] = doc_id

        # Save into Qdrant Cloud
        save_vectors(chunks, doc_id)

        return True

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
