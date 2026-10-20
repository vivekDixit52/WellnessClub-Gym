import { waLink } from '../utils/whatsapp'

export default function WhatsAppButton() {
  return <a className="wa" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>
}
