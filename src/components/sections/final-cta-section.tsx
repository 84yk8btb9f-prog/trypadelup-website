"use client";

import Link from "next/link";
import { motion } from "motion/react";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function FinalCta() {
  return (
    <footer className="bg-[#050505]">
      {/* CTA — green gradient */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#00E676] to-[#00C853] px-6 py-28 sm:px-10">
        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-4xl font-bold text-[#050505] sm:text-5xl lg:text-6xl font-heading leading-tight">
            Your next level starts
            <br />
            with your next shot.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-[#050505]/60">
            Upload a clip. See what you&apos;ve been missing. Improve where it counts.
          </p>
          <div className="mt-10">
            <a
              href={APP_STORE_URL}
              className="inline-flex items-center gap-2 rounded-full bg-[#050505] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#1a1a1a] hover:shadow-xl"
            >
              Start your free trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-[#0a0a0a] border-t border-white/[0.04]">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <p className="mb-2 text-lg font-bold text-white font-heading gradient-text">
                PadelUp
              </p>
              <p className="max-w-[240px] text-sm text-white/25">
                The AI-powered coaching app designed specifically for padel players who want to level up faster.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="mb-3 text-sm font-medium text-white/40">Product</p>
              <ul className="space-y-2.5">
                <li>
                  <a href="#features" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <p className="mb-3 text-sm font-medium text-white/40">Legal & Contact</p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/privacy" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@trypadelup.com" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    support@trypadelup.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex items-center justify-between border-t border-white/[0.03] pt-6">
            <p className="text-xs text-white/10">
              &copy; 2026 PadelUp. All rights reserved.
            </p>
            <a
              href="https://instagram.com/padelup"
              className="text-white/15 transition-colors hover:text-white/30"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
