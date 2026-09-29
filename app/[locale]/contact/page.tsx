import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { DonateBanner } from '@/components/donate/donate-banner'
import { PageHero } from '@/components/page-hero'
import { ParallaxImage } from '@/components/parallax-image'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { siteConfig } from '@/lib/site-config'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return { title: dict.contact.meta.title, description: dict.contact.meta.description }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const { contact } = dict
  const mapsQuery = encodeURIComponent(`${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`)
  const service = dict.visit.times[0]

  return (
    <>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} intro={contact.intro} image="/images/hero-serve.png" />

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:col-span-7" stagger={0.1}>
            <RevealItem as="article" className="flex flex-col justify-between gap-8 rounded-3xl border border-border bg-card p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="eyebrow text-muted-foreground">{contact.cards.address}</h2>
                <address className="font-display text-xl font-semibold not-italic leading-snug tracking-tight text-foreground">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </address>
              </div>
            </RevealItem>

            <RevealItem as="article" className="flex flex-col justify-between gap-8 rounded-3xl border border-border bg-card p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                <Mail className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="eyebrow text-muted-foreground">{contact.cards.email}</h2>
                <a href={`mailto:${siteConfig.email}`} className="break-all font-display text-xl font-semibold tracking-tight text-foreground underline-offset-4 hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </RevealItem>

            <RevealItem as="article" className="flex flex-col justify-between gap-8 rounded-3xl border border-border bg-card p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                <Phone className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="eyebrow text-muted-foreground">{contact.cards.phone}</h2>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="font-display text-xl font-semibold tracking-tight text-foreground underline-offset-4 hover:underline">
                  {siteConfig.phone}
                </a>
              </div>
            </RevealItem>

            <RevealItem as="article" className="flex flex-col justify-between gap-8 rounded-3xl bg-forest p-7 text-forest-foreground">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-forest-foreground/10 text-accent">
                <Clock className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="eyebrow text-forest-foreground/60">{contact.cards.times}</h2>
                <p className="font-display text-xl font-semibold tracking-tight">
                  {service.day} · <span className="font-mono text-accent">{service.time}</span>
                </p>
                <p className="text-xs text-forest-foreground/60">{dict.visit.timesNote}</p>
              </div>
            </RevealItem>
          </RevealGroup>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal>
              <ParallaxImage src="/images/dortmund.png" alt="Dortmund" distance={40} className="aspect-[4/3] rounded-3xl" sizes="(max-width: 1024px) 100vw, 40vw" />
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-4 rounded-3xl bg-secondary p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">{contact.arrival.title}</h2>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{contact.arrival.text}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-forest"
                >
                  {dict.visit.directions}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary"
                >
                  {contact.writeUs}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <DonateBanner locale={locale} dict={dict} />
      <div className="h-12 md:h-20" />
    </>
  )
}
