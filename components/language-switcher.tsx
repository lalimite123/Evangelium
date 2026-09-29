'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { locales, localeNames, type Locale } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'

type Props = {
  locale: Locale
  label: string
  tone?: 'default' | 'inverted'
  className?: string
}

export function LanguageSwitcher({ locale, label, tone = 'default', className }: Props) {
  const pathname = usePathname() ?? `/${locale}`
  const rest = pathname.replace(/^\/(de|en|fr)(?=\/|$)/, '')

  return (
    <nav aria-label={label} className={cn('relative flex items-center rounded-full p-1', tone === 'inverted' ? 'bg-forest-foreground/10' : 'bg-secondary', className)}>
      {locales.map((code) => {
        const active = code === locale
        return (
          <Link
            key={code}
            href={`/${code}${rest}`}
            hrefLang={code}
            lang={code}
            aria-current={active ? 'true' : undefined}
            aria-label={localeNames[code]}
            className={cn(
              'relative z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring',
              active
                ? tone === 'inverted'
                  ? 'text-forest'
                  : 'text-primary-foreground'
                : tone === 'inverted'
                  ? 'text-forest-foreground/70 hover:text-forest-foreground'
                  : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {active && (
              <motion.span
                layoutId={`lang-pill-${tone}`}
                className={cn('absolute inset-0 -z-10 rounded-full', tone === 'inverted' ? 'bg-forest-foreground' : 'bg-primary')}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            {code}
          </Link>
        )
      })}
    </nav>
  )
}
