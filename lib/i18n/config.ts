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
  const pathSegments: string[] = []
  let hash: string | null = null
  for (const raw of segments) {
    if (raw == null) continue
    let str = String(raw)
    if (!str || str === routes.home) continue
    if (str === 'home') continue
    // strip leading/trailing slashes per chunk
    str = str.replace(/^\/+|\/+$/g, '')
    if (!str) continue
    // split embedded hash off e.g. "books#top" -> "books" + "#top"
    const hashPos = str.indexOf('#')
    if (hashPos !== -1) {
      const before = str.slice(0, hashPos)
      const h = str.slice(hashPos)
      if (before) {
        for (const p of before.split('/')) if (p) pathSegments.push(p)
      }
      hash = h.startsWith('#') ? h : '#' + h
      continue
    }
    if (str.startsWith('#')) {
      hash = str
      continue
    }
    for (const p of str.split('/')) if (p) pathSegments.push(p)
  }
  let out = '/' + locale
  if (pathSegments.length > 0) out += '/' + pathSegments.join('/')
  if (hash) out += hash
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
