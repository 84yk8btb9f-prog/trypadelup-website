"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="text-xl font-bold tracking-tight gradient-text-logo"
          >
            PadelUp
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium transition-colors"
            style={{ color: "rgba(240, 244, 248, 0.65)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(240, 244, 248, 1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(240, 244, 248, 0.65)")
            }
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium transition-colors"
            style={{ color: "rgba(240, 244, 248, 0.65)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(240, 244, 248, 1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(240, 244, 248, 0.65)")
            }
          >
            How it Works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium transition-colors"
            style={{ color: "rgba(240, 244, 248, 0.65)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(240, 244, 248, 1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(240, 244, 248, 0.65)")
            }
          >
            Testimonials
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all"
            style={{
              backgroundColor: "#00f5d4",
              color: "#0a0a0a",
              boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 35px rgba(0, 245, 212, 0.5)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(0, 245, 212, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: "#f0f4f8",
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: "#f0f4f8",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              backgroundColor: "#f0f4f8",
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
        >
          <a
            href="#features"
            className="text-sm font-medium py-2"
            style={{ color: "rgba(240, 244, 248, 0.8)" }}
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium py-2"
            style={{ color: "rgba(240, 244, 248, 0.8)" }}
            onClick={() => setMenuOpen(false)}
          >
            How it Works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium py-2"
            style={{ color: "rgba(240, 244, 248, 0.8)" }}
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            style={{
              backgroundColor: "#00f5d4",
              color: "#0a0a0a",
            }}
          >
            Download on the App Store
          </a>
        </div>
      )}
    </header>
  );
}
