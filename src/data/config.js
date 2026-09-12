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
// reveal these lines, so the front stays a clean summary and the story lives on
// the back. Keep the lines short; they render as a bulleted list.
export const credentials = {
  currentRole: {
    title: 'Analytics Engineer',
    org: 'Titanium Transportation Group',
    url: '', // TODO: company site, optional
    logo: '/logos/titanium.png',
    history: [
      'Started as the SQL specialist for the team: built SSRS reports and DAWG reports the business ran on every day.',
      'Wrote stored procedures to feed the tables and dashboards, and data-quality alerts that flagged wrong or missing information before anyone acted on it.',
      'Set up sync-check jobs so tables across systems stayed reconciled.',
      'As the reporting surface grew, I took on the modeling behind it and moved into analytics engineering.',
      'Led a 0-to-1 data warehouse build: a Kimball star schema with SCD Types 1 and 2 across seven source systems.',
      'Built certified Power BI semantic models with row-level security for self-serve reporting across finance, ops, sales and leadership, all under Git version control.',
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
      'Built subscriber lifecycle dashboards for a telecom client.',
      'Ran cohort retention analysis and marketing attribution modeling.',
      'Turned messy source data into clean, reportable models for stakeholders.',
    ],
  },
  earlierRole: {
    title: 'Data Analyst',
    org: 'PokerBaazi (Baazi Games)',
    url: '', // TODO: company site, optional
    logo: '/logos/pokerbaazi.png',
    history: [
      'Player segmentation with RFM and K-Means for an online gaming company.',
      'Funnel analytics, A/B testing, and LTV / churn modeling.',
      'Executive dashboards in Tableau and Looker.',
    ],
  },
  education: {
    program: 'Business Analytics',
    school: 'St. Lawrence College',
    url: '', // TODO: program page, optional
    logo: '/logos/stlawrence.png',
    history: [
      'Post-graduate program in Business Analytics, Ontario.',
      'Foundation in statistics, data modeling, and BI tooling.',
      'The bridge from analyst work into analytics engineering.',
    ],
  },
  experience: {
    stat: '5+ years',
    note: 'Across transportation, telecom, and gaming',
    history: [
      'Transportation and logistics: analytics engineering and data warehousing.',
      'Telecom: subscriber and retention analytics.',
      'Online gaming: player and funnel analytics.',
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
