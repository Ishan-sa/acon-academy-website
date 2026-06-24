/*
 * ACON Academy — Eligibility Requirements Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const programs = [
  {
    name: "Beginner French (CLB 1–3)",
    clb: "CLB 1–3",
    who: "Newcomers and residents with little to no prior French language experience.",
    requirements: [
      "No prior French language experience required",
      "Ability to read and write in at least one language (any language)",
      "Commitment to attend scheduled class sessions",
    ],
    idealFor: ["Recent newcomers to Canada", "Permanent residents beginning their French journey", "Individuals with no prior language learning experience"],
  },
  {
    name: "Elementary French (CLB 4–5)",
    clb: "CLB 4–5",
    who: "Students with basic French knowledge who can manage simple, familiar topics.",
    requirements: [
      "CLB 3 or equivalent prior French knowledge",
      "Ability to understand and produce simple French sentences",
      "CLB placement assessment confirming CLB 3–4 level",
    ],
    idealFor: ["Students who completed a beginner program", "Individuals with some prior French education", "Those targeting CLB 5 for basic immigration requirements"],
  },
  {
    name: "Intermediate French (CLB 6–7)",
    clb: "CLB 6–7",
    who: "Students who can communicate in familiar situations and are building toward fluency.",
    requirements: [
      "CLB 5 or equivalent confirmed by placement assessment",
      "Ability to understand and produce multi-sentence French communication",
      "Commitment to complete assigned practice outside of class",
    ],
    idealFor: ["Students targeting CLB 7 for Express Entry advantages", "Professionals preparing for francophone workplace environments", "Individuals preparing for TEF/TCF examination"],
  },
  {
    name: "Advanced French (CLB 8–10)",
    clb: "CLB 8–10",
    who: "Near-fluent students refining their French for professional, academic, or examination purposes.",
    requirements: [
      "CLB 7 or equivalent confirmed by placement assessment",
      "Strong command of French grammar and vocabulary",
      "Clear articulation of advanced learning goals",
    ],
    idealFor: ["Students targeting CLB 9–10 for citizenship or senior immigration pathways", "Professionals in francophone-dominant industries", "Students preparing for advanced TEF/TCF scores"],
  },
  {
    name: "Intensive Exam Preparation (TEF/TCF)",
    clb: "CLB 6+ Recommended",
    who: "Students with intermediate to advanced French who need to pass TEF Canada or TCF Canada for immigration or citizenship.",
    requirements: [
      "CLB 6 or higher recommended (CLB 5 minimum with advisor approval)",
      "Confirmed upcoming TEF/TCF examination date (preferred)",
      "High motivation and ability to commit to intensive study schedule",
    ],
    idealFor: ["Express Entry applicants needing TEF/TCF scores", "Citizenship applicants requiring French language proof", "Students who have previously attempted TEF/TCF and need targeted preparation"],
  },
];

export default function EligibilityRequirements() {
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
            <span className="text-white">Eligibility Requirements</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Who Can Enroll</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Eligibility Requirements</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              ACON Academy welcomes students at all levels of French proficiency. All ages are welcome — there is no age limit. Our programs serve anyone pursuing French language education for immigration, citizenship, career, or personal goals.
            </p>
          </div>
        </div>
      </div>

      {/* General Requirements */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">General Eligibility</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Who Can Enroll at ACON Academy</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-6">
                ACON Academy is open to anyone who wishes to learn French — all ages are welcome, with no age limit. We do not require Canadian citizenship, permanent residency, or any specific immigration status to enroll. Our programs serve newcomers, permanent residents, citizens, and international students alike.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { label: "Age", value: "All ages welcome — no age limit" },
                  { label: "Immigration Status", value: "No restriction — all statuses welcome" },
                  { label: "Prior French Knowledge", value: "Not required (placement assessment determines level)" },
                  { label: "Language of Instruction", value: "English and French" },
                  { label: "Class Format", value: "In-person at Surrey or Kelowna campus" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start justify-between py-3 border-b border-[rgb(210,225,245)]">
                    <span className="font-body text-sm font-semibold text-[rgb(60,80,110)]">{item.label}</span>
                    <span className="font-body text-sm font-bold text-[rgb(9,39,88)] text-right max-w-[55%]">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle size={18} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-body font-bold text-[rgb(9,39,88)] mb-1 text-sm">Not Sure Which Level You Are?</div>
                    <div className="font-body text-[rgb(60,80,110)] text-sm leading-relaxed">All new students complete a free CLB placement assessment before enrollment. This assessment determines your current French level and ensures you are placed in the program that will deliver the best results for your goals.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(9,39,88)] rounded-sm p-10">
              <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-6">Who We Serve</div>
              <div className="space-y-5">
                {[
                  { group: "Newcomers to Canada", desc: "Individuals who have recently arrived in Canada and need French for settlement, employment, or immigration pathways." },
                  { group: "Permanent Residents", desc: "PR holders building French proficiency for Express Entry advantages, Francophone Mobility, or citizenship." },
                  { group: "Canadian Citizens", desc: "Citizens seeking French for career advancement, professional licensing, or personal enrichment." },
                  { group: "International Students", desc: "Students on valid study permits who wish to add French language credentials to their Canadian education." },
                  { group: "Sponsored Employees", desc: "Employees whose employers are sponsoring French language training as part of a workplace integration program." },
                ].map(({ group, desc }) => (
                  <div key={group} className="flex items-start gap-4">
                    <CheckCircle size={16} className="text-[rgb(70,140,210)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-body font-bold text-white text-sm mb-0.5">{group}</div>
                      <div className="font-body text-white/60 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program-Level Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">By Program Level</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Program-Specific Requirements</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">Each program level has specific eligibility criteria. Your CLB placement assessment will confirm which program is the right fit.</p>
          </div>
          <div className="space-y-6">
            {programs.map((prog) => (
              <div key={prog.name} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="bg-[rgb(221,236,255)] px-8 py-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)]">{prog.name}</h3>
                    <p className="text-sm font-body text-[rgb(60,80,110)] mt-1">{prog.who}</p>
                  </div>
                  <span className="text-xs font-body font-bold px-3 py-1.5 rounded-sm bg-[rgb(9,39,88)] text-white flex-shrink-0 ml-4">{prog.clb}</span>
                </div>
                <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-4">Enrollment Requirements</div>
                    <ul className="space-y-2.5">
                      {prog.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-body text-[rgb(40,55,80)]">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-4">Ideal For</div>
                    <ul className="space-y-2.5">
                      {prog.idealFor.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[rgb(9,39,88)] mt-1.5 flex-shrink-0" />
                          <span className="text-sm font-body text-[rgb(40,55,80)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not Sure If You Qualify?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Contact our admissions team. We will review your situation and confirm which program is right for you — at no cost and with no obligation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Contact Admissions <ArrowRight size={16} />
            </Link>
            <Link href="/free-classes" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
              Try a Free Class
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
