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
  return { title: dict.imprint.meta.title, description: dict.imprint.meta.description, robots: { index: false } }
}

export default async function ImprintPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)

  return (
    <>
      <PageHero eyebrow={dict.footer.legal} title={dict.imprint.title} compact />
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl">
          {dict.imprint.note && (
            <p className="mb-10 flex gap-3 rounded-2xl bg-secondary p-4 text-sm leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{dict.imprint.note}</span>
            </p>
          )}
          <div lang="de" className="flex flex-col gap-10 leading-relaxed text-foreground/85">
            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Angaben gemäß § 5 DDG</h2>
              <address className="not-italic">
                {siteConfig.name}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
                <br />
                {siteConfig.address.country}
              </address>
            </section>
            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Vertreten durch</h2>
              <p>
                Vorsitzende/r: {siteConfig.board.chair}
                <br />
                Stellvertretende/r Vorsitzende/r: {siteConfig.board.viceChair}
              </p>
              <p className="text-sm text-muted-foreground">
                Der Vorsitzende und der stellvertretende Vorsitzende sind gesetzliche Vertreter im Sinne des § 26 BGB und einzeln vertretungsbefugt.
              </p>
            </section>
            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Kontakt</h2>
              <p>
                Telefon: <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="underline underline-offset-4">{siteConfig.phone}</a>
                <br />
                E-Mail: <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">{siteConfig.email}</a>
              </p>
            </section>
            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Registereintrag</h2>
              <p>
                Eintragung im Vereinsregister.
                <br />
                Registergericht: {siteConfig.register.court}
                <br />
                Registernummer: {siteConfig.register.number}
              </p>
            </section>
            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>
                {siteConfig.board.chair}
                <br />
                {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
              </p>
            </section>
            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Haftung für Inhalte</h2>
              <p className="text-pretty">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>
            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Haftung für Links</h2>
              <p className="text-pretty">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>
            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">Urheberrecht</h2>
              <p className="text-pretty">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
