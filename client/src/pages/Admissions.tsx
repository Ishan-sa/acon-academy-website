/*
 * ACON Academy Admissions Page — Neo-Institutional Modernism
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle, DollarSign, Calendar, MapPin, HelpCircle } from "lucide-react";

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

const faqs = [
  { q: "What are the fees for in-person classes?", a: "Program fees vary depending on the program and duration. Please contact our admissions team directly at info@aconacademy.ca or call +1 (877) 359-2035 for current fee information. Financial aid of up to $2,000 is currently available for new enrollments at our Surrey campus until June 30th, 2026." },
  { q: "Are there any eligibility requirements for the class?", a: "Most programs are open to all adult learners (18+) regardless of prior French knowledge. The Intermediate/Advanced program requires a basic foundation in French (A1 level or equivalent). The French for Youth program is for students aged 13–18. A placement assessment may be conducted to ensure you are placed in the right program." },
  { q: "When is the application deadline?", a: "ACON Academy accepts rolling admissions throughout the year. New batches start regularly, so you can apply at any time. We recommend applying at least 2 weeks before your desired start date to ensure placement in your preferred class schedule." },
  { q: "Are there opportunities for campus tours or open houses?", a: "Yes! We offer campus tours at both our Surrey and Kelowna locations. You can book a tour through our website or by calling our admissions office. We also host monthly open house events where prospective students can meet instructors and current students." },
  { q: "What is the admissions process for transfer students?", a: "Students transferring from another French language program can apply with their previous transcripts or language assessment results. Our academic team will review your prior learning and place you in the appropriate program level. Credit for prior learning may be considered on a case-by-case basis." },
  { q: "What class schedules are available?", a: "We offer morning, afternoon, and evening classes on weekdays and weekends. Specific schedules include: Wed/Thurs Noon Class (11:30am–1pm), Thurs/Fri Evening Class (8–9:30pm), Sat/Sun Evening Class (8–9:30pm), Mon/Tues Morning Class (9:30–11am). Kelowna offers Wed/Thurs and Sat/Sun options." },
];

const processSteps = [
  { number: "01", title: "We Call You Within 24 Hours", time: "Within 24 hrs", desc: "An ACON admissions advisor will call you to learn about your goals, current French level, and preferred schedule. No commitment required." },
  { number: "02", title: "Free CLB Placement Assessment", time: "Within 1 week", desc: "You complete a short 45-minute placement assessment at your chosen campus. This tells us exactly which program level is right for you — at no charge." },
  { number: "03", title: "Program Recommendation", time: "Same day", desc: "Based on your assessment results and goals, we recommend the program that fits best. You review it, ask questions, and confirm your selection." },
  { number: "04", title: "Enrollment & Start Date", time: "Within 1–2 days", desc: "You receive a formal Enrollment Agreement with your program details, schedule, and fees. Sign, pay, and your spot is confirmed." },
];

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", campus: "", program: "", message: "" });
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
    if (!form.program) e.program = "Please select a program.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Page Header */}
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Admissions</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Admissions</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl leading-relaxed">
            Join Canada's premier French language academy. Our admissions process is straightforward and our team is here to guide you every step of the way.
          </p>
        </div>
      </div>

      {/* Financial Aid Banner */}
      <div className="bg-[rgb(31,106,173)] py-4">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <DollarSign size={20} className="text-[rgb(5,26,64)]" />
            <span className="font-body font-bold text-[rgb(5,26,64)]">
              🎓 $2,000 Financial Aid Available — Surrey Campus enrollments until June 30th, 2026
            </span>
          </div>
          <Link href="#fees" className="text-[rgb(5,26,64)] font-body font-semibold text-sm flex items-center gap-1 whitespace-nowrap">
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Lead Capture Form */}
      <section id="how-to-apply" className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Enrolment Inquiry</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-3">Apply to ACON Academy</h2>
              <p className="font-body text-[rgb(60,80,110)] mb-8">Fill in the short form below. Our admissions team will call you within 24 hours to answer your questions and schedule your free placement assessment.</p>
              {submitted ? (
                <div className="bg-[rgb(221,236,255)] border border-[rgb(31,106,173)]/30 rounded-sm p-10 text-center">
                  <CheckCircle size={48} className="text-[rgb(31,106,173)] mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-3">Thank You, {form.firstName}!</h3>
                  <p className="font-body text-[rgb(60,80,110)] leading-relaxed mb-2">We have received your inquiry. An ACON admissions advisor will call you at <strong>{form.phone}</strong> within 24 hours.</p>
                  <p className="font-body text-[rgb(60,80,110)] text-sm">In the meantime, feel free to <Link href="/free-classes" className="text-[rgb(31,106,173)] underline">claim a free trial class</Link>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">First Name</label>
                      <input type="text" placeholder="e.g. Sarah" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.firstName ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`} />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Last Name</label>
                      <input type="text" placeholder="e.g. Chen" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.lastName ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`} />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Email Address</label>
                    <input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.email ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="(604) 555-0000" value={form.phone} onChange={e => setForm({...form, phone: formatPhone(e.target.value)})} className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.phone ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Preferred Campus</label>
                    <select value={form.campus} onChange={e => setForm({...form, campus: e.target.value})} className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.campus ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}>
                      <option value="">Select a campus</option>
                      <option value="Surrey">Surrey Campus</option>
                      <option value="Kelowna">Kelowna Campus</option>
                    </select>
                    {errors.campus && <p className="text-red-500 text-xs mt-1">{errors.campus}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Program Interest</label>
                    <select value={form.program} onChange={e => setForm({...form, program: e.target.value})} className={`w-full border rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition ${errors.program ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}>
                      <option value="">Select a program</option>
                      {programs.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-[rgb(9,39,88)] mb-1.5">Anything else? <span className="font-normal text-[rgb(100,120,150)]">(optional)</span></label>
                    <textarea rows={3} placeholder="e.g. I'm preparing for Express Entry and need CLB 7 by September..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border border-[rgb(210,225,245)] rounded-sm px-4 py-3 font-body text-sm text-[rgb(9,39,88)] bg-white focus:outline-none focus:ring-2 focus:ring-[rgb(31,106,173)] transition resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[rgb(9,39,88)] hover:bg-[rgb(20,50,110)] text-white font-body font-bold py-4 rounded-sm transition-colors flex items-center justify-center gap-2 text-base">
                    Submit My Application Inquiry <ArrowRight size={18} />
                  </button>
                  <p className="text-xs font-body text-[rgb(100,120,150)] text-center">After submitting, our admissions team will call you within 24 hours. No commitment required.</p>
                </form>
              )}
            </div>
            {/* Right sidebar */}
            <div className="space-y-5">
              <div className="bg-[rgb(9,39,88)] rounded-sm p-7 text-white">
                <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Why ACON?</div>
                <ul className="space-y-3">
                  {["No application fee — ever","Free CLB placement assessment included","Government-certified instructors","Max 12 students per class","Monthly intake dates — start quickly","95% TEF/TCF examination pass rate","PTIB-registered institution (BC)"].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-body text-white/80">
                      <CheckCircle size={14} className="text-[rgb(70,140,210)] flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[rgb(31,106,173)]/10 border border-[rgb(31,106,173)]/30 rounded-sm p-5">
                <div className="font-display font-bold text-[rgb(9,39,88)] mb-2">🎓 $2,000 Financial Aid Available</div>
                <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed">New enrollments at our Surrey campus qualify for $2,000 in financial aid until June 30th, 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-white border-t border-[rgb(210,225,245)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">After You Submit</div>
            <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-2">What Happens Next</h2>
            <p className="font-body text-[rgb(60,80,110)] max-w-xl mx-auto">We handle everything. Here is what the full enrollment journey looks like.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(step => (
              <div key={step.number} className="bg-[rgb(255,251,248)] border border-[rgb(210,225,245)] rounded-sm p-6">
                <div className="font-display text-4xl font-bold text-[rgb(9,39,88)]/15 mb-3">{step.number}</div>
                <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-2">{step.time}</div>
                <h3 className="font-display text-base font-bold text-[rgb(9,39,88)] mb-2">{step.title}</h3>
                <p className="font-body text-sm text-[rgb(60,80,110)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Requirements</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6">Eligibility Requirements</h2>
              <div className="space-y-5">
                {[
                  { title: "Age Requirements", desc: "Most programs are open to adults 18 and older. The French for Youth program accepts students aged 13–18." },
                  { title: "Prior Language Knowledge", desc: "Beginner programs require no prior French knowledge. Intermediate/Advanced programs require A1 level or equivalent." },
                  { title: "Residency", desc: "Open to all Canadian residents, permanent residents, and international students with valid study permits." },
                  { title: "Commitment", desc: "Students must be able to attend scheduled classes and complete assignments. Attendance requirements vary by program." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-body font-semibold text-[rgb(9,39,88)] mb-1">{item.title}</div>
                      <div className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="fees" className="scroll-mt-24">
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Investment</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6">Fees & Financial Aid</h2>
              <div className="bg-[rgb(221,236,255)] border border-[rgb(31,106,173)]/20 rounded-sm p-6 mb-8">
                <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-4">
                  Program fees vary depending on the program and duration. Our admissions team is happy to provide a full fee breakdown and discuss available payment options.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+18773592035" className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-[rgb(31,106,173)] transition-colors">
                    Call +1 (877) 359-2035
                  </a>
                  <a href="mailto:info@aconacademy.ca" className="inline-flex items-center gap-2 border border-[rgb(9,39,88)] text-[rgb(9,39,88)] font-body font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-[rgb(9,39,88)] hover:text-white transition-colors">
                    Email info@aconacademy.ca
                  </a>
                </div>
              </div>
              <div className="bg-[rgb(31,106,173)]/10 border border-[rgb(31,106,173)]/30 rounded-sm p-5">
                <div className="font-display font-bold text-[rgb(9,39,88)] mb-2">🎓 $2,000 Financial Aid Available</div>
                <p className="text-sm font-body text-[rgb(40,55,80)] leading-relaxed">
                  New enrollments at our Surrey campus qualify for $2,000 in financial aid until June 30th, 2026. Contact our admissions team to learn more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deadlines & Tours */}
      <section id="deadlines" className="py-20 bg-[rgb(221,236,255)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm border border-[rgb(210,225,245)]">
              <Calendar size={28} className="text-[rgb(31,106,173)] mb-4" />
              <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-3">Application Deadlines</h3>
              <p className="font-body text-[rgb(60,80,110)] leading-relaxed mb-5">
                ACON Academy accepts rolling admissions year-round. New batches start regularly at both campuses. Apply at least 2 weeks before your desired start date.
              </p>
              <div className="space-y-3">
                {[
                  { batch: "Spring 2026 Batch", deadline: "Applications Open Now", status: "open" },
                  { batch: "Summer 2026 Batch", deadline: "Applications Open Now", status: "open" },
                  { batch: "Fall 2026 Batch", deadline: "Opens July 2026", status: "upcoming" },
                ].map((b) => (
                  <div key={b.batch} className="flex items-center justify-between py-2.5 border-b border-[rgb(210,225,245)]">
                    <span className="font-body text-sm text-[rgb(40,55,80)]">{b.batch}</span>
                    <span className={`text-xs font-body font-semibold px-2.5 py-1 rounded-sm ${b.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {b.deadline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div id="tours" className="bg-white p-8 rounded-sm border border-[rgb(210,225,245)]">
              <MapPin size={28} className="text-[rgb(31,106,173)] mb-4" />
              <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-3">Campus Tours & Open Houses</h3>
              <p className="font-body text-[rgb(60,80,110)] leading-relaxed mb-5">
                Visit our campuses in person to experience the ACON learning environment. Tours are available by appointment, and we host monthly open house events.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm font-body text-[rgb(40,55,80)]">
                  <div className="w-2 h-2 rounded-full bg-[rgb(31,106,173)]" />
                  Surrey Campus tours: Monday–Friday, 10am–4pm
                </div>
                <div className="flex items-center gap-3 text-sm font-body text-[rgb(40,55,80)]">
                  <div className="w-2 h-2 rounded-full bg-[rgb(31,106,173)]" />
                  Kelowna Campus tours: Tuesday & Thursday, 10am–3pm
                </div>
                <div className="flex items-center gap-3 text-sm font-body text-[rgb(40,55,80)]">
                  <div className="w-2 h-2 rounded-full bg-[rgb(31,106,173)]" />
                  Monthly open houses — first Saturday of each month
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors">
                Book a Tour <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Students */}
      <section id="transfer" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Existing Students</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6">Transfer Students</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-5">
                Already studying French at another institution? ACON Academy welcomes transfer students from other language programs. We assess your prior learning and place you at the right level so you don't repeat content you've already mastered.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { title: "Prior Learning Assessment", desc: "Submit transcripts or assessment results from your previous institution. Our academic team reviews your level and recommends the appropriate program." },
                  { title: "Credit for Prior Learning", desc: "Depending on your prior coursework and demonstrated proficiency, partial credit toward program completion may be considered on a case-by-case basis." },
                  { title: "Seamless Transition", desc: "Our admissions team works with you to ensure a smooth transition, including schedule alignment and orientation support." },
                  { title: "No Gap in Learning", desc: "We schedule transfers to align with the start of a new module wherever possible, so you can integrate naturally into your cohort." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-body font-semibold text-[rgb(9,39,88)] mb-1">{item.title}</div>
                      <div className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-bold px-7 py-3.5 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors">
                Inquire About Transfer <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-5">
              <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-7">
                <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)] mb-3">What to Submit</h3>
                <ul className="space-y-2.5">
                  {[
                    "Official transcript or letter from your previous institution",
                    "Any language assessment results (CLB, TEF, TCF, DELF, or equivalent)",
                    "Brief description of courses completed and hours of instruction",
                    "Contact information for your previous school (for verification)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-body text-[rgb(40,55,80)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[rgb(31,106,173)] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[rgb(9,39,88)] rounded-sm p-7 text-white">
                <h3 className="font-display text-xl font-bold mb-3">Transfer Intake Timeline</h3>
                <p className="text-white/70 font-body text-sm leading-relaxed mb-4">Transfer assessments are completed within 3–5 business days of receiving your documents. You will receive a written placement recommendation and program offer by email.</p>
                <a href="mailto:info@aconacademy.ca" className="text-[rgb(70,140,210)] font-body font-semibold text-sm hover:text-white transition-colors">info@aconacademy.ca →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[rgb(221,236,255)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Common Questions</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)]">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-body font-semibold text-[rgb(9,39,88)]">{faq.q}</span>
                  <HelpCircle size={18} className={`text-[rgb(31,106,173)] flex-shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-[rgb(210,225,245)]">
                    <p className="font-body text-[rgb(40,55,80)] leading-relaxed pt-4 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
