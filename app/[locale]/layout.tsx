import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SmoothScroll } from '@/components/smooth-scroll'
import { FloatingDonate } from '@/components/donate/floating-donate'
import { CookieConsentBanner } from '@/components/cookie-consent-banner'
import { AnalyticsGate } from '@/components/analytics-gate'
import { isLocale, locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { siteConfig } from '@/lib/site-config'
import { readCookieHeaderSafe } from '@/lib/headers-safe'
import { readConsentFromRequest } from '@/lib/cookie-consent'

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  const canonical = `/${locale}`
  return {
    title: { default: dict.meta.title, template: `%s · ${siteConfig.name}` },
    description: dict.meta.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonical,
      locale,
      alternateLocale: locales.filter((l) => l !== locale),
      type: 'website',
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/hero-worship.png',
          width: 1600,
          height: 900,
          alt: dict.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/images/hero-worship.png'],
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale as Locale)

  let initialConsent: ReturnType<typeof readConsentFromRequest> = null
  try {
    const cookieHeader = readCookieHeaderSafe()
    initialConsent = readConsentFromRequest(cookieHeader)
  } catch {
    initialConsent = null
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/emblem.png`,
    description: dict.meta.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: 'DE',
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.youtube].filter(
      (u) => Boolean(u),
    ),
    foundingDate: siteConfig.founded,
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){document.documentElement.lang="${locale}";document.documentElement.setAttribute("lang","${locale}");})();`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll>
        <div lang={locale} className="flex min-h-dvh flex-col">
          <SiteHeader locale={locale} dict={dict} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter locale={locale} dict={dict} />
          <FloatingDonate locale={locale} label={dict.donate.cta} shortLabel={dict.donate.ctaShort} />
          <CookieConsentBanner locale={locale} dict={dict} initialState={initialConsent} />
          <AnalyticsGate initial={initialConsent} />
        </div>
      </SmoothScroll>
    </>
  )
}
