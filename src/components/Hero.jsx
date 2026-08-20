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
    <section className="hero" id="top">
      <div className="hero__avatar" aria-hidden={!imgOk}>
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

      <h1 className="hero__name">{config.name}</h1>
      <p className="hero__tagline">{config.tagline}</p>

      <div className="hero__links">
        <a href={config.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className="dot" />
        <a href={config.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span className="dot" />
        <a href={`mailto:${config.email}`}>Email</a>
      </div>
    </section>
  )
}
