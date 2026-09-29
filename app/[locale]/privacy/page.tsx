import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Info } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { siteConfig } from '@/lib/site-config'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return { title: dict.privacy.meta.title, description: dict.privacy.meta.description, robots: { index: false } }
}

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: '1. Verantwortlicher',
    paragraphs: [
      `Verantwortlich für die Datenverarbeitung auf dieser Website ist: ${siteConfig.name}, ${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}, E-Mail: ${siteConfig.email}.`,
    ],
  },
  {
    title: '2. Allgemeine Hinweise',
    paragraphs: [
      'Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).',
    ],
  },
  {
    title: '3. Hosting und Server-Logfiles',
    paragraphs: [
      'Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf unserer Website werden automatisch Informationen in Server-Logfiles gespeichert (u. a. IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit der Anfrage). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Sicherstellung eines störungsfreien Betriebs. Mit Vercel wurde ein Vertrag zur Auftragsverarbeitung geschlossen; die Übermittlung in Drittländer erfolgt auf Grundlage der EU-Standardvertragsklauseln.',
    ],
  },
  {
    title: '4. Kontaktaufnahme',
    paragraphs: [
      'Wenn Sie per E-Mail oder Telefon mit uns Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage). Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
    ],
  },
  {
    title: '5. Cookies',
    paragraphs: [
      'Diese Website verwendet lediglich ein technisch notwendiges Cookie zur Speicherung Ihrer Sprachauswahl. Es werden keine Tracking- oder Marketing-Cookies eingesetzt.',
    ],
  },
  {
    title: '6. Externe Dienste',
    paragraphs: [
      'Beim Klick auf „Route planen“ werden Sie zu Google Maps (Google Ireland Limited) weitergeleitet. Erst mit dem Aufruf werden Daten an Google übermittelt. Weitere Informationen finden Sie in der Datenschutzerklärung von Google. Schriftarten werden lokal von unserem Server ausgeliefert; es erfolgt keine Verbindung zu Google Fonts.',
    ],
  },
  {
    title: '7. Ihre Rechte',
    paragraphs: [
      'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch (Art. 21 DSGVO). Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, z. B. bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.',
    ],
  },
  {
    title: '8. Aktualität',
    paragraphs: ['Diese Datenschutzerklärung wird bei Bedarf angepasst. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.'],
  },
]

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)

  return (
    <>
      <PageHero eyebrow={dict.footer.legal} title={dict.privacy.title} compact />
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl">
          {dict.privacy.note && (
            <p className="mb-10 flex gap-3 rounded-2xl bg-secondary p-4 text-sm leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{dict.privacy.note}</span>
            </p>
          )}
          <div lang="de" className="flex flex-col gap-10 leading-relaxed text-foreground/85">
            {sections.map((s) => (
              <section key={s.title} className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">{s.title}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-pretty">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
