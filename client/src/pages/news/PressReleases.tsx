/*
 * ACON Academy — Press Releases Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Calendar, Download } from "lucide-react";

const releases = [
  {
    date: "April 22, 2026",
    title: "ACON Academy Launches 60-Day Intensive TEF/TCF Preparation Program to Meet Growing Demand from Express Entry Applicants",
    location: "Surrey, BC",
    body: `ACON Academy, British Columbia's premier French language institution, today announced the launch of a new 60-day intensive TEF/TCF preparation program at its Surrey campus. The program is designed to meet growing demand from Express Entry applicants who require additional preparation time before their examination date.

The 60-day program builds on ACON Academy's existing 30-day intensive preparation cohort, which has maintained a 95% pass rate since its introduction in 2023. The new program offers students a more gradual preparation pathway while maintaining the intensive daily instruction schedule that has made ACON's examination preparation programs the most sought-after in British Columbia.

"We have seen a significant increase in demand from Express Entry applicants who need CLB 9 or higher for maximum CRS points," said the ACON Academy Director of Programs. "The 60-day program gives students who are starting from CLB 6 or 7 the time they need to reach that target without rushing the process."

The first 60-day cohort begins June 29, 2026, at the Surrey campus. Enrollment is now open. Class sizes are capped at 8 students.`,
    contact: "info@aconacademy.ca | +1 (877) 359-2035",
  },
  {
    date: "February 28, 2026",
    title: "ACON Academy and Surrey Local Immigration Partnership Announce Formal Referral Partnership",
    location: "Surrey, BC",
    body: `ACON Academy and the Surrey Local Immigration Partnership (SLIP) today announced a formal referral partnership to connect eligible newcomers to BC with ACON Academy's French language programs.

Under the partnership, SLIP settlement workers will refer newcomers who have identified French language proficiency as a goal for their immigration or employment pathway to ACON Academy for a complimentary CLB placement assessment and program consultation. ACON Academy will provide SLIP with quarterly reports on referred students' enrollment, attendance, and program completion outcomes.

"Surrey has one of the largest newcomer populations in Canada, and French language skills are increasingly important for the immigration pathways that our clients are pursuing," said a SLIP representative. "ACON Academy's programs are the most rigorous and outcome-focused French language programs we have encountered in BC."

The partnership reflects ACON Academy's commitment to serving BC's newcomer communities and its recognition that access to quality French language education is a critical component of successful settlement and immigration outcomes.`,
    contact: "info@aconacademy.ca | +1 (877) 359-2035",
  },
  {
    date: "January 8, 2026",
    title: "ACON Academy Announces Kelowna Campus Expansion: New Study Rooms and Computer Lab Upgrades",
    location: "Kelowna, BC",
    body: `ACON Academy today announced a significant expansion of its Kelowna campus facilities, including the addition of two new quiet study rooms and a comprehensive upgrade of the campus computer lab.

The expansion, completed during the winter break, brings the Kelowna campus's quiet study room capacity to four rooms — matching the Surrey campus — and upgrades the computer lab with new workstations and expanded access to TEF/TCF practice software.

"The Kelowna campus has grown significantly over the past two years," said the ACON Academy Director. "This expansion reflects our commitment to providing Kelowna students with the same quality of facilities and resources that Surrey students have access to."

The new study rooms are available for booking by all enrolled Kelowna students via the ACON Student Portal. The upgraded computer lab is open to all enrolled students during campus hours.`,
    contact: "info@aconacademy.ca | +1 (877) 359-2035",
  },
];

export default function PressReleases() {
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
            <span className="text-white">Press Releases</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Media Centre</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Press Releases</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Official press releases from ACON Academy. For media inquiries, contact our communications team at info@aconacademy.ca.
            </p>
          </div>
        </div>
      </div>

      {/* Media Contact */}
      <div className="bg-[rgb(31,106,173)] py-5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center gap-3">
          <span className="text-white font-body text-sm">
            <strong>Media Inquiries:</strong> info@aconacademy.ca · +1 (877) 359-2035 · For interview requests, please include your publication name and deadline in your email.
          </span>
        </div>
      </div>

      {/* Press Releases */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {releases.map((release) => (
              <div key={release.title} className="bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="border-b border-[rgb(210,225,245)] px-8 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs font-body text-[rgb(100,120,150)]">
                      <Calendar size={12} />{release.date}
                    </div>
                    <span className="text-xs font-body text-[rgb(100,120,150)]">{release.location}</span>
                  </div>
                  <span className="text-xs font-body font-bold px-2.5 py-1 rounded-sm bg-[rgb(221,236,255)] text-[rgb(31,106,173)]">Press Release</span>
                </div>
                <div className="p-8">
                  <h2 className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">{release.title}</h2>
                  <div className="space-y-4">
                    {release.body.split('\n\n').map((para, i) => (
                      <p key={i} className="font-body text-[rgb(40,55,80)] leading-relaxed text-sm">{para}</p>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-[rgb(210,225,245)]">
                    <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-1">Media Contact</div>
                    <div className="text-sm font-body text-[rgb(60,80,110)]">{release.contact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Media Kit Available</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Download ACON Academy's media kit for brand assets, institutional fact sheets, and photography guidelines.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/about/media-kit" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              View Media Kit <ArrowRight size={16} />
            </Link>
            <a href="mailto:info@aconacademy.ca?subject=Media Inquiry" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
              Media Inquiry
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
