import { useState } from 'react'
import { config } from '../data/config.js'

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
    <section className="panel reveal is-visible hero" id="top">
      <div className="hero__top">
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
          <h1 className="hero__name">{config.name}</h1>
          <p className="hero__role">{config.role}</p>
        </div>
      </div>

      <p className="hero__tagline">{config.tagline}</p>

      <div className="btns">
        <a className="btn" href={config.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          className="btn"
          href={config.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className="btn" href={`mailto:${config.email}`}>
          Email
        </a>
      </div>
    </section>
  )
}
