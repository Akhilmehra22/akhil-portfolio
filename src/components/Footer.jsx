import { config } from '../data/config.js'

export default function Footer() {
  return (
    <footer className="footer" id="connect">
      <div className="footer__inner">
        <p className="footer__name">{config.name}</p>
        <div className="footer__links">
          <a href={config.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={config.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${config.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
