/*
 * ACON Academy — Mission & Values Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Award, Users, BookOpen, Heart, Target, Globe, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Academic Excellence",
    headline: "We never compromise on quality.",
    desc: "Every program at ACON Academy is designed to the highest academic standards. Our instructors hold recognized teaching certifications, our curriculum is evidence-based, and our assessment methods are aligned with internationally recognized frameworks. We measure our success by our students' outcomes — not by enrollment numbers.",
    pillars: ["CLB-aligned curriculum design", "Evidence-based pedagogical methods", "Continuous instructor professional development", "Rigorous outcome measurement"],
  },
  {
    icon: Users,
    title: "Inclusive Community",
    headline: "Every learner belongs here.",
    desc: "ACON Academy serves students from dozens of countries, speaking hundreds of mother tongues, at every stage of their Canadian journey. We design our classrooms, our materials, and our culture to be genuinely welcoming — not just tolerant. Diversity is not a challenge to manage; it is a strength we actively cultivate.",
    pillars: ["Multilingual support for new arrivals", "Culturally responsive instruction", "Accessible scheduling for working adults", "Community-building beyond the classroom"],
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    headline: "French for real life, not just the classroom.",
    desc: "Our curriculum is engineered for application. Whether a student needs to pass a TEF exam for Express Entry, communicate in a francophone workplace, or achieve citizenship, every lesson is designed with that real-world outcome in mind. We teach the French that Canada actually requires.",
    pillars: ["Immigration-context vocabulary and scenarios", "Exam simulation and preparation", "Workplace and professional French", "Authentic listening and speaking practice"],
  },
  {
    icon: Heart,
    title: "Student Success",
    headline: "Your success is our only metric.",
    desc: "Every decision at ACON — from class sizes to scheduling to faculty hiring — is made with one question in mind: does this serve our students' long-term success? We keep class sizes small, maintain open-door access to instructors, and track student progress with genuine care for each individual's journey.",
    pillars: ["Maximum 12 students per class", "Open-door instructor access policy", "Individual progress tracking", "Post-graduation alumni support"],
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    headline: "We say what we mean and mean what we say.",
    desc: "ACON Academy operates with full transparency on fees, program outcomes, and institutional policies. We are registered with the BC Private Training Institutions Branch (PTIB) and comply with all regulatory requirements. Our students can trust that the information we provide is accurate, current, and complete.",
    pillars: ["PTIB-registered institution", "Clear, published fee structures", "Honest program outcome reporting", "Regulatory compliance and accountability"],
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    headline: "We evolve as Canada's needs evolve.",
    desc: "The Canadian immigration landscape changes. Exam formats are updated. New pathways emerge. ACON Academy commits to staying ahead of these changes — updating our curriculum, retraining our faculty, and developing new programs to ensure our students are always prepared for the current reality.",
    pillars: ["Annual curriculum review and update", "Faculty development and retraining", "New program development pipeline", "Immigration policy monitoring"],
  },
];

export default function MissionValues() {
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
            <span className="text-white">Mission & Values</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Our Foundation</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Mission & Values</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Everything ACON Academy does flows from a clear mission and a set of values we hold ourselves accountable to every day.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Our Mission</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Why We Exist</h2>
              <blockquote className="border-l-4 border-[rgb(31,106,173)] pl-6 mb-8">
                <p className="font-display text-2xl font-bold text-[rgb(9,39,88)] italic leading-relaxed">
                  "To provide accessible, high-quality French language education that empowers students to achieve their personal, professional, and immigration goals in Canada."
                </p>
              </blockquote>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                This mission is not aspirational language — it is the operational standard against which we evaluate every program, every hire, and every policy decision at ACON Academy.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                "Accessible" means that our programs are priced fairly, scheduled flexibly, and designed for working adults. "High-quality" means that our curriculum, our faculty, and our facilities meet or exceed the standards of any post-secondary institution in British Columbia. "Empowers" means that we measure success not by course completions, but by the real outcomes our students achieve.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed">
                French language proficiency is not a luxury for our students — it is a pathway to permanent residency, citizenship, career advancement, and belonging. We take that responsibility seriously.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[rgb(9,39,88)] rounded-sm p-8 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <Target size={28} className="text-[rgb(70,140,210)]" />
                  <h3 className="font-display text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-white/75 font-body leading-relaxed">
                  To be the definitive French language institution for newcomers and Canadians across British Columbia — and the most trusted name in immigration-focused language education in Canada.
                </p>
              </div>
              <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Globe size={28} className="text-[rgb(31,106,173)]" />
                  <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)]">Our Commitment</h3>
                </div>
                <p className="text-[rgb(60,80,110)] font-body leading-relaxed">
                  ACON Academy commits to maintaining PTIB registration, CLB curriculum alignment, and transparent outcome reporting — so every student can trust that their investment in French education will deliver measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">What We Stand For</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Our Core Values</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl mx-auto">Six principles that guide every decision, every hire, and every interaction at ACON Academy.</p>
          </div>
          <div className="space-y-8">
            {values.map(({ icon: Icon, title, headline, desc, pillars }, i) => (
              <div key={title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center flex-shrink-0">
                      <Icon size={26} className="text-[rgb(70,140,210)]" />
                    </div>
                    <div>
                      <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase">Core Value {String(i + 1).padStart(2, '0')}</div>
                      <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)]">{title}</h3>
                    </div>
                  </div>
                  <p className="font-display text-xl font-bold text-[rgb(31,106,173)] italic mb-4">{headline}</p>
                  <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-base">{desc}</p>
                </div>
                <div className={`bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-5">How We Live This Value</div>
                  <ul className="space-y-3">
                    {pillars.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(9,39,88)] mt-1.5 flex-shrink-0" />
                        <span className="font-body text-[rgb(40,55,80)] text-sm leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Experience Our Values in Action</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">The best way to understand what ACON Academy stands for is to experience a class. Claim your free 90-minute session today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-classes" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Claim Free Session <ArrowRight size={16} />
            </Link>
            <Link href="/about/our-story" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
