export const CONSENT_COOKIE_NAME = 'cookie_consent'
export const CONSENT_LOCALSTORAGE_KEY = 'cookie_consent_state'
export const CONSENT_VERSION = 1
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365 // 12 Monate

export type CookieCategory = 'necessary' | 'statistics' | 'marketing'

export type ConsentState = {
  version: number
  timestamp: string
  categories: Record<CookieCategory, boolean>
  userAgent?: string
  referer?: string
}

export const DEFAULT_CONSENT: Readonly<ConsentState> = {
  version: CONSENT_VERSION,
  timestamp: new Date(0).toISOString(),
  categories: {
    necessary: true,
    statistics: false,
    marketing: false,
  },
} satisfies Readonly<ConsentState>

export const ALL_ACCEPTED_CONSENT: Readonly<Omit<ConsentState, 'timestamp'>> = {
  version: CONSENT_VERSION,
  categories: {
    necessary: true,
    statistics: true,
    marketing: true,
  },
}

export const ONLY_NECESSARY_CONSENT: Readonly<Omit<ConsentState, 'timestamp'>> = {
  version: CONSENT_VERSION,
  categories: {
    necessary: true,
    statistics: false,
    marketing: false,
  },
}

export type WithTimestamp<T> = T & { timestamp: string }

function sanitizeConsent(raw: unknown): ConsentState | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Partial<ConsentState>
  if (r.version !== CONSENT_VERSION) return null
  if (!r.categories || typeof r.categories !== 'object') return null
  const cats = r.categories as Partial<Record<CookieCategory, boolean>>
  return {
    version: CONSENT_VERSION,
    timestamp: typeof r.timestamp === 'string' ? r.timestamp : new Date(0).toISOString(),
    categories: {
      necessary: true,
      statistics: cats.statistics === true,
      marketing: cats.marketing === true,
    },
  }
}

export function isConsentState(value: unknown): value is ConsentState {
  return sanitizeConsent(value) !== null
}

export function parseConsentCookie(cookieHeader: string | null | undefined): ConsentState | null {
  if (!cookieHeader) return null
  for (const segment of cookieHeader.split(';')) {
    const eq = segment.indexOf('=')
    if (eq === -1) continue
    const key = segment.slice(0, eq).trim()
    if (key !== CONSENT_COOKIE_NAME) continue
    let val = segment.slice(eq + 1).trim()
    if (val.startsWith('"') && val.endsWith('"') && val.length >= 2) val = val.slice(1, -1)
    try {
      val = decodeURIComponent(val)
    } catch {
      // keep raw
    }
    try {
      return sanitizeConsent(JSON.parse(val))
    } catch {
      return null
    }
  }
  return null
}

export function readConsentFromRequest(cookieHeader: string | null | undefined): ConsentState | null {
  return parseConsentCookie(cookieHeader)
}

// ---------- CLIENT ----------

export function buildCookieString(state: ConsentState): string {
  const serialized = encodeURIComponent(JSON.stringify(state))
  const attributes = [
    `${CONSENT_COOKIE_NAME}=${serialized}`,
    `Max-Age=${CONSENT_MAX_AGE_SECONDS}`,
    'Path=/',
    'SameSite=Lax',
    'Secure',
  ]
  return attributes.join('; ')
}

export function setConsentClient(state: ConsentState): void {
  if (typeof document === 'undefined') return
  try {
    document.cookie = buildCookieString(state)
  } catch {
    // noop
  }
  try {
    window.localStorage.setItem(CONSENT_LOCALSTORAGE_KEY, JSON.stringify(state))
  } catch {
    // noop
  }
  const event = new CustomEvent('cookieConsentChanged', { detail: state })
  try {
    window.dispatchEvent(event)
  } catch {
    // noop
  }
}

export function readConsentClient(): ConsentState | null {
  if (typeof document === 'undefined') return null
  try {
    const fromCookie = parseConsentCookie(document.cookie)
    if (fromCookie) return fromCookie
  } catch {
    // ignore
  }
  try {
    const raw = window.localStorage.getItem(CONSENT_LOCALSTORAGE_KEY)
    if (raw) return sanitizeConsent(JSON.parse(raw))
  } catch {
    // noop
  }
  return null
}

export function buildConsent(categories: Partial<Record<CookieCategory, boolean>>): ConsentState {
  return {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    categories: {
      necessary: true,
      statistics: categories.statistics === true,
      marketing: categories.marketing === true,
    },
  }
}

export function acceptAllConsent(): ConsentState {
  return buildConsent({ statistics: true, marketing: true })
}

export function onlyNecessaryConsent(): ConsentState {
  return buildConsent({ statistics: false, marketing: false })
}

// ---------- SERVER helpers for cookie string to SET in response ----------

export function serializeSetCookie(state: ConsentState, domain?: string): string {
  const parts: string[] = [
    `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(state))}`,
    `Path=/`,
    `Max-Age=${CONSENT_MAX_AGE_SECONDS}`,
    'HttpOnly',
    'SameSite=Lax',
    'Secure',
  ]
  if (domain) parts.push(`Domain=${domain}`)
  return parts.join('; ')
}
