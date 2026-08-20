import useReveal from './hooks/useReveal.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import SideProjects from './components/SideProjects.jsx'
import Skills from './components/Skills.jsx'
import Connect from './components/Connect.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main className="shell">
        <Hero />
        <About />
        <Projects />
        <SideProjects />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
