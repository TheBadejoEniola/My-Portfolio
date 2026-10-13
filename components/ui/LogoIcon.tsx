"use client";

import { useState } from "react";
import { logoUrl, hasLogoToken } from "@/lib/logo";

interface LogoIconProps {
  domain: string;
  name: string;
  size?: number;
  localSrc?: string;
}

export function LogoIcon({ domain, name, size = 16, localSrc }: LogoIconProps) {
  const [failed, setFailed] = useState(false);

  if (localSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={localSrc}
        alt=""
        width={size}
        height={size}
        className="shrink-0 rounded-[5px] object-contain"
        style={{ width: size, height: size }}
      />
    );
  }

  if (!hasLogoToken || !domain || failed) {
    return (
      <span
        aria-hidden
        className="grid place-items-center shrink-0 rounded-[5px] bg-[var(--badge-bg)] text-[var(--t1)] font-semibold"
        style={{ width: size, height: size, fontSize: size * 0.6 }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoUrl(domain, size)}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="shrink-0 rounded-[5px] object-contain"
      style={{ width: size, height: size }}
    />
  );
}
