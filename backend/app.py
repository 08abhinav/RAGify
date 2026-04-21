from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.routes import register_routes
from datetime import datetime

app = FastAPI(title="RAGify", debug=False)
start_time = datetime.now()

origins = [ "http://localhost:5173" ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return{"status": "hello from ragify backend"}

@app.get("/health")
def health():
    uptime = datetime.now() - start_time
    return{
        "status": "ok",
        "service": "backend",
        "uptime_seconds": int(uptime.total_seconds())
    }
    
register_routes(app)