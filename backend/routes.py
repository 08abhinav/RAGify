from flask import request, jsonify
from controllers.web_controller import process_web
from controllers.pdf_controller import process_pdf
from controllers.doc_controller import process_doc
from controllers.csv_controller import process_csv

def register_routes(app):
    @app.route("/upload", methods=["POST"])
    def upload_file():
        # Checking for url params
        if "url" in request.form:
            url = request.form.get("url")
            return process_web(url)
        
        if "file" not in request.form:
            return jsonify({"error":"No url or file is provided"}), 400
        
        file = request.form["file"]

        if file.filename.endswith(".pdf"):
            return process_pdf(file)

        elif file.filename.endswith(".csv"):
            return process_csv(file)

        elif file.filename.endswith(".docx"):
            return process_doc(file)
        
        else:
            return jsonify({"error": "file not supported"}),400

