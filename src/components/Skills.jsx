import Section from './Section.jsx'
import { skills } from '../data/projects.js'

export default function Skills() {
  return (
    <Section id="skills" label="04 — Skills" title="What I actually use">
      <div className="skills">
        {skills.map((s) => (
          <div className="skills__group" key={s.group}>
            <h3 className="skills__label">{s.group}</h3>
            <ul className="tags">
              {s.items.map((item) => (
                <li key={item.name} className="tag">
                  {item.name}
                  {item.note && <em className="tag__note">{item.note}</em>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
