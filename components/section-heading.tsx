import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  invert?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-sm font-semibold uppercase tracking-wider',
            invert ? 'text-primary' : 'text-primary',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl',
          invert ? 'text-navy-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed text-pretty',
            invert ? 'text-navy-muted' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
