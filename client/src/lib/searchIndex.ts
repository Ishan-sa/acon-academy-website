/*
 * Site search index — powers the header search overlay.
 * Static pages are listed here; blog posts are appended from blogPosts.ts.
 */
import { blogPosts } from "@/lib/blogPosts";

export type SearchEntry = {
  title: string;
  path: string;
  category: string;
  keywords: string;
};

const staticPages: SearchEntry[] = [
  { title: "Home", path: "/", category: "Page", keywords: "acon academy french school surrey kelowna bc" },
  { title: "Programs", path: "/programs", category: "Programs", keywords: "french courses classes tef tcf clb" },
  { title: "CLB-5 French Foundations (6 Months)", path: "/programs/french-foundations", category: "Programs", keywords: "beginner foundations clb 5 six months french" },
  { title: "CLB-7 Intermediate / Advanced (10 Months)", path: "/programs/intermediate-advanced", category: "Programs", keywords: "intermediate advanced clb 7 ten months french" },
  { title: "Intensive Exam Preparation (30 Days)", path: "/programs/exam-preparation", category: "Programs", keywords: "intensive exam prep tef tcf 30 days" },
  { title: "French for PR & Citizens", path: "/programs/french-for-pr", category: "Programs", keywords: "permanent residency pr citizenship immigration french" },
  { title: "French for Youth (Ages 13–18)", path: "/programs/french-for-youth", category: "Programs", keywords: "youth teenagers kids french classes" },
  { title: "Free Trial Classes", path: "/free-classes", category: "Admissions", keywords: "free trial class 90 minute reserve spot lead" },
  { title: "Online Classes", path: "/online-classes", category: "Programs", keywords: "online virtual remote french classes zoom" },
  { title: "Admissions", path: "/admissions", category: "Admissions", keywords: "apply enrollment admission how to apply" },
  { title: "How to Apply", path: "/admissions/how-to-apply", category: "Admissions", keywords: "apply application process steps" },
  { title: "Eligibility Requirements", path: "/admissions/eligibility", category: "Admissions", keywords: "eligibility requirements qualify" },
  { title: "Fees & Financial Aid", path: "/admissions/fees", category: "Admissions", keywords: "fees tuition cost financial aid scholarship 2000" },
  { title: "Application Deadlines", path: "/admissions/application-deadlines", category: "Admissions", keywords: "deadlines dates intake enrollment" },
  { title: "Campus Tours", path: "/admissions/campus-tours", category: "Admissions", keywords: "campus tour visit surrey kelowna" },
  { title: "School Policy", path: "/admissions/school-policy", category: "Admissions", keywords: "policy rules refund attendance" },
  { title: "Campuses", path: "/campuses", category: "Campuses", keywords: "campus location surrey kelowna bc" },
  { title: "Surrey Campus", path: "/campuses/surrey", category: "Campuses", keywords: "surrey campus location british columbia" },
  { title: "Kelowna Campus", path: "/campuses/kelowna", category: "Campuses", keywords: "kelowna campus okanagan location" },
  { title: "About ACON", path: "/about", category: "About", keywords: "about acon academy history mission" },
  { title: "Our Story", path: "/about/our-story", category: "About", keywords: "our story history founding" },
  { title: "Mission & Values", path: "/about/mission-values", category: "About", keywords: "mission values vision" },
  { title: "Accreditation", path: "/about/accreditation", category: "About", keywords: "accreditation certified recognized" },
  { title: "Careers", path: "/about/careers", category: "About", keywords: "careers jobs teaching instructor hiring" },
  { title: "Student Life", path: "/student-life", category: "Student Life", keywords: "student life support resources" },
  { title: "Academic Counselling", path: "/student-life/academic-counselling", category: "Student Life", keywords: "counselling advising academic support" },
  { title: "Exam Training", path: "/student-life/exam-training", category: "Student Life", keywords: "exam training tef tcf mock practice" },
  { title: "Study Spaces", path: "/student-life/study-spaces", category: "Student Life", keywords: "study space library facilities" },
  { title: "Student Resources", path: "/student-life/student-resources", category: "Student Life", keywords: "resources materials tools" },
  { title: "Community Events", path: "/student-life/community-events", category: "Student Life", keywords: "events community french meetup" },
  { title: "News & Blog", path: "/news", category: "News", keywords: "news blog announcements articles" },
  { title: "Contact", path: "/contact", category: "Page", keywords: "contact phone email address get in touch" },
];

const blogEntries: SearchEntry[] = blogPosts.map((p) => ({
  title: p.title,
  path: `/news/${p.slug}`,
  category: "Blog",
  keywords: `${p.keywords} ${p.excerpt}`,
}));

export const searchIndex: SearchEntry[] = [...staticPages, ...blogEntries];

/** Rank and filter the index for a query. Returns best matches first. */
export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);

  const scored = searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const hay = `${title} ${entry.category.toLowerCase()} ${entry.keywords.toLowerCase()}`;
      let score = 0;
      for (const term of terms) {
        if (!hay.includes(term)) return { entry, score: -1 };
        if (title.includes(term)) score += 3;
        if (title.startsWith(term)) score += 2;
        score += 1;
      }
      return { entry, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map((s) => s.entry);
}
