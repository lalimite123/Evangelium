import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n/config'

// The proxy normally handles locale detection; this is a safety net.
export default function RootPage() {
  redirect(`/${defaultLocale}`)
}
