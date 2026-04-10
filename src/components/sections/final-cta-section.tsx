"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Ripple } from "@/components/ui/ripple";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function FinalCta() {
  return (
    <footer className="bg-[#050505]">
      {/* CTA */}
      <div className="relative overflow-hidden py-32 px-6 sm:px-10">
        <Ripple mainCircleSize={210} mainCircleOpacity={0.12} />

        <motion.div
          className="relative z-10 mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl font-heading leading-tight">
            Your next level starts
            <br />
            <span className="gradient-text">with your next shot.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-white/35">
            Upload a clip. See what you&apos;ve been missing. Improve where it counts.
          </p>
          <div className="mt-10">
            <a href={APP_STORE_URL}>
              <ShimmerButton
                shimmerColor="#00E676"
                background="rgba(0, 230, 118, 0.1)"
                className="px-8 py-4 text-base font-semibold"
              >
                <span className="text-white">Start your free trial</span>
              </ShimmerButton>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.04]">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <p className="mb-2 text-lg font-bold text-white font-heading gradient-text">
                PadelUp
              </p>
              <p className="max-w-[200px] text-sm text-white/25">
                AI-powered padel coaching to analyze, train, and level up your game.
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

            {/* Legal */}
            <div>
              <p className="mb-3 text-sm font-medium text-white/40">Legal</p>
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
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="mb-3 text-sm font-medium text-white/40">Support</p>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:support@trypadelup.com" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/padelup" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://x.com/padelup" className="text-sm text-white/25 transition-colors hover:text-white/45">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.03] pt-6 sm:flex-row">
            <p className="text-xs text-white/10">
              &copy; 2026 PadelUp. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/10">
              <Link href="/privacy" className="transition-colors hover:text-white/25">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white/25">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
