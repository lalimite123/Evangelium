import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BookCard, BookCover } from '@/components/books/book-card'
import { DonateBanner } from '@/components/donate/donate-banner'
import { PageHero } from '@/components/page-hero'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import { books } from '@/lib/content/books'
import { isLocale, locales } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  const canonical = `/${locale}/books`
  return {
    title: dict.books.meta.title,
    description: dict.books.meta.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/books`])),
    },
    openGraph: {
      title: dict.books.meta.title,
      description: dict.books.meta.description,
      url: canonical,
      locale,
      alternateLocale: locales.filter((l) => l !== locale),
      type: 'website',
      images: [{ url: '/images/books/cover-1.png', width: 1200, height: 1600, alt: dict.books.meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.books.meta.title,
      description: dict.books.meta.description,
      images: ['/images/books/cover-1.png'],
    },
  }
}

export default async function BooksPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const [featured, ...rest] = books

  return (
    <>
      <PageHero eyebrow={dict.books.pageEyebrow} title={dict.books.pageTitle} intro={dict.books.pageIntro} compact />

      {/* Featured title */}
      <section className="py-20 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="group mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none">
            <BookCover book={featured} locale={locale} priority />
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <BookCard book={featured} locale={locale} dict={dict} detailed hideCover />
          </div>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="bg-secondary/60 py-20 md:py-28">
          <div className="container-site flex flex-col gap-12">
            <RevealGroup className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
              {rest.map((book) => (
                <RevealItem key={book.slug}>
                  <BookCard book={book} locale={locale} dict={dict} detailed />
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal as="p" className="text-sm text-muted-foreground">
              {dict.books.shippingNote}
            </Reveal>
          </div>
        </section>
      )}

      <DonateBanner locale={locale} dict={dict} />
      <div className="h-12 md:h-20" />
    </>
  )
}
