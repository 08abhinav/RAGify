import tempfile
from fastapi import UploadFile, HTTPException
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from state import save_vectors

def process_pdf(file: UploadFile, doc_id: str):
    try:
        # Save UploadFile into a temporary file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
            contents = file.file.read()  # read bytes
            temp_file.write(contents)
            temp_file.flush()
            file_path = temp_file.name

        # Load the PDF
        loader = PyPDFLoader(file_path)
        docs = loader.load()

        # Split text into chunks
        splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        chunks = splitter.split_documents(docs)

        # Attach doc_id metadata
        for chunk in chunks:
            chunk.metadata["doc_id"] = doc_id

        # Save into Qdrant
        save_vectors(chunks, doc_id)
        return True

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"PDF processing failed: {str(e)}")
