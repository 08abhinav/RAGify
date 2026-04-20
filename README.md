# RAGify

A lightweight Retrieval-Augmented Generation (RAG) built with **Python + FastAPI and React.js**.  
It allows users to upload documents (PDF, DOCX, CSV), store embeddings in a vector database, and ask natural-language questions over their own data.

---

## Backend Features

- Upload documents (**PDF, DOCX, CSV**)
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
|   |   ├── HeaderLogo.tsx
│   │   ├── Nav.tsx
│   │   └── ui/
|   |       ├── button.tsx
│   │       └── input.tsx
│   │
│   ├── pages/
|   |   ├── Explore.tsx
│   │   ├── Home.tsx
│   │   ├── Index.tsx
|   |   ├── NotFound.tsx
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

## Important Note (LLM Setup)
This project uses TinyLLaMA via Ollama for local LLM inference.
Before running the backend, make sure you:
- Install Ollama locally (Download from: https://ollama.com)
- Pull the TinyLLaMA model
- ```bash
  ollama pull tinyllama
  ```
- Run the model (Ollama runs on port 11434 by default)
  ```bash
  ollama run tinyllama
  ```

## Setup Instructions (Frontend Only)

```bash
cd frontend
```

## Install React dependencies

```bash
npm i
```

## Run frontend

```bash
npm run dev
```

## Access the Frontend

- Local URL: http://localhost:5173
 
