export default function Section({ id, label, title, children, tone = 'primary' }) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="section__head">
        {label && <p className="section__label">{label}</p>}
        {title && <h2 className="section__title">{title}</h2>}
      </div>
      {children}
    </section>
  )
}
