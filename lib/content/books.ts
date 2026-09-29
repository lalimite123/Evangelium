import type { Locale } from '@/lib/i18n/config'

export type Book = {
  slug: string
  title: Record<Locale, string>
  subtitle: Record<Locale, string>
  description: Record<Locale, string>
  author: string
  authorRole: Record<Locale, string>
  year: number
  pages: number
  language: Record<Locale, string>
  /** Price in EUR. `null` = not yet available for purchase. */
  price: number | null
  cover: string
  coverTone: 'dark' | 'light'
  /**
   * Purchase link (PayPal "Buy now" hosted button, PayPal.Me with amount, or a shop URL).
   * When empty, the UI falls back to an e-mail order.
   */
  purchaseUrl: string
}

/**
 * Books written by the pastors. Replace the placeholder entries with the real
 * titles, prices and purchase links — the UI adapts automatically.
 */
export const books: Book[] = [
  {
    slug: 'das-volle-evangelium',
    title: { de: 'Das volle Evangelium', en: 'The Full Gospel', fr: "L'Évangile tout entier" },
    subtitle: {
      de: 'Jesus Christus als Herrn und Erlöser der Welt bekennen',
      en: 'Confessing Jesus Christ as Lord and Saviour of the world',
      fr: 'Confesser Jésus-Christ comme Seigneur et Sauveur du monde',
    },
    description: {
      de: 'Eine Einführung in die Grundlagen des christlichen Glaubens – klar, biblisch fundiert und nah am Alltag. Für Suchende, Neuanfänger und alle, die ihr Fundament neu entdecken möchten.',
      en: 'An introduction to the foundations of the Christian faith – clear, rooted in Scripture and close to everyday life. For seekers, new believers and everyone who wants to rediscover their foundation.',
      fr: "Une introduction aux fondements de la foi chrétienne – claire, ancrée dans l'Écriture et proche du quotidien. Pour ceux qui cherchent, les nouveaux croyants et tous ceux qui veulent redécouvrir leur fondement.",
    },
    author: 'Pastor N. N.', // TODO: real author name
    authorRole: { de: 'Vorsitzender', en: 'Chair', fr: 'Président' },
    year: 2024,
    pages: 184,
    language: { de: 'Deutsch', en: 'German', fr: 'Allemand' },
    price: 14.9,
    cover: '/images/books/cover-1.png',
    coverTone: 'dark',
    purchaseUrl: '', // TODO: PayPal "Buy now" link
  },
  {
    slug: 'verwurzelt-im-wort',
    title: { de: 'Verwurzelt im Wort', en: 'Rooted in the Word', fr: 'Enracinés dans la Parole' },
    subtitle: {
      de: '40 Andachten für den Alltag',
      en: '40 devotions for everyday life',
      fr: '40 méditations pour le quotidien',
    },
    description: {
      de: 'Vierzig kurze Andachten, die Bibeltext, Gebet und eine praktische Frage für den Tag verbinden. Ein Begleiter für die stille Zeit am Morgen oder den Abschluss des Tages.',
      en: 'Forty short devotions combining a Bible passage, a prayer and one practical question for the day. A companion for quiet time in the morning or the close of the day.',
      fr: "Quarante courtes méditations qui associent un texte biblique, une prière et une question pratique pour la journée. Un compagnon pour le temps calme du matin ou la fin de la journée.",
    },
    author: 'Pastor N. N.', // TODO: real author name
    authorRole: { de: 'Stellvertretender Vorsitzender', en: 'Vice chair', fr: 'Vice-président' },
    year: 2025,
    pages: 128,
    language: { de: 'Deutsch', en: 'German', fr: 'Allemand' },
    price: 9.9,
    cover: '/images/books/cover-2.png',
    coverTone: 'light',
    purchaseUrl: '', // TODO: PayPal "Buy now" link
  },
  {
    slug: 'hoffnung-fuer-dortmund',
    title: { de: 'Hoffnung für Dortmund', en: 'Hope for Dortmund', fr: 'Espérance pour Dortmund' },
    subtitle: {
      de: 'Gemeinde bauen, wo Menschen leben',
      en: 'Building church where people live',
      fr: "Bâtir l'Église là où vivent les gens",
    },
    description: {
      de: 'Erfahrungen, Fehler und Ermutigungen aus den ersten Jahren einer jungen Gemeinde – und was es bedeutet, Nächstenliebe praktisch zu leben.',
      en: 'Lessons, mistakes and encouragements from the first years of a young church – and what it means to live out love for one’s neighbour in practice.',
      fr: "Expériences, erreurs et encouragements des premières années d'une jeune Église – et ce que signifie vivre concrètement l'amour du prochain.",
    },
    author: 'Pastor N. N.', // TODO: real author name
    authorRole: { de: 'Generalsekretär', en: 'General secretary', fr: 'Secrétaire général' },
    year: 2026,
    pages: 212,
    language: { de: 'Deutsch', en: 'German', fr: 'Allemand' },
    price: null,
    cover: '/images/books/cover-3.png',
    coverTone: 'dark',
    purchaseUrl: '',
  },
]

export function formatPrice(price: number, locale: Locale) {
  return new Intl.NumberFormat(locale === 'en' ? 'en-DE' : locale === 'fr' ? 'fr-FR' : 'de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}
