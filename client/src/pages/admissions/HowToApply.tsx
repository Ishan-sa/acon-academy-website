/*
 * ACON Academy — How to Apply Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 * Lead capture form first, process steps below as reassurance
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";

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

const programs = [
  "Beginner French (CLB 1–3)",
  "Intermediate French (CLB 4–6)",
  "Advanced French (CLB 7–9)",
  "TEF Canada Preparation",
  "TCF Canada Preparation",
  "French for the Workplace",
  "Not sure — I need guidance",
];

const steps = [
  {
    number: "01",
    title: "We Call You Within 24 Hours",
    time: "Within 24 hrs",
    desc: "An ACON admissions advisor will call you to learn about your goals, current French level, and preferred schedule. No commitment required.",
  },
  {
    number: "02",
    title: "Free CLB Placement Assessment",
    time: "Within 1 week",
    desc: "You complete a short 45-minute placement assessment at your chosen campus. This tells us exactly which program level is right for you — at no charge.",
  },
  {
    number: "03",
    title: "Program Recommendation",
    time: "Same day",
    desc: "Based on your assessment results and goals, we recommend the program that fits best. You review it, ask questions, and confirm your selection.",
  },
  {
    number: "04",
    title: "Enrollment & Start Date",
    time: "Within 1–2 days",
    desc: "You receive a formal Enrollment Agreement with your program details, schedule, and fees. Sign, pay, and your spot is confirmed. Monthly intakes mean you start quickly.",
  },
];

export default function HowToApply() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    campus: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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
    if (!form.program) e.program = "Please select a program interest.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const field = (id: keyof typeof form, label: string, type = "text", placeholder = "") => (
    <div>
      <label htmlFor={id} className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors[id] ? "border-red-400" : "border-[rgb(210,225,245)]"}`}
      />
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <ChevronRight size={14} />
            <span className="text-white">How to Apply</span>
          </div>
          <div className="max-w-2xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Get Started</div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Apply to ACON Academy</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Tell us a little about yourself and your goals. Our admissions team will call you within 24 hours to guide you through the rest — no paperwork, no commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-[rgb(31,106,173)] py-5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "No Fee", label: "Application Fee" },
              { value: "24 hrs", label: "Response Time" },
              { value: "Monthly", label: "Intake Dates" },
              { value: "Free", label: "Placement Assessment" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl font-bold text-white">{s.value}</div>
                <div className="text-white/70 font-body text-xs tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Capture Form */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">

            {/* Left: Form */}
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Enrolment Inquiry</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-3 leading-tight">Start Your French Journey</h2>
              <p className="font-body text-[rgb(60,80,110)] mb-8">Fill in the short form below. Our admissions team will call you within 24 hours to answer your questions and schedule your free placement assessment.</p>

              {submitted ? (
                <div className="bg-[rgb(221,236,255)] border border-[rgb(31,106,173)]/30 rounded-sm p-10 text-center">
                  <CheckCircle size={48} className="text-[rgb(31,106,173)] mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-3">Thank You, {form.firstName}!</h3>
                  <p className="font-body text-[rgb(60,80,110)] leading-relaxed mb-2">
                    We have received your inquiry. An ACON admissions advisor will call you at <strong>{form.phone}</strong> within 24 hours.
                  </p>
                  <p className="font-body text-[rgb(60,80,110)] text-sm">
                    In the meantime, feel free to explore our <Link href="/programs" className="text-[rgb(31,106,173)] underline">programs</Link> or <Link href="/free-classes" className="text-[rgb(31,106,173)] underline">claim a free trial class</Link>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {field("firstName", "First Name", "text", "e.g. Sarah")}
                    {field("lastName", "Last Name", "text", "e.g. Chen")}
                  </div>
                  {field("email", "Email Address", "email", "you@example.com")}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(604) 555-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                      className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.phone ? "border-red-400" : "border-[rgb(210,225,245)]"}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Campus */}
                  <div>
                    <label htmlFor="campus" className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Preferred Campus</label>
                    <select
                      id="campus"
                      value={form.campus}
                      onChange={(e) => setForm({ ...form, campus: e.target.value })}
                      className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.campus ? "border-red-400" : "border-[rgb(210,225,245)]"}`}
                    >
                      <option value="">Select a campus</option>
                      <option value="Surrey">Surrey Campus</option>
                      <option value="Kelowna">Kelowna Campus</option>
                    </select>
                    {errors.campus && <p className="text-red-500 text-xs mt-1">{errors.campus}</p>}
                  </div>

                  {/* Program */}
                  <div>
                    <label htmlFor="program" className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Program Interest</label>
                    <select
                      id="program"
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.program ? "border-red-400" : "border-[rgb(210,225,245)]"}`}
                    >
                      <option value="">Select a program</option>
                      {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                  </div>

                  {/* Optional message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">
                      Anything else we should know? <span className="font-normal text-[rgb(100,120,150)]">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="e.g. I'm preparing for Express Entry and need CLB 7 by September..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-[rgb(210,225,245)] rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[rgb(9,39,88)] hover:bg-[rgb(20,50,110)] text-white font-body font-bold py-4 rounded-sm transition-colors flex items-center justify-center gap-2 text-base"
                  >
                    Submit My Application Inquiry <ArrowRight size={18} />
                  </button>
                  <p className="text-xs font-body text-[rgb(100,120,150)] text-center">
                    After submitting, our admissions team will call you within 24 hours to confirm your interest and schedule your free placement assessment. No commitment required.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Reassurance */}
            <div className="space-y-6">
              <div className="bg-[rgb(9,39,88)] rounded-sm p-7 text-white">
                <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Why ACON?</div>
                <ul className="space-y-3">
                  {[
                    "No application fee — ever",
                    "Free CLB placement assessment included",
                    "Government-certified instructors",
                    "Max 12 students per class",
                    "Monthly intake dates — start quickly",
                    "95% TEF/TCF examination pass rate",
                    "PTIB-registered institution (BC)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-body text-white/80">
                      <CheckCircle size={14} className="text-[rgb(70,140,210)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[rgb(210,225,245)] rounded-sm p-6">
                <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Prefer to Talk First?</div>
                <p className="font-body text-sm text-[rgb(60,80,110)] mb-4">Our admissions team is available Monday–Friday, 9 AM–5 PM.</p>
                <a href="tel:+18773592035" className="flex items-center gap-2 font-body font-bold text-[rgb(9,39,88)] mb-2 hover:text-[rgb(31,106,173)] transition-colors">
                  <Phone size={15} /> +1 (877) 359-2035
                </a>
                <a href="mailto:info@aconacademy.ca" className="flex items-center gap-2 font-body font-bold text-[rgb(9,39,88)] hover:text-[rgb(31,106,173)] transition-colors">
                  <Mail size={15} /> info@aconacademy.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next — Process Steps */}
      <section className="py-20 bg-white border-t border-[rgb(210,225,245)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">After You Submit</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-3">What Happens Next</h2>
            <p className="font-body text-[rgb(60,80,110)] text-lg max-w-xl mx-auto">We handle everything. Here is what the full enrollment journey looks like — from your inquiry to your first class.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-[rgb(255,251,248)] border border-[rgb(210,225,245)] rounded-sm p-6">
                <div className="font-display text-4xl font-bold text-[rgb(9,39,88)]/15 mb-3">{step.number}</div>
                <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-2">{step.time}</div>
                <h3 className="font-display text-lg font-bold text-[rgb(9,39,88)] mb-3">{step.title}</h3>
                <p className="font-body text-sm text-[rgb(60,80,110)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[rgb(221,236,255)]">
        <div className="max-w-[800px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Common Questions</div>
            <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)]">Frequently Asked</h2>
          </div>
          <div className="space-y-5">
            {[
              { q: "Is there an application fee?", a: "No. There is no application fee at ACON Academy. The CLB placement assessment is included at no charge." },
              { q: "How quickly can I start?", a: "Most students begin within 2–4 weeks of their initial inquiry. We have monthly intake dates at both campuses." },
              { q: "Can I enroll if I have zero French experience?", a: "Yes. Our beginner programs are designed for students with no prior French knowledge. The placement assessment will confirm the right starting level." },
              { q: "What if I need to defer my start date?", a: "Contact our admissions team and we will find a suitable alternative intake date. No penalties apply." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-5">
                <div className="font-body font-bold text-[rgb(9,39,88)] mb-2">{q}</div>
                <div className="font-body text-sm text-[rgb(60,80,110)] leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
