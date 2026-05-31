/*
 * ACON Academy — Our Faculty Page
 * Real instructor data only — first names, correct campus, real photos from aconacademy.ca
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, MapPin, Award, BookOpen, Users, GraduationCap } from "lucide-react";

const faculty = [
  {
    name: "Manav",
    title: "French Instructor",
    campus: "Surrey",
    photo: "/manus-storage/real_manav_5fbfaf69.jpg",
  },
  {
    name: "Ketia",
    title: "French Instructor",
    campus: "Surrey",
    photo: "/manus-storage/real_ketia_a9950e74.jpg",
  },
  {
    name: "Ashman",
    title: "French Instructor",
    campus: "Surrey",
    photo: "/manus-storage/real_ashman_4c2bc56d.jpg",
  },
  {
    name: "Amandine",
    title: "French Instructor",
    campus: "Kelowna",
    photo: "/manus-storage/real_amandine_4b5013e4.jpg",
  },
  {
    name: "Clare",
    title: "French Instructor",
    campus: "Kelowna",
    photo: "/manus-storage/real_clare_eb760498.jpg",
  },
];

const standards = [
  { icon: Award, title: "Government-Certified", desc: "All instructors hold recognized teaching certifications approved by the BC PTIB." },
  { icon: BookOpen, title: "CLB-Aligned Teaching", desc: "Every lesson maps directly to Canadian Language Benchmark competencies." },
  { icon: Users, title: "Max 12 Students", desc: "Small classes ensure personalized attention and meaningful feedback every session." },
  { icon: GraduationCap, title: "Continuous Development", desc: "Faculty complete annual professional development on TEF/TCF formats and CLB updates." },
];

export default function OurFaculty() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Page Header */}
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/about" className="hover:text-white transition-colors">About ACON</Link>
            <ChevronRight size={14} />
            <span className="text-white">Our Faculty</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Our Faculty</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl leading-relaxed">
            Meet the certified French language instructors who guide students at ACON Academy's Surrey and Kelowna campuses.
          </p>
        </div>
      </div>

      {/* Standards Bar */}
      <section className="py-12 bg-white border-b border-[rgb(210,225,245)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-[rgb(70,140,210)]" />
                </div>
                <div>
                  <div className="font-body font-bold text-[rgb(9,39,88)] mb-1 text-sm">{title}</div>
                  <div className="text-xs font-body text-[rgb(60,80,110)] leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Our Faculty</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Faculty Profiles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((instructor) => (
              <div key={instructor.name} className="bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: "300px" }}>
                  <img
                    src={instructor.photo}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(9,39,88)] via-[rgb(9,39,88)]/20 to-transparent" />
                  {/* Campus badge */}
                  <span className="absolute top-4 left-4 bg-[rgb(9,39,88)]/80 backdrop-blur-sm text-white text-xs font-body font-semibold px-3 py-1 rounded-sm flex items-center gap-1.5">
                    <MapPin size={11} />
                    {instructor.campus}
                  </span>
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-2xl font-bold text-white leading-tight">{instructor.name}</h3>
                  </div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <p className="text-[rgb(31,106,173)] font-body font-semibold text-xs uppercase tracking-widest">{instructor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Experience a Class for Free</h2>
          <p className="font-body text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Join a free 90-minute session with one of our instructors before you commit to any program.
          </p>
          <Link href="/free-classes" className="inline-flex items-center gap-2 bg-white text-[rgb(9,39,88)] font-body font-bold px-8 py-4 rounded-sm hover:bg-[rgb(221,236,255)] transition-colors">
            Claim Your Free Class
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
