/*
 * ACON Academy Footer — Neo-Institutional Modernism
 * Dense information architecture with 4-column link grid
 * EXACT Brand Colors: navy #092758 = rgb(9, 39, 88), blue accent #1F6AAD
 * Real logo: inverted white version on navy background
 */

import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import AconLogo from "@/components/AconLogo";

const footerColumns = [
  {
    title: "Programs",
    links: [
      { label: "CLB-5 French Foundations", href: "/programs/french-foundations" },
      { label: "CLB-7 Intermediate / Advanced", href: "/programs/intermediate-advanced" },
      { label: "Intensive Exam Prep", href: "/programs/exam-preparation" },
      { label: "French for PR & Citizens", href: "/programs/french-for-pr" },
      { label: "French for Youth", href: "/programs/french-for-youth" },
      { label: "Free Trial Classes", href: "/free-classes" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "How to Apply", href: "/admissions/how-to-apply" },
      { label: "Eligibility Requirements", href: "/admissions/eligibility" },
      { label: "Fees & Financial Aid", href: "/admissions/fees" },
      { label: "Application Deadlines", href: "/admissions/application-deadlines" },
      { label: "Campus Tours", href: "/admissions/campus-tours" },
      { label: "Transfer Students", href: "/admissions/transfer-students" },
    ],
  },
  {
    title: "Campuses",
    links: [
      { label: "Surrey Campus", href: "/campuses#surrey" },
      { label: "Kelowna Campus", href: "/campuses#kelowna" },
      { label: "Campus Facilities", href: "/campuses#facilities" },
      { label: "Campus Hours", href: "/campuses#hours" },
      { label: "Getting Here", href: "/campuses#directions" },
    ],
  },
  {
    title: "About ACON",
    links: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Values", href: "/about/mission-values" },
      { label: "News & Announcements", href: "/news" },
      { label: "Student Life", href: "/student-life" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(5, 26, 64)' }} className="text-white">
      {/* Blue rule */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, rgb(9,39,88) 0%, rgb(31,106,173) 50%, rgb(9,39,88) 100%)' }} />

      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 inline-block">
              <AconLogo variant="white" showTagline={true} />
            </Link>
            <p className="text-sm font-body leading-relaxed mb-6" style={{ color: 'rgba(255,251,248,0.6)' }}>
              Canada's premier French language learning institution, helping students achieve fluency for immigration, career advancement, and personal growth across British Columbia.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              <a href="tel:+18773592035" className="flex items-center gap-2.5 text-sm font-body hover:text-white transition-colors" style={{ color: 'rgba(255,251,248,0.6)' }}>
                <Phone size={14} style={{ color: 'rgb(31, 106, 173)' }} />
                +1 (877) 359-2035
              </a>
              <a href="mailto:info@aconacademy.ca" className="flex items-center gap-2.5 text-sm font-body hover:text-white transition-colors" style={{ color: 'rgba(255,251,248,0.6)' }}>
                <Mail size={14} style={{ color: 'rgb(31, 106, 173)' }} />
                info@aconacademy.ca
              </a>
              <div className="flex items-start gap-2.5 text-sm font-body" style={{ color: 'rgba(255,251,248,0.6)' }}>
                <MapPin size={14} style={{ color: 'rgb(31, 106, 173)', marginTop: '2px', flexShrink: 0 }} />
                <span>
                  <strong style={{color:'rgba(255,251,248,0.8)'}}>Surrey:</strong> 13764 72 Ave #203, Surrey, BC<br />
                  <strong style={{color:'rgba(255,251,248,0.8)'}}>Kelowna:</strong> 1674 Bertram St #301, Kelowna, BC
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1CNvGe77wG/", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/aconacademy", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com/@aconacademyaa", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-sm flex items-center justify-center transition-colors duration-150"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(31, 106, 173)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)'}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: 'rgb(31, 106, 173)' }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-body hover:text-white transition-colors duration-150"
                      style={{ color: 'rgba(255,251,248,0.55)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body" style={{ color: 'rgba(255,251,248,0.4)' }}>
            © {new Date().getFullYear()} ACON Academy. All rights reserved. | British Columbia, Canada
          </p>
          <div className="flex items-center gap-5 text-xs font-body" style={{ color: 'rgba(255,251,248,0.4)' }}>
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
            <Link href="/sitemap" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
