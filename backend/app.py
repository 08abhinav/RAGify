from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import register_routes

app = FastAPI(title="RAGify")

# CORS setup
origins = [
    "http://localhost:5173",  # your frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

register_routes(app)

# ✅ No app.run here
# You run it with uvicorn:
# uvicorn main:app --reload --host 0.0.0.0 --port 8000
