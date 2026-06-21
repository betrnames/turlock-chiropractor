import { AlertTriangle } from "lucide-react"

export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-amber-200 bg-amber-50 p-4 ${className}`}>
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" />
        <div className="text-xs leading-relaxed text-amber-800">
          <p className="font-medium">Medical Disclaimer</p>
          <p className="mt-1">
            This website is for informational purposes only and is not a substitute for
            professional medical advice, diagnosis, or treatment. Always seek the advice of a
            qualified healthcare provider with any questions you may have regarding a medical
            condition. Results may vary and are not guaranteed. TurlockChiropractor.com is not
            affiliated with or endorsed by any chiropractors listed on this site.
          </p>
        </div>
      </div>
    </div>
  )
}
