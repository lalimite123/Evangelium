import { headers as nextHeaders } from 'next/headers'

export type HeadersLike = {
  get(key: string): string | null
}

/**
 * Normalize a potentially non-standard Next/Vercel headers object into
 * a simple Record<string, string> (lowercased keys).
 *
 * Next 16 + Vercel prerender may return a proxy object whose `.get()`
 * method is missing or broken depending on the runtime phase (static vs request).
 * This helper tries multiple access strategies and never throws.
 */
export function readHeadersSafe(): Record<string, string> {
  const out: Record<string, string> = {}
  let list: unknown = undefined
  try {
    list = nextHeaders()
  } catch {
    return out
  }
  if (!list) return out

  // Strategy 1: `.get()` method (standard Headers)
  const stdKeys = ['cookie', 'host', 'accept-language', 'referer']
  let hasWorkingGet = false
  try {
    if (typeof (list as HeadersLike).get === 'function') {
      const smoke = (list as HeadersLike).get('cookie')
      if (typeof smoke === 'string' || smoke === null) hasWorkingGet = true
    }
  } catch {
    hasWorkingGet = false
  }
  if (hasWorkingGet) {
    for (const k of stdKeys) {
      try {
        const v = (list as HeadersLike).get(k)
        if (typeof v === 'string' && v.length > 0) out[k] = v
      } catch {
        // noop
      }
    }
    return out
  }

  // Strategy 2: iteration via `for...of` (iterable headers)
  try {
    const anyList = list as { [Symbol.iterator]?: () => Iterator<[string, string]> }
    if (typeof anyList[Symbol.iterator] === 'function') {
      for (const pair of anyList as unknown as Iterable<[string, string]>) {
        if (Array.isArray(pair) && typeof pair[0] === 'string') {
          const key = pair[0].toLowerCase()
          if (typeof pair[1] === 'string') out[key] = pair[1]
        }
      }
      return out
    }
  } catch {
    // fall through
  }

  // Strategy 3: entries()
  try {
    const asEntries = list as { entries?: () => Iterable<[string, string]> }
    if (typeof asEntries.entries === 'function') {
      for (const pair of asEntries.entries()) {
        if (Array.isArray(pair) && typeof pair[0] === 'string') {
          const key = pair[0].toLowerCase()
          if (typeof pair[1] === 'string') out[key] = pair[1]
        }
      }
      return out
    }
  } catch {
    // fall through
  }

  // Strategy 4: forEach
  try {
    const asEach = list as { forEach?: (cb: (v: string, k: string) => void) => void }
    if (typeof asEach.forEach === 'function') {
      asEach.forEach((v, k) => {
        if (typeof k === 'string' && typeof v === 'string') out[k.toLowerCase()] = v
      })
      return out
    }
  } catch {
    // fall through
  }

  // Strategy 5: try to convert via Object.entries (very last resort)
  try {
    for (const [k, v] of Object.entries(list as object)) {
      if (typeof k === 'string' && typeof v === 'string') {
        out[k.toLowerCase()] = v
      }
    }
  } catch {
    // give up
  }

  return out
}

export function readHeaderSafe(key: string): string | null {
  const map = readHeadersSafe()
  const k = key.toLowerCase()
  return Object.prototype.hasOwnProperty.call(map, k) ? map[k] ?? null : null
}

export function readCookieHeaderSafe(): string | null {
  return readHeaderSafe('cookie')
}
