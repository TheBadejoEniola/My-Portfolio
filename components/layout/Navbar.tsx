"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md shadow-sm">
        <Link
          href="/"
          className="px-3 py-1.5 rounded-full text-[13px] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-all duration-150"
        >
          {personal.fullName}
        </Link>

        <div className="w-px h-4 bg-[var(--border)]" />

        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 rounded-full text-[13px] transition-all duration-150",
                isActive
                  ? "bg-[var(--text)] text-[var(--bg)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--border)]"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
