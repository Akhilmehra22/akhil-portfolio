// ============================================================
//  PROJECT DATA  —  add a project by appending one object here.
//  Nothing else in the codebase needs to change.
//
//  Shape:
//    title    string   project name
//    category string   short label pill shown on the screenshot (e.g. 'BI')
//    meta     string   small uppercase line in the card footer (e.g. 'Updated Aug 2026')
//    summary  string   one line: what it is and why it exists
//    tags     string[] tech tags shown as a row of chips
//    findings { label, text }[]  key findings, each with a short label and
//                      one sentence — rendered as a list under "Key Findings"
//                      (use this OR outcome, not both)
//    outcome  string   single payoff line — simpler alternative to findings
//    repo     string   GitHub URL  (set to '' to hide the link)
//    images   string[] optional screenshots in public/ (omit for no image;
//                      more than one shows next/prev arrows on the card)
// ============================================================

export const projects = [
  {
    title: 'Delivery Performance & Review Impact Analysis',
    category: 'BI & Modeling',
    meta: 'Updated Aug 2026',
    summary:
      'Built a Kimball star schema in SQL Server and a three-page Power BI dashboard diagnosing where late delivery hurts customer satisfaction on a Brazilian e-commerce marketplace, and, critically, whose fault the lateness actually is.',
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
    images: [
      '/olist-delivery-performance.png',
      '/olist-sellers-regions.png',
      '/olist-fault-analysis.png',
    ],
  },

  // ================================================================
  //  SLOT 2 — uncomment the block below and fill it in when ready.
  //  Left commented on purpose: a half-written card on a live site
  //  looks worse than no card at all.
  // ================================================================
  // {
  //   title: '',
  //   summary: '',
  //   tags: ['', '', ''],
  //   outcome: '',
  //   repo: '',
  // },

  // ================================================================
  //  SLOT 3 — same deal.
  // ================================================================
  // {
  //   title: '',
  //   summary: '',
  //   tags: ['', '', ''],
  //   outcome: '',
  //   repo: '',
  // },
]

// Products, not analyses. Kept deliberately separate from the work above.
export const sideProjects = [
  {
    title: 'Vedic Astrology Web App',
    summary:
      'A web app that computes Vedic charts and answers questions about them over a retrieval layer of classical texts.',
    tags: ['FastAPI', 'RAG', 'React'],
    repo: 'TODO_SIDE_PROJECT_1_REPO_URL', // TODO or '' to hide
  },
  {
    title: 'AI Job-Search Agent',
    summary:
      'An agent that finds job postings, scores how well each one fits, and tracks the application pipeline end to end.',
    tags: ['Python', 'LLM Agents', 'Automation'],
    repo: 'TODO_SIDE_PROJECT_2_REPO_URL', // TODO or '' to hide
  },
]

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
