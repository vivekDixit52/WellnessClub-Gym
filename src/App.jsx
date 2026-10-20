import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Plans from './components/Plans'
import Trainers from './components/Trainers'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Plans />
        <Trainers />
        <Facilities />
        <Gallery />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
