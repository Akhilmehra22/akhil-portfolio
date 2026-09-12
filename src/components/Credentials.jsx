import { useLayoutEffect, useRef, useState } from 'react'
import { credentials } from '../data/config.js'

// A credential card that flips on click to reveal its history. Hover only gives
// a small lift (handled in CSS); a click flips it and the card grows to fit the
// history so nothing scrolls. The back height is measured from the real content
// so every card grows exactly as much as it needs.
function CredCard({ eyebrow, primary, secondary, logo, history, wide, accent }) {
  const [flipped, setFlipped] = useState(false)
  const [backH, setBackH] = useState(null)
  const backRef = useRef(null)
  const hasHistory = Array.isArray(history) && history.length > 0

  // Measure the back face so the card grows to exactly fit the story. The back
  // reflows into two columns once the card is flipped (it goes full width), so
  // we re-measure whenever the flipped state or the window size changes, and
  // once more after the width transition settles.
  useLayoutEffect(() => {
    if (!hasHistory) return
    const measure = () => {
      if (backRef.current) setBackH(backRef.current.scrollHeight)
    }
    measure()
    const t = setTimeout(measure, 260) // after the full-width transition
    window.addEventListener('resize', measure)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', measure)
    }
  }, [hasHistory, flipped])

  const toggle = () => hasHistory && setFlipped((f) => !f)

  const style = backH ? { '--back-h': `${backH}px` } : undefined

  return (
    <div
      className={`cred-flip ${wide ? 'cred--wide' : ''} ${accent ? `cred-flip--${accent}` : ''} ${flipped ? 'is-flipped' : ''}`}
      style={style}
    >
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
            <span className="cred__more">Click to see the story &rarr;</span>
          )}
        </div>

        {/* back */}
        <div className="cred cred-flip__face cred-flip__back" ref={backRef}>
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
  const {
    currentRole,
    previousRole,
    earlierRole,
    education,
    experience,
    personality,
  } = credentials

  return (
    <div className="creds">
      <CredCard
        eyebrow="Current Role"
        primary={currentRole.title}
        secondary={currentRole.org}
        logo={currentRole.logo}
        history={currentRole.history}
        accent="coral"
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
      />
      {personality && (
        <CredCard
          eyebrow="Personality"
          primary={personality.stat}
          secondary={personality.note}
          history={personality.history}
          accent="gold"
        />
      )}
    </div>
  )
}
