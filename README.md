Sustainability Actions Tracker
A full-stack web application for managing and tracking sustainability actions. Built with Django REST Framework backend and React frontend.

Features
Backend API: RESTful API for CRUD operations on sustainability actions

Frontend Interface: React-based UI to view, add, edit, and delete actions

Data Model: Track action name, date, and points earned

Responsive Design: Clean table layout with form controls

Tech Stack
Backend
Django 4.2+

Django REST Framework

SQLite database

django-cors-headers

Frontend
React 18+

Axios for API calls

Functional components with hooks

Project Structure

sustainability_tracker/
├── sustainability_backend/     # Django project
│   ├── actions/               # Django app
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── sustainability_backend/
│   │   ├── settings.py
│   │   └── urls.py
│   └── manage.py
├── sustainability-frontend/    # React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── ActionList.js
│   │   │   └── ActionForm.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
└── README.md

Setup Instructions
Prerequisites
Python 3.8+

Node.js 14+

pip (Python package manager)

npm (Node package manager)
