# 📘 RAGify

A lightweight **Retrieval-Augmented Generation (RAG) application** built with **Python**, allowing users to upload documents (PDF, DOCX, CSV, Web URL) and query them using natural language.

---

## 🚀 Features

* Upload documents (PDF, DOCX, CSV) or fetch content from URLs
* Store embeddings in a **ChromaDB vector database** (persistent on disk)
* Retrieve document-specific answers using **Google Gemini**
* Support for **multiple documents** via unique `doc_id`
* REST API powered by **FastAPI**
* Frontend built with **React** for interactive user interface
* Powered by **LangChain** for document loaders, splitters, and retrieval

---

## 🛠️ Tech Stack

* **Programming Language**: Python
* **Backend Framework**: FastAPI
* **Frontend Framework**: React
* **LLM**: Google Gemini (`langchain-google-genai`)
* **Vector Database**: ChromaDB
* **Framework for RAG**: LangChain (document loaders, splitters, retrievers)

---

## ⚡ Usage

1. Clone the repository
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
