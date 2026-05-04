"use client";

import Image from "next/image";
import { APP_IS_LIVE } from "@/lib/config";
import { useLaunchModal } from "@/components/launch-modal";

interface AppStoreBadgeProps {
  href: string;
  className?: string;
  height?: string;
}

export default function AppStoreBadge({ href, className = "", height = "h-12" }: AppStoreBadgeProps) {
  const { open } = useLaunchModal();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!APP_IS_LIVE) {
      e.preventDefault();
      open();
    }
  };

  return (
    <a
      href={APP_IS_LIVE ? href : "#"}
      onClick={handleClick}
      target={APP_IS_LIVE ? "_blank" : undefined}
      rel={APP_IS_LIVE ? "noopener noreferrer" : undefined}
      className={`inline-block transition-all duration-300 hover:scale-105 hover:opacity-85 active:scale-95 ${className}`}
      aria-label="Download on the App Store"
    >
      <Image
        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1726444800"
        alt="Download on the App Store"
        width={250}
        height={83}
        className={`${height} w-auto`}
        unoptimized
      />
    </a>
  );
}
