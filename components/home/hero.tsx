'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'
import { localePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils'

const IMAGES = ['/images/hero-worship.png', '/images/hero-bible.png', '/images/hero-serve.png']
const EASE = [0.16, 1, 0.3, 1] as const
const AUTOPLAY_MS = 7000

type Props = { locale: Locale; dict: Dictionary }

export function Hero({ locale, dict }: Props) {
  const slides = dict.hero.slides
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '28%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '60%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir)
      setIndex((next + slides.length) % slides.length)
    },
    [slides.length],
  )

  useEffect(() => {
    if (paused || reduce) return
    const t = setInterval(() => go(index + 1, 1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [index, paused, reduce, go])

  const slide = slides[index]

  return (
    <section
      ref={ref}
      aria-roledescription="carousel"
      aria-label="Hero"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-forest"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Background images with crossfade + parallax */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 will-change-transform">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: EASE }}
            className="absolute inset-0"
          >
            <Image src={IMAGES[index % IMAGES.length]} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/45 to-forest/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/30" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-site relative flex h-full flex-col justify-end pb-24 pt-32 md:justify-center md:pb-32">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={index} className="flex flex-col items-start gap-6">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                className="flex items-center gap-3 text-forest-foreground/80"
              >
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                <span className="eyebrow">{slide.eyebrow}</span>
              </motion.p>

              <h1 className="text-display text-forest-foreground text-[clamp(2.75rem,9vw,7.5rem)]">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-110%', transition: { duration: 0.5, ease: EASE } }}
                    transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                    className="block font-medium"
                  >
                    {slide.titleTop}
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-110%', transition: { duration: 0.5, ease: EASE, delay: 0.05 } }}
                    transition={{ duration: 1, ease: EASE, delay: 0.25 }}
                    className="block"
                  >
                    {slide.titleBottom}
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
                className="max-w-xl border-l border-forest-foreground/30 pl-5 text-pretty text-base leading-relaxed text-forest-foreground/80 md:text-lg"
              >
                {slide.text}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <Link
                  href={localePath(locale, slide.primary.route, slide.primary.hash)}
                  className="group inline-flex items-center gap-2 rounded-full bg-forest-foreground px-6 py-3.5 text-sm font-semibold text-forest transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                >
                  {slide.primary.label}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  href={localePath(locale, slide.secondary.route, slide.secondary.hash)}
                  className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/35 px-6 py-3.5 text-sm font-semibold text-forest-foreground transition-colors duration-300 hover:border-forest-foreground hover:bg-forest-foreground/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                >
                  {slide.secondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bottom bar: controls + progress */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-site flex items-end justify-between pb-6 md:pb-8">
          <a
            href="#intro"
            className="group hidden items-center gap-3 text-forest-foreground/70 transition-colors hover:text-forest-foreground md:inline-flex"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-forest-foreground/30 transition-colors group-hover:border-forest-foreground">
              <ArrowDown className="size-4 animate-bounce [animation-duration:2.2s]" aria-hidden="true" />
            </span>
            <span className="eyebrow">{dict.common.scroll}</span>
          </a>

          <div className="flex w-full items-center justify-between gap-6 md:w-auto md:justify-end">
            <div className="flex items-center gap-2" role="tablist" aria-label={dict.hero.goTo}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${dict.hero.goTo} ${i + 1}`}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className="group relative h-8 w-12 outline-none"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-forest-foreground/30 group-focus-visible:bg-accent" />
                  {i === index && (
                    <motion.span
                      key={`progress-${index}-${paused}`}
                      initial={{ scaleX: paused || reduce ? 1 : 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: paused || reduce ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
                      className="absolute inset-x-0 top-1/2 h-px origin-left -translate-y-1/2 bg-accent"
                    />
                  )}
                </button>
              ))}
              <span className="ml-2 font-mono text-xs tabular-nums text-forest-foreground/70">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1, -1)}
                aria-label={dict.hero.prev}
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border border-forest-foreground/30 text-forest-foreground transition-all duration-300',
                  'hover:border-forest-foreground hover:bg-forest-foreground hover:text-forest focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none',
                )}
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1, 1)}
                aria-label={dict.hero.next}
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border border-forest-foreground/30 text-forest-foreground transition-all duration-300',
                  'hover:border-forest-foreground hover:bg-forest-foreground hover:text-forest focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none',
                )}
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
