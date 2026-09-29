import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { defaultLocale, localePath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

export default async function NotFound() {
  const dict = await getDictionary(defaultLocale)
  return (
    <section className="flex min-h-[70vh] items-center bg-forest pt-24 text-forest-foreground">
      <div className="container-site flex flex-col items-start gap-6">
        <span className="font-mono text-sm text-accent">404</span>
        <h1 className="text-display text-5xl md:text-7xl">{dict.notFound.title}</h1>
        <p className="max-w-md text-forest-foreground/70">{dict.notFound.text}</p>
        <Link
          href={localePath(defaultLocale)}
          className="group inline-flex items-center gap-2 rounded-full bg-forest-foreground px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-accent"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          {dict.common.backHome}
        </Link>
      </div>
    </section>
  )
}
