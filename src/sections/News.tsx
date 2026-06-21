import { Newspaper, TrendingUp, Cpu, Scale, BookOpen, ArrowRight } from "lucide-react"
import { newsItems } from "../data/news"

const categoryIcons: Record<string, typeof TrendingUp> = {
  "Industry Trends": TrendingUp,
  Technology: Cpu,
  Policy: Scale,
  "Patient Guide": BookOpen,
}

export function News() {
  return (
    <section id="news" className="scroll-mt-20 border-t border-border/60 bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-sm text-primary">
            <Newspaper className="size-4" />
            Trending
          </div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Chiropractic News & Trends
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Stay informed on what's shaping chiropractic care in Turlock and across California.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {newsItems.map((item) => {
            const Icon = categoryIcons[item.category] || Newspaper
            return (
              <a
                key={item.id}
                href={`#/article/${item.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-medium leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground/70">
                    Source: {item.source}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                    Read more <ArrowRight className="size-3" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
