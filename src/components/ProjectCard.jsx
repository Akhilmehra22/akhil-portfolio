import { Link, useNavigate } from 'react-router-dom'

// Brief on the card only — no screenshot here. Full detail (findings,
// screenshots, README) lives on the /projects/:slug page. The whole card is
// clickable, but the title and "View details" are real links too
// (keyboard/no-JS reachable).
export default function ProjectCard({ project }) {
  const navigate = useNavigate()
  const href = `/projects/${project.slug}`

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
      {project.category && (
        <p className="card__category-label">{project.category}</p>
      )}

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
