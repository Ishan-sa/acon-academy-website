/*
 * ACON Academy Campuses Overview — Neo-Institutional Modernism
 * Surrey and Kelowna each have their own dedicated page; this page links to both.
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronRight, MapPin, ArrowRight } from "lucide-react";

const campuses = [
  {
    eyebrow: "Campus 01 · Metro Vancouver",
    name: "Surrey Campus",
    href: "/campuses/surrey",
    address: "13764 72 Ave, Suite #203, Surrey, BC V3W 2P2",
    desc: "Our flagship campus in the heart of Metro Vancouver's most diverse city, with modern classrooms, study spaces, and extended evening hours.",
    img: "/manus-storage/campus_reception2_35c233e0.jpg",
  },
  {
    eyebrow: "Campus 02 · Okanagan",
    name: "Kelowna Campus",
    href: "/campuses/kelowna",
    address: "1674 Bertram St, Suite #301, Kelowna, BC V1Y 9G4",
    desc: "Serving the Okanagan region with the same high-quality French language education in a beautiful interior BC setting.",
    img: "/kelowana-campus/4.jpeg",
  },
];

export default function Campuses() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />
      <div className="bg-[rgb(9,39,88)] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm font-body mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Campuses</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Our Campuses</h1>
          <p className="text-white/70 font-body text-xl max-w-2xl">Two state-of-the-art learning facilities in British Columbia, designed for the modern language learner.</p>
        </div>
      </div>

      {/* Campus cards */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {campuses.map((c) => (
              <div key={c.name} className="bg-white border border-[rgb(210,225,245)] rounded-sm overflow-hidden flex flex-col">
                <img src={c.img} alt={`ACON Academy ${c.name}`} className="w-full h-64 object-cover" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-[rgb(31,106,173)] text-xs font-body font-semibold tracking-widest uppercase mb-3">{c.eyebrow}</div>
                  <h2 className="font-display text-3xl font-bold text-[rgb(9,39,88)] mb-3">{c.name}</h2>
                  <div className="flex items-start gap-2.5 mb-4">
                    <MapPin size={16} className="text-[rgb(31,106,173)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-[rgb(60,80,110)]">{c.address}</span>
                  </div>
                  <p className="font-body text-[rgb(40,55,80)] leading-relaxed mb-8">{c.desc}</p>
                  <Link
                    href={c.href}
                    className="mt-auto inline-flex items-center gap-2 bg-[rgb(9,39,88)] text-white font-body font-bold px-7 py-3.5 rounded-sm hover:bg-[rgb(20,50,100)] transition-colors self-start"
                  >
                    View {c.name} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(9,39,88)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Visit a Campus Today</h2>
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
