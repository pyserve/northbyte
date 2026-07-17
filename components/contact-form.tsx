'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const businessTypes = [
  'HVAC Company',
  'Healthcare',
  'Construction',
  'Real Estate',
  'Professional Services',
  'Other',
]

const inputClass =
  'mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/40'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission — replace with a server action or API route when a backend is connected.
    setTimeout(() => setStatus('success'), 900)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-semibold text-foreground">
          Thank you — request received
        </h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          Our team will reach out within one business day to schedule your free business automation
          assessment.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} placeholder="Acme Inc." />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@company.ca" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+1 (416) 555-0100" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="businessType" className="text-sm font-medium text-foreground">
            Business type
          </label>
          <select id="businessType" name="businessType" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select your industry
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="challenges" className="text-sm font-medium text-foreground">
            Current challenges
          </label>
          <textarea
            id="challenges"
            name="challenges"
            rows={4}
            className={inputClass}
            placeholder="Tell us about the repetitive tasks or bottlenecks slowing your business down."
          />
        </div>
      </div>

      <Button type="submit" className="mt-6 h-12 w-full text-base font-semibold" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Get Your Free Business Automation Assessment'
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We&apos;ll never share your information. Expect a reply within one business day.
      </p>
    </form>
  )
}
