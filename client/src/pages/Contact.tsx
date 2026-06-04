/*
 * ACON Academy Contact Page — Neo-Institutional Modernism
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitToFormspree } from "@/lib/formspree";

function isValidEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  const disposable = ["mailinator","guerrillamail","tempmail","throwam","yopmail","sharklasers","trashmail","fakeinbox","maildrop","dispostable"];
  const domain = email.split("@")[1]?.toLowerCase() || "";
  return !disposable.some(d => domain.includes(d));
}
function isValidPhone(phone: string): boolean {
  if (!phone.trim()) return true; // phone is optional on Contact
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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", campus: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!isValidEmail(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (form.phone && !isValidPhone(form.phone)) {
      e.phone = "Please enter a valid 10-digit Canadian or US phone number.";
    }
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Please enter a message (at least 10 characters).";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    const ok = await submitToFormspree(form, "Contact Form");
    setSubmitting(false);
    if (ok) {
      toast.success("Message sent! Our team will contact you within 1–2 business days.");
      setForm({ name: "", email: "", phone: "", campus: "", subject: "", message: "" });
      setErrors({});
    } else {
      toast.error("Something went wrong. Please try again or email us directly at info@aconacademy.ca.");
    }
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
            <span className="text-white">Contact</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Contact Us</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl">Have questions about our programs, admissions, or campuses? Our team is here to help.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-7">Get in Touch</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[rgb(70,140,210)]" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-[rgb(9,39,88)] mb-1">Phone</div>
                    <a href="tel:+18773592035" className="text-sm font-body text-[rgb(60,80,110)] hover:text-[rgb(31,106,173)] transition-colors">+1 (877) 359-2035</a><br/>
                    <a href="tel:+18667660571" className="text-sm font-body text-[rgb(60,80,110)] hover:text-[rgb(31,106,173)] transition-colors">+1 (866) 766-0571 (Kelowna)</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[rgb(70,140,210)]" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-[rgb(9,39,88)] mb-1">Email</div>
                    <a href="mailto:info@aconacademy.ca" className="text-sm font-body text-[rgb(60,80,110)] hover:text-[rgb(31,106,173)] transition-colors">info@aconacademy.ca</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[rgb(70,140,210)]" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-[rgb(9,39,88)] mb-1">Surrey Campus</div>
                    <div className="text-sm font-body text-[rgb(60,80,110)]">13764 72 Ave, Suite #203<br/>Surrey, BC V3W 2P2</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[rgb(70,140,210)]" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-[rgb(9,39,88)] mb-1">Kelowna Campus</div>
                    <div className="text-sm font-body text-[rgb(60,80,110)]">1674 Bertram St, Suite #301<br/>Kelowna, BC V1Y 9G4</div>
                  </div>
                </div>
              </div>

              <div className="bg-[rgb(221,236,255)] rounded-sm p-6 border border-[rgb(210,225,245)]">
                <Clock size={18} className="text-[rgb(31,106,173)] mb-3" />
                <h3 className="font-display font-bold text-[rgb(9,39,88)] mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm font-body text-[rgb(60,80,110)]">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold">9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-semibold">10:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-semibold">Closed</span></div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[rgb(210,225,245)] rounded-sm p-8">
                <h2 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-7">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-body font-semibold text-[rgb(40,55,80)] mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className={`w-full border rounded-sm px-4 py-3 text-sm font-body text-[rgb(40,55,80)] focus:outline-none focus:border-[rgb(9,39,88)] transition-colors ${errors.name ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-[rgb(40,55,80)] mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className={`w-full border rounded-sm px-4 py-3 text-sm font-body text-[rgb(40,55,80)] focus:outline-none focus:border-[rgb(9,39,88)] transition-colors ${errors.email ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-body font-semibold text-[rgb(40,55,80)] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: formatPhone(e.target.value) })}
                        className={`w-full border rounded-sm px-4 py-3 text-sm font-body text-[rgb(40,55,80)] focus:outline-none focus:border-[rgb(9,39,88)] transition-colors ${errors.phone ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                        placeholder="(604) 555-0000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-[rgb(40,55,80)] mb-2">Preferred Campus</label>
                      <select
                        value={form.campus}
                        onChange={e => setForm({ ...form, campus: e.target.value })}
                        className="w-full border border-[rgb(210,225,245)] rounded-sm px-4 py-3 text-sm font-body text-[rgb(40,55,80)] focus:outline-none focus:border-[rgb(9,39,88)] transition-colors bg-white"
                      >
                        <option value="">Select campus</option>
                        <option value="surrey">Surrey Campus</option>
                        <option value="kelowna">Kelowna Campus</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-[rgb(40,55,80)] mb-2">Subject *</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className={`w-full border rounded-sm px-4 py-3 text-sm font-body text-[rgb(40,55,80)] focus:outline-none focus:border-[rgb(9,39,88)] transition-colors bg-white ${errors.subject ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="financial-aid">Financial Aid</option>
                      <option value="campus-tour">Campus Tour Request</option>
                      <option value="free-class">Free Class Registration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-[rgb(40,55,80)] mb-2">Message *</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className={`w-full border rounded-sm px-4 py-3 text-sm font-body text-[rgb(40,55,80)] focus:outline-none focus:border-[rgb(9,39,88)] transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-[rgb(210,225,245)]'}`}
                      placeholder="Tell us about your French learning goals and any questions you have..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[rgb(9,39,88)] hover:bg-[rgb(20,50,100)] text-white font-body font-bold py-4 rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
