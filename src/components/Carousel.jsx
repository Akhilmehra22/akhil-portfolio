import { useState } from 'react'

// Screenshot carousel for a project card. Renders a plain image when there's
// only one shot; next/prev arrows and a dot row appear only once there's
// something to page through.
export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const go = (delta) => {
    setIndex((i) => (i + delta + images.length) % images.length)
  }

  if (images.length === 1) {
    return <img className="card__shot" src={images[0]} alt={alt} loading="lazy" />
  }

  return (
    <div className="carousel">
      <img
        className="card__shot"
        src={images[index]}
        alt={`${alt} — screenshot ${index + 1} of ${images.length}`}
        loading="lazy"
      />

      <button
        type="button"
        className="carousel__nav carousel__nav--prev"
        onClick={() => go(-1)}
        aria-label="Previous screenshot"
      >
        &larr;
      </button>
      <button
        type="button"
        className="carousel__nav carousel__nav--next"
        onClick={() => go(1)}
        aria-label="Next screenshot"
      >
        &rarr;
      </button>

      <div className="carousel__dots" role="tablist" aria-label="Screenshots">
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
    </div>
  )
}
