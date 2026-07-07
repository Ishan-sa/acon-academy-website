/*
 * SearchOverlay — full-screen search modal opened from the header search icon.
 * Client-side search over the static page index + blog posts (searchIndex.ts).
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";
import { Search, X, ArrowRight } from "lucide-react";
import { searchSite } from "@/lib/searchIndex";

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchSite(query), [query]);

  // Focus the input when the overlay opens; reset on close.
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
    setQuery("");
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const go = (path: string) => {
    onClose();
    setLocation(path);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) go(results[0].path);
  };

  return (
    <div className="fixed inset-0 z-[10000]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ animation: "fadeIn 0.2s ease forwards" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative max-w-2xl mx-auto mt-24 px-4">
        <div
          className="bg-white rounded-sm shadow-2xl overflow-hidden"
          style={{ animation: "slideUp 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards" }}
        >
          <form onSubmit={onSubmit} className="flex items-center gap-3 px-5 border-b border-[rgb(210,225,245)]">
            <Search size={20} className="text-[rgb(31,106,173)] flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programs, campuses, articles…"
              className="flex-1 py-4 text-base font-body text-[rgb(9,39,88)] placeholder:text-[rgb(120,140,170)] focus:outline-none bg-transparent"
              aria-label="Search the site"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[rgb(60,80,110)] hover:text-[rgb(9,39,88)] transition-colors flex-shrink-0"
              aria-label="Close search"
            >
              <X size={20} />
            </button>
          </form>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() === "" ? (
              <div className="px-5 py-8 text-center text-sm font-body text-[rgb(60,80,110)]">
                Start typing to search across programs, campuses, admissions, and blog articles.
              </div>
            ) : results.length === 0 ? (
              <div className="px-5 py-8 text-center text-sm font-body text-[rgb(60,80,110)]">
                No results for &ldquo;{query}&rdquo;. Try a different keyword.
              </div>
            ) : (
              <ul>
                {results.map((r) => (
                  <li key={r.path}>
                    <button
                      onClick={() => go(r.path)}
                      className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4 hover:bg-[rgb(221,236,255)] transition-colors border-b border-[rgb(238,244,252)] last:border-0 group"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-body font-semibold text-[rgb(31,106,173)] uppercase tracking-wide mb-0.5">
                          {r.category}
                        </div>
                        <div className="font-body text-sm text-[rgb(9,39,88)] truncate">{r.title}</div>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-[rgb(120,140,170)] group-hover:text-[rgb(31,106,173)] flex-shrink-0 transition-colors"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
