export default function Section({ id, label, title, lede, children }) {
  return (
    <section id={id} className="panel reveal">
      {(label || title || lede) && (
        <div className="panel__head">
          {label && <p className="eyebrow">{label}</p>}
          {title && <h2 className="panel__title">{title}</h2>}
          {lede && <p className="panel__lede">{lede}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
