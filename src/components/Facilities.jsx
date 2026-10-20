import Section from './Section'
import { facilities } from '../data/gym'

export default function Facilities() {
  return (
    <Section id="facilities" title="Everything you need on site" tone="dark">
      <ul className="chips">{facilities.map(f => <li key={f}>{f}</li>)}</ul>
    </Section>
  )
}
