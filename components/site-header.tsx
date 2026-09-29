'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowUpRight, Heart, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { LanguageSwitcher } from '@/components/language-switcher'
import { localePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils'

type Props = { locale: Locale; dict: Dictionary }

export function SiteHeader({ locale, dict }: Props) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.documentElement.classList.add('overflow-hidden')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [open])

  const links = [
    { label: dict.nav.home, href: localePath(locale) },
    { label: dict.nav.about, href: localePath(locale, 'about') },
    { label: dict.nav.ministries, href: localePath(locale, 'home', 'arbeit') },
    { label: dict.nav.books, href: localePath(locale, 'books') },
    { label: dict.nav.statutes, href: localePath(locale, 'statutes') },
    { label: dict.nav.contact, href: localePath(locale, 'contact') },
  ]
  const donateHref = localePath(locale, 'donate')

  // Pages whose top section is dark (full-bleed hero or forest-coloured page header)
  // get light header text until the user scrolls; all other pages start with dark text.
  const segment = pathname?.split('/')[2] ?? ''
  const darkTop = ['', 'statutes', 'imprint', 'privacy'].includes(segment)
  const inverted = darkTop && !scrolled && !open
  const solid = scrolled || open

  const isActive = (href: string) => {
    const clean = href.split('#')[0]
    if (clean === `/${locale}`) return pathname === clean && !href.includes('#')
    return pathname?.startsWith(clean)
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {dict.common.skipToContent}
      </a>

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <div
          className={cn(
            'container-site flex h-16 items-center justify-between rounded-full border transition-all duration-500 ease-out-expo',
            solid
              ? 'border-border/80 bg-background/85 shadow-[0_8px_30px_-12px_rgba(15,42,25,0.25)] backdrop-blur-xl'
              : 'border-transparent bg-transparent',
          )}
        >
          <Logo locale={locale} size="sm" tone={inverted ? 'inverted' : 'default'} />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  inverted ? 'text-forest-foreground/85 hover:text-forest-foreground' : 'text-foreground/80 hover:text-foreground',
                  isActive(link.href) && 'font-semibold',
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className={cn('absolute inset-x-4 -bottom-0.5 h-px rounded-full', inverted ? 'bg-accent' : 'bg-primary')} />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} label={dict.common.languageLabel} tone={inverted ? 'inverted' : 'default'} className="hidden sm:flex" />
            <Link
              href={donateHref}
              className={cn(
                'group hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex',
                inverted ? 'hover:bg-forest-foreground hover:text-forest' : 'hover:bg-primary hover:text-primary-foreground',
              )}
            >
              <Heart className="size-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              {dict.donate.ctaShort}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dict.nav.close : dict.nav.menu}
              className={cn(
                'inline-flex size-10 items-center justify-center rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden',
                inverted ? 'bg-forest-foreground/15 text-forest-foreground' : 'bg-secondary text-foreground',
              )}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden"
            data-lenis-prevent
          >
            <div className="container-site flex h-full flex-col justify-between pt-28 pb-10">
              <nav aria-label="Mobile" className="flex flex-col">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center justify-between border-b border-border py-5 text-display text-3xl',
                        isActive(link.href) ? 'text-primary' : 'text-foreground',
                      )}
                    >
                      {link.label}
                      <ArrowUpRight className="size-6 text-muted-foreground" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <LanguageSwitcher locale={locale} label={dict.common.languageLabel} className="self-start" />
                <Link
                  href={donateHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-foreground"
                >
                  <Heart className="size-5" aria-hidden="true" />
                  {dict.donate.cta}
                </Link>
                <Link
                  href={localePath(locale, 'contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-base font-semibold text-foreground"
                >
                  {dict.nav.cta}
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
