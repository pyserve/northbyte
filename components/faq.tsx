'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'How long does a typical automation project take?',
    a: 'Most Starter projects launch within 2–3 weeks. Larger CRM customizations and custom software builds typically run 4–10 weeks depending on scope. We share a clear timeline after your free consultation.',
  },
  {
    q: 'Do you work with businesses outside my industry?',
    a: 'Yes. While we specialize in HVAC, healthcare, construction, real estate, and professional services, our automation and software approach adapts to almost any small or medium business.',
  },
  {
    q: 'Which CRM systems do you support?',
    a: 'We implement and customize Zoho CRM, HubSpot, and Salesforce, and can integrate them with your website, email, and existing tools.',
  },
  {
    q: 'Will my team be able to use the new systems?',
    a: 'Absolutely. Training and handover are built into every engagement. We make sure your team is confident using the solution before we consider a project complete.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. Our Continuous Improvement service keeps your automations optimized, monitored, and evolving as your business grows.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Projects start at $999 for Starter Automation and scale up for advanced AI transformation. See our pricing page for package details, or book a consultation for a custom quote.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before getting started with Northbyte."
        />

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground">{faq.q}</span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {isOpen ? (
                        <Minus className="size-4" aria-hidden="true" />
                      ) : (
                        <Plus className="size-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="px-6 pb-5 leading-relaxed text-muted-foreground">{faq.a}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
