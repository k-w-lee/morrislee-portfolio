Repository: morrislee-portfolio
Visibility: Public
Frontend: Plain HTML + CSS (single index.html, no build step)
Hosting: Vercel

Intention: Build a personal Portfolio website for morrislee. feel closer to a researcher’s personal site + technical lab notebook + evidence-backed CV. “Here is what I built. Here is the evidence. Here is how it works. Judge the work yourself.”

Design: karpathy.ai-style minimal personal homepage — plain HTML/CSS, honest blue hyperlinks, no framework, no build step.

Non-goals: heavy sales and marketing vibes, animated blobs, huge slogans, glowing cards, and exaggerated metrics. “I am an innovative AI visionary transforming the future 🚀”

## Development

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Deploy: any static host. On Vercel, import the repo with framework preset "Other" — `index.html` at the root is served automatically.

History: a Vite + React + Tailwind version of this site exists in git history (pre-2026-08-10 commits) if ever needed.
