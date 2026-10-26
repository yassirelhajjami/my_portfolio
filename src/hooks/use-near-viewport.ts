"use client"

import { useEffect, useRef, useState } from "react"

// True once the element comes within `margin` of the viewport; stays true afterwards.
// Used to delay heavy media (video, embeds) until the visitor scrolls near it.
export function useNearViewport<T extends Element>(margin = "400px") {
  const ref = useRef<T>(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || near) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true)
          observer.disconnect()
        }
      },
      { rootMargin: margin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [margin, near])

  return [ref, near] as const
}
