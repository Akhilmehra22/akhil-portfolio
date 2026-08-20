// A repo URL that has not been filled in yet renders as a quiet placeholder
// instead of a broken link.
function isPending(url) {
  return !url || url.trim() === '' || url.trim().startsWith('TODO')
}

export default function RepoLink({ url, label = 'View repository' }) {
  if (isPending(url)) {
    return <span className="repo repo--pending">Repository link coming soon</span>
  }
  return (
    <a className="repo" href={url} target="_blank" rel="noreferrer">
      {label}
      <span className="repo__arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}
