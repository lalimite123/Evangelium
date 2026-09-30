import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Script from 'next/script'
import { isLocale, localePath, defaultLocale, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { siteConfig } from '@/lib/site-config'

export function NotFoundShell({
  locale,
  title,
  text,
  backLabel,
}: {
  locale: Locale
  title: string
  text: string
  backLabel: string
}) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="html-lang-fallback" strategy="beforeInteractive">
          {`document.documentElement.lang="${locale}";`}
        </Script>
      </head>
      <body
        style={{
          margin: 0,
          background: '#0f2a19',
          color: '#eef3ea',
          minHeight: '100vh',
          fontFamily:
            'var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        }}
      >
        <section
          lang={locale}
          style={{ minHeight: '70vh', paddingTop: '6rem', display: 'flex', alignItems: 'center' }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 1440,
              marginInline: 'auto',
              paddingInline: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1.5rem',
            }}
          >
            <span
              style={{
                color: '#f2c230',
                fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                fontSize: 14,
              }}
            >
              404
            </span>
            <h1
              style={{
                fontFamily:
                  'var(--font-outfit), var(--font-inter), system-ui, sans-serif',
                letterSpacing: '-0.04em',
                fontWeight: 700,
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              {title}
            </h1>
            <p style={{ maxWidth: '28rem', opacity: 0.7, margin: 0 }}>{text}</p>
            <Link
              href={localePath(locale)}
              hrefLang={locale}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                borderRadius: 9999,
                background: '#eef3ea',
                color: '#0f2a19',
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              <ArrowLeft aria-hidden style={{ width: 16, height: 16 }} />
              {backLabel}
            </Link>
            <p style={{ marginTop: '3rem', fontSize: 12, opacity: 0.4 }}>
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </section>
      </body>
    </html>
  )
}

export async function getNotFoundDictionary(locale: Locale) {
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale
  const dict = await getDictionary(safeLocale)
  return {
    locale: safeLocale,
    title: dict.notFound.title,
    text: dict.notFound.text,
    backLabel: dict.common.backHome,
  } as const
}
