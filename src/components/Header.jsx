import { config } from '../data/config.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#side-projects', label: 'Side Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#connect', label: 'Connect' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top">
          {config.name}
        </a>
        <nav className="site-nav" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
