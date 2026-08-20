// ============================================================
//  PROJECT DATA  —  add a project by appending one object here.
//  Nothing else in the codebase needs to change.
//
//  Shape:
//    title    string   project name
//    summary  string   one line: what it is and why it exists
//    tags     string[] tech tags shown as a row of chips
//    outcome  string   the finding or result — the payoff line
//    repo     string   GitHub URL  (set to '' to hide the link)
// ============================================================

export const projects = [
  {
    title: 'Delivery Performance & Review Impact Analysis',
    summary:
      'A Kimball star schema in SQL Server and a 3-page Power BI dashboard diagnosing where late delivery hurts customer satisfaction on a Brazilian e-commerce marketplace.',
    tags: ['SQL Server', 'Power BI', 'DAX', 'Dimensional Modeling', 'Kimball'],
    outcome:
      'Late orders average 2.6 review stars against 4.3 for on-time orders — and roughly 73% of that lateness is carrier-caused, not seller-caused.',
    repo: 'TODO_PROJECT_1_REPO_URL', // TODO: paste the GitHub URL
  },

  // ---------- PLACEHOLDER: copy this block for new projects ----------
  {
    title: 'TODO — Project Two Title',
    summary:
      'TODO — one line on what this project is and the question it set out to answer.',
    tags: ['TODO Tag 1', 'TODO Tag 2', 'TODO Tag 3'],
    outcome: 'TODO — the finding, result, or what it changed.',
    repo: 'TODO_PROJECT_2_REPO_URL',
  },
  {
    title: 'TODO — Project Three Title',
    summary:
      'TODO — one line on what this project is and the question it set out to answer.',
    tags: ['TODO Tag 1', 'TODO Tag 2', 'TODO Tag 3'],
    outcome: 'TODO — the finding, result, or what it changed.',
    repo: 'TODO_PROJECT_3_REPO_URL',
  },
  // -------------------------------------------------------------------
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
