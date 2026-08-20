import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import SideProjects from './components/SideProjects.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <SideProjects />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
