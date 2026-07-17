import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { Services } from '@/components/home/services'
import { Industries } from '@/components/home/industries'
import { Testimonials } from '@/components/home/testimonials'
import { Faq } from '@/components/faq'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Testimonials />
      <Faq />
      <CtaSection />
    </>
  )
}
