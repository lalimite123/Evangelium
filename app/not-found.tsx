import { headers } from 'next/headers'
import { NotFoundShell, getNotFoundDictionary } from './_not-found-shared'
import {
  cookieName,
  defaultLocale,
  detectLangFromAccept,
  extractLocaleFromFirstSegment,
  parseCookies,
  type Locale,
} from '@/lib/i18n/config'

function detectFromRequest(): Locale {
  try {
    const h = headers()
    const pathnameCandidates = [
      h.get('x-next-pathname'),
      h.get('x-invoke-path'),
      h.get('x-matched-path'),
      h.get('next-url'),
      h.get('x-next-url'),
      h.get('x-next-rewrite-original-pathname'),
      h.get(':path'),
    ]
    for (const c of pathnameCandidates) {
      const p = extractLocaleFromFirstSegment(c)
      if (p) return p
    }
    const referer = h.get('referer') ?? null
    if (referer) {
      let rp: string | null = null
      try { rp = new URL(referer).pathname } catch { rp = referer }
      const fromRef = extractLocaleFromFirstSegment(rp)
      if (fromRef) return fromRef
    }
    const ck = parseCookies(h.get('cookie') ?? null)[cookieName]
    if (typeof ck === 'string') {
      const loc = ck.toLowerCase().slice(0, 2)
      if (loc === 'de' || loc === 'en' || loc === 'fr') return loc as Locale
    }
    const al = detectLangFromAccept(h.get('accept-language') ?? null)
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
