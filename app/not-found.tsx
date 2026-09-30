import { NotFoundShell, getNotFoundDictionary } from './_not-found-shared'
import {
  cookieName,
  defaultLocale,
  detectLangFromAccept,
  extractLocaleFromFirstSegment,
  parseCookies,
  type Locale,
} from '@/lib/i18n/config'
import { readHeaderSafe, readHeadersSafe } from '@/lib/headers-safe'

function detectFromRequest(): Locale {
  try {
    const all = readHeadersSafe()
    const pathnameKeys = [
      'x-next-pathname',
      'x-invoke-path',
      'x-matched-path',
      'next-url',
      'x-next-url',
      'x-next-rewrite-original-pathname',
      ':path',
    ]
    for (const k of pathnameKeys) {
      const p = extractLocaleFromFirstSegment(all[k])
      if (p) return p
    }
    const referer = all['referer'] ?? null
    if (referer) {
      let rp: string | null = null
      try { rp = new URL(referer).pathname } catch { rp = referer }
      const fromRef = extractLocaleFromFirstSegment(rp)
      if (fromRef) return fromRef
    }
    const ck = parseCookies(all['cookie'] ?? null)[cookieName]
    if (typeof ck === 'string') {
      const loc = ck.toLowerCase().slice(0, 2)
      if (loc === 'de' || loc === 'en' || loc === 'fr') return loc as Locale
    }
    const acceptLang = readHeaderSafe('accept-language')
    const al = detectLangFromAccept(acceptLang)
    if (al) return al
  } catch {
    // fall through
  }
  return defaultLocale
}

export default async function NotFound() {
  const locale = detectFromRequest()
  const payload = await getNotFoundDictionary(locale)
  return <NotFoundShell {...payload} />
}
