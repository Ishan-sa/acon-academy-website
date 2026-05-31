/*
 * ACON Academy — Student Resources Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, BookOpen, Globe, FileText } from "lucide-react";

const resourceCategories = [
  {
    icon: "📚",
    title: "Grammar & Language References",
    resources: [
      { name: "Bescherelle L'Essentiel", desc: "Comprehensive French grammar reference covering all verb conjugations, grammar rules, and usage guidelines. Available in the resource library at both campuses." },
      { name: "Le Petit Robert Dictionary", desc: "The definitive French-French dictionary. Physical copies available in the resource library; digital access via the student portal." },
      { name: "ACON Grammar Guides", desc: "Instructor-developed grammar guides for each CLB level, covering the specific grammar points assessed at each level. Available for download on the student portal." },
      { name: "Conjugation Reference Cards", desc: "Quick-reference conjugation cards for the 100 most common French verbs. Provided to all students at enrollment." },
    ],
  },
  {
    icon: "🎧",
    title: "Listening & Audio Resources",
    resources: [
      { name: "RFI Savoirs", desc: "Radio France Internationale's French language learning platform with graded audio content from A1 to C2. Free access via the ACON student portal." },
      { name: "TV5MONDE Apprendre", desc: "Video-based French learning resources from the international French-language broadcaster. Includes subtitled news segments and comprehension exercises." },
      { name: "ACON Listening Practice Library", desc: "A curated library of 200+ audio tracks organized by CLB level and topic, developed specifically to prepare students for TEF/TCF listening sections." },
      { name: "Podcast Français Facile", desc: "Graded French podcasts for learners at all levels. Transcripts available for all episodes. Accessible via the student portal." },
    ],
  },
  {
    icon: "💻",
    title: "Digital Learning Tools",
    resources: [
      { name: "ACON Student Portal", desc: "The central hub for all ACON digital resources: course materials, progress tracking, study room bookings, instructor messaging, and digital resource library access." },
      { name: "Anki Flashcard Decks", desc: "ACON-developed Anki flashcard decks for vocabulary at each CLB level. Downloadable from the student portal for use on any device." },
      { name: "TEF/TCF Practice Platform", desc: "Official-format practice tests for both TEF Canada and TCF Canada, available via the computer lab and student portal. Includes timed mock exams and score reports." },
      { name: "Grammarly for French", desc: "ACON students have access to Grammarly's French writing assistant for proofreading written practice tasks. Access credentials provided at enrollment." },
    ],
  },
  {
    icon: "📋",
    title: "Immigration & Pathway Resources",
    resources: [
      { name: "CLB-to-CRS Score Calculator", desc: "An ACON-developed tool that maps your current and target CLB scores to the CRS points you will earn under Express Entry. Available on the student portal." },
      { name: "IRCC Language Requirements Guide", desc: "A plain-language summary of the French language requirements for Express Entry, PNP, and citizenship applications, updated quarterly." },
      { name: "TEF/TCF Registration Guide", desc: "Step-by-step instructions for registering for TEF Canada and TCF Canada examinations, including links to official registration portals and examination centre locations in BC." },
      { name: "Immigration Pathway Checklists", desc: "Downloadable checklists for the most common immigration pathways that require French language proof, including Federal Skilled Worker, Canadian Experience Class, and Francophone Mobility." },
    ],
  },
];

export default function StudentResources() {
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
            <span className="text-white">Student Resources</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Learning Support</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Student Resources</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              ACON Academy students have access to a comprehensive library of learning resources — grammar references, audio materials, digital tools, and immigration pathway guides — all included in your tuition.
            </p>
          </div>
        </div>
      </div>

      {/* Portal Highlight */}
      <div className="bg-[rgb(31,106,173)] py-6">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center gap-4">
          <Globe size={20} className="text-white flex-shrink-0" />
          <p className="text-white font-body text-sm">
            <strong>ACON Student Portal:</strong> All enrolled students receive access to the ACON Student Portal — the central hub for course materials, digital resources, progress tracking, and instructor communication. Access credentials are provided at enrollment.
          </p>
        </div>
      </div>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Resource Library</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">What's Available to ACON Students</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">All resources below are included in your ACON Academy tuition. No additional subscriptions or purchases are required.</p>
          </div>
          <div className="space-y-10">
            {resourceCategories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)]">{cat.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {cat.resources.map((resource) => (
                    <div key={resource.name} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-6">
                      <div className="font-body font-bold text-[rgb(9,39,88)] mb-2">{resource.name}</div>
                      <p className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">{resource.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Access */}
      <section className="py-16 bg-white border-y border-[rgb(210,225,245)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">After Graduation</div>
              <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-5">Alumni Resource Access</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                ACON Academy graduates retain access to a curated selection of digital resources for 12 months after program completion. This includes the ACON grammar guides, CLB-to-CRS calculator, immigration pathway guides, and the TEF/TCF registration guide.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed">
                Physical resource library access and computer lab access are available to alumni by appointment for 6 months after graduation.
              </p>
            </div>
            <div className="bg-[rgb(9,39,88)] rounded-sm p-8">
              <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-5">Alumni Benefits Summary</div>
              <div className="space-y-3">
                {[
                  { item: "Digital resource library access", duration: "12 months post-graduation" },
                  { item: "CLB-to-CRS calculator access", duration: "12 months post-graduation" },
                  { item: "Immigration pathway guides", duration: "12 months post-graduation" },
                  { item: "Physical library access (by appointment)", duration: "6 months post-graduation" },
                  { item: "Computer lab access (by appointment)", duration: "6 months post-graduation" },
                  { item: "Alumni newsletter & updates", duration: "Indefinite" },
                ].map((item) => (
                  <div key={item.item} className="flex items-start justify-between py-2 border-b border-white/10">
                    <span className="text-white/80 font-body text-xs">{item.item}</span>
                    <span className="text-[rgb(70,140,210)] font-body text-xs font-semibold ml-4 text-right flex-shrink-0">{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Questions About Student Resources?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Contact our team or enroll to get immediate access to the ACON Student Portal and all included resources.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
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
