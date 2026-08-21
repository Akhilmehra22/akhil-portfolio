import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router keeps scroll position across navigations by default, which
// means clicking a project card from the middle of the homepage would land
// on the detail page still scrolled halfway down. If the new URL carries a
// hash (e.g. navigating back to "/#all-projects"), scroll to that section
// instead of the top — the browser's own hash-scroll only fires on a full
// page load, not on client-side route changes.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
