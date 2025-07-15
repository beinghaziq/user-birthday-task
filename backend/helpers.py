
from datetime import datetime

def calculate_age(birthday_str):
    birthday = datetime.strptime(birthday_str, "%m/%d/%Y")
    today = datetime.today()
    return today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))
