import type { MetadataRoute } from 'next'
import { locales, type Locale, routes } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/site-config'

type RouteEntry = { key: keyof typeof routes | string; path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]['changeFrequency'] }

const pages: RouteEntry[] = [
  { key: 'home', path: routes.home, priority: 1.0, changeFreq: 'weekly' },
  { key: 'about', path: routes.about, priority: 0.9, changeFreq: 'monthly' },
  { key: 'books', path: routes.books, priority: 0.8, changeFreq: 'monthly' },
  { key: 'contact', path: routes.contact, priority: 0.8, changeFreq: 'monthly' },
  { key: 'donate', path: routes.donate, priority: 0.7, changeFreq: 'monthly' },
  { key: 'statutes', path: routes.statutes, priority: 0.4, changeFreq: 'yearly' },
  { key: 'imprint', path: routes.imprint, priority: 0.2, changeFreq: 'yearly' },
  { key: 'privacy', path: routes.privacy, priority: 0.2, changeFreq: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const base = siteConfig.url.replace(/\/$/, '')
  const now = new Date()

  for (const locale of locales) {
    for (const page of pages) {
      const url = `${base}/${locale}${page.path}`
      entries.push({
        url,
        lastModified: now,
        changeFrequency: page.changeFreq,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${base}/${l}${page.path}`]),
          ),
        },
      })
    }
  }

  return entries
}
