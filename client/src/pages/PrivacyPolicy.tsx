/*
 * ACON Academy — Privacy Policy Page
 * Neo-Institutional Modernism: navy/gold/warm-white palette
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-14 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Privacy Policy</h1>
          <p className="text-white/60 font-body text-base">Last updated: May 30, 2026</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none font-body text-[rgb(40,55,80)] space-y-10">

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                ACON Academy ("we," "our," or "us") is committed to protecting the privacy of our students, prospective students, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at <strong>aconacademy.ca</strong> or interact with our services.
              </p>
              <p className="leading-relaxed mt-3">
                By using our website or submitting information through our forms, you consent to the practices described in this policy. If you do not agree with any part of this policy, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you fill out inquiry forms, register for a free class, or apply for admission.</li>
                <li><strong>Program Interest:</strong> The programs or services you are interested in, your current French language level, and your immigration or career goals.</li>
                <li><strong>Campus Preference:</strong> Your preferred campus (Surrey or Kelowna) and scheduling preferences.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and referring URLs, collected through standard web analytics tools.</li>
                <li><strong>Communications:</strong> Records of correspondence when you contact us by email, phone, or through our website forms.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use the personal information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide information about our programs and services.</li>
                <li>Process enrollment applications and schedule placement assessments.</li>
                <li>Send you relevant information about programs, schedules, financial aid, and upcoming events at ACON Academy.</li>
                <li>Improve our website, programs, and services based on usage patterns and feedback.</li>
                <li>Comply with applicable laws and regulations, including those administered by the BC Private Training Institutions Branch (PTIB).</li>
                <li>Maintain records as required for institutional administration and regulatory compliance.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">4. Sharing of Information</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and delivering our services (e.g., email platforms, CRM systems), subject to confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law, court order, or governmental authority.</li>
                <li><strong>Regulatory Compliance:</strong> As a PTIB-registered institution, we may be required to provide certain enrollment and program information to the BC Ministry of Post-Secondary Education and Future Skills.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">5. Data Retention</h2>
              <p className="leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes for which it was collected, to comply with legal and regulatory obligations, and to resolve disputes. Enrollment and student records are retained in accordance with PTIB requirements and applicable BC privacy legislation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">6. Security</h2>
              <p className="leading-relaxed">
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">7. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser. Disabling cookies may affect certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">8. Your Rights</h2>
              <p className="leading-relaxed mb-3">Under applicable Canadian privacy legislation (PIPEDA and BC PIPA), you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Withdraw consent to the collection or use of your information (subject to legal and contractual restrictions).</li>
                <li>Request deletion of your personal information, where applicable.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise any of these rights, please contact us at <a href="mailto:info@aconacademy.ca" className="text-[rgb(31,106,173)] hover:underline">info@aconacademy.ca</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">9. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
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
