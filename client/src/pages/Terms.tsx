/*
 * ACON Academy — Terms of Use Page
 * Neo-Institutional Modernism: navy/gold/warm-white palette
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-14 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Terms of Use</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Terms of Use</h1>
          <p className="text-white/60 font-body text-base">Last updated: May 30, 2026</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none font-body text-[rgb(40,55,80)] space-y-10">

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using the ACON Academy website at <strong>aconacademy.ca</strong> (the "Website"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Website. ACON Academy reserves the right to modify these terms at any time, and your continued use of the Website constitutes acceptance of any changes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">2. Use of the Website</h2>
              <p className="leading-relaxed mb-3">You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Website in any way that violates applicable local, national, or international laws or regulations.</li>
                <li>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
                <li>Attempt to gain unauthorized access to any part of the Website or its related systems.</li>
                <li>Use automated tools to scrape, crawl, or extract data from the Website without prior written consent.</li>
                <li>Impersonate ACON Academy or any of its staff, students, or representatives.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">3. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this Website — including text, graphics, logos, images, videos, and program materials — is the property of ACON Academy or its content suppliers and is protected by applicable Canadian and international copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Website without prior written permission from ACON Academy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">4. Program and Fee Information</h2>
              <p className="leading-relaxed">
                Program descriptions, schedules, and fee information on this Website are provided for general informational purposes and are subject to change without notice. ACON Academy makes reasonable efforts to keep this information current and accurate, but does not warrant that all information is complete or error-free. Prospective students should contact our admissions team directly to confirm current program availability, schedules, and fees before making enrollment decisions.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">5. No Guarantee of Outcomes</h2>
              <p className="leading-relaxed">
                Information on this Website regarding examination pass rates, immigration outcomes, and career results reflects historical data and is provided for informational purposes only. ACON Academy does not guarantee that any individual student will achieve the same results. Individual outcomes depend on many factors including prior language experience, study effort, and individual circumstances.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">6. Forms and Submissions</h2>
              <p className="leading-relaxed">
                When you submit information through forms on this Website (including inquiry forms, free class registrations, and application forms), you represent that the information you provide is accurate and complete. Submission of a form does not constitute a binding enrollment agreement. Enrollment is subject to a separate enrollment agreement and the payment of applicable fees.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">7. Third-Party Links</h2>
              <p className="leading-relaxed">
                This Website may contain links to third-party websites for your convenience. ACON Academy does not endorse or control the content of third-party websites and is not responsible for their content, privacy practices, or availability. Accessing third-party links is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">8. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                The Website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. ACON Academy does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. To the fullest extent permitted by law, ACON Academy disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">9. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by applicable law, ACON Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Website or its content. ACON Academy's total liability for any claim arising from your use of the Website shall not exceed the amount you paid to ACON Academy, if any, in the six months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">10. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms of Use are governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein. Any disputes arising from these terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of British Columbia.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="mt-4 p-5 bg-white border border-[rgb(210,225,245)] rounded-sm">
                <p className="font-body text-[rgb(9,39,88)] font-semibold mb-1">ACON Academy</p>
                <p className="font-body text-[rgb(60,80,110)] text-sm">13764 72 Ave, Suite #203, Surrey, BC V3W 2P2</p>
                <p className="font-body text-sm mt-1">
                  Email: <a href="mailto:info@aconacademy.ca" className="text-[rgb(31,106,173)] hover:underline">info@aconacademy.ca</a>
                </p>
                <p className="font-body text-sm">
                  Phone: <a href="tel:+18773592035" className="text-[rgb(31,106,173)] hover:underline">+1 (877) 359-2035</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
