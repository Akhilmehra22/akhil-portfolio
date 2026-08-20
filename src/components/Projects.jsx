import Section from './Section.jsx'
import RepoLink from './RepoLink.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <Section
      id="projects"
      label="02 — Projects"
      title="Analytics work, end to end"
    >
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3 className="card__title">{p.title}</h3>
            <p className="card__summary">{p.summary}</p>

            <ul className="tags" aria-label="Tech used">
              {p.tags.map((t, i) => (
                <li key={`${t}-${i}`} className="tag">
                  {t}
                </li>
              ))}
            </ul>

            <p className="card__outcome">
              <span className="card__outcome-label">Finding</span>
              {p.outcome}
            </p>

            <div className="card__foot">
              <RepoLink url={p.repo} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
