from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.services.camera import qr_code_reader
from app.services.generatorQrCode import generate_uuid

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins; specify a list of origins for more control.
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods.
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
        return {"message": "Poprawny kod QR!"}
    
    else:
        print("Nie poprawny kod qr")
        return {"message": "Niepoprawny kod QR."}