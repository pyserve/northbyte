import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/process', label: 'Our Process' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { href: '/solutions', label: 'Industry Solutions' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/solutions#hvac', label: 'HVAC Companies' },
      { href: '/solutions#healthcare', label: 'Healthcare' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { href: '/#services', label: 'AI Automation' },
      { href: '/#services', label: 'CRM Implementation' },
      { href: '/#services', label: 'Custom Software' },
      { href: '/#services', label: 'Business Analytics' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Zap className="size-4" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">Northbyte</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-muted">
              AI-powered automation, CRM, and custom software helping Canadian businesses save
              time, capture more customers, and operate efficiently.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-muted">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                hello@northbyte.ca
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                +1 (416) 555-0199
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Toronto, Ontario, Canada
              </li>
            </ul>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-navy-foreground">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-foreground/10 pt-8 text-sm text-navy-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Northbyte Technologies Inc. All rights reserved.</p>
          <p>Proudly building for Canadian businesses.</p>
        </div>
      </div>
    </footer>
  )
}
