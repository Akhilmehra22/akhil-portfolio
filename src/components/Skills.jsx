import Section from './Section.jsx'
import { skills } from '../data/projects.js'

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Technical Toolkit"
      title="Core tools and methods"
    >
      <div className="skills">
        {skills.map((s) => (
          <div className="skills__group" key={s.group}>
            <h3 className="skills__label">{s.group}</h3>
            <ul className="skills__items">
              {s.items.map((item) => (
                <li key={item.name} className="skills__item">
                  {item.name}
                  {item.note && <em className="pill__note">{item.note}</em>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
