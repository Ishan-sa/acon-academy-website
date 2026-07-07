/**
 * FreeSessionPopup — ACON Academy
 * Entrance modal: appears 1.5s after first page load (session-scoped, won't repeat).
 * Brand: navy #092758, blue #1F6AAD, warm white #FFFBF8
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X, GraduationCap, Star, ArrowRight, CheckCircle } from "lucide-react";

const SESSION_KEY = "acon_free_session_popup_shown";

export default function FreeSessionPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
        style={{
          animation: closing ? "fadeOut 0.3s ease forwards" : "fadeIn 0.3s ease forwards",
        }}
        onClick={close}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="relative w-full max-w-lg rounded-sm overflow-hidden shadow-2xl"
          style={{
            pointerEvents: "all",
            animation: closing
              ? "slideDown 0.3s ease forwards"
              : "slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
            backgroundColor: "rgb(255, 251, 248)",
          }}
        >
          {/* Top navy bar */}
          <div
            className="relative px-8 pt-8 pb-7 text-white overflow-hidden"
            style={{ backgroundColor: "rgb(9, 39, 88)" }}
          >
            {/* Decorative circle */}
            <div
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-10"
              style={{ backgroundColor: "rgb(31, 106, 173)" }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: "rgb(31, 106, 173)" }}
            />

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div
              className="w-14 h-14 rounded-sm flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(31, 106, 173, 0.3)" }}
            >
              <GraduationCap size={28} style={{ color: "rgb(147, 197, 253)" }} />
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm mb-3"
              style={{
                backgroundColor: "rgba(31, 106, 173, 0.25)",
                border: "1px solid rgba(31, 106, 173, 0.5)",
              }}
            >
              <Star size={11} style={{ color: "rgb(147, 197, 253)" }} fill="rgb(147, 197, 253)" />
              <span
                className="text-xs font-body font-bold tracking-widest uppercase"
                style={{ color: "rgb(147, 197, 253)" }}
              >
                Limited Spots Available
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold text-white leading-tight mb-2">
              Claim Your Free<br />
              <span style={{ color: "rgb(70, 160, 230)" }}>90-Minute French Class</span>
            </h2>
            <p className="text-white/70 font-body text-sm leading-relaxed">
              Experience ACON Academy before you commit — completely free, no strings attached.
            </p>
          </div>

          {/* Body */}
          <div className="px-8 py-6" style={{ backgroundColor: "rgb(255, 251, 248)" }}>
            {/* Benefits */}
            <ul className="space-y-2.5 mb-6">
              {[
                "Live class with a certified French instructor",
                "Max 12 students — personalized attention guaranteed",
                "Available at Surrey & Kelowna campuses",
                "No credit card required — 100% free",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "rgb(31, 106, 173)" }}
                  />
                  <span className="text-sm font-body text-[rgb(40,55,80)] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link href="/free-classes" onClick={close}>
              <div
                className="w-full flex items-center justify-center gap-2 py-4 rounded-sm font-body font-bold text-white text-base transition-all duration-150 hover:opacity-90 active:scale-[0.98] cursor-pointer"
                style={{ backgroundColor: "rgb(9, 39, 88)" }}
              >
                CLAIM FREE SESSION
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* Dismiss link */}
            <button
              onClick={close}
              className="w-full text-center text-xs font-body text-[rgb(100,120,150)] hover:text-[rgb(9,39,88)] transition-colors mt-3 py-1"
            >
              No thanks, I'll pay full price
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(20px) scale(0.97); }
        }
      `}</style>
    </>
  );
}
