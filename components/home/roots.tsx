import Link from 'next/link'
import { ArrowRight, Globe2, MapPin } from 'lucide-react'
import { ParallaxImage } from '@/components/parallax-image'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import { localePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'

export function Roots({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-24 md:py-36">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:order-2">
          <Reveal>
            <ParallaxImage src="/images/dortmund.png" alt="Dortmund" distance={60} className="aspect-[4/5] rounded-[2rem] md:aspect-[5/6]" sizes="(max-width: 1024px) 100vw, 50vw" />
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-6 lg:order-1 lg:pr-12">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {dict.roots.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
              {dict.roots.title}
            </Reveal>
            <Reveal delay={0.1} as="p" className="max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {dict.roots.text}
            </Reveal>
          </div>

          <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.12}>
            {[
              { ...dict.roots.cardDortmund, Icon: MapPin },
              { ...dict.roots.cardMission, Icon: Globe2 },
            ].map(({ label, title, text, Icon }) => (
              <RevealItem key={title} as="article" className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="eyebrow text-muted-foreground">{label}</span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <Link
              href={localePath(locale, 'contact')}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-forest"
            >
              {dict.roots.cta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
