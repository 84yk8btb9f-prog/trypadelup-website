import Image from "next/image";

interface AppStoreBadgeProps {
  href: string;
  className?: string;
  height?: string;
}

export default function AppStoreBadge({ href, className = "", height = "h-12" }: AppStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
