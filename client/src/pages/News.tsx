/*
 * ACON Academy News & Blog Page — Neo-Institutional Modernism
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Calendar, Tag } from "lucide-react";

const articles = [
  {
    slug: "financial-aid-2026",
    category: "Announcement",
    date: "April 4, 2026",
    title: "$2,000 Financial Aid Now Available at Surrey Campus",
    excerpt: "To celebrate our milestone anniversary, ACON Academy is offering $2,000 in financial aid to all new enrollments at our Surrey campus until June 30th, 2026.",
    image: "/manus-storage/campus_brochure_consult_70fcc694.jpg",
    readTime: "2 min read",
  },
  {
    slug: "extended-hours",
    category: "Campus Life",
    date: "April 6, 2026",
    title: "Extended Campus Hours Now in Effect at Surrey",
    excerpt: "Due to increased demand for campus services, all Surrey campus facilities are now available to students until 11:00 PM on weekdays.",
    image: "/manus-storage/campus_reception_2757a7ae.jpg",
    readTime: "2 min read",
  },
  {
    slug: "record-pass-rates",
    category: "Student Success",
    date: "March 28, 2026",
    title: "ACON Students Achieve Record TEF/TCF Pass Rates in 2025",
    excerpt: "Our students achieved a 95% pass rate on TEF and TCF examinations in 2025, reflecting the strength of our curriculum and dedicated faculty.",
    image: "/manus-storage/campus_computer_lab_e3f91c39.jpg",
    readTime: "3 min read",
  },
  {
    slug: "why-french-for-pr",
    category: "Blog",
    date: "March 15, 2026",
    title: "Why French Language Skills Are a Game-Changer for Canadian PR Applications",
    excerpt: "Understanding how French proficiency can significantly boost your Express Entry Comprehensive Ranking System (CRS) score and open pathways to permanent residence in Canada.",
    image: "/manus-storage/campus_reception2_35c233e0.jpg",
    readTime: "6 min read",
  },
  {
    slug: "tef-vs-tcf",
    category: "Blog",
    date: "March 5, 2026",
    title: "TEF vs. TCF: Which French Exam Should You Take for Canadian Immigration?",
    excerpt: "A comprehensive comparison of the two main French language proficiency exams accepted by Immigration, Refugees and Citizenship Canada (IRCC) — and how to choose the right one for your goals.",
    image: "/manus-storage/campus_reception_2757a7ae.jpg",
    readTime: "7 min read",
  },
  {
    slug: "clb-explained",
    category: "Blog",
    date: "February 20, 2026",
    title: "Canadian Language Benchmarks (CLB) Explained: A Complete Guide for Newcomers",
    excerpt: "Everything you need to know about the CLB framework — what the levels mean, how they're assessed, and why CLB-5 and CLB-7 are the most important milestones for Canadian immigrants.",
    image: "/manus-storage/acon-entrance-new_54bb7488.png",
    readTime: "8 min read",
  },
  {
    slug: "francophone-mobility",
    category: "Blog",
    date: "February 8, 2026",
    title: "The Francophone Mobility Work Permit: How French Opens Doors to Canadian Employment",
    excerpt: "The Francophone Mobility Program allows French-speaking foreign nationals to work in Canada outside of Quebec without a Labour Market Impact Assessment. Here's how to qualify.",
    image: "/manus-storage/campus_reception2_35c233e0.jpg",
    readTime: "5 min read",
  },
  {
    slug: "5-tips-faster-french",
    category: "Blog",
    date: "January 25, 2026",
    title: "5 Proven Strategies to Learn French Faster as an Adult Learner",
    excerpt: "Adult language learning is different from childhood acquisition — but with the right strategies, adults can achieve remarkable fluency. Our instructors share their top evidence-based techniques.",
    image: "/manus-storage/campus_classroom2_63399c3f.jpg",
    readTime: "6 min read",
  },
  {
    slug: "kelowna-campus-update",
    category: "Campus Life",
    date: "January 12, 2026",
    title: "Kelowna Campus Expands Weekend Class Offerings for 2026",
    excerpt: "Our Kelowna campus is expanding its Saturday and Sunday class schedule to meet growing demand in the Okanagan region. New morning and afternoon time slots are now available.",
    image: "/kelowana-campus/1.jpeg",
    readTime: "3 min read",
  },
];

const categories = ["All", "Announcement", "Campus Life", "Student Success", "Blog"];

export default function News() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Page Header */}
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">News & Blog</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">News & Blog</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl">
            The latest announcements, student stories, and expert insights on French language learning and Canadian immigration.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-[rgb(210,225,245)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-4 flex items-center gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm font-body font-semibold px-4 py-2 rounded-sm whitespace-nowrap transition-colors ${
                cat === "All"
                  ? "bg-[rgb(9,39,88)] text-white"
                  : "text-[rgb(60,80,110)] hover:text-[rgb(9,39,88)] hover:bg-[rgb(221,236,255)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section id="announcements" className="py-16 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          {/* Featured Article */}
          <div className="mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-5">Featured</div>
            <Link href={`/news/${featured.slug}`}>
              <div className="acon-program-card grid grid-cols-1 lg:grid-cols-2 bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden group">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-wide uppercase bg-[rgb(31,106,173)]/10 px-2.5 py-1 rounded-sm">
                      {featured.category}
                    </span>
                    <span className="text-xs text-[rgb(60,80,110)] font-body flex items-center gap-1">
                      <Calendar size={11} /> {featured.date}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-4 leading-tight group-hover:text-[rgb(31,106,173)] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-body font-semibold text-[rgb(9,39,88)]">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link href={`/news/${article.slug}`} key={article.slug}>
                <div className="acon-program-card bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden h-full group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-wide uppercase">
                        <Tag size={10} className="inline mr-1" />{article.category}
                      </span>
                      <span className="text-xs text-[rgb(60,80,110)] font-body">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] leading-tight mb-3 group-hover:text-[rgb(31,106,173)] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="text-xs text-[rgb(60,80,110)] font-body flex items-center gap-1">
                      <Calendar size={11} /> {article.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories anchor */}
      <section id="stories" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Real Results</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Student Stories</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">Hear directly from ACON graduates who achieved their French language goals — and what it meant for their lives in Canada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya S.",
                program: "CLB-7 Intermediate / Advanced",
                quote: "I went from CLB-4 to CLB-7 in 10 months. My CRS score jumped by 50 points and I received my PR invitation three months later. ACON changed my life.",
                outcome: "Received PR Invitation",
              },
              {
                name: "Ahmed K.",
                program: "Intensive Exam Preparation",
                quote: "I had failed the TEF twice before coming to ACON. After 30 days of intensive preparation with their instructors, I passed with a score that qualified me for citizenship.",
                outcome: "Passed TEF — Citizenship Eligible",
              },
              {
                name: "Maria L.",
                program: "French for PR & Citizens",
                quote: "The instructors at ACON understand exactly what the examiners are looking for. The mock exams and personalized feedback made all the difference in my preparation.",
                outcome: "Achieved CLB-5 for PR Application",
              },
            ].map((story) => (
              <div key={story.name} className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-7">
                <div className="text-3xl text-[rgb(31,106,173)] font-display font-bold mb-4">&#8220;</div>
                <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-6 italic">{story.quote}</p>
                <div className="border-t border-[rgb(210,225,245)] pt-4">
                  <div className="font-body font-bold text-[rgb(9,39,88)]">{story.name}</div>
                  <div className="text-xs font-body text-[rgb(31,106,173)] font-semibold uppercase tracking-wide mt-0.5">{story.program}</div>
                  <div className="text-xs font-body text-green-700 font-semibold mt-2 bg-green-50 px-2 py-1 rounded-sm inline-block">{story.outcome}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog anchor */}
      <section id="blog" className="py-16 scroll-mt-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Expert Insights</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Blog</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">In-depth guides, language tips, and immigration insights from the ACON Academy team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Why French Language Skills Are a Game-Changer for Canadian PR Applications", date: "March 15, 2026", readTime: "6 min read", slug: "why-french-for-pr" },
              { title: "TEF vs. TCF: Which French Exam Should You Take for Canadian Immigration?", date: "March 5, 2026", readTime: "7 min read", slug: "tef-vs-tcf" },
              { title: "Canadian Language Benchmarks (CLB) Explained: A Complete Guide for Newcomers", date: "February 20, 2026", readTime: "8 min read", slug: "clb-explained" },
              { title: "The Francophone Mobility Work Permit: How French Opens Doors to Canadian Employment", date: "February 8, 2026", readTime: "5 min read", slug: "francophone-mobility" },
            ].map((post) => (
              <Link href={`/news/${post.slug}`} key={post.slug}>
                <div className="bg-white border border-[rgb(210,225,245)] rounded-sm p-6 hover:border-[rgb(31,106,173)] transition-colors group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-body text-[rgb(60,80,110)]">{post.readTime}</span>
                    <span className="text-xs font-body text-[rgb(60,80,110)]">{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] leading-tight group-hover:text-[rgb(31,106,173)] transition-colors">{post.title}</h3>
                  <div className="mt-4 text-xs font-body font-semibold text-[rgb(31,106,173)] flex items-center gap-1">Read Article <ArrowRight size={12} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases anchor */}
      <section id="press" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Official Communications</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Press Releases</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">Official announcements from ACON Academy leadership on institutional milestones, partnerships, and program updates.</p>
          </div>
          <div className="space-y-4 max-w-3xl">
            {[
              { date: "April 4, 2026", title: "ACON Academy Announces $2,000 Financial Aid for Surrey Campus Enrollments", desc: "ACON Academy introduces a financial aid program to support new students enrolling at its Surrey campus, effective immediately through June 30th, 2026." },
              { date: "March 28, 2026", title: "ACON Students Achieve Record 95% TEF/TCF Pass Rate in 2025", desc: "ACON Academy's examination preparation programs delivered a 95% pass rate across TEF Canada and TCF Canada examinations in the 2025 academic year." },
              { date: "January 12, 2026", title: "Kelowna Campus Expands Weekend Schedule for 2026", desc: "In response to growing demand in the Okanagan region, ACON Academy's Kelowna campus has added new Saturday and Sunday class time slots for 2026." },
            ].map((release) => (
              <div key={release.title} className="border border-[rgb(210,225,245)] rounded-sm p-6 bg-[rgb(221,236,255)]">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={13} className="text-[rgb(31,106,173)]" />
                  <span className="text-xs font-body text-[rgb(60,80,110)]">{release.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-2">{release.title}</h3>
                <p className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">{release.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-sm font-body text-[rgb(60,80,110)]">For media inquiries, contact <a href="mailto:info@aconacademy.ca" className="text-[rgb(31,106,173)] hover:underline">info@aconacademy.ca</a>.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
