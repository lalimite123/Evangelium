export type Locale = 'de' | 'en' | 'fr'

export const locales: Locale[] = ['de', 'en', 'fr']
export const defaultLocale: Locale = 'de'
export const cookieName = 'locale'

export const routes = {
  home: '/',
  about: '/about',
  books: '/books',
  contact: '/contact',
  donate: '/donate',
  statutes: '/statutes',
  imprint: '/imprint',
  privacy: '/privacy',
} as const

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale)
}

export const localeNames: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  fr: 'FR',
}

export function localePath(locale: Locale, ...segments: Array<string | null | undefined>): string {
  const cleanSegments: string[] = []
  for (const raw of segments) {
    if (raw == null) continue
    const str = String(raw)
    if (!str || str === routes.home) continue
    const part = str.replace(/^\/+|\/+$/g, '')
    if (!part) continue
    if (part.includes('#')) {
      const [before, hash] = part.split('#', 2)
      if (before) cleanSegments.push(before)
      cleanSegments.push('#' + hash)
      continue
    }
    cleanSegments.push(part)
  }
  let out = '/' + locale
  if (cleanSegments.length > 0) {
    const pathPart = cleanSegments.filter((s) => !s.startsWith('#')).join('/')
    const hashPart = cleanSegments.filter((s) => s.startsWith('#'))[0] ?? ''
    if (pathPart) out += '/' + pathPart
    if (hashPart) out += hashPart
  }
  return out
}

export function detectLangFromAccept(accept: string | undefined | null): Locale | null {
  if (!accept) return null
  const tags = accept
    .split(',')
    .map((segment) => {
      const [tagPart, qPart] = segment.split(';') as [string, string | undefined]
      const tag = (tagPart ?? '').trim().toLowerCase()
      let q = 1
      if (qPart) {
        const m = qPart.match(/q=([0-9.]+)/)
        if (m?.[1]) {
          const p = Number(m[1])
          if (!Number.isNaN(p)) q = p
        }
      }
      return { tag, q }
    })
    .filter((e) => Boolean(e.tag))
    .sort((a, b) => b.q - a.q)
  for (const { tag } of tags) {
    const base = tag.split('-')[0] ?? ''
    if (isLocale(base)) return base
  }
  return null
}

export function parseCookies(cookieHeader: string | undefined | null): Record<string, string> {
  const out: Record<string, string> = {}
  if (!cookieHeader) return out
  for (const raw of cookieHeader.split(';')) {
    const eq = raw.indexOf('=')
    if (eq === -1) continue
    const k = raw.slice(0, eq).trim()
    let v = raw.slice(eq + 1).trim()
    if (v.startsWith('"') && v.endsWith('"') && v.length >= 2) v = v.slice(1, -1)
    try { v = decodeURIComponent(v) } catch { /* noop */ }
    if (k) out[k] = v
  }
  return out
}

export function extractLocaleFromFirstSegment(path: string | undefined | null): Locale | null {
  if (!path) return null
  const first = path.split('/').filter(Boolean)[0]
  if (!first) return null
  const candidate = first.toLowerCase().slice(0, 2)
  return isLocale(candidate) ? candidate : null
}
