import useReveal from '../hooks/useReveal.js'
import Hero from '../components/Hero.jsx'
import FitCheck from '../components/FitCheck.jsx'
import About from '../components/About.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
import AllProjects from '../components/AllProjects.jsx'
import SideProjects from '../components/SideProjects.jsx'
import Skills from '../components/Skills.jsx'
import Connect from '../components/Connect.jsx'

export default function HomePage() {
  useReveal()

  return (
    <main className="shell">
      <Hero />
      <FitCheck />
      <About />
      <FeaturedProjects />
      <Skills />
      <AllProjects />
      <SideProjects />
      <Connect />
    </main>
  )
}
