import { useState, useEffect } from "react"
import {
  ArrowLeft, Monitor, Moon, Heart, Clock, Dumbbell,
  AlertCircle, ChevronDown, ChevronUp,
} from "lucide-react"
import { stretches, wellnessTips } from "../data/stretches"
import { Disclaimer } from "../components/Disclaimer"

const categories = [
  { id: "all", label: "All Stretches" },
  { id: "neck", label: "Neck" },
  { id: "upper-back", label: "Upper Back" },
  { id: "lower-back", label: "Lower Back" },
]

const tipIcons: Record<string, typeof Monitor> = {
  desk: Monitor,
  sleep: Moon,
  habits: Heart,
}

export function StretchLibrary() {
  const [filter, setFilter] = useState("all")
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Stretch & Exercise Library | Turlock Chiropractor"
  }, [])

  const filtered =
    filter === "all" ? stretches : stretches.filter((s) => s.category === filter)

  function toggleExpand(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-5">
        <a
          href="#/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to directory
        </a>

        <div className="mb-2 inline-flex items-center gap-2 text-sm text-primary">
          <Dumbbell className="size-4" />
          Wellness Resources
        </div>
        <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Stretches & <span className="text-gradient-sage">Daily Wellness</span>
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Safe, beginner-friendly stretches and daily tips to support your spinal health. Always
          consult a healthcare provider before starting any new exercise routine.
        </p>

        {/* Wellness Tips */}
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-medium">Daily Wellness Tips</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Desk setup, sleeping positions, and daily habits for a healthier spine.
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {wellnessTips.map((tip) => {
              const Icon = tipIcons[tip.category] || Heart
              return (
                <div
                  key={tip.id}
                  className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-sm"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-medium">{tip.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tip.description}</p>
                  <ul className="mt-4 space-y-2.5">
                    {tip.tips.map((t, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                          {i + 1}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* Stretch Library */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-medium">Stretch Library</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap any stretch to see full step-by-step instructions.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  filter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            {filtered.map((s) => {
              const isOpen = expanded.has(s.id)
              return (
                <div
                  key={s.id}
                  className="rounded-xl border border-border bg-card transition hover:border-primary/40"
                >
                  <button
                    onClick={() => toggleExpand(s.id)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{s.name}</h3>
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-xs capitalize text-secondary-foreground">
                          {s.category.replace("-", " ")}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" /> {s.holdTime}
                        </span>
                        <span>{s.reps}</span>
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="size-4 shrink-0 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-border/60 px-5 pb-5 pt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-2 text-sm font-medium">How to do it:</h4>
                          <ol className="space-y-1.5">
                            {s.steps.map((st, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-sm leading-relaxed text-foreground/90"
                              >
                                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                                  {i + 1}
                                </span>
                                {st}
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div>
                          <h4 className="mb-1 text-sm font-medium">Benefits:</h4>
                          <div className="flex flex-wrap gap-2">
                            {s.benefits.map((b, i) => (
                              <span
                                key={i}
                                className="rounded-full bg-primary/10 px-3 py-0.5 text-xs text-primary"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3">
                          <AlertCircle className="mt-0.5 size-3.5 shrink-0 text-amber-600" />
                          <p className="text-xs text-amber-800">{s.safetyNote}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA + backlinks */}
        <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
          <h3 className="font-serif text-xl font-medium">
            Need professional help with back pain relief?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse our directory of Turlock chiropractors or take our pain assessment quiz.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#/consultation"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Free Consultation
            </a>
            <a
              href="#/quiz"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-5 text-sm font-medium transition hover:bg-accent/30"
            >
              Pain Assessment Quiz
            </a>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href="#/article/chiropractic-whole-person-wellness-2026"
            className="rounded-lg border border-border bg-card p-3 text-sm transition hover:border-primary/40"
          >
            <p className="font-medium">Whole-Person Wellness in Chiropractic Care</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              How modern chiropractors treat back pain holistically
            </p>
          </a>
          <a
            href="#/article/ai-diagnostics-central-valley-chiropractic"
            className="rounded-lg border border-border bg-card p-3 text-sm transition hover:border-primary/40"
          >
            <p className="font-medium">AI-Powered Diagnostics for Back Pain</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              New technology helping Central Valley chiropractors diagnose pain
            </p>
          </a>
        </div>

        <Disclaimer className="mt-8" />
      </div>
    </div>
  )
}
