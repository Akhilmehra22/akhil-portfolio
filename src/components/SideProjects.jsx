import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { passionProjects } from '../data/projects.js'

export default function SideProjects() {
  if (passionProjects.length === 0) return null

  return (
    <Section
      id="side-projects"
      label="Passion Projects"
      title="Things I built because I wanted them to exist"
      lede="Separate from the analytics work above: full builds I put together with AI and agents to solve my own problems."
    >
      <div className="grid">
        {passionProjects.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </Section>
  )
}
