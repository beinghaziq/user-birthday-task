from fastapi import APIRouter
from datetime import datetime
from data import users_data
from helpers import calculate_age
from models import PromptRequest

router = APIRouter()

@router.get("/api/users")
def get_users():
    users_with_age = []
    for user in users_data:
        age = calculate_age(user["birthday"])
        users_with_age.append({**user, "age": age})
    return users_with_age

@router.get("/api/birthday")
def get_next_birthday():
    today = datetime.today()
    next_birthday_user = None
    min_days_diff = 366

    for user in users_data:
        birthday = datetime.strptime(user["birthday"], "%m/%d/%Y")
        next_birthday = birthday.replace(year=today.year)
        if next_birthday < today:
            next_birthday = next_birthday.replace(year=today.year + 1)
        days_diff = (next_birthday - today).days
        if days_diff < min_days_diff:
            min_days_diff = days_diff
            next_birthday_user = user

    return next_birthday_user

@router.post("/api/generate")
def generate_text(request: PromptRequest):
    return {
        "response": f"I received your prompt: '{request.prompt}'. Here's a helpful response!"
    }
