/*
 * ACON Academy — Blog Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Calendar, Clock } from "lucide-react";

const featured = {
  title: "How French Language Scores Affect Your Express Entry CRS Points in 2026",
  date: "May 5, 2026",
  readTime: "8 min read",
  category: "Immigration",
  excerpt: "The 2026 Express Entry draw cycle has placed renewed emphasis on French language skills. We break down exactly how TEF and TCF scores translate to CRS points, and what CLB level you need to maximize your advantage.",
  image: "/manus-storage/campus_classroom2_63399c3f.jpg",
};

const articles = [
  {
    title: "TEF Canada vs. TCF Canada: Which Exam Should You Take in 2026?",
    date: "April 28, 2026",
    readTime: "6 min read",
    category: "Exams",
    excerpt: "Both TEF Canada and TCF Canada are accepted by IRCC, but they are not the same exam. We compare the format, scoring, and difficulty of each to help you choose the right one for your goals.",
  },
  {
    title: "CLB Levels Explained: What Each Level Means for Your Immigration Pathway",
    date: "April 14, 2026",
    readTime: "7 min read",
    category: "Immigration",
    excerpt: "The Canadian Language Benchmarks (CLB) system is the standard used by IRCC to assess language proficiency. This guide explains what each CLB level means and which immigration pathways each level unlocks.",
  },
  {
    title: "5 Common Mistakes French Learners Make on the TEF Writing Section",
    date: "March 31, 2026",
    readTime: "5 min read",
    category: "Study Tips",
    excerpt: "The TEF writing section is where many candidates lose points they could have kept. Our instructors share the five most common mistakes they see — and how to avoid them.",
  },
  {
    title: "The Francophone Mobility Program: A Complete Guide for 2026",
    date: "March 17, 2026",
    readTime: "9 min read",
    category: "Immigration",
    excerpt: "The Francophone Mobility Program allows employers to hire foreign nationals with French language skills without an LMIA. Here is everything you need to know about eligibility, CLB requirements, and the application process.",
  },
  {
    title: "How to Build a French Study Routine That Actually Works",
    date: "March 3, 2026",
    readTime: "6 min read",
    category: "Study Tips",
    excerpt: "Consistency beats intensity when it comes to language learning. Our instructors share the study routines that their most successful students have in common — and how to build one that fits your schedule.",
  },
  {
    title: "BC PNP and French: How Provincial Nominee Programs Use Language Scores",
    date: "February 18, 2026",
    readTime: "7 min read",
    category: "Immigration",
    excerpt: "British Columbia's Provincial Nominee Program awards additional points for French language skills under several streams. We explain how BC PNP uses CLB scores and what level you need to benefit.",
  },
  {
    title: "Listening Comprehension for TEF/TCF: Strategies That Work",
    date: "February 4, 2026",
    readTime: "5 min read",
    category: "Study Tips",
    excerpt: "Listening comprehension is often the section where candidates feel least prepared. Our exam preparation instructors share the strategies that consistently improve listening scores in the weeks before the exam.",
  },
  {
    title: "Canadian Citizenship and French: What You Need to Know",
    date: "January 21, 2026",
    readTime: "6 min read",
    category: "Immigration",
    excerpt: "French language proficiency can be used to meet the language requirement for Canadian citizenship. We explain the CLB level required, which exams are accepted, and how to prepare.",
  },
];

const categories = ["All", "Immigration", "Exams", "Study Tips", "Campus News"];

export default function Blog() {
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
            <span className="text-white">Blog</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Insights & Guidance</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">ACON Blog</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Expert guidance on French language learning, TEF/TCF examination preparation, and the immigration pathways that French language skills unlock in Canada.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-6">Featured Article</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
            <img src={featured.image} alt={featured.title} className="w-full h-[350px] object-cover" />
            <div className="bg-white p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-body font-bold px-2.5 py-1 rounded-sm bg-[rgb(9,39,88)] text-white">{featured.category}</span>
                <div className="flex items-center gap-1.5 text-xs font-body text-[rgb(100,120,150)]">
                  <Calendar size={11} />{featured.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-body text-[rgb(100,120,150)]">
                  <Clock size={11} />{featured.readTime}
                </div>
              </div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-4 leading-tight">{featured.title}</h2>
              <p className="font-body text-[rgb(60,80,110)] leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-body font-bold text-[rgb(31,106,173)] hover:text-[rgb(9,39,88)] transition-colors cursor-pointer">
                Read Article <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            {categories.map((cat, i) => (
              <button key={cat} className={`text-xs font-body font-bold px-4 py-2 rounded-sm transition-colors ${i === 0 ? 'bg-[rgb(9,39,88)] text-white' : 'bg-white border border-[rgb(210,225,245)] text-[rgb(60,80,110)] hover:border-[rgb(31,106,173)] hover:text-[rgb(31,106,173)]'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <div key={article.title} className="bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-[rgb(221,236,255)] px-5 py-3 flex items-center justify-between">
                  <span className="text-xs font-body font-bold text-[rgb(31,106,173)]">{article.category}</span>
                  <div className="flex items-center gap-1 text-xs font-body text-[rgb(100,120,150)]">
                    <Clock size={10} />{article.readTime}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-body text-[rgb(100,120,150)] mb-3">
                    <Calendar size={10} />{article.date}
                  </div>
                  <h3 className="font-display text-base font-bold text-[rgb(9,39,88)] mb-3 leading-tight flex-1">{article.title}</h3>
                  <p className="text-xs font-body text-[rgb(60,80,110)] leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="text-xs font-body font-bold text-[rgb(31,106,173)] flex items-center gap-1 hover:text-[rgb(9,39,88)] transition-colors">
                    Read More <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Put This Knowledge into Action?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Enroll at ACON Academy and start building the French language skills your immigration pathway requires.</p>
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
