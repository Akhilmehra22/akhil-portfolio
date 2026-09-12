// ============================================================
//  EDIT ME FIRST  —  all personal links live here.
//  Replace every value marked TODO. Nothing else needs touching.
// ============================================================

export const config = {
  name: 'Akhil Mehra',
  role: 'Analytics Engineer',
  tagline: 'SQL and dimensional modeling behind the dashboards businesses run on',
  intro:
    'Five years across transportation, telecom, and gaming, currently leading a 0-to-1 data warehouse build for a Toronto logistics company.',

  email: 'akhil.mehra2204@gmail.com',
  github: 'https://github.com/Akhilmehra22',
  linkedin: 'https://www.linkedin.com/in/akhilmehra2204',

  // Drop an image at public/ and point this at it to show a photo in the
  // hero. If the file is missing, the hero falls back to initials automatically.
  headshot: '/headshot-2.jpeg',
}

// The three capability cards under the hero copy. Facts come from cv.md.
export const highlights = [
  {
    title: 'Analytics & BI',
    text: 'Certified Power BI semantic models with row-level security, powering self-serve reporting across finance, ops, sales, and leadership.',
  },
  {
    title: 'Data Warehousing',
    text: 'Kimball star schemas, SCD Types 1 and 2, surrogate keys, and conformed dimensions across seven source systems.',
  },
  {
    title: 'Automation & AI',
    text: 'Voice AI call automation, carrier scoring models wired into dispatch, and a RAG system over internal operational data.',
  },
]

// The credentials grid shown beside the hero photo. Keep this in sync with
// cv.md — these are the same facts, just surfaced at a glance. Leave any
// `url` empty to hide that card's link.
// Each card can carry a `history` array. When the card is clicked it flips to
// reveal the story on the back. Each array item is one short paragraph, so keep
// them to two or three per card.
export const credentials = {
  currentRole: {
    title: 'Analytics Engineer',
    org: 'Titanium Transportation Group',
    url: '', // TODO: company site, optional
    logo: '/logos/titanium.png',
    history: [
      'I came in as the SQL specialist for the team. I built the SSRS and DAWG reports the business ran on every day, wrote the stored procedures that fed the tables and dashboards, and set up data-quality alerts that caught wrong or missing information before anyone acted on it, along with sync-check jobs that kept tables reconciled across systems.',
      'As the reporting surface grew, I took on the modeling behind it and grew into analytics engineering. I led a 0-to-1 data warehouse build, a Kimball star schema with SCD Types 1 and 2 across seven source systems, and turned a pile of spreadsheets into something the business could trust.',
      'Today I own the Power BI workspaces under Git version control and the certified semantic models, with row-level security, that power self-serve reporting across finance, ops, sales and leadership.',
    ],
  },
  previousRole: {
    title: 'Data Consultant',
    // Employer was QNE Software; logo shown is the client, TELUS Digital
    // (rebranded from TELUS International) — QNE has no public logo asset
    // to source reliably. Swap `logo` below if you'd rather show QNE.
    org: 'QNE Software (Client: Telus International)',
    url: '', // TODO: company site, optional
    logo: '/logos/telus.png',
    history: [
      'I worked as a data consultant for a telecom client, building the subscriber lifecycle dashboards their teams used to track the customer base.',
      'A lot of the work was turning messy source data into clean, reportable models, then running cohort retention analysis and marketing attribution on top of it to answer where customers were coming from and why they left.',
    ],
  },
  earlierRole: {
    title: 'Data Analyst',
    org: 'PokerBaazi (Baazi Games)',
    url: '', // TODO: company site, optional
    logo: '/logos/pokerbaazi.png',
    history: [
      'This was where I cut my teeth as an analyst, working on the player base for an online gaming company.',
      'I ran player segmentation with RFM and K-Means, built out funnel analytics and A/B tests, modeled lifetime value and churn, and shipped the executive dashboards in Tableau and Looker that leadership watched.',
    ],
  },
  education: {
    program: 'Business Analytics',
    school: 'St. Lawrence College',
    url: '', // TODO: program page, optional
    logo: '/logos/stlawrence.png',
    history: [
      'I did a post-graduate program in Business Analytics in Ontario, which gave me the grounding in statistics, data modeling and BI tooling.',
      'It was the bridge that took me from analyst work into the modeling and engineering side of data.',
    ],
  },
  experience: {
    stat: '5+ years',
    note: 'Across transportation, telecom, and gaming',
    history: [
      'Five years across three very different industries, which is where a lot of my range comes from.',
      'Transportation and logistics gave me the analytics engineering and data warehousing depth, telecom taught me subscriber and retention analytics, and online gaming was where I learned player and funnel analytics under real volume.',
    ],
  },
  personality: {
    stat: 'How I work',
    note: 'The person behind the resume',
    history: [
      'I am a builder and a self-starter. When I hit a problem I would rather build my way out of it than wait to be told what to do, and most of what I know I have learned by shipping something real. The side projects on this site, an agent that runs my job search, a SQL practice engine, a full-stack RAG app, were all things I decided should exist and then built.',
      'That also means I pick up new tools fast. I taught myself embeddings, vector search and agent building on my own, and I am always closing the next gap.',
      'Day to day I am calm and methodical. I validate before I move on, I bring solutions rather than just problems, and I make small, targeted changes instead of sweeping rewrites. I also translate the technical work for the business, so ops, finance and leadership actually use what I build.',
    ],
  },
}

export const about = [
  'I am an analytics engineer who learns by building things that have to work.',
  'Currently, I lead data infrastructure for a Toronto logistics company, where I recently drove a 0-to-1 data warehouse transformation, replacing fragmented spreadsheets with a production-grade dimensional model.',
  'I build the analytics and reporting architecture the business runs on, creating the models, pipelines, and semantic layers that people actually use.',
  'I am highly comfortable across the full data stack: advanced SQL, Kimball methodology, Python, and Power BI/DAX.',
  'My bias is execution. I would rather ship a reliable model that answers a critical question this week than design a perfect one that answers everything next quarter.',
]
