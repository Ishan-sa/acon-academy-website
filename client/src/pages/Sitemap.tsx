/*
 * ACON Academy Sitemap Page — Neo-Institutional Modernism
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About ACON Academy", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Admissions", href: "/admissions" },
      { label: "Campuses", href: "/campuses" },
      { label: "Student Life", href: "/student-life" },
      { label: "News & Blog", href: "/news" },
      { label: "Contact Us", href: "/contact" },
      { label: "Free Trial Classes", href: "/free-classes" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "CLB-5 French Foundations Program (6 Months)", href: "/programs/french-foundations" },
      { label: "CLB-7 French Intermediate / Advanced (10 Months)", href: "/programs/intermediate-advanced" },
      { label: "Intensive Exam Preparation Program (30 Days)", href: "/programs/exam-preparation" },
      { label: "French for PR & Citizens", href: "/programs/french-for-pr" },
      { label: "French for Youth (Ages 13–18)", href: "/programs/french-for-youth" },
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
    ],
  },
  {
    title: "Campuses",
    links: [
      { label: "Surrey Campus", href: "/campuses#surrey" },
      { label: "Kelowna Campus", href: "/campuses#kelowna" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { label: "Academic Counselling", href: "/student-life/academic-counselling" },
      { label: "TEF / TCF Exam Training", href: "/student-life/exam-training" },
      { label: "Student Study Spaces", href: "/student-life/study-spaces" },
      { label: "Student Resources", href: "/student-life/student-resources" },
      { label: "Community Events", href: "/student-life/community-events" },
    ],
  },
  {
    title: "About ACON",
    links: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Values", href: "/about/mission-values" },
      { label: "Accreditation", href: "/about/accreditation" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    title: "News & Blog",
    links: [
      { label: "$2,000 Financial Aid Now Available at Surrey Campus", href: "/news/financial-aid-2026" },
      { label: "Why French Language Skills Are a Game-Changer for Canadian PR", href: "/news/why-french-for-pr" },
      { label: "TEF vs. TCF: Which French Exam Should You Take?", href: "/news/tef-vs-tcf" },
      { label: "Canadian Language Benchmarks (CLB) Explained", href: "/news/clb-explained" },
      { label: "5 Proven Strategies to Learn French Faster as an Adult", href: "/news/5-tips-faster-french" },
      { label: "The Francophone Mobility Work Permit", href: "/news/francophone-mobility" },
      { label: "Kelowna Campus Expands Weekend Class Offerings", href: "/news/kelowna-campus-update" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      <div className="bg-[rgb(9,39,88)] py-12">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Sitemap</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-white">Sitemap</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sitemapSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display font-bold text-[rgb(9,39,88)] text-lg mb-4 pb-2 border-b-2 border-[rgb(31,106,173)]">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-body text-[rgb(40,55,80)] hover:text-[rgb(31,106,210)] transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight size={12} className="flex-shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
