import { useState } from 'react'
import Section from './Section'
import { plans, durations } from '../data/gym'
import { waLink } from '../utils/whatsapp'

export default function Plans() {
  const [d, setD] = useState(3)
  const fmt = n => '₹' + n.toLocaleString('en-IN')
  const label = durations.find(x => x.id === d).label
  return (
    <Section id="plans" title="Membership plans" intro="Longer plans cost less per month. Sample prices shown." tone="tint">
      <div className="toggle" role="tablist">
        {durations.map(x => <button key={x.id} role="tab" aria-selected={d === x.id} className={d === x.id ? 'on' : ''} onClick={() => setD(x.id)}>{x.label}</button>)}
      </div>
      <div className="grid grid--3">
        {plans.map(p => (
          <article key={p.name} className={`card plan ${p.featured ? 'plan--hot' : ''}`}>
            {p.featured && <span className="badge">Most popular</span>}
            <h3>{p.name}</h3>
            <p>{p.blurb}</p>
            <div className="price">{fmt(p.price[d])}<small> / {label.toLowerCase()}</small></div>
            <ul>{p.perks.map(k => <li key={k}>{k}</li>)}</ul>
            <a className={`btn ${p.featured ? '' : 'btn--ghost'}`} href={waLink(`Hi! I'm interested in the ${p.name} ${label} plan.`)} target="_blank" rel="noreferrer">Choose {p.name}</a>
          </article>
        ))}
      </div>
    </Section>
  )
}
