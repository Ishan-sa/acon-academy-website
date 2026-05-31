/*
 * ACON Academy — Academic Counselling Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, User, Calendar } from "lucide-react";

const services = [
  {
    title: "Individual Learning Plan Development",
    desc: "Every ACON student receives a personalized Individual Learning Plan (ILP) developed in consultation with their instructor. The ILP maps your current CLB level to your target level, identifies your specific strengths and areas for development, and outlines a structured pathway to achieve your goals within your program timeline.",
  },
  {
    title: "Progress Reviews",
    desc: "Formal progress reviews are conducted at the midpoint and end of every program. Your instructor will review your CLB assessment results, attendance record, and learning plan progress, and provide written feedback and recommendations for the next stage of your French language journey.",
  },
  {
    title: "Goal Alignment Counselling",
    desc: "Not sure which program is right for your immigration or career goals? Our academic counsellors can review your specific situation — Express Entry score, citizenship timeline, workplace requirements — and recommend the program and CLB target that will deliver the best outcome for you.",
  },
  {
    title: "Exam Strategy Counselling",
    desc: "Students preparing for TEF or TCF examinations receive dedicated exam strategy counselling. This includes a review of your mock exam results, identification of your weakest sections, and a targeted preparation plan for the remaining time before your examination date.",
  },
  {
    title: "Learning Difficulty Support",
    desc: "Students who are experiencing difficulty with specific aspects of French — grammar, pronunciation, listening comprehension, or writing — can request additional support sessions with their instructor. These sessions are included in your tuition and are available at no additional cost.",
  },
  {
    title: "Post-Program Pathway Guidance",
    desc: "Completing a program at ACON is not the end of the journey — it is a milestone. Our academic counsellors provide guidance on next steps: whether that is enrolling in the next program level, registering for TEF/TCF, or applying for immigration pathways that your new CLB level unlocks.",
  },
];

export default function AcademicCounselling() {
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
            <span className="text-white">Academic Counselling</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Personalized Support</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Academic Counselling</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Every ACON student has access to personalized academic counselling — from goal alignment and learning plan development to exam strategy and post-program pathway guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Our Approach</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Guidance for Every Stage of Your Journey</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                Learning a language as an adult — especially when your immigration status, career, or citizenship depends on the outcome — is not just an academic challenge. It is a personal one. ACON Academy's academic counselling services are designed to support the whole student, not just the language learner.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                Our instructors maintain an open-door policy, and our academic counsellors are available for scheduled appointments throughout the program. Whether you need help with a specific grammar concept, want to review your exam strategy, or are trying to figure out what to do after you complete your current program, we are here.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed">
                Academic counselling is included in your tuition — there is no additional fee for any of the services described on this page.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Individual Learning Plans", value: "All Students" },
                { label: "Progress Reviews", value: "Mid & End of Program" },
                { label: "Counselling Sessions", value: "Included in Tuition" },
                { label: "Instructor Access", value: "Open-Door Policy" },
                { label: "Exam Strategy Sessions", value: "Exam Prep Students" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-4 border-b border-[rgb(210,225,245)]">
                  <span className="font-body text-sm text-[rgb(60,80,110)]">{item.label}</span>
                  <span className="font-body text-sm font-bold text-[rgb(9,39,88)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">What We Offer</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Counselling Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ title, desc }) => (
              <div key={title} className="border border-[rgb(210,225,245)] rounded-sm p-7">
                <div className="w-10 h-10 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center mb-4">
                  <User size={18} className="text-[rgb(70,140,210)]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-3">{title}</h3>
                <p className="font-body text-[rgb(60,80,110)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Session */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Book an Academic Counselling Session</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Current ACON students can book a counselling session by contacting their instructor directly or emailing info@aconacademy.ca. Prospective students are welcome to contact us to discuss their goals before enrolling.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@aconacademy.ca?subject=Academic Counselling Session Request" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Request a Session <ArrowRight size={16} />
            </a>
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
