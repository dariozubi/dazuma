import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  let ro;
  // const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => {
    ro = new ResizeObserver(([entry]) => set(entry.contentRect))
    ro.observe(ref.current)
    return () => ro.disconnect
  }, [])
  return [{ ref }, bounds]
}
