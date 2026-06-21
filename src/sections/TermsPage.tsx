import { useEffect } from "react"
import { ArrowLeft, FileText } from "lucide-react"

export function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Terms of Use & Disclaimers | Turlock Chiropractor"
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
          <FileText className="size-4" />
          Legal
        </div>
        <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Terms of Use & Disclaimers
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing and using TurlockChiropractor.com ("the Website"), you accept and
              agree to be bound by these Terms of Use. If you do not agree to these terms, you
              must not use the Website. These terms apply to all visitors, users, and others who
              access or use the Website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              2. Description of Service
            </h2>
            <p className="mt-2">
              TurlockChiropractor.com is an independent directory and informational website that
              lists chiropractors in Turlock, California. The Website provides business
              information, ratings compiled from public sources, educational content about
              chiropractic care, and a consultation matching service. The Website is operated by
              BetrNames.
            </p>
          </section>

          <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="font-serif text-xl font-medium text-amber-900">
              3. Medical Disclaimer
            </h2>
            <p className="mt-2 text-amber-900">
              <strong>
                This website is for informational purposes only and is not a substitute for
                professional medical advice, diagnosis, or treatment.
              </strong>
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-amber-800">
              <li>
                The content on this Website, including but not limited to text, articles, pain
                assessments, stretch instructions, wellness tips, and quiz results, is provided
                for general informational and educational purposes only.
              </li>
              <li>
                Nothing on this Website should be construed as medical advice or used as a
                substitute for consultation with a qualified healthcare professional.
              </li>
              <li>
                Always seek the advice of your physician, chiropractor, or other qualified
                healthcare provider with any questions you may have regarding a medical
                condition.
              </li>
              <li>
                Never disregard professional medical advice or delay in seeking it because of
                something you have read on this Website.
              </li>
              <li>
                <strong>Results may vary and are not guaranteed.</strong> Individual outcomes
                depend on many factors including the specific condition, overall health, and
                adherence to treatment plans.
              </li>
              <li>
                If you think you may have a medical emergency, call your doctor, go to the
                emergency department, or call 911 immediately.
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <h2 className="font-serif text-xl font-medium text-blue-900">
              4. No Affiliation or Endorsement
            </h2>
            <p className="mt-2 text-blue-900">
              <strong>
                TurlockChiropractor.com is not affiliated with, endorsed by, sponsored by, or
                in any way officially connected with any of the chiropractors, chiropractic
                practices, or healthcare providers listed on this Website.
              </strong>
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-blue-800">
              <li>
                All business information, including names, addresses, phone numbers, hours, and
                ratings, is compiled from publicly available sources and may not be current or
                accurate.
              </li>
              <li>
                Listing on this Website does not constitute a recommendation, referral, or
                endorsement by TurlockChiropractor.com or BetrNames.
              </li>
              <li>
                We do not verify the credentials, qualifications, licensing, or insurance of any
                listed provider. Users are solely responsible for verifying this information
                before receiving care.
              </li>
              <li>
                Ratings and review counts are aggregated from public sources and may not reflect
                the most current data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              5. Pain Assessment Quiz & Stretch Library Disclaimer
            </h2>
            <p className="mt-2">
              The pain assessment quiz, severity ratings, stretch instructions, wellness tips,
              and exercise recommendations provided on this Website are for educational and
              informational purposes only. They are not diagnostic tools and do not replace a
              professional medical evaluation.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Quiz results are based on general guidelines and your self-reported answers.
                They are not a clinical diagnosis.
              </li>
              <li>
                Stretches and exercises should be performed gently and within your comfort
                level. Stop immediately if you experience increased pain, dizziness, numbness,
                or tingling.
              </li>
              <li>
                Consult a healthcare provider before beginning any new exercise program,
                especially if you have existing injuries, medical conditions, or are pregnant.
              </li>
              <li>
                TurlockChiropractor.com assumes no liability for injuries resulting from the
                use of any exercise or stretch information on this Website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              6. Consultation Matching Service
            </h2>
            <p className="mt-2">
              Our free consultation matching service connects users with chiropractic practices
              in Turlock based on stated needs. By submitting a consultation request:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                You consent to having your submitted information shared with relevant
                chiropractic practices for the purpose of scheduling a consultation.
              </li>
              <li>
                We do not guarantee that a match will be made, that a chiropractor will respond,
                or that any specific outcome will result from a consultation.
              </li>
              <li>
                Any relationship formed between you and a chiropractor is solely between you and
                that provider. TurlockChiropractor.com is not a party to that relationship.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              7. Accuracy of Information
            </h2>
            <p className="mt-2">
              While we strive to keep the information on this Website current and accurate, we
              make no representations or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability of the
              information, products, services, or related graphics contained on the Website.
              Business hours, phone numbers, addresses, and other details may change without
              notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              8. Limitation of Liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by law, TurlockChiropractor.com, BetrNames, and
              their owners, operators, employees, and affiliates shall not be liable for any
              direct, indirect, incidental, consequential, special, or exemplary damages arising
              from:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Your use of or inability to use the Website.</li>
              <li>
                Any information obtained from the Website, including directory listings, quiz
                results, or wellness content.
              </li>
              <li>
                Any services received from chiropractors or healthcare providers found through
                the Website.
              </li>
              <li>
                Any injuries resulting from exercises, stretches, or wellness tips found on the
                Website.
              </li>
              <li>Unauthorized access to or alteration of your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              9. Indemnification
            </h2>
            <p className="mt-2">
              You agree to indemnify and hold harmless TurlockChiropractor.com, BetrNames, and
              their owners, operators, employees, and affiliates from and against any claims,
              damages, obligations, losses, liabilities, costs, or debt arising from your use of
              the Website or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              10. External Links
            </h2>
            <p className="mt-2">
              This Website may contain links to third-party websites, including chiropractor
              websites, news sources, and external resources. These links are provided for
              convenience only. We have no control over the content, privacy policies, or
              practices of third-party sites and accept no responsibility for them.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              11. Intellectual Property
            </h2>
            <p className="mt-2">
              All original content on this Website, including text, design, graphics, and code,
              is the property of BetrNames and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works without prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              12. Changes to These Terms
            </h2>
            <p className="mt-2">
              We reserve the right to modify these Terms of Use at any time. Changes will be
              posted on this page with an updated effective date. Your continued use of the
              Website after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">
              13. Governing Law
            </h2>
            <p className="mt-2">
              These Terms shall be governed by and construed in accordance with the laws of the
              State of California, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground">14. Contact</h2>
            <p className="mt-2">
              For questions about these Terms of Use, please contact:
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
