from fastapi import FastAPI
from src.api.routes import health, users
app = FastAPI(title="Warehouse Management API", version="1.0")

app.include_router(health.router, prefix="/health", tags=["Health"])
app.include_router(users.router, prefix="/users", tags=["Users"])

@app.get("/")
def root(): 
    return {"message": "Welcome to Warehouse Management API!"}
