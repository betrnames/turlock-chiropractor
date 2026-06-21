import { useEffect } from "react"
import { Toaster } from "sonner"
import { Hero } from "./sections/Hero"
import { Directory } from "./sections/Directory"
import { News } from "./sections/News"
import { FAQ } from "./sections/FAQ"
import { LeadForm } from "./sections/LeadForm"
import { Footer } from "./sections/Footer"
import { Navbar } from "./sections/Navbar"
import { ArticlePage } from "./sections/ArticlePage"
import { ConsultationTool } from "./sections/ConsultationTool"
import { PainQuiz } from "./sections/PainQuiz"
import { StretchLibrary } from "./sections/StretchLibrary"
import { PrivacyPage } from "./sections/PrivacyPage"
import { TermsPage } from "./sections/TermsPage"
import { useRoute } from "./hooks/useRoute"
import { chiropractors } from "./data/chiropractors"
import { faqs } from "./data/faqs"

function HomePage() {
  useEffect(() => {
    document.title = "Best Chiropractors in Turlock, CA | Turlock Chiropractor Directory 2026"

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Chiropractors in Turlock, CA",
      description: "Complete directory of chiropractors in Turlock, California with ratings and reviews.",
      numberOfItems: chiropractors.length,
      itemListElement: chiropractors.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Chiropractor",
          name: c.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: c.address.split(",")[0],
            addressLocality: "Turlock",
            addressRegion: "CA",
            postalCode: c.address.match(/\d{5}/)?.[0] || "95380",
            addressCountry: "US",
          },
          telephone: c.phone,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: c.rating,
            reviewCount: c.reviewCount,
            bestRating: 5,
          },
          ...(c.website ? { url: c.website } : {}),
        },
      })),
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    }

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Turlock Chiropractor",
      url: "https://turlockchiropractor.com",
      description: "Find the best chiropractors in Turlock, CA. Compare ratings, read reviews, and book a free consultation.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://turlockchiropractor.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }

    const scripts = [localBusinessSchema, faqSchema, websiteSchema].map((schema) => {
      const el = document.createElement("script")
      el.type = "application/ld+json"
      el.textContent = JSON.stringify(schema)
      document.head.appendChild(el)
      return el
    })

    return () => scripts.forEach((s) => s.remove())
  }, [])

  return (
    <>
      <Hero />
      <Directory />
      <News />
      <FAQ />
      <LeadForm />
    </>
  )
}

function App() {
  const path = useRoute()

  const articleMatch = path.match(/^\/article\/(.+)$/)

  let content
  if (articleMatch) {
    content = <ArticlePage slug={articleMatch[1]} />
  } else if (path === "/consultation") {
    content = <ConsultationTool />
  } else if (path === "/quiz") {
    content = <PainQuiz />
  } else if (path === "/stretches") {
    content = <StretchLibrary />
  } else if (path === "/privacy") {
    content = <PrivacyPage />
  } else if (path === "/terms") {
    content = <TermsPage />
  } else {
    content = <HomePage />
  }

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Navbar />
      <main>{content}</main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  )
}

export default App
