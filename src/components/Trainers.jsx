import Section from './Section'
import { trainers } from '../data/gym'

export default function Trainers() {
  return (
    <Section id="trainers" title="Meet your trainers" intro="Certified coaches who track your progress, not just your reps.">
      <div className="grid grid--4">
        {trainers.map(t => (
          <article className="card trainer" key={t.name}>
            <div className="avatar" aria-hidden="true">{t.name.split(' ').map(w => w[0]).join('')}</div>
            <h3>{t.name}</h3>
            <p className="role">{t.role}</p>
            <p>{t.exp} experience</p>
            <div className="tags">{t.tags.map(g => <span key={g}>{g}</span>)}</div>
          </article>
        ))}
      </div>
    </Section>
  )
}
