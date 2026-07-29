import { MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg">
                Turlock<span className="text-primary">Chiropractor</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Directory
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The most complete directory of chiropractors in Turlock,
              California. Find ratings, reviews, and book free consultations.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              Turlock, CA — Stanislaus County
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium">Quick Links</h4>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <a href="#directory" className="block transition hover:text-foreground">Chiropractor Directory</a>
              <a href="#news" className="block transition hover:text-foreground">News & Trends</a>
              <a href="#faq" className="block transition hover:text-foreground">FAQ</a>
              <a href="#/consultation" className="block transition hover:text-foreground">Free Consultation</a>
              <a href="/llms.txt" className="block transition hover:text-foreground">llms.txt</a>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 font-medium">Tools</h4>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <a href="#/quiz" className="block transition hover:text-foreground">Pain Assessment Quiz</a>
              <a href="#/stretches" className="block transition hover:text-foreground">Stretch Library</a>
              <a href="#/consultation" className="block transition hover:text-foreground">Consultation Tool</a>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 font-medium">Legal</h4>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <a href="#/privacy" className="block transition hover:text-foreground">Privacy Policy</a>
              <a href="#/terms" className="block transition hover:text-foreground">Terms of Use</a>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            TurlockChiropractor.com is an independent directory maintained as a free public resource for Turlock residents seeking chiropractic care.
            Not affiliated with or endorsed by any chiropractors listed on this site.
            This website is for informational purposes only and is not a substitute for professional medical advice. Results are not guaranteed.
            Directory last updated: July 2026.
          </p>
          <div className="mt-4 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
            <p>&copy; {new Date().getFullYear()} TurlockChiropractor.com — All rights reserved.</p>
            <a href="mailto:contact@turlockchiropractor.com" className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-primary">
              <Mail className="size-3.5" />
              contact@turlockchiropractor.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-3 text-center">
        <p className="text-[11px] text-muted-foreground/50">
          This domain and website may be available for acquisition.{" "}
          <a
            href="mailto:contact@turlockchiropractor.com?subject=Inquiry%20about%20TurlockChiropractor.com"
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Inquire here
          </a>
        </p>
      </div>
    </footer>
  )
}
