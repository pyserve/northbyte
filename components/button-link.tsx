import Link from 'next/link'
import type { ComponentProps } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    /** Use larger, marketing-style sizing */
    cta?: boolean
  }

export function ButtonLink({
  className,
  variant,
  size,
  cta = false,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant, size }),
        cta && 'h-12 gap-2 rounded-lg px-6 text-base font-semibold',
        className,
      )}
      {...props}
    />
  )
}
