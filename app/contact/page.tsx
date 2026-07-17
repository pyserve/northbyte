import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get your free business automation assessment. Contact Northbyte to automate operations, improve customer management, and grow revenue.',
}

const details = [
  { icon: Mail, label: 'Email', value: 'hello@northbyte.ca' },
  { icon: Phone, label: 'Phone', value: '+1 (416) 555-0199' },
  { icon: MapPin, label: 'Location', value: 'Toronto, Ontario, Canada' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9am–6pm ET' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get your free automation assessment"
        description="Tell us about your business and current challenges. We'll show you exactly where AI and automation can save time and capture more customers."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Let&apos;s talk about your business
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you know exactly what you need or you&apos;re just exploring, our team is here
              to help you find the highest-impact opportunities for automation.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <detail.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">{detail.label}</span>
                    <span className="block font-medium text-foreground">{detail.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
