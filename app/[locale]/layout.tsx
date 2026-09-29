import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SmoothScroll } from '@/components/smooth-scroll'
import { FloatingDonate } from '@/components/donate/floating-donate'
import { isLocale, locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { siteConfig } from '@/lib/site-config'

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: { default: dict.meta.title, template: '%s' },
    description: dict.meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale,
      type: 'website',
      siteName: siteConfig.name,
      images: [{ url: '/images/hero-worship.png', width: 1600, height: 900 }],
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale as Locale)

  return (
    <SmoothScroll>
      <div lang={locale} className="flex min-h-dvh flex-col">
        <SiteHeader locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} dict={dict} />
        <FloatingDonate locale={locale} label={dict.donate.cta} shortLabel={dict.donate.ctaShort} />
      </div>
    </SmoothScroll>
  )
}
