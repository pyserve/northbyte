const stats = [
  { value: '150+', label: 'Automation workflows deployed' },
  { value: '40hrs', label: 'Saved monthly per client' },
  { value: '3.2x', label: 'Average increase in captured leads' },
  { value: '98%', label: 'Client retention rate' },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
