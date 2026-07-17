import type { Metadata } from 'next'
import { Search, PenTool, Settings2, GraduationCap, TrendingUp } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'A proven 5-step process for delivering AI automation and business software: analysis, design, development, training, and continuous improvement.',
}

const steps = [
  {
    icon: Search,
    title: 'Business Analysis',
    description: 'We understand your current workflow and challenges.',
  },
  {
    icon: PenTool,
    title: 'Solution Design',
    description: 'We create a technology roadmap.',
  },
  {
    icon: Settings2,
    title: 'Development & Integration',
    description: 'We build and connect your systems.',
  },
  {
    icon: GraduationCap,
    title: 'Testing & Training',
    description: 'We ensure your team can use the solution.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We optimize your business automation.',
  },
]

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="A clear path from challenge to results"
        description="Our proven five-step process keeps every project focused, transparent, and built around measurable outcomes for your business."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-10 border-l-2 border-border pl-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.85rem] flex size-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="text-sm font-semibold text-primary">
                    Step {index + 1}
                  </span>
                  <h2 className="mt-1 font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
