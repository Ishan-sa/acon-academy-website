/*
 * ACON Academy Home Page — Neo-Institutional Modernism
 * Sections: Hero carousel, Stats, Programs, Announcements, Student Services, Testimonials, News/Blog, CTA
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, GraduationCap, Users, Award, BookOpen, Clock, MapPin, Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const heroSlides = [
  {
    video: "/manus-storage/academy_video1_4f66be6b.mp4",
    tag: "Programs",
    title: "Master French.\nOpen Doors in Canada.",
    subtitle: "Professional French language programs designed for Canadian immigration, career advancement, and personal growth.",
    cta: { label: "Explore Programs", href: "/programs" },
    ctaSecondary: { label: "Apply Now", href: "/admissions" },
  },
  {
    video: "/manus-storage/academy_video2_dc6bb64e.mp4",
    tag: "Our Campuses",
    title: "Two Campuses.\nOne Community.",
    subtitle: "State-of-the-art learning facilities in Surrey and Kelowna, built for the modern language learner.",
    cta: { label: "Visit Our Campuses", href: "/campuses" },
    ctaSecondary: { label: "Claim Free Class", href: "/free-classes" },
  },
];

const programs = [
  {
    badge: "CLB-5",
    duration: "6 Months",
    title: "French Foundations Program",
    level: "A1 / A2",
    description: "Designed for beginners, focusing on everyday communication and workplace readiness. Ideal for Francophone Mobility work permit applicants.",
    href: "/programs/french-foundations",
    color: "rgb(9, 39, 88)",
  },
  {
    badge: "CLB-7",
    duration: "10 Months",
    title: "French Intermediate / Advanced",
    level: "B1 / B2",
    description: "Build professional fluency and prepare for permanent residence (PR) applications. Includes TEF and TCF exam preparation.",
    href: "/programs/intermediate-advanced",
    color: "rgb(31, 106, 173)",
  },
  {
    badge: "30 Days",
    duration: "Intensive",
    title: "Exam Preparation Program",
    level: "A1 / A2 → B1 / B2",
    description: "Focused preparation for TCF and TEF exams. Ideal for students reviewing for an upcoming exam or returning examinees.",
    href: "/programs/exam-preparation",
    color: "rgb(5, 26, 64)",
  },
  {
    badge: "PR",
    duration: "3 / 6 Months",
    title: "French for PR & Citizens",
    level: "A1 / A2 → B1 / B2",
    description: "Dedicated to Canadian residents passionate about learning French or looking to meet workplace language requirements.",
    href: "/programs/french-for-pr",
    color: "rgb(9, 39, 88)",
  },
  {
    badge: "Youth",
    duration: "3 / 6 Months",
    title: "French for Youth",
    level: "Ages 13–18",
    description: "Build French competency and immersion for youth, developing critical techniques for learning new languages.",
    href: "/programs/french-for-youth",
    color: "rgb(31, 106, 173)",
  },
];

const stats = [
  { number: "800+", label: "Students Enrolled", icon: Users },
  { number: "95%", label: "Exam Pass Rate", icon: Award },
  { number: "5", label: "Core Programs", icon: BookOpen },
  { number: "2", label: "BC Campuses", icon: MapPin },
];

const testimonials = [
  {
    name: "Sonali De Silva",
    program: "CLB-7 Intermediate / Advanced",
    quote: "ACON Academy completely transformed my French. Within 8 months I went from barely conversational to passing my TEF exam with flying colours. The instructors are exceptional.",
    rating: 5,
    image: "/manus-storage/acon-testimonial-sonali_8179dbcf.png",
  },
  {
    name: "Gopika Behal",
    program: "French for PR & Citizens",
    quote: "I needed French for my PR application and ACON delivered beyond my expectations. The curriculum is perfectly tailored to Canadian immigration requirements.",
    rating: 5,
    image: "/manus-storage/acon-testimonial-gopika_fae82068.png",
  },
  {
    name: "Simran Mehta",
    program: "French Foundations Program",
    quote: "As a complete beginner, I was nervous about starting. The supportive environment at ACON made all the difference. I'm now confidently speaking French at work.",
    rating: 5,
    image: "/manus-storage/acon-testimonial-simran_545ef2fd.png",
  },
];

const newsItems = [
  {
    category: "Announcement",
    date: "April 4, 2026",
    title: "$2,000 Financial Aid Now Available at Surrey Campus",
    excerpt: "To celebrate our milestone anniversary, ACON Academy is offering $2,000 in financial aid to all new enrollments at our Surrey campus until June 30th, 2026.",
    href: "/news/financial-aid-2026",
    image: "/manus-storage/campus_brochure_consult_70fcc694.jpg",
  },
  {
    category: "Campus Life",
    date: "April 6, 2026",
    title: "Extended Campus Hours Now in Effect at Surrey",
    excerpt: "Due to increased demand for campus services, all Surrey campus facilities are now available to students until 11:00 PM on weekdays.",
    href: "/news/extended-hours",
    image: "/manus-storage/campus_reception_2757a7ae.jpg",
  },
  {
    category: "Student Success",
    date: "March 28, 2026",
    title: "ACON Students Achieve Record TEF/TCF Pass Rates in 2025",
    excerpt: "Our students achieved a 95% pass rate on TEF and TCF examinations in 2025, reflecting the strength of our curriculum and dedicated faculty.",
    href: "/news/record-pass-rates",
    image: "/manus-storage/campus_computer_lab_e3f91c39.jpg",
  },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`acon-section-fade ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'rgb(255, 251, 248)' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[580px] lg:h-[680px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              src={s.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(9,39,88,0.82) 0%, rgba(9,39,88,0.50) 55%, rgba(9,39,88,0.15) 100%)' }} />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-sm px-3 py-1 mb-5" style={{ backgroundColor: 'rgba(31,106,173,0.25)', border: '1px solid rgba(31,106,173,0.5)' }}>
              <span className="text-xs font-body font-semibold tracking-widest uppercase" style={{ color: 'rgb(147, 197, 253)' }}>
                {slide.tag}
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5 whitespace-pre-line">
              {slide.title}
            </h1>
            <p className="text-white/80 font-body text-lg leading-relaxed mb-8 max-w-md">
              {slide.subtitle}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={slide.cta.href}
                className="font-body font-bold px-7 py-3.5 rounded-sm transition-colors duration-150 flex items-center gap-2 text-white"
                style={{ backgroundColor: 'rgb(31, 106, 173)' }}
              >
                {slide.cta.label}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={slide.ctaSecondary.href}
                className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors duration-150"
              >
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-8"
                  : "w-3 bg-white/40 hover:bg-white/60"
              }`}
              style={i === currentSlide ? { backgroundColor: 'rgb(31, 106, 173)' } : {}}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CLAIM FREE SESSION Banner */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "rgb(31, 106, 173)" }}
      >
        {/* Animated shimmer stripe */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "repeating-linear-gradient(110deg, transparent, transparent 40px, rgba(255,255,255,0.4) 40px, rgba(255,255,255,0.4) 41px)",
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <span className="font-body font-bold text-white text-sm sm:text-base tracking-wide">
                🎓 Try ACON Academy for FREE —{" "}
              </span>
              <span className="text-white/85 font-body text-sm sm:text-base">
                90-minute live class with a certified instructor. Limited spots.
              </span>
            </div>
          </div>
          <Link
            href="/free-classes"
            className="flex-shrink-0 flex items-center gap-2 font-body font-bold text-sm px-6 py-2.5 rounded-sm transition-all duration-150 hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{
              backgroundColor: "rgb(255, 251, 248)",
              color: "rgb(9, 39, 88)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}
          >
            CLAIM FREE SESSION
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8" style={{ backgroundColor: 'rgb(9, 39, 88)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
            {stats.map(({ number, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(31,106,173,0.25)' }}>
                  <Icon size={20} style={{ color: 'rgb(147, 197, 253)' }} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white">{number}</div>
                  <div className="text-white/60 text-xs font-body tracking-wide">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">
                  Academic Programs
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-[rgb(9,39,88)] leading-tight">
                  Core Programs
                </h2>
                <p className="text-[rgb(60,80,110)] font-body text-lg mt-3 max-w-xl">
                  Curriculum uniquely curated to develop competencies that target Canadian immigration exams and professional fluency.
                </p>
              </div>
              <Link
                href="/programs"
                className="hidden lg:flex items-center gap-2 text-[rgb(9,39,88)] font-body font-semibold hover:text-[rgb(31,106,173)] transition-colors"
              >
                All Programs <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <AnimatedSection key={program.title}>
                <Link href={program.href}>
                  <div className="acon-program-card bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden h-full group">
                    {/* Card Header */}
                    <div
                      className="px-6 pt-6 pb-4"
                      style={{ borderLeft: `4px solid ${program.color}` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-xs font-body font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm"
                          style={{
                            backgroundColor: `${program.color}15`,
                            color: program.color,
                          }}
                        >
                          {program.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[rgb(60,80,110)] font-body">
                          <Clock size={12} /> {program.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)] leading-tight mb-2">
                        {program.title}
                      </h3>
                      <div className="text-xs font-body text-[rgb(60,80,110)] font-semibold tracking-wide uppercase">
                        Level: {program.level}
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                        {program.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm font-body font-semibold text-[rgb(9,39,88)] group-hover:text-[rgb(31,106,173)] transition-colors">
                        Learn More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}

            {/* Free Classes Card */}
            <AnimatedSection>
              <Link href="/free-classes">
                <div className="acon-program-card bg-[rgb(9,39,88)] rounded-sm overflow-hidden h-full group flex flex-col justify-between p-6">
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-[rgba(31,106,173,0.2)] flex items-center justify-center mb-5">
                      <GraduationCap size={24} className="text-[rgb(70,140,210)]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white leading-tight mb-3">
                      Try a Free Class
                    </h3>
                    <p className="text-white/70 font-body text-sm leading-relaxed">
                      Not sure where to start? Attend a free trial class and experience the ACON difference before you enroll.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-[rgb(70,140,210)] font-body font-semibold text-sm group-hover:gap-3 transition-all">
                    Register for Free <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Announcements + Image Split Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">
                Latest Updates
              </div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] leading-tight mb-8">
                Announcements
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 pl-5 py-1" style={{ borderLeftColor: 'rgb(31, 106, 173)' }}>
                  <div className="text-xs font-body text-[rgb(60,80,110)] mb-1.5 tracking-wide">April 4, 2026</div>
                  <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-2">
                    Apply Now For $2,000 of Financial Aid (Surrey Campus)
                  </h3>
                  <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed mb-3">
                    April 4th marks a major milestone for ACON Academy. We're offering $2,000 in financial aid to all new enrollments until June 30th.
                  </p>
                  <Link href="/news/financial-aid-2026" className="text-sm font-body font-semibold text-[rgb(9,39,88)] hover:text-[rgb(31,106,173)] flex items-center gap-1 transition-colors">
                    Read More <ChevronRight size={14} />
                  </Link>
                </div>

                <div className="border-l-4 border-[rgb(210,225,245)] pl-5 py-1">
                  <div className="text-xs font-body text-[rgb(60,80,110)] mb-1.5 tracking-wide">April 6, 2026</div>
                  <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-2">
                    Extended Campus Hours (Surrey Campus)
                  </h3>
                  <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed mb-3">
                    Due to increased demand, all campus facilities are available until 11:00 PM on weekdays. April 6, 2026 — until further notice.
                  </p>
                  <Link href="/news/extended-hours" className="text-sm font-body font-semibold text-[rgb(9,39,88)] hover:text-[rgb(31,106,173)] flex items-center gap-1 transition-colors">
                    Read More <ChevronRight size={14} />
                  </Link>
                </div>

                <div className="border-l-4 border-[rgb(210,225,245)] pl-5 py-1">
                  <div className="text-xs font-body text-[rgb(60,80,110)] mb-1.5 tracking-wide">March 28, 2026</div>
                  <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-2">
                    New Batches Starting — Surrey & Kelowna
                  </h3>
                  <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed mb-3">
                    New class batches are now forming for all programs at both campuses. Morning, afternoon, and evening options available.
                  </p>
                  <Link href="/admissions" className="text-sm font-body font-semibold text-[rgb(9,39,88)] hover:text-[rgb(31,106,173)] flex items-center gap-1 transition-colors">
                    View Schedule <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              <Link href="/news" className="mt-8 inline-flex items-center gap-2 text-sm font-body font-semibold px-5 py-2.5 rounded-sm transition-colors" style={{ color: 'rgb(9,39,88)', border: '1px solid rgb(9,39,88)' }}>
                All Announcements <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <img
                  src="/manus-storage/acon-classroom-whiteboard.png"
                  alt="French language learning at ACON Academy"
                  className="w-full h-[480px] object-cover rounded-sm shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-[rgb(9,39,88)] text-white p-5 rounded-sm shadow-lg max-w-xs">
                  <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-1">
                    Financial Aid
                  </div>
                  <div className="font-display text-3xl font-bold mb-1">$2,000</div>
                  <div className="text-white/70 text-sm font-body">Available for new enrollments until June 30th</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(221, 236, 255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">
              Student Support
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[rgb(9,39,88)] mb-4">
              Comprehensive Student Services
            </h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl mx-auto">
              Everything you need to succeed — from one-on-one academic support to exam simulation and dedicated study spaces.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Academic Counselling",
                description: "Our teachers provide individual and group support in listening, reading, writing, and speaking — ensuring you always have access to study supports and peer tutoring.",
              },
              {
                icon: "📝",
                title: "TEF / TCF Exam Training",
                description: "Schedule one-on-one sessions with our French instructors to simulate a real-world exam scenario. Boost your confidence with immediate, personalized feedback.",
              },
              {
                icon: "📚",
                title: "Student Study Spaces",
                description: "Our invaluable platform provides easy access to educational materials, helpful guides, research databases, and interactive tools to enhance your learning journey.",
              },
            ].map((service) => (
              <AnimatedSection key={service.title}>
                <div className="bg-white p-8 rounded-sm border border-[rgb(210,225,245)] h-full">
                  <div className="text-4xl mb-5">{service.icon}</div>
                  <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(9, 39, 88)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <AnimatedSection className="mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">
              Student Stories
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              What Our Students Say
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <AnimatedSection key={t.name}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-7 h-full">
                  <Quote size={28} className="text-[rgb(31,106,173)] mb-5 opacity-60" />
                  <p className="text-white/80 font-body text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={13} className="text-[rgb(31,106,173)] fill-current" />
                    ))}
                  </div>
                  <div className="font-display font-bold text-white">{t.name}</div>
                  <div className="text-xs text-white/50 font-body mt-0.5">{t.program}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* News / Blog Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">
                  News & Insights
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-[rgb(9,39,88)] leading-tight">
                  Latest from ACON
                </h2>
              </div>
              <Link href="/news" className="hidden lg:flex items-center gap-2 text-[rgb(9,39,88)] font-body font-semibold hover:text-[rgb(31,106,173)] transition-colors">
                All News <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <AnimatedSection key={item.title}>
                <Link href={item.href}>
                  <div className="acon-program-card bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden h-full group">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-wide uppercase">
                          {item.category}
                        </span>
                        <span className="text-xs text-[rgb(60,80,110)] font-body">{item.date}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] leading-tight mb-3 group-hover:text-[rgb(31,106,173)] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="/manus-storage/campus_reception2_35c233e0.jpg"
          alt="ACON Academy campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(9,39,88,0.82)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">
              Start Your Journey
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to Say Bonjour?
            </h2>
            <p className="text-white/75 font-body text-lg max-w-xl mx-auto mb-10">
              Join hundreds of students who have transformed their lives through French language fluency at ACON Academy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="font-body font-bold px-8 py-4 rounded-sm transition-colors duration-150 flex items-center gap-2 text-white"
                style={{ backgroundColor: 'rgb(31, 106, 173)' }}
              >
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link
                href="/free-classes"
                className="border border-white/40 hover:border-white text-white font-body font-semibold px-8 py-4 rounded-sm transition-colors duration-150"
              >
                Try a Free Class
              </Link>
              <Link
                href="/contact"
                className="text-white/70 hover:text-white font-body font-semibold flex items-center gap-1.5 transition-colors"
              >
                Contact Us <ChevronRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
