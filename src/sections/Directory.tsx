import { useState } from "react"
import { Star, MapPin, Phone, Clock, ExternalLink, ChevronDown, Filter } from "lucide-react"
import { chiropractors, type Chiropractor } from "../data/chiropractors"

const specialtyFilters = ["All", "Sports Injuries", "Auto Accidents", "Family Care", "Walk-In", "Bilingual (Spanish)"]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-border"}`}
        />
      ))}
    </div>
  )
}

function ChiroCard({ chiro, index }: { chiro: Chiropractor; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="p-4">
        <h3 className="font-serif text-base font-medium leading-snug">{chiro.name}</h3>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="text-sm font-semibold">{chiro.rating}</span>
          <StarRating rating={chiro.rating} />
          <span className="text-xs text-muted-foreground">({chiro.reviewCount})</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {chiro.specialties.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full border border-primary/20 bg-primary/8 px-2 py-0.5 text-[10px] font-medium text-primary"
            >
              {s}
            </span>
          ))}
          {chiro.specialties.length > 3 && (
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
              +{chiro.specialties.length - 3}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-center gap-1.5 border-t border-border/60 py-2 text-xs text-muted-foreground transition hover:bg-accent/20 hover:text-foreground"
      >
        {expanded ? "Less" : "Details"}
        <ChevronDown className={`size-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`grid transition-all duration-200 ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="space-y-2 border-t border-border/60 p-4 text-sm">
            <p className="text-xs text-muted-foreground">{chiro.doctor}</p>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <span className="text-xs">{chiro.address}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="size-3.5 shrink-0 text-primary" />
              <a href={`tel:${chiro.phone.replace(/\D/g, "")}`} className="text-xs transition hover:text-foreground">
                {chiro.phone}
              </a>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Clock className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <span className="text-xs">{chiro.hours}</span>
            </div>
            <div className="flex gap-2 pt-1">
              <a
                href="#contact"
                className="flex-1 rounded-lg bg-primary py-2 text-center text-xs font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Free Consultation
              </a>
              {chiro.website && (
                <a
                  href={chiro.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg border border-border px-2.5 transition hover:bg-accent/30"
                  aria-label={`Visit ${chiro.name} website`}
                >
                  <ExternalLink className="size-3.5 text-muted-foreground" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Directory() {
  const [filter, setFilter] = useState("All")
  const [sortBy, setSortBy] = useState<"rating" | "reviews">("rating")

  const filtered = chiropractors
    .filter((c) => filter === "All" || c.specialties.some((s) => s === filter))
    .sort((a, b) => (sortBy === "rating" ? b.rating - a.rating : b.reviewCount - a.reviewCount))

  return (
    <section id="directory" className="scroll-mt-20 border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Turlock Chiropractor Directory
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Every licensed chiropractor in Turlock, CA — with real ratings,
            specialties, and contact info.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <Filter className="mt-1.5 size-4 text-muted-foreground" />
            {specialtyFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1 text-sm transition ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:bg-accent/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-2 text-sm">
            <button
              onClick={() => setSortBy("rating")}
              className={`rounded-lg px-3 py-1 transition ${sortBy === "rating" ? "bg-secondary font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              Top Rated
            </button>
            <button
              onClick={() => setSortBy("reviews")}
              className={`rounded-lg px-3 py-1 transition ${sortBy === "reviews" ? "bg-secondary font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              Most Reviews
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((c, i) => (
            <ChiroCard key={c.id} chiro={c} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No chiropractors match that filter.{" "}
            <button onClick={() => setFilter("All")} className="text-primary underline">
              View all
            </button>
          </p>
        )}
      </div>
    </section>
  )
}
