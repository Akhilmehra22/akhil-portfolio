# akhil-portfolio

Personal portfolio site. Vite + React, no CSS framework, no build magic.

Visual design follows the warm-paper reference direction: cream panels
(`#fff8ef` on an `#f8f2e8` gradient), Georgia body text with Trebuchet MS
display headings, teal/coral/gold accents, and large soft radii. All tokens live
at the top of `src/index.css` under `:root` -- change them there and the whole
page follows.

## Fill in your details first

Two files hold everything you'll want to edit.

### 1. `src/data/config.js` — contact links

Every value marked `TODO` needs replacing:

| Field | What it is |
|---|---|
| `email` | Used for the `mailto:` links in the hero, Connect, and footer |
| `github` | Full profile URL (already set to `Akhilmehra22`) |
| `linkedin` | Full profile URL |
| `role` | The small uppercase line under your name |

Drop a square image at `public/headshot.jpg` to show a photo in the hero. If the
file is missing, the hero falls back to your initials automatically — no broken
image.

The `about` array in the same file holds the About paragraphs, one string per
paragraph.

### 2. `src/data/projects.js` — projects, side projects, skills

Adding a project is a one-file change: append an object to the `projects` array.

```js
{
  title: 'Project name',
  summary: 'One line: what it is and why it exists.',
  tags: ['SQL Server', 'Power BI'],
  outcome: 'The finding, result, or what it changed.',
  repo: 'https://github.com/you/repo',   // '' or a TODO_ string hides the link
  image: '/screenshot.png',              // optional; file goes in public/
}
```

Any `repo` value that is empty or still starts with `TODO` renders as a quiet
"Repository link coming soon" instead of a dead link — so unfinished entries
never look broken.

Slots 2 and 3 sit in the file as commented-out blocks -- uncomment and fill one
in when a project is ready, so a half-written card never reaches the live site.
The file also holds `sideProjects` (the shipped products section) and `skills` (grouped skill list,
where `note: 'learning'` renders the small "learning" badge).

## Run locally

```bash
npm install
```

```bash
npm run dev
```

Vite prints a local URL (usually http://localhost:5173). Edits hot-reload.

To check the production build before deploying:

```bash
npm run build && npm run preview
```

Build output goes to `dist/` (gitignored).

**Note:** `npm run dev` only serves the React app. The "Are We a Fit?"
assessor calls a Netlify serverless function (`netlify/functions/assess-fit.mjs`),
which plain `vite dev` doesn't run — see the next section to test it locally.

## "Are We a Fit?" assessor (OpenAI-backed)

The fit-check form on the homepage sends the visitor's brief to a serverless
function, which calls OpenAI's API server-side so the API key never reaches
the browser. Two things to set up:

### 1. Get an OpenAI API key

Create one at https://platform.openai.com/api-keys. This is billed to
**your own** OpenAI account per request — there's no way around that, since
the whole point of the serverless function is to keep the key private to you.
`gpt-4o-mini` (the default) is inexpensive; a typical assessment costs a
small fraction of a cent.

### 2. Set it as an environment variable

**On Netlify** (required for the live site): Site settings → Environment
variables → add `OPENAI_API_KEY`. Optionally add `OPENAI_MODEL` to use a
different model. Redeploy after adding it.

**Locally** (optional, for testing before you deploy): copy `.env.example`
to `.env` and fill in your key. `.env` is gitignored — never commit it.

### 3. Test locally with Netlify Dev

Plain `vite dev` can't run the serverless function, so use the Netlify CLI
instead — it runs both the Vite dev server and the function together:

```bash
npm install -g netlify-cli
netlify dev
```

This opens a local URL where the fit-check form actually calls OpenAI using
the key in your `.env`. Without Netlify Dev (or without a key set), the form
still renders and submits, but shows a friendly "assessor is unavailable"
message instead of an assessment — it won't crash the page.

### What it knows about you

The function's system prompt (in `assess-fit.mjs`) contains a summary of your
real background — pulled from `cv.md`, not invented. Keep the two in sync
when your experience changes: update the `BACKGROUND` constant in the
function to match.

## Deploy to Netlify

`netlify.toml` is already configured — build command `npm run build`, publish
directory `dist`, the `netlify/functions` folder wired up, an SPA redirect,
and a clean `/api/*` path to the fit-check function.

**Don't forget:** set `OPENAI_API_KEY` in Netlify's environment variables
(see above) — the fit-check form won't work on the live site without it.

### Option A — connect the Git repo (recommended)

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Netlify reads `netlify.toml`, so leave the build settings as detected and deploy.
4. Every push to the default branch redeploys automatically.

### Option B — drag and drop

```bash
npm run build
```

Then drag the `dist/` folder onto https://app.netlify.com/drop. You'll
re-drag on every change, and — same caveat as above — this method does NOT
deploy the serverless function, so the fit-check form needs Option A
(Git-connected) to actually work on the live site.

### Custom domain

Netlify → **Domain management → Add a domain**, then point your registrar's
DNS at Netlify's nameservers. HTTPS is provisioned automatically.
