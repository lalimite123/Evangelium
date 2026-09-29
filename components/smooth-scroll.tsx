'use client'

import { ReactLenis } from 'lenis/react'
import { useReducedMotion } from 'motion/react'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <>{children}</>

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
        anchors: { offset: -88 },
      }}
    >
      {children}
    </ReactLenis>
  )
}
