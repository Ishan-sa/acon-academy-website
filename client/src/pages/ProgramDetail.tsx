import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useParams } from "wouter";
import { ChevronRight, Clock, ArrowRight, CheckCircle } from "lucide-react";

const programData: Record<string, {
  badge: string; duration: string; title: string; level: string;
  description: string; color: string; overview: string;
  timeline?: { label: string; text: string }[];
  curriculum: { week: string; topics: string[] }[];
  outcomes: string[];
}> = {
  "french-foundations": {
    badge: "CLB-5", duration: "6 Months", title: "French Foundations Program", level: "A1 / A2",
    description: "Designed for beginners, focusing on everyday communication and workplace readiness.",
    color: "rgb(9, 39, 88)",
    overview: "Achieving CLB 5 is a critical milestone for your Canadian immigration and professional goals. This program is designed to guide you to the B1 level, equipping you with the essential language skills needed to succeed in everyday life, work, and social situations in a French-speaking environment. You will develop the ability to understand key information, communicate independently, and confidently express your opinions and experiences.",
    timeline: [
      { label: "Beginners (A1 to B1):", text: "Starting from scratch? Our structured path takes you through A1 (10 weeks) and A2 (8 weeks). Exceptional learners who master the material can be ready for CLB 5 right at the start of B1. For most students, completing the full B1 level requires an additional 9 weeks of dedicated study." },
      { label: "Exam Focus:", text: "This course is meticulously structured to help you clear the TEF/TCF exams, a vital step for your permanent residency or citizenship applications." },
    ],
    curriculum: [
      { week: "Months 1–2", topics: ["Alphabet and pronunciation", "Basic greetings and introductions", "Numbers, dates, and time", "Everyday vocabulary (food, family, work)", "Present tense verbs"] },
      { week: "Month 3", topics: ["Workplace communication", "Writing simple emails and messages", "Listening comprehension practice", "Speaking fluency exercises", "Grammar consolidation"] },
      { week: "Month 4", topics: ["CLB-5 exam preparation", "Mock listening tests", "Mock reading tests", "Mock writing assessments", "Mock speaking evaluations"] },
    ],
    outcomes: ["Achieve CLB-5 language level", "Communicate confidently in everyday situations", "Meet Francophone Mobility work permit requirements", "Foundation for advanced French study"],
  },
  "intermediate-advanced": {
    badge: "CLB-7", duration: "10 Months", title: "French Intermediate / Advanced", level: "B1 / B2",
    description: "Build professional fluency and prepare for permanent residence applications.",
    color: "rgb(31, 106, 173)",
    overview: "Reaching CLB 7 opens doors to advanced professional opportunities and maximizes your points for Canadian immigration. This B2-level program focuses on advanced comprehension and fluency. You will learn to navigate complex discussions, articulate detailed opinions, and interact comfortably with native speakers in academic and professional settings.",
    timeline: [
      { label: "Intermediate to Advanced (B1 to B2):", text: "Building on your existing knowledge, this level challenges you to refine your skills. Top-performing students who have mastered previous levels may be ready for CLB 7 at the beginning of B2. Generally, completing the B2 level takes 8 weeks of intensive learning." },
      { label: "Exam Focus:", text: "Our curriculum is specifically tailored to ensure you excel in the TEF/TCF exams, giving you the competitive edge needed for your Canadian journey." },
    ],
    curriculum: [
      { week: "Months 1–3", topics: ["Advanced grammar structures", "Professional vocabulary", "Complex sentence construction", "Business French communication", "Cultural and contextual language use"] },
      { week: "Months 4–6", topics: ["Advanced reading comprehension", "Essay and report writing", "Formal speaking and presentations", "Listening to authentic French media", "Debate and discussion skills"] },
      { week: "Months 7–8", topics: ["TEF exam preparation", "TCF exam preparation", "Full mock examinations", "Personalized feedback sessions", "Final assessment and certification"] },
    ],
    outcomes: ["Achieve CLB-7 language level (B1/B2)", "Pass TEF and TCF examinations", "Meet PR application language requirements", "Professional-level French communication"],
  },
  "exam-preparation": {
    badge: "30 Days", duration: "Intensive", title: "Exam Preparation Program", level: "A1/A2 → B1/B2",
    description: "Focused preparation for TCF and TEF exams.",
    color: "rgb(5, 26, 64)",
    overview: "The Intensive Exam Preparation Program is a focused 30-day course designed to maximize your performance on the TCF (Test de Connaissance du Français) and TEF (Test d'Évaluation de Français) examinations. Ideal for students who have existing French knowledge and need targeted exam preparation.",
    curriculum: [
      { week: "Week 1", topics: ["Exam format and strategy overview", "Listening comprehension techniques", "Reading speed and accuracy", "Vocabulary for exam contexts"] },
      { week: "Week 2", topics: ["Writing under exam conditions", "Speaking evaluation preparation", "Grammar review for exam accuracy", "Time management strategies"] },
      { week: "Weeks 3–4", topics: ["Full mock TCF examinations", "Full mock TEF examinations", "Personalized performance analysis", "Targeted weak-area improvement", "Final preparation and confidence building"] },
    ],
    outcomes: ["Optimized TCF exam performance", "Optimized TEF exam performance", "Exam strategy and time management", "Personalized improvement plan"],
  },
  "french-for-pr": {
    badge: "PR", duration: "3 / 6 Months", title: "French for PR & Citizens", level: "A1/A2 → B1/B2",
    description: "Dedicated to Canadian residents pursuing permanent residence.",
    color: "rgb(9, 39, 88)",
    overview: "The French for PR & Citizens Program is specifically designed for Canadian permanent residents and citizens who need to demonstrate French language proficiency for immigration purposes or workplace requirements. Available in 3-month (CLB-5) and 6-month (CLB-7) formats.",
    curriculum: [
      { week: "Phase 1 (All students)", topics: ["Canadian immigration French requirements", "Everyday communication for residents", "Workplace language skills", "Cultural integration through language"] },
      { week: "Phase 2 (6-month only)", topics: ["Advanced professional French", "TEF/TCF preparation", "Complex communication scenarios", "Formal writing and speaking"] },
    ],
    outcomes: ["Meet PR language requirements", "Workplace French proficiency", "Cultural and community integration", "Pathway to citizenship language requirements"],
  },
  "french-for-youth": {
    badge: "Youth", duration: "3 / 6 Months", title: "French for Youth", level: "Ages 13–18",
    description: "Build French competency and immersion for youth ages 13–18.",
    color: "rgb(31, 106, 173)",
    overview: "The French for Youth Program is designed specifically for students aged 13–18, providing an immersive and age-appropriate French language education. Our youth curriculum combines engaging activities with structured language learning to build genuine competency and a love for the French language.",
    curriculum: [
      { week: "Months 1–2", topics: ["Age-appropriate vocabulary and expressions", "Social communication in French", "French culture and Canadian bilingualism", "Interactive speaking activities"] },
      { week: "Months 3–6", topics: ["Academic French skills", "Writing essays and reports in French", "Advanced conversation and debate", "Preparation for school French examinations", "Cultural immersion activities"] },
    ],
    outcomes: ["French language competency for school", "Bilingual career advantages", "Cultural appreciation and awareness", "Foundation for advanced French studies"],
  },
};

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = programData[slug || ""] || programData["french-foundations"];

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
            <ChevronRight size={14} />
            <span className="text-white">{program.title}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-body font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm bg-[rgb(31,106,173)]/20 text-[rgb(70,140,210)]">{program.badge}</span>
            <span className="flex items-center gap-1.5 text-white/60 font-body text-sm"><Clock size={14} /> {program.duration}</span>
          </div>
          <h1 className="font-display text-5xl font-bold text-white mb-4 leading-tight">{program.title}</h1>
          <p className="text-white/70 font-body text-xl">Language Level: {program.level}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-5">Program Overview</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-10">{program.overview}</p>

              {program.timeline && (
                <div className="mb-10">
                  <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-5">Timeline to Success</h3>
                  <ul className="space-y-4">
                    {program.timeline.map((item) => (
                      <li key={item.label} className="flex items-start gap-3 font-body text-[rgb(40,55,80)] leading-relaxed">
                        <CheckCircle size={18} className="text-[rgb(31,106,173)] mt-1 flex-shrink-0" />
                        <span><strong className="text-[rgb(9,39,88)]">{item.label}</strong> {item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-6">Curriculum</h2>
              <div className="space-y-6">
                {program.curriculum.map((phase) => (
                  <div key={phase.week} className="border-l-4 border-[rgb(31,106,173)] pl-6">
                    <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-3">{phase.week}</h3>
                    <ul className="space-y-1.5">
                      {phase.topics.map((t) => (
                        <li key={t} className="flex items-center gap-2.5 text-sm font-body text-[rgb(40,55,80)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[rgb(31,106,173)] flex-shrink-0" />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white border border-[rgb(210,225,245)] rounded-sm p-7 sticky top-24">
                <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-5">Program Outcomes</h3>
                <ul className="space-y-3 mb-7">
                  {program.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm font-body text-[rgb(40,55,80)]">
                      <CheckCircle size={16} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />{o}
                    </li>
                  ))}
                </ul>
                <Link href="/admissions" className="block w-full text-center bg-[rgb(9,39,88)] hover:bg-[rgb(20,50,100)] text-white font-body font-bold py-3.5 rounded-sm transition-colors mb-3 flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={14} />
                </Link>
                <Link href="/free-classes" className="block w-full text-center border border-[rgb(9,39,88)] text-[rgb(9,39,88)] font-body font-semibold py-3 rounded-sm hover:bg-[rgb(9,39,88)] hover:text-white transition-colors">
                  Try a Free Class
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
