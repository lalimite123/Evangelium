import { ArrowRight } from 'lucide-react'
import { DonateButton } from '@/components/donate/donate-button'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { siteConfig } from '@/lib/site-config'

export function Join({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const subject = encodeURIComponent(dict.join.member.cta)

  return (
    <section id="mitmachen" className="scroll-mt-24 py-24 md:py-36">
      <div className="container-site flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              {dict.join.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05} as="h2" className="text-display max-w-3xl text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
            {dict.join.title}
          </Reveal>
        </div>

        <RevealGroup className="grid gap-6 lg:grid-cols-2" stagger={0.12}>
          <RevealItem as="article" className="flex flex-col justify-between gap-10 rounded-[2rem] bg-primary p-8 text-primary-foreground md:p-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl font-semibold tracking-tight">{dict.join.member.title}</h3>
              <p className="max-w-md text-pretty leading-relaxed text-primary-foreground/80">{dict.join.member.text}</p>
            </div>
            <a
              href={`mailto:${siteConfig.email}?subject=${subject}`}
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {dict.join.member.cta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </RevealItem>

          <RevealItem as="article" className="flex flex-col justify-between gap-10 rounded-[2rem] border border-border bg-card p-8 md:p-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground">{dict.join.give.title}</h3>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{dict.join.give.text}</p>
            </div>
            <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-[auto_1fr]">
              <dt className="eyebrow text-muted-foreground">{dict.join.give.holder}</dt>
              <dd className="font-medium text-foreground">{siteConfig.bank.holder}</dd>
              <dt className="eyebrow text-muted-foreground">{dict.join.give.iban}</dt>
              <dd className="font-mono tabular-nums text-foreground">{siteConfig.bank.iban}</dd>
              <dt className="eyebrow text-muted-foreground">{dict.join.give.bic}</dt>
              <dd className="font-mono text-foreground">{siteConfig.bank.bic}</dd>
              <dt className="eyebrow text-muted-foreground">{dict.join.give.bank}</dt>
              <dd className="text-foreground">{siteConfig.bank.bankName}</dd>
            </dl>
            <div className="flex flex-col gap-4">
              <DonateButton locale={locale} label={dict.donate.cta} className="w-fit" />
              <p className="text-xs leading-relaxed text-muted-foreground">{dict.join.give.note}</p>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
