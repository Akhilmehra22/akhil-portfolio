import { config } from '../data/config.js'

const links = [
  { href: '#fit-check', label: 'Check Fit' },
  { href: '#about', label: 'About' },
  { href: '#featured-projects', label: 'Work' },
  { href: '#skills', label: 'Toolkit' },
  { href: '#all-projects', label: 'Passion Projects' },
  { href: '/Akhil_Mehra_Resume.pdf', label: 'Résumé', external: true },
]

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.67.79.55A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true">
            AM
          </span>
          {config.name}
        </a>
        <nav className="site-nav" aria-label="Sections">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ) : (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            )
          )}
          <a className="site-nav-cta" href="#connect">
            Connect
          </a>
          <a
            className="site-nav__icon"
            href={config.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            className="site-nav__icon"
            href={config.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}
