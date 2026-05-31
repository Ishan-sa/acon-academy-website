/*
 * ACON Academy — Our Story Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight } from "lucide-react";

const milestones = [
  { year: "2018", title: "Founded in Surrey, BC", desc: "ACON Academy opens its first campus in Surrey, British Columbia, with a mission to deliver professional-grade French instruction to newcomers and residents across the Lower Mainland." },
  { year: "2019", title: "CLB-Aligned Curriculum Launched", desc: "We develop and launch our proprietary Canadian Language Benchmark–aligned curriculum, the first of its kind designed specifically for the immigration and citizenship context in BC." },
  { year: "2020", title: "TEF & TCF Exam Preparation Programs", desc: "In response to growing demand, ACON introduces dedicated TEF Canada and TCF Canada examination preparation programs, achieving an 89% pass rate in the inaugural cohort." },
  { year: "2021", title: "PTIB Registration Achieved", desc: "ACON Academy receives registration from the BC Private Training Institutions Branch (PTIB), cementing our status as a recognized private post-secondary institution in British Columbia." },
  { year: "2022", title: "Kelowna Campus Opens", desc: "We expand to the Okanagan region with the opening of our Kelowna campus, extending access to structured French language education to students across interior BC." },
  { year: "2023", title: "800+ Students Served", desc: "ACON Academy surpasses 800 enrolled students, with alumni now represented across all major Canadian immigration pathways — Express Entry, PNP, and Francophone Mobility." },
  { year: "2024", title: "95% Examination Pass Rate", desc: "Our students achieve a 95% aggregate pass rate across TEF and TCF examinations, reflecting the strength of our curriculum and the dedication of our faculty." },
  { year: "2025", title: "Record Year & Expansion Plans", desc: "ACON records its highest enrollment year to date and announces plans to expand its program offerings and campus facilities to meet growing demand across British Columbia." },
];

export default function OurStory() {
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
            <span className="text-white">Our Story</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Est. 2018 · Surrey, British Columbia</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Our Story</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              From a single classroom in Surrey to British Columbia's most trusted French language academy — the story of ACON is one of purpose, community, and an unwavering belief that language opens doors.
            </p>
          </div>
        </div>
      </div>

      {/* Founding Story */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">The Beginning</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Bonjour to Fluency — How It All Started</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                ACON Academy was founded in 2018 with a singular and urgent observation: thousands of newcomers, permanent residents, and Canadians in British Columbia needed structured, effective French language education — not for cultural enrichment alone, but for real, life-changing outcomes.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                The Canadian immigration system rewards French proficiency with significant advantages in the Express Entry system, the Francophone Mobility Program, and the citizenship process. Yet the available options for serious, examination-focused French instruction in BC were limited, expensive, and rarely designed with the immigrant experience in mind.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                Our founders — themselves navigating the Canadian immigration system — recognized this gap and set out to build something different: a French language academy that combined the rigour of post-secondary instruction with the accessibility and cultural sensitivity that newcomers deserve.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed">
                Starting with a small cohort at our Surrey campus, ACON developed a curriculum uniquely tailored to the Canadian context — one that addresses the specific language competencies required by the Canadian Language Benchmark (CLB) framework and the TEF/TCF examinations used in immigration processes.
              </p>
            </div>
            <div>
              <img
                src="/manus-storage/campus_classroom2_63399c3f.jpg"
                alt="ACON Academy classroom"
                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[rgb(9,39,88)] py-12">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2018", label: "Year Founded" },
              { number: "800+", label: "Students Served" },
              { number: "95%", label: "Exam Pass Rate" },
              { number: "2", label: "BC Campuses" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60 font-body text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">A Decade of Growth</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Our Journey, Year by Year</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[rgb(210,225,245)] hidden lg:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-12 items-start">
                  <div className="flex lg:flex-col items-center gap-4 lg:gap-0">
                    <div className="w-16 h-16 rounded-full bg-[rgb(9,39,88)] text-white font-display font-bold text-sm flex items-center justify-center flex-shrink-0 relative z-10">
                      {m.year}
                    </div>
                  </div>
                  <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-7">
                    <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-3">{m.title}</h3>
                    <p className="font-body text-[rgb(60,80,110)] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/manus-storage/campus_reception_2757a7ae.jpg"
                alt="Students collaborating"
                className="w-full h-[420px] object-cover rounded-sm shadow-lg"
              />
            </div>
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Where We Are Going</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Our Vision for the Future</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                ACON Academy's vision is to become the definitive French language institution for newcomers and Canadians across British Columbia — and ultimately, across Canada.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                We are expanding our program offerings, investing in faculty development, and deepening our partnerships with immigration practitioners, settlement agencies, and community organizations to ensure that every student who walks through our doors has the support they need to succeed.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                French is not just a language — it is a key that unlocks permanent residency, citizenship, career advancement, and belonging in Canada. ACON Academy exists to put that key in every student's hands.
              </p>
              <Link href="/about/mission-values" className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-bold px-7 py-3.5 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors">
                Read Our Mission & Values <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Become Part of the ACON Story</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Join hundreds of students who have transformed their lives through French language education at ACON Academy.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-classes" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Claim Your Free Class <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
