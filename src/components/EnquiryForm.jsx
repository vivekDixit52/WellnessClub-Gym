import { useState } from 'react'
import Section from './Section'
import { plans } from '../data/gym'
import { waLink } from '../utils/whatsapp'

const empty = { name: '', phone: '', plan: 'Complete', goal: 'Weight loss', message: '' }

export default function EnquiryForm() {
  const [f, setF] = useState(empty)
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = k => e => setF({ ...f, [k]: e.target.value })

  const submit = e => {
    e.preventDefault()
    const er = {}
    if (f.name.trim().length < 2) er.name = 'Enter your full name.'
    if (!/^[6-9]\d{9}$/.test(f.phone)) er.phone = 'Enter a valid 10-digit mobile number.'
    setErr(er)
    if (Object.keys(er).length) return
    // Demo: opens WhatsApp with the details. Connect a backend/Google Form here for production.
    window.open(waLink(`New enquiry\nName: ${f.name}\nPhone: ${f.phone}\nPlan: ${f.plan}\nGoal: ${f.goal}\n${f.message}`), '_blank')
    setSent(true); setF(empty)
  }

  return (
    <Section id="join" title="Start with a free trial" intro="Share your details and we'll call you back the same day." tone="tint">
      {sent ? (
        <div className="card ok"><h3>Thanks, we have your enquiry.</h3><p>Our team will call you shortly.</p><button className="btn btn--ghost" onClick={() => setSent(false)}>Send another</button></div>
      ) : (
        <form className="card form" onSubmit={submit} noValidate>
          <label>Full name<input value={f.name} onChange={set('name')} autoComplete="name" />{err.name && <em>{err.name}</em>}</label>
          <label>Mobile number<input value={f.phone} onChange={set('phone')} inputMode="numeric" maxLength={10} autoComplete="tel" />{err.phone && <em>{err.phone}</em>}</label>
          <label>Plan<select value={f.plan} onChange={set('plan')}>{plans.map(p => <option key={p.name}>{p.name}</option>)}</select></label>
          <label>Main goal<select value={f.goal} onChange={set('goal')}>{['Weight loss', 'Muscle building', 'Yoga & mobility', 'General fitness'].map(g => <option key={g}>{g}</option>)}</select></label>
          <label className="full">Message (optional)<textarea rows="3" value={f.message} onChange={set('message')} /></label>
          <button className="btn full" type="submit">Send enquiry</button>
        </form>
      )}
    </Section>
  )
}
