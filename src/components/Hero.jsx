import { useState } from 'react'
import { config, highlights } from '../data/config.js'
import Credentials from './Credentials.jsx'

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

export default function Hero() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <section className="panel hero reveal is-visible" id="top">
      <div className="hero__main">
        <aside className="profile-panel lift">
          <div className="profile-panel__head">
            <div className="hero__avatar">
              {imgOk ? (
                <img
                  src={config.headshot}
                  alt={config.name}
                  onError={() => setImgOk(false)}
                />
              ) : (
                <span className="hero__initials">{initials(config.name)}</span>
              )}
            </div>
            <div>
              <p className="profile-panel__name">{config.name}</p>
              <a
                className="profile-panel__link"
                href={config.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>

          <Credentials />
        </aside>

        <div className="hero__copy">
          <h1 className="hero__role-title">{config.role}</h1>
          <p className="hero__tagline">{config.tagline}</p>
          <p className="hero__intro">{config.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#projects">
              View Featured Work
            </a>
            <a
              className="btn"
              href={config.github}
              target="_blank"
              rel="noreferrer"
            >
              All Projects
            </a>
            <a className="btn" href={`mailto:${config.email}`}>
              Send Message
            </a>
          </div>

          <div className="hero__highlights">
            {highlights.map((h) => (
              <article className="hero__highlight lift" key={h.title}>
                <p className="hero__highlight-title">{h.title}</p>
                <p className="hero__highlight-text">{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
