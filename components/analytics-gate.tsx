'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import {
  CONSENT_LOCALSTORAGE_KEY,
  readConsentClient,
  type ConsentState,
} from '@/lib/cookie-consent'
import { siteConfig } from '@/lib/site-config'

export const GA_MEASUREMENT_ID = siteConfig.analytics?.ga4MeasurementId

type Props = { initial: ConsentState | null }

export function AnalyticsGate({ initial }: Props) {
  const [consent, setConsent] = useState<ConsentState | null>(initial)

  useEffect(() => {
    if (consent) return
    const read = readConsentClient()
    if (read) setConsent(read)
  }, [consent])

  useEffect(() => {
    const onChange = (e: Event) => {
      const detail = (e as unknown as CustomEvent<ConsentState>).detail
      if (detail) setConsent(detail)
    }
    const onStorage = (e: StorageEvent) => {
      if (e.key !== CONSENT_LOCALSTORAGE_KEY || !e.newValue) return
      try {
        const parsed = JSON.parse(e.newValue) as unknown
        if (parsed && typeof parsed === 'object' && 'categories' in (parsed as object)) {
          setConsent(parsed as ConsentState)
        }
      } catch {
        // noop
      }
    }
    window.addEventListener('cookieConsentChanged', onChange as EventListener)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('cookieConsentChanged', onChange as EventListener)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  if (!GA_MEASUREMENT_ID) return null
  if (!consent || !consent.categories.statistics) return null

  return (
    <>
      <Script
        id="ga-gtm-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: ${consent.categories.marketing ? "'granted'" : "'denied'"},
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500,
});
gtag('set', 'ads_data_redaction', true);
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  anonymize_ip: true,
  page_path: window.location.pathname + window.location.hash,
});
`,
        }}
      />
      <Script
        id="ga-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  )
}
