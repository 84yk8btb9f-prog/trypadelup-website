"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import AppStoreBadge from "@/components/app-store-badge";
import { cn } from "@/lib/utils";
import { APP_STORE_URL } from "@/lib/config";

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: "/features", label: "Features" },
  { href: "/for", label: "For you" },
  { href: "/compare", label: "Compare" },
  { href: "/learn", label: "Learn" },
  { href: "/resources", label: "Tools" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <nav className="fixed z-50 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            scrolled &&
              "max-w-5xl rounded-xl sm:rounded-2xl border border-white/[0.06] bg-[#050505]/50 backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            <Link href="/" className="relative z-10 flex items-center gap-2.5">
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

            <div className="absolute inset-0 hidden items-center justify-center lg:flex">
              <ul className="flex gap-7 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-white/50 transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 hidden lg:block">
              <AppStoreBadge
                href={APP_STORE_URL}
                height={scrolled ? "h-8" : "h-9"}
              />
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative z-[60] -m-2.5 block cursor-pointer p-2.5 lg:hidden"
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
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-[#050505]/98 backdrop-blur-3xl transition-all duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl font-semibold text-white/80 transition-colors hover:text-white font-heading"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
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
