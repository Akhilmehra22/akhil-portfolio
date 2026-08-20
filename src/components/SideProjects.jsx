import Section from './Section.jsx'
import RepoLink from './RepoLink.jsx'
import { sideProjects } from '../data/projects.js'

export default function SideProjects() {
  return (
    <Section
      id="side-projects"
      label="Side Projects"
      title="Products I have built and shipped"
      lede="Separate from the analytics work above: things I built end to end because I wanted them to exist."
    >
      <ul className="minilist">
        {sideProjects.map((p) => (
          <li className="minicard" key={p.title}>
            <div className="minicard__main">
              <h3 className="minicard__title">{p.title}</h3>
              <p className="minicard__summary">{p.summary}</p>
              <ul className="pills" aria-label="Tech used">
                {p.tags.map((t, i) => (
                  <li key={`${t}-${i}`} className="pill">
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
