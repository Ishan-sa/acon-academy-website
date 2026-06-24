/*
 * ACON Academy Navigation — Neo-Institutional Modernism
 * Dual-tier: utility bar (audience) + main nav (content) with dropdown menus
 * EXACT Brand Colors: navy #092758 = oklch(0.19 0.08 255), blue accent #1F6AAD = oklch(0.48 0.14 255)
 * Real logo from: https://cdn.prod.website-files.com/681d0ae66420460cc9843fb0/6966da0e45b17608aa5c7590_Artboard%201.svg
 */

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, Phone, Mail, Search } from "lucide-react";
import AconLogo from "@/components/AconLogo";

/* Navy: oklch(0.19 0.08 255) = #092758 */
/* Blue accent: oklch(0.48 0.14 255) = #1F6AAD */
/* Utility bar: oklch(0.13 0.06 255) = #051A40 */

const mainNavItems = [
  {
    label: "About ACON",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Values", href: "/about/mission-values" },
      { label: "Accreditation", href: "/about/accreditation" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    dropdown: [
      { label: "CLB-5 French Foundations (6 Months)", href: "/programs/french-foundations" },
      { label: "CLB-7 Intermediate / Advanced (10 Months)", href: "/programs/intermediate-advanced" },
      { label: "Intensive Exam Preparation (30 Days)", href: "/programs/exam-preparation" },
      { label: "French for PR & Citizens", href: "/programs/french-for-pr" },
      { label: "French for Youth (Ages 13–18)", href: "/programs/french-for-youth" },
      { label: "Free Trial Classes", href: "/free-classes" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    dropdown: [
      { label: "How to Apply", href: "/admissions/how-to-apply" },
      { label: "Eligibility Requirements", href: "/admissions/eligibility" },
      { label: "Fees & Financial Aid", href: "/admissions/fees" },
      { label: "Application Deadlines", href: "/admissions/application-deadlines" },
      { label: "Campus Tours", href: "/admissions/campus-tours" },
    ],
  },
  {
    label: "Campuses",
    href: "/campuses",
    dropdown: [
      { label: "Surrey Campus", href: "/campuses#surrey" },
      { label: "Kelowna Campus", href: "/campuses#kelowna" },
    ],
  },
  {
    label: "Student Life",
    href: "/student-life",
    dropdown: [
      { label: "Academic Counselling", href: "/student-life/academic-counselling" },
      { label: "Exam Training", href: "/student-life/exam-training" },
      { label: "Study Spaces", href: "/student-life/study-spaces" },
      { label: "Student Resources", href: "/student-life/student-resources" },
      { label: "Community Events", href: "/student-life/community-events" },
    ],
  },
  {
    label: "News",
    href: "/news",
    dropdown: [
      { label: "Latest News", href: "/news" },
      { label: "Announcements", href: "/news/announcements" },
      { label: "Student Stories", href: "/news/student-stories" },
      { label: "Blog", href: "/news/blog" },
      { label: "Press Releases", href: "/news/press-releases" },
    ],
  },
];

const audienceLinks = [
  { label: "Prospective Students", href: "/admissions" },
  { label: "Current Students", href: "/student-life" },
];

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Utility Bar — darkest navy #051A40 */}
      <div className="hidden lg:block" style={{ backgroundColor: 'rgb(5, 26, 64)' }}>
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6 text-xs font-body" style={{ color: 'rgba(255,251,248,0.75)' }}>
            {audienceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-150 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5 text-xs font-body" style={{ color: 'rgba(255,251,248,0.75)' }}>
            <a href="tel:+18773592035" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} /> +1 (877) 359-2035
            </a>
            <a href="mailto:info@aconacademy.ca" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={11} /> info@aconacademy.ca
            </a>
          </div>
        </div>
      </div>

      {/* Blue Rule — thin bright blue separator */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, rgb(9,39,88) 0%, rgb(31,106,173) 50%, rgb(9,39,88) 100%)' }} className="hidden lg:block" />

      {/* Main Navigation — exact #092758 navy */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(9,39,88,0.4)]" : ""
        }`}
        style={{ backgroundColor: 'rgb(9, 39, 88)' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* ACON Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <AconLogo variant="white" showTagline={true} />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {mainNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-body font-semibold tracking-wide transition-colors duration-150 rounded-sm
                      ${location === item.href
                        ? "text-white bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 rounded-sm acon-nav-dropdown z-50">
                      <div style={{ height: '3px', background: 'linear-gradient(90deg, rgb(9,39,88), rgb(31,106,173))' }} />
                      <div className="py-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-5 py-2.5 text-sm font-body hover:bg-[rgb(221,236,255)] hover:pl-6 transition-all duration-150 border-l-2 border-transparent"
                            style={{ color: 'rgb(9, 39, 88)' }}
                            onMouseEnter={e => (e.currentTarget.style.borderLeftColor = 'rgb(31,106,173)')}
                            onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Search */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="text-white/80 hover:text-white transition-colors p-2">
                <Search size={18} />
              </button>
              <Link
                href="/admissions"
                className="font-body font-bold text-sm px-5 py-2.5 rounded-sm transition-colors duration-150 tracking-wide"
                style={{ backgroundColor: 'rgb(31, 106, 173)', color: 'white' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(20, 80, 140)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(31, 106, 173)'}
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 max-h-[80vh] overflow-y-auto" style={{ backgroundColor: 'rgb(7, 30, 70)' }}>
            {/* Audience Links */}
            <div className="border-b border-white/10 px-4 py-3 flex flex-wrap gap-3">
              {audienceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-body hover:text-white transition-colors"
                  style={{ color: 'rgba(255,251,248,0.6)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Main Nav */}
            {mainNavItems.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-white font-body font-semibold text-sm"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === item.label && item.dropdown && (
                  <div className="pb-2" style={{ backgroundColor: 'rgb(5, 26, 64)' }}>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-8 py-2.5 text-sm font-body hover:text-white transition-colors"
                        style={{ color: 'rgba(255,251,248,0.7)' }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="p-4 border-t border-white/10">
              <div className="flex justify-center mb-4">
                <AconLogo variant="white" showTagline={true} />
              </div>
              <Link
                href="/admissions"
                className="block w-full text-center text-white font-body font-bold py-3 rounded-sm"
                style={{ backgroundColor: 'rgb(31, 106, 173)' }}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
