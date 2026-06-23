import { MapPin, Star, Search } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-accent/5 to-background" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <MapPin className="size-3.5" />
            Turlock, CA — Chiropractor Directory
          </div>

          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Find a{" "}
            <span className="text-gradient-sage">Chiropractor</span>{" "}
            Near You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            Compare ratings, read reviews, and book a free consultation
            with chiropractors in Turlock, Modesto, Ceres, and the greater
            Stanislaus County area.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#directory"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-medium text-primary-foreground shadow-md transition hover:bg-primary/90 hover:shadow-lg"
            >
              <Search className="size-4" />
              Browse All Chiropractors
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-6 text-base font-medium transition hover:bg-accent/30"
            >
              Get Matched Free
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="font-medium text-foreground">4.9</span> avg rating
            </div>
            <span className="size-1 rounded-full bg-border" />
            <span><span className="font-medium text-foreground">8+</span> clinics listed</span>
            <span className="size-1 rounded-full bg-border" />
            <span><span className="font-medium text-foreground">188+</span> patient reviews</span>
            <span className="size-1 rounded-full bg-border" />
            <span>Updated June 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}
