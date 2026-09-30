import type { RouteKey } from './config'

export type LinkTarget = { label: string; route: RouteKey; hash?: string }

export type HeroSlide = {
  eyebrow: string
  titleTop: string
  titleBottom: string
  text: string
  primary: LinkTarget
  secondary: LinkTarget
}

export type Dictionary = {
  meta: { title: string; description: string }
  common: {
    learnMore: string
    readMore: string
    backHome: string
    skipToContent: string
    languageLabel: string
    scroll: string
    placeholderNote: string
  }
  nav: {
    home: string
    about: string
    ministries: string
    statutes: string
    contact: string
    books: string
    donate: string
    cta: string
    menu: string
    close: string
  }
  hero: { slides: HeroSlide[]; prev: string; next: string; goTo: string }
  intro: {
    eyebrow: string
    title: string
    text: string
    pillars: { title: string; text: string }[]
    cta: string
  }
  ministries: {
    eyebrow: string
    title: string
    text: string
    prev: string
    next: string
    items: { title: string; text: string; image: string }[]
  }
  verse: { text: string; reference: string }
  roots: {
    eyebrow: string
    title: string
    text: string
    cardDortmund: { label: string; title: string; text: string }
    cardMission: { label: string; title: string; text: string }
    cta: string
  }
  visit: {
    eyebrow: string
    title: string
    text: string
    timesTitle: string
    times: { label: string; day: string; time: string }[]
    timesNote: string
    addressTitle: string
    directions: string
  }
  join: {
    eyebrow: string
    title: string
    member: { title: string; text: string; cta: string }
    give: {
      title: string
      text: string
      holder: string
      iban: string
      bic: string
      bank: string
      note: string
    }
  }
  donate: {
    cta: string
    ctaShort: string
    banner: { eyebrow: string; title: string; text: string }
    meta: { title: string; description: string }
    eyebrow: string
    title: string
    intro: string
    paypal: { title: string; text: string; button: string; amountLabel: string; customAmount: string; note: string }
    bank: { title: string; text: string; reference: string; copy: string; copied: string }
    impact: { eyebrow: string; title: string; items: { title: string; text: string }[] }
    receipt: { title: string; text: string }
  }
  books: {
    eyebrow: string
    title: string
    text: string
    viewAll: string
    by: string
    pages: string
    year: string
    language: string
    buy: string
    order: string
    orderSubject: string
    soon: string
    meta: { title: string; description: string }
    pageEyebrow: string
    pageTitle: string
    pageIntro: string
    shippingNote: string
    featured: string
  }
  footer: {
    tagline: string
    donate: string
    navigation: string
    legal: string
    contact: string
    language: string
    register: string
    rights: string
    imprint: string
    privacy: string
    statutes: string
    cookieSettings: string
  }
  about: {
    meta: { title: string; description: string }
    eyebrow: string
    title: string
    intro: string
    foundation: { eyebrow: string; title: string; text: string }
    purposes: { eyebrow: string; title: string; text: string; items: { title: string; text: string }[] }
    organs: {
      eyebrow: string
      title: string
      text: string
      boardTitle: string
      board: { role: string; text: string }[]
      assemblyTitle: string
      assemblyText: string
    }
    history: { eyebrow: string; title: string; items: { date: string; title: string; text: string }[] }
    cta: { title: string; text: string; label: string }
  }
  statutes: {
    meta: { title: string; description: string }
    eyebrow: string
    title: string
    intro: string
    languageNote: string | null
    tocTitle: string
    closing: string
  }
  contact: {
    meta: { title: string; description: string }
    eyebrow: string
    title: string
    intro: string
    cards: { address: string; email: string; phone: string; times: string }
    writeUs: string
    call: string
    arrival: { title: string; text: string }
  }
  imprint: { meta: { title: string; description: string }; title: string; note: string | null }
  privacy: { meta: { title: string; description: string }; title: string; note: string | null }
  notFound: { title: string; text: string }
  consent: {
    title: string
    description: string
    acceptAll: string
    rejectAll: string
    save: string
    customize: string
    categories: {
      necessary: {
        title: string
        description: string
      }
      statistics: {
        title: string
        description: string
      }
      marketing: {
        title: string
        description: string
      }
    }
    alwaysActive: string
    more: string
    links: {
      imprint: string
      privacy: string
    }
  }
}
