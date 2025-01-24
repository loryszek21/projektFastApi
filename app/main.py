from fastapi import FastAPI, HTTPException, APIRouter, status, Depends
from fastapi.security import OAuth2PasswordRequestForm

from fastapi.middleware.cors import CORSMiddleware
from app.services.camera import qr_code_reader
from app.services.generatorQrCode import generate_uuid
# from app.login import login
from pydantic import BaseModel
from app.services.led import wrongQR, correctQr

# from app.login.login import login_router # Assuming you've created a router

app = FastAPI()
# origins = [
#     "http://localhost:3000",  # Frontend address
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
    )

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.get("/generate-qr")
def generate_qr():
    """Generuje UUID i zwraca go na frontend."""
    global generated_uuid 
    generated_uuid = generate_uuid()
    return {"uuid": generated_uuid}

@app.get("/verify-qr")
def verify_qr():
    """Weryfikuje kod QR odczytany z kamery."""
    if not generated_uuid:
        raise HTTPException(status_code=400, detail="QR code not generated yet.")

    qr_data = qr_code_reader()
    if qr_data == generated_uuid:
        print("Poprawny kod qr")
        correctQr()
        return {"message": "Poprawny kod QR!"}
    
    else:
        print("Nie poprawny kod qr")
        wrongQR()
        return {"message": "Niepoprawny kod QR."}
    

users_db = {
    "test@example.com": {
        "password": "password123", 
        "name": "Test User",
    }
}


class Token(BaseModel):
    access_token: str
    token_type: str


@app.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = users_db.get(form_data.username)
    if not user or user["password"] != form_data.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Generate a dummy JWT (replace with a real JWT in production)
    return {"access_token": "dummy-jwt-token", "token_type": "bearer"}