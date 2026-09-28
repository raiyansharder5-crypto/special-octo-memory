# TikTok Analytics Dashboard

A mobile-friendly TikTok analytics dashboard starter built with Node.js + Express.

## Features

- Views, likes, comments, shares and follower cards
- 7-day views chart
- Best posting-time section
- TikTok username input
- Responsive dark UI
- `/api/health` health check
- `/api/analytics?username=...` demo analytics endpoint
- Render-ready configuration

## Run locally

```bash
npm install
npm start
```

Then open:

`http://localhost:10000`

## Render

1. Upload this project to GitHub.
2. Create a new Web Service on Render.
3. Select the repository.
4. Render can use the included `render.yaml`, or set:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Deploy.

## Important

The included analytics endpoint returns demo data. It does not create fake views or automate engagement.

For real TikTok account analytics, connect an official/authorized TikTok API or an authorized data source and replace the demo `/api/analytics` implementation.
