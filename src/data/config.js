// ============================================================
//  EDIT ME FIRST  —  all personal links live here.
//  Replace every value marked TODO. Nothing else needs touching.
// ============================================================

export const config = {
  name: 'Akhil Mehra',
  role: 'Analytics Engineer',
  tagline:
    'Analytics Engineer building the data models and dashboards behind better decisions',

  email: 'akhil.mehra2204@gmail.com',
  github: 'https://github.com/Akhilmehra22',
  linkedin: 'https://www.linkedin.com/in/akhilmehra2204',

  // Drop an image at public/ and point this at it to show a photo in the
  // hero. If the file is missing, the hero falls back to initials automatically.
  headshot: '/headshot-2.jpeg',
}

// The credentials grid shown beside the hero photo. Keep this in sync with
// cv.md — these are the same facts, just surfaced at a glance. Leave any
// `url` empty to hide that card's link.
export const credentials = {
  currentRole: {
    title: 'Analytics Engineer',
    org: 'Titanium Transportation Group',
    url: '', // TODO: company site, optional
    logo: '/logos/titanium.png',
  },
  previousRole: {
    title: 'Data Consultant',
    // Employer was QNE Software; logo shown is the client, TELUS Digital
    // (rebranded from TELUS International) — QNE has no public logo asset
    // to source reliably. Swap `logo` below if you'd rather show QNE.
    org: 'QNE Software (Client: Telus International)',
    url: '', // TODO: company site, optional
    logo: '/logos/telus.png',
  },
  earlierRole: {
    title: 'Data Analyst',
    org: 'PokerBaazi (Baazi Games)',
    url: '', // TODO: company site, optional
    logo: '/logos/pokerbaazi.png',
  },
  education: {
    program: 'Business Analytics',
    school: 'St. Lawrence College',
    url: '', // TODO: program page, optional
    logo: '/logos/stlawrence.png',
  },
  experience: {
    stat: '5+ years',
    note: 'Across transportation, telecom, and gaming',
  },
}

export const about = [
  'I am an analytics engineer who learns by building things that have to work.',
  'Currently, I lead data infrastructure for a Toronto logistics company, where I recently drove a 0-to-1 data warehouse transformation, replacing fragmented spreadsheets with a production-grade dimensional model.',
  'I build the analytics and reporting architecture the business runs on, creating the models, pipelines, and semantic layers that people actually use.',
  'I am highly comfortable across the full data stack: advanced SQL, Kimball methodology, Python, and Power BI/DAX.',
  'My bias is execution. I would rather ship a reliable model that answers a critical question this week than design a perfect one that answers everything next quarter.',
]
