# Sustainability Actions Tracker

A full-stack web application for managing and tracking sustainability actions, built with Django REST Framework (backend) and React (frontend).

---

## Features

- RESTful API for CRUD operations on sustainability actions  
- Modern React UI to view, add, edit, and delete actions  
- Track action name, date, and points earned  
- Responsive, clean table layout and form controls

---

## Tech Stack

- **Backend:** Django 4.2+, Django REST Framework, SQLite, django-cors-headers
- **Frontend:** React 18+, Axios

---

## Project Structure

```
sustainability_tracker/
├── sustainability_backend/     # Django project
│   ├── actions/               # Django app
│   └── sustainability_backend/
├── sustainability-frontend/    # React app
│   ├── src/
└── README.md
```

---

## Setup Instructions

### Backend

```bash
cd sustainability_tracker
python -m venv venv        # or python3 -m venv venv
source venv/bin/activate   # (Linux/macOS) or venv\Scripts\activate (Windows)
pip install django djangorestframework django-cors-headers
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Backend available at: [http://localhost:8000](http://localhost:8000)

---

### Frontend

```bash
cd sustainability-frontend
npm install
npm start
```

Frontend available at: [http://localhost:3000](http://localhost:3000)

---

## API Reference

**Action Object**
```json
{
  "id": 1,
  "action": "Recycling",
  "date": "2025-01-08",
  "points": 25
}
```

**Endpoints**

- `GET /api/actions/` — Retrieve all actions
- `POST /api/actions/` — Create new action
- `GET /api/actions/{id}/` — Retrieve specific action
- `PUT /api/actions/{id}/` — Update specific action
- `DELETE /api/actions/{id}/` — Delete specific action

---

## Troubleshooting

- **CORS Errors:**  
  Make sure `django-cors-headers` is installed and `CORS_ALLOWED_ORIGINS` includes `http://localhost:3000` in `settings.py`.

- **Connection Errors:**  
  Check that both servers are running and the API URL in `src/services/api.js` matches your backend.

- **Database Issues:**  
  Run migrations and ensure the SQLite database file is writable.

---
