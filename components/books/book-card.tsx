import Image from 'next/image'
import { ArrowUpRight, Mail, ShoppingBag } from 'lucide-react'
import { formatPrice, type Book } from '@/lib/content/books'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

type Props = { book: Book; locale: Locale; dict: Dictionary; detailed?: boolean; hideCover?: boolean }

export function BookCover({ book, locale, className, priority }: { book: Book; locale: Locale; className?: string; priority?: boolean }) {
  const dark = book.coverTone === 'dark'
  return (
    <div
      className={cn(
        'group/cover relative aspect-[2/3] w-full overflow-hidden rounded-r-2xl rounded-l-md shadow-[0_30px_60px_-30px_rgba(15,42,25,0.55)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 group-hover:rotate-[-1deg]',
        className,
      )}
    >
      <Image
        src={book.cover}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 80vw"
        className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
      />
      {/* Spine highlight */}
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
      <div className={cn('absolute inset-0 flex flex-col justify-between p-6', dark ? 'text-white' : 'text-forest')}>
        <span className={cn('eyebrow', dark ? 'text-white/70' : 'text-forest/60')}>{book.author}</span>
        <div className="flex flex-col gap-2">
          <span className="font-display text-2xl leading-[1.05] font-semibold tracking-tight text-balance md:text-3xl">{book.title[locale]}</span>
          <span className={cn('text-xs leading-snug', dark ? 'text-white/75' : 'text-forest/70')}>{book.subtitle[locale]}</span>
        </div>
      </div>
    </div>
  )
}

export function BookCard({ book, locale, dict, detailed, hideCover }: Props) {
  const available = book.price !== null
  const orderHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`${dict.books.orderSubject}: ${book.title[locale]}`)}`

  return (
    <article className="group flex flex-col gap-6">
      {!hideCover && <BookCover book={book} locale={locale} />}
      <div className={cn('flex flex-col gap-4', hideCover && 'gap-6')}>
        <div className="flex flex-col gap-1.5">
          {hideCover && <p className="eyebrow text-primary">{dict.books.featured}</p>}
          <h3 className={cn('font-display font-semibold tracking-tight text-foreground', hideCover ? 'text-display text-4xl md:text-5xl' : 'text-xl')}>
            {book.title[locale]}
          </h3>
          <p className="text-sm text-muted-foreground">
            {dict.books.by} <span className="font-medium text-foreground">{book.author}</span> · {book.authorRole[locale]}
          </p>
        </div>
        <p className={cn('text-pretty text-sm leading-relaxed text-muted-foreground', !detailed && 'line-clamp-3')}>{book.description[locale]}</p>

        {detailed && (
          <dl className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <div className="flex gap-1.5">
              <dt className="sr-only">{dict.books.year}</dt>
              <dd className="tabular-nums">{book.year}</dd>
            </div>
            <div className="flex gap-1.5">
              <dd className="tabular-nums">{book.pages}</dd>
              <dt>{dict.books.pages}</dt>
            </div>
            <div className="flex gap-1.5">
              <dt className="sr-only">{dict.books.language}</dt>
              <dd>{book.language[locale]}</dd>
            </div>
          </dl>
        )}

        <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
          {available ? (
            <span className="font-display text-2xl font-semibold tabular-nums text-foreground">{formatPrice(book.price as number, locale)}</span>
          ) : (
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{dict.books.soon}</span>
          )}

          {available &&
            (book.purchaseUrl ? (
              <a
                href={book.purchaseUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-forest outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ShoppingBag className="size-4" aria-hidden="true" />
                {dict.books.buy}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
              </a>
            ) : (
              <a
                href={orderHref}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="size-4" aria-hidden="true" />
                {dict.books.order}
              </a>
            ))}
        </div>
      </div>
    </article>
  )
}
