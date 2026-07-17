type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-navy-muted text-pretty">{description}</p>
      </div>
    </section>
  )
}
