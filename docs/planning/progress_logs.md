# Progress Logs

**Template for new entries:**

```
## Phase N — <name> (status: done|partial|blocked, <date>)
- **Deliverable:** <from high_level.md>
- **What was built:** <bullets, artifact paths>
- **Key decisions:** <design choices and why>
- **Verification:** <tests/commands/gates and results>
- **Commits:** <hashes>
- **Known issues / follow-ups:** <or "none">
```

---

## Phase 4 — Flask app + timeline visual + logos (status: done, 2026-08-10)
- **Deliverable:** Convert the static page into a Flask app; add a visible timeline (vertical rail + year nodes) and inline company logos per `media/logos/`.
- **What was built:**
  - `app.py` (single route, debug server on :8000), `requirements.txt` (flask==3.1.3), `.venv/` (gitignored)
  - `templates/index.html` — same narrative, now with a CSS timeline (left rail, circle nodes per year block) and inline logos (Mercedes-Benz, Recommend.my) sized at 1.1em next to company names
  - `static/logos/` — copies of the three logos from `media/logos/`
  - `vercel.json` — `@vercel/python` build + catch-all route to `app.py`
- **Key decisions:**
  - Timeline implemented in pure CSS (border-left + ::before dots) — no JS, keeps karpathy minimalism
  - `maybank.png` copied but intentionally unused — no Maybank entry exists in the narrative; needs owner direction on where it belongs
  - Logos duplicated into `static/` (Flask convention) rather than serving `media/` directly — keeps source assets separate from web assets
- **Verification:** Flask dev server; curl 200 on page + static logo; Playwright screenshots at 1280px and 390px reviewed
- **Commits:** 6c818b9
- **Known issues / follow-ups:**
  - Maybank logo unused (no narrative entry)
  - QueryProof Paper/Project links still missing URLs
  - Vercel deploy not yet tested with `@vercel/python`

---

## Phase 3 — Course change: karpathy.ai-style plain HTML (status: done, 2026-08-10)
- **Deliverable:** Replace the React/Vite site with a minimal single-page plain HTML + CSS site in karpathy.ai style, per `course-change.md`.
- **What was built:**
  - `index.html` at repo root — narrative timeline (2024–, 2026–, 2024–2025, 2022–2024, 2020–2023), links row (GitHub · LinkedIn · Kaggle · PyPI · Email), inline minimal CSS (650px column, 18px, #444 text, #0645ad blue links)
  - Deleted React app: `src/`, `public/`, `package.json`, `package-lock.json`, `vite.config.js`, `.oxlintrc.json`, `node_modules/`, `dist/` (recoverable in git history, commit 61fa24e)
  - README updated (plain HTML, no build step)
- **Key decisions:**
  - Owner chose full replacement over branch/subfolder archive (confirmed via question)
  - Page scope: narrative + links only; CV link removed from page (confirmed); `resume/` and `media/` source files kept in repo but no longer served
  - QueryProof links: only GitHub URL provided (https://github.com/k-w-lee/query_proof) — Paper/Project placeholders omitted for honesty rather than shown as dead links
  - SEO: semantic h1/h2, meta description, no JS dependency
- **Verification:** rendered locally and screenshot-reviewed at desktop + mobile widths
- **Commits:** b19324f
- **Known issues / follow-ups:**
  - QueryProof Paper/Project links still missing URLs
  - `course-change.md` left at repo root (working notes) — move to `docs/planning/` if desired

---

## Phase 2 — IA overhaul + interaction polish (status: done, 2026-08-09)
- **Deliverable:** Restructure from résumé-mirror to technical portfolio: Selected Work first, condensed Experience, artifact metadata, stat blocks. Plus interaction polish (hover arrows, copy-email, auto-hiding nav).
- **What was built:**
  - `src/components/SelectedWork.jsx` — numbered entries (01–04: Reliable Analytics Agent, EV Charging Intelligence, EV Golden Dataset, Code2Diagram), mono stat blocks, artifact status table (Type/Status/Year/Role/Artifacts)
  - `src/components/Experience.jsx` — rewritten: one-sentence summaries + mono stack metadata instead of CV-length bullets
  - `src/components/CopyEmail.jsx` — click-to-copy email with ⧉ hover hint and "copied to clipboard" feedback
  - `src/components/ExtLink.jsx` — ↗ arrow appears on hover (external/new-tab affordance)
  - `src/components/Nav.jsx` — hidden at scrollY=0, slides in after 120px; anchors updated to new order
  - Page order: Intro → Selected Work → Research → Experience → Open Source & Recognition → Evidence → Education
  - Skills matrix removed from homepage; replaced by one-line "Focus" row in hero (detail stays in CV)
- **Key decisions:**
  - Information architecture over styling: portfolio leads with artifacts, résumé available via CV link (per design review)
  - Typography levels: ink (titles) / ink-soft (descriptions) / faint mono (metadata) / accent dark red (links only)
  - Body copy capped at ~680px; page container widened to 880px for stat rows and galleries
  - Links without public URLs (agent Paper/Code/Benchmark) render as muted "link TBD" text, not fake links
  - Owner hand-edited hero copy (tagline, intro) preserved verbatim
- **Verification:** `npm run build` clean; `npx oxlint src` 0 errors; Playwright screenshots at 1280px reviewed (hero + full page)
- **Commits:** none yet
- **Known issues / follow-ups:**
  - Need URLs for Reliable Analytics Agent Paper/Code/Benchmark (currently "link TBD")
  - IDE buffer overwrites observed twice (Hero.jsx tagline, Lists.jsx section title) — coordinate before hand-editing files I'm changing

---

## Phase 1 — Initial site build (status: done, 2026-08-09)
- **Deliverable:** Single-page evidence-backed portfolio (hero, experience, evidence gallery, community, publications, education), ready for Vercel deploy. (`docs/planning/high_level.md` not yet written — deliverable taken from README intent.)
- **What was built:**
  - Vite + React + Tailwind CSS v4 scaffold at repo root (`vite.config.js`, `src/`, `index.html`)
  - Data-driven content model: `src/data/content.js` (profile, skills, experience, community, publications, education, evidence gallery) — sourced from `resume/MorrisLee_CV_exact.html`
  - Components: `src/components/Nav.jsx`, `Hero.jsx`, `Experience.jsx`, `Evidence.jsx`, `Lists.jsx` (Community/Publications/Education), `Footer.jsx`, `Section.jsx`, `ExtLink.jsx`
  - Media pipeline: `media/` → `public/media/`; 3 `.mov` converted to H.264 `.mp4` (ffmpeg, crf 26, faststart) + `.jpg` poster frames; CV PDF at `public/resume/MorrisLee_CV.pdf`
  - README restored/updated (Vite template had overwritten it during scaffold)
- **Key decisions:**
  - Vite + React + Tailwind (not Next.js/Astro): confirmed with owner; light SPA is enough for a single-page static site
  - Single anchored page, light-only theme: confirmed with owner; academic paper feel (paper bg, serif headings, mono section labels) per README design intent
  - Videos: `preload="none"` + poster frames to keep initial page weight low; images open full-size in new tab, videos play inline (wrapping `<video controls>` in `<a>` breaks playback)
  - All copy lives in `content.js` so non-dev edits don't touch JSX
- **Verification:** `npm run build` clean (207 kB JS / 65.6 kB gzip); `npx oxlint src` 0 errors; asset URLs checked with curl (200s); full-page Playwright screenshots reviewed at 1280px
- **Commits:** none yet (repo has no commits at time of build)
- **Known issues / follow-ups:**
  - Vercel deployment not configured
  - DeepDataFusion `[arXiv] [GitHub]` citations have no URLs in the CV — need links from owner
  - `docs/prd.md` and `docs/planning/high_level.md` still empty
  - Consider a lightbox for evidence images instead of raw new-tab
