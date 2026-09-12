// ============================================================
//  PROJECT DATA  —  add a project by appending one object here.
//  Nothing else in the codebase needs to change.
//
//  Two lists:
//    projects       — professional analytics/data work.
//                     `featured: true` also shows in "Featured Projects".
//    passionProjects — things I built end to end with AI because I wanted
//                      them to exist. Same card shape, shown under
//                      "Passion Projects".
//
//  Both use the same card + detail-page system, so every entry needs:
//    slug     string   URL segment for the detail page: /projects/{slug}
//                      (lowercase, hyphenated, unique across BOTH lists)
//    title    string   project name
//    featured boolean  (projects list only) shows in "Featured Projects"
//    category string   short label pill on the card's preview box
//                      (e.g. 'BI & Modeling', 'Prompt Engineering')
//    previewTags string[]  2-3 short domain keywords shown in the preview box
//    meta     string   small uppercase footer line (e.g. 'Updated Aug 2026')
//    summary  string   one line: what it is — this is ALL the card shows.
//    tags     string[] tech tags shown as a row of chips
//    findings { label, text }[]  key findings, rendered on the detail page
//                      (use this OR outcome, not both)
//    outcome  string   single payoff line — simpler alternative to findings
//    repo     string   GitHub URL  (set to '' to hide the link)
//    readme   string   raw README URL (raw.githubusercontent.com/...) —
//                      rendered on the detail page. Omit to skip it.
//    images   string[] screenshots in public/ (omit for no image; the card
//                      falls back to a decorative motif). More than one shows
//                      next/prev arrows.
// ============================================================

export const projects = [
  {
    slug: 'freight-delivery-warehouse',
    title: 'Freight Delivery Performance Warehouse',
    featured: true,
    category: 'Data Warehousing',
    accent: 'indigo',
    icon: '🚚',
    previewTags: ['Star Schema', 'SCD Type 2', 'On-Time %'],
    meta: 'Updated Sep 2026',
    summary:
      'A SQL Server data warehouse for a trucking operation: a Kimball star schema with a Type 2 driver dimension, and a dashboard diagnosing where late deliveries come from.',
    overview:
      'A dimensional warehouse built the way I build them at work, on a year of realistic freight data (18,000 shipments). Raw shipments land in a staging layer, then load into a Kimball star schema in SQL Server: a fct_shipments fact at one-shipment grain, with conformed dimensions for driver, truck, customer, lane and date. The driver dimension is a Type 2 slowly changing dimension, so a shipment always reports against who the driver was on the ship date, not who they are now. On top of that sits a dashboard that answers the operational question, where do late deliveries actually come from. I validated the whole pipeline end to end (no rows lost from staging to fact) and every number on the dashboard comes from the queries, not a mockup.',
    tags: ['SQL Server', 'T-SQL', 'Dimensional Modeling', 'Kimball', 'SCD Type 2'],
    findings: [
      {
        label: 'Long hauls run late',
        text: 'The network runs 81.4% on time overall, but long hauls out of Toronto lag badly: Toronto to Vancouver at 74% and Toronto to Calgary at 77%, against 84%+ on short regional runs.',
      },
      {
        label: 'Most delays are not the carrier',
        text: 'When a load is late, only 41% is carrier-controllable. The other 59% is weather, customer readiness or mechanical, which changes what you actually do about it.',
      },
      {
        label: 'Winter is the whole story',
        text: 'On-time performance holds near 84% from spring through fall, then drops to 75% in December and 72% in January. The year looks flat until you split it by season.',
      },
    ],
    repo: '',
    images: ['/freight-warehouse.png'],
  },

  {
    slug: 'delivery-performance-review-impact',
    title: 'Delivery Performance & Review Impact Analysis',
    featured: true,
    category: 'BI & Modeling',
    accent: 'teal',
    icon: '📦',
    previewTags: ['Late Delivery', 'Review Score', 'Carrier Fault'],
    meta: 'Updated Aug 2026',
    summary:
      'A Kimball star schema and a three-page Power BI dashboard diagnosing where late delivery hurts customer satisfaction on a Brazilian e-commerce marketplace, and whose fault the lateness actually is.',
    overview:
      'An end-to-end build on the Olist Brazilian e-commerce dataset, from raw relational tables to a decision-ready dashboard. I modeled the data into a Kimball star schema in SQL Server: a fact table for orders with conformed dimensions for sellers, customers, products, geography and dates. On top of that I wrote the DAX measures and built a three-page Power BI report to answer one business question, where late delivery actually hurts customer satisfaction and whose fault the lateness is. The star schema is what makes the report fast to slice by seller, carrier, region and time without rewriting queries, and it is the same dimensional-modeling approach I use day to day in production.',
    tags: ['SQL Server', 'Power BI', 'DAX', 'Dimensional Modeling', 'Kimball'],
    findings: [
      {
        label: 'The satisfaction collapse',
        text: 'Late orders average 2.6 review stars against 4.3 for on-time orders. It’s a satisfaction killer, not a mild dip.',
      },
      {
        label: 'The real bottleneck',
        text: "Only 27% of late deliveries are the seller's fault (missing their shipping deadline). 73% stem from carrier transit time, meaning the biggest operational lever is logistics, not seller coaching.",
      },
      {
        label: 'Geographic concentration',
        text: 'Delays heavily concentrate in northeastern states (e.g., Alagoas at ~24%), consistent with the transit distance from the main seller base.',
      },
    ],
    repo: 'https://github.com/Akhilmehra22/Dashboard-Analytics/tree/main/olist-delivery-performance',
    readme:
      'https://raw.githubusercontent.com/Akhilmehra22/Dashboard-Analytics/main/olist-delivery-performance/Readme.md',
    images: [
      '/olist-delivery-performance.png',
      '/olist-sellers-regions.png',
      '/olist-fault-analysis.png',
    ],
  },

  {
    slug: 'fifa-world-cup-performance-analysis',
    title: 'FIFA 2022 World Cup Performance Analysis',
    featured: true,
    category: 'Python Analytics',
    accent: 'coral',
    icon: '⚽',
    previewTags: ['Expected Goals', 'Finishing', 'Event Data'],
    meta: 'Updated Jul 2026',
    summary:
      'A Python analysis of StatsBomb event data across all 64 matches of the 2022 World Cup, measuring finishing quality with expected goals (xG) and shipping the result as an interactive Tableau dashboard.',
    overview:
      'A hands-on Python project to sharpen my pandas and analysis skills on a dataset I actually care about. I pulled StatsBomb event data for all 64 matches of the 2022 World Cup, which records every pass, shot and touch, and used pandas to reshape hundreds of thousands of event rows into player- and team-level shooting profiles. The core idea is expected goals (xG), a model of how likely each shot was to score, which lets you separate genuinely good finishing from luck and shot volume. I visualised the findings with matplotlib and published an interactive Tableau dashboard so anyone can explore the players themselves.',
    tags: ['Python', 'pandas', 'matplotlib', 'statsbombpy', 'Tableau'],
    findings: [
      {
        label: 'Messi vs Mbappé',
        text: 'Both scored 9 goals but through different profiles: Messi generated 7.6 xG on 34 shots (high volume, high quality), while Mbappé generated only 5.0 xG on 32 shots yet outscored his model by 4, making him the tournament’s most clinical finisher.',
      },
      {
        label: 'Best shot quality',
        text: 'Argentina generated the highest xG per shot at 0.19, so their average attempt had a 19% chance of scoring. Their attack was high quality, not just high volume.',
      },
      {
        label: 'Scoring first matters',
        text: 'Teams that scored first won 76% of group-stage matches and 73% of knockout matches, quantifying just how decisive the opening goal was.',
      },
    ],
    repo: 'https://github.com/Akhilmehra22/analytics-portfolio/tree/main/fifa',
    readme:
      'https://raw.githubusercontent.com/Akhilmehra22/analytics-portfolio/main/fifa/README.md',
    images: ['/fifa-scoring-first.png'],
  },

  // ================================================================
  //  NEXT FEATURED BUILD (supply-chain warehouse / dbt ELT).
  //  Left commented on purpose: a half-written card on a live site
  //  looks worse than no card at all. Uncomment and fill when ready.
  // ================================================================
  // {
  //   slug: '',
  //   title: '',
  //   featured: true,
  //   category: '',
  //   meta: '',
  //   summary: '',
  //   tags: ['', '', ''],
  //   outcome: '',
  //   repo: '',
  //   readme: '',
  // },
]

// Passion projects — same card shape as above, shown in their own section.
// Things I build with AI/agents to solve my own problems. Drop a screenshot
// into public/ and reference it in `images` to fill the card.
export const passionProjects = [
  {
    slug: 'lodestar-job-search-agent',
    title: 'Lodestar — Job Search Agent',
    category: 'Prompt Engineering',
    accent: 'indigo',
    icon: '🧭',
    previewTags: ['Scanners', 'Fit Scoring', 'Pipeline'],
    meta: 'Runs daily',
    summary:
      'A local job-search engine I built on the open-source career-ops framework. It scans postings, scores each against my target profile, and tracks the pipeline on a dashboard.',
    overview:
      'My own job search, turned into a system instead of a hundred browser tabs. Lodestar runs on my machine and scans LinkedIn, Indeed and Adzuna on a schedule, pulls the postings, dedupes them against everything I have already seen, and scores each opening on title, pay, location, stack and freshness so the strongest roles float to the top. A dashboard shows the ranked pipeline, the full breakdown for any role, and where each application stands. It has surfaced 255 tracked roles and counting, and it is honestly why my search stays organised. career-ops is an open-source framework I forked for the plumbing; the scanning, ranking and dashboard layer is what I built on top.',
    tags: ['Node.js', 'Agents', 'Job Scanners', 'Ranking'],
    findings: [
      {
        label: 'What it does',
        text: 'Scanners pull postings from LinkedIn, Indeed and Adzuna, dedupe them against what I’ve already seen, score each one for fit, and write the result to a pipeline the dashboard reads.',
      },
      {
        label: 'Always on',
        text: 'A scheduled task keeps the local server running in the background and restarts it if it ever dies, so the dashboard is live whenever I open it.',
      },
      {
        label: 'What I built vs. forked',
        text: 'career-ops is an open-source base I forked; Lodestar is the scanning, ranking and dashboard layer I built on top of it.',
      },
    ],
    repo: 'https://github.com/Akhilmehra22/career-ops',
    images: ['/lodestar.png'],
  },
  {
    slug: 'quickapply-cv-cover-letter',
    title: 'QuickApply — CV & Cover Letter Generator',
    category: 'Prompt Engineering',
    accent: 'gold',
    icon: '📝',
    previewTags: ['Tailoring', 'Fact-Check', 'PDF'],
    meta: 'Python + OpenAI',
    summary:
      'A tool that tailors my CV and writes a cover letter for a specific job in one command, with a fact-check gate that refuses to invent anything.',
    overview:
      'The companion to Lodestar, for a job I found outside the scan queue: a link a friend sent, something on a company careers page. I give it the posting URL or paste the job description, plus the company and role, and it tailors my CV and drafts a cover letter in one command. It rewrites the summary, reorders and reformulates bullets, and picks the most relevant competencies and projects, then renders clean PDFs with headless Chromium. The part I am most proud of is the fact-check gate: before it renders, every metric or claim in the output is checked against my real CV, and anything that cannot be traced back aborts generation and prints the offending line. It reformulates, it never fabricates, which matters when the document is going to a real employer.',
    tags: ['Python', 'OpenAI API', 'Playwright', 'Fact-Check Gate'],
    findings: [
      {
        label: 'Reformulate, never fabricate',
        text: 'Every generated metric or claim is scanned and must trace back to my real CV. Anything that doesn’t aborts generation and prints the offending claim, so the output stays honest.',
      },
      {
        label: 'Clean PDFs',
        text: 'It renders the tailored CV and cover letter to PDF with headless Chromium, the same technique the main project uses.',
      },
      {
        label: 'Fits the pipeline',
        text: 'For a job found outside the scan queue it can push the tailored documents straight onto the Lodestar dashboard as a tracked application.',
      },
    ],
    repo: 'https://github.com/Akhilmehra22/career-ops',
    images: ['/quickapply.png'],
  },
  {
    slug: 'vedic-astrology-web-app',
    title: 'Vedic Astrology Web App',
    category: 'Prompt Engineering',
    accent: 'purple',
    icon: '🔯',
    previewTags: ['RAG', 'Birth Chart', 'pgvector'],
    meta: 'Full-stack',
    summary:
      'A full-stack app that computes a complete sidereal birth chart, then answers questions about it using Retrieval-Augmented Generation over classical texts.',
    overview:
      'A full-stack app I built to learn Retrieval-Augmented Generation properly, on a subject I find genuinely interesting. You enter your birth details and a Python engine computes a complete sidereal (Lahiri) chart: the ascendant, planetary placements, divisional charts, yogas and the full daśā timeline, with no external data files. The interesting part is the answers. I embedded a corpus of classical Sanskrit-translation texts with OpenAI embeddings into a Supabase pgvector store, so when you ask a question it retrieves the most relevant passages and feeds them, together with your actual chart, to the model. Every answer is grounded in both, and a FastAPI backend streams it back token by token. It taught me embeddings, vector search and grounding, which is the same architecture behind serious enterprise RAG.',
    tags: ['FastAPI', 'React', 'RAG', 'Supabase pgvector', 'OpenAI Embeddings'],
    findings: [
      {
        label: 'The chart engine',
        text: 'A Python engine computes the ascendant, planetary placements, divisional charts, yogas and the full daśā timeline from birth details, with no external data files.',
      },
      {
        label: 'Grounded answers',
        text: 'The classical corpus is embedded with OpenAI embeddings into a Supabase pgvector store; each answer retrieves the most relevant passages and is grounded in both the chart and those passages.',
      },
      {
        label: 'Streaming chat',
        text: 'A FastAPI backend streams answers token by token over SSE, always with the full chart in context.',
      },
    ],
    repo: 'https://github.com/Akhilmehra22/vedic-astrology',
    images: ['/vedic.png', '/vedic-chat.png'],
  },
  {
    slug: 'analyst-arena-sql-practice',
    title: 'Analyst Arena — SQL Practice Engine',
    category: 'Prompt Engineering',
    accent: 'crimson',
    icon: '🎮',
    previewTags: ['Real Execution', 'T-SQL', 'DAX'],
    meta: 'Interview prep',
    summary:
      'An interview-prep app for data analysts where every answer actually executes: real SQLite, real Python + pandas, and a DAX engine that evaluates your measure across filter contexts.',
    overview:
      'An interview-prep app I built for myself while preparing for senior data analyst rounds, shaped like a game so the practice actually sticks. Every answer you write really runs: your SQL executes against a real SQLite database, your pandas runs in real CPython, and your DAX measure is evaluated across several filter contexts, then compared to the reference solution cell by cell. Nothing is string-matched, so it catches the same mistakes an interviewer would. It also has a T-SQL layer that translates SSMS-style syntax to SQLite and shows you the translated query, so I can practise the way I write at work. Building the execution engine and the T-SQL translation taught me more about how SQL dialects and DAX evaluation actually work than any course did.',
    tags: ['TypeScript', 'React', 'SQLite', 'pandas', 'DAX'],
    findings: [
      {
        label: 'Nothing is string-matched',
        text: 'Your query runs against a real database, your pandas runs in real CPython, and your DAX measure is evaluated in several filter contexts, then compared to the reference answer cell by cell.',
      },
      {
        label: 'A T-SQL layer',
        text: 'You can write SSMS-style T-SQL and it’s translated to SQLite before running, with the translated query shown so you always see what actually executed.',
      },
      {
        label: 'Shaped like a campaign',
        text: 'Tasks carry hints and a note on what an interviewer is really probing for, with XP, ranks and saved progress to keep the practice going.',
      },
    ],
    repo: '',
    images: ['/analyst-arena.png'],
  },
]

// Combined list for the detail-page lookup, so /projects/:slug resolves an
// entry from either list.
export const allProjects = [...projects, ...passionProjects]

export const skills = [
  {
    group: 'Languages & Query',
    items: [{ name: 'SQL' }, { name: 'Python' }, { name: 'DAX' }],
  },
  {
    group: 'BI & Modeling',
    items: [
      { name: 'Power BI' },
      { name: 'Dimensional Modeling' },
      { name: 'Star Schema' },
    ],
  },
  {
    group: 'Data Stack',
    items: [
      { name: 'SQL Server' },
      { name: 'Git' },
      { name: 'dbt', note: 'learning' },
      { name: 'BigQuery', note: 'learning' },
    ],
  },
]
