/*
 * ACON Academy — Media Kit Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Download, Mail, Phone } from "lucide-react";

const assets = [
  { title: "Primary Logo (SVG)", desc: "Full-colour ACON Academy logo on transparent background. For use on white and light backgrounds.", format: "SVG / PNG" },
  { title: "Reversed Logo (SVG)", desc: "White version of the ACON Academy logo for use on dark and navy backgrounds.", format: "SVG / PNG" },
  { title: "Brand Mark Only", desc: "Standalone ACON monogram for use as a favicon, social media avatar, or compact identifier.", format: "SVG / PNG" },
  { title: "Institutional Photography", desc: "High-resolution images of our Surrey and Kelowna campuses, classrooms, and student life.", format: "JPG (300 DPI)" },
  { title: "Faculty Portraits", desc: "Professional headshots of ACON Academy instructors for editorial and media use.", format: "JPG (300 DPI)" },
  { title: "Fact Sheet 2025–26", desc: "One-page institutional overview including key statistics, program summary, and accreditation status.", format: "PDF" },
  { title: "Boilerplate Copy", desc: "Approved institutional description for use in press releases, event listings, and partner communications.", format: "DOCX / TXT" },
  { title: "Press Release Archive", desc: "All official ACON Academy press releases from 2022 to present.", format: "PDF" },
];

const brandColors = [
  { name: "ACON Navy", hex: "#092758", rgb: "9, 39, 88", usage: "Primary brand colour. Use for headers, backgrounds, and primary UI elements." },
  { name: "ACON Blue", hex: "#1F6AAD", rgb: "31, 106, 173", usage: "Accent colour. Use for links, CTAs, highlights, and secondary UI elements." },
  { name: "Light Blue", hex: "#4690D2", rgb: "70, 144, 210", usage: "Tertiary accent. Use for icons, decorative elements, and hover states." },
  { name: "Warm White", hex: "#FFFBF8", rgb: "255, 251, 248", usage: "Background colour. Use for page backgrounds and light section fills." },
  { name: "Light Blue Tint", hex: "#DDECFF", rgb: "221, 236, 255", usage: "Secondary background. Use for card backgrounds and section fills." },
];

const keyFacts = [
  { label: "Founded", value: "2018" },
  { label: "Headquarters", value: "Surrey, British Columbia" },
  { label: "Second Campus", value: "Kelowna, British Columbia" },
  { label: "Students Served", value: "800+" },
  { label: "Exam Pass Rate", value: "95% (TEF/TCF 2025)" },
  { label: "Regulatory Status", value: "PTIB Registered" },
  { label: "Curriculum Standard", value: "Canadian Language Benchmarks (CLB)" },
  { label: "Media Contact", value: "info@aconacademy.ca" },
];

export default function MediaKit() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/about" className="hover:text-white transition-colors">About ACON</Link>
            <ChevronRight size={14} />
            <span className="text-white">Media Kit</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Press & Media Resources</div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Media Kit</h1>
            <p className="text-white/75 font-body text-xl leading-relaxed">
              Everything journalists, content creators, and community partners need to accurately represent ACON Academy in print, digital, and broadcast media.
            </p>
          </div>
        </div>
      </div>

      {/* Media Contact */}
      <div className="bg-[rgb(31,106,173)] py-5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-body font-bold text-white">Media Inquiries: For interview requests, press releases, and asset access, contact our communications team.</div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@aconacademy.ca" className="flex items-center gap-2 text-white font-body text-sm font-semibold hover:text-white/80 transition-colors">
              <Mail size={15} /> info@aconacademy.ca
            </a>
            <a href="tel:+18773592035" className="flex items-center gap-2 text-white font-body text-sm font-semibold hover:text-white/80 transition-colors">
              <Phone size={15} /> +1 (877) 359-2035
            </a>
          </div>
        </div>
      </div>

      {/* Boilerplate */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Approved Institutional Description</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6">About ACON Academy</h2>
              <div className="bg-[rgb(221,236,255)] border border-[rgb(210,225,245)] rounded-sm p-7 mb-6">
                <p className="font-body text-[rgb(40,55,80)] leading-relaxed italic text-sm mb-4">
                  <strong>Short (50 words):</strong> ACON Academy is British Columbia's premier French language institution, offering CLB-aligned programs for newcomers, permanent residents, and Canadians pursuing immigration, citizenship, and career goals. With campuses in Surrey and Kelowna, ACON has served 800+ students and maintains a 95% TEF/TCF examination pass rate.
                </p>
                <p className="font-body text-[rgb(40,55,80)] leading-relaxed italic text-sm">
                  <strong>Long (100 words):</strong> Founded in 2018 in Surrey, British Columbia, ACON Academy is Canada's most trusted French language institution for immigration and citizenship preparation. PTIB-registered and CLB-aligned, ACON offers a full range of programs — from beginner foundations to intensive examination preparation — at campuses in Surrey and Kelowna. With a faculty of certified instructors, a maximum class size of 12 students, and a 95% TEF/TCF examination pass rate, ACON Academy has helped over 800 students achieve the French language proficiency required for Express Entry, Provincial Nominee Programs, Francophone Mobility, and Canadian citizenship.
                </p>
              </div>
              <p className="text-xs font-body text-[rgb(60,80,110)]">Please use the approved descriptions above when referencing ACON Academy in media, event listings, or partner communications. For custom descriptions or quotes from leadership, contact info@aconacademy.ca.</p>
            </div>
            <div>
              <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Key Facts at a Glance</div>
              <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-6">Institutional Facts</h2>
              <div className="space-y-0 border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                {keyFacts.map((fact, i) => (
                  <div key={fact.label} className={`flex items-start justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[rgb(221,236,255)]'}`}>
                    <span className="font-body text-sm font-semibold text-[rgb(60,80,110)] w-40 flex-shrink-0">{fact.label}</span>
                    <span className="font-body text-sm font-bold text-[rgb(9,39,88)] text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Visual Identity</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Brand Guidelines</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">Use these guidelines to ensure ACON Academy is represented accurately and consistently across all media.</p>
          </div>

          {/* Colour Palette */}
          <div className="mb-14">
            <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-6">Colour Palette</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {brandColors.map((color) => (
                <div key={color.name} className="border border-[rgb(210,225,245)] rounded-sm overflow-hidden">
                  <div className="h-20" style={{ backgroundColor: color.hex }} />
                  <div className="p-4">
                    <div className="font-body font-bold text-[rgb(9,39,88)] text-sm mb-1">{color.name}</div>
                    <div className="text-xs font-body text-[rgb(60,80,110)] mb-1">{color.hex}</div>
                    <div className="text-xs font-body text-[rgb(60,80,110)] mb-2">RGB: {color.rgb}</div>
                    <div className="text-xs font-body text-[rgb(60,80,110)] leading-relaxed">{color.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-14">
            <h3 className="font-display text-2xl font-bold text-[rgb(9,39,88)] mb-6">Typography</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[rgb(210,225,245)] rounded-sm p-7">
                <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-3">Display / Headings</div>
                <div className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-2">Playfair Display</div>
                <div className="font-display text-lg text-[rgb(40,55,80)] mb-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <p className="text-sm font-body text-[rgb(60,80,110)]">Used for all headings, display text, and institutional names. Bold weight (700) for primary headings; regular (400) for subheadings.</p>
              </div>
              <div className="border border-[rgb(210,225,245)] rounded-sm p-7">
                <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] tracking-widest uppercase mb-3">Body / UI Text</div>
                <div className="font-body text-4xl font-bold text-[rgb(9,39,88)] mb-2">Source Sans 3</div>
                <div className="font-body text-lg text-[rgb(40,55,80)] mb-4">abcdefghijklmnopqrstuvwxyz</div>
                <p className="text-sm font-body text-[rgb(60,80,110)]">Used for all body copy, UI elements, captions, and labels. Regular (400) for body; semibold (600) for UI labels; bold (700) for emphasis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Assets */}
      <section className="py-20" style={{ backgroundColor: 'rgb(221,236,255)' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">Assets</div>
            <h2 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Downloadable Assets</h2>
            <p className="text-[rgb(60,80,110)] font-body text-lg max-w-2xl">All assets are available upon request. Contact info@aconacademy.ca to receive the full media asset package.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {assets.map((asset) => (
              <div key={asset.title} className="bg-white border border-[rgb(210,225,245)] rounded-sm p-6">
                <div className="w-10 h-10 rounded-sm bg-[rgb(9,39,88)] flex items-center justify-center mb-4">
                  <Download size={18} className="text-[rgb(70,140,210)]" />
                </div>
                <h3 className="font-body font-bold text-[rgb(9,39,88)] mb-2 text-sm">{asset.title}</h3>
                <p className="text-xs font-body text-[rgb(60,80,110)] leading-relaxed mb-3">{asset.desc}</p>
                <span className="text-xs font-body font-semibold text-[rgb(31,106,173)] bg-[rgb(221,236,255)] px-2 py-1 rounded-sm">{asset.format}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="mailto:info@aconacademy.ca?subject=Media Asset Request — ACON Academy"
              className="inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-bold px-8 py-4 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors"
            >
              Request Full Asset Package <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
