# Deployment Guide

## 1) Prerequisites
- Docker + Docker Compose
- Node.js 22+
- Python 3.11+
- PostgreSQL 16+

## 2) Local Development
```bash
cp .env.example .env
docker-compose up -d
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

Backend:
```bash
cd backend
pip install -r requirements.txt
uvicorn backend.main:app --reload --port 8000
```

## 3) Production Build
```bash
npm run build
docker-compose up -d --build
```

## 4) Website in Test (Vercel)
- Target URL: `https://audrey-evans-official.vercel.app`
- Configure Vercel project root to `frontend/`
- Set required environment variables from `.env.example`

## 5) Post-Deploy Checks
- App loads and routes render
- `/api/health` responds from backend
- Login, admin, and Stripe pages load without runtime errors
