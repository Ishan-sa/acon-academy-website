/*
 * ACON Academy — Accreditation Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, Award, FileText } from "lucide-react";

const accreditations = [
  {
    badge: "CLB",
    fullName: "Canadian Language Benchmarks Aligned",
    desc: "All ACON Academy programs are designed and delivered in alignment with the Canadian Language Benchmarks (CLB) framework — the national standard used by the Government of Canada to describe, measure, and recognize the French and English language proficiency of adult immigrants and prospective immigrants.",
    significance: "CLB alignment ensures that ACON's curriculum directly maps to the language competencies required for immigration applications, citizenship tests, and workplace integration in Canada. Students can trust that their learning is directly applicable to their Canadian goals.",
    details: ["CLB 1–12 curriculum mapping", "Formal CLB placement assessments", "Progress benchmarked to CLB levels", "Recognized by immigration practitioners"],
  },
  {
    badge: "TEF",
    fullName: "TEF Canada Examination Preparation",
    desc: "ACON Academy's examination preparation programs are specifically designed to prepare students for the Test d'Évaluation de Français (TEF Canada) — one of two French language proficiency tests accepted by Immigration, Refugees and Citizenship Canada (IRCC) for immigration and citizenship applications.",
    significance: "TEF Canada is accepted for Express Entry, Provincial Nominee Programs, and Canadian citizenship applications. ACON's preparation methodology is based on official TEF Canada exam specifications and has produced a 95% pass rate among our students.",
    details: ["Full mock TEF Canada examinations", "Section-by-section performance analysis", "Targeted improvement sessions", "Official exam registration guidance"],
  },
  {
    badge: "TCF",
    fullName: "TCF Canada Examination Preparation",
    desc: "ACON Academy also prepares students for the Test de Connaissance du Français (TCF Canada) — the second French language proficiency test accepted by IRCC. Our TCF preparation program is structured to address the specific format, timing, and scoring methodology of this examination.",
    significance: "TCF Canada is accepted for the same immigration and citizenship pathways as TEF Canada. Some students perform better on one format than the other — ACON's instructors help each student identify which exam best suits their strengths.",
    details: ["Full mock TCF Canada examinations", "Comparative TEF vs. TCF guidance", "Listening and reading comprehension focus", "Writing and speaking component preparation"],
  },
];

export default function Accreditation() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/about" className="hover:text-white transition-colors">About ACON</Link>
            <ChevronRight size={14} />
            <span className="text-white">Accreditation</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Recognition & Standards</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Accreditation</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              ACON Academy's programs are recognized, regulated, and aligned with the standards that matter most to students pursuing French language education for Canadian immigration and citizenship.
            </p>
          </div>
        </div>
      </div>

      {/* Why Accreditation Matters */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Why It Matters</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">What Accreditation Means for You</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                When you enroll at ACON Academy, you are not just paying for classes — you are investing in a credential pathway that is recognized by the Government of Canada, the Province of British Columbia, and the immigration system.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                Our CLB alignment means your learning maps directly to immigration requirements. Our TEF and TCF preparation programs are built on official exam specifications — not generic French instruction.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                Before enrolling at any French language institution, ask whether they are CLB-aligned and examination-preparation certified. At ACON, the answer to both is yes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "CLB Aligned", icon: Award },
                  { label: "TEF Preparation", icon: FileText },
                  { label: "TCF Preparation", icon: CheckCircle },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-4">
                    <Icon size={18} className="text-[rgb(31,106,173)] flex-shrink-0" />
                    <span className="font-body font-bold text-[rgb(9,39,88)] text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[rgb(9,39,88)] rounded-sm p-10">
              <div className="text-center mb-8">
                <div className="font-display text-6xl font-bold text-white mb-2">95%</div>
                <div className="text-[rgb(70,140,210)] font-body font-semibold">Examination Pass Rate</div>
                <div className="text-white/50 text-sm font-body mt-1">TEF & TCF Canada — 2025</div>
              </div>
              <div className="border-t border-white/10 pt-8 space-y-4">
                {[
                  { label: "Students Served", value: "800+" },
                  { label: "Years Operating", value: "2+" },
                  { label: "BC Campuses", value: "2" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-white/60 font-body text-sm">{item.label}</span>
                    <span className="text-white font-body font-bold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Details */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Full Details</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Our Accreditations & Recognitions</h2>
          </div>
          <div className="space-y-8">
            {accreditations.map((item) => (
              <div key={item.badge} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="bg-[rgb(9,39,88)] px-8 py-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl font-bold text-white">{item.badge}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{item.fullName}</h3>
                  </div>
                </div>
                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-3">About This Recognition</div>
                    <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">{item.desc}</p>
                    <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-3">Why It Matters to You</div>
                    <p className="font-body text-[rgb(40,55,80)] leading-relaxed">{item.significance}</p>
                  </div>
                  <div className="bg-[rgb(221,236,255)] rounded-sm p-6">
                    <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-4">Key Details</div>
                    <ul className="space-y-2.5">
                      {item.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-body text-[rgb(40,55,80)]">{d}</span>
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

      {/* Francophone Mobility */}
      <section className="py-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Additional Recognition</div>
              <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-5">Francophone Mobility Program Compatible</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                ACON Academy's programs are compatible with the Francophone Mobility Program — a federal immigration pathway that allows French-speaking foreign nationals to work in Canada outside of Quebec without a Labour Market Impact Assessment (LMIA).
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-6">
                Students who achieve the required CLB levels through ACON's programs may use their language credentials as part of a Francophone Mobility application. Our admissions team can advise on the specific CLB requirements for this pathway.
              </p>
              <Link href="/admissions" className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-bold px-7 py-3.5 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors">
                Speak to Admissions <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-[rgb(9,39,88)] rounded-sm p-8 text-white">
              <h3 className="font-display text-xl font-bold mb-5">Questions About Accreditation?</h3>
              <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
                Our admissions team can provide documentation of ACON Academy's accreditation status for immigration applications, employer verification, or personal records. Contact us directly.
              </p>
              <div className="space-y-3">
                <a href="tel:+18773592035" className="flex items-center gap-3 text-sm font-body text-white/70 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0">📞</span>
                  +1 (877) 359-2035
                </a>
                <a href="mailto:info@aconacademy.ca" className="flex items-center gap-3 text-sm font-body text-white/70 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0">✉️</span>
                  info@aconacademy.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
