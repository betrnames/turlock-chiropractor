import { useState, useRef, useEffect } from "react"
import { Menu, X, ShieldCheck } from "lucide-react"

const links = [
  { href: "#directory", label: "Directory" },
  { href: "#news", label: "News" },
  { href: "#/quiz", label: "Pain Quiz" },
  { href: "#/stretches", label: "Stretches" },
  { href: "#faq", label: "FAQ" },
]

function DisclaimerPopup() {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setShow(false)
    }
    if (show) document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [show])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setShow(!show)}
        aria-label="Medical disclaimer"
        className="group relative flex size-8 items-center justify-center rounded-full transition hover:bg-muted"
      >
        <ShieldCheck className="size-4 text-muted-foreground transition group-hover:text-primary" />
        <span className="absolute right-0 top-0 size-2 rounded-full bg-amber-400 animate-pulse" />
      </button>

      {show && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border border-border bg-card p-4 shadow-lg sm:w-96">
          <div className="mb-2 flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary" />
            <p className="text-sm font-semibold">Medical Disclaimer</p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            This website is for informational purposes only and is not a substitute for
            professional medical advice, diagnosis, or treatment. Always seek the advice of a
            qualified healthcare provider. Results may vary and are not guaranteed.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            TurlockChiropractor.com is not affiliated with or endorsed by any chiropractors
            listed on this site.
          </p>
          <div className="mt-3 flex gap-2 text-xs">
            <a href="#/terms" onClick={() => setShow(false)} className="text-primary transition hover:underline">
              Terms of Use
            </a>
            <span className="text-border">|</span>
            <a href="#/privacy" onClick={() => setShow(false)} className="text-primary transition hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#/" className="font-serif text-lg tracking-tight">
          Turlock<span className="text-primary">Chiropractor</span>
        </a>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground transition hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <DisclaimerPopup />
          <a
            href="#/consultation"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Free Consultation
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <DisclaimerPopup />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#/consultation"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            Free Consultation
          </a>
        </div>
      )}
    </nav>
  )
}
