import type { Dictionary } from '../types'

export const de: Dictionary = {
  meta: {
    title: 'Das Evangelium e.V. – Evangelische Gemeinde in Dortmund',
    description:
      'Das Evangelium e.V. ist eine evangelische Gemeinde in Dortmund. Gottesdienste, Seelsorge, Kinder- und Jugendarbeit, Bildung und Nächstenliebe – auf der Grundlage der Bibel.',
  },
  common: {
    learnMore: 'Mehr erfahren',
    readMore: 'Weiterlesen',
    backHome: 'Zur Startseite',
    skipToContent: 'Zum Inhalt springen',
    languageLabel: 'Sprache',
    scroll: 'Scrollen',
    placeholderNote: 'Angaben werden derzeit aktualisiert.',
  },
  nav: {
    home: 'Start',
    about: 'Über uns',
    ministries: 'Unsere Arbeit',
    statutes: 'Satzung',
    contact: 'Kontakt',
    books: 'Bücher',
    donate: 'Spenden',
    cta: 'Besuchen Sie uns',
    menu: 'Menü öffnen',
    close: 'Menü schließen',
  },
  hero: {
    slides: [
      {
        eyebrow: 'Evangelische Gemeinde · Dortmund',
        titleTop: 'Gute Nachricht',
        titleBottom: 'für alle.',
        text: 'Wir bekennen Jesus Christus als Herrn und Erlöser der Welt – und laden Sie ein, das volle Evangelium mit uns zu entdecken. Mitten in Dortmund, offen für jeden Menschen.',
        primary: { label: 'Gottesdienst besuchen', route: 'contact' },
        secondary: { label: 'Wer wir sind', route: 'about' },
      },
      {
        eyebrow: 'Grundlage unseres Denkens und Handelns',
        titleTop: 'Verwurzelt',
        titleBottom: 'im Wort.',
        text: 'Die Bibel ist die Grundlage allen Denkens und Handelns unserer Gemeinde. In Gottesdiensten, Vorträgen und Kleingruppen vermitteln wir die christliche Lehre – verständlich und alltagsnah.',
        primary: { label: 'Unsere Arbeit', route: 'home', hash: '#arbeit' },
        secondary: { label: 'Über uns', route: 'about' },
      },
      {
        eyebrow: 'Praktische Nächstenliebe',
        titleTop: 'Liebe, die',
        titleBottom: 'handelt.',
        text: 'Seelsorge, Bildung, Unterstützung in Notlagen: Wir wollen im Rahmen unserer Möglichkeiten da sein, wo Menschen uns brauchen – in Dortmund und weltweit.',
        primary: { label: 'Mitmachen', route: 'home', hash: '#mitmachen' },
        secondary: { label: 'Kontakt', route: 'contact' },
      },
    ],
    prev: 'Vorherige Folie',
    next: 'Nächste Folie',
    goTo: 'Zu Folie',
  },
  intro: {
    eyebrow: 'Wer wir sind',
    title: 'Eine Gemeinde mit einem klaren Auftrag',
    text: 'Das Evangelium e.V. ist ein eingetragener, gemeinnütziger Verein mit Sitz in Dortmund. Unsere Aufgabe ist die Ausbreitung des vollen Evangeliums von Jesus Christus – in Wort und Tat. Drei Schwerpunkte prägen unsere Arbeit.',
    pillars: [
      {
        title: 'Verkündigung',
        text: 'Öffentliche Gottesdienste, Vorträge und digitale Medien, die die christliche Lehre zugänglich machen.',
      },
      {
        title: 'Bildung',
        text: 'Sprachkurse, Allgemeinbildung und berufliche Fortbildung für Jugendliche und Erwachsene.',
      },
      {
        title: 'Nächstenliebe',
        text: 'Seelsorge, Betreuung und finanzielle Hilfe für Menschen in Not, Krankheit oder im Alter.',
      },
    ],
    cta: 'Mehr über uns',
  },
  ministries: {
    eyebrow: 'Unsere Arbeit',
    title: 'Was wir tun',
    text: 'Unsere Satzungszwecke werden konkret – in Angeboten für jede Lebensphase.',
    prev: 'Zurück',
    next: 'Weiter',
    items: [
      {
        title: 'Gottesdienst & Lehre',
        text: 'Öffentliche Gottesdienste, Vorträge und Medien zur Vermittlung der christlichen Lehre.',
        image: '/images/hero-worship.png',
      },
      {
        title: 'Seelsorge & Gebet',
        text: 'Gebet, biblische Seelsorge und Lebensberatung – Dienste zum seelischen Wohl der Menschen.',
        image: '/images/prayer.png',
      },
      {
        title: 'Kinder & Jugend',
        text: 'Kinder- und Jugendarbeit auf christlicher Grundlage, inklusive Freizeiten und Pfadfinderarbeit.',
        image: '/images/youth.png',
      },
      {
        title: 'Ehe & Familie',
        text: 'Ehe- und Familientherapiegespräche sowie Veranstaltungen, die Beziehungen stärken.',
        image: '/images/family.png',
      },
      {
        title: 'Bildung & Sprache',
        text: 'Sprachkurse für Jugendliche und Erwachsene, Allgemeinbildung, Berufsausbildung und Fortbildung.',
        image: '/images/education.png',
      },
      {
        title: 'Diakonie & Mission',
        text: 'Betreuung und Hilfe für Menschen in Not, Krankheit oder im Alter – sowie Innen- und Außenmission.',
        image: '/images/care.png',
      },
    ],
  },
  verse: {
    text: 'Denn ich schäme mich des Evangeliums nicht; denn es ist eine Kraft Gottes, die selig macht alle, die daran glauben.',
    reference: 'Römer 1,16',
  },
  roots: {
    eyebrow: 'Dortmund & die Welt',
    title: 'In Dortmund verwurzelt, weltweit verbunden',
    text: 'Unser Sitz ist Dortmund – hier feiern wir Gottesdienst, hier leben wir Gemeinschaft. Zugleich motivieren und unterstützen wir missionarische Arbeit im In- und Ausland.',
    cardDortmund: {
      label: 'Unsere Stadt',
      title: 'Dortmund',
      text: 'Eingetragen im Vereinsregister des Amtsgerichts Dortmund.',
    },
    cardMission: {
      label: 'Mission',
      title: 'Im In- und Ausland',
      text: 'Wir fördern missionarische Projekte und praktische Nächstenliebe über Grenzen hinweg.',
    },
    cta: 'Kontakt aufnehmen',
  },
  visit: {
    eyebrow: 'Besuchen Sie uns',
    title: 'Herzlich willkommen – jeden Sonntag',
    text: 'Ob Sie zum ersten Mal in eine Gemeinde kommen oder schon lange glauben: Bei uns ist Platz für Sie. Kommen Sie einfach vorbei.',
    timesTitle: 'Regelmäßige Termine',
    times: [
      { label: 'Gottesdienst', day: 'Sonntag', time: '10:30 Uhr' },
      { label: 'Gebetsabend', day: 'Mittwoch', time: '19:00 Uhr' },
      { label: 'Bibelstunde', day: 'Freitag', time: '19:00 Uhr' },
    ],
    timesNote: 'Termine können abweichen – bitte kurz nachfragen.',
    addressTitle: 'Adresse',
    directions: 'Route planen',
  },
  join: {
    eyebrow: 'Mitmachen',
    title: 'Gemeinsam mehr bewegen',
    member: {
      title: 'Mitglied werden',
      text: 'Mitglied kann werden, wer die Ziele des Vereins unterstützt und verbindlich an ihrer Verwirklichung mitarbeitet. Die Mitgliedschaft wird beim Vorstand beantragt.',
      cta: 'Mitgliedschaft anfragen',
    },
    give: {
      title: 'Spenden',
      text: 'Unsere Arbeit wird durch Mitgliedsbeiträge, freiwillige Spenden und Kollekten getragen. Jede Gabe fließt ausschließlich in die satzungsgemäßen Zwecke.',
      holder: 'Kontoinhaber',
      iban: 'IBAN',
      bic: 'BIC',
      bank: 'Bank',
      note: 'Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige und mildtätige Zwecke.',
    },
  },
  donate: {
    cta: 'Jeder Beitrag zählt! Jetzt spenden!',
    ctaShort: 'Jetzt spenden',
    banner: {
      eyebrow: 'Unterstützen',
      title: 'Jeder Beitrag zählt.',
      text: 'Gottesdienste, Seelsorge, Kinder- und Jugendarbeit, Bildungsprojekte und Hilfe in Notlagen – all das wird durch freiwillige Spenden getragen. Danke, dass Sie mittragen.',
    },
    meta: {
      title: 'Spenden – Das Evangelium e.V.',
      description: 'Unterstützen Sie die Arbeit von Das Evangelium e.V. in Dortmund – per PayPal oder Überweisung. Jeder Beitrag zählt.',
    },
    eyebrow: 'Spenden',
    title: 'Jeder Beitrag zählt.',
    intro:
      'Unsere Arbeit wird ausschließlich durch Mitgliedsbeiträge, freiwillige Spenden und Kollekten getragen. Jede Gabe fließt unmittelbar in die satzungsgemäßen Zwecke des Vereins.',
    paypal: {
      title: 'Schnell und sicher mit PayPal',
      text: 'Spenden Sie in wenigen Sekunden – mit PayPal-Konto, Kreditkarte oder Lastschrift. Wählen Sie einen Betrag oder geben Sie einen eigenen ein.',
      button: 'Mit PayPal spenden',
      amountLabel: 'Betrag wählen',
      customAmount: 'Anderer Betrag',
      note: 'Sie werden zu PayPal weitergeleitet. Es fallen für Sie keine zusätzlichen Kosten an.',
    },
    bank: {
      title: 'Per Überweisung',
      text: 'Für regelmäßige Spenden oder größere Beträge empfehlen wir die klassische Banküberweisung.',
      reference: 'Verwendungszweck',
      copy: 'IBAN kopieren',
      copied: 'Kopiert',
    },
    impact: {
      eyebrow: 'Was Ihre Spende bewirkt',
      title: 'Konkret. Vor Ort. Weltweit.',
      items: [
        { title: 'Gemeinde & Gottesdienst', text: 'Räume, Technik und Material für öffentliche Veranstaltungen und die Verkündigung.' },
        { title: 'Kinder & Jugend', text: 'Freizeiten, Pfadfinderarbeit und Angebote auf christlicher Grundlage.' },
        { title: 'Bildung', text: 'Sprachkurse sowie Projekte der Allgemein- und Berufsbildung.' },
        { title: 'Hilfe in Not', text: 'Finanzielle Unterstützung, Pflege und Betreuung für Menschen in Notlagen.' },
      ],
    },
    receipt: {
      title: 'Spendenbescheinigung',
      text: 'Als gemeinnütziger Verein stellen wir auf Wunsch eine Zuwendungsbestätigung aus. Bitte geben Sie dafür Ihre Adresse im Verwendungszweck an oder schreiben Sie uns.',
    },
  },
  books: {
    eyebrow: 'Bücher',
    title: 'Aus der Feder unserer Pastoren',
    text: 'Bücher, die aus dem Gemeindeleben entstanden sind – zum Vertiefen, Weitergeben und Verschenken. Der Erlös unterstützt die Arbeit des Vereins.',
    viewAll: 'Alle Bücher ansehen',
    by: 'von',
    pages: 'Seiten',
    year: 'Erschienen',
    language: 'Sprache',
    buy: 'Jetzt kaufen',
    order: 'Per E-Mail bestellen',
    orderSubject: 'Buchbestellung',
    soon: 'Erscheint bald',
    meta: {
      title: 'Bücher – Das Evangelium e.V.',
      description: 'Bücher der Pastoren von Das Evangelium e.V. – Glaubensgrundlagen, Andachten und Gemeindebau. Bestellen Sie direkt online.',
    },
    pageEyebrow: 'Bücher',
    pageTitle: 'Lesen, was uns bewegt.',
    pageIntro:
      'Unsere Pastoren schreiben, was sie predigen: biblisch fundiert, alltagsnah und ermutigend. Jedes Buch kann direkt bestellt oder nach dem Gottesdienst vor Ort erworben werden.',
    shippingNote: 'Versand innerhalb Deutschlands. Abholung nach dem Gottesdienst ist kostenfrei.',
    featured: 'Neuerscheinung',
  },
  footer: {
    tagline: 'Die Ausbreitung des vollen Evangeliums von Jesus Christus – in Wort und Tat.',
    donate: 'Spenden',
    navigation: 'Navigation',
    legal: 'Rechtliches',
    contact: 'Kontakt',
    language: 'Sprache',
    register: 'Eingetragen im Vereinsregister des Amtsgerichts Dortmund',
    rights: 'Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    statutes: 'Satzung',
    cookieSettings: 'Cookie-Einstellungen',
  },
  about: {
    meta: {
      title: 'Über uns – Das Evangelium e.V.',
      description:
        'Grundlage, Auftrag, Zwecke und Organe des Vereins Das Evangelium e.V. in Dortmund.',
    },
    eyebrow: 'Über uns',
    title: 'Eine Gemeinde, die Jesus Christus bekennt',
    intro:
      'Das Evangelium e.V. ist eine evangelische Gemeinde in Dortmund. Grundlage allen Denkens und Handelns ist die Bibel. Unsere Aufgabe ist die Ausbreitung des vollen Evangeliums von Jesus Christus, den wir als Herrn und Erlöser der Welt bekennen.',
    foundation: {
      eyebrow: 'Grundlage',
      title: 'Die Bibel als Fundament',
      text: 'Alles, was wir glauben, lehren und tun, gründet in der Heiligen Schrift. Sie prägt unsere Gottesdienste, unsere Seelsorge und unser Miteinander – und sie ist der Maßstab, an dem wir uns messen lassen.',
    },
    purposes: {
      eyebrow: 'Zwecke',
      title: 'Wofür wir da sind',
      text: 'Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige und mildtätige Zwecke im Sinne der Abgabenordnung.',
      items: [
        {
          title: 'Förderung der Religion',
          text: 'Gottesdienste, Vorträge, Seelsorge, Kinder- und Jugendarbeit, Ehe- und Familienberatung, Innen- und Außenmission.',
        },
        {
          title: 'Förderung der Erziehung und Bildung',
          text: 'Sprachkurse für Jugendliche und Erwachsene, Projekte der Allgemeinbildung, Berufsausbildung und Fortbildung, einschließlich Studentenhilfe.',
        },
        {
          title: 'Mildtätige Zwecke',
          text: 'Finanzielle Unterstützung in Notfällen sowie Betreuung, Pflege und Hilfe für Menschen, die aufgrund von Krankheit, Alter oder Notlagen auf andere angewiesen sind.',
        },
      ],
    },
    organs: {
      eyebrow: 'Organe',
      title: 'Wie wir organisiert sind',
      text: 'Der Verein ordnet seine Angelegenheiten durch den Vorstand und die Mitgliederversammlung. Vom Vorstand gehen die entscheidenden geistlichen Impulse aus.',
      boardTitle: 'Der Vorstand',
      board: [
        { role: 'Vorsitzende/r', text: 'Leitet den Verein und die Mitgliederversammlung.' },
        { role: 'Stellvertretende/r Vorsitzende/r', text: 'Vertritt den Vorsitz bei Verhinderung.' },
        { role: 'Generalsekretär/in', text: 'Koordiniert Planung und Verwaltung.' },
        { role: 'Kassenwart/in', text: 'Verantwortet die ordnungsgemäße Rechnungslegung.' },
      ],
      assemblyTitle: 'Die Mitgliederversammlung',
      assemblyText:
        'Sie findet mindestens einmal jährlich statt, nimmt den Jahresbericht entgegen, wählt den Vorstand, entscheidet über Beiträge und Satzungsänderungen und ernennt Ehrenmitglieder.',
    },
    history: {
      eyebrow: 'Geschichte',
      title: 'Unsere Meilensteine',
      items: [
        { date: '26.11.2023', title: 'Verabschiedung der Satzung', text: 'Die Mitgliederversammlung beschließt die Gründungssatzung des Vereins.' },
        { date: '28.03.2024', title: 'Änderung der Satzung', text: 'Die Satzung wird in aktualisierter Fassung angenommen.' },
        { date: 'Dortmund', title: 'Eintragung', text: 'Eintragung in das Vereinsregister des Amtsgerichts Dortmund.' },
      ],
    },
    cta: { title: 'Die Satzung im Wortlaut', text: 'Alle Regelungen zu Zweck, Mitgliedschaft, Organen und Haushalt.', label: 'Satzung lesen' },
  },
  statutes: {
    meta: {
      title: 'Satzung – Das Evangelium e.V.',
      description: 'Satzung des Vereins Das Evangelium e.V., Dortmund.',
    },
    eyebrow: 'Satzung',
    title: 'Satzung des Vereins Das Evangelium e.V.',
    intro: 'Verabschiedet in der Mitgliederversammlung vom 26.11.2023 und geändert am 28.03.2024.',
    languageNote: null as string | null,
    tocTitle: 'Inhalt',
    closing:
      'Die vorstehende Satzung wurde in der Mitgliederversammlung vom 26.11.2023 verabschiedet und am 28.03.2024 geändert.',
  },
  contact: {
    meta: {
      title: 'Kontakt – Das Evangelium e.V.',
      description: 'Adresse, Gottesdienstzeiten und Kontakt zu Das Evangelium e.V. in Dortmund.',
    },
    eyebrow: 'Kontakt',
    title: 'Wir freuen uns auf Sie',
    intro:
      'Haben Sie Fragen, möchten Sie einen Gottesdienst besuchen oder ein Gespräch führen? Schreiben Sie uns oder kommen Sie einfach vorbei.',
    cards: {
      address: 'Adresse',
      email: 'E-Mail',
      phone: 'Telefon',
      times: 'Gottesdienst',
    },
    writeUs: 'E-Mail schreiben',
    call: 'Anrufen',
    arrival: {
      title: 'Anfahrt',
      text: 'Unsere Räume sind mit öffentlichen Verkehrsmitteln gut erreichbar. Parkplätze finden Sie in der Umgebung. Bei Fragen zur Anfahrt melden Sie sich gerne.',
    },
  },
  imprint: {
    meta: { title: 'Impressum – Das Evangelium e.V.', description: 'Impressum von Das Evangelium e.V.' },
    title: 'Impressum',
    note: null as string | null,
  },
  privacy: {
    meta: { title: 'Datenschutz – Das Evangelium e.V.', description: 'Datenschutzerklärung von Das Evangelium e.V.' },
    title: 'Datenschutzerklärung',
    note: null as string | null,
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
  },
  consent: {
    title: 'Diese Website verwendet Cookies',
    description:
      'Wir nutzen Cookies, um grundlegende Funktionen bereitzustellen und unser Angebot stetig zu verbessern. Sie können wählen, welche Kategorien Sie erlauben möchten. Nähere Informationen finden Sie in der Datenschutzerklärung.',
    acceptAll: 'Alle akzeptieren',
    rejectAll: 'Nur notwendige',
    save: 'Auswahl speichern',
    customize: 'Einstellungen',
    categories: {
      necessary: {
        title: 'Notwendig',
        description:
          'Technisch erforderliche Cookies sichern die Grundfunktionen der Website. Ohne sie ist die Nutzung nicht ordnungsgemäß möglich. Beispiele: Sprachauswahl (1 Jahr), Cookie-Einwilligung (12 Monate), CSRF-Token (Sitzung).',
      },
      statistics: {
        title: 'Statistiken',
        description:
          'Ermöglichen es uns, das Besucherverhalten pseudonymisiert auszuwerten, um Inhalte und Technik zu optimieren. Verwendet: Google Analytics 4 (mit IP-Maskierung) auf Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).',
      },
      marketing: {
        title: 'Marketing',
        description:
          'Werden verwendet, um Besucher auf Seiten Dritter (z. B. Social Media) mit passenden Inhalten anzusprechen. Auf dieser Website standardmäßig deaktiviert; Aktivierung erfolgt nur durch Ihre ausdrückliche Einwilligung.',
      },
    },
    alwaysActive: 'Immer aktiv',
    more: 'Weitere Informationen',
    links: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
}
