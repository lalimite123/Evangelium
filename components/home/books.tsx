import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BookCard } from '@/components/books/book-card'
import { Reveal, RevealGroup, RevealItem } from '@/components/reveal'
import { books } from '@/lib/content/books'
import { localePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'

export function Books({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="buecher" className="scroll-mt-24 bg-secondary/60 py-24 md:py-36">
      <div className="container-site flex flex-col gap-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {dict.books.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="text-display text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
              {dict.books.title}
            </Reveal>
            <Reveal delay={0.1} as="p" className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {dict.books.text}
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              href={localePath(locale, 'books')}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              {dict.books.viewAll}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12" stagger={0.12}>
          {books.map((book) => (
            <RevealItem key={book.slug}>
              <BookCard book={book} locale={locale} dict={dict} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
