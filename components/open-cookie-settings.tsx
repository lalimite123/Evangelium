'use client'

import { Cookie } from 'lucide-react'

type Props = { label: string; className?: string }

export function OpenCookieSettings({ label, className }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const evt = new CustomEvent('openCookieSettings')
    try { window.dispatchEvent(evt) } catch { /* noop */ }
    try { document.dispatchEvent(evt) } catch { /* noop */ }
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      <span className="inline-flex items-center gap-1.5">
        <Cookie className="size-3.5" aria-hidden />
        {label}
      </span>
    </button>
  )
}
