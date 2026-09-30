import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, isLocale, locales } from '@/lib/i18n/config'

const PUBLIC_FILE = /\.(.*)$/

function detectLocale(request: NextRequest) {
  const cookie = request.cookies.get('locale')?.value
  if (cookie && isLocale(cookie)) return cookie

  const header = request.headers.get('accept-language') ?? ''
  const preferred = header
    .split(',')
    .map((part) => part.split(';')[0]?.trim().toLowerCase().slice(0, 2))
    .filter(Boolean)

  for (const lang of preferred) {
    if (lang && isLocale(lang)) return lang
  }
  return defaultLocale
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const firstSegment = pathname.split('/')[1]
  const hasLocale = locales.some((locale) => locale === firstSegment)

  if (hasLocale) {
    const response = NextResponse.next()
    response.cookies.set('locale', firstSegment, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
    return response
  }

  const locale = detectLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url, 307)
}

export const config = {
  matcher: ['/((?!_next|api|images|.*\\..*).*)'],
}
