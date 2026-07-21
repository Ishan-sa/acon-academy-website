/*
 * ACON Academy — Free Trial Classes Thank You Page
 * Dedicated confirmation page reached after a successful /free-classes submission.
 * Its own URL lets Google Ads / Analytics fire a conversion event on pageview.
 * Navigation is minimal (logo only), matching the landing page.
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export default function FreeClassesThankYou() {
  // Fire conversion events on pageview (this page only).
  useEffect(() => {
    // Google Ads conversion
    window.gtag?.("event", "conversion", {
      send_to: "AW-16973818211/jbZaCJW8ucAcEOPS350_",
      value: 1.0,
      currency: "CAD",
    });
    // Meta (Facebook) Lead event
    window.fbq?.("track", "Lead");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation minimal />

      <section className="flex-1 bg-[rgb(9,39,88)] relative overflow-hidden flex items-center">
        {/* Subtle diagonal pattern — matches the landing page hero */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="max-w-2xl mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-green-600" />
          </div>

          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Thank You! Your Spot Is Reserved
          </h1>

          <p className="font-body text-white/80 text-lg leading-relaxed mb-4 max-w-xl mx-auto">
            We've received your registration for a free 90-minute French class. Check your inbox for
            a confirmation with your class details within 2 hours.
          </p>
          <p className="font-body text-white/60 text-sm mb-10">
            Don't see it? Please check your spam or promotions folder.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[rgb(31,106,173)] hover:bg-[rgb(20,80,140)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors"
            >
              Back to Homepage <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+18773592035"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors"
            >
              <Phone size={15} /> +1 (877) 359-2035
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
