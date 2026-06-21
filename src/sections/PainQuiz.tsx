import { useState, useEffect } from "react"
import { toast } from "sonner"
import { ArrowLeft, ArrowRight, Activity, AlertCircle, RotateCcw } from "lucide-react"
import { Disclaimer } from "../components/Disclaimer"

const locations = [
  "Lower back",
  "Upper back",
  "Neck",
  "Shoulders",
  "Hip / pelvis",
  "Leg / sciatica",
]

const durationOptions = [
  "Less than 1 week",
  "1–4 weeks",
  "1–3 months",
  "3+ months",
]

const aggravatingFactors = [
  "Sitting for long periods",
  "Standing or walking",
  "Sleeping / lying down",
  "Bending or lifting",
  "Exercise or sports",
  "Driving",
  "Desk or computer work",
  "Stress or tension",
]

interface Results {
  severity: string
  severityColor: string
  causes: string[]
  recommendation: string
  tips: string[]
}

function getResults(
  pain: number,
  locs: string[],
  dur: string,
  factors: string[],
): Results {
  const severity =
    pain <= 3 ? "Mild" : pain <= 6 ? "Moderate" : "Severe"
  const severityColor =
    pain <= 3
      ? "text-green-700 bg-green-50 border-green-200"
      : pain <= 6
        ? "text-amber-700 bg-amber-50 border-amber-200"
        : "text-red-700 bg-red-50 border-red-200"

  const causes: string[] = []
  if (factors.includes("Sitting for long periods") || factors.includes("Desk or computer work"))
    causes.push("Poor posture or prolonged sitting")
  if (factors.includes("Bending or lifting"))
    causes.push("Muscle strain from lifting mechanics")
  if (factors.includes("Sleeping / lying down"))
    causes.push("Unsupportive sleeping position or mattress")
  if (factors.includes("Exercise or sports"))
    causes.push("Overuse or sports-related strain")
  if (factors.includes("Stress or tension"))
    causes.push("Stress-related muscle tension")
  if (factors.includes("Standing or walking"))
    causes.push("Alignment issues or muscle imbalance")
  if (factors.includes("Driving"))
    causes.push("Prolonged seated posture with vibration")
  if (locs.includes("Leg / sciatica"))
    causes.push("Possible sciatic nerve irritation")
  if (locs.includes("Neck") && locs.includes("Shoulders"))
    causes.push("Upper cross syndrome (forward head posture)")
  if (causes.length === 0) causes.push("General musculoskeletal tension")

  const isChronicOrSevere = dur === "3+ months" || pain >= 7
  const recommendation = isChronicOrSevere
    ? "Based on your answers, we recommend seeing a chiropractor or healthcare provider soon. Chronic or severe pain benefits from professional evaluation to rule out underlying conditions and create a targeted treatment plan."
    : pain <= 3
      ? "Your pain level is mild. Gentle stretching, posture correction, and lifestyle adjustments may help. If symptoms persist beyond 2-4 weeks or worsen, consider scheduling a professional evaluation."
      : "Your pain is moderate. While self-care strategies can help, consider booking a chiropractic evaluation if your symptoms don't improve within 1-2 weeks or interfere with daily activities."

  const tips: string[] = []
  if (factors.includes("Sitting for long periods") || factors.includes("Desk or computer work")) {
    tips.push("Set a timer to stand and move every 30 minutes during desk work.")
    tips.push("Position your monitor at eye level and keep your feet flat on the floor.")
  }
  if (factors.includes("Sleeping / lying down")) {
    tips.push("Try sleeping on your side with a pillow between your knees for spinal alignment.")
    tips.push("Avoid sleeping on your stomach — it puts strain on your neck and lower back.")
  }
  if (factors.includes("Bending or lifting")) {
    tips.push("Always bend at the knees when lifting, keeping the load close to your body.")
    tips.push("Avoid twisting your torso while carrying heavy objects.")
  }
  if (factors.includes("Exercise or sports")) {
    tips.push("Warm up for 5-10 minutes before exercise and cool down with gentle stretches.")
    tips.push("Consider cross-training to avoid overuse of the same muscle groups.")
  }
  if (factors.includes("Stress or tension")) {
    tips.push("Practice deep breathing exercises — inhale for 4 counts, hold 4, exhale 4.")
    tips.push("Gentle neck and shoulder stretches throughout the day can relieve tension buildup.")
  }
  if (locs.includes("Lower back")) {
    tips.push("Try the knee-to-chest stretch: lie on your back and gently pull one knee at a time to your chest.")
  }
  if (locs.includes("Neck")) {
    tips.push("Practice chin tucks: gently draw your chin straight back to strengthen deep neck muscles.")
  }
  if (tips.length === 0) {
    tips.push("Incorporate 10 minutes of gentle stretching into your daily routine.")
    tips.push("Stay hydrated — your spinal discs need water to function as shock absorbers.")
  }

  return { severity, severityColor, causes, recommendation, tips }
}

export function PainQuiz() {
  const [step, setStep] = useState(1)
  const [painLevel, setPainLevel] = useState(5)
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [duration, setDuration] = useState("")
  const [selectedFactors, setSelectedFactors] = useState<string[]>([])
  const [results, setResults] = useState<Results | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Pain Assessment Quiz | Turlock Chiropractor"
  }, [])

  function toggleItem(item: string, list: string[], setter: (v: string[]) => void) {
    setter(list.includes(item) ? list.filter((i) => i !== item) : [...list, item])
  }

  function calculateResults() {
    setResults(getResults(painLevel, selectedLocations, duration, selectedFactors))
    setStep(5)
    window.scrollTo(0, 0)
  }

  function reset() {
    setStep(1)
    setPainLevel(5)
    setSelectedLocations([])
    setDuration("")
    setSelectedFactors([])
    setResults(null)
    window.scrollTo(0, 0)
  }

  const painLabel =
    painLevel === 0
      ? "No pain"
      : painLevel <= 3
        ? "Mild"
        : painLevel <= 6
          ? "Moderate"
          : painLevel <= 8
            ? "Severe"
            : "Very severe"

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
          <Activity className="size-4" />
          Pain Assessment
        </div>
        <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Rate Your <span className="text-gradient-sage">Back & Neck Pain</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Answer a few questions to understand your pain severity, likely causes, and whether you
          should see a chiropractor.
        </p>

        {/* progress */}
        {step < 5 && (
          <>
            <div className="mt-8 flex gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Question {step} of 4</p>
          </>
        )}

        <div className="mt-8">
          {/* Q1: Pain Level */}
          {step === 1 && (
            <div>
              <h2 className="font-serif text-xl font-medium">
                How would you rate your pain right now?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                0 = no pain, 10 = worst pain imaginable
              </p>
              <div className="mt-6">
                <div className="text-center">
                  <span className="text-5xl font-bold text-primary">{painLevel}</span>
                  <p className="mt-1 text-sm text-muted-foreground">{painLabel}</p>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  value={painLevel}
                  onChange={(e) => setPainLevel(Number(e.target.value))}
                  className="mt-4 w-full accent-primary"
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>0 — No pain</span>
                  <span>10 — Worst pain</span>
                </div>
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-8 flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Next <ArrowRight className="size-3.5" />
              </button>
            </div>
          )}

          {/* Q2: Location */}
          {step === 2 && (
            <div>
              <h2 className="font-serif text-xl font-medium">Where is your pain located?</h2>
              <p className="mt-1 text-sm text-muted-foreground">Select all that apply.</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => toggleItem(loc, selectedLocations, setSelectedLocations)}
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                      selectedLocations.includes(loc)
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
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
                    if (selectedLocations.length === 0) {
                      toast.error("Please select at least one location.")
                      return
                    }
                    setStep(3)
                  }}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Next <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Q3: Duration */}
          {step === 3 && (
            <div>
              <h2 className="font-serif text-xl font-medium">
                How long have you been experiencing this pain?
              </h2>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {durationOptions.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                      duration === d
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setStep(2)}
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
                    setStep(4)
                  }}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Next <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Q4: Aggravating Factors */}
          {step === 4 && (
            <div>
              <h2 className="font-serif text-xl font-medium">What makes your pain worse?</h2>
              <p className="mt-1 text-sm text-muted-foreground">Select all that apply.</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {aggravatingFactors.map((f) => (
                  <button
                    key={f}
                    onClick={() => toggleItem(f, selectedFactors, setSelectedFactors)}
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                      selectedFactors.includes(f)
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm transition hover:bg-accent/30"
                >
                  <ArrowLeft className="size-3.5" /> Back
                </button>
                <button
                  onClick={() => {
                    if (selectedFactors.length === 0) {
                      toast.error("Please select at least one factor.")
                      return
                    }
                    calculateResults()
                  }}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  See My Results <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          {step === 5 && results && (
            <div>
              <div className={`rounded-xl border p-5 ${results.severityColor}`}>
                <h2 className="font-serif text-xl font-medium">
                  Your Pain Severity: {results.severity} ({painLevel}/10)
                </h2>
                <p className="mt-2 text-sm">{results.recommendation}</p>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-lg font-medium">Possible Causes</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Based on your reported location and aggravating factors.
                </p>
                <ul className="mt-3 space-y-2">
                  {results.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <AlertCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-lg font-medium">Personalized Tips</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tailored to your specific pain triggers and lifestyle.
                </p>
                <ul className="mt-3 space-y-2">
                  {results.tips.map((t, i) => (
                    <li
                      key={i}
                      className="flex gap-2 rounded-lg border border-border bg-card p-3 text-sm"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {i + 1}
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="#/consultation"
                  className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Book Free Consultation
                </a>
                <a
                  href="#/stretches"
                  className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium transition hover:bg-accent/30"
                >
                  Browse Stretches for Back Pain Relief
                </a>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="#/article/chiropractic-whole-person-wellness-2026"
                  className="rounded-lg border border-border bg-card p-3 text-sm transition hover:border-primary/40"
                >
                  <p className="font-medium">Whole-Person Wellness Trends</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    How modern chiropractors treat the whole patient
                  </p>
                </a>
                <a
                  href="#/article/patient-price-sensitivity-turlock-chiropractic"
                  className="rounded-lg border border-border bg-card p-3 text-sm transition hover:border-primary/40"
                >
                  <p className="font-medium">Understanding Chiropractic Costs</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    What Turlock patients should know about pricing
                  </p>
                </a>
              </div>

              <button
                onClick={reset}
                className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <RotateCcw className="size-3.5" /> Retake quiz
              </button>
            </div>
          )}
        </div>

        <Disclaimer className="mt-10" />
      </div>
    </div>
  )
}
