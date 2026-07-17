import Link from 'next/link'
import { ArrowUpRight, Wrench, HeartPulse, HardHat, Home, Briefcase, Building2 } from 'lucide-react'

const industries = [
  { icon: Wrench, name: 'HVAC Companies', href: '/solutions#hvac' },
  { icon: HeartPulse, name: 'Healthcare', href: '/solutions#healthcare' },
  { icon: HardHat, name: 'Construction', href: '/solutions#construction' },
  { icon: Home, name: 'Real Estate', href: '/solutions#real-estate' },
  { icon: Briefcase, name: 'Professional Services', href: '/solutions' },
  { icon: Building2, name: 'Local Canadian Business', href: '/solutions' },
]

export function Industries() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Industries we serve
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Tailored automation for your industry
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We understand the workflows behind service and trade businesses. Every solution is
              designed around how your industry actually operates.
            </p>
            <Link
              href="/solutions"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Explore industry solutions
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <industry.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-foreground">{industry.name}</span>
                <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
