import { gym } from '../data/gym'
import { waLink } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="hero__loc">{gym.area}</p>
          <h1>{gym.tagline}</h1>
          <p className="lead">A friendly neighbourhood gym with certified coaches, a clean air-conditioned floor and plans that fit your budget.</p>
          <div className="hero__cta">
            <a className="btn" href="#join">Book a free trial</a>
            <a className="btn btn--ghost" href={waLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
        <div className="hero__panel" aria-label="Gym at a glance">
          <div><b>4</b><span>certified trainers</span></div>
          <div><b>15+</b><span>weekly classes</span></div>
          <div><b>17 hrs</b><span>open daily, Mon to Sat</span></div>
          <div><b>Free</b><span>first-day trial</span></div>
        </div>
      </div>
    </section>
  )
}
