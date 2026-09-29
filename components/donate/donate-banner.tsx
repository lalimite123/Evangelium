import { DonateButton } from '@/components/donate/donate-button'
import { Reveal } from '@/components/reveal'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'

export function DonateBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-6 md:py-10">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-forest px-8 py-10 text-forest-foreground md:px-14 md:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/20 blur-3xl md:size-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-primary/40 blur-3xl"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                {dict.donate.banner.eyebrow}
              </p>
              <h2 className="text-display text-balance text-3xl md:text-5xl">{dict.donate.banner.title}</h2>
              <p className="text-pretty leading-relaxed text-forest-foreground/75">{dict.donate.banner.text}</p>
            </div>
            <DonateButton locale={locale} label={dict.donate.cta} size="lg" className="shrink-0 self-start lg:self-center" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
