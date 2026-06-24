/*
 * ACON Academy — Campus Tours Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import { useState } from "react";
import { toast } from "sonner";
import { submitToFormspree } from "@/lib/formspree";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, MapPin, Clock, Users } from "lucide-react";

function isValidEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  const disposable = ["mailinator","guerrillamail","tempmail","throwam","yopmail","sharklasers","trashmail","fakeinbox","maildrop","dispostable"];
  const domain = email.split("@")[1]?.toLowerCase() || "";
  return !disposable.some(d => domain.includes(d));
}
function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits[0] === "1") return true;
  if (digits.length !== 10) return false;
  if (digits[0] === "0" || digits[0] === "1") return false;
  const allSame = digits.split("").every(d => d === digits[0]);
  if (allSame) return false;
  return true;
}
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const tourHighlights = [
  { title: "Classrooms & Learning Spaces", desc: "See our purpose-designed French language classrooms, equipped with interactive whiteboards, audio systems, and small-group learning configurations." },
  { title: "Student Lounge & Study Areas", desc: "Explore the dedicated student spaces where ACON students practice conversational French, study between classes, and connect with peers." },
  { title: "Resource Centre", desc: "Browse our French language resource library, including exam preparation materials, grammar references, and digital learning tools." },
  { title: "Meet the Team", desc: "During your tour, you will have the opportunity to meet ACON instructors and admissions staff and ask any questions about programs and enrollment." },
  { title: "CLB Assessment Preview", desc: "Get a walkthrough of what the CLB placement assessment involves so you know exactly what to expect when you apply." },
  { title: "Q&A Session", desc: "Ask any questions about programs, fees, enrollment, and what life at ACON looks like day-to-day — no question is too small." },
];

export default function CampusTours() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    campus: "", preferredDay: "", message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!isValidEmail(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!isValidPhone(form.phone)) {
      e.phone = "Please enter a valid 10-digit Canadian or US phone number.";
    }
    if (!form.campus) e.campus = "Please select a campus.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const ok = await submitToFormspree(form, "Campus Tour Request");
    if (ok) {
      setSubmitted(true);
    } else {
      toast.error("Something went wrong. Please try again or email us at info@aconacademy.ca.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <ChevronRight size={14} />
            <span className="text-white">Campus Tours</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">See ACON in Person</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Book a Campus Tour</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              The best way to understand what ACON Academy offers is to see it for yourself. Fill in the form below and our admissions team will reach out to schedule your visit at a time that works for you.
            </p>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Tour Overview</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6 leading-tight">What to Expect on Your Tour</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                ACON Academy campus tours run approximately 20–30 minutes and are led by a member of our admissions team. Tours are available in both English and French.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-5">
                During your tour, you will see every area of the campus, have the opportunity to ask questions about programs, fees, and enrollment, and get a feel for the ACON learning environment before you commit.
              </p>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">
                There is no obligation to enroll following a tour. We simply want you to have all the information you need to make the right decision for your French language journey.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Tour Duration", value: "20–30 min", icon: <Clock size={16} className="text-[rgb(31,106,173)] mx-auto mb-1" /> },
                  { label: "Languages", value: "EN / FR", icon: <Users size={16} className="text-[rgb(31,106,173)] mx-auto mb-1" /> },
                  { label: "Cost", value: "Free", icon: <MapPin size={16} className="text-[rgb(31,106,173)] mx-auto mb-1" /> },
                ].map((item) => (
                  <div key={item.label} className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-4 text-center">
                    {item.icon}
                    <div className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-1">{item.value}</div>
                    <div className="text-xs font-body text-[rgb(60,80,110)]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/manus-storage/campus_reception2_35c233e0.jpg"
                alt="ACON Academy campus"
                className="w-full h-[450px] object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">What You'll See</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Tour Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourHighlights.map(({ title, desc }) => (
              <div key={title} className="border border-[rgb(210,225,245)] rounded-sm p-7">
                <CheckCircle size={20} className="text-[rgb(31,106,173)] mb-4" />
                <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-3">{title}</h3>
                <p className="font-body text-[rgb(60,80,110)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Tour Form */}
      <section className="py-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Book Your Visit</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Schedule Your Campus Tour</h2>
              <p className="text-[rgb(60,80,110)] font-body text-lg">Fill in your details below and our admissions team will contact you within 24 hours to confirm your tour date and time.</p>
            </div>

            {submitted ? (
              <div className="bg-white border border-[rgb(210,225,245)] rounded-sm p-12 text-center shadow-sm">
                <CheckCircle size={48} className="text-[rgb(31,106,173)] mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-3">Tour Request Received!</h3>
                <p className="font-body text-[rgb(60,80,110)] text-lg mb-6">
                  Thank you! Our admissions team will reach out within 24 hours to confirm your campus tour.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-bold px-7 py-3.5 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors">
                  Back to Home <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-8 shadow-sm space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] uppercase tracking-wider mb-2">First Name *</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-[rgb(248,251,255)] ${errors.firstName ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] uppercase tracking-wider mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-[rgb(248,251,255)] ${errors.lastName ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                  <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-[rgb(248,251,255)] ${errors.email ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] uppercase tracking-wider mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: formatPhone(e.target.value) })}
                    className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-[rgb(248,251,255)] ${errors.phone ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                    placeholder="(604) 555-0000"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] uppercase tracking-wider mb-2">Preferred Campus *</label>
                  <select
                    value={form.campus}
                    onChange={e => setForm({ ...form, campus: e.target.value })}
                    className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-[rgb(248,251,255)] ${errors.campus ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                  >
                    <option value="">Select a campus</option>
                    <option value="surrey">Surrey Campus</option>
                    <option value="kelowna">Kelowna Campus</option>
                  </select>
                  {errors.campus && <p className="text-red-500 text-xs mt-1">{errors.campus}</p>}
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] uppercase tracking-wider mb-2">Preferred Day / Time</label>
                  <input
                    type="text"
                    value={form.preferredDay}
                    onChange={e => setForm({ ...form, preferredDay: e.target.value })}
                    className="w-full border border-[rgb(210,225,245)] rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-[rgb(248,251,255)]"
                    placeholder="e.g. Weekday mornings, Saturday afternoon"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] uppercase tracking-wider mb-2">Any Questions or Notes</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[rgb(210,225,245)] rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-[rgb(248,251,255)] resize-none"
                    placeholder="Anything you'd like us to know before your visit..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[rgb(9,39,88)] hover:bg-[rgb(20,50,100)] text-white font-body font-bold py-4 rounded-sm transition-colors flex items-center justify-center gap-2 text-sm tracking-wide uppercase"
                >
                  Book My Campus Tour <ArrowRight size={16} />
                </button>
                <p className="text-center text-xs font-body text-[rgb(100,120,150)]">Our admissions team will contact you within 24 hours to confirm your tour.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not Ready for a Tour Yet?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Try a free 90-minute French class first — no commitment, no cost. Experience ACON before you decide.</p>
          <Link href="/free-classes" className="inline-flex items-center gap-2 bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors">
            Claim Your Free Class <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
