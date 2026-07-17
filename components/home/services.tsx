import { Bot, Users, Code2, Globe, BarChart3 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Bot,
    title: 'AI Automation Solutions',
    description:
      'Automate repetitive tasks, customer communication, reporting, and business workflows using artificial intelligence.',
  },
  {
    icon: Users,
    title: 'CRM Implementation & Customization',
    description:
      'Setup and customize CRM systems like Zoho CRM, HubSpot, and Salesforce to manage leads, customers, and sales.',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Build web applications, internal tools, customer portals, and business management systems.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Create fast, professional websites designed to generate leads and convert visitors into customers.',
  },
  {
    icon: BarChart3,
    title: 'Business Analytics',
    description:
      'Transform business data into useful dashboards and insights using Power BI and AI analytics.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Solutions built to save time and grow revenue"
          description="From automation to analytics, we deliver the technology stack modern Canadian businesses need to compete."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Not sure where to start?
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Get a free automation assessment and we&apos;ll map the highest-impact opportunities
              for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
