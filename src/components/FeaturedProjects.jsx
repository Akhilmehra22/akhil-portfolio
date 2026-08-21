import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)
  if (featured.length === 0) return null

  return (
    <Section
      id="featured-projects"
      label="Featured Projects"
      title="Selected work"
      lede="A short list of the analyses I'd lead with. The rest live in All Projects below."
    >
      <div className="grid">
        {featured.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </Section>
  )
}
