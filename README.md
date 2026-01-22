# 📘 RAGify – Backend

A lightweight **Retrieval-Augmented Generation (RAG) backend** built with **Python + FastAPI**.  
It allows users to upload documents (PDF, DOCX, CSV, or Web URLs), store embeddings in a vector database, and ask natural-language questions over their own data.

This backend is designed to be **simple, local-first, and production-ready**.

---

## 🚀 Backend Features

- Upload documents (**PDF, DOCX, CSV**) or ingest content from **URLs**
- Generate embeddings and store them in **ChromaDB**
- Query documents using **local LLM (Ollama + TinyLlama)**
- Support for **multiple documents** via unique `doc_id`
- REST APIs powered by **FastAPI**
- Uses **LangChain** for loaders, splitters, retrievers, and chains
- Fully **offline-capable** once models are installed

---

## 🛠️ Backend Tech Stack

- **Language**: Python
- **API Framework**: FastAPI
- **RAG Framework**: LangChain
- **Vector Database**: ChromaDB
- **LLM Runtime**: Ollama (local)
- **LLM Model**: TinyLlama
- **Embedding Flow**: LangChain Embeddings + Chroma

---

## 📂 Project Structure (Backend)
```text
backend/
│
├── app.py
│
├── routes/
│   └── routes.py
│
├── controllers/
│   ├── csv_controller.py
│   ├── doc_controller.py
│   ├── pdf_controller.py
│   ├── web_controller.py
│   └── process_query.py
│
├── lib/
│   ├── state.py
│   └── validateFile.py
```
---

## ⚙️ Setup Instructions (Backend Only)

### Clone the Repository

```bash
git clone https://github.com/08abhinav/RAGify.git 
cd backend
```

## Create and Activate Virtual Environment

```bash
python -m venv venv
source venv/Scripts/activate
```
## Install Python dependencies

```bash
pip install -r requirements.txt
```

## Run backend

```bash
uvicorn app:app --reload
```

## Access the API

- Server: http://localhost:8000
- Swagger UI: http://localhost:8000/docs
