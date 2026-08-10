Repository: morrislee-portfolio
Visibility: Public
Frontend: Plain HTML + CSS (single index.html, no build step)
Hosting: Vercel

Intention: Build a personal Portfolio website for morrislee. feel closer to a researcher’s personal site + technical lab notebook + evidence-backed CV. “Here is what I built. Here is the evidence. Here is how it works. Judge the work yourself.”

Design: karpathy.ai-style minimal personal homepage — plain HTML/CSS, honest blue hyperlinks, no framework, no build step.

Non-goals: heavy sales and marketing vibes, animated blobs, huge slogans, glowing cards, and exaggerated metrics. “I am an innovative AI visionary transforming the future 🚀”

## Development

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python app.py   # serves on http://127.0.0.1:8000 with debug reload
```

Structure: `app.py` (routes), `templates/index.html` (page), `static/logos/` (assets).

Deploy: `vercel.json` routes all traffic to `app.py` via `@vercel/python`. Import the repo on Vercel and it deploys as a Python serverless app.

History: a Vite + React + Tailwind version of this site exists in git history (pre-2026-08-10 commits) if ever needed.
