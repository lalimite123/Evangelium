import { NotFoundShell, getNotFoundDictionary } from '../_not-found-shared'
import { isLocale, defaultLocale, type Locale } from '@/lib/i18n/config'

type Props = {
  params?: Promise<{ locale?: string }> | { locale?: string }
}

export default async function NotFound({ params }: Props) {
  let paramsLocale: string | undefined
  try {
    const resolved = (await Promise.resolve(params)) as { locale?: string } | undefined
    paramsLocale = resolved?.locale
  } catch {
    // noop
  }
  let locale: Locale = defaultLocale
  if (typeof paramsLocale === 'string') {
    const candidate = paramsLocale.toLowerCase().slice(0, 2)
    if (isLocale(candidate)) locale = candidate
  }
  const payload = await getNotFoundDictionary(locale)
  return <NotFoundShell {...payload} />
}
