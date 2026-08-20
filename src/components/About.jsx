import Section from './Section.jsx'
import { about } from '../data/config.js'

export default function About() {
  return (
    <Section id="about" label="01 — About" title="How I work">
      <div className="prose">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
