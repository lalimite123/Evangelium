import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { headers } from 'next/headers'
import { defaultLocale, isLocale, localePath, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

type Props = { params?: Promise<{ locale?: string }> }

const COOKIE_KEY = 'locale'
const VALID_LOCALE_RE = /^[a-z]{2}$/i

function parseCookieHeader(cookieHeader: string): Record<string, string> {
  const out: Record<string, string> = {}
  if (!cookieHeader) return out
  for (const part of cookieHeader.split(';')) {
    const eq = part.indexOf('=')
    if (eq === -1) continue
    const key = part.slice(0, eq).trim()
    const rawVal = part.slice(eq + 1).trim()
    let val = rawVal
    if (val.startsWith('"') && val.endsWith('"') && val.length >= 2) {
      val = val.slice(1, -1)
    }
    try {
      val = decodeURIComponent(val)
    } catch {
      // keep raw if decoding fails
    }
    if (key) out[key] = val
  }
  return out
}

function getCookieLocale(): Locale | null {
  try {
    const h = headers()
    const cookieHeader = h.get('cookie') ?? ''
    const cookies = parseCookieHeader(cookieHeader)
    const raw = cookies[COOKIE_KEY]
    if (!raw) return null
    if (!VALID_LOCALE_RE.test(raw)) return null
    const candidate = raw.toLowerCase()
    return isLocale(candidate) ? candidate : null
  } catch {
    return null
  }
}

function getPathnameLocale(): Locale | null {
  try {
    const h = headers()
    const nextPathname =
      h.get('x-next-pathname') ??
      h.get('x-invoke-path') ??
      h.get('x-matched-path') ??
      ''
    const first = nextPathname.split('/').filter(Boolean)[0]
    if (!first) return null
    const candidate = first.toLowerCase().slice(0, 2)
    return isLocale(candidate) ? candidate : null
  } catch {
    return null
  }
}

function getRefererLocale(): Locale | null {
  try {
    const h = headers()
    const referer = h.get('referer') ?? ''
    if (!referer) return null
    let refPath: string
    try {
      refPath = new URL(referer).pathname
    } catch {
      refPath = referer
    }
    const first = refPath.split('/').filter(Boolean)[0]
    if (!first) return null
    const candidate = first.toLowerCase().slice(0, 2)
    return isLocale(candidate) ? candidate : null
  } catch {
    return null
  }
}

function getAcceptLanguageLocale(): Locale | null {
  try {
    const h = headers()
    const accept = h.get('accept-language') ?? ''
    if (!accept) return null
    const tags = accept
      .split(',')
      .map((segment) => {
        const [tagPart, qPart] = segment.split(';') as [string, string | undefined]
        const tag = tagPart?.trim().toLowerCase()
        let q = 1
        if (qPart) {
          const qMatch = qPart.match(/q=([0-9.]+)/)
          if (qMatch && qMatch[1]) {
            const parsed = Number(qMatch[1])
            if (!Number.isNaN(parsed)) q = parsed
          }
        }
        return { tag, q }
      })
      .filter((entry): entry is { tag: string; q: number } => Boolean(entry.tag))
      .sort((a, b) => b.q - a.q)

    for (const { tag } of tags) {
      const base = tag.split('-')[0] ?? ''
      if (isLocale(base)) return base
    }
    return null
  } catch {
    return null
  }
}

function detectLocale(paramsLocale?: string): Locale {
  if (paramsLocale && VALID_LOCALE_RE.test(paramsLocale) && isLocale(paramsLocale.toLowerCase())) {
    return paramsLocale.toLowerCase() as Locale
  }
  return (
    getCookieLocale() ??
    getPathnameLocale() ??
    getRefererLocale() ??
    getAcceptLanguageLocale() ??
    defaultLocale
  )
}

export default async function NotFound({ params }: Props) {
  let paramsLocale: string | undefined
  try {
    const resolved = await params
    paramsLocale = resolved?.locale
  } catch {
    // swallow: detection falls back to headers / defaults
  }

  const locale = detectLocale(paramsLocale)
  const dict = await getDictionary(locale)

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){document.documentElement.lang="${locale}";document.documentElement.setAttribute("lang","${locale}");})();`,
        }}
      />
      <section lang={locale} className="flex min-h-[70vh] items-center bg-forest pt-24 text-forest-foreground">
        <div className="container-site flex flex-col items-start gap-6">
          <span className="font-mono text-sm text-accent">404</span>
          <h1 className="text-display text-5xl md:text-7xl">{dict.notFound.title}</h1>
          <p className="max-w-md text-forest-foreground/70">{dict.notFound.text}</p>
          <Link
            href={localePath(locale)}
            hrefLang={locale}
            className="group inline-flex items-center gap-2 rounded-full bg-forest-foreground px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-accent"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            {dict.common.backHome}
          </Link>
        </div>
      </section>
    </>
  )
}
