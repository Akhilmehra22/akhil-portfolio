import { useEffect } from 'react'

// Fades sections in as they enter the viewport — the one ambient motion on
// the page. Bails out entirely for reduced-motion users by revealing
// everything up front.
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}
