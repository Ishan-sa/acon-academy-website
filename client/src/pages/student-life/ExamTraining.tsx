/*
 * ACON Academy — Exam Training Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, Award } from "lucide-react";

const examComponents = [
  {
    exam: "TEF Canada",
    sections: [
      { name: "Compréhension de l'oral (Listening)", duration: "40 min", questions: "60 questions", weight: "25%" },
      { name: "Compréhension des écrits (Reading)", duration: "60 min", questions: "50 questions", weight: "25%" },
      { name: "Expression écrite (Writing)", duration: "60 min", questions: "2 tasks", weight: "25%" },
      { name: "Expression orale (Speaking)", duration: "15 min", questions: "3 tasks", weight: "25%" },
    ],
    scoring: "Each section scored 0–450. Total score 0–1800. CLB levels assigned based on total score.",
    immigration: "Accepted by IRCC for Express Entry, PNP, and citizenship applications.",
  },
  {
    exam: "TCF Canada",
    sections: [
      { name: "Compréhension de l'oral (Listening)", duration: "35 min", questions: "29 questions", weight: "25%" },
      { name: "Maîtrise des structures de la langue (Grammar)", duration: "20 min", questions: "18 questions", weight: "25%" },
      { name: "Compréhension des écrits (Reading)", duration: "45 min", questions: "29 questions", weight: "25%" },
      { name: "Expression écrite (Writing)", duration: "60 min", questions: "3 tasks", weight: "25%" },
    ],
    scoring: "Each section scored on a scale of 1–6 (CEFR). CLB equivalencies published by IRCC.",
    immigration: "Accepted by IRCC for Express Entry, PNP, and citizenship applications.",
  },
];

const prepComponents = [
  { title: "Full Mock Examinations", desc: "Complete, timed mock TEF and TCF examinations conducted under exam conditions. Students receive detailed section-by-section score reports after each mock exam." },
  { title: "Section-Specific Workshops", desc: "Targeted workshops for each exam section — listening, reading, writing, and speaking. Workshops focus on the specific question formats, time management strategies, and common mistakes for each section." },
  { title: "Score Analysis & Gap Identification", desc: "After each mock exam, your instructor reviews your results and identifies the specific areas where targeted improvement will have the greatest impact on your overall score." },
  { title: "Immigration Score Mapping", desc: "We map your current and target exam scores to the CLB levels and CRS points required for your specific immigration pathway, so you always know exactly what score you need." },
  { title: "Authentic Listening Practice", desc: "Extensive practice with authentic French audio content — news broadcasts, interviews, conversations — calibrated to the listening comprehension level required for TEF/TCF." },
  { title: "Writing Correction & Feedback", desc: "All written practice tasks are corrected by your instructor with detailed feedback on grammar, vocabulary, structure, and register. Model answers are provided for every writing task type." },
];

export default function ExamTraining() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/student-life" className="hover:text-white transition-colors">Student Life</Link>
            <ChevronRight size={14} />
            <span className="text-white">Exam Training</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">TEF & TCF Canada Preparation</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Exam Training</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              ACON Academy's examination preparation programs are built on official TEF and TCF exam specifications and have produced a 95% pass rate. We prepare you for the specific exam you need to pass — not just general French fluency.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[rgb(31,106,173)] py-8">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "95%", label: "Exam Pass Rate (2025)" },
              { value: "TEF + TCF", label: "Both Exams Covered" },
              { value: "30 / 60", label: "Day Intensive Options" },
              { value: "12 Max", label: "Students Per Cohort" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 font-body text-xs tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exam Overview */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Know Your Exam</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">TEF Canada & TCF Canada: What You Need to Know</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">Both TEF Canada and TCF Canada are accepted by IRCC for immigration and citizenship. Understanding the format of each exam is the first step to preparing effectively.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examComponents.map((exam) => (
              <div key={exam.exam} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="bg-[rgb(9,39,88)] px-8 py-5">
                  <h3 className="font-display text-2xl font-bold text-white">{exam.exam}</h3>
                </div>
                <div className="p-8">
                  <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-4">Exam Sections</div>
                  <div className="space-y-3 mb-6">
                    {exam.sections.map((section) => (
                      <div key={section.name} className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm px-4 py-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-body font-bold text-[rgb(9,39,88)] text-sm">{section.name}</span>
                          <span className="text-xs font-body font-bold text-[rgb(31,106,173)]">{section.weight}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-body text-[rgb(60,80,110)]">{section.duration}</span>
                          <span className="text-xs font-body text-[rgb(60,80,110)]">{section.questions}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[rgb(210,225,245)] pt-5 space-y-3">
                    <div>
                      <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-1">Scoring</div>
                      <p className="text-sm font-body text-[rgb(60,80,110)]">{exam.scoring}</p>
                    </div>
                    <div>
                      <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-1">Immigration Use</div>
                      <p className="text-sm font-body text-[rgb(60,80,110)]">{exam.immigration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prep Components */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">How We Prepare You</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">What's Included in Exam Preparation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepComponents.map(({ title, desc }) => (
              <div key={title} className="border border-[rgb(210,225,245)] rounded-sm p-7">
                <Award size={20} className="text-[rgb(31,106,173)] mb-4" />
                <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-3">{title}</h3>
                <p className="font-body text-[rgb(60,80,110)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEF vs TCF */}
      <section className="py-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Which Exam Should You Take?</div>
              <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-5">TEF vs. TCF: Our Guidance</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                Both TEF Canada and TCF Canada are accepted by IRCC and produce equivalent CLB scores for immigration purposes. The choice between them depends on your strengths and the specific format that suits your learning style.
              </p>
              <div className="space-y-4">
                {[
                  { exam: "TEF Canada", recommend: "Students who are stronger in grammar and structured writing. The TEF writing section rewards precision and formal register." },
                  { exam: "TCF Canada", recommend: "Students who are stronger in listening and reading comprehension. The TCF format is generally considered more accessible for students with strong receptive skills." },
                ].map((item) => (
                  <div key={item.exam} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-5">
                    <div className="font-body font-bold text-[rgb(9,39,88)] mb-1">{item.exam}</div>
                    <div className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">{item.recommend}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm font-body text-[rgb(60,80,110)] mt-5">Our instructors will advise you on which exam is the better fit based on your mock exam results and learning profile.</p>
            </div>
            <div className="bg-[rgb(9,39,88)] rounded-sm p-10">
              <h3 className="font-display text-2xl font-bold text-white mb-5">Ready to Start Exam Preparation?</h3>
              <p className="text-white/70 font-body leading-relaxed mb-8">Contact our admissions team to discuss your examination timeline and enroll in the next available intensive preparation cohort.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-6 py-3.5 rounded-sm transition-colors w-full justify-center">
                Contact Admissions <ArrowRight size={16} />
              </Link>
              <div className="mt-4">
                <Link href="/admissions/application-deadlines" className="text-sm font-body text-white/60 hover:text-white transition-colors flex items-center justify-center gap-1">
                  View Upcoming Cohort Dates <ArrowRight size={12} />
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
