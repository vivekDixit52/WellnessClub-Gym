import Section from './Section'
import { gallery } from '../data/gym'

// Replace each tile with a real photo: put images in /public/images and use <img src="/images/xyz.jpg" alt="..." />
export default function Gallery() {
  return (
    <Section id="gallery" title="Inside the club" intro="Photo placeholders. Real gym photos go here.">
      <div className="gallery">
        {gallery.map((g, i) => <figure key={g} className={`tile tile--${i % 6}`}><figcaption>{g}</figcaption></figure>)}
      </div>
    </Section>
  )
}
