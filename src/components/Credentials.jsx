import { credentials } from '../data/config.js'

function CredCard({ eyebrow, primary, secondary, url, linkLabel }) {
  return (
    <div className="cred">
      <p className="cred__eyebrow">{eyebrow}</p>
      <p className="cred__primary">{primary}</p>
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
        linkLabel="Open company website"
      />
      <CredCard
        eyebrow="Previous Role"
        primary={previousRole.title}
        secondary={previousRole.org}
        url={previousRole.url}
        linkLabel="Open company website"
      />
      <CredCard
        eyebrow="Earlier Role"
        primary={earlierRole.title}
        secondary={earlierRole.org}
        url={earlierRole.url}
        linkLabel="Open company website"
      />
      <CredCard
        eyebrow="Education"
        primary={education.program}
        secondary={education.school}
        url={education.url}
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
