# Find the Words — chatbot exercise

An interactive practice exercise for the Early Career Medical Writers Summit session **"Find the Words: Talking to Clients About Your AI Use."**

## What this is

A static single-page web app where participants:
1. Pick one of three scenarios (anti-AI client, hallucinated references, quality burden conversation)
2. Have a 5-turn role-played conversation with an AI playing the other party
3. Get a private debrief reflecting on what worked and what to try differently

## Architecture

- `public/index.html` — the entire frontend (single file, no build step)
- `netlify/functions/chat.js` — Netlify serverless function that proxies requests to the Anthropic API
- `netlify.toml` — Netlify config

The Anthropic API key never touches the browser. It lives as a Netlify environment variable and is only used server-side.

## Deploy to Netlify

### Option A: drag-and-drop (fastest)

1. Go to https://app.netlify.com/drop
2. Drag this entire folder onto the page
3. Once deployed, open the site's settings → "Environment variables"
4. Add: `ANTHROPIC_API_KEY` = your key from https://console.anthropic.com
5. Trigger a redeploy (Site → Deploys → Trigger deploy → Deploy site)

### Option B: connect via GitHub

1. Push this folder to a GitHub repo
2. In Netlify, "Add new site" → "Import an existing project" → pick the repo
3. Netlify will detect `netlify.toml` automatically. Click Deploy.
4. Once deployed, add the `ANTHROPIC_API_KEY` environment variable as above
5. Trigger a redeploy

## Anthropic API key setup

1. Go to https://console.anthropic.com
2. If you don't have an account, create one
3. Add billing
4. Set a monthly spending cap of $20 (you'll likely use $1-3 for a bootcamp cohort)
5. Create a new API key
6. Paste it as the `ANTHROPIC_API_KEY` environment variable in Netlify

## Cost estimate

Each full conversation uses roughly $0.05–$0.10 in API calls (5 turns + 1 debrief). A cohort of 30 participants each running 2 scenarios = ~$5 total.

## Sharing with participants

Drop the Netlify URL in your bootcamp Slack channel on Friday. That's it.
