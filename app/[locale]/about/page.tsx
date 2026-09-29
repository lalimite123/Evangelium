import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, BookOpenText, GraduationCap, HeartHandshake, Users } from 'lucide-react'
import { DonateButton } from '@/components/donate/donate-button'
import { PageHero } from '@/components/page-hero'
import { ParallaxImage } from '@/components/parallax-image'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import { isLocale, locales, localePath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  const canonical = `/${locale}/about`
  return {
    title: dict.about.meta.title,
    description: dict.about.meta.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/about`])),
    },
    openGraph: {
      title: dict.about.meta.title,
      description: dict.about.meta.description,
      url: canonical,
      locale,
      alternateLocale: locales.filter((l) => l !== locale),
      type: 'article',
      images: [{ url: '/images/hero-bible.png', width: 1600, height: 900, alt: dict.about.meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.about.meta.title,
      description: dict.about.meta.description,
      images: ['/images/hero-bible.png'],
    },
  }
}

const purposeIcons = [BookOpenText, GraduationCap, HeartHandshake]

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const { about } = dict

  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} intro={about.intro} image="/images/hero-worship.png" />

      {/* Foundation */}
      <section className="py-24 md:py-36">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage src="/images/hero-bible.png" alt="" distance={50} className="aspect-[4/5] rounded-[2rem]" sizes="(max-width: 1024px) 100vw, 40vw" />
            </Reveal>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {about.foundation.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl text-foreground md:text-5xl">
              {about.foundation.title}
            </Reveal>
            <Reveal delay={0.1} as="p" className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {about.foundation.text}
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="border-l-2 border-accent pl-6 font-display text-xl font-medium leading-snug text-foreground md:text-2xl">
                {dict.verse.text}
                <footer className="eyebrow mt-3 text-muted-foreground">{dict.verse.reference}</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Purposes */}
      <section className="bg-secondary/60 py-24 md:py-36">
        <div className="container-site flex flex-col gap-14">
          <div className="flex max-w-2xl flex-col gap-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {about.purposes.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl text-foreground md:text-5xl">
              {about.purposes.title}
            </Reveal>
            <Reveal delay={0.1} as="p" className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {about.purposes.text}
            </Reveal>
          </div>
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.12}>
            {about.purposes.items.map((item, i) => {
              const Icon = purposeIcons[i] ?? BookOpenText
              return (
                <RevealItem key={item.title} as="article" className="group flex flex-col gap-6 rounded-3xl bg-card p-8 ring-1 ring-border transition-shadow duration-500 hover:shadow-[0_20px_50px_-30px_rgba(15,42,25,0.35)]">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Organs */}
      <section className="py-24 md:py-36">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {about.organs.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl text-foreground md:text-5xl">
              {about.organs.title}
            </Reveal>
            <Reveal delay={0.1} as="p" className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {about.organs.text}
            </Reveal>
          </div>
          <div className="grid gap-6 lg:col-span-8 md:grid-cols-2">
            <RevealGroup className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-8" stagger={0.08}>
              <RevealItem className="flex items-center gap-3">
                <Users className="size-4 text-primary" aria-hidden="true" />
                <h3 className="eyebrow text-muted-foreground">{about.organs.boardTitle}</h3>
              </RevealItem>
              <ul className="flex flex-col divide-y divide-border">
                {about.organs.board.map((m) => (
                  <RevealItem key={m.role} as="li" className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                    <span className="font-display text-lg font-semibold tracking-tight text-foreground">{m.role}</span>
                    <span className="text-sm text-muted-foreground">{m.text}</span>
                  </RevealItem>
                ))}
              </ul>
            </RevealGroup>
            <Reveal delay={0.1} className="flex flex-col justify-between gap-8 rounded-3xl bg-forest p-8 text-forest-foreground">
              <div className="flex flex-col gap-4">
                <h3 className="eyebrow text-forest-foreground/60">{about.organs.assemblyTitle}</h3>
                <p className="text-pretty leading-relaxed text-forest-foreground/85">{about.organs.assemblyText}</p>
              </div>
              <Link href={localePath(locale, 'statutes', 'p5')} className="group inline-flex items-center gap-2 text-sm font-semibold text-accent">
                § 5
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-secondary/60 py-24 md:py-36">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {about.history.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl text-foreground md:text-5xl">
              {about.history.title}
            </Reveal>
          </div>
          <RevealGroup className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3" stagger={0.12}>
            {about.history.items.map((item) => (
              <RevealItem key={item.title} as="article" className="flex flex-col gap-6 bg-card p-8">
                <span className="font-mono text-sm tabular-nums text-primary">{item.date}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <Reveal className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-primary p-10 text-primary-foreground md:flex-row md:items-center md:p-14">
            <div className="flex flex-col gap-3">
              <h2 className="text-display text-3xl md:text-4xl">{about.cta.title}</h2>
              <p className="max-w-lg text-pretty text-primary-foreground/80">{about.cta.text}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href={localePath(locale, 'statutes')}
                className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-forest hover:text-forest-foreground"
              >
                {about.cta.label}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <DonateButton locale={locale} label={dict.donate.cta} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
