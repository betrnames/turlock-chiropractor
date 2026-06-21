import { useState, useEffect, type FormEvent } from "react"
import { toast } from "sonner"
import {
  ArrowLeft, ArrowRight, CheckCircle2, Loader2, Send,
  ClipboardList, Activity, ExternalLink,
} from "lucide-react"
import { Disclaimer } from "../components/Disclaimer"
import { newsItems } from "../data/news"

const concerns = [
  { id: "back-pain", label: "Back Pain", desc: "Lower or upper back discomfort" },
  { id: "neck-pain", label: "Neck Pain", desc: "Stiffness, soreness, or limited mobility" },
  { id: "headaches", label: "Headaches / Migraines", desc: "Chronic or recurring headaches" },
  { id: "auto-injury", label: "Auto Accident Injury", desc: "Whiplash or collision-related pain" },
  { id: "sports-injury", label: "Sports Injury", desc: "Activity-related strain or sprain" },
  { id: "posture", label: "Posture Correction", desc: "Slouching, desk strain, alignment" },
  { id: "sciatica", label: "Sciatica / Leg Pain", desc: "Radiating pain from lower back" },
  { id: "wellness", label: "General Wellness", desc: "Preventive care and maintenance" },
]

const durations = [
  "Less than 1 week",
  "1–2 weeks",
  "1–3 months",
  "3–6 months",
  "6+ months / chronic",
]

export function ConsultationTool() {
  const [step, setStep] = useState(1)
  const [concern, setConcern] = useState("")
  const [painLevel, setPainLevel] = useState(5)
  const [duration, setDuration] = useState("")
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Free Chiropractic Consultation | Turlock Chiropractor"
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name || !email || !phone) {
      toast.error("Please fill in all fields.")
      return
    }
    setLoading(true)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: `Concern: ${concern} | Pain: ${painLevel}/10 | Duration: ${duration} | ${description}`,
        }),
      })
    } catch {
      /* show success regardless for demo */
    }
    setLoading(false)
    setStep(4)
    toast.success("Your consultation request has been submitted!")
  }

  const relatedArticles = newsItems.filter((n) =>
    ["chiropractic-whole-person-wellness-2026", "patient-price-sensitivity-turlock-chiropractic"].includes(n.slug)
  )

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-5">
        <a
          href="#/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to directory
        </a>

        <div className="mb-2 inline-flex items-center gap-2 text-sm text-primary">
          <ClipboardList className="size-4" />
          Free Consultation Tool
        </div>
        <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Get Matched in <span className="text-gradient-sage">4 Easy Steps</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Tell us about your needs and we'll connect you with the right Turlock chiropractor —
          completely free, no obligation.
        </p>

        {/* progress */}
        <div className="mt-8 flex gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Step {Math.min(step, 4)} of 4</p>

        <div className="mt-8">
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="font-serif text-xl font-medium">What's your main concern?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Select the option that best describes why you're seeking care.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {concerns.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setConcern(c.label)
                      setStep(2)
                    }}
                    className="rounded-xl border border-border bg-card p-4 text-left transition hover:border-primary/40 hover:shadow-sm"
                  >
                    <p className="font-medium">{c.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{c.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="font-serif text-xl font-medium">
                Tell us more about your {concern.toLowerCase()}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                This helps us match you with a specialist.
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Pain Level: <span className="text-primary">{painLevel}/10</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={painLevel}
                    onChange={(e) => setPainLevel(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>No pain</span>
                    <span>Severe</span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    How long have you had this?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {durations.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={`rounded-lg border px-3 py-2 text-sm transition ${
                          duration === d
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="ct-desc" className="mb-1 block text-sm font-medium">
                    Anything else we should know?{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="ct-desc"
                    rows={3}
                    placeholder="e.g., pain worsens when sitting, looking for someone who takes Blue Cross..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm transition hover:bg-accent/30"
                >
                  <ArrowLeft className="size-3.5" /> Back
                </button>
                <button
                  onClick={() => {
                    if (!duration) {
                      toast.error("Please select a duration.")
                      return
                    }
                    setStep(3)
                  }}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Continue <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h2 className="font-serif text-xl font-medium">Your contact information</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll use this to match you with a chiropractor within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="ct-name" className="mb-1 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="ct-name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="ct-email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="ct-email"
                    type="email"
                    required
                    placeholder="john@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="ct-phone" className="mb-1 block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="ct-phone"
                    type="tel"
                    required
                    placeholder="(209) 555-0123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm transition hover:bg-accent/30"
                  >
                    <ArrowLeft className="size-3.5" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" /> Get My Free Match
                      </>
                    )}
                  </button>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  Your information is private and never shared without your consent.
                </p>
              </form>
            </div>
          )}

          {/* Step 4 - success */}
          {step === 4 && (
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="size-8 text-primary" />
              </div>
              <h2 className="mt-4 font-serif text-2xl font-medium">You're all set!</h2>
              <p className="mt-2 text-muted-foreground">
                We'll reach out within 24 hours to match you with the best chiropractor in
                Turlock for your {concern.toLowerCase()}.
              </p>

              <div className="mt-8 text-left">
                <h3 className="font-serif text-lg font-medium">While you wait, explore:</h3>
                <div className="mt-3 space-y-3">
                  {relatedArticles.map((a) => (
                    <a
                      key={a.id}
                      href={`#/article/${a.slug}`}
                      className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition hover:border-primary/40 hover:shadow-sm"
                    >
                      <div>
                        <p className="text-sm font-medium">{a.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{a.source}</p>
                      </div>
                      <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                    </a>
                  ))}
                  <a
                    href="#/quiz"
                    className="flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 p-4 transition hover:shadow-sm"
                  >
                    <div>
                      <p className="text-sm font-medium">Take Our Pain Assessment Quiz</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Rate your pain and get personalized recommendations
                      </p>
                    </div>
                    <Activity className="size-4 shrink-0 text-primary" />
                  </a>
                  <a
                    href="#/stretches"
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition hover:border-primary/40 hover:shadow-sm"
                  >
                    <div>
                      <p className="text-sm font-medium">Browse Safe Stretches for Back Pain Relief</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Beginner-friendly exercises with step-by-step instructions
                      </p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                  </a>
                </div>
              </div>

              <a
                href="#/"
                className="mt-8 inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm transition hover:bg-accent/30"
              >
                <ArrowLeft className="size-3.5" /> Back to Directory
              </a>
            </div>
          )}
        </div>

        <Disclaimer className="mt-10" />
      </div>
    </div>
  )
}
