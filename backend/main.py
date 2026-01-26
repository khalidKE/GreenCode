from fastapi import FastAPI
from pydantic import BaseModel
from engine.analyzer import analyze_code
from fastapi.middleware.cors import CORSMiddleware
import sys
import os

# Add the parent directory to sys.path to allow importing from engine
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

app = FastAPI(title="Green-Code Registry")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeInput(BaseModel):
    code: str

@app.post("/analyze")
def analyze(input: CodeInput):
    return analyze_code(input.code)

@app.get("/")
def health_check():
    return {"status": "healthy", "service": "Green-Code Registry Backend"}
