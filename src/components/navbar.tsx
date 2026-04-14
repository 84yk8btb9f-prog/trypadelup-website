"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="PadelUp" width={32} height={32} className="rounded-lg" />
          <span className="gradient-text text-xl font-bold tracking-tight font-heading">
            PadelUp
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "active text-white"
                  : "text-white/45 hover:text-white/70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <a href={APP_STORE_URL} aria-label="Download on the App Store" className="transition-opacity hover:opacity-80">
            <svg width="130" height="38" viewBox="0 0 180 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="180" height="54" rx="10" fill="black"/>
              <rect x="0.5" y="0.5" width="179" height="53" rx="9.5" stroke="white" strokeOpacity="0.3"/>
              <path d="M36.5 17.2c-1.4 0-2.8.6-3.8 1.6-.9 1-1.4 2.3-1.3 3.7 1.4.1 2.8-.5 3.8-1.5.9-1 1.4-2.3 1.3-3.8zm3.3 18.8c-1.3 0-2.4-.8-3.1-.8s-1.9.8-3.2.8c-1.6 0-3.1-.9-4-2.4-1.8-3.1-.5-7.7 1.3-10.2.9-1.2 2-2.5 3.5-2.5 1.4 0 2.2.8 3.3.8 1.1 0 1.8-.8 3.4-.8 1.4 0 2.4 1.1 3.1 2.1-2.7 1.5-2.3 5.4.4 6.5-.5 1.4-1.2 2.8-2.2 3.9-.7.9-1.5 1.6-2.5 1.6z" fill="white"/>
              <text x="56" y="23" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="11" fill="white" opacity="0.9">Download on the</text>
              <text x="56" y="40" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="20" fontWeight="600" fill="white">App Store</text>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-[60] flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#050505]/98 backdrop-blur-3xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-2xl font-semibold text-white/80 transition-colors hover:text-white font-heading"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={APP_STORE_URL}
          className="mt-4 rounded-full bg-[#00E676] px-8 py-3.5 text-base font-semibold text-[#050505]"
          onClick={() => setMenuOpen(false)}
        >
          Download on the App Store
        </a>
      </div>
    </header>
  );
}
