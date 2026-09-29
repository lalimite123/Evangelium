import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { localePath, type Locale } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/site-config'

type LogoProps = {
  locale: Locale
  className?: string
  size?: 'sm' | 'md' | 'lg'
  tone?: 'default' | 'inverted'
  withText?: boolean
}

const sizes = { sm: 36, md: 44, lg: 56 }

export function Logo({ locale, className, size = 'md', tone = 'default', withText = true }: LogoProps) {
  const px = sizes[size]
  return (
    <Link
      href={localePath(locale)}
      className={cn('group inline-flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring', className)}
      aria-label={siteConfig.name}
    >
      <span
        className="relative shrink-0 overflow-hidden rounded-full ring-1 ring-border/60 transition-transform duration-500 ease-out-expo group-hover:rotate-6"
        style={{ width: px, height: px }}
      >
        <Image src="/images/emblem.png" alt="" fill sizes={`${px}px`} className="object-cover" priority />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-[15px] font-semibold tracking-tight',
              tone === 'inverted' ? 'text-forest-foreground' : 'text-foreground',
            )}
          >
            Das Evangelium
          </span>
          <span
            className={cn(
              'mt-1 text-[10px] font-medium uppercase tracking-[0.22em]',
              tone === 'inverted' ? 'text-forest-foreground/60' : 'text-muted-foreground',
            )}
          >
            e.V. · Dortmund
          </span>
        </span>
      )}
    </Link>
  )
}
