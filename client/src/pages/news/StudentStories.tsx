/*
 * ACON Academy — Student Stories Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Quote } from "lucide-react";

const stories = [
  {
    name: "Amara Diallo",
    origin: "Guinea",
    program: "Intermediate French → Intensive TEF Preparation",
    outcome: "CLB 9 on TEF Canada · Express Entry ITA received",
    campus: "Surrey",
    year: "2025",
    initials: "AD",
    quote: "I came to ACON with a CLB 5. My goal was CLB 9 for Express Entry. My instructor was honest with me from the beginning — she told me it would take two programs and serious commitment. She was right. Eighteen months later, I had my TEF results: CLB 9 across all four skills. I received my ITA three weeks later.",
    fullStory: "Amara arrived in Surrey in early 2024 after working as an accountant in Conakry for eight years. Her English was strong, but her French — despite being her first language — had not been formally assessed for immigration purposes. She enrolled in ACON's Intermediate French program after a CLB placement assessment confirmed she was at CLB 5. Over the following 12 weeks, she rebuilt her formal French grammar and academic writing skills. She then enrolled directly in ACON's 60-day intensive TEF preparation cohort. Her TEF results — CLB 9 in all four skills — placed her in the top tier of Express Entry candidates with French language skills. She received her Invitation to Apply within three weeks of submitting her updated profile.",
  },
  {
    name: "Nguyen Van Minh",
    origin: "Vietnam",
    program: "Beginner French → Elementary → Intermediate",
    outcome: "CLB 7 · Provincial Nominee Program application submitted",
    campus: "Surrey",
    year: "2025",
    initials: "NM",
    quote: "I started at ACON with zero French. Not a single word. My instructor never made me feel behind. She celebrated every small win. After 36 weeks across three programs, I had a CLB 7. My immigration consultant told me that score would significantly strengthen my PNP application.",
    fullStory: "Minh arrived in Surrey from Ho Chi Minh City in 2023 as a temporary foreign worker in the food manufacturing sector. He had no prior French language experience but understood that French language skills would significantly improve his chances of obtaining permanent residency through BC's Provincial Nominee Program. He enrolled in ACON's Beginner French program and progressed through three consecutive programs over 36 weeks. His CLB 7 result, achieved in the spring of 2025, qualified him for additional points under BC PNP's skills immigration stream. His PNP application is currently under review.",
  },
  {
    name: "Fatima Al-Rashidi",
    origin: "Jordan",
    program: "Advanced French → Intensive TCF Preparation",
    outcome: "CLB 10 on TCF Canada · Canadian Citizenship application submitted",
    campus: "Kelowna",
    year: "2025",
    initials: "FA",
    quote: "I had been a permanent resident for four years and my French was already strong — I studied it in university in Amman. But I needed to prove it for citizenship. ACON's exam preparation program was exactly what I needed. The mock exams were harder than the real thing.",
    fullStory: "Fatima had studied French as a second language at university in Jordan and had maintained her French through reading and media consumption since arriving in Kelowna in 2021. When she became eligible to apply for Canadian citizenship in 2025, she needed to demonstrate CLB 7 in French for the citizenship application. Her CLB placement assessment at ACON confirmed she was already at CLB 8 — well above the citizenship requirement. She enrolled in the Advanced French program to refine her formal writing and then completed the 30-day intensive TCF preparation cohort. Her TCF results — CLB 10 across all skills — exceeded her expectations. Her citizenship application was submitted in April 2025.",
  },
  {
    name: "Oluwaseun Adeyemi",
    origin: "Nigeria",
    program: "Elementary French → Intermediate French",
    outcome: "CLB 7 · Francophone Mobility Program work permit approved",
    campus: "Surrey",
    year: "2024",
    initials: "OA",
    quote: "My employer in Lagos had told me about the Francophone Mobility Program. I knew I needed CLB 7 to qualify. I had some French from secondary school but it was not enough. ACON gave me a structured path from where I was to where I needed to be.",
    fullStory: "Seun was a software engineer in Lagos who had identified the Francophone Mobility Program as his pathway to working in Canada. The program requires CLB 7 in French and a valid job offer from a Canadian employer. He had a job offer from a Surrey tech company but needed to improve his French from CLB 4 to CLB 7. He enrolled in ACON's Elementary French program in early 2024 and progressed to the Intermediate program. After 24 weeks of study, his CLB assessment confirmed CLB 7. His Francophone Mobility work permit was approved in October 2024. He arrived in Surrey in December 2024.",
  },
  {
    name: "Marie-Claire Tremblay",
    origin: "Québec (Relocating to BC)",
    program: "Advanced French (Maintenance & Formal Register)",
    outcome: "CLB 10 · Federal public service bilingual position secured",
    campus: "Kelowna",
    year: "2024",
    initials: "MT",
    quote: "My French is native — I grew up in Montréal. But I had been in BC for ten years and my formal written French had deteriorated. I needed to pass the federal bilingual exam for a promotion. ACON's Advanced program brought my formal register back up to the standard I needed.",
    fullStory: "Marie-Claire had been working for the federal government in Kelowna for seven years and was applying for a bilingual senior analyst position that required demonstrated CLB 10 in both English and French. Her spoken French was native-level, but a decade of working primarily in English had weakened her formal written French. She enrolled in ACON's Advanced French program specifically to rebuild her formal register, academic writing, and grammar precision. After 12 weeks, she wrote the federal bilingual exam and achieved the required CBC+ profile. She was offered the senior analyst position in November 2024.",
  },
];

export default function StudentStories() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/news" className="hover:text-white transition-colors">News</Link>
            <ChevronRight size={14} />
            <span className="text-white">Student Stories</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Graduate Outcomes</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Student Stories</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              The measure of ACON Academy is not what happens in the classroom — it is what happens after. These are the stories of students who achieved their French language goals and the immigration and career outcomes that followed.
            </p>
          </div>
        </div>
      </div>

      {/* Stories */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {stories.map((story, i) => (
              <div key={story.name} className={`grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0 border border-[rgb(210,225,245)] rounded-sm overflow-hidden ${i % 2 === 1 ? 'lg:grid-cols-[1fr_320px]' : ''}`}>
                {i % 2 === 0 ? (
                  <>
                    <div className="bg-[rgb(9,39,88)] p-8 flex flex-col justify-between">
                      <div>
                        <div className="w-20 h-20 rounded-sm mb-5 border-2 border-white/20 bg-[rgb(31,106,173)] flex items-center justify-center">
                          <span className="font-display text-2xl font-bold text-white">{story.initials}</span>
                        </div>
                        <div className="font-display text-2xl font-bold text-white mb-1">{story.name}</div>
                        <div className="text-[rgb(70,140,210)] font-body text-sm mb-4">Originally from {story.origin} · {story.campus} Campus · {story.year}</div>
                        <div className="text-xs font-body font-semibold text-white/50 tracking-widest uppercase mb-1">Programs Completed</div>
                        <div className="text-white/80 font-body text-sm mb-4">{story.program}</div>
                        <div className="text-xs font-body font-semibold text-white/50 tracking-widest uppercase mb-1">Outcome</div>
                        <div className="text-[rgb(70,140,210)] font-body text-sm font-bold">{story.outcome}</div>
                      </div>
                    </div>
                    <div className="p-8 bg-white">
                      <div className="flex items-start gap-3 mb-5">
                        <Quote size={24} className="text-[rgb(210,225,245)] flex-shrink-0 mt-1" />
                        <p className="font-body text-[rgb(40,55,80)] text-lg italic leading-relaxed">{story.quote}</p>
                      </div>
                      <p className="font-body text-[rgb(60,80,110)] leading-relaxed text-sm">{story.fullStory}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-8 bg-white">
                      <div className="flex items-start gap-3 mb-5">
                        <Quote size={24} className="text-[rgb(210,225,245)] flex-shrink-0 mt-1" />
                        <p className="font-body text-[rgb(40,55,80)] text-lg italic leading-relaxed">{story.quote}</p>
                      </div>
                      <p className="font-body text-[rgb(60,80,110)] leading-relaxed text-sm">{story.fullStory}</p>
                    </div>
                    <div className="bg-[rgb(9,39,88)] p-8 flex flex-col justify-between">
                      <div>
                        <div className="w-20 h-20 rounded-sm mb-5 border-2 border-white/20 bg-[rgb(31,106,173)] flex items-center justify-center">
                          <span className="font-display text-2xl font-bold text-white">{story.initials}</span>
                        </div>
                        <div className="font-display text-2xl font-bold text-white mb-1">{story.name}</div>
                        <div className="text-[rgb(70,140,210)] font-body text-sm mb-4">Originally from {story.origin} · {story.campus} Campus · {story.year}</div>
                        <div className="text-xs font-body font-semibold text-white/50 tracking-widest uppercase mb-1">Programs Completed</div>
                        <div className="text-white/80 font-body text-sm mb-4">{story.program}</div>
                        <div className="text-xs font-body font-semibold text-white/50 tracking-widest uppercase mb-1">Outcome</div>
                        <div className="text-[rgb(70,140,210)] font-body text-sm font-bold">{story.outcome}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Begin Your Story at ACON Academy</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Every student above started with a CLB placement assessment and a conversation with our admissions team. Yours can too.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-classes" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Claim Free Session <ArrowRight size={16} />
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
