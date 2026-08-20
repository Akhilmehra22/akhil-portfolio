import { useEffect, useState } from 'react'
import { config } from '../data/config.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#side-projects', label: 'Side Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#connect', label: 'Connect' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          {config.name}
        </a>
        <nav className="nav__links" aria-label="Sections">
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
