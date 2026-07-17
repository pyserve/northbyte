import type { Metadata } from 'next'
import Image from 'next/image'
import { Brain, Cpu, Users, Code2, Workflow, Target, Eye, Handshake } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Northbyte is a Canadian technology consulting company helping businesses adopt modern AI and automation solutions to remove repetitive work and improve productivity.',
}

const expertise = [
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Cpu, label: 'Machine Learning' },
  { icon: Users, label: 'CRM Systems' },
  { icon: Code2, label: 'Software Development' },
  { icon: Workflow, label: 'Business Automation' },
]

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To remove repetitive work, improve productivity, and help companies compete in the digital economy.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'A future where every Canadian small and medium business has enterprise-grade automation working for them.',
  },
  {
    icon: Handshake,
    title: 'Our Promise',
    description:
      'Practical, measurable solutions delivered by a team that understands how your business actually runs.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Northbyte"
        title="Technology consulting built for real business results"
        description="We help businesses adopt modern AI and automation solutions that make a measurable difference to how they operate and grow."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/hero-team.png"
              alt="The Northbyte technology consulting team collaborating in the office"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              A partner in your digital transformation
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We are a technology consulting company helping businesses adopt modern AI and
              automation solutions. Our mission is to remove repetitive work, improve productivity,
              and help companies compete in the digital economy.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From HVAC and construction to healthcare and real estate, we translate complex
              technology into practical systems that save time and capture more revenue — without
              the enterprise price tag or complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Expertise
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Deep technical capability, applied practically
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {expertise.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
