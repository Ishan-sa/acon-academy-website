/*
 * ACON Academy News Article Page — Neo-Institutional Modernism
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Markdown from "@/components/Markdown";
import { Link, useParams } from "wouter";
import { ChevronRight, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";

type Article = {
  category: string;
  date: string;
  title: string;
  readTime: string;
  image: string;
  content: string[];
};

const articles: Record<string, Article> = {
  "financial-aid-2026": {
    category: "Announcement",
    date: "April 4, 2026",
    title: "$2,000 Financial Aid Now Available at Surrey Campus",
    readTime: "2 min read",
    image: "/manus-storage/campus_brochure_consult_70fcc694.jpg",
    content: [
      "ACON Academy is proud to announce a landmark initiative: $2,000 in financial aid is now available for all new enrollments at our Surrey campus. This offer is available until June 30th, 2026, and is our way of celebrating a major milestone in the academy's growth.",
      "This financial aid applies to all programs at the Surrey campus, including the French Foundations Program (CLB-5), the Intermediate/Advanced Program (CLB-7), the Intensive Exam Preparation Program, and the French for PR & Citizens Program.",
      "To qualify for the $2,000 financial aid, students must enroll in a program at the Surrey campus and complete their enrollment process (including payment) before June 30th, 2026. The financial aid will be applied directly to program fees.",
      "\"We believe that financial barriers should never stand between a student and their language goals,\" said the ACON Academy Academic Director. \"This initiative is our commitment to making French education accessible to everyone in our community.\"",
      "Interested students are encouraged to contact our admissions team as soon as possible, as spaces are limited and the June 30th deadline is firm. Book a free trial class or schedule a campus tour to get started.",
    ],
  },
  "why-french-for-pr": {
    category: "Blog",
    date: "March 15, 2026",
    title: "Why French Language Skills Are a Game-Changer for Canadian PR Applications",
    readTime: "6 min read",
    image: "/manus-storage/acon-reception.png",
    content: [
      "Canada's immigration system rewards bilingualism. If you're applying for permanent residence through Express Entry, having strong French language skills can dramatically increase your Comprehensive Ranking System (CRS) score — sometimes by as much as 30–50 points.",
      "Under the Federal Skilled Worker Program and the Canadian Experience Class, applicants who demonstrate proficiency in both English and French receive additional CRS points. The exact number of bonus points depends on your French proficiency level, but even a CLB-5 in French can provide a meaningful boost to your score.",
      "The TEF Canada (Test d'Évaluation de Français) and TCF Canada (Test de Connaissance du Français) are the two French language tests accepted by Immigration, Refugees and Citizenship Canada (IRCC) for Express Entry applications. Both tests assess your abilities in listening, reading, writing, and speaking.",
      "Beyond Express Entry, French proficiency opens doors to the Francophone Mobility Program, which allows French-speaking foreign nationals to work in Canada outside of Quebec without requiring a Labour Market Impact Assessment (LMIA). This is a significant advantage for those seeking Canadian work experience.",
      "For Provincial Nominee Programs (PNPs), several provinces — including Ontario, British Columbia, and Alberta — have streams that specifically target French-speaking candidates. These streams often have lower CRS score requirements than the federal Express Entry draws.",
      "At ACON Academy, our programs are specifically designed to help students achieve the French language benchmarks required for Canadian immigration. Our CLB-5 French Foundations Program and CLB-7 Intermediate/Advanced Program align directly with the language requirements used in immigration assessments.",
      "If you're serious about your Canadian immigration journey, investing in French language education is one of the most strategic decisions you can make. Contact ACON Academy today to learn which program is right for your immigration goals.",
    ],
  },
  "tef-vs-tcf": {
    category: "Blog",
    date: "March 5, 2026",
    title: "TEF vs. TCF: Which French Exam Should You Take for Canadian Immigration?",
    readTime: "7 min read",
    image: "/manus-storage/acon-reception.png",
    content: [
      "When applying for Canadian permanent residence or citizenship, you'll need to demonstrate French language proficiency through an approved test. The two tests accepted by Immigration, Refugees and Citizenship Canada (IRCC) are the TEF Canada and the TCF Canada. But which one should you choose?",
      "The TEF Canada (Test d'Évaluation de Français) is administered by the Paris Chamber of Commerce and Industry (CCIP). It is widely recognized and has been used for Canadian immigration purposes for many years. The TEF assesses all four language skills: listening, reading, writing, and speaking.",
      "The TCF Canada (Test de Connaissance du Français) is administered by the Centre International d'Études Pédagogiques (CIEP). It is a more recent addition to the list of approved tests for Canadian immigration. Like the TEF, it assesses listening, reading, writing, and speaking.",
      "Key differences between the two tests include: test format (TEF uses multiple choice and written responses; TCF uses multiple choice for listening and reading, with written and oral components for writing and speaking), test duration (TEF takes approximately 3 hours; TCF takes approximately 2.5 hours), and score validity (both are valid for 2 years for immigration purposes).",
      "For most candidates, the choice between TEF and TCF comes down to personal preference and test availability. Both tests are accepted by IRCC and produce equivalent Canadian Language Benchmark (CLB) scores for immigration purposes.",
      "At ACON Academy, our Intensive Exam Preparation Program and our CLB-7 Intermediate/Advanced Program both include preparation for both TEF and TCF examinations. Our instructors are experienced with both test formats and can help you determine which test is the best fit for your situation.",
      "Regardless of which test you choose, thorough preparation is essential. Our 95% exam pass rate reflects the effectiveness of our targeted preparation approach. Contact us today to learn more about our exam preparation programs.",
    ],
  },
  "clb-explained": {
    category: "Blog",
    date: "February 20, 2026",
    title: "Canadian Language Benchmarks (CLB) Explained: A Complete Guide for Newcomers",
    readTime: "8 min read",
    image: "/manus-storage/acon-entrance-new_54bb7488.png",
    content: [
      "The Canadian Language Benchmarks (CLB) is the national standard used in Canada to describe, measure, and recognize the English and French language proficiency of adult immigrants and prospective immigrants. Understanding the CLB framework is essential for anyone navigating the Canadian immigration system.",
      "The CLB framework consists of 12 benchmark levels, organized into three stages: Basic (CLB 1–4), Intermediate (CLB 5–8), and Advanced (CLB 9–12). Each level describes specific language abilities in four skill areas: listening, speaking, reading, and writing.",
      "For Canadian immigration purposes, the most commonly referenced CLB levels are CLB-5 and CLB-7. CLB-5 is the minimum requirement for many immigration programs, including the Francophone Mobility work permit. CLB-7 is required for the Federal Skilled Worker Program and provides significant CRS bonus points in Express Entry.",
      "CLB-5 corresponds approximately to the CEFR (Common European Framework of Reference) level A2/B1. At this level, you can communicate in familiar everyday situations, understand simple texts, and write basic messages. This is the target level for ACON Academy's French Foundations Program.",
      "CLB-7 corresponds approximately to CEFR level B1/B2. At this level, you can communicate effectively in most everyday and professional situations, understand complex texts, and write organized, detailed documents. This is the target level for ACON Academy's Intermediate/Advanced Program.",
      "Your CLB level is determined by your scores on approved language tests. For French, the TEF Canada and TCF Canada are the approved tests. Each test score range corresponds to a specific CLB level, and IRCC uses these CLB levels to assess your language proficiency for immigration purposes.",
      "At ACON Academy, all of our programs are designed around the CLB framework. Our instructors are trained in CLB-based instruction, and our curriculum is specifically designed to help students achieve the CLB levels required for their immigration goals. Contact us to learn which program is right for your CLB target.",
    ],
  },
  "5-tips-faster-french": {
    category: "Blog",
    date: "January 25, 2026",
    title: "5 Proven Strategies to Learn French Faster as an Adult Learner",
    readTime: "6 min read",
    image: "/manus-storage/campus_classroom2_63399c3f.jpg",
    content: [
      "Learning a new language as an adult is challenging — but it's far from impossible. In fact, adult learners have several advantages over children: stronger analytical skills, larger existing vocabulary in their first language, and clearer motivation. The key is using the right strategies.",
      "Strategy 1: Focus on High-Frequency Vocabulary. Research shows that just 1,000 words account for approximately 85% of everyday speech. Rather than trying to memorize thousands of words, focus on the most commonly used French vocabulary first. Our instructors at ACON Academy use frequency-based vocabulary lists to maximize learning efficiency.",
      "Strategy 2: Embrace Spaced Repetition. Spaced repetition is a learning technique that involves reviewing material at increasing intervals over time. This approach is proven to dramatically improve long-term retention. Use flashcard apps or structured review sessions to apply spaced repetition to your French vocabulary and grammar.",
      "Strategy 3: Immerse Yourself in Authentic Content. Supplement your classroom learning with authentic French content — French radio, podcasts, films, and news websites. Even 15–20 minutes of daily exposure to authentic French significantly accelerates your progress. Radio-Canada and TV5 Monde are excellent free resources.",
      "Strategy 4: Speak from Day One. Many adult learners are reluctant to speak until they feel 'ready.' This is a mistake. Speaking practice — even imperfect speaking — is essential for developing fluency. ACON Academy's classes emphasize speaking from the very first lesson, creating a supportive environment where mistakes are part of the learning process.",
      "Strategy 5: Connect Language to Real Goals. Adults learn best when they can connect new language to meaningful, real-world goals. Whether your goal is passing a TEF exam, communicating with French-speaking colleagues, or meeting PR requirements, keeping your specific goal in mind helps maintain motivation and focus your learning.",
      "At ACON Academy, our instructors incorporate all of these evidence-based strategies into our curriculum. Our structured programs provide the framework, and our experienced instructors provide the guidance to help you achieve French fluency faster than you thought possible.",
    ],
  },
};

const legacyRelated = [
  { slug: "tef-vs-tcf", title: "TEF vs. TCF: Which French Exam Should You Take?", category: "Blog" },
  { slug: "clb-explained", title: "Canadian Language Benchmarks Explained", category: "Blog" },
  { slug: "5-tips-faster-french", title: "5 Proven Strategies to Learn French Faster", category: "Blog" },
];

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();

  // SEO blog posts (markdown body) take priority, then legacy hand-written articles.
  const blogPost = blogPosts.find((p) => p.slug === slug);
  const legacy = !blogPost ? articles[slug || ""] : undefined;

  // Fall back to a known article if the slug matches nothing.
  const fallback = articles["why-french-for-pr"];
  const article = blogPost
    ? {
        kind: "markdown" as const,
        category: blogPost.category,
        date: blogPost.date,
        title: blogPost.title,
        readTime: blogPost.readTime,
        image: blogPost.image,
        markdown: blogPost.content,
      }
    : {
        kind: "paragraphs" as const,
        category: (legacy || fallback).category,
        date: (legacy || fallback).date,
        title: (legacy || fallback).title,
        readTime: (legacy || fallback).readTime,
        image: (legacy || fallback).image,
        paragraphs: (legacy || fallback).content,
      };

  // Related: prefer other SEO posts; fall back to legacy list.
  const relatedArticles = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({ slug: p.slug, title: p.title, category: p.category }));
  const related = relatedArticles.length ? relatedArticles : legacyRelated;

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Article Header */}
      <div className="bg-[rgb(9,39,88)] py-14 lg:py-18">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/news" className="hover:text-white transition-colors">News</Link>
            <ChevronRight size={14} />
            <span className="text-white truncate max-w-xs">{article.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-body font-semibold text-[rgb(70,140,210)] tracking-wide uppercase bg-[rgb(31,106,173)]/20 px-2.5 py-1 rounded-sm">
              <Tag size={10} className="inline mr-1" />{article.category}
            </span>
            <span className="text-white/50 font-body text-sm flex items-center gap-1.5">
              <Calendar size={12} /> {article.date}
            </span>
            <span className="text-white/50 font-body text-sm flex items-center gap-1.5">
              <Clock size={12} /> {article.readTime}
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-80 object-cover rounded-sm mb-10"
              />
              {article.kind === "markdown" ? (
                <Markdown content={article.markdown} />
              ) : (
                <div className="prose max-w-none">
                  {article.paragraphs.map((paragraph, i) => (
                    <p key={i} className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* CTA within article */}
              <div className="mt-12 bg-[rgb(9,39,88)] rounded-sm p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-3">Ready to Start Your French Journey?</h3>
                <p className="text-white/70 font-body mb-6">Explore ACON Academy's programs and find the right path to French fluency for your goals.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/programs" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-[rgb(5,26,64)] font-body font-bold px-6 py-3 rounded-sm transition-colors flex items-center gap-2">
                    Explore Programs <ArrowRight size={14} />
                  </Link>
                  <Link href="/free-classes" className="border border-white/40 hover:border-white text-white font-body font-semibold px-6 py-3 rounded-sm transition-colors">
                    Try a Free Class
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white border border-[rgb(210,225,245)] rounded-sm p-6 mb-6">
                <h4 className="font-display font-bold text-[rgb(9,39,88)] mb-4">Related Articles</h4>
                <div className="space-y-4">
                  {related.filter(a => a.slug !== slug).map((a) => (
                    <Link key={a.slug} href={`/news/${a.slug}`}>
                      <div className="group border-b border-[rgb(210,225,245)] pb-4 last:border-0 last:pb-0">
                        <div className="text-xs font-body text-[rgb(31,106,173)] font-semibold mb-1">{a.category}</div>
                        <div className="font-body text-sm text-[rgb(40,55,80)] group-hover:text-[rgb(31,106,173)] transition-colors leading-snug">{a.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[rgb(31,106,173)]/10 border border-[rgb(31,106,173)]/30 rounded-sm p-6">
                <div className="font-display font-bold text-[rgb(9,39,88)] mb-2">🎓 $2,000 Financial Aid</div>
                <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed mb-4">
                  New enrollments at our Surrey campus qualify for $2,000 in financial aid until June 30th, 2026.
                </p>
                <Link href="/admissions/fees" className="text-sm font-body font-semibold text-[rgb(9,39,88)] flex items-center gap-1 hover:text-[rgb(31,106,173)] transition-colors">
                  Learn More <ArrowRight size={12} />
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
