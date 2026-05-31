/*
 * ACON Academy — Transfer Students Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, FileText, Clock } from "lucide-react";

const transferSources = [
  {
    source: "Government-Funded Language Programs (LINC/CLIC)",
    desc: "Students who have completed or are transitioning out of LINC (Language Instruction for Newcomers to Canada) or CLIC (Cours de langue pour les immigrants au Canada) programs are welcome to transfer to ACON Academy. We will review your CLB assessment results from your previous program to determine your placement level.",
    credit: "CLB assessment results accepted; placement assessment may be waived",
  },
  {
    source: "Other Private Language Schools",
    desc: "Students transferring from other private French or English language schools in BC will complete a CLB placement assessment to determine their current level. Depending on the documentation provided, partial credit toward program hours may be considered.",
    credit: "CLB placement assessment required; partial credit considered case by case",
  },
  {
    source: "Post-Secondary French Programs",
    desc: "Students who have completed French language courses at a college or university in Canada or internationally may be eligible for advanced placement based on their academic transcripts and CLB assessment results.",
    credit: "Transcripts reviewed; CLB assessment required; advanced placement possible",
  },
  {
    source: "Self-Directed Learners",
    desc: "Students who have been learning French independently — through apps, online courses, or immersion — are welcome to enroll at ACON Academy. A CLB placement assessment will determine the appropriate starting level.",
    credit: "CLB placement assessment required; no prior documentation needed",
  },
];

const process = [
  { step: "01", title: "Contact Admissions", desc: "Reach out to our admissions team and indicate that you are transferring from another program. Provide the name of your previous institution and your most recent French language assessment results if available." },
  { step: "02", title: "Submit Prior Learning Documentation", desc: "Provide any available documentation from your previous program: CLB assessment results, transcripts, course completion letters, or attendance records. This documentation is used to determine whether a full or partial CLB placement assessment is required." },
  { step: "03", title: "Complete CLB Placement Assessment", desc: "Most transfer students will complete a CLB placement assessment to confirm their current French level. In some cases, where recent CLB results are available, this step may be waived or abbreviated." },
  { step: "04", title: "Receive Transfer Credit Determination", desc: "Our academic team will review your documentation and assessment results and advise on any transfer credit or advanced placement that may apply to your enrollment." },
  { step: "05", title: "Complete Enrollment", desc: "Review and sign your Enrollment Agreement, submit tuition payment, and confirm your program start date. Transfer students follow the same enrollment process as new students from this point forward." },
];

export default function TransferStudents() {
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
            <span className="text-white">Transfer Students</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Continuing Your Journey</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Transfer Students</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Already started your French language education elsewhere? ACON Academy welcomes transfer students from government programs, private schools, and post-secondary institutions. We will assess your prior learning and place you at the right level to continue your progress.
            </p>
          </div>
        </div>
      </div>

      {/* Why Transfer to ACON */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Why Students Transfer to ACON</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Continue Your Progress at BC's Premier French Academy</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                Many students come to ACON Academy after completing government-funded language programs, or after finding that their previous institution did not offer the examination preparation or advanced programming they need.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                ACON Academy's CLB-aligned curriculum, small class sizes, and examination-focused instruction make us the natural next step for students who have built a foundation elsewhere and are now ready to accelerate toward their immigration or career goals.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                We do not require you to start over. Our placement process ensures that you continue from where you are — not from the beginning.
              </p>
              <div className="space-y-3">
                {[
                  "No requirement to restart from beginner level",
                  "Prior CLB results accepted for placement",
                  "Transfer credit considered for eligible students",
                  "Monthly intake dates — no long waiting periods",
                  "Dedicated admissions support for transfer students",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-[rgb(31,106,173)] flex-shrink-0" />
                    <span className="font-body text-[rgb(40,55,80)] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[rgb(9,39,88)] rounded-sm p-8 text-white">
                <div className="font-display text-3xl font-bold mb-2">Most Students</div>
                <div className="text-[rgb(70,140,210)] font-body font-semibold mb-4">can begin within 2–3 weeks of contacting us</div>
                <p className="text-white/70 font-body text-sm leading-relaxed">The transfer assessment process is typically completed within one week. Most transfer students can begin at ACON within 2–3 weeks of their initial inquiry.</p>
              </div>
              <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-8">
                <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">LINC/CLIC Graduates</div>
                <p className="text-[rgb(40,55,80)] font-body text-sm leading-relaxed">
                  If you have completed a LINC or CLIC program and are looking to continue toward higher CLB levels or examination preparation, ACON Academy is the ideal next step. We accept CLB assessment results from LINC/CLIC programs and can often waive the placement assessment for recent graduates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Sources */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Where You're Coming From</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Transfer Pathways</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">ACON Academy accepts transfer students from a range of prior learning backgrounds. Here is how each pathway works.</p>
          </div>
          <div className="space-y-5">
            {transferSources.map((item) => (
              <div key={item.source} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="bg-[rgb(221,236,255)] px-8 py-5">
                  <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)]">{item.source}</h3>
                </div>
                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="font-body text-[rgb(40,55,80)] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="bg-[rgb(9,39,88)] rounded-sm p-5">
                    <div className="text-xs font-body font-semibold text-[rgb(70,140,210)] tracking-widest uppercase mb-2">Transfer Credit</div>
                    <p className="text-white/80 font-body text-sm leading-relaxed">{item.credit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Step by Step</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">The Transfer Enrollment Process</h2>
          </div>
          <div className="space-y-4">
            {process.map((step) => (
              <div key={step.step} className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-0 bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="bg-[rgb(9,39,88)] p-6 flex items-center justify-center">
                  <div className="font-display text-4xl font-bold text-white/20">{step.step}</div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-2">{step.title}</h3>
                  <p className="font-body text-[rgb(60,80,110)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Continue Your French Journey at ACON?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Contact our admissions team to discuss your transfer options. We will review your prior learning and find the right program for where you are today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Contact Admissions <ArrowRight size={16} />
            </Link>
            <Link href="/free-classes" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
              Try a Free Class First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
