import Section from './Section.jsx'
import RepoLink from './RepoLink.jsx'
import { sideProjects } from '../data/projects.js'

export default function SideProjects() {
  return (
    <Section
      id="side-projects"
      label="03 — Side Projects"
      title="Products I have built and shipped"
      tone="muted"
    >
      <ul className="minilist">
        {sideProjects.map((p) => (
          <li className="minicard" key={p.title}>
            <div className="minicard__main">
              <h3 className="minicard__title">{p.title}</h3>
              <p className="minicard__summary">{p.summary}</p>
              <ul className="tags tags--sm" aria-label="Tech used">
                {p.tags.map((t, i) => (
                  <li key={`${t}-${i}`} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="minicard__side">
              <RepoLink url={p.repo} label="Repo" />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
