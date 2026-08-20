// A repo URL that has not been filled in yet renders as a quiet, non-clickable
// pill instead of a broken link.
function isPending(url) {
  return !url || url.trim() === '' || url.trim().startsWith('TODO')
}

export default function RepoLink({ url, label = 'View repository' }) {
  if (isPending(url)) {
    return <span className="btn btn--quiet">Repo coming soon</span>
  }
  return (
    <a className="btn" href={url} target="_blank" rel="noreferrer">
      {label}
      <span aria-hidden="true">&rarr;</span>
    </a>
  )
}
