/*
 * ACON Academy About Page — Neo-Institutional Modernism
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Award, Users, BookOpen, Heart } from "lucide-react";

const values = [
  { icon: Award, title: "Academic Excellence", description: "We maintain the highest standards of language instruction, with certified instructors and evidence-based curriculum design." },
  { icon: Users, title: "Inclusive Community", description: "We celebrate the diversity of our students and create a welcoming environment for learners from all backgrounds." },
  { icon: BookOpen, title: "Practical Learning", description: "Our curriculum is designed for real-world application — from workplace communication to immigration examinations." },
  { icon: Heart, title: "Student Success", description: "Every decision we make is guided by what is best for our students' long-term success and language journey." },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">About ACON</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">About ACON Academy</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl leading-relaxed">Canada's premier French language learning institution, dedicated to helping students achieve fluency for life in Canada.</p>
        </div>
      </div>

      {/* Our Story */}
      <section id="story" className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Our Story</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">
                Bonjour to Fluency — Our Journey
              </h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                ACON Academy was founded with a singular vision: to make professional-grade French language education accessible to everyone in British Columbia. We recognized that thousands of newcomers, permanent residents, and Canadians needed structured, effective French instruction — not just for personal enrichment, but for real-world outcomes like immigration applications, career advancement, and citizenship.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                Starting with our Surrey campus, we developed a curriculum uniquely tailored to the Canadian context — one that addresses the specific language competencies required by the Canadian Language Benchmark (CLB) framework and the TEF/TCF examinations used in immigration processes.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                Today, ACON Academy operates two campuses in Surrey and Kelowna, serving hundreds of students annually with a 95% examination pass rate and a growing alumni community across British Columbia.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "800+", label: "Students Served" },
                  { number: "95%", label: "Exam Pass Rate" },
                  { number: "2", label: "BC Campuses" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-3xl font-bold text-[rgb(9,39,88)]">{stat.number}</div>
                    <div className="text-xs font-body text-[rgb(60,80,110)] tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/manus-storage/campus_classroom2_63399c3f.jpg"
                alt="ACON Academy students"
                className="w-full h-[480px] object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Our Foundation</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Mission & Values</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl mx-auto">
              Our mission is to provide accessible, high-quality French language education that empowers students to achieve their personal, professional, and immigration goals in Canada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-[rgb(221,236,255)] p-7 rounded-sm border border-[rgb(210,225,245)]">
                <div className="w-12 h-12 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[rgb(70,140,210)]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-3">{title}</h3>
                <p className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Accreditation */}
      <section id="accreditation" className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Recognition</div>
              <h2 className="font-display text-3xl font-bold text-white mb-5">Accreditation & Recognition</h2>
              <p className="text-white/70 font-body leading-relaxed mb-6">
                ACON Academy's programs are aligned with the Canadian Language Benchmarks (CLB) framework and our examination preparation courses are recognized for TEF and TCF certification requirements used in Canadian immigration processes.
              </p>
              <div className="space-y-3">
                {["Canadian Language Benchmarks (CLB) Aligned", "TEF Exam Preparation Recognized", "TCF Exam Preparation Recognized", "Francophone Mobility Program Compatible", "BC Private Training Institutions Branch (PTIB) Registered"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-body text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[rgb(31,106,173)] flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/10 border border-white/20 rounded-sm p-10">
                <div className="font-display text-6xl font-bold text-[rgb(31,106,173)] mb-2">CLB</div>
                <div className="text-white font-body font-semibold">Canadian Language Benchmarks</div>
                <div className="text-white/50 text-sm font-body mt-1">Aligned Curriculum</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section id="media-kit" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Press & Media</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Media Kit</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                ACON Academy welcomes media inquiries and partnership opportunities. Our media kit contains everything journalists, content creators, and community partners need to accurately represent our institution.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                For press releases, interview requests, photography assets, or brand guidelines, please contact our communications team directly at <a href="mailto:info@aconacademy.ca" className="text-[rgb(31,106,173)] hover:underline">info@aconacademy.ca</a>.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Brand Guidelines", desc: "Official logo, colour palette, and typography standards for ACON Academy." },
                  { title: "Institutional Photography", desc: "High-resolution images of our campuses, classrooms, and student life." },
                  { title: "Fact Sheet", desc: "Key statistics, program overview, and institutional background." },
                  { title: "Press Releases", desc: "Official announcements and news from ACON Academy leadership." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 border border-[rgb(210,225,245)] rounded-sm bg-[rgb(221,236,255)]">
                    <div className="w-2 h-2 rounded-full bg-[rgb(31,106,173)] mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-body font-bold text-[rgb(9,39,88)] text-sm">{item.title}</div>
                      <div className="text-sm font-body text-[rgb(60,80,110)] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-body font-bold px-6 py-3 rounded-sm text-white text-sm transition-colors"
                style={{ backgroundColor: 'rgb(9,39,88)' }}
              >
                Contact Our Media Team <ArrowRight size={15} />
              </Link>
            </div>
            <div className="bg-[rgb(9,39,88)] rounded-sm p-10 text-center">
              <div className="font-display text-5xl font-bold text-white mb-2">ACON</div>
              <div className="text-[rgb(70,140,210)] font-body font-semibold mb-1">ACADEMY</div>
              <div className="text-white/50 font-body text-sm italic mb-8">bonjour to fluency™</div>
              <div className="border-t border-white/10 pt-6 space-y-3 text-left">
                <div className="text-xs font-body text-white/50 uppercase tracking-widest mb-3">Brand Colours</div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: 'rgb(9,39,88)' }} />
                  <span className="text-white/70 text-sm font-body">Navy — #092758</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: 'rgb(31,106,173)' }} />
                  <span className="text-white/70 text-sm font-body">Blue — #1F6AAD</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm border border-white/20" style={{ backgroundColor: 'rgb(255,251,248)' }} />
                  <span className="text-white/70 text-sm font-body">Warm White — #FFFBF8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Join Our Team</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Careers at ACON Academy</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl mx-auto">
              We are always looking for passionate educators and administrators who share our commitment to student success and French language education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "French Language Instructor",
                type: "Full-Time / Part-Time",
                campus: "Surrey & Kelowna",
                desc: "Certified French instructors with CLB assessment experience to deliver our core programs. TEF/TCF coaching experience is an asset.",
              },
              {
                title: "Admissions Coordinator",
                type: "Full-Time",
                campus: "Surrey Campus",
                desc: "Manage prospective student inquiries, guide applicants through the enrolment process, and coordinate campus tours and information sessions.",
              },
              {
                title: "Student Services Advisor",
                type: "Full-Time",
                campus: "Surrey & Kelowna",
                desc: "Support enrolled students with academic counselling, resource access, and exam preparation scheduling across both campuses.",
              },
            ].map((job) => (
              <div key={job.title} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-body font-bold px-2.5 py-1 rounded-sm" style={{ backgroundColor: 'rgba(9,39,88,0.08)', color: 'rgb(9,39,88)' }}>{job.type}</span>
                  <span className="text-xs font-body text-[rgb(60,80,110)]">{job.campus}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-3">{job.title}</h3>
                <p className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed mb-5">{job.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-[rgb(31,106,173)] hover:text-[rgb(9,39,88)] transition-colors"
                >
                  Apply via Email <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(9,39,88)] rounded-sm p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Don't See Your Role?</h3>
            <p className="text-white/70 font-body mb-6 max-w-xl mx-auto">We welcome unsolicited applications from qualified educators and professionals. Send your CV and a brief cover letter to our team.</p>
            <a
              href="mailto:info@aconacademy.ca"
              className="inline-flex items-center gap-2 font-body font-bold px-7 py-3.5 rounded-sm text-white text-sm transition-colors"
              style={{ backgroundColor: 'rgb(31,106,173)' }}
            >
              Send Your Application <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
