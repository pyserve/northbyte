import type { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/button-link'
import { Faq } from '@/components/faq'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for AI automation and business software. Packages starting at $999 for Canadian small and medium businesses.',
}

const packages = [
  {
    name: 'Starter Automation',
    price: '$999',
    priceNote: 'starting at',
    description: 'Perfect for businesses taking their first step into automation.',
    features: [
      'Website improvements',
      'Basic automation',
      'CRM setup',
      'Email integrations',
    ],
    featured: false,
  },
  {
    name: 'Business Growth Package',
    price: '$2,500',
    priceNote: 'starting at',
    description: 'For growing teams ready to scale operations and revenue.',
    features: [
      'CRM customization',
      'Workflow automation',
      'Dashboard reporting',
      'Website integration',
    ],
    featured: true,
  },
  {
    name: 'AI Transformation Package',
    price: '$5,000+',
    priceNote: 'starting at',
    description: 'A complete AI-powered transformation for your business.',
    features: [
      'AI chatbot',
      'Advanced automation',
      'Custom applications',
      'AI business assistant',
    ],
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple packages, serious results"
        description="Choose a starting point that fits your business. Every engagement begins with a free consultation and a clear, fixed-scope quote."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  'relative flex flex-col rounded-3xl border p-8',
                  pkg.featured
                    ? 'border-primary bg-navy text-navy-foreground shadow-xl lg:-mt-4 lg:pb-12'
                    : 'border-border bg-card',
                )}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h2
                  className={cn(
                    'font-display text-xl font-semibold',
                    pkg.featured ? 'text-navy-foreground' : 'text-foreground',
                  )}
                >
                  {pkg.name}
                </h2>
                <p
                  className={cn(
                    'mt-2 text-sm',
                    pkg.featured ? 'text-navy-muted' : 'text-muted-foreground',
                  )}
                >
                  {pkg.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={cn(
                      'font-display text-4xl font-bold',
                      pkg.featured ? 'text-navy-foreground' : 'text-foreground',
                    )}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={cn(
                      'text-sm',
                      pkg.featured ? 'text-navy-muted' : 'text-muted-foreground',
                    )}
                  >
                    {pkg.priceNote}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className={pkg.featured ? 'text-navy-foreground' : 'text-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/contact"
                  className="mt-8 h-11 w-full"
                  variant={pkg.featured ? 'default' : 'outline'}
                >
                  Get Started
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Need something custom? We build tailored solutions for unique requirements.{' '}
            <a href="/contact" className="font-semibold text-primary hover:underline">
              Talk to our team
            </a>
            .
          </p>
        </div>
      </section>

      <Faq />
    </>
  )
}
