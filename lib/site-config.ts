/**
 * Single place to maintain the association's public details.
 * Values marked "TODO" are placeholders — replace them with the real data.
 */
export const siteConfig = {
  name: 'Das Evangelium e.V.',
  shortName: 'Das Evangelium',
  city: 'Dortmund',
  url: 'https://das-evangelium.example', // TODO: real domain
  email: 'info@das-evangelium.de', // TODO: real e-mail
  phone: '+49 231 000000', // TODO: real phone number
  address: {
    street: 'Musterstraße 1', // TODO: real street
    zip: '44135', // TODO: real ZIP
    city: 'Dortmund',
    country: 'Deutschland',
  },
  register: {
    court: 'Amtsgericht Dortmund',
    number: 'VR 00000', // TODO: real register number
  },
  bank: {
    holder: 'Das Evangelium e.V.',
    iban: 'DE00 0000 0000 0000 0000 00', // TODO: real IBAN
    bic: 'XXXXDEXXXXX', // TODO: real BIC
    bankName: 'Bank', // TODO: real bank name
  },
  donate: {
    /**
     * PayPal: either a hosted "Donate" button ID from paypal.com/donate/buttons
     * or a PayPal.Me link. The hosted button takes precedence when set.
     */
    paypalHostedButtonId: '', // TODO: e.g. 'ABCDEFGHIJKLM'
    paypalMeUrl: 'https://paypal.me/dasevangelium', // TODO: real PayPal.Me link
    /** Suggested one-time amounts (EUR) shown as quick picks. */
    suggestedAmounts: [10, 25, 50, 100],
    /** Reference text donors should use for bank transfers. */
    transferReference: 'Spende Das Evangelium e.V.',
  },
  board: {
    chair: 'N. N.', // TODO: Vorsitzende(r)
    viceChair: 'N. N.', // TODO: stellvertretende(r) Vorsitzende(r)
  },
  social: {
    instagram: 'https://instagram.com', // TODO
    youtube: 'https://youtube.com', // TODO
    facebook: 'https://facebook.com', // TODO
  },
  founded: '26.11.2023',
  amended: '28.03.2024',
} as const
