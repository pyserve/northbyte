import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/button-link'

export function CtaSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-navy-foreground sm:text-4xl">
              Ready to automate your business and grow faster?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-muted">
              Book a free consultation and get a personalized automation assessment for your
              company. No commitment, just a clear plan.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </div>
      </div>
    </section>
  )
}
