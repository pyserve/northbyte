import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ButtonLink } from '@/components/button-link'

const trustPoints = ['AI automation', 'CRM setup', 'Custom software', 'Lead-driven websites']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-28 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-1 text-sm font-medium text-navy-muted">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            AI Automation & Business Software · Canada
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Automate Your Business. Grow Faster With AI.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-muted">
            We build AI-powered automation, CRM solutions, websites, and custom software that help
            Canadian businesses save time, capture more customers, and operate efficiently.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact" cta>
              Book a Free Consultation
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink
              href="/solutions"
              cta
              variant="outline"
              className="border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
            >
              See Our Solutions
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-navy-muted">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-navy-foreground/10 shadow-2xl shadow-black/40">
            <Image
              src="/ai-dashboard.png"
              alt="Northbyte AI automation dashboard showing analytics, a customer pipeline, and an AI assistant"
              width={1200}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-5 py-4 shadow-xl sm:block">
            <p className="text-2xl font-bold text-foreground">40+ hrs</p>
            <p className="text-sm text-muted-foreground">saved per month on average</p>
          </div>
        </div>
      </div>
    </section>
  )
}
