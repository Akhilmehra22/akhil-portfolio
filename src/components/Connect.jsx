import Section from './Section.jsx'
import { config } from '../data/config.js'

export default function Connect() {
  return (
    <Section
      id="connect"
      label="Connect"
      title="Get in touch"
      lede="Open to analytics engineering roles and always happy to talk data modelling."
    >
      <div className="connect__links">
        <a className="btn" href={`mailto:${config.email}`}>
          {config.email}
        </a>
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
      </div>
    </Section>
  )
}
