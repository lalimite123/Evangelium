import Link from 'next/link'
import { ArrowRight, BookOpenText, GraduationCap, HeartHandshake } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import { localePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'

const icons = [BookOpenText, GraduationCap, HeartHandshake]

export function Intro({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="intro" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              {dict.intro.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
            {dict.intro.title}
          </Reveal>
          <Reveal delay={0.1} as="p" className="max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
            {dict.intro.text}
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href={localePath(locale, 'about')}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <span className="relative">
                {dict.intro.cta}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-primary transition-transform duration-500 ease-out-expo group-hover:scale-x-0" />
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:origin-left group-hover:scale-x-100" />
              </span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="flex flex-col divide-y divide-border lg:col-span-7 lg:pl-8" stagger={0.12}>
          {dict.intro.pillars.map((pillar, i) => {
            const Icon = icons[i] ?? BookOpenText
            return (
              <RevealItem key={pillar.title} as="article" className="group flex gap-6 py-8 first:pt-0 last:pb-0 md:gap-10">
                <span className="mt-1 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{pillar.title}</h3>
                  <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{pillar.text}</p>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
