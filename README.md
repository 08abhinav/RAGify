# RAGify

A lightweight **Retrieval-Augmented Generation (RAG) ** built with **Python + FastAPI and React.js**.  
It allows users to upload documents (PDF, DOCX, CSV, or Web URLs), store embeddings in a vector database, and ask natural-language questions over their own data.

This backend is designed to be **simple, local-first, and production-ready**.

---

## Backend Features

- Upload documents (**PDF, DOCX, CSV**) or ingest content from **URLs**
- Generate embeddings and store them in **ChromaDB**
- Query documents using **local LLM (Ollama + TinyLlama)**
- Support for **multiple documents** via unique `doc_id`
- REST APIs powered by **FastAPI**
- Uses **LangChain** for loaders, splitters, retrievers, and chains
- Fully **offline-capable** once models are installed

## Frontend Features

- Ask natural-language questions over uploaded documents
- Real-time answers powered by the RAG backend
- Minimal, modern UI with clear information hierarchy
- Fully decoupled from backend (API-driven)
- Responsive design (desktop-first, mobile-friendly)
---

## Tech Stack

- **Language**: Python, Typescript
- **Framework**: FastAPI, React
- **RAG Framework**: LangChain
- **Vector Database**: ChromaDB
- **LLM Runtime**: Ollama (local)
- **LLM Model**: TinyLlama
- **Embedding Flow**: LangChain Embeddings + Chroma
- **Styling**: Tailwindcss
- **UI Componenets**: shadcn/ui

---

## Project Structure (Backend and Frontend)
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

```text
frontend/
│
├── src/
│   ├── components/
│   │   ├── Nav.tsx
│   │   └── ui/
│   │       └── button.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Explore.tsx
│   │   └── Rag.tsx
│   │
│   ├── utils/
│   │   └── Steps.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```
---

## Setup Instructions (Backend Only)

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

## Setup Instructions (Frontend Only)

### Clone the Repository

```bash
cd backend
```

## Install Python dependencies

```bash
npm i
```

## Run backend

```bash
npm run dev
```

## Access the Frontend

- Local URL: http://localhost:5173
 