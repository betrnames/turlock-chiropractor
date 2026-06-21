import { useState, useEffect } from "react"

export function useRoute() {
  const [path, setPath] = useState(window.location.hash.slice(1) || "/")

  useEffect(() => {
    function onHash() {
      const hash = window.location.hash.slice(1) || "/"
      setPath(hash)
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return path
}
