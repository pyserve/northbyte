import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://northbyte.ca'),
  title: {
    default: 'Northbyte — AI Automation & Business Software for Canadian Companies',
    template: '%s | Northbyte',
  },
  description:
    'Northbyte builds AI-powered automation, CRM solutions, websites, and custom software that help Canadian businesses save time, capture more customers, and operate efficiently.',
  keywords: [
    'AI automation Canada',
    'business automation',
    'CRM implementation',
    'custom software development',
    'workflow automation',
    'HVAC software',
    'business analytics',
  ],
  openGraph: {
    title: 'Northbyte — AI Automation & Business Software Solutions',
    description:
      'AI-powered automation, CRM, and custom software for Canadian small and medium businesses.',
    type: 'website',
    locale: 'en_CA',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1729',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
