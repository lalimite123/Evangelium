import { notFound } from 'next/navigation'
import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { Ministries } from '@/components/home/ministries'
import { Verse } from '@/components/home/verse'
import { Roots } from '@/components/home/roots'
import { Visit } from '@/components/home/visit'
import { Join } from '@/components/home/join'
import { Books } from '@/components/home/books'
import { DonateBanner } from '@/components/donate/donate-banner'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Intro locale={locale} dict={dict} />
      <Ministries dict={dict} />
      <DonateBanner locale={locale} dict={dict} />
      <Verse dict={dict} />
      <Roots locale={locale} dict={dict} />
      <Books locale={locale} dict={dict} />
      <Visit dict={dict} />
      <Join locale={locale} dict={dict} />
    </>
  )
}
