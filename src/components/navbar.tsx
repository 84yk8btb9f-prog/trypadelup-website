"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.06]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight gradient-text-logo" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            PadelUp
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium text-white/65 hover:text-white/100 transition-colors ${
                activeSection === link.href.slice(1) ? "active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={APP_STORE_URL}
            className="text-sm font-semibold px-5 py-2 rounded-full bg-teal text-[#050505] shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_35px_rgba(0,245,212,0.5)] hover:-translate-y-px transition-all"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 bg-[#f0f4f8] transition-all duration-200"
            style={{
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 bg-[#f0f4f8] transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-[#f0f4f8] transition-all duration-200"
            style={{
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#050505]/95 backdrop-blur-2xl transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={APP_STORE_URL}
          className="mt-4 text-base font-semibold px-8 py-3.5 rounded-full bg-teal text-[#050505] shadow-[0_0_30px_rgba(0,245,212,0.35)]"
          onClick={() => setMenuOpen(false)}
        >
          Download on the App Store
        </a>
      </div>
    </header>
  );
}
