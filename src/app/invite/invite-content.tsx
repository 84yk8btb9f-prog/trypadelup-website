"use client";

import { useSearchParams } from "next/navigation";
import { Gift } from "lucide-react";
import { APP_STORE_URL } from "@/lib/config";
import AppStoreLink from "@/components/app-store-link";

const highlights = [
  "AI video analysis — get personalized technique coaching",
  "Smart nutrition tracking — snap a photo, know your macros",
  "Personalized 7-day training plans built for your level",
];

export default function InviteContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") ?? "PADEL100";

  return (
    <div className="w-full max-w-lg mx-auto py-16 flex flex-col items-center gap-8 text-center">
      {/* Icon */}
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{
          backgroundColor: "rgba(57, 255, 125, 0.08)",
          border: "1px solid rgba(57, 255, 125, 0.2)",
          boxShadow: "0 0 40px rgba(57, 255, 125, 0.08)",
        }}
      >
        <Gift size={32} strokeWidth={1.75} color="#39ff7d" />
      </div>

      {/* Headline */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          You&apos;ve been invited to{" "}
          <span style={{ color: "#39ff7d" }}>PadelUp!</span>
        </h1>
        <p
          className="text-base leading-relaxed"
          style={{ color: "rgba(240, 244, 248, 0.65)" }}
        >
          Your friend wants you to join them on PadelUp. Sign up and you both
          get{" "}
          <span className="font-semibold text-white">1 week free</span>
          {" + "}
          <span className="font-semibold text-white">100 XP</span> to kickstart
          your padel journey.
        </p>
      </div>

      {/* Referral code */}
      <div
        className="w-full p-5 rounded-2xl flex flex-col gap-2"
        style={{
          backgroundColor: "rgba(57, 255, 125, 0.06)",
          border: "1px solid rgba(57, 255, 125, 0.2)",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(57, 255, 125, 0.7)" }}
        >
          Your referral code
        </p>
        <p
          className="text-3xl font-bold tracking-widest"
          style={{ color: "#39ff7d", letterSpacing: "0.2em" }}
        >
          {code}
        </p>
        <p
          className="text-xs"
          style={{ color: "rgba(240, 244, 248, 0.4)" }}
        >
          Enter this code in the app to claim your 1 week free + 100 XP
        </p>
      </div>

      {/* Feature highlights */}
      <div className="w-full flex flex-col gap-3 text-left">
        {highlights.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              className="shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" fill="rgba(57, 255, 125, 0.15)" />
              <path
                d="M8 12l3 3 5-5"
                stroke="#39ff7d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-sm leading-relaxed"
              style={{ color: "rgba(240, 244, 248, 0.75)" }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="w-full flex flex-col gap-3">
        <AppStoreLink
          href={APP_STORE_URL}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-semibold text-base transition-all"
          style={{
            backgroundColor: "#39ff7d",
            color: "#0b0f14",
            boxShadow: "0 0 40px rgba(57, 255, 125, 0.35)",
          }}
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </AppStoreLink>
        <p
          className="text-xs text-center"
          style={{ color: "rgba(240, 244, 248, 0.35)" }}
        >
          Free to download · 1 week free with your code · iOS
        </p>
      </div>
    </div>
  );
}
