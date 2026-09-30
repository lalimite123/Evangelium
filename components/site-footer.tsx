import Link from 'next/link'
import Image from 'next/image'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/social-icons'
import { LanguageSwitcher } from '@/components/language-switcher'
import { DonateButton } from '@/components/donate/donate-button'
import { OpenCookieSettings } from '@/components/open-cookie-settings'
import { localePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { siteConfig } from '@/lib/site-config'

type Props = { locale: Locale; dict: Dictionary }

export function SiteFooter({ locale, dict }: Props) {
  const year = new Date().getFullYear()
  const nav = [
    { label: dict.nav.home, href: localePath(locale) },
    { label: dict.nav.about, href: localePath(locale, 'about') },
    { label: dict.nav.ministries, href: localePath(locale, 'home', 'arbeit') },
    { label: dict.nav.books, href: localePath(locale, 'books') },
    { label: dict.footer.donate, href: localePath(locale, 'donate') },
    { label: dict.nav.contact, href: localePath(locale, 'contact') },
  ]
  const legal = [
    { label: dict.footer.statutes, href: localePath(locale, 'statutes') },
    { label: dict.footer.imprint, href: localePath(locale, 'imprint') },
    { label: dict.footer.privacy, href: localePath(locale, 'privacy') },
  ]
  const socials = [
    { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
    { label: 'YouTube', href: siteConfig.social.youtube, Icon: YoutubeIcon },
    { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
  ]

  return (
    <footer className="relative overflow-hidden bg-forest text-forest-foreground">
      <div className="container-site relative">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="flex items-center gap-4">
              <span className="relative size-14 overflow-hidden rounded-full ring-1 ring-forest-foreground/15">
                <Image src="/images/emblem.png" alt="" fill sizes="56px" className="object-cover" />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold tracking-tight">Das Evangelium e.V.</span>
                <span className="text-xs uppercase tracking-[0.22em] text-forest-foreground/60">Dortmund</span>
              </div>
            </div>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-forest-foreground/70">{dict.footer.tagline}</p>
            <DonateButton locale={locale} label={dict.donate.cta} className="w-fit" />
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-forest-foreground/15 text-forest-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
            <div className="flex flex-col gap-4">
              <h3 className="eyebrow text-forest-foreground/50">{dict.footer.navigation}</h3>
              <ul className="flex flex-col gap-2.5">
                {nav.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-forest-foreground/85 transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="eyebrow text-forest-foreground/50">{dict.footer.legal}</h3>
              <ul className="flex flex-col gap-2.5">
                {legal.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-forest-foreground/85 transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="eyebrow text-forest-foreground/50">{dict.footer.contact}</h3>
              <address className="flex flex-col gap-2.5 text-sm not-italic text-forest-foreground/85">
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-accent">
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-accent">
                  {siteConfig.phone}
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-forest-foreground/10 py-6 text-xs text-forest-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. {dict.footer.rights} · {dict.footer.register}.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <OpenCookieSettings
              label={dict.footer.cookieSettings}
              className="text-xs text-forest-foreground/60 transition-colors hover:text-accent"
            />
            <LanguageSwitcher locale={locale} label={dict.footer.language} tone="inverted" />
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-0 w-full select-none overflow-hidden whitespace-nowrap px-4 text-display text-[18vw] leading-none text-forest-foreground/[0.035] md:-bottom-10"
      >
        Das Evangelium
      </p>
    </footer>
  )
}
