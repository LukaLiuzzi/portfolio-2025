import { RefObject, useEffect, useState } from "react"

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(
  elementRef: RefObject<HTMLElement | SVGElement | null>
): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      setMousePosition({ x, y })
    }

    // Attach the event listener to the window to ensure we catch all mouse movements
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [elementRef])

  return mousePosition
}
