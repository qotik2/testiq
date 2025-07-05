import { Metadata } from 'next'
import Hero from './components/Home/Hero'
import Records from './components/Home/Records'
import Service from './components/Home/Service'
import AboutUs from './components/Home/Aboutus'
import Review from './components/Home/Review'
import ContactForm from './components/Contact/Form'
import Newsletter from './components/Home/Newsletter/Newsletter'

export const metadata: Metadata = {
  title: 'y100k club - Профессиональное пугание по чатам',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Records />
      <Service />
      <AboutUs />
      <Review />
      <ContactForm />
      <Newsletter />
    </main>
  )
}
