import uuid
from fastapi import UploadFile, Form, File
from fastapi.responses import JSONResponse
from fastapi import Request

from controllers.pdf_controller import process_pdf
from controllers.csv_controller import process_csv
from controllers.doc_controller import process_doc
from controllers.web_controller import process_web
from controllers.process_query import process_query
from state import save_vectors, load_vector


def register_routes(app):
    @app.post("/upload")
    async def upload_file(file: UploadFile = File(None), url: str = Form(None)):
        try:
            doc_id = str(uuid.uuid4())
            vectorstore = None

            # Case 1: URL upload
            if url:
                vectorstore = process_web(url)
                save_vectors(vectorstore, doc_id)
                return JSONResponse(content={"message": "URL processed", "doc_id": doc_id})

            # Case 2: File upload
            if not file:
                return JSONResponse(content={"error": "No file or URL provided"}, status_code=400)

            if file.filename.endswith(".pdf"):
                vectorstore = process_pdf(file, doc_id)
            elif file.filename.endswith(".csv"):
                vectorstore = process_csv(file, doc_id)
            elif file.filename.endswith(".docx"):
                vectorstore = process_doc(file, doc_id)
            else:
                return JSONResponse(content={"error": "Unsupported file type"}, status_code=400)

            save_vectors(vectorstore, doc_id)
            return JSONResponse(content={"message": "File processed", "doc_id": doc_id})

        except Exception as e:
            return JSONResponse(content={"error": str(e)}, status_code=500)

    @app.post("/ask")
    async def ask_question(request: Request):
        try:
            data = await request.json()
            query = data.get("query")
            doc_id = data.get("doc_id")

            if not query or not doc_id:
                return JSONResponse(content={"error": "Both query and doc_id are required"}, status_code=400)

            vectorstore = load_vector(doc_id)
            if not vectorstore:
                return JSONResponse(content={"error": "No document found for this doc_id"}, status_code=404)

            answer = process_query(query, vectorstore)
            return JSONResponse(content=answer)

        except Exception as e:
            return JSONResponse(content={"error": str(e)}, status_code=500)
