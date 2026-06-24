/*
 * ACON Academy — Live Online Classes Page
 * Promotes LIVE, instructor-led online classes only (no recorded lectures).
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  ChevronRight, CheckCircle, ArrowRight, Radio, Calendar,
  Video, BookOpen, Mail, FileText, MessageCircle, PencilLine,
  GraduationCap, Award, Layers,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitToFormspree } from "@/lib/formspree";

const CLASS_DAYS = ["Saturday", "Sunday", "Monday"] as const;

const features = [
  { icon: Video, title: "Live Instruction", desc: "3 days of interactive, real-time classes per week." },
  { icon: BookOpen, title: "Student Portal", desc: "Full access to Ampeducator to track your progress." },
  { icon: Mail, title: "Direct Teacher Support", desc: "Email access to your teacher for personalized guidance." },
  { icon: FileText, title: "Exam Prep Materials", desc: "Comprehensive TCF/TEF study materials provided." },
  { icon: MessageCircle, title: "Doubt Sessions", desc: "Dedicated Q&A sessions every two weeks." },
  { icon: PencilLine, title: "Homework", desc: "Assignments after every class to reinforce concepts." },
  { icon: GraduationCap, title: "Final Exams", desc: "Assessment at the end of every level to ensure mastery." },
  { icon: Award, title: "Certification", desc: "Official certificate upon passing the final exam." },
  { icon: Layers, title: "Structured Levels", desc: "Clear, defined progression levels to guide your journey." },
];

const schedule = [
  { day: "Saturday", time: "9:30 AM – 11:00 AM" },
  { day: "Sunday", time: "9:30 AM – 11:00 AM" },
  { day: "Monday", time: "6:00 PM – 7:30 PM" },
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  cityProvince: string;
  frenchLevel: string;
  immigrationGoal: string;
  preferredDays: string[];
  howHeard: string;
  comments: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function isValidEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  const disposable = ["mailinator", "guerrillamail", "tempmail", "throwam", "yopmail", "sharklasers", "trashmail", "fakeinbox", "maildrop", "dispostable"];
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

export default function OnlineClasses() {
  const [form, setForm] = useState<FormData>({
    fullName: "", email: "", phone: "", cityProvince: "",
    frenchLevel: "", immigrationGoal: "", preferredDays: [],
    howHeard: "", comments: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.fullName.trim() || data.fullName.trim().length < 2) errs.fullName = "Please enter your full name.";
    if (!data.email.trim()) errs.email = "Email address is required.";
    else if (!isValidEmail(data.email)) errs.email = "Please enter a valid email address (no disposable emails).";
    if (!data.phone.trim()) errs.phone = "Phone number is required.";
    else if (!isValidPhone(data.phone)) errs.phone = "Please enter a valid 10-digit Canadian or US phone number.";
    if (!data.cityProvince.trim()) errs.cityProvince = "Please enter your city and province.";
    if (!data.frenchLevel) errs.frenchLevel = "Please select your current French level.";
    if (!data.immigrationGoal) errs.immigrationGoal = "Please select your immigration goal.";
    if (data.preferredDays.length === 0) errs.preferredDays = "Please select at least one preferred class day.";
    return errs;
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const errs = validate(form);
    setErrors(prev => ({ ...prev, [field]: errs[field] }));
  };

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      const errs = validate(updated);
      setErrors(prev => ({ ...prev, [field]: errs[field] }));
    }
  };

  const handlePhoneChange = (value: string) => handleChange("phone", formatPhone(value));

  const toggleDay = (day: string) => {
    const set = new Set(form.preferredDays);
    if (set.has(day)) set.delete(day); else set.add(day);
    const next = CLASS_DAYS.filter(d => set.has(d));
    handleChange("preferredDays", next);
    setTouched(prev => ({ ...prev, preferredDays: true }));
  };

  const toggleAllThree = () => {
    const allSelected = form.preferredDays.length === CLASS_DAYS.length;
    handleChange("preferredDays", allSelected ? [] : [...CLASS_DAYS]);
    setTouched(prev => ({ ...prev, preferredDays: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }
    setSubmitting(true);
    const ok = await submitToFormspree(
      { ...form, preferredDays: form.preferredDays.join(", ") },
      "Online Classes Inquiry",
    );
    setSubmitting(false);
    if (ok) setSubmitted(true);
    else toast.error("Something went wrong. Please try again or email us at info@aconacademy.ca.");
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border rounded-sm px-4 py-3 text-sm font-body bg-white focus:outline-none transition-colors ${
      touched[field] && errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-500"
        : touched[field] && !errors[field]
        ? "border-green-400 focus:border-green-500"
        : "border-[rgb(210,225,245)] focus:border-[rgb(9,39,88)]"
    }`;

  const allThreeSelected = form.preferredDays.length === CLASS_DAYS.length;

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <section className="bg-[rgb(9,39,88)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
          <div className="flex items-center gap-2 text-white/40 text-xs font-body mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Online Classes</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[rgb(31,106,173)]/25 border border-[rgb(31,106,173)]/40 rounded-sm px-3 py-1.5 mb-5">
            <Radio size={12} className="text-[rgb(100,170,240)]" />
            <span className="text-[rgb(100,170,240)] text-xs font-body font-bold tracking-widest uppercase">Live · Instructor-Led · Nationwide</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl">
            Live Online French Classes – Interactive &amp; Engaging
          </h1>
          <p className="text-white/70 font-body text-xl leading-relaxed mt-6 max-w-2xl">
            Master French from anywhere in Canada with our high-tech, live online curriculum.
          </p>

          {/* LIVE-only note — displayed prominently */}
          <div className="mt-8 max-w-2xl bg-[rgb(31,106,173)]/15 border border-[rgb(100,170,240)]/40 rounded-sm p-5 flex items-start gap-3">
            <Radio size={20} className="text-[rgb(100,170,240)] mt-0.5 flex-shrink-0" />
            <p className="text-white/85 font-body text-sm leading-relaxed">
              We exclusively offer <strong className="text-white">LIVE, instructor-led classes</strong> to ensure the highest quality of education. We do not offer recorded lectures.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Batch + What's Included */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
            {/* Batch details */}
            <div>
              <div className="bg-[rgb(9,39,88)] rounded-sm p-8 text-white sticky top-24">
                <div className="inline-flex items-center gap-2 text-[rgb(100,170,240)] text-xs font-body font-semibold tracking-widest uppercase mb-4">
                  <Calendar size={14} /> Upcoming Batch
                </div>
                <h2 className="font-display text-3xl font-bold mb-2">Starting July 25th</h2>
                <p className="text-white/60 font-body text-sm mb-6">3 days per week · Level: Scratch to A1</p>
                <div className="border-t border-white/10 pt-6 space-y-4">
                  {schedule.map((s) => (
                    <div key={s.day} className="flex items-center justify-between">
                      <span className="font-body font-semibold text-white">{s.day}</span>
                      <span className="font-body text-sm text-white/70">{s.time}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 mt-6 pt-6">
                  <p className="text-white/70 font-body text-sm mb-4">Contact us for pricing and enrollment details.</p>
                  <a
                    href="#inquiry"
                    className="block w-full text-center bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold py-3.5 rounded-sm transition-colors"
                  >
                    Register My Interest
                  </a>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">What's Included</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-8">Everything You Need to Succeed</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 bg-white border border-[rgb(210,225,245)] rounded-sm p-5">
                    <div className="w-10 h-10 rounded-sm bg-[rgb(221,236,255)] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[rgb(31,106,173)]" />
                    </div>
                    <div>
                      <div className="font-body font-bold text-[rgb(9,39,88)] mb-1">{title}</div>
                      <div className="text-sm font-body text-[rgb(60,80,110)] leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 bg-white">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Get Started</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Register Your Interest</h2>
            <p className="font-body text-[rgb(60,80,110)] text-lg">Tell us a little about yourself and our team will reach out with pricing and enrollment details.</p>
          </div>

          {submitted ? (
            <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-3">Thank You!</h3>
              <p className="font-body text-[rgb(60,80,110)] mb-2">
                We've received your interest in our live online classes. Our team will contact <strong>{form.email}</strong> with pricing and enrollment details soon.
              </p>
              <p className="text-sm font-body text-[rgb(60,80,110)] mt-4">
                Questions? Call us at <a href="tel:+18773592035" className="text-[rgb(31,106,173)] font-semibold">+1 (877) 359-2035</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Full Name *</label>
                <input type="text" value={form.fullName} onChange={e => handleChange("fullName", e.target.value)} onBlur={() => handleBlur("fullName")} className={inputClass("fullName")} placeholder="Jane Smith" />
                {touched.fullName && errors.fullName && <p className="text-red-500 text-xs mt-1 font-body">{errors.fullName}</p>}
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Email Address *</label>
                  <input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")} className={inputClass("email")} placeholder="jane.smith@email.com" />
                  {touched.email && errors.email && <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Phone Number *</label>
                  <input type="tel" value={form.phone} onChange={e => handlePhoneChange(e.target.value)} onBlur={() => handleBlur("phone")} className={inputClass("phone")} placeholder="(604) 555-0000" />
                  {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>}
                </div>
              </div>

              {/* City / Province */}
              <div>
                <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">City / Province *</label>
                <input type="text" value={form.cityProvince} onChange={e => handleChange("cityProvince", e.target.value)} onBlur={() => handleBlur("cityProvince")} className={inputClass("cityProvince")} placeholder="Surrey, BC" />
                {touched.cityProvince && errors.cityProvince && <p className="text-red-500 text-xs mt-1 font-body">{errors.cityProvince}</p>}
              </div>

              {/* French Level + Immigration Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Current French Level *</label>
                  <select value={form.frenchLevel} onChange={e => handleChange("frenchLevel", e.target.value)} onBlur={() => handleBlur("frenchLevel")} className={inputClass("frenchLevel")}>
                    <option value="">Select your level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                  {touched.frenchLevel && errors.frenchLevel && <p className="text-red-500 text-xs mt-1 font-body">{errors.frenchLevel}</p>}
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Immigration Goal *</label>
                  <select value={form.immigrationGoal} onChange={e => handleChange("immigrationGoal", e.target.value)} onBlur={() => handleBlur("immigrationGoal")} className={inputClass("immigrationGoal")}>
                    <option value="">Select your goal</option>
                    <option value="PR Application">PR Application</option>
                    <option value="Citizenship">Citizenship</option>
                    <option value="Job">Job</option>
                    <option value="Personal Growth">Personal Growth</option>
                    <option value="Other">Other</option>
                  </select>
                  {touched.immigrationGoal && errors.immigrationGoal && <p className="text-red-500 text-xs mt-1 font-body">{errors.immigrationGoal}</p>}
                </div>
              </div>

              {/* Preferred Class Days */}
              <div>
                <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-2 uppercase tracking-wide">Preferred Class Days *</label>
                <div className="flex flex-wrap gap-3">
                  {CLASS_DAYS.map((day) => {
                    const checked = form.preferredDays.includes(day);
                    return (
                      <button
                        type="button"
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`px-4 py-2.5 rounded-sm border text-sm font-body font-semibold transition-colors ${
                          checked
                            ? "bg-[rgb(9,39,88)] border-[rgb(9,39,88)] text-white"
                            : "bg-white border-[rgb(210,225,245)] text-[rgb(40,55,80)] hover:border-[rgb(31,106,173)]"
                        }`}
                      >
                        {checked && <CheckCircle size={13} className="inline mr-1.5 -mt-0.5" />}{day}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={toggleAllThree}
                    className={`px-4 py-2.5 rounded-sm border text-sm font-body font-semibold transition-colors ${
                      allThreeSelected
                        ? "bg-[rgb(31,106,173)] border-[rgb(31,106,173)] text-white"
                        : "bg-white border-[rgb(210,225,245)] text-[rgb(40,55,80)] hover:border-[rgb(31,106,173)]"
                    }`}
                  >
                    {allThreeSelected && <CheckCircle size={13} className="inline mr-1.5 -mt-0.5" />}All Three
                  </button>
                </div>
                {touched.preferredDays && errors.preferredDays && <p className="text-red-500 text-xs mt-1.5 font-body">{errors.preferredDays}</p>}
              </div>

              {/* How did you hear */}
              <div>
                <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">How did you hear about us?</label>
                <select value={form.howHeard} onChange={e => handleChange("howHeard", e.target.value)} className={inputClass("howHeard")}>
                  <option value="">Select (optional)</option>
                  <option value="Google">Google</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Any questions or comments?</label>
                <textarea value={form.comments} onChange={e => handleChange("comments", e.target.value)} rows={4} className={`${inputClass("comments")} resize-y`} placeholder="Let us know how we can help…" />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[rgb(9,39,88)] hover:bg-[rgb(20,55,110)] text-white font-body font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60 text-base shadow-lg hover:shadow-xl"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  <>
                    <ArrowRight size={16} />
                    Register My Interest
                  </>
                )}
              </button>

              <p className="text-center text-xs font-body text-[rgb(120,140,170)] leading-relaxed">
                By submitting, you agree to be contacted by ACON Academy regarding your inquiry. We never share your information with third parties.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
