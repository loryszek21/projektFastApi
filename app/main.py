from fastapi import FastAPI
from icecream import ic
from services.generatorQrCode import generate_uuid
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}


@app.get("/qr")
def get_qrCode():
    unique_id = generate_uuid()
    ic(unique_id)
    return{"uuid": str(unique_id) }