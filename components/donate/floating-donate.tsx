'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Heart } from 'lucide-react'
import { localePath, routes, type Locale } from '@/lib/i18n/config'

type Props = { locale: Locale; label: string; shortLabel: string }

export function FloatingDonate({ locale, label, shortLabel }: Props) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setVisible(v > 600))

  const onDonatePage = pathname?.startsWith(`/${locale}${routes.donate}`)
  if (onDonatePage) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6"
        >
          <Link
            href={localePath(locale, 'donate')}
            className="group flex items-center gap-2.5 rounded-full bg-accent py-3 pr-5 pl-3 text-sm font-semibold text-accent-foreground shadow-[0_16px_40px_-12px_rgba(15,42,25,0.45)] transition-transform duration-300 hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="relative flex size-8 items-center justify-center rounded-full bg-forest text-accent">
              <Heart className="size-4" aria-hidden="true" />
              <span className="absolute inset-0 animate-ping rounded-full bg-forest/30 motion-reduce:hidden" aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{shortLabel}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
