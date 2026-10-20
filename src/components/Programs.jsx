import Section from './Section'
import { programs } from '../data/gym'

export default function Programs() {
  return (
    <Section id="programs" title="Programs for every goal" intro="Pick a goal. Your coach builds the plan.">
      <div className="grid grid--4">
        {programs.map(p => <article className="card" key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}
      </div>
    </Section>
  )
}
