import Link from 'next/link'
import { Heart } from 'lucide-react'
import { localePath, type Locale } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'

type Props = {
  locale: Locale
  label: string
  variant?: 'accent' | 'primary' | 'outline' | 'inverted'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variants = {
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_10px_30px_-12px_rgba(245,197,24,0.7)]',
  primary: 'bg-primary text-primary-foreground hover:bg-forest',
  outline: 'border border-border bg-background text-foreground hover:border-primary hover:text-primary',
  inverted: 'bg-forest-foreground text-forest hover:bg-accent hover:text-accent-foreground',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function DonateButton({ locale, label, variant = 'accent', size = 'md', className }: Props) {
  return (
    <Link
      href={localePath(locale, 'donate')}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <Heart
        className={cn('shrink-0 transition-transform duration-300 group-hover:scale-110', size === 'lg' ? 'size-5' : 'size-4')}
        aria-hidden="true"
      />
      <span>{label}</span>
    </Link>
  )
}
