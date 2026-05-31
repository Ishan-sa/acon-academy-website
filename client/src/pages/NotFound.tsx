import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(255,251,248)]">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-lg px-4">
          <div className="font-display text-9xl font-bold text-[rgb(9,39,88)]/10 mb-4">404</div>
          <h1 className="font-display text-4xl font-bold text-[rgb(9,39,88)] mb-4">Page Not Found</h1>
          <p className="font-body text-[rgb(60,80,110)] text-lg mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="bg-[rgb(9,39,88)] hover:bg-[rgb(20,50,100)] text-white font-body font-bold px-7 py-3.5 rounded-sm transition-colors flex items-center gap-2">
              Back to Home <ArrowRight size={16} />
            </Link>
            <Link href="/programs" className="border border-[rgb(9,39,88)] text-[rgb(9,39,88)] font-body font-semibold px-7 py-3.5 rounded-sm hover:bg-[rgb(9,39,88)] hover:text-white transition-colors">
              View Programs
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
