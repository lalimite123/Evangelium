export const locales = ['de', 'en', 'fr'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'de'

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export const routes = {
  home: '',
  about: '/about',
  statutes: '/statutes',
  contact: '/contact',
  donate: '/donate',
  books: '/books',
  imprint: '/imprint',
  privacy: '/privacy',
} as const

export type RouteKey = keyof typeof routes

export function localePath(locale: Locale, route: RouteKey | string = 'home', hash?: string) {
  const path = route in routes ? routes[route as RouteKey] : route
  return `/${locale}${path}${hash ? `#${hash}` : ''}`
}
