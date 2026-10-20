import { useState } from 'react'
const links = [['programs', 'Programs'], ['plans', 'Plans'], ['trainers', 'Trainers'], ['facilities', 'Facilities'], ['gallery', 'Gallery']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav__row">
        <a href="#top" className="brand">Wellness<span>Club</span></a>
        <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="btn btn--sm" href="#join" onClick={() => setOpen(false)}>Join now</a>
        </nav>
      </div>
    </header>
  )
}
