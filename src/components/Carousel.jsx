import { useEffect, useState } from 'react'

// Screenshot carousel for a project card / detail page. Renders a plain image
// when there's only one shot; next/prev arrows and a dot row appear only once
// there's something to page through. When `expandable` is set, clicking the
// image opens it large in a lightbox overlay.
export default function Carousel({ images, alt, expandable = false }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const go = (delta) => {
    setIndex((i) => (i + delta + images.length) % images.length)
  }

  // Close the lightbox on Escape, and page with arrow keys while it's open.
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, images && images.length])

  if (!images || images.length === 0) return null

  const openLightbox = (e) => {
    e.stopPropagation()
    if (expandable) setLightbox(true)
  }

  const imgEl = (src, altText) => (
    <img
      className={`card__shot${expandable ? ' card__shot--expandable' : ''}`}
      src={src}
      alt={altText}
      loading="lazy"
      onClick={openLightbox}
      title={expandable ? 'Click to enlarge' : undefined}
    />
  )

  const single = images.length === 1

  return (
    <>
      <div className={`carousel${single ? ' carousel--single' : ''}`}>
        {imgEl(
          images[index],
          single ? alt : `${alt}, screenshot ${index + 1} of ${images.length}`
        )}

        {expandable && (
          <button
            type="button"
            className="carousel__expand"
            onClick={openLightbox}
            aria-label="Enlarge screenshot"
          >
            ⤢ Enlarge
          </button>
        )}

        {!single && (
          <>
            <button
              type="button"
              className="carousel__nav carousel__nav--prev"
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              aria-label="Previous screenshot"
            >
              &#10094;
            </button>
            <button
              type="button"
              className="carousel__nav carousel__nav--next"
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              aria-label="Next screenshot"
            >
              &#10095;
            </button>

            <div
              className="carousel__dots"
              role="tablist"
              aria-label="Screenshots"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show screenshot ${i + 1}`}
                  className={`carousel__dot ${i === index ? 'is-active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt}, enlarged screenshot`}
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            &times;
          </button>

          <img
            className="lightbox__img"
            src={images[index]}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
          />

          {!single && (
            <>
              <button
                type="button"
                className="carousel__nav carousel__nav--prev lightbox__nav"
                onClick={(e) => {
                  e.stopPropagation()
                  go(-1)
                }}
                aria-label="Previous screenshot"
              >
                &#10094;
              </button>
              <button
                type="button"
                className="carousel__nav carousel__nav--next lightbox__nav"
                onClick={(e) => {
                  e.stopPropagation()
                  go(1)
                }}
                aria-label="Next screenshot"
              >
                &#10095;
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
