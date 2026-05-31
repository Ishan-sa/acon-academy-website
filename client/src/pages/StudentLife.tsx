/*
 * ACON Academy Student Life Page — Neo-Institutional Modernism
 * Each nav dropdown item has its own full anchor section with unique content.
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, BookOpen, Users, Headphones, FileText, Calendar, Coffee, CheckCircle, Clock, MapPin } from "lucide-react";

const schedule = [
  { campus: "Surrey", day: "Wednesday / Thursday", time: "11:30 AM – 1:00 PM", type: "Noon Class" },
  { campus: "Surrey", day: "Thursday / Friday", time: "8:00 PM – 9:30 PM", type: "Evening Class" },
  { campus: "Surrey", day: "Saturday / Sunday", time: "8:00 PM – 9:30 PM", type: "Weekend Evening" },
  { campus: "Surrey", day: "Monday / Tuesday", time: "9:30 AM – 11:00 AM", type: "Morning Class" },
  { campus: "Kelowna", day: "Wednesday / Thursday", time: "6:00 PM – 7:30 PM", type: "Evening Class" },
  { campus: "Kelowna", day: "Saturday / Sunday", time: "1:00 PM – 2:30 PM", type: "Afternoon Class" },
];

export default function StudentLife() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Page Header */}
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Student Life</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Student Life</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl leading-relaxed">
            Everything you need to succeed — from academic support to community events and digital learning resources.
          </p>
        </div>
      </div>

      {/* ── ACADEMIC COUNSELLING ── */}
      <section id="counselling" className="py-20 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Student Support</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Academic Counselling</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                Our instructors provide individual and group support across all four language skills — listening, reading, writing, and speaking. Whether you're struggling with a specific grammar concept or preparing for an upcoming assessment, our academic counselling program ensures no student falls behind.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                Counselling sessions can be booked through your campus coordinator and are available in-person at both Surrey and Kelowna campuses. Sessions are conducted in a confidential, supportive setting.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "One-on-one sessions with your assigned instructor",
                  "Group study sessions for collaborative learning",
                  "Peer tutoring program pairing advanced and beginner students",
                  "Regular progress tracking and written assessments",
                  "Customized study plans based on your learning gaps",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-[rgb(40,55,80)]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-bold px-7 py-3.5 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors">
                Book a Counselling Session <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-[rgb(9,39,88)] rounded-sm p-8 text-white">
                <div className="w-12 h-12 rounded-sm bg-[rgba(31,106,173,0.3)] flex items-center justify-center mb-5">
                  <Users size={24} className="text-[rgb(70,140,210)]" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">How It Works</h3>
                <ol className="space-y-3">
                  {[
                    "Speak with your instructor or campus coordinator to request a session",
                    "Identify your learning goals and areas for improvement",
                    "Attend your scheduled session — in-person at your campus",
                    "Receive a written summary of recommendations and next steps",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-body text-white/75">
                      <span className="w-5 h-5 rounded-full bg-[rgb(31,106,173)] text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-[rgb(31,106,173)]" />
                  <span className="font-body font-semibold text-[rgb(9,39,88)] text-sm">Session Availability</span>
                </div>
                <p className="text-sm font-body text-[rgb(60,80,110)]">Sessions available during campus hours. Contact your campus to schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAM TRAINING ── */}
      <section id="exam-training" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "TEF Canada", desc: "Test d'Évaluation de Français — required for Express Entry, PR, and citizenship applications.", color: "rgb(9,39,88)" },
                  { label: "TCF Canada", desc: "Test de Connaissance du Français — accepted for immigration and citizenship across Canada.", color: "rgb(31,106,173)" },
                  { label: "Mock Exams", desc: "Full-length simulated exams under timed conditions, mirroring the real test experience.", color: "rgb(9,39,88)" },
                  { label: "Score Analysis", desc: "Detailed breakdown of your mock exam performance with targeted improvement strategies.", color: "rgb(31,106,173)" },
                ].map((item) => (
                  <div key={item.label} className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-5">
                    <div className="font-display font-bold text-[rgb(9,39,88)] mb-2">{item.label}</div>
                    <p className="text-xs font-body text-[rgb(60,80,110)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Exam Preparation</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">TEF / TCF Exam Training</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                The TEF Canada and TCF Canada exams are critical milestones for Canadian immigration, permanent residency, and citizenship applications. Our exam training program is specifically designed to prepare you for these high-stakes assessments.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                Schedule one-on-one sessions with our certified instructors to simulate real exam conditions. You'll receive immediate, personalized feedback on each of the four tested components: speaking, listening, reading, and writing.
              </p>
              <div className="bg-[rgb(9,39,88)] rounded-sm p-5 mb-8">
                <div className="font-display font-bold text-white mb-1">95% Exam Pass Rate</div>
                <p className="text-white/70 text-sm font-body">ACON students achieved a 95% pass rate on TEF and TCF examinations in 2025.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[rgb(31,106,173)] text-white font-body font-bold px-7 py-3.5 rounded-sm hover:bg-[rgb(9,39,88)] transition-colors">
                Book an Exam Session <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDY SPACES ── */}
      <section id="study-spaces" className="py-20 scroll-mt-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Campus Facilities</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Student Study Spaces</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl mx-auto">
              Both our Surrey and Kelowna campuses provide dedicated study environments designed to support focused, productive learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: BookOpen,
                title: "Quiet Study Rooms",
                desc: "Designated silent study areas for focused individual work. Available on a first-come, first-served basis during campus hours.",
                campus: "Surrey & Kelowna",
              },
              {
                icon: Users,
                title: "Collaborative Learning Spaces",
                desc: "Open-plan areas designed for group study, peer tutoring, and collaborative project work. Whiteboards and shared screens available.",
                campus: "Surrey Campus",
              },
              {
                icon: Headphones,
                title: "Digital Resource Library",
                desc: "Access our curated collection of French audio recordings, grammar references, vocabulary tools, and authentic French media.",
                campus: "Surrey & Kelowna",
              },
            ].map(({ icon: Icon, title, desc, campus }) => (
              <div key={title} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-7">
                <div className="w-12 h-12 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[rgb(70,140,210)]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-3">{title}</h3>
                <p className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-body text-[rgb(31,106,173)] font-semibold">
                  <MapPin size={12} /> {campus}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(9,39,88)] rounded-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Campus Hours</h3>
                <div className="space-y-2 text-sm font-body">
                  <div className="flex justify-between text-white/70 border-b border-white/10 pb-2"><span>Monday – Friday</span><span className="font-semibold text-white">9:00 AM – 11:00 PM</span></div>
                  <div className="flex justify-between text-white/70 border-b border-white/10 pb-2"><span>Saturday</span><span className="font-semibold text-white">10:00 AM – 10:00 PM</span></div>
                  <div className="flex justify-between text-white/70"><span>Sunday</span><span className="font-semibold text-white">10:00 AM – 8:00 PM</span></div>
                </div>
              </div>
              <div className="text-white/70 font-body text-sm leading-relaxed">
                <p className="mb-3">Extended evening hours (until 11:00 PM on weekdays) are available at the Surrey campus. Kelowna campus hours may vary — contact the campus directly for current availability.</p>
                <Link href="/campuses" className="text-[rgb(70,140,210)] font-semibold hover:text-white transition-colors">
                  View Campus Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDENT RESOURCES ── */}
      <section id="resources" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Learning Tools</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">Student Resources</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                ACON Academy provides enrolled students with a comprehensive suite of digital and physical learning resources. Our resource library is curated by our instructors to complement your in-class learning and support independent study.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                All enrolled students receive access to our digital learning platform, which includes audio recordings, practice exercises, grammar guides, and authentic French media — available 24/7 from any device.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Audio Listening Practice", desc: "Curated recordings at each CLB level for listening comprehension and pronunciation development." },
                  { title: "Grammar Reference Guides", desc: "Comprehensive, instructor-written grammar references covering all topics in the ACON curriculum." },
                  { title: "Vocabulary Building Tools", desc: "Thematic vocabulary lists and digital flashcard sets aligned with your program level." },
                  { title: "Authentic French Media", desc: "Curated French-language films, podcasts, news articles, and cultural content for immersive learning." },
                  { title: "Past Exam Practice Papers", desc: "TEF and TCF practice papers with answer keys and scoring guides for self-directed exam prep." },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-[rgb(31,106,173)] pl-5 py-1">
                    <div className="font-body font-bold text-[rgb(9,39,88)] text-sm mb-1">{item.title}</div>
                    <div className="text-sm font-body text-[rgb(60,80,110)]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-[rgb(9,39,88)] rounded-sm p-8 text-white">
                <div className="w-12 h-12 rounded-sm bg-[rgba(31,106,173,0.3)] flex items-center justify-center mb-5">
                  <Headphones size={24} className="text-[rgb(70,140,210)]" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Digital Learning Platform</h3>
                <p className="text-white/70 font-body text-sm leading-relaxed mb-5">
                  Access all your learning materials in one place. Our platform is available 24/7 and works on desktop, tablet, and mobile — so you can study on your schedule.
                </p>
                <ul className="space-y-2">
                  {["Available 24/7 on any device", "Updated regularly by instructors", "Progress tracking and completion records", "Integrated with your class schedule"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm font-body text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[rgb(31,106,173)] flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-6">
                <p className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">
                  Resource access is provided to all enrolled students. For questions about accessing your materials, contact your campus coordinator or email <a href="mailto:info@aconacademy.ca" className="text-[rgb(31,106,173)] hover:underline">info@aconacademy.ca</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY EVENTS ── */}
      <section id="events" className="py-20 scroll-mt-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Community & Culture</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Community Events</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl mx-auto">
              Language learning thrives in community. Our regular events bring students together for authentic French practice, cultural exploration, and peer connection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "🗣️",
                title: "Conversation Circles",
                freq: "Weekly",
                desc: "Informal small-group sessions focused entirely on spoken French. All levels welcome — facilitated by an instructor.",
              },
              {
                icon: "🎬",
                title: "French Film Screenings",
                freq: "Monthly",
                desc: "Curated French-language films screened at campus with guided discussion afterward. A fun way to build listening comprehension.",
              },
              {
                icon: "🎉",
                title: "Cultural Celebrations",
                freq: "Seasonal",
                desc: "Celebrate Francophone culture through food, music, and traditions — from La Fête nationale to Mardi Gras.",
              },
              {
                icon: "🤝",
                title: "Alumni Networking",
                freq: "Quarterly",
                desc: "Connect with ACON graduates who have successfully used their French for immigration, career advancement, and citizenship.",
              },
            ].map((event) => (
              <div key={event.title} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-7">
                <div className="text-3xl mb-4">{event.icon}</div>
                <div className="text-xs font-body font-bold text-[rgb(31,106,173)] tracking-widest uppercase mb-2">{event.freq}</div>
                <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-3">{event.title}</h3>
                <p className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(9,39,88)] rounded-sm p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Stay Informed</h3>
            <p className="text-white/70 font-body mb-6 max-w-xl mx-auto">Event schedules are shared with enrolled students via email and posted on campus notice boards. Follow us on social media for updates.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[rgb(31,106,173)] text-white font-body font-bold px-7 py-3.5 rounded-sm hover:bg-[rgb(70,140,210)] transition-colors">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link href="/news" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
                View News & Announcements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Timetable</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Class Schedule</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">Flexible scheduling options at both campuses to fit your busy life.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[rgb(9,39,88)] text-white">
                  <th className="text-left px-5 py-4 font-body font-semibold text-sm">Campus</th>
                  <th className="text-left px-5 py-4 font-body font-semibold text-sm">Days</th>
                  <th className="text-left px-5 py-4 font-body font-semibold text-sm">Time</th>
                  <th className="text-left px-5 py-4 font-body font-semibold text-sm">Class Type</th>
                  <th className="px-5 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className={`border-b border-[rgb(210,225,245)] ${i % 2 === 0 ? 'bg-white' : 'bg-[rgb(221,236,255)]'}`}>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-body font-bold px-2.5 py-1 rounded-sm ${row.campus === 'Surrey' ? 'bg-[rgb(9,39,88)]/10 text-[rgb(9,39,88)]' : 'bg-[rgb(31,106,173)]/15 text-[rgb(31,106,173)]'}`}>
                        {row.campus}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-body text-sm text-[rgb(40,55,80)]">{row.day}</td>
                    <td className="px-5 py-4 font-body text-sm text-[rgb(40,55,80)] font-semibold">{row.time}</td>
                    <td className="px-5 py-4 font-body text-sm text-[rgb(60,80,110)]">{row.type}</td>
                    <td className="px-5 py-4">
                      <Link href="/admissions" className="text-xs font-body font-semibold text-[rgb(31,106,173)] hover:text-[rgb(9,39,88)] transition-colors">
                        Enroll →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Join the ACON Community</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Experience the supportive, dynamic learning environment that has helped hundreds of students achieve French fluency.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Apply Now <ArrowRight size={16} />
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
