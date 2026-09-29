'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils'

export function Ministries({ dict }: { dict: Dictionary }) {
  const scroller = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    const el = scroller.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [update])

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('li')
    const step = (card?.offsetWidth ?? 320) + 24
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="arbeit" className="scroll-mt-24 bg-secondary/60 py-24 md:py-36">
      <div className="container-site flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {dict.ministries.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
              {dict.ministries.title}
            </Reveal>
            <Reveal delay={0.1} as="p" className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {dict.ministries.text}
            </Reveal>
          </div>
          <Reveal delay={0.15} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label={dict.ministries.prev}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-card disabled:hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label={dict.ministries.next}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-card disabled:hover:text-foreground"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </Reveal>
        </div>
      </div>

      <ul
        ref={scroller}
        className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 sm:px-6 lg:px-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]"
        data-lenis-prevent
      >
        {dict.ministries.items.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: Math.min(i, 3) * 0.08 }}
            className="group relative w-[78vw] max-w-[380px] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw]"
          >
            <article className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-forest text-forest-foreground">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 30vw"
                className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-transparent transition-opacity duration-500 group-hover:from-forest/95" />
              <div className="relative flex flex-col gap-3 p-6 md:p-7">
                <span className="font-mono text-xs tabular-nums text-forest-foreground/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p
                  className={cn(
                    'max-h-0 overflow-hidden text-sm leading-relaxed text-forest-foreground/80 opacity-0 transition-all duration-500 ease-out-expo',
                    'group-hover:max-h-40 group-hover:opacity-100 group-focus-within:max-h-40 group-focus-within:opacity-100',
                  )}
                >
                  {item.text}
                </p>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
