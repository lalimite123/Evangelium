import { ArrowUpRight, Clock, MapPin } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import type { Dictionary } from '@/lib/i18n/types'
import { siteConfig } from '@/lib/site-config'

export function Visit({ dict }: { dict: Dictionary }) {
  const mapsQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
  )

  return (
    <section id="besuch" className="scroll-mt-24 bg-forest py-24 text-forest-foreground md:py-36">
      <div className="container-site grid gap-14 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {dict.visit.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl md:text-5xl lg:text-6xl">
            {dict.visit.title}
          </Reveal>
          <Reveal delay={0.1} as="p" className="max-w-md text-pretty leading-relaxed text-forest-foreground/70 md:text-lg">
            {dict.visit.text}
          </Reveal>
        </div>

        <div className="grid gap-6 lg:col-span-7 md:grid-cols-5">
          <RevealGroup className="flex flex-col rounded-3xl border border-forest-foreground/10 bg-forest-foreground/[0.04] p-7 md:col-span-3 md:p-8" stagger={0.1}>
            <RevealItem className="mb-6 flex items-center gap-3">
              <Clock className="size-4 text-accent" aria-hidden="true" />
              <h3 className="eyebrow text-forest-foreground/60">{dict.visit.timesTitle}</h3>
            </RevealItem>
            <ul className="flex flex-col divide-y divide-forest-foreground/10">
              {dict.visit.times.map((t) => (
                <RevealItem key={t.label} as="li" className="flex items-baseline justify-between gap-4 py-4">
                  <div className="flex flex-col">
                    <span className="font-display text-xl font-semibold tracking-tight">{t.label}</span>
                    <span className="text-sm text-forest-foreground/60">{t.day}</span>
                  </div>
                  <span className="font-mono text-base tabular-nums text-accent">{t.time}</span>
                </RevealItem>
              ))}
            </ul>
            <RevealItem className="mt-6 text-xs text-forest-foreground/50">{dict.visit.timesNote}</RevealItem>
          </RevealGroup>

          <Reveal delay={0.15} className="md:col-span-2">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-full flex-col justify-between gap-8 rounded-3xl bg-forest-foreground p-7 text-forest transition-colors duration-500 hover:bg-accent md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-forest/10">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="eyebrow text-forest/60">{dict.visit.addressTitle}</h3>
                <address className="font-display text-xl font-semibold not-italic leading-snug tracking-tight">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </address>
                <span className="text-sm font-semibold underline-offset-4 group-hover:underline">{dict.visit.directions}</span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
