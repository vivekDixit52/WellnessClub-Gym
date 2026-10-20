export default function Section({ id, title, intro, children, tone }) {
  return (
    <section id={id} className={`section ${tone ? 'section--' + tone : ''}`}>
      <div className="container">
        <h2>{title}</h2>
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
