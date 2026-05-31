/*
 * ACON Academy Programs Page — Neo-Institutional Modernism
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Clock, ArrowRight, ChevronRight, BookOpen, Users, Award } from "lucide-react";

const programs = [
  {
    badge: "CLB-5",
    duration: "6 Months",
    title: "French Foundations Program",
    level: "A1 / A2",
    description: "Designed for beginners, focusing on everyday communication and workplace readiness. Ideal for Francophone Mobility work permit applicants. Includes 3 months of language learning and 1 month of exam preparation.",
    href: "/programs/french-foundations",
    color: "rgb(9, 39, 88)",
    features: ["Everyday communication skills", "Workplace French readiness", "Francophone Mobility work permit prep", "CLB-5 language level attainment"],
  },
  {
    badge: "CLB-7",
    duration: "10 Months",
    title: "French Intermediate / Advanced",
    level: "B1 / B2",
    description: "Build professional fluency and prepare for permanent residence (PR) applications. Includes TEF and TCF exam preparation. 6 months of language learning plus 2 months of exam preparation.",
    href: "/programs/intermediate-advanced",
    color: "rgb(31, 106, 173)",
    features: ["Professional fluency development", "PR application preparation", "TEF & TCF exam training", "CLB-7 language level attainment"],
  },
  {
    badge: "30 Days",
    duration: "Intensive",
    title: "Exam Preparation Program",
    level: "A1/A2 → B1/B2",
    description: "Focused preparation for TCF and TEF exams. Ideal for students reviewing for an upcoming exam or returning examinees who need to refresh their skills.",
    href: "/programs/exam-preparation",
    color: "rgb(5, 26, 64)",
    features: ["TCF exam preparation", "TEF exam preparation", "Mock exam simulations", "Personalized feedback sessions"],
  },
  {
    badge: "PR",
    duration: "3 / 6 Months",
    title: "French for PR & Citizens",
    level: "A1/A2 → B1/B2",
    description: "Dedicated to Canadian residents passionate about learning French or looking to meet workplace language requirements for permanent residence.",
    href: "/programs/french-for-pr",
    color: "rgb(9, 39, 88)",
    features: ["Canadian immigration French requirements", "Workplace language compliance", "Flexible 3 or 6 month options", "PR application support"],
  },
  {
    badge: "Youth",
    duration: "3 / 6 Months",
    title: "French for Youth",
    level: "Ages 13–18",
    description: "Build French competency and immersion for youth ages 13–18, developing critical techniques for learning new languages in a supportive environment.",
    href: "/programs/french-for-youth",
    color: "rgb(31, 106, 173)",
    features: ["Age-appropriate curriculum", "Immersive learning environment", "Language competency building", "Flexible 3 or 6 month options"],
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Page Header */}
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Programs</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Academic Programs
          </h1>
          <p className="text-white/70 font-body text-xl max-w-2xl leading-relaxed">
            Curriculum uniquely curated to develop competencies that target Canadian immigration exams and professional fluency in French.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-[rgb(210,225,245)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-wrap gap-8">
            {[
              { icon: BookOpen, label: "5 Core Programs", sub: "From beginner to advanced" },
              { icon: Users, label: "All Ages Welcome", sub: "Youth (13+) to adult learners" },
              { icon: Award, label: "95% Pass Rate", sub: "TEF & TCF examinations" },
              { icon: Clock, label: "Flexible Schedules", sub: "Morning, afternoon & evening" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={20} className="text-[rgb(31,106,173)]" />
                <div>
                  <div className="font-body font-semibold text-[rgb(9,39,88)] text-sm">{label}</div>
                  <div className="text-xs text-[rgb(60,80,110)] font-body">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="acon-program-card bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="p-8" style={{ borderLeft: `5px solid ${program.color}` }}>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-body font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm"
                      style={{ backgroundColor: `${program.color}15`, color: program.color }}
                    >
                      {program.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-[rgb(60,80,110)] font-body font-semibold">
                      <Clock size={14} /> {program.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-2 leading-tight">
                    {program.title}
                  </h3>
                  <div className="text-xs font-body text-[rgb(60,80,110)] font-semibold tracking-widest uppercase mb-4">
                    Language Level: {program.level}
                  </div>
                  <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-7">
                    {program.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm font-body text-[rgb(40,55,80)]">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: program.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <Link
                      href={program.href}
                      className="flex items-center gap-2 bg-[rgb(9,39,88)] hover:bg-[rgb(20,50,100)] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors"
                    >
                      Program Details <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/admissions"
                      className="text-sm font-body font-semibold text-[rgb(31,106,173)] hover:text-[rgb(9,39,88)] transition-colors"
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Classes CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not Sure Which Program is Right for You?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">
            Attend a free trial class and speak with our academic advisors to find the perfect program for your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-classes" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-[rgb(5,26,64)] font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Try a Free Class <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
              Speak with an Advisor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
