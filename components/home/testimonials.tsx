import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Northbyte automated our appointment scheduling and follow-ups. Our office now saves over a full day of admin work every week and books more jobs.',
    name: 'Daniel Roy',
    role: 'Owner, Roy HVAC Services',
    initials: 'DR',
  },
  {
    quote:
      'The custom CRM they built for our real estate team means no lead ever slips through the cracks. Our conversion rate jumped within two months.',
    name: 'Priya Sharma',
    role: 'Broker, Maple Grove Realty',
    initials: 'PS',
  },
  {
    quote:
      'Their AI patient reminder system cut our no-show rate dramatically. Professional, fast, and they truly understood our workflow.',
    name: 'Dr. Alan Chen',
    role: 'Director, Westside Health Clinic',
    initials: 'AC',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted by Canadian businesses"
          title="Results our clients can measure"
          description="We partner with HVAC, healthcare, construction, real estate, and professional service businesses across Canada."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-semibold text-foreground">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
