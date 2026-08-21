import Section from './Section.jsx'
import RepoLink from './RepoLink.jsx'
import Carousel from './Carousel.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Analytics work, end to end"
      lede="Data modelling and reporting built from the question backwards: what decision does this need to support?"
    >
      {/* A lone project reads as a deliberate feature card, not a gap. */}
      <div className={`grid ${projects.length === 1 ? 'grid--single' : ''}`}>
        {projects.map((p) => (
          <article className="card" key={p.title}>
            {p.images && (
              <div className="card__preview">
                <Carousel images={p.images} alt={p.title} />
                {p.category && (
                  <span className="card__category">{p.category}</span>
                )}
              </div>
            )}

            <h3 className="card__title">{p.title}</h3>
            <p className="card__summary">{p.summary}</p>

            <ul className="pills" aria-label="Tech used">
              {p.tags.map((t, i) => (
                <li key={`${t}-${i}`} className="pill">
                  {t}
                </li>
              ))}
            </ul>

            {p.findings ? (
              <div className="card__findings">
                <p className="card__outcome-label">Key Findings</p>
                <ul>
                  {p.findings.map((f) => (
                    <li key={f.label}>
                      <strong>{f.label}:</strong> {f.text}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              p.outcome && (
                <p className="card__outcome">
                  <span className="card__outcome-label">Finding</span>
                  {p.outcome}
                </p>
              )
            )}

            <div className="card__foot">
              {p.meta && <span className="card__meta">{p.meta}</span>}
              <RepoLink url={p.repo} label="Open project" variant="link" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
