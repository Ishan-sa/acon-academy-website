/*
 * ACON Academy — Application Deadlines Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Calendar, Clock, AlertCircle } from "lucide-react";

const intakes = [
  {
    campus: "Surrey",
    sessions: [
      { name: "Summer 2026 Intake", startDate: "June 2, 2026", deadline: "May 23, 2026", assessmentDeadline: "May 16, 2026", status: "Open", spots: "Limited" },
      { name: "Fall 2026 Intake", startDate: "September 8, 2026", deadline: "August 28, 2026", assessmentDeadline: "August 21, 2026", status: "Open", spots: "Available" },
      { name: "Winter 2027 Intake", startDate: "January 5, 2027", deadline: "December 19, 2026", assessmentDeadline: "December 12, 2026", status: "Upcoming", spots: "Available" },
    ],
  },
  {
    campus: "Kelowna",
    sessions: [
      { name: "Summer 2026 Intake", startDate: "June 9, 2026", deadline: "May 30, 2026", assessmentDeadline: "May 23, 2026", status: "Open", spots: "Limited" },
      { name: "Fall 2026 Intake", startDate: "September 15, 2026", deadline: "September 4, 2026", assessmentDeadline: "August 28, 2026", status: "Open", spots: "Available" },
      { name: "Winter 2027 Intake", startDate: "January 12, 2027", deadline: "January 2, 2027", assessmentDeadline: "December 19, 2026", status: "Upcoming", spots: "Available" },
    ],
  },
];

const examIntakes = [
  { cohort: "TEF/TCF Prep — June 2026", startDate: "May 26, 2026", examDate: "Late June 2026", deadline: "May 19, 2026", campus: "Surrey", spots: "3 spots remaining" },
  { cohort: "TEF/TCF Prep — July 2026", startDate: "June 29, 2026", examDate: "Late July 2026", deadline: "June 22, 2026", campus: "Surrey", spots: "Available" },
  { cohort: "TEF/TCF Prep — August 2026", startDate: "July 27, 2026", examDate: "Late August 2026", deadline: "July 20, 2026", campus: "Surrey & Kelowna", spots: "Available" },
  { cohort: "TEF/TCF Prep — September 2026", startDate: "August 31, 2026", examDate: "Late September 2026", deadline: "August 24, 2026", campus: "Surrey & Kelowna", spots: "Available" },
];

export default function ApplicationDeadlines() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <ChevronRight size={14} />
            <span className="text-white">Application Deadlines</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Intake Schedule</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Application Deadlines</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              ACON Academy runs monthly intakes at both campuses. Class sizes are capped at 12 students — apply early to secure your spot.
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 border-b border-amber-200 py-4">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-amber-800 font-body text-sm">
            <strong>Important:</strong> All students must complete a CLB placement assessment before their application deadline. Assessments must be scheduled at least one week before the application deadline. Contact admissions to book your assessment.
          </p>
        </div>
      </div>

      {/* Standard Program Intakes */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Standard Programs</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Upcoming Intake Dates</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">Beginner, Elementary, Intermediate, and Advanced French programs. New cohorts start every 12 weeks.</p>
          </div>
          <div className="space-y-10">
            {intakes.map((campus) => (
              <div key={campus.campus}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center">
                    <Calendar size={16} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)]">{campus.campus} Campus</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[rgb(9,39,88)] text-white">
                        <th className="text-left px-6 py-4 font-body font-bold text-sm">Intake</th>
                        <th className="text-center px-6 py-4 font-body font-bold text-sm">Program Start</th>
                        <th className="text-center px-6 py-4 font-body font-bold text-sm">Assessment Deadline</th>
                        <th className="text-center px-6 py-4 font-body font-bold text-sm">Application Deadline</th>
                        <th className="text-center px-6 py-4 font-body font-bold text-sm">Availability</th>
                        <th className="text-center px-6 py-4 font-body font-bold text-sm">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campus.sessions.map((session, i) => (
                        <tr key={session.name} className={i % 2 === 0 ? 'bg-white' : 'bg-[rgb(221,236,255)]'}>
                          <td className="px-6 py-4 font-body font-bold text-[rgb(9,39,88)] text-sm">{session.name}</td>
                          <td className="px-6 py-4 text-center font-body text-[rgb(40,55,80)] text-sm">{session.startDate}</td>
                          <td className="px-6 py-4 text-center font-body text-[rgb(40,55,80)] text-sm">{session.assessmentDeadline}</td>
                          <td className="px-6 py-4 text-center font-body font-semibold text-[rgb(9,39,88)] text-sm">{session.deadline}</td>
                          <td className="px-6 py-4 text-center">
                            <span className={`text-xs font-body font-bold px-2.5 py-1 rounded-sm ${session.spots === 'Limited' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                              {session.spots}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className={`text-xs font-body font-bold px-2.5 py-1 rounded-sm ${session.status === 'Open' ? 'bg-[rgb(221,236,255)] text-[rgb(31,106,173)]' : 'bg-gray-100 text-gray-600'}`}>
                              {session.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Prep Intakes */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Exam Preparation</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Intensive TEF/TCF Preparation Cohorts</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">30-day and 60-day intensive cohorts aligned with TEF Canada and TCF Canada examination dates. These cohorts fill quickly — apply as early as possible.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[rgb(9,39,88)] text-white">
                  <th className="text-left px-6 py-4 font-body font-bold text-sm">Cohort</th>
                  <th className="text-center px-6 py-4 font-body font-bold text-sm">Start Date</th>
                  <th className="text-center px-6 py-4 font-body font-bold text-sm">Target Exam</th>
                  <th className="text-center px-6 py-4 font-body font-bold text-sm">Application Deadline</th>
                  <th className="text-center px-6 py-4 font-body font-bold text-sm">Campus</th>
                  <th className="text-center px-6 py-4 font-body font-bold text-sm">Availability</th>
                </tr>
              </thead>
              <tbody>
                {examIntakes.map((intake, i) => (
                  <tr key={intake.cohort} className={i % 2 === 0 ? 'bg-white' : 'bg-[rgb(221,236,255)]'}>
                    <td className="px-6 py-4 font-body font-bold text-[rgb(9,39,88)] text-sm">{intake.cohort}</td>
                    <td className="px-6 py-4 text-center font-body text-[rgb(40,55,80)] text-sm">{intake.startDate}</td>
                    <td className="px-6 py-4 text-center font-body text-[rgb(40,55,80)] text-sm">{intake.examDate}</td>
                    <td className="px-6 py-4 text-center font-body font-semibold text-[rgb(9,39,88)] text-sm">{intake.deadline}</td>
                    <td className="px-6 py-4 text-center font-body text-[rgb(60,80,110)] text-sm">{intake.campus}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-xs font-body font-bold px-2.5 py-1 rounded-sm ${intake.spots.includes('remaining') ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                        {intake.spots}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Recommended Timeline</div>
              <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-6">How Far in Advance Should You Apply?</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-6">
                We recommend applying at least 3–4 weeks before your desired program start date. This allows time for your CLB placement assessment, Enrollment Agreement review, and tuition payment processing.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-6">
                For intensive exam preparation cohorts, apply as early as possible — these cohorts fill quickly, particularly for TEF/TCF dates that align with Express Entry draw cycles.
              </p>
              <div className="space-y-3">
                {[
                  { week: "4+ weeks before", action: "Contact admissions and schedule CLB assessment" },
                  { week: "3 weeks before", action: "Complete CLB assessment and receive program recommendation" },
                  { week: "2 weeks before", action: "Review and sign Enrollment Agreement" },
                  { week: "1 week before", action: "Submit tuition payment and confirm enrollment" },
                  { week: "Day 1", action: "Attend orientation and begin classes" },
                ].map((item) => (
                  <div key={item.week} className="flex items-center gap-4 bg-white border border-[rgb(210,225,245)] rounded-sm px-5 py-3">
                    <div className="text-xs font-body font-bold text-[rgb(31,106,173)] w-28 flex-shrink-0">{item.week}</div>
                    <div className="text-sm font-body text-[rgb(40,55,80)]">{item.action}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[rgb(9,39,88)] rounded-sm p-10">
              <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-6">Ready to Apply?</div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Start Your Application Today</h3>
              <p className="text-white/70 font-body leading-relaxed mb-8">Contact our admissions team to schedule your CLB placement assessment and begin the enrollment process. There is no application fee.</p>
              <div className="space-y-4">
                <a href="tel:+18773592035" className="flex items-center gap-3 text-white font-body text-sm hover:text-white/80 transition-colors">
                  <span className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0">📞</span>
                  +1 (877) 359-2035
                </a>
                <a href="mailto:info@aconacademy.ca" className="flex items-center gap-3 text-white font-body text-sm hover:text-white/80 transition-colors">
                  <span className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0">✉️</span>
                  info@aconacademy.ca
                </a>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-6 py-3 rounded-sm transition-colors text-sm w-full justify-center">
                  Contact Admissions <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
