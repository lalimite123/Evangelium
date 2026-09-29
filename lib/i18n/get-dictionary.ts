import type { Locale } from './config'
import type { Dictionary } from './types'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  de: () => import('./dictionaries/de').then((m) => m.de),
  en: () => import('./dictionaries/en').then((m) => m.en),
  fr: () => import('./dictionaries/fr').then((m) => m.fr),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}
