/*
 * ACON Academy — Fees & Financial Aid Page
 * No tuition numbers shown — students must fill a form to receive fee information.
 * Shows financial aids, offers, and what's included instead.
 */
import { useState } from "react";
import { toast } from "sonner";
import { submitToFormspree } from "@/lib/formspree";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, Shield, Gift, Users, Briefcase, CreditCard, ArrowRight, Lock } from "lucide-react";

const programs = [
  { name: "Beginner French (CLB 1–3)", duration: "12 weeks", hoursPerWeek: "6 hrs/week" },
  { name: "Elementary French (CLB 4–5)", duration: "12 weeks", hoursPerWeek: "6 hrs/week" },
  { name: "Intermediate French (CLB 6–7)", duration: "12 weeks", hoursPerWeek: "8 hrs/week" },
  { name: "Advanced French (CLB 8–10)", duration: "12 weeks", hoursPerWeek: "8 hrs/week" },
  { name: "Intensive Exam Preparation (30-day)", duration: "4 weeks", hoursPerWeek: "20 hrs/week" },
  { name: "Intensive Exam Preparation (60-day)", duration: "8 weeks", hoursPerWeek: "20 hrs/week" },
];

const aid = [
  {
    icon: Gift,
    title: "ACON Academy Financial Aid",
    badge: "Need-Based Grant",
    desc: "ACON Academy offers direct financial aid to eligible students enrolled at our Surrey campus. Aid is applied directly to tuition and awarded based on demonstrated financial need. Applications are reviewed on a rolling basis.",
    highlights: ["Applied directly to tuition", "No repayment required", "Rolling applications accepted", "Available at Surrey campus"],
  },
  {
    icon: Users,
    title: "BC Settlement Funding",
    badge: "Newcomer Support",
    desc: "Eligible newcomers to BC may qualify for language training funding through provincial settlement programs. Our admissions team can help you identify whether you qualify and connect you with the right settlement agency.",
    highlights: ["For recent newcomers to BC", "Permanent residents & refugees eligible", "Referral through settlement agency", "Covers partial or full tuition"],
  },
  {
    icon: Briefcase,
    title: "Employer-Sponsored Training",
    badge: "Full Coverage Available",
    desc: "Many BC employers sponsor French language training for employees who require French proficiency for their roles. ACON Academy works directly with employers to provide invoicing, progress reporting, and completion documentation.",
    highlights: ["Direct employer invoicing", "Progress reports provided", "Completion certificates issued", "Available for all programs"],
  },
  {
    icon: CreditCard,
    title: "Interest-Free Payment Plans",
    badge: "0% Interest",
    desc: "ACON Academy offers interest-free payment plans for all programs. Split your tuition into two or three installments over the course of your program. No credit check, no interest charges — available to all enrolled students.",
    highlights: ["Split into 2–3 installments", "No credit check required", "No interest charges ever", "Available to all students"],
  },
];

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

export default function FeesFinancialAid() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", campus: "", program: "", message: "" });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const ok = await submitToFormspree(form, "Fees & Financial Aid Inquiry");
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
            <span className="text-white">Fees & Financial Aid</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Tuition & Support</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Fees & Financial Aid</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Multiple financial aid options are available to make your French education accessible. Fill in the form below to receive personalized tuition information.
            </p>
          </div>
        </div>
      </div>

      {/* PTIB Protection Notice */}
      <div className="bg-[rgb(31,106,173)] py-5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center gap-3">
          <Shield size={18} className="text-white flex-shrink-0" />
          <p className="text-white font-body text-sm">
            <strong>Student Tuition Protection:</strong> As a PTIB-registered institution, ACON Academy holds all tuition in a designated account until earned. Your tuition is protected under the BC Student Tuition Protection Fund.
          </p>
        </div>
      </div>

      {/* Tuition Inquiry Form */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Programs list (no prices) */}
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Our Programs</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Program Overview</h2>
              <p className="font-body text-[rgb(60,80,110)] text-lg mb-8 leading-relaxed">
                We offer programs at every level of French proficiency. Tuition is tailored to your program and financial situation — fill out the form to receive your personalized fee breakdown.
              </p>
              <div className="space-y-3 mb-8">
                {programs.map((prog, i) => (
                  <div key={prog.name} className={`flex items-center justify-between px-5 py-4 border border-[rgb(210,225,245)] rounded-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[rgb(240,247,255)]'}`}>
                    <div>
                      <div className="font-body font-bold text-[rgb(9,39,88)] text-sm">{prog.name}</div>
                      <div className="text-xs text-[rgb(60,80,110)] font-body mt-0.5">{prog.duration} · {prog.hoursPerWeek}</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[rgb(31,106,173)] text-xs font-body font-semibold">
                      <Lock size={12} />
                      Inquire for fee
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[rgb(221,236,255)] border border-[rgb(180,210,245)] rounded-sm p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[rgb(31,106,173)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-body font-bold text-[rgb(9,39,88)] text-sm mb-1">No Application Fee. No Registration Fee.</div>
                    <div className="font-body text-[rgb(60,80,110)] text-xs leading-relaxed">ACON Academy charges no application or registration fees. The only cost is your program tuition — and we have options to help with that too.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div className="bg-white border border-[rgb(210,225,245)] rounded-sm p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[rgb(221,236,255)] rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-[rgb(31,106,173)]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-3">Request Received!</h3>
                  <p className="font-body text-[rgb(60,80,110)] leading-relaxed">Our admissions team will send you a personalized tuition breakdown within 24 hours. Check your inbox — and your spam folder just in case.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-2">Get Your Tuition Breakdown</h3>
                    <p className="font-body text-[rgb(60,80,110)] text-sm leading-relaxed">Fill in your details and we'll send you a personalized fee breakdown along with any financial aid options you may qualify for.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] mb-1.5 uppercase tracking-wide">First Name *</label>
                        <input value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} className={`w-full border rounded-sm px-4 py-2.5 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] ${errors.firstName ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`} placeholder="First name" />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] mb-1.5 uppercase tracking-wide">Last Name *</label>
                        <input value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} className={`w-full border rounded-sm px-4 py-2.5 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] ${errors.lastName ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`} placeholder="Last name" />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] mb-1.5 uppercase tracking-wide">Email Address *</label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={`w-full border rounded-sm px-4 py-2.5 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] ${errors.email ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`} placeholder="your@email.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] mb-1.5 uppercase tracking-wide">Phone Number *</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: formatPhone(e.target.value)})} className={`w-full border rounded-sm px-4 py-2.5 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] ${errors.phone ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`} placeholder="(604) 555-0000" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] mb-1.5 uppercase tracking-wide">Preferred Campus *</label>
                      <select value={form.campus} onChange={e => setForm({...form, campus: e.target.value})} className={`w-full border rounded-sm px-4 py-2.5 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-white ${errors.campus ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}>
                        <option value="">Select campus</option>
                        <option value="Surrey">Surrey</option>
                        <option value="Kelowna">Kelowna</option>
                      </select>
                      {errors.campus && <p className="text-red-500 text-xs mt-1">{errors.campus}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] mb-1.5 uppercase tracking-wide">Program of Interest *</label>
                      <select value={form.program} onChange={e => setForm({...form, program: e.target.value})} className={`w-full border rounded-sm px-4 py-2.5 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] bg-white ${errors.program ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}>
                        <option value="">Select a program</option>
                        {programs.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                      </select>
                      {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(9,39,88)] mb-1.5 uppercase tracking-wide">Any questions? (optional)</label>
                      <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className="w-full border border-[rgb(210,225,245)] rounded-sm px-4 py-2.5 font-body text-sm text-[rgb(9,39,88)] focus:outline-none focus:border-[rgb(31,106,173)] resize-none" placeholder="e.g. Do I qualify for financial aid?" />
                    </div>
                    <button type="submit" className="w-full bg-[rgb(9,39,88)] hover:bg-[rgb(31,106,173)] text-white font-body font-bold py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2">
                      Send My Tuition Request <ArrowRight size={16} />
                    </button>
                    <p className="text-center text-xs font-body text-[rgb(100,120,150)]">We respond within 24 hours. No spam, ever.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white border-y border-[rgb(210,225,245)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">No Hidden Costs</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Everything Included in Your Tuition</h2>
            <p className="font-body text-[rgb(60,80,110)] text-lg max-w-2xl">ACON Academy's tuition is all-inclusive. No textbook surcharges, no assessment fees, no surprises.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "CLB placement assessment (pre-enrollment)",
              "All course materials and learning resources",
              "Access to ACON student portal",
              "Instructor feedback and progress reports",
              "Mock TEF/TCF examinations (exam prep programs)",
              "Certificate of completion upon graduation",
              "Alumni access to ACON resource library",
              "No application fee",
              "No registration fee",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[rgb(240,247,255)] border border-[rgb(210,225,245)] rounded-sm px-5 py-4">
                <CheckCircle size={15} className="text-[rgb(31,106,173)] flex-shrink-0" />
                <span className="font-body text-[rgb(40,55,80)] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Options */}
      <section className="py-20 bg-[rgb(221,236,255)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Support Available</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Financial Aid & Offers</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">We believe cost should never be a barrier to learning French. Here are the support options available to ACON Academy students.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aid.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[rgb(70,140,210)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-display text-xl font-bold text-[rgb(9,39,88)]">{item.title}</h3>
                        <span className="text-xs font-body font-bold px-2.5 py-1 rounded-sm bg-[rgb(9,39,88)] text-white">{item.badge}</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-sm mb-5">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgb(31,106,173)] mt-1.5 flex-shrink-0" />
                        <span className="text-xs font-body text-[rgb(60,80,110)]">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Take the First Step?</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Try a free class before you commit — no payment required, no pressure.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-classes" className="bg-white text-[rgb(9,39,88)] font-body font-bold px-8 py-4 rounded-sm hover:bg-[rgb(221,236,255)] transition-colors flex items-center gap-2">
              Claim Your Free Class <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border border-white/40 hover:border-white text-white font-body font-semibold px-8 py-4 rounded-sm transition-colors">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
