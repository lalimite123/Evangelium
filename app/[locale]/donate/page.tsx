import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Landmark, Receipt } from 'lucide-react'
import { BankDetails } from '@/components/donate/bank-details'
import { PaypalDonate } from '@/components/donate/paypal-donate'
import { PageHero } from '@/components/page-hero'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { siteConfig } from '@/lib/site-config'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return { title: dict.donate.meta.title, description: dict.donate.meta.description }
}

export default async function DonatePage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)

  return (
    <>
      <PageHero eyebrow={dict.donate.eyebrow} title={dict.donate.title} intro={dict.donate.intro} image="/images/giving.png" />

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <Reveal as="article" className="flex flex-col gap-8 rounded-[2rem] border border-border bg-card p-8 md:p-10">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">{dict.donate.paypal.title}</h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">{dict.donate.paypal.text}</p>
            </div>
            <PaypalDonate dict={dict} />
          </Reveal>

          <Reveal delay={0.1} as="article" className="flex flex-col gap-8 rounded-[2rem] bg-secondary/70 p-8 md:p-10">
            <div className="flex flex-col gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Landmark className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">{dict.donate.bank.title}</h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">{dict.donate.bank.text}</p>
            </div>
            <BankDetails dict={dict} />
            <div className="flex gap-4 rounded-2xl border border-border bg-background p-5">
              <Receipt className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-foreground">{dict.donate.receipt.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{dict.donate.receipt.text}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-24 text-forest-foreground md:py-32">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                {dict.donate.impact.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="text-display max-w-3xl text-balance text-4xl md:text-5xl">
              {dict.donate.impact.title}
            </Reveal>
          </div>
          <RevealGroup className="grid gap-px overflow-hidden rounded-3xl border border-forest-foreground/10 bg-forest-foreground/10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {dict.donate.impact.items.map((item, i) => (
              <RevealItem key={item.title} as="article" className="flex flex-col gap-6 bg-forest p-8">
                <span className="font-mono text-sm tabular-nums text-accent">0{i + 1}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-forest-foreground/70">{item.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal as="p" className="max-w-2xl text-sm leading-relaxed text-forest-foreground/60">
            {dict.join.give.note} {siteConfig.name} · {siteConfig.register.court}, {siteConfig.register.number}.
          </Reveal>
        </div>
      </section>
    </>
  )
}
