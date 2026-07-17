import type { Metadata } from 'next'
import { Wrench, HeartPulse, HardHat, Home, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Industry Solutions',
  description:
    'Industry-specific AI automation and CRM solutions for HVAC, healthcare, construction, and real estate businesses in Canada.',
}

const industries = [
  {
    id: 'hvac',
    icon: Wrench,
    name: 'HVAC Companies',
    summary:
      'Keep technicians booked and customers informed with automation built for service and trade operations.',
    features: [
      'Customer management',
      'Automated follow-ups',
      'Appointment scheduling',
      'Quote tracking',
    ],
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    name: 'Healthcare',
    summary:
      'Reduce no-shows and administrative load with secure, automated patient communication.',
    features: ['Patient communication', 'Appointment reminders', 'Data management'],
  },
  {
    id: 'construction',
    icon: HardHat,
    name: 'Construction',
    summary:
      'Track projects, manage clients, and eliminate manual paperwork across every job site.',
    features: ['Project tracking', 'Customer CRM', 'Automated documentation'],
  },
  {
    id: 'real-estate',
    icon: Home,
    name: 'Real Estate',
    summary:
      'Capture every lead and nurture clients automatically so no opportunity is ever missed.',
    features: ['Lead management', 'Automated marketing', 'Customer follow-up'],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Automation designed around your industry"
        description="Every business runs differently. We build solutions that match the way your industry actually works — from the first lead to repeat business."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              id={industry.id}
              className="grid scroll-mt-24 items-center gap-8 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2 lg:p-12"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <industry.icon className="size-7" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {industry.name}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {industry.summary}
                </p>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {industry.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3.5"
                    >
                      <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
