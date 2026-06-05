/*
 * ACON Academy Free Classes Page — Neo-Institutional Modernism
 * Form-first layout: hero lead capture form at top with full validation
 * More qualifying fields + real-time error feedback to filter genuine leads
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, CheckCircle, ArrowRight, Calendar, Users, Star, Shield, Clock, Award } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { submitToFormspree } from "@/lib/formspree";


type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  campus: string;
  frenchLevel: string;
  goal: string;
  howHeard: string;
  canadianStatus: string;
  availability: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

// Validation helpers
function isValidEmail(email: string): boolean {
  // Must have proper format and not be a throwaway domain
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  const disposable = ["mailinator", "guerrillamail", "tempmail", "throwam", "yopmail", "sharklasers", "trashmail", "fakeinbox", "maildrop", "dispostable"];
  const domain = email.split("@")[1]?.toLowerCase() || "";
  return !disposable.some(d => domain.includes(d));
}

function isValidPhone(phone: string): boolean {
  // Strip all non-digits
  const digits = phone.replace(/\D/g, "");
  // Must be 10 digits (North American) or 11 digits starting with 1
  if (digits.length === 11 && digits[0] === "1") return true;
  if (digits.length !== 10) return false;
  // Area code cannot start with 0 or 1
  if (digits[0] === "0" || digits[0] === "1") return false;
  // Reject obviously fake numbers (all same digit, sequential)
  const allSame = digits.split("").every(d => d === digits[0]);
  if (allSame) return false;
  const sequential = "0123456789";
  if (sequential.includes(digits) || sequential.split("").reverse().join("").includes(digits)) return false;
  return true;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function FreeClasses() {
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    campus: "", frenchLevel: "", goal: "",
    howHeard: "", canadianStatus: "", availability: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.firstName.trim() || data.firstName.trim().length < 2) errs.firstName = "Please enter your first name.";
    if (!data.lastName.trim() || data.lastName.trim().length < 2) errs.lastName = "Please enter your last name.";
    if (!data.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!isValidEmail(data.email)) {
      errs.email = "Please enter a valid email address (no disposable emails).";
    }
    if (!data.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!isValidPhone(data.phone)) {
      errs.phone = "Please enter a valid 10-digit Canadian or US phone number.";
    }
    if (!data.campus) errs.campus = "Please select your preferred campus.";
    if (!data.frenchLevel) errs.frenchLevel = "Please select your current French level.";
    if (!data.goal) errs.goal = "Please tell us your main goal — this helps us place you correctly.";
    if (!data.canadianStatus) errs.canadianStatus = "Please select your immigration status.";
    if (!data.availability) errs.availability = "Please select your availability.";
    return errs;
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const errs = validate(form);
    setErrors(prev => ({ ...prev, [field]: errs[field] }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      const errs = validate(updated);
      setErrors(prev => ({ ...prev, [field]: errs[field] }));
    }
  };

  const handlePhoneChange = (value: string) => {
    handleChange("phone", formatPhone(value));
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
    const ok = await submitToFormspree(form, "Free Classes Registration");
    setSubmitting(false);
    if (ok) {
      setSubmitted(true);
    } else {
      toast.error("Something went wrong. Please try again or email us at info@aconacademy.ca.");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border rounded-sm px-4 py-3 text-sm font-body bg-white focus:outline-none transition-colors ${
      touched[field] && errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-500"
        : touched[field] && !errors[field]
        ? "border-green-400 focus:border-green-500"
        : "border-[rgb(210,225,245)] focus:border-[rgb(9,39,88)]"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* ── HERO: Split layout — copy left, form right ── */}
      <section className="bg-[rgb(9,39,88)] relative overflow-hidden">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />

        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-xs font-body mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Free Trial Classes</span>
          </div>

          {/* Badge + heading above the form */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-[rgb(31,106,173)]/25 border border-[rgb(31,106,173)]/40 rounded-sm px-3 py-1.5 mb-5">
              <Star size={12} className="text-[rgb(100,170,240)]" />
              <span className="text-[rgb(100,170,240)] text-xs font-body font-bold tracking-widest uppercase">Limited Spots Available</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Claim Your Free<br />
              <span className="text-[rgb(100,170,240)]">90-Minute</span><br />
              French Class
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: The Form — comes first for easy access */}
            <div ref={formRef} className="bg-white rounded-sm shadow-2xl overflow-hidden order-first">
              {submitted ? (
                <div className="p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-3">You're Registered!</h3>
                  <p className="font-body text-[rgb(60,80,110)] mb-6">
                    We'll send your confirmation and class details to <strong>{form.email}</strong> within 2 hours. Check your spam folder if you don't see it.
                  </p>
                  <p className="text-sm font-body text-[rgb(60,80,110)]">
                    Questions? Call us at <a href="tel:+18773592035" className="text-[rgb(31,106,173)] font-semibold">+1 (877) 359-2035</a>
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-[rgb(9,39,88)] px-7 py-5">
                    <h2 className="font-display text-xl font-bold text-white">Reserve Your Free Spot</h2>
                    <p className="text-white/60 font-body text-sm mt-1">Takes 2 minutes · Spots fill fast</p>
                  </div>
                  <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4" noValidate>

                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">First Name *</label>
                        <input
                          type="text"
                          value={form.firstName}
                          onChange={e => handleChange("firstName", e.target.value)}
                          onBlur={() => handleBlur("firstName")}
                          className={inputClass("firstName")}
                          placeholder="Jane"
                        />
                        {touched.firstName && errors.firstName && (
                          <p className="text-red-500 text-xs mt-1 font-body">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Last Name *</label>
                        <input
                          type="text"
                          value={form.lastName}
                          onChange={e => handleChange("lastName", e.target.value)}
                          onBlur={() => handleBlur("lastName")}
                          className={inputClass("lastName")}
                          placeholder="Smith"
                        />
                        {touched.lastName && errors.lastName && (
                          <p className="text-red-500 text-xs mt-1 font-body">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={inputClass("email")}
                        placeholder="jane.smith@email.com"
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Phone Number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => handlePhoneChange(e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={inputClass("phone")}
                        placeholder="(604) 555-0000"
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>
                      )}
                    </div>

                    {/* Campus */}
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Campus *</label>
                      <select
                        value={form.campus}
                        onChange={e => handleChange("campus", e.target.value)}
                        onBlur={() => handleBlur("campus")}
                        className={inputClass("campus")}
                      >
                        <option value="">Select</option>
                        <option value="Surrey">Surrey</option>
                        <option value="Kelowna">Kelowna</option>
                      </select>
                      {touched.campus && errors.campus && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.campus}</p>
                      )}
                    </div>

                    {/* French Level */}
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Current French Level *</label>
                      <select
                        value={form.frenchLevel}
                        onChange={e => handleChange("frenchLevel", e.target.value)}
                        onBlur={() => handleBlur("frenchLevel")}
                        className={inputClass("frenchLevel")}
                      >
                        <option value="">Select your level</option>
                        <option value="none">No French knowledge (complete beginner)</option>
                        <option value="beginner">Beginner — I know a few words (A1)</option>
                        <option value="elementary">Elementary — basic conversations (A2)</option>
                        <option value="intermediate">Intermediate — can hold simple discussions (B1)</option>
                        <option value="upper-intermediate">Upper Intermediate (B2)</option>
                      </select>
                      {touched.frenchLevel && errors.frenchLevel && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.frenchLevel}</p>
                      )}
                    </div>

                    {/* Main Goal */}
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">What is your main goal? *</label>
                      <select
                        value={form.goal}
                        onChange={e => handleChange("goal", e.target.value)}
                        onBlur={() => handleBlur("goal")}
                        className={inputClass("goal")}
                      >
                        <option value="">Select your goal</option>
                        <option value="pr">Permanent Residency (PR) / Citizenship test</option>
                        <option value="career">Career advancement or job requirement</option>
                        <option value="immigration">Canadian immigration — language requirement</option>
                        <option value="personal">Personal growth / travel</option>
                        <option value="youth">My child needs French (Ages 13–18)</option>
                        <option value="other">Other</option>
                      </select>
                      {touched.goal && errors.goal && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.goal}</p>
                      )}
                    </div>

                    {/* Immigration Status */}
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Canadian Immigration Status *</label>
                      <select
                        value={form.canadianStatus}
                        onChange={e => handleChange("canadianStatus", e.target.value)}
                        onBlur={() => handleBlur("canadianStatus")}
                        className={inputClass("canadianStatus")}
                      >
                        <option value="">Select status</option>
                        <option value="citizen">Canadian Citizen</option>
                        <option value="pr">Permanent Resident</option>
                        <option value="work-permit">Work Permit Holder</option>
                        <option value="study-permit">Study Permit Holder</option>
                        <option value="refugee">Refugee / Protected Person</option>
                        <option value="other">Other / Not Applicable</option>
                      </select>
                      {touched.canadianStatus && errors.canadianStatus && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.canadianStatus}</p>
                      )}
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">Best Time for Classes *</label>
                      <select
                        value={form.availability}
                        onChange={e => handleChange("availability", e.target.value)}
                        onBlur={() => handleBlur("availability")}
                        className={inputClass("availability")}
                      >
                        <option value="">Select availability</option>
                        <option value="weekday-morning">Weekday Mornings (9:30–11:00 AM)</option>
                        <option value="weekday-noon">Weekday Noon (11:30 AM–1:00 PM)</option>
                        <option value="weekday-evening">Weekday Evenings (8:00–9:30 PM)</option>
                        <option value="weekend">Weekends</option>
                        <option value="flexible">Flexible — any time works</option>
                      </select>
                      {touched.availability && errors.availability && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.availability}</p>
                      )}
                    </div>

                    {/* How did you hear */}
                    <div>
                      <label className="block text-xs font-body font-semibold text-[rgb(40,55,80)] mb-1.5 uppercase tracking-wide">How did you hear about us?</label>
                      <select
                        value={form.howHeard}
                        onChange={e => handleChange("howHeard", e.target.value)}
                        className={inputClass("howHeard")}
                      >
                        <option value="">Select (optional)</option>
                        <option value="google">Google Search</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="youtube">YouTube</option>
                        <option value="friend">Friend or Family Referral</option>
                        <option value="settlement">Settlement Agency</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[rgb(9,39,88)] hover:bg-[rgb(20,55,110)] text-white font-body font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60 text-base mt-2 shadow-lg hover:shadow-xl"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Securing Your Spot...
                        </span>
                      ) : (
                        <>
                          <ArrowRight size={16} />
                          Reserve My Free Class Spot
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs font-body text-[rgb(120,140,170)] leading-relaxed">
                      By submitting, you agree to be contacted by ACON Academy regarding your registration. We never share your information with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Right: Trust signals + stats */}
            <div className="lg:pt-4">
              <p className="text-white/70 font-body text-lg leading-relaxed mb-8 max-w-lg">
                Experience ACON Academy before you commit. Attend a live class with a certified instructor, meet fellow students, and discover which program fits your goals — completely free.
              </p>

              {/* Trust signals */}
              <div className="space-y-3 mb-10">
                {[
                  { icon: Shield, text: "No credit card required — 100% free, no strings attached" },
                  { icon: Users, text: "Max 12 students per class for personalized attention" },
                  { icon: Clock, text: "Confirmation sent within 2 hours of registration" },
                  { icon: Award, text: "Taught by government-certified French instructors" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-sm bg-[rgb(31,106,173)]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[rgb(100,170,240)]" />
                    </div>
                    <span className="text-white/75 font-body text-sm">{text}</span>
                  </div>
                ))}
              </div>

              {/* Social proof stats */}
              <div className="border-t border-white/10 pt-8">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-white">800+</div>
                    <div className="text-white/50 text-xs font-body mt-1">Students Enrolled</div>
                  </div>
                  <div className="w-px h-10 bg-white/15" />
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-white">2</div>
                    <div className="text-white/50 text-xs font-body mt-1">BC Campuses</div>
                  </div>
                  <div className="w-px h-10 bg-white/15" />
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-white">98%</div>
                    <div className="text-white/50 text-xs font-body mt-1">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">The Experience</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6">What to Expect</h2>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-8">
                Our free trial classes give you a genuine taste of the ACON learning experience. You'll work with one of our certified instructors in a small group setting, covering practical French communication skills relevant to your level.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Meet Our Instructors", desc: "Experienced, certified French language educators who are passionate about student success." },
                  { title: "Small Group Setting", desc: "Trial classes are limited to 12 students to ensure personalized attention." },
                  { title: "Level-Appropriate Content", desc: "Classes are available for all levels, from complete beginners to advanced learners." },
                  { title: "Program Overview", desc: "Learn about our full programs, schedules, fees, and the financial aid currently available." },
                  { title: "Q&A with Admissions", desc: "Get all your questions answered by our admissions team after the class." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-body font-semibold text-[rgb(9,39,88)] text-sm">{item.title}</div>
                      <div className="text-sm font-body text-[rgb(60,80,110)]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/manus-storage/acon-entrance-new_54bb7488.png"
                alt="Free trial class at ACON Academy"
                className="w-full h-[460px] object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
