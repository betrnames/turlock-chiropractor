import { useState, type FormEvent } from "react"
import { toast } from "sonner"
import { Send, Loader2, CheckCircle2, Phone } from "lucide-react"

export function LeadForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name || !email || !phone) {
      toast.error("Please fill in name, email, and phone.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      })
      if (!res.ok) throw new Error()
    } catch {
      setLoading(false)
      toast.error("Something went wrong. Please try again.")
      return
    }
    setLoading(false)
    setDone(true)
    toast.success("We'll match you with a chiropractor within 24 hours!")
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60 bg-primary/5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-sm text-primary">
              <Phone className="size-4" />
              Free Consultation
            </div>
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              Get matched with the right chiropractor —{" "}
              <span className="text-gradient-sage">free</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Tell us about your needs and we'll connect you with the best
              chiropractor in Turlock for your specific situation. No cost,
              no obligation.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                Matched within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                100% free — no strings attached
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                Your info stays private
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            {done ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="size-7" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium">You're all set!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll reach out within 24 hours to match you with the
                  best chiropractor for your needs.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="mt-5 rounded-lg border border-border px-4 py-2 text-sm transition hover:bg-accent/30"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    placeholder="john@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    required
                    placeholder="(209) 555-0123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="lead-msg" className="mb-1 block text-sm font-medium">
                    What's bothering you? <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="lead-msg"
                    rows={3}
                    placeholder="e.g. lower back pain for 2 weeks, looking for someone who takes Blue Cross..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" /> Get My Free Match
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Your information is private and never shared without your consent.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
