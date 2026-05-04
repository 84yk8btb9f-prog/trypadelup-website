"use client";

import { ReactNode } from "react";
import { APP_IS_LIVE } from "@/lib/config";
import { useLaunchModal } from "@/components/launch-modal";

interface AppStoreLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClickExtra?: () => void;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export default function AppStoreLink({
  href,
  className = "",
  children,
  onClickExtra,
  ariaLabel,
  style,
}: AppStoreLinkProps) {
  const { open } = useLaunchModal();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClickExtra?.();
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
      className={className}
      aria-label={ariaLabel}
      style={style}
    >
      {children}
    </a>
  );
}
