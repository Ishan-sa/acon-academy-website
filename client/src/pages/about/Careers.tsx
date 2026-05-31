/*
 * ACON Academy — Careers Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

const openings = [
  {
    title: "French Language Instructor — CLB Intermediate/Advanced",
    campus: "Surrey, BC",
    type: "Full-Time",
    dept: "Academic",
    summary: "ACON Academy is seeking a certified French language instructor to deliver CLB Intermediate and Advanced programs at our Surrey campus. The successful candidate will have a recognized teaching certification, experience with CLB assessment, and a demonstrated ability to prepare students for TEF/TCF examinations.",
    requirements: [
      "Bachelor's degree in French, Linguistics, Education, or related field",
      "TEFL, TESL, or FLE certification (required)",
      "Minimum 2 years of adult language instruction experience",
      "Familiarity with the Canadian Language Benchmarks (CLB) framework",
      "Experience with TEF Canada or TCF Canada examination preparation (preferred)",
      "Eligibility to work in Canada",
    ],
    responsibilities: [
      "Deliver CLB-aligned French instruction to groups of up to 12 adult learners",
      "Design and adapt lesson plans based on individual student progress",
      "Administer CLB placement and progress assessments",
      "Provide detailed feedback on student performance and progression",
      "Collaborate with the academic team on curriculum development",
    ],
  },
  {
    title: "French Language Instructor — Beginner/Elementary",
    campus: "Kelowna, BC",
    type: "Part-Time",
    dept: "Academic",
    summary: "Our Kelowna campus is growing and we are looking for an experienced French language instructor to deliver beginner and elementary level programs. This is an excellent opportunity for an instructor who is passionate about working with adult learners at the start of their French language journey.",
    requirements: [
      "Bachelor's degree in French, Education, or related field",
      "Teaching certification (TEFL, TESL, or equivalent)",
      "Experience teaching adult learners at beginner levels",
      "Patient, encouraging teaching style suited to new language learners",
      "Availability for weekday and/or weekend sessions",
    ],
    responsibilities: [
      "Deliver beginner and elementary French programs to adult learners",
      "Create a supportive, low-anxiety learning environment",
      "Track and report on student attendance and progress",
      "Adapt instructional methods to diverse learning styles and backgrounds",
      "Participate in faculty meetings and professional development sessions",
    ],
  },
  {
    title: "Student Admissions Coordinator",
    campus: "Surrey, BC",
    type: "Full-Time",
    dept: "Administration",
    summary: "ACON Academy is looking for a detail-oriented and student-focused Admissions Coordinator to manage the enrollment process at our Surrey campus. The successful candidate will be the first point of contact for prospective students and will play a critical role in guiding them through the admissions process.",
    requirements: [
      "Post-secondary diploma or degree in a relevant field",
      "Minimum 1 year of experience in admissions, customer service, or education administration",
      "Excellent written and verbal communication skills in English",
      "French language proficiency is a strong asset",
      "Familiarity with Canadian immigration pathways (preferred)",
      "Proficiency with CRM software and standard office applications",
    ],
    responsibilities: [
      "Respond to prospective student inquiries via phone, email, and in-person",
      "Conduct intake interviews and CLB placement assessments",
      "Guide students through the enrollment and registration process",
      "Maintain accurate student records in the institutional CRM",
      "Coordinate with the academic team on class scheduling and capacity",
    ],
  },
  {
    title: "Marketing & Community Outreach Coordinator",
    campus: "Surrey, BC (In-Person)",
    type: "Full-Time",
    dept: "Marketing",
    summary: "ACON Academy is expanding its community presence and is seeking a Marketing & Community Outreach Coordinator to manage our digital presence, community partnerships, and student recruitment initiatives. This role is ideal for a bilingual marketing professional with a passion for education and community building.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "Minimum 2 years of marketing or communications experience",
      "Proficiency in social media management and digital marketing tools",
      "Bilingual (French/English) strongly preferred",
      "Experience in the education or immigration sector is an asset",
      "Strong network within the BC newcomer and immigrant community",
    ],
    responsibilities: [
      "Manage ACON Academy's social media channels and digital content calendar",
      "Develop and execute community outreach initiatives targeting newcomer communities",
      "Coordinate with settlement agencies, immigration consultants, and community organizations",
      "Plan and execute student recruitment events, information sessions, and open houses",
      "Track and report on marketing campaign performance and enrollment metrics",
    ],
  },
];

const benefits = [
  { title: "Competitive Compensation", desc: "Salaries benchmarked to BC post-secondary sector standards, with annual performance reviews." },
  { title: "Professional Development", desc: "Annual professional development budget for certifications, conferences, and continuing education." },
  { title: "Flexible Scheduling", desc: "Flexible scheduling options for instructors, including part-time and weekend positions." },
  { title: "Mission-Driven Culture", desc: "Work alongside a team that is genuinely committed to student success and community impact." },
  { title: "Bilingual Environment", desc: "A workplace where French and English are both valued and regularly used." },
  { title: "Growth Opportunities", desc: "A growing institution with opportunities for advancement as we expand our programs and campuses." },
];

export default function Careers() {
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
            <span className="text-white">Careers</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Join Our Team</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Careers at ACON</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Build a career at British Columbia's most trusted French language academy. We are looking for educators, administrators, and community builders who share our commitment to student success.
            </p>
          </div>
        </div>
      </div>

      {/* Why Work at ACON */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Why ACON</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Work That Matters</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                At ACON Academy, every role — from instructor to administrator — contributes directly to outcomes that change people's lives. Our students are pursuing permanent residency, citizenship, career advancement, and belonging in Canada. The work we do together makes those outcomes possible.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                We are a growing institution with a strong culture of professional development, collegial respect, and genuine commitment to our mission. We offer competitive compensation, flexible scheduling, and a bilingual workplace where both French and English are valued every day.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed">
                If you are a certified French language instructor, an experienced education administrator, or a marketing professional with a passion for community impact, we want to hear from you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-5">
                  <div className="font-body font-bold text-[rgb(9,39,88)] mb-2 text-sm">{title}</div>
                  <div className="text-xs font-body text-[rgb(60,80,110)] leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Current Openings</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Open Positions</h2>
          </div>
          <div className="space-y-8">
            {openings.map((job) => (
              <div key={job.title} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="bg-[rgb(9,39,88)] px-8 py-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-body font-semibold px-2.5 py-1 rounded-sm bg-[rgb(31,106,173)]/40 text-white">{job.dept}</span>
                    <span className="flex items-center gap-1.5 text-xs font-body text-white/70"><MapPin size={12} />{job.campus}</span>
                    <span className="flex items-center gap-1.5 text-xs font-body text-white/70"><Clock size={12} />{job.type}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{job.title}</h3>
                </div>
                <div className="p-8">
                  <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">{job.summary}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-4">Requirements</div>
                      <ul className="space-y-2">
                        {job.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2.5 text-sm font-body text-[rgb(40,55,80)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[rgb(31,106,173)] mt-1.5 flex-shrink-0" />{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-4">Key Responsibilities</div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2.5 text-sm font-body text-[rgb(40,55,80)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[rgb(9,39,88)] mt-1.5 flex-shrink-0" />{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[rgb(210,225,245)]">
                    <a
                      href={`mailto:info@aconacademy.ca?subject=Application: ${job.title}`}
                      className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-bold px-6 py-3 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors text-sm"
                    >
                      Apply for This Position <ArrowRight size={14} />
                    </a>
                    <span className="ml-4 text-xs font-body text-[rgb(60,80,110)]">Send your CV and cover letter to info@aconacademy.ca</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Applications */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Don't See the Right Role?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">We are always interested in hearing from talented educators and administrators. Send us a general application and we will keep your profile on file for future openings.</p>
          <a
            href="mailto:info@aconacademy.ca?subject=General Application — ACON Academy"
            className="inline-flex items-center gap-2 bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-8 py-4 rounded-sm transition-colors"
          >
            Send General Application <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
