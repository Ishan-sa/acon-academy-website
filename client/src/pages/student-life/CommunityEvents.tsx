/*
 * ACON Academy — Community Events Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const upcomingEvents = [
  { title: "Conversation Night: Francophone Culture", date: "May 22, 2026", time: "6:30 PM – 8:30 PM", campus: "Surrey", type: "Conversation Practice", spots: "12 spots remaining", desc: "An informal evening of French conversation focused on Francophone culture across Canada and the world. Open to all ACON students at CLB 4 and above." },
  { title: "TEF/TCF Information Session", date: "May 27, 2026", time: "5:30 PM – 7:00 PM", campus: "Surrey & Kelowna (simulcast)", type: "Information Session", spots: "Available", desc: "A detailed walkthrough of TEF Canada and TCF Canada examination formats, scoring, and registration. Q&A with ACON exam preparation instructors. Open to all enrolled and prospective students." },
  { title: "Beginner Conversation Group", date: "May 29, 2026", time: "5:00 PM – 6:00 PM", campus: "Kelowna", type: "Conversation Practice", spots: "Available", desc: "A guided conversation group for students at CLB 1–3. Facilitated by an ACON instructor with structured conversation prompts and vocabulary support." },
  { title: "ACON Spring Celebration", date: "June 5, 2026", time: "5:00 PM – 8:00 PM", campus: "Surrey", type: "Social Event", spots: "Available", desc: "Annual end-of-term celebration for all ACON students, graduates, and their families. Includes student presentations, graduation recognition, and a French-themed social evening." },
  { title: "Immigration Pathway Workshop", date: "June 10, 2026", time: "6:00 PM – 7:30 PM", campus: "Surrey", type: "Workshop", spots: "8 spots remaining", desc: "A practical workshop on how French language scores affect Express Entry CRS points, PNP eligibility, and citizenship applications. Presented by ACON academic staff." },
  { title: "Conversation Night: Travel & Places", date: "June 19, 2026", time: "6:30 PM – 8:30 PM", campus: "Kelowna", type: "Conversation Practice", spots: "Available", desc: "An informal French conversation evening on the theme of travel and places. Open to all ACON students at CLB 4 and above." },
];

const recurringEvents = [
  { title: "Weekly Conversation Groups", frequency: "Every Tuesday & Thursday", level: "CLB 1–3 (Beginner) | CLB 4+ (Intermediate/Advanced)", desc: "Instructor-facilitated conversation groups held twice weekly at both campuses. Groups are divided by CLB level to ensure appropriate challenge and vocabulary support." },
  { title: "Monthly Information Sessions", frequency: "Last Tuesday of each month", level: "All levels | Prospective students welcome", desc: "Monthly sessions covering a rotating range of topics: exam registration, immigration pathways, program options, and student success stories. Open to enrolled and prospective students." },
  { title: "Pronunciation Clinics", frequency: "Every second Friday", level: "CLB 1–5", desc: "Small-group pronunciation clinics for students who want to improve their spoken French. Facilitated by ACON instructors with a focus on the specific sounds that English speakers find most challenging." },
  { title: "Exam Prep Study Groups", frequency: "Weekly (during exam prep cohorts)", level: "Exam Prep Students Only", desc: "Peer study groups for students enrolled in intensive exam preparation cohorts. Facilitated by an ACON instructor with a focus on collaborative practice and peer feedback." },
];

export default function CommunityEvents() {
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
            <span className="text-white">Community Events</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Student Community</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Community Events</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Language learning happens in community. ACON Academy hosts regular events — conversation nights, workshops, information sessions, and social gatherings — that give students the opportunity to practice French, connect with peers, and build the confidence that comes from real conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">What's Coming Up</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden flex flex-col">
                <div className="bg-[rgb(9,39,88)] px-6 py-4">
                  <span className="text-xs font-body font-bold text-[rgb(70,140,210)] tracking-widest uppercase">{event.type}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-3">{event.title}</h3>
                  <p className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed mb-4 flex-1">{event.desc}</p>
                  <div className="space-y-2 border-t border-[rgb(210,225,245)] pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-[rgb(31,106,173)]" />
                      <span className="text-xs font-body text-[rgb(40,55,80)] font-semibold">{event.date} · {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-[rgb(31,106,173)]" />
                      <span className="text-xs font-body text-[rgb(60,80,110)]">{event.campus}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={13} className="text-[rgb(31,106,173)]" />
                      <span className={`text-xs font-body font-semibold ${event.spots.includes('remaining') ? 'text-amber-700' : 'text-green-700'}`}>{event.spots}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Regular Programming</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Recurring Events</h2>
          </div>
          <div className="space-y-5">
            {recurringEvents.map((event) => (
              <div key={event.title} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                  <div className="bg-[rgb(9,39,88)] p-7 flex flex-col justify-center">
                    <div className="font-display text-lg font-bold text-white mb-2">{event.title}</div>
                    <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold">{event.frequency}</div>
                  </div>
                  <div className="p-7">
                    <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-2">Level</div>
                    <div className="font-body text-sm font-bold text-[rgb(9,39,88)] mb-3">{event.level}</div>
                    <p className="font-body text-[rgb(60,80,110)] text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Join the ACON Community</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Enroll at ACON Academy and get access to all community events, conversation groups, and workshops as part of your program.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-classes" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Claim Free Session <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
