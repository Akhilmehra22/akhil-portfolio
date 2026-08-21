import { credentials } from '../data/config.js'

function CredCard({ eyebrow, primary, secondary, url, linkLabel, logo }) {
  return (
    <div className="cred">
      <div className="cred__head">
        <div>
          <p className="cred__eyebrow">{eyebrow}</p>
          <p className="cred__primary">{primary}</p>
        </div>
        {logo && (
          <img className="cred__logo" src={logo} alt="" loading="lazy" />
        )}
      </div>
      {secondary && <p className="cred__secondary">{secondary}</p>}
      {url ? (
        <a className="cred__link" href={url} target="_blank" rel="noreferrer">
          {linkLabel} <span aria-hidden="true">&rarr;</span>
        </a>
      ) : null}
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
        url={currentRole.url}
        logo={currentRole.logo}
        linkLabel="Open company website"
      />
      <CredCard
        eyebrow="Previous Role"
        primary={previousRole.title}
        secondary={previousRole.org}
        url={previousRole.url}
        logo={previousRole.logo}
        linkLabel="Open company website"
      />
      <CredCard
        eyebrow="Earlier Role"
        primary={earlierRole.title}
        secondary={earlierRole.org}
        url={earlierRole.url}
        logo={earlierRole.logo}
        linkLabel="Open company website"
      />
      <CredCard
        eyebrow="Education"
        primary={education.program}
        secondary={education.school}
        url={education.url}
        logo={education.logo}
        linkLabel="Open program page"
      />
      <div className="cred cred--wide">
        <p className="cred__eyebrow">Experience</p>
        <p className="cred__stat">{experience.stat}</p>
        <p className="cred__secondary">{experience.note}</p>
      </div>
    </div>
  )
}
