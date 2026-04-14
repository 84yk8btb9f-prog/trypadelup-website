"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import AppStoreBadge from "@/components/app-store-badge";
import { cn } from "@/lib/utils";

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
    <header>
      <nav
        data-state={menuOpen ? "active" : undefined}
        className="fixed z-50 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            scrolled &&
              "max-w-4xl rounded-2xl border border-white/[0.06] bg-[#050505]/50 backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo + mobile toggle */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt="PadelUp"
                  width={36}
                  height={36}
                  className="rounded-[22%]"
                />
                <span className="gradient-text text-xl font-bold tracking-tight font-heading">
                  PadelUp
                </span>
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn(
                    "size-6 text-white duration-200",
                    menuOpen && "rotate-180 scale-0 opacity-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 -rotate-180 scale-0 text-white opacity-0 duration-200",
                    menuOpen && "rotate-0 scale-100 opacity-100"
                  )}
                />
              </button>
            </div>

            {/* Desktop center links */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "block font-medium transition-colors duration-150",
                        activeSection === link.href.slice(1)
                          ? "text-white"
                          : "text-white/45 hover:text-white/70"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop right CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <AppStoreBadge
                href={APP_STORE_URL}
                height={cn(scrolled ? "h-8" : "h-9")}
              />
            </div>

            {/* Mobile menu dropdown */}
            <div
              className={cn(
                "mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/[0.06] bg-[#050505] p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                menuOpen && "block lg:flex"
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block font-medium text-white/60 transition-colors hover:text-white"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:hidden">
                <a
                  href={APP_STORE_URL}
                  className="rounded-full bg-[#00E676] px-6 py-3 text-center text-sm font-semibold text-[#050505] transition-colors hover:bg-[#00E676]/90"
                  onClick={() => setMenuOpen(false)}
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
