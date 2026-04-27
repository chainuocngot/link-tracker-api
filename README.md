# Sticker Track API

ExpressJS API to create wrapped links, track click events, notify Discord via webhook, and redirect users to the original destination.

## 1) Environment

Copy `.env.example` to `.env` and configure:

- `PORT`: local API port (default `4000`)
- `MONGODB_URI`: MongoDB connection string
- `BASE_TRACKING_URL`: public base URL of this API (used to return wrapped URLs)
- `CORS_ORIGIN`: frontend origin allowed to call the API
- `DISCORD_WEBHOOK_URL`: Discord webhook for click notifications

## 2) Run locally

```bash
npm install
npm run dev
```

## 3) API endpoints

- `GET /api/health`: health check
- `POST /api/links`: create wrapped link
- `GET /api/links`: list links with counters
- `GET /api/links/:id/events`: recent click events for one link
- `GET /r/:slug`: tracking redirect endpoint

## 4) Deploy on Vercel

1. Import this folder as a separate Vercel project.
2. Add environment variables from `.env.example` in Vercel settings.
3. Set `BASE_TRACKING_URL` to the deployed API domain, e.g. `https://sticker-track-api.vercel.app`.
4. Deploy.
