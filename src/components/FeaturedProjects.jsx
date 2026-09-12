import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)
  if (featured.length === 0) return null

  return (
    <Section
      id="featured-projects"
      label="Professional Work"
      title="Analytics & data engineering"
      lede="The analytics and modeling work I'd lead with. My passion projects, built with AI, are further down."
    >
      <div className="grid">
        {featured.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </Section>
  )
}
