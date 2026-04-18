import { Suspense } from "react";
import InviteContent from "./invite-content";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You've been invited to PadelUp!",
  description:
    "Your friend wants you to join them on PadelUp — the AI padel coaching app. Sign up and you'll both receive 100 XP!",
  alternates: { canonical: "https://www.trypadelup.com/invite" },
  openGraph: {
    title: "You've been invited to PadelUp!",
    description: "Join your friend on PadelUp and both of you get 100 XP. AI padel coaching, video analysis, and personalized training plans.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function InvitePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 pt-16 min-h-screen">
        <Suspense fallback={<InviteFallback />}>
          <InviteContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function InviteFallback() {
  return (
    <div className="w-full max-w-lg mx-auto py-16 flex flex-col items-center gap-4">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: "#39ff7d", borderTopColor: "transparent" }}
      />
    </div>
  );
}
