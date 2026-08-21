// A repo URL that has not been filled in yet renders as a quiet placeholder
// instead of a broken link.
function isPending(url) {
  return !url || url.trim() === '' || url.trim().startsWith('TODO')
}

// variant 'btn'  — pill button (side-project rows)
// variant 'link' — plain uppercase text link (project cards)
export default function RepoLink({
  url,
  label = 'View repository',
  variant = 'btn',
}) {
  const isLink = variant === 'link'

  if (isPending(url)) {
    return isLink ? (
      <span className="card__link card__link--pending">Repo coming soon</span>
    ) : (
      <span className="btn btn--quiet">Repo coming soon</span>
    )
  }

  return (
    <a
      className={isLink ? 'card__link' : 'btn'}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <span aria-hidden="true">&rarr;</span>
    </a>
  )
}
