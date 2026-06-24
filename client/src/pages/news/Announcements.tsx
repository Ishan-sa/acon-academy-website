/*
 * ACON Academy — Announcements Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Calendar } from "lucide-react";

const announcements = [
  {
    date: "May 8, 2026",
    category: "Enrollment",
    title: "Summer 2026 Intake Now Open — Limited Spots at Surrey Campus",
    body: "ACON Academy is pleased to announce that enrollment is now open for the Summer 2026 intake at our Surrey campus. The Summer 2026 cohort begins June 2, 2026. Class sizes are capped at 12 students per cohort. Students interested in the Summer 2026 intake are encouraged to contact our admissions team and schedule their CLB placement assessment as soon as possible. The application deadline is May 23, 2026.",
    tag: "New",
  },
  {
    date: "April 22, 2026",
    category: "Programs",
    title: "ACON Academy Introduces 60-Day Intensive TEF/TCF Preparation Program",
    body: "ACON Academy is expanding its examination preparation offerings with the introduction of a new 60-day intensive TEF/TCF preparation program. The 60-day program is designed for students who require a more gradual approach to examination preparation than the existing 30-day intensive cohort. The first 60-day cohort begins June 29, 2026, at the Surrey campus. Enrollment is now open.",
    tag: "New Program",
  },
  {
    date: "April 10, 2026",
    category: "Campus",
    title: "Kelowna Campus Expands: New Quiet Study Rooms Now Available",
    body: "ACON Academy is pleased to announce the opening of two new quiet study rooms at our Kelowna campus. The rooms are available for booking by all enrolled Kelowna students via the ACON Student Portal. Bookings can be made in 1-hour or 2-hour blocks. The new rooms bring Kelowna's total quiet study room capacity to four rooms, matching the Surrey campus.",
    tag: null,
  },
  {
    date: "February 28, 2026",
    category: "Community",
    title: "ACON Academy Partners with Surrey Local Immigration Partnership",
    body: "ACON Academy is pleased to announce a new partnership with the Surrey Local Immigration Partnership (SLIP). Under this partnership, SLIP will refer eligible newcomers to ACON Academy's French language programs, and ACON will provide SLIP with regular updates on student progress and program outcomes. The partnership reflects ACON's commitment to serving the settlement needs of BC's newcomer communities.",
    tag: null,
  },
  {
    date: "January 15, 2026",
    category: "Enrollment",
    title: "Winter 2026 Intake: Final Spots Available at Both Campuses",
    body: "The Winter 2026 intake at both the Surrey and Kelowna campuses is now in its final enrollment phase. A small number of spots remain available across all program levels. Students who wish to begin in January 2026 must complete their CLB placement assessment and submit their enrollment documentation by January 9, 2026. Contact our admissions team immediately to check availability.",
    tag: null,
  },
];

export default function Announcements() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/news" className="hover:text-white transition-colors">News</Link>
            <ChevronRight size={14} />
            <span className="text-white">Announcements</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Official Communications</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Announcements</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Official announcements from ACON Academy — enrollment updates, program changes, campus news, and institutional communications.
            </p>
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="space-y-6">
            {announcements.map((item) => (
              <div key={item.title} className="bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-body font-bold px-2.5 py-1 rounded-sm bg-[rgb(221,236,255)] text-[rgb(31,106,173)]">{item.category}</span>
                    {item.tag && <span className="text-xs font-body font-bold px-2.5 py-1 rounded-sm bg-[rgb(9,39,88)] text-white">{item.tag}</span>}
                    <div className="flex items-center gap-1.5 text-xs font-body text-[rgb(100,120,150)] ml-auto">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4">{item.title}</h2>
                  <p className="font-body text-[rgb(40,55,80)] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">For the latest enrollment updates and program announcements, contact our admissions team directly.</p>
          <Link href="/contact" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors inline-flex items-center gap-2">
            Contact ACON Academy <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
