import { useState } from 'react'
import { credentials } from '../data/config.js'

// A credential card that flips on click to reveal its history. The whole card
// is a button so it is keyboard reachable; clicking the link on the back does
// not trigger a flip.
function CredCard({ eyebrow, primary, secondary, url, linkLabel, logo, history, wide }) {
  const [flipped, setFlipped] = useState(false)
  const hasHistory = Array.isArray(history) && history.length > 0

  const toggle = () => hasHistory && setFlipped((f) => !f)

  return (
    <div className={`cred-flip ${wide ? 'cred--wide' : ''} ${flipped ? 'is-flipped' : ''}`}>
      <div
        className="cred-flip__inner"
        role={hasHistory ? 'button' : undefined}
        tabIndex={hasHistory ? 0 : undefined}
        aria-pressed={hasHistory ? flipped : undefined}
        onClick={toggle}
        onKeyDown={(e) => {
          if (hasHistory && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            toggle()
          }
        }}
      >
        {/* front */}
        <div className="cred cred-flip__face cred-flip__front">
          <div className="cred__head">
            <div>
              <p className="cred__eyebrow">{eyebrow}</p>
              <p className="cred__primary">{primary}</p>
            </div>
            {logo && <img className="cred__logo" src={logo} alt="" loading="lazy" />}
          </div>
          {secondary && <p className="cred__secondary">{secondary}</p>}
          {hasHistory && (
            <span className="cred__more">Tap to see the story &rarr;</span>
          )}
        </div>

        {/* back */}
        <div className="cred cred-flip__face cred-flip__back">
          <p className="cred__eyebrow">{eyebrow}</p>
          <ul className="cred__history">
            {(history || []).map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <span className="cred__more">&larr; Back</span>
        </div>
      </div>
    </div>
  )
}

export default function Credentials() {
  const { currentRole, previousRole, earlierRole, education, experience } =
    credentials

  return (
    <div className="creds">
      <CredCard
        eyebrow="Current Role"
        primary={currentRole.title}
        secondary={currentRole.org}
        logo={currentRole.logo}
        history={currentRole.history}
      />
      <CredCard
        eyebrow="Previous Role"
        primary={previousRole.title}
        secondary={previousRole.org}
        logo={previousRole.logo}
        history={previousRole.history}
      />
      <CredCard
        eyebrow="Earlier Role"
        primary={earlierRole.title}
        secondary={earlierRole.org}
        logo={earlierRole.logo}
        history={earlierRole.history}
      />
      <CredCard
        eyebrow="Education"
        primary={education.program}
        secondary={education.school}
        logo={education.logo}
        history={education.history}
      />
      <CredCard
        eyebrow="Experience"
        primary={experience.stat}
        secondary={experience.note}
        history={experience.history}
        wide
      />
    </div>
  )
}
