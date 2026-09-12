import { Link, useNavigate } from 'react-router-dom'

// Brief on the card only — no real screenshot here. Full detail (findings,
// all screenshots, README) lives on the /projects/:slug page. The whole
// card is clickable, but the title and "View details" are real links too
// (keyboard/no-JS reachable). Each card's preview is a colored gradient
// keyed to `accent`, with a project-specific `icon` — so cards read as
// individual, not a wall of identical bar charts.
export default function ProjectCard({ project }) {
  const navigate = useNavigate()
  const href = `/projects/${project.slug}`
  const accent = project.accent || 'teal'

  return (
    <article
      className="card card--clickable"
      onClick={() => navigate(href)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') navigate(href)
      }}
    >
      <div className={`card__preview card__preview--${accent}`}>
        {project.category && (
          <span className="card__preview-label">{project.category}</span>
        )}

        {project.icon && (
          <span className="card__preview-icon" aria-hidden="true">
            {project.icon}
          </span>
        )}

        {project.previewTags && (
          <div className="card__preview-tags">
            {project.previewTags.map((t) => (
              <span key={t} className="card__preview-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="card__title">
        <Link to={href} onClick={(e) => e.stopPropagation()}>
          {project.title}
        </Link>
      </h3>
      <p className="card__summary">{project.summary}</p>

      <ul className="pills" aria-label="Tech used">
        {project.tags.map((t, i) => (
          <li key={`${t}-${i}`} className="pill">
            {t}
          </li>
        ))}
      </ul>

      <div className="card__foot">
        {project.meta && <span className="card__meta">{project.meta}</span>}
        <Link
          className="card__link"
          to={href}
          onClick={(e) => e.stopPropagation()}
        >
          View details <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  )
}
