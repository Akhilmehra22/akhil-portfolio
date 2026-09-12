import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { marked } from 'marked'
import Carousel from '../components/Carousel.jsx'
import { allProjects } from '../data/projects.js'

function useReadme(url) {
  const [state, setState] = useState({ status: 'idle', html: '' })

  useEffect(() => {
    if (!url) {
      setState({ status: 'none', html: '' })
      return
    }

    let cancelled = false
    setState({ status: 'loading', html: '' })

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`)
        return res.text()
      })
      .then((md) => {
        if (cancelled) return
        setState({ status: 'ready', html: marked.parse(md) })
      })
      .catch(() => {
        if (cancelled) return
        setState({ status: 'error', html: '' })
      })

    return () => {
      cancelled = true
    }
  }, [url])

  return state
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = allProjects.find((p) => p.slug === slug)
  const readme = useReadme(project?.readme)

  if (!project) {
    return (
      <main className="shell">
        <section className="panel reveal is-visible">
          <p className="section__title">Project not found.</p>
          <Link className="btn" to="/">
            Back home
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="shell">
      <section className="panel reveal is-visible project-detail">
        <Link className="btn back-btn" to="/#featured-projects">
          <span aria-hidden="true">&#10094;</span> Back to projects
        </Link>

        {project.category && <p className="eyebrow">{project.category}</p>}
        <h1 className="panel__title">{project.title}</h1>
        <p className="hero__intro">{project.summary}</p>
        {project.overview && (
          <p className="project-detail__overview">{project.overview}</p>
        )}

        <ul className="pills" aria-label="Tech used">
          {project.tags.map((t, i) => (
            <li key={`${t}-${i}`} className="pill">
              {t}
            </li>
          ))}
        </ul>

        {project.images && (
          <div className="project-detail__gallery">
            <Carousel images={project.images} alt={project.title} expandable />
          </div>
        )}

        {project.repo && (
          <a
            className="btn btn--solid"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        )}

        {project.findings && (
          <div className="card__findings">
            <p className="card__outcome-label">Key Findings</p>
            <ul>
              {project.findings.map((f) => (
                <li key={f.label}>
                  <strong>{f.label}:</strong> {f.text}
                </li>
              ))}
            </ul>
          </div>
        )}

        {!project.findings && project.outcome && (
          <p className="card__outcome">
            <span className="card__outcome-label">Finding</span>
            {project.outcome}
          </p>
        )}

        {project.readme && (
          <div className="project-detail__readme">
            <p className="card__outcome-label">README</p>
            {readme.status === 'loading' && (
              <p className="hero__intro">Loading README from GitHub…</p>
            )}
            {readme.status === 'error' && (
              <p className="hero__intro">
                Couldn’t load the README right now. See it directly on{' '}
                <a href={project.repo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                .
              </p>
            )}
            {readme.status === 'ready' && (
              <div
                className="readme-content"
                dangerouslySetInnerHTML={{ __html: readme.html }}
              />
            )}
          </div>
        )}
      </section>
    </main>
  )
}
