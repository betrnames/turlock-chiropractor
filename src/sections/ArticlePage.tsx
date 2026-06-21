import { useEffect } from "react"
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react"
import { newsItems, type NewsItem } from "../data/news"

export function ArticlePage({ slug }: { slug: string }) {
  const article = newsItems.find((n) => n.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (article) {
      document.title = `${article.title} | Turlock Chiropractor`
    }
  }, [article])

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-5 pt-32 text-center">
        <h1 className="font-serif text-3xl">Article not found</h1>
        <a href="#/" className="mt-4 inline-block text-primary underline">Back to home</a>
      </div>
    )
  }

  return (
    <article className="pt-24 pb-16">
      <ArticleSchema article={article} />
      <div className="mx-auto max-w-3xl px-5">
        <a
          href="#/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to directory
        </a>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Tag className="size-3" />
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="size-3.5" />
            {article.date}
          </span>
        </div>

        <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {article.summary}
        </p>

        <hr className="my-8 border-border/60" />

        <div className="space-y-5">
          {article.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-muted/30 p-5">
          <p className="text-sm text-muted-foreground">
            Source:{" "}
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary transition hover:underline"
            >
              {article.source}
              <ExternalLink className="size-3" />
            </a>
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            This article is sourced from {article.source}. Visit the original for the full report.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
          <h3 className="font-serif text-xl font-medium">Looking for a chiropractor in Turlock?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse our complete directory of Turlock chiropractors with ratings, reviews, and free consultations.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#/"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Browse Directory
            </a>
            <a
              href="#/contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-5 text-sm font-medium transition hover:bg-accent/30"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

function ArticleSchema({ article }: { article: NewsItem }) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      datePublished: article.date,
      publisher: {
        "@type": "Organization",
        name: "Turlock Chiropractor",
        url: "https://turlockchiropractor.com",
      },
      mainEntityOfPage: `https://turlockchiropractor.com/#/article/${article.slug}`,
    }
    const el = document.createElement("script")
    el.type = "application/ld+json"
    el.textContent = JSON.stringify(schema)
    document.head.appendChild(el)
    return () => el.remove()
  }, [article])

  return null
}
