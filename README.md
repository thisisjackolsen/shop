# eShop (MERN) - Minimal Scaffold

## Overview
Minimal MERN scaffold with:
- Express + Mongoose backend providing `/api/products`
- React frontend (Vite) fetching `/api/products`

## Run locally
1. Start MongoDB (local or provide `MONGO_URI`).
















By default the frontend fetches `/api/products` on the same host — use a proxy or run frontend on a different port and set up CORS in backend (already enabled).```npm run devnpm installcd frontend```bash3. Frontend```npm run dev    # requires nodemon, or npm startnpm run seed   # optional: seed sample products# copy .env.example to .env and set MONGO_URI if needednpm installcd backend```bash2. Backend