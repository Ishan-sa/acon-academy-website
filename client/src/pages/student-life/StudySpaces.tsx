/*
 * ACON Academy — Study Spaces Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, Clock, MapPin, Wifi } from "lucide-react";

const spaces = [
  {
    name: "Open Study Lounge",
    campus: "Both Campuses",
    desc: "A comfortable, open-plan study area available to all enrolled students during campus hours. Equipped with individual study tables, comfortable seating, and access to ACON's French language resource library. The lounge is designed for both independent study and informal conversation practice.",
    features: ["High-speed Wi-Fi", "Individual study tables", "Resource library access", "Comfortable seating", "Natural lighting", "Charging stations"],
    hours: "Monday–Friday: 8:00 AM – 8:00 PM | Saturday: 9:00 AM – 5:00 PM",
  },
  {
    name: "Quiet Study Rooms",
    campus: "Surrey Campus",
    desc: "Four private quiet study rooms available for booking by enrolled students. Ideal for focused exam preparation, writing practice, or listening comprehension exercises. Rooms are bookable in 1-hour or 2-hour blocks through the ACON student portal.",
    features: ["Soundproofed rooms", "Individual desks", "Whiteboard wall", "Audio playback equipment", "Bookable in advance", "No walk-in access"],
    hours: "Monday–Friday: 8:00 AM – 8:00 PM | Saturday: 9:00 AM – 5:00 PM",
  },
  {
    name: "Conversation Practice Room",
    campus: "Both Campuses",
    desc: "A dedicated space for conversational French practice. Students can use this room to practice speaking with peers, record themselves for self-assessment, or participate in informal conversation groups organized by ACON instructors.",
    features: ["Recording equipment", "Round-table seating", "Audio playback", "Whiteboard", "Peer conversation groups", "Instructor-led sessions"],
    hours: "Scheduled sessions: see student portal | Open access: during campus hours",
  },
  {
    name: "Computer Lab",
    campus: "Surrey Campus",
    desc: "A 12-station computer lab with access to ACON's digital learning resources, online French language databases, and TEF/TCF practice software. The lab is available to all enrolled students and is staffed during peak hours.",
    features: ["12 workstations", "TEF/TCF practice software", "French language databases", "Printing (10 pages/day free)", "Staffed during peak hours", "Accessible to all enrolled students"],
    hours: "Monday–Friday: 9:00 AM – 7:00 PM | Saturday: 10:00 AM – 4:00 PM",
  },
];

export default function StudySpaces() {
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
            <span className="text-white">Study Spaces</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Campus Facilities</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Study Spaces</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              ACON Academy's campuses are designed for learning — not just in the classroom, but throughout the building. Our study spaces give students the environment they need to practice, prepare, and progress.
            </p>
          </div>
        </div>
      </div>

      {/* Spaces */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Available Spaces</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Campus Study Facilities</h2>
          </div>
          <div className="space-y-8">
            {spaces.map((space) => (
              <div key={space.name} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <div className="bg-[rgb(9,39,88)] px-8 py-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{space.name}</h3>
                  </div>
                  <span className="text-xs font-body font-bold px-3 py-1.5 rounded-sm bg-[rgb(31,106,173)] text-white flex-shrink-0 ml-4">{space.campus}</span>
                </div>
                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">{space.desc}</p>
                    <div className="flex items-start gap-2 text-sm font-body text-[rgb(60,80,110)]">
                      <Clock size={14} className="mt-0.5 flex-shrink-0 text-[rgb(31,106,173)]" />
                      <span>{space.hours}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-3">Features</div>
                    <ul className="space-y-2">
                      {space.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle size={13} className="text-[rgb(31,106,173)] flex-shrink-0" />
                          <span className="text-xs font-body text-[rgb(60,80,110)]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Policy */}
      <section className="py-16 bg-white border-y border-[rgb(210,225,245)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Access Policy</div>
              <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-5">Who Can Use Study Spaces</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">All ACON Academy study spaces are available exclusively to currently enrolled students. Access is granted upon enrollment and deactivated upon program completion or withdrawal.</p>
              <ul className="space-y-3">
                {[
                  "Valid student ID required for entry",
                  "Quiet study rooms must be booked via student portal",
                  "Maximum 2-hour bookings for quiet study rooms per day",
                  "Computer lab access included in all programs",
                  "Guest access not permitted in study spaces",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-[rgb(40,55,80)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Campus Locations</div>
              <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-5">Find Your Campus</h2>
              <div className="space-y-4">
                {[
                  { campus: "Surrey Campus", address: "Central City Tower, 13450 102 Ave, Surrey, BC V3T 5X3", transit: "Surrey Central SkyTrain Station (3 min walk)" },
                  { campus: "Kelowna Campus", address: "1632 Dickson Ave, Kelowna, BC V1Y 7T2", transit: "Downtown Kelowna — accessible by BC Transit Route 1" },
                ].map((loc) => (
                  <div key={loc.campus} className="border border-[rgb(210,225,245)] rounded-sm p-5">
                    <div className="font-body font-bold text-[rgb(9,39,88)] mb-2">{loc.campus}</div>
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin size={13} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-body text-[rgb(60,80,110)]">{loc.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-body text-[rgb(31,106,173)] mt-0.5">🚇</span>
                      <span className="text-xs font-body text-[rgb(60,80,110)]">{loc.transit}</span>
                    </div>
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
          <h2 className="font-display text-3xl font-bold text-white mb-4">Want to See the Campus Before Enrolling?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Book a campus tour and see our study spaces, classrooms, and resource centre in person before you commit to enrollment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions/campus-tours" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Book a Campus Tour <ArrowRight size={16} />
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
