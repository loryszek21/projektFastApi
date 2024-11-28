from fastapi import FastAPI
from icecream import ic
from fastapi.middleware.cors import CORSMiddleware

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


@app.get("/qr")
def get_qrCode():
    unique_id = generate_uuid()
    ic(unique_id)
    return{"uuid": str(unique_id) }