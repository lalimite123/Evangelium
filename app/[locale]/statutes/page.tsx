import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { StatutesBody } from '@/components/statutes-body'
import { isLocale, locales } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { satzung } from '@/lib/content/satzung'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  const canonical = `/${locale}/statutes`
  return {
    title: dict.statutes.meta.title,
    description: dict.statutes.meta.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/statutes`])),
    },
    openGraph: {
      title: dict.statutes.meta.title,
      description: dict.statutes.meta.description,
      url: canonical,
      locale,
      alternateLocale: locales.filter((l) => l !== locale),
      type: 'article',
      images: [{ url: '/images/emblem.png', width: 600, height: 600, alt: dict.statutes.meta.title }],
    },
    twitter: {
      card: 'summary',
      title: dict.statutes.meta.title,
      description: dict.statutes.meta.description,
      images: ['/images/emblem.png'],
    },
  }
}

export default async function StatutesPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)

  return (
    <>
      <PageHero eyebrow={dict.statutes.eyebrow} title={dict.statutes.title} intro={dict.statutes.intro} compact />
      <StatutesBody sections={satzung} dict={dict} />
    </>
  )
}
