import type { Dictionary } from '../types'

export const fr: Dictionary = {
  meta: {
    title: 'Das Evangelium e.V. – Église évangélique à Dortmund',
    description:
      'Das Evangelium e.V. est une église évangélique à Dortmund, en Allemagne. Cultes, accompagnement spirituel, travail avec les enfants et les jeunes, formation et entraide – sur le fondement de la Bible.',
  },
  common: {
    learnMore: 'En savoir plus',
    readMore: 'Lire la suite',
    backHome: "Retour à l'accueil",
    skipToContent: 'Aller au contenu',
    languageLabel: 'Langue',
    scroll: 'Défiler',
    placeholderNote: 'Les informations sont en cours de mise à jour.',
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    ministries: 'Nos activités',
    statutes: 'Statuts',
    contact: 'Contact',
    books: 'Livres',
    donate: 'Faire un don',
    cta: 'Nous rendre visite',
    menu: 'Ouvrir le menu',
    close: 'Fermer le menu',
  },
  hero: {
    slides: [
      {
        eyebrow: 'Église évangélique · Dortmund',
        titleTop: 'Une bonne nouvelle',
        titleBottom: 'pour tous.',
        text: "Nous confessons Jésus-Christ comme Seigneur et Sauveur du monde – et nous vous invitons à découvrir l'Évangile tout entier avec nous. Au cœur de Dortmund, ouverts à chacun.",
        primary: { label: 'Assister à un culte', route: 'contact' },
        secondary: { label: 'Qui nous sommes', route: 'about' },
      },
      {
        eyebrow: 'Le fondement de notre pensée et de notre action',
        titleTop: 'Enracinés',
        titleBottom: 'dans la Parole.',
        text: "La Bible est le fondement de tout ce que notre église pense et fait. Par les cultes, les conférences et les petits groupes, nous transmettons l'enseignement chrétien – de manière claire et proche du quotidien.",
        primary: { label: 'Nos activités', route: 'home', hash: 'arbeit' },
        secondary: { label: 'À propos', route: 'about' },
      },
      {
        eyebrow: 'Un amour du prochain concret',
        titleTop: "L'amour",
        titleBottom: 'en action.',
        text: "Accompagnement, formation, soutien dans la détresse : dans la mesure de nos moyens, nous voulons être présents là où l'on a besoin de nous – à Dortmund et dans le monde.",
        primary: { label: "S'engager", route: 'home', hash: 'mitmachen' },
        secondary: { label: 'Contact', route: 'contact' },
      },
    ],
    prev: 'Diapositive précédente',
    next: 'Diapositive suivante',
    goTo: 'Aller à la diapositive',
  },
  intro: {
    eyebrow: 'Qui nous sommes',
    title: 'Une église avec une mission claire',
    text: "Das Evangelium e.V. est une association enregistrée et reconnue d'intérêt général, dont le siège est à Dortmund. Notre mission est de répandre l'Évangile tout entier de Jésus-Christ – en paroles et en actes. Trois axes façonnent notre travail.",
    pillars: [
      {
        title: 'Proclamation',
        text: "Cultes publics, conférences et médias numériques qui rendent l'enseignement chrétien accessible.",
      },
      {
        title: 'Formation',
        text: 'Cours de langue, culture générale et formation professionnelle pour les jeunes et les adultes.',
      },
      {
        title: 'Amour du prochain',
        text: 'Accompagnement spirituel, soutien et aide financière aux personnes dans le besoin, malades ou âgées.',
      },
    ],
    cta: 'En savoir plus sur nous',
  },
  ministries: {
    eyebrow: 'Nos activités',
    title: 'Ce que nous faisons',
    text: 'Les buts de nos statuts prennent forme – dans des propositions pour chaque étape de la vie.',
    prev: 'Précédent',
    next: 'Suivant',
    items: [
      {
        title: 'Culte & Enseignement',
        text: "Cultes publics, conférences et médias pour transmettre l'enseignement chrétien.",
        image: '/images/hero-worship.png',
      },
      {
        title: 'Accompagnement & Prière',
        text: "Prière, accompagnement biblique et conseil de vie – des services pour le bien-être de l'âme.",
        image: '/images/prayer.png',
      },
      {
        title: 'Enfants & Jeunesse',
        text: 'Travail avec les enfants et les jeunes sur un fondement chrétien, y compris camps et scoutisme.',
        image: '/images/youth.png',
      },
      {
        title: 'Couple & Famille',
        text: 'Entretiens de thérapie conjugale et familiale ainsi que des rencontres qui renforcent les relations.',
        image: '/images/family.png',
      },
      {
        title: 'Formation & Langues',
        text: 'Cours de langue pour jeunes et adultes, culture générale, formation professionnelle et formation continue.',
        image: '/images/education.png',
      },
      {
        title: 'Diaconie & Mission',
        text: "Accompagnement et aide aux personnes dans le besoin, malades ou âgées – ainsi que la mission intérieure et extérieure.",
        image: '/images/care.png',
      },
    ],
  },
  verse: {
    text: "Car je n'ai point honte de l'Évangile : c'est la puissance de Dieu pour le salut de quiconque croit.",
    reference: 'Romains 1,16',
  },
  roots: {
    eyebrow: 'Dortmund & le monde',
    title: 'Enracinés à Dortmund, reliés au monde',
    text: "Notre siège est à Dortmund – c'est ici que nous célébrons le culte et vivons la communauté. En même temps, nous motivons et soutenons le travail missionnaire en Allemagne et à l'étranger.",
    cardDortmund: {
      label: 'Notre ville',
      title: 'Dortmund',
      text: "Inscrite au registre des associations du tribunal d'instance de Dortmund.",
    },
    cardMission: {
      label: 'Mission',
      title: "En Allemagne et à l'étranger",
      text: "Nous soutenons des projets missionnaires et l'amour concret du prochain au-delà des frontières.",
    },
    cta: 'Nous contacter',
  },
  visit: {
    eyebrow: 'Nous rendre visite',
    title: 'Bienvenue – chaque dimanche',
    text: "Que vous entriez dans une église pour la première fois ou que vous croyiez depuis longtemps : il y a une place pour vous ici. Venez simplement.",
    timesTitle: 'Rendez-vous réguliers',
    times: [
      { label: 'Culte', day: 'Dimanche', time: '10h30' },
      { label: 'Soirée de prière', day: 'Mercredi', time: '19h00' },
      { label: 'Étude biblique', day: 'Vendredi', time: '19h00' },
    ],
    timesNote: 'Les horaires peuvent varier – merci de nous contacter.',
    addressTitle: 'Adresse',
    directions: "Calculer l'itinéraire",
  },
  join: {
    eyebrow: "S'engager",
    title: 'Aller plus loin ensemble',
    member: {
      title: 'Devenir membre',
      text: "Peut devenir membre toute personne qui soutient les buts de l'association et s'engage à contribuer à leur réalisation. La demande d'adhésion est adressée au conseil.",
      cta: "Demander l'adhésion",
    },
    give: {
      title: 'Faire un don',
      text: "Notre travail est porté par les cotisations, les dons volontaires et les collectes. Chaque don est exclusivement affecté aux buts définis par nos statuts.",
      holder: 'Titulaire du compte',
      iban: 'IBAN',
      bic: 'BIC',
      bank: 'Banque',
      note: "L'association poursuit exclusivement et directement des buts d'intérêt général et de bienfaisance.",
    },
  },
  donate: {
    cta: 'Chaque don compte ! Faire un don',
    ctaShort: 'Faire un don',
    banner: {
      eyebrow: 'Nous soutenir',
      title: 'Chaque don compte.',
      text: "Cultes, accompagnement, travail avec les enfants et les jeunes, projets éducatifs et aide dans l'urgence – tout cela repose sur des dons volontaires. Merci de porter cette œuvre avec nous.",
    },
    meta: {
      title: 'Faire un don – Das Evangelium e.V.',
      description: "Soutenez l'œuvre de Das Evangelium e.V. à Dortmund – par PayPal ou virement bancaire. Chaque don compte.",
    },
    eyebrow: 'Faire un don',
    title: 'Chaque don compte.',
    intro:
      "Notre travail est financé exclusivement par les cotisations, les dons volontaires et les collectes. Chaque don est directement affecté aux buts définis par nos statuts.",
    paypal: {
      title: 'Rapide et sécurisé avec PayPal',
      text: 'Donnez en quelques secondes – avec votre compte PayPal, une carte bancaire ou un prélèvement. Choisissez un montant ou saisissez le vôtre.',
      button: 'Donner avec PayPal',
      amountLabel: 'Choisir un montant',
      customAmount: 'Autre montant',
      note: "Vous serez redirigé vers PayPal. Aucun frais supplémentaire pour vous.",
    },
    bank: {
      title: 'Par virement bancaire',
      text: 'Pour un soutien régulier ou des montants plus importants, nous recommandons le virement bancaire classique.',
      reference: 'Motif du virement',
      copy: "Copier l'IBAN",
      copied: 'Copié',
    },
    impact: {
      eyebrow: 'Ce que votre don rend possible',
      title: 'Concret. Local. Mondial.',
      items: [
        { title: 'Église & culte', text: 'Locaux, équipement et matériel pour les rencontres publiques et la proclamation.' },
        { title: 'Enfants & jeunes', text: 'Camps, scoutisme et activités sur une base chrétienne.' },
        { title: 'Éducation', text: "Cours de langue et projets de formation générale et professionnelle." },
        { title: "Aide dans l'urgence", text: 'Soutien financier, soins et accompagnement des personnes en détresse.' },
      ],
    },
    receipt: {
      title: 'Reçu fiscal',
      text: "En tant qu'association reconnue d'utilité publique, nous délivrons un reçu de don sur demande. Indiquez votre adresse dans le motif du virement ou écrivez-nous.",
    },
  },
  books: {
    eyebrow: 'Livres',
    title: 'De la plume de nos pasteurs',
    text: "Des livres nés de la vie de l'Église – pour approfondir, transmettre et offrir. Les recettes soutiennent l'œuvre de l'association.",
    viewAll: 'Voir tous les livres',
    by: 'par',
    pages: 'pages',
    year: 'Paru en',
    language: 'Langue',
    buy: 'Acheter',
    order: 'Commander par e-mail',
    orderSubject: 'Commande de livre',
    soon: 'Bientôt disponible',
    meta: {
      title: 'Livres – Das Evangelium e.V.',
      description: "Les livres des pasteurs de Das Evangelium e.V. – fondements de la foi, méditations et implantation d'Église. Commandez directement en ligne.",
    },
    pageEyebrow: 'Livres',
    pageTitle: 'Lire ce qui nous anime.',
    pageIntro:
      "Nos pasteurs écrivent ce qu'ils prêchent : ancré dans l'Écriture, proche du quotidien et encourageant. Chaque livre peut être commandé directement ou retiré après le culte.",
    shippingNote: "Expédition en Allemagne. Le retrait après le culte est gratuit.",
    featured: 'Nouveauté',
  },
  footer: {
    tagline: "Répandre l'Évangile tout entier de Jésus-Christ – en paroles et en actes.",
    donate: 'Faire un don',
    navigation: 'Navigation',
    legal: 'Mentions légales',
    contact: 'Contact',
    language: 'Langue',
    register: "Inscrite au registre des associations, tribunal d'instance de Dortmund",
    rights: 'Tous droits réservés.',
    imprint: 'Impressum',
    privacy: 'Confidentialité',
    statutes: 'Statuts',
  },
  about: {
    meta: {
      title: 'À propos – Das Evangelium e.V.',
      description: "Fondement, mission, buts et organes de l'association Das Evangelium e.V. à Dortmund.",
    },
    eyebrow: 'À propos',
    title: 'Une église qui confesse Jésus-Christ',
    intro:
      "Das Evangelium e.V. est une église évangélique à Dortmund. La Bible est le fondement de toute notre pensée et de toute notre action. Notre mission est de répandre l'Évangile tout entier de Jésus-Christ, que nous confessons comme Seigneur et Sauveur du monde.",
    foundation: {
      eyebrow: 'Fondement',
      title: 'La Bible comme fondement',
      text: "Tout ce que nous croyons, enseignons et faisons est fondé sur l'Écriture sainte. Elle façonne nos cultes, notre accompagnement et notre vie commune – et elle est la mesure à laquelle nous acceptons d'être évalués.",
    },
    purposes: {
      eyebrow: 'Buts',
      title: 'Notre raison d\u2019être',
      text: "L'association poursuit exclusivement et directement des buts d'intérêt général et de bienfaisance au sens du code fiscal allemand.",
      items: [
        {
          title: 'Promotion de la religion',
          text: "Cultes, conférences, accompagnement spirituel, travail avec les enfants et les jeunes, conseil conjugal et familial, mission intérieure et extérieure.",
        },
        {
          title: "Promotion de l'éducation et de la formation",
          text: "Cours de langue pour jeunes et adultes, projets de culture générale, formation professionnelle et continue, y compris l'aide aux étudiants.",
        },
        {
          title: 'Buts de bienfaisance',
          text: "Soutien financier en cas d'urgence ainsi qu'accompagnement, soins et aide aux personnes dépendantes en raison d'une maladie, de l'âge ou d'une situation de détresse.",
        },
      ],
    },
    organs: {
      eyebrow: 'Organes',
      title: 'Comment nous sommes organisés',
      text: "L'association règle ses affaires par le conseil et l'assemblée générale. Les impulsions spirituelles décisives émanent du conseil.",
      boardTitle: 'Le conseil',
      board: [
        { role: 'Président(e)', text: "Dirige l'association et l'assemblée générale." },
        { role: 'Vice-président(e)', text: 'Représente la présidence en cas d\u2019empêchement.' },
        { role: 'Secrétaire général(e)', text: "Coordonne la planification et l'administration." },
        { role: 'Trésorier(ère)', text: 'Responsable de la tenue régulière des comptes.' },
      ],
      assemblyTitle: "L'assemblée générale",
      assemblyText:
        "Elle se réunit au moins une fois par an, reçoit le rapport annuel, élit le conseil, décide des cotisations et des modifications des statuts et nomme les membres d'honneur.",
    },
    history: {
      eyebrow: 'Histoire',
      title: 'Nos étapes',
      items: [
        { date: '26.11.2023', title: 'Adoption des statuts', text: "L'assemblée générale adopte les statuts fondateurs de l'association." },
        { date: '28.03.2024', title: 'Modification des statuts', text: 'Les statuts sont adoptés dans une version mise à jour.' },
        { date: 'Dortmund', title: 'Enregistrement', text: "Inscription au registre des associations du tribunal d'instance de Dortmund." },
      ],
    },
    cta: { title: 'Les statuts dans leur intégralité', text: "Toutes les dispositions concernant le but, l'adhésion, les organes et les finances.", label: 'Lire les statuts' },
  },
  statutes: {
    meta: {
      title: 'Statuts – Das Evangelium e.V.',
      description: "Statuts de l'association Das Evangelium e.V., Dortmund.",
    },
    eyebrow: 'Statuts',
    title: "Statuts de l'association Das Evangelium e.V.",
    intro: "Adoptés par l'assemblée générale du 26.11.2023 et modifiés le 28.03.2024.",
    languageNote: 'Seule la version allemande des statuts fait foi. Le texte original est reproduit ci-dessous.',
    tocTitle: 'Sommaire',
    closing:
      'Die vorstehende Satzung wurde in der Mitgliederversammlung vom 26.11.2023 verabschiedet und am 28.03.2024 geändert.',
  },
  contact: {
    meta: {
      title: 'Contact – Das Evangelium e.V.',
      description: 'Adresse, horaires des cultes et coordonnées de Das Evangelium e.V. à Dortmund.',
    },
    eyebrow: 'Contact',
    title: 'Au plaisir de vous rencontrer',
    intro:
      "Vous avez des questions, vous souhaitez assister à un culte ou parler avec quelqu'un ? Écrivez-nous ou passez simplement nous voir.",
    cards: {
      address: 'Adresse',
      email: 'E-mail',
      phone: 'Téléphone',
      times: 'Culte',
    },
    writeUs: 'Écrire un e-mail',
    call: 'Appeler',
    arrival: {
      title: 'Accès',
      text: "Nos locaux sont facilement accessibles en transports en commun. Des places de stationnement sont disponibles à proximité. Pour toute question d'accès, n'hésitez pas à nous contacter.",
    },
  },
  imprint: {
    meta: { title: 'Impressum – Das Evangelium e.V.', description: 'Mentions légales de Das Evangelium e.V.' },
    title: 'Impressum',
    note: "Ces mentions légales sont fournies en allemand, conformément à la législation allemande.",
  },
  privacy: {
    meta: { title: 'Confidentialité – Das Evangelium e.V.', description: 'Politique de confidentialité de Das Evangelium e.V.' },
    title: 'Politique de confidentialité',
    note: 'Cette politique de confidentialité est fournie en allemand, conformément à la législation allemande.',
  },
  notFound: {
    title: 'Page introuvable',
    text: "La page demandée n'existe pas ou a été déplacée.",
  },
}
