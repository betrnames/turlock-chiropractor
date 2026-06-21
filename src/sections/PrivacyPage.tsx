import { useEffect } from "react"
import { ArrowLeft, Shield } from "lucide-react"

export function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Privacy Policy | Turlock Chiropractor"
  }, [])

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
          <Shield className="size-4" />
          Legal
        </div>
        <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">1. Introduction</h2>
            <p className="mt-2">
              TurlockChiropractor.com ("we," "our," or "us") is a directory and informational
              website operated by BetrNames. This Privacy Policy describes how we collect, use,
              and protect your personal information when you visit our website or use our services.
            </p>
            <p className="mt-2">
              By using this website, you agree to the practices described in this policy. If you
              do not agree, please do not use our website or submit any personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              2. Information We Collect
            </h2>
            <p className="mt-2">We may collect the following types of information:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <strong>Personal information you provide:</strong> Name, email address, phone
                number, and any message content submitted through our consultation form or
                contact forms.
              </li>
              <li>
                <strong>Quiz and assessment data:</strong> Your responses to our pain assessment
                quiz, including pain level, location, duration, and aggravating factors. This
                data is processed locally in your browser and is not stored on our servers
                unless you submit a consultation request.
              </li>
              <li>
                <strong>Automatically collected data:</strong> IP address, browser type,
                operating system, referring URL, pages visited, and time spent on pages. This
                data is collected through standard web analytics.
              </li>
              <li>
                <strong>Cookies:</strong> We use essential cookies for website functionality. We
                do not use advertising or third-party tracking cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              3. How We Use Your Information
            </h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Match you with chiropractors in Turlock, CA based on your stated needs and
                preferences.
              </li>
              <li>Respond to your inquiries and consultation requests.</li>
              <li>Improve our website content, layout, and user experience.</li>
              <li>
                Analyze website traffic and usage patterns to better serve our visitors.
              </li>
              <li>
                Comply with legal obligations and protect against fraud or misuse.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              4. Information Sharing
            </h2>
            <p className="mt-2">
              We do not sell, rent, or trade your personal information to third parties. We may
              share your information only in the following limited circumstances:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <strong>With chiropractors:</strong> If you submit a consultation request, we may
                share your contact information and stated needs with relevant chiropractic
                practices in Turlock to facilitate your match. We will only share the information
                you provided in your request.
              </li>
              <li>
                <strong>Service providers:</strong> We use Cloudflare for hosting and data
                storage. Your data is processed in accordance with Cloudflare's privacy policies.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information if required by
                law, court order, or government regulation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">5. Data Security</h2>
            <p className="mt-2">
              We implement reasonable technical and organizational measures to protect your
              personal information, including encryption in transit (HTTPS) and secure data
              storage through Cloudflare's infrastructure. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              6. Data Retention
            </h2>
            <p className="mt-2">
              We retain your personal information only for as long as necessary to fulfill the
              purposes described in this policy, or as required by law. Consultation request data
              is retained for up to 12 months, after which it is securely deleted.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">7. Your Rights</h2>
            <p className="mt-2">
              Depending on your location, you may have the following rights regarding your
              personal information:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Request that we correct inaccurate or incomplete
                data.
              </li>
              <li>
                <strong>Deletion:</strong> Request that we delete your personal data (subject to
                legal retention requirements).
              </li>
              <li>
                <strong>Opt-out:</strong> You may opt out of any future communications from us
                by contacting us directly.
              </li>
            </ul>
            <p className="mt-2">
              California residents may have additional rights under the California Consumer
              Privacy Act (CCPA). To exercise any of these rights, please contact us using the
              information below.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              8. Third-Party Links
            </h2>
            <p className="mt-2">
              Our website may contain links to external websites, including chiropractor
              websites and news sources. We are not responsible for the privacy practices or
              content of those third-party sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              9. Children's Privacy
            </h2>
            <p className="mt-2">
              This website is not directed at children under the age of 13. We do not knowingly
              collect personal information from children. If we become aware that we have
              collected information from a child under 13, we will take steps to delete it
              promptly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              10. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated "Last updated" date. Your continued use of the website
              after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">11. Contact Us</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy or wish to exercise your data
              rights, please contact us at:
            </p>
            <div className="mt-3 rounded-lg border border-border bg-card p-4">
              <p className="font-medium">TurlockChiropractor.com</p>
              <p className="mt-1 text-muted-foreground">
                Operated by BetrNames
                <br />
                Email: contact@gabemariscal.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
