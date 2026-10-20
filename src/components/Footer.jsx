import { gym } from '../data/gym'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div><div className="brand">Wellness<span>Club</span></div><p>{gym.address}</p><p>{gym.email}</p></div>
        <div><h4>Opening hours</h4>{gym.hours.map(([d, t]) => <p key={d}>{d}: {t}</p>)}</div>
        <div>
          <h4>Find us</h4>
          <a href={`https://www.google.com/maps/search/${encodeURIComponent(gym.mapQuery)}`} target="_blank" rel="noreferrer">Open in Google Maps</a>
        </div>
      </div>
      <p className="footer__note">© {new Date().getFullYear()} {gym.name}. Demo website.</p>
    </footer>
  )
}
