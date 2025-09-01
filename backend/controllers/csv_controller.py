import tempfile
from fastapi.responses import JSONResponse
from langchain_community.document_loaders import CSVLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from state import save_vectors

def process_csv(file, doc_id):
    try:
        # Save file temporarily (FastAPI UploadFile is a stream)
        with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as temp_file:
            temp_file.write(file.file.read())
            temp_file.flush()
            loader = CSVLoader(file_path=temp_file.name)
            docs = loader.load()

        # Split into chunks
        splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        chunks = splitter.split_documents(docs)

        # Attach doc_id metadata
        for chunk in chunks:
            chunk.metadata["doc_id"] = doc_id

        # Save in Qdrant
        save_vectors(chunks, doc_id)
        return True
    
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
