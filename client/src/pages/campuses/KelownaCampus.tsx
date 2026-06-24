/*
 * ACON Academy — Kelowna Campus Page
 * Neo-Institutional Modernism | Navy #092758 | Blue Accent #1F6AAD
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";

const KELOWNA_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=1674+Bertram+St+Suite+301+Kelowna+BC+V1Y+9G4";

export default function KelownaCampus() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />

      {/* Hero */}
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/campuses" className="hover:text-white transition-colors">Campuses</Link>
            <ChevronRight size={14} />
            <span className="text-white">Kelowna Campus</span>
          </div>
          <div className="text-[rgb(70,140,210)] text-xs font-body font-semibold tracking-widest uppercase mb-4">Campus 02 · Okanagan</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Kelowna Campus</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl">High-quality French language education in the heart of the Okanagan region.</p>
        </div>
      </div>

      {/* Details */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-[rgb(40,55,80)] leading-relaxed text-lg mb-8">
                Our Kelowna campus serves the Okanagan region, providing the same high-quality French language education in a beautiful interior BC setting. The Kelowna campus offers afternoon and evening classes to suit the local community's needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-body font-semibold text-[rgb(9,39,88)]">Address</div>
                    <a
                      href={KELOWNA_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-body text-[rgb(60,80,110)] hover:text-[rgb(31,106,173)] transition-colors underline-offset-2 hover:underline"
                    >
                      1674 Bertram St, Suite #301, Kelowna, BC V1Y 9G4
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-body font-semibold text-[rgb(9,39,88)]">Campus Hours</div>
                    <div className="text-sm font-body text-[rgb(60,80,110)]">Monday–Sunday: 9:00 AM – 10:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-body font-semibold text-[rgb(9,39,88)]">Phone</div>
                    <a href="tel:+18773592035" className="text-sm font-body text-[rgb(60,80,110)] hover:text-[rgb(31,106,173)] transition-colors">+1 (877) 359-2035</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-body font-semibold text-[rgb(9,39,88)]">Email</div>
                    <a href="mailto:infokelowna@aconacademy.ca" className="text-sm font-body text-[rgb(60,80,110)] hover:text-[rgb(31,106,173)] transition-colors">infokelowna@aconacademy.ca</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Modern Classrooms", "Study Spaces", "Okanagan Location", "Accessible Parking", "Evening Classes"].map((f) => (
                  <span key={f} className="text-xs font-body font-semibold bg-[rgb(9,39,88)]/10 text-[rgb(9,39,88)] px-3 py-1.5 rounded-sm">{f}</span>
                ))}
              </div>
            </div>
            <div>
              {/* TODO: replace with new Kelowna campus image from Google Drive */}
              <img
                src="/manus-storage/campus_reception_2757a7ae.jpg"
                alt="ACON Academy Kelowna Campus"
                className="w-full h-[460px] object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Visit the Kelowna Campus</h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">Book a campus tour and experience the ACON learning environment in person.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions/campus-tours" className="bg-[rgb(31,106,173)] hover:bg-[rgb(70,140,210)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Book a Tour <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border border-white/40 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
