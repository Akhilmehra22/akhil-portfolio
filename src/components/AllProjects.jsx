import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function AllProjects() {
  return (
    <Section
      id="all-projects"
      label="All Projects"
      title="Everything, in one place"
    >
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </Section>
  )
}
