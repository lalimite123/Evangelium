import type { Dictionary } from '../types'

export const en: Dictionary = {
  meta: {
    title: 'Das Evangelium e.V. – Evangelical Church in Dortmund',
    description:
      'Das Evangelium e.V. is an evangelical church in Dortmund, Germany. Worship services, pastoral care, children and youth work, education and charity – founded on the Bible.',
  },
  common: {
    learnMore: 'Learn more',
    readMore: 'Read more',
    backHome: 'Back to home',
    skipToContent: 'Skip to content',
    languageLabel: 'Language',
    scroll: 'Scroll',
    placeholderNote: 'Details are currently being updated.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    ministries: 'Our work',
    statutes: 'Statutes',
    contact: 'Contact',
    books: 'Books',
    donate: 'Donate',
    cta: 'Visit us',
    menu: 'Open menu',
    close: 'Close menu',
  },
  hero: {
    slides: [
      {
        eyebrow: 'Evangelical Church · Dortmund',
        titleTop: 'Good news',
        titleBottom: 'for everyone.',
        text: 'We confess Jesus Christ as Lord and Saviour of the world – and invite you to discover the full Gospel with us. In the heart of Dortmund, open to all.',
        primary: { label: 'Join a service', route: 'contact' },
        secondary: { label: 'Who we are', route: 'about' },
      },
      {
        eyebrow: 'The foundation of all we think and do',
        titleTop: 'Rooted',
        titleBottom: 'in the Word.',
        text: 'The Bible is the foundation of everything our church thinks and does. Through services, talks and small groups we teach the Christian faith – clearly and close to everyday life.',
        primary: { label: 'Our work', route: 'home', hash: 'arbeit' },
        secondary: { label: 'About us', route: 'about' },
      },
      {
        eyebrow: 'Practical love for our neighbour',
        titleTop: 'Love that',
        titleBottom: 'acts.',
        text: 'Pastoral care, education, help in times of need: within our means we want to be there wherever people need us – in Dortmund and around the world.',
        primary: { label: 'Get involved', route: 'home', hash: 'mitmachen' },
        secondary: { label: 'Contact', route: 'contact' },
      },
    ],
    prev: 'Previous slide',
    next: 'Next slide',
    goTo: 'Go to slide',
  },
  intro: {
    eyebrow: 'Who we are',
    title: 'A church with a clear mission',
    text: 'Das Evangelium e.V. is a registered non-profit association based in Dortmund. Our task is to spread the full Gospel of Jesus Christ – in word and deed. Three focal points shape our work.',
    pillars: [
      {
        title: 'Proclamation',
        text: 'Public worship services, talks and digital media that make Christian teaching accessible.',
      },
      {
        title: 'Education',
        text: 'Language courses, general education and vocational training for young people and adults.',
      },
      {
        title: 'Charity',
        text: 'Pastoral care, support and financial help for people in need, in illness or in old age.',
      },
    ],
    cta: 'More about us',
  },
  ministries: {
    eyebrow: 'Our work',
    title: 'What we do',
    text: 'Our statutory purposes become concrete – in offerings for every stage of life.',
    prev: 'Previous',
    next: 'Next',
    items: [
      {
        title: 'Worship & Teaching',
        text: 'Public services, talks and media that communicate the Christian faith.',
        image: '/images/hero-worship.png',
      },
      {
        title: 'Pastoral Care & Prayer',
        text: 'Prayer, biblical counselling and life coaching – ministries for the wellbeing of the soul.',
        image: '/images/prayer.png',
      },
      {
        title: 'Children & Youth',
        text: 'Children and youth work on a Christian foundation, including camps and scouting.',
        image: '/images/youth.png',
      },
      {
        title: 'Marriage & Family',
        text: 'Marriage and family counselling as well as events that strengthen relationships.',
        image: '/images/family.png',
      },
      {
        title: 'Education & Language',
        text: 'Language courses for young people and adults, general education, vocational training and further education.',
        image: '/images/education.png',
      },
      {
        title: 'Diaconia & Mission',
        text: 'Care and support for people in need, illness or old age – and mission at home and abroad.',
        image: '/images/care.png',
      },
    ],
  },
  verse: {
    text: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.',
    reference: 'Romans 1:16',
  },
  roots: {
    eyebrow: 'Dortmund & the world',
    title: 'Rooted in Dortmund, connected worldwide',
    text: 'Our home is Dortmund – this is where we worship and live out community. At the same time we motivate and support missionary work at home and abroad.',
    cardDortmund: {
      label: 'Our city',
      title: 'Dortmund',
      text: 'Registered in the register of associations at the Dortmund District Court.',
    },
    cardMission: {
      label: 'Mission',
      title: 'At home and abroad',
      text: 'We support missionary projects and practical love for our neighbour across borders.',
    },
    cta: 'Get in touch',
  },
  visit: {
    eyebrow: 'Visit us',
    title: 'A warm welcome – every Sunday',
    text: 'Whether you are stepping into a church for the first time or have believed for years: there is a place for you here. Just come by.',
    timesTitle: 'Regular gatherings',
    times: [
      { label: 'Worship service', day: 'Sunday', time: '10:30 am' },
      { label: 'Prayer evening', day: 'Wednesday', time: '7:00 pm' },
      { label: 'Bible study', day: 'Friday', time: '7:00 pm' },
    ],
    timesNote: 'Times may vary – please check with us.',
    addressTitle: 'Address',
    directions: 'Get directions',
  },
  join: {
    eyebrow: 'Get involved',
    title: 'Moving more together',
    member: {
      title: 'Become a member',
      text: 'Anyone who supports the aims of the association and commits to working towards them can become a member. Membership is applied for with the board.',
      cta: 'Request membership',
    },
    give: {
      title: 'Give',
      text: 'Our work is carried by membership fees, voluntary donations and offerings. Every gift goes exclusively to the purposes set out in our statutes.',
      holder: 'Account holder',
      iban: 'IBAN',
      bic: 'BIC',
      bank: 'Bank',
      note: 'The association pursues exclusively and directly charitable and benevolent purposes.',
    },
  },
  donate: {
    cta: 'Every gift counts! Donate now!',
    ctaShort: 'Donate now',
    banner: {
      eyebrow: 'Support us',
      title: 'Every gift counts.',
      text: 'Worship services, pastoral care, children’s and youth work, education projects and help in times of need – all of it is carried by voluntary giving. Thank you for standing with us.',
    },
    meta: {
      title: 'Donate – Das Evangelium e.V.',
      description: 'Support the work of Das Evangelium e.V. in Dortmund – via PayPal or bank transfer. Every gift counts.',
    },
    eyebrow: 'Donate',
    title: 'Every gift counts.',
    intro:
      'Our work is funded exclusively by membership fees, voluntary donations and offerings. Every gift goes directly to the purposes set out in our statutes.',
    paypal: {
      title: 'Fast and secure with PayPal',
      text: 'Give in seconds – with your PayPal account, credit card or direct debit. Choose an amount or enter your own.',
      button: 'Donate with PayPal',
      amountLabel: 'Choose an amount',
      customAmount: 'Other amount',
      note: 'You will be redirected to PayPal. There are no additional costs for you.',
    },
    bank: {
      title: 'By bank transfer',
      text: 'For regular giving or larger amounts we recommend a classic bank transfer.',
      reference: 'Reference',
      copy: 'Copy IBAN',
      copied: 'Copied',
    },
    impact: {
      eyebrow: 'What your gift makes possible',
      title: 'Concrete. Local. Worldwide.',
      items: [
        { title: 'Church & worship', text: 'Rooms, equipment and materials for public services and proclamation.' },
        { title: 'Children & youth', text: 'Camps, scouting and programmes on a Christian foundation.' },
        { title: 'Education', text: 'Language courses and general and vocational education projects.' },
        { title: 'Help in need', text: 'Financial support, care and assistance for people in hardship.' },
      ],
    },
    receipt: {
      title: 'Donation receipt',
      text: 'As a registered charity we issue a donation receipt on request. Please include your address in the transfer reference or write to us.',
    },
  },
  books: {
    eyebrow: 'Books',
    title: 'From the pens of our pastors',
    text: 'Books that grew out of church life – to go deeper, to pass on and to give away. Proceeds support the work of the association.',
    viewAll: 'View all books',
    by: 'by',
    pages: 'pages',
    year: 'Published',
    language: 'Language',
    buy: 'Buy now',
    order: 'Order by e-mail',
    orderSubject: 'Book order',
    soon: 'Coming soon',
    meta: {
      title: 'Books – Das Evangelium e.V.',
      description: 'Books by the pastors of Das Evangelium e.V. – foundations of faith, devotions and church planting. Order directly online.',
    },
    pageEyebrow: 'Books',
    pageTitle: 'Read what moves us.',
    pageIntro:
      'Our pastors write what they preach: rooted in Scripture, close to everyday life and encouraging. Every book can be ordered directly or picked up after the service.',
    shippingNote: 'Shipping within Germany. Pick-up after the service is free of charge.',
    featured: 'New release',
  },
  footer: {
    tagline: 'Spreading the full Gospel of Jesus Christ – in word and deed.',
    donate: 'Donate',
    navigation: 'Navigation',
    legal: 'Legal',
    contact: 'Contact',
    language: 'Language',
    register: 'Registered in the register of associations, Dortmund District Court',
    rights: 'All rights reserved.',
    imprint: 'Imprint',
    privacy: 'Privacy',
    statutes: 'Statutes',
  },
  about: {
    meta: {
      title: 'About us – Das Evangelium e.V.',
      description: 'Foundation, mission, purposes and governing bodies of Das Evangelium e.V. in Dortmund.',
    },
    eyebrow: 'About us',
    title: 'A church that confesses Jesus Christ',
    intro:
      'Das Evangelium e.V. is an evangelical church in Dortmund. The Bible is the foundation of all our thinking and acting. Our task is to spread the full Gospel of Jesus Christ, whom we confess as Lord and Saviour of the world.',
    foundation: {
      eyebrow: 'Foundation',
      title: 'The Bible as our foundation',
      text: 'Everything we believe, teach and do is grounded in Holy Scripture. It shapes our services, our pastoral care and our life together – and it is the standard by which we let ourselves be measured.',
    },
    purposes: {
      eyebrow: 'Purposes',
      title: 'What we exist for',
      text: 'The association pursues exclusively and directly charitable and benevolent purposes within the meaning of the German Fiscal Code.',
      items: [
        {
          title: 'Promotion of religion',
          text: 'Worship services, talks, pastoral care, children and youth work, marriage and family counselling, mission at home and abroad.',
        },
        {
          title: 'Promotion of education and training',
          text: 'Language courses for young people and adults, general education projects, vocational training and further education, including student support.',
        },
        {
          title: 'Benevolent purposes',
          text: 'Financial support in emergencies as well as care and help for people who depend on others due to illness, age or hardship.',
        },
      ],
    },
    organs: {
      eyebrow: 'Governing bodies',
      title: 'How we are organised',
      text: 'The association conducts its affairs through the board and the general assembly. The decisive spiritual impulses come from the board.',
      boardTitle: 'The board',
      board: [
        { role: 'Chair', text: 'Leads the association and the general assembly.' },
        { role: 'Vice Chair', text: 'Represents the chair when unavailable.' },
        { role: 'General Secretary', text: 'Coordinates planning and administration.' },
        { role: 'Treasurer', text: 'Responsible for proper accounting.' },
      ],
      assemblyTitle: 'The general assembly',
      assemblyText:
        'It meets at least once a year, receives the annual report, elects the board, decides on fees and amendments to the statutes, and appoints honorary members.',
    },
    history: {
      eyebrow: 'History',
      title: 'Our milestones',
      items: [
        { date: '26 Nov 2023', title: 'Adoption of the statutes', text: 'The general assembly adopts the founding statutes of the association.' },
        { date: '28 Mar 2024', title: 'Amendment of the statutes', text: 'The statutes are adopted in an updated version.' },
        { date: 'Dortmund', title: 'Registration', text: 'Entry in the register of associations at the Dortmund District Court.' },
      ],
    },
    cta: { title: 'The statutes in full', text: 'All provisions on purpose, membership, governing bodies and finances.', label: 'Read the statutes' },
  },
  statutes: {
    meta: {
      title: 'Statutes – Das Evangelium e.V.',
      description: 'Statutes of the association Das Evangelium e.V., Dortmund.',
    },
    eyebrow: 'Statutes',
    title: 'Statutes of the association Das Evangelium e.V.',
    intro: 'Adopted by the general assembly on 26 November 2023 and amended on 28 March 2024.',
    languageNote: 'The statutes are legally binding in German only. The original text is shown below.',
    tocTitle: 'Contents',
    closing:
      'Die vorstehende Satzung wurde in der Mitgliederversammlung vom 26.11.2023 verabschiedet und am 28.03.2024 geändert.',
  },
  contact: {
    meta: {
      title: 'Contact – Das Evangelium e.V.',
      description: 'Address, service times and contact details for Das Evangelium e.V. in Dortmund.',
    },
    eyebrow: 'Contact',
    title: 'We look forward to meeting you',
    intro:
      'Do you have questions, would you like to attend a service or talk to someone? Write to us or simply come by.',
    cards: {
      address: 'Address',
      email: 'E-mail',
      phone: 'Phone',
      times: 'Worship service',
    },
    writeUs: 'Send an e-mail',
    call: 'Call us',
    arrival: {
      title: 'Getting here',
      text: 'Our rooms are easy to reach by public transport. Parking is available nearby. If you have questions about getting here, feel free to contact us.',
    },
  },
  imprint: {
    meta: { title: 'Imprint – Das Evangelium e.V.', description: 'Imprint of Das Evangelium e.V.' },
    title: 'Imprint',
    note: 'This legal notice is provided in German, as required by German law.',
  },
  privacy: {
    meta: { title: 'Privacy – Das Evangelium e.V.', description: 'Privacy policy of Das Evangelium e.V.' },
    title: 'Privacy policy',
    note: 'This privacy policy is provided in German, as required by German law.',
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you requested does not exist or has been moved.',
  },
}
