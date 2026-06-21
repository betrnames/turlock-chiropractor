import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { faqs } from "../data/faqs"

function FAQItem({ question, answer, open, onToggle }: { question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/60">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left transition hover:text-primary"
        aria-expanded={open}
      >
        <span className="font-serif text-lg font-medium leading-snug">{question}</span>
        <ChevronDown
          className={`mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-sm text-primary">
            <HelpCircle className="size-4" />
            FAQ
          </div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Everything you need to know about chiropractic care in Turlock, CA.
          </p>
        </div>

        <div className="mt-10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
