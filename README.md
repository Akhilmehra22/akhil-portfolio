# akhil-portfolio

Personal portfolio site. Vite + React, no CSS framework, no build magic.

## Fill in your details first

Two files hold everything you'll want to edit.

### 1. `src/data/config.js` — contact links

Every value marked `TODO` needs replacing:

| Field | What it is |
|---|---|
| `email` | Used for the `mailto:` links in the hero and footer |
| `github` | Full profile URL |
| `linkedin` | Full profile URL |

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
}
```

Any `repo` value that is empty or still starts with `TODO` renders as a quiet
"Repository link coming soon" instead of a dead link — so unfinished entries
never look broken.

Two placeholder project entries are already in place; the file also holds
`sideProjects` (the shipped products section) and `skills` (grouped skill list,
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

## Deploy to Netlify

`netlify.toml` is already configured — build command `npm run build`, publish
directory `dist`, plus an SPA redirect.

### Option A — connect the Git repo (recommended)

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Netlify reads `netlify.toml`, so leave the build settings as detected and deploy.
4. Every push to the default branch redeploys automatically.

### Option B — drag and drop

```bash
npm run build
```

Then drag the `dist/` folder onto https://app.netlify.com/drop. No repo needed,
but you'll re-drag on every change.

### Custom domain

Netlify → **Domain management → Add a domain**, then point your registrar's
DNS at Netlify's nameservers. HTTPS is provisioned automatically.
