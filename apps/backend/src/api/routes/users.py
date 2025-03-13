from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()
class User(BaseModel):
    id: int
    name: str

@router.get("/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id, "name": f"User: {user_id}"}