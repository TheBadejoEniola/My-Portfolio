"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { getDomain } from "@/lib/domains";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggle(company: string) {
    setExpanded((prev) => (prev === company ? null : company));
  }

  return (
    <section className="max-w-[800px] mx-auto px-6 pb-16">
      <p className="text-[16px] font-medium text-[var(--text)] mb-5">Experience</p>

      <div className="divide-y divide-[var(--border)]">
        {experiences.map((entry) => {
          const isOpen = expanded === entry.company;
          return (
            <div key={entry.company}>
              <button
                onClick={() => toggle(entry.company)}
                className="w-full flex items-start gap-3 py-4 text-left group hover:bg-[#f9f9f9] rounded-xl px-3 -mx-3 transition-colors duration-150"
              >
                {/* Logo */}
                <div className="flex-shrink-0 mt-[2px]">
                  <LogoIcon
                    domain={getDomain(entry.company)}
                    name={entry.company}
                    size={36}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[15px] font-medium text-[var(--text)] leading-snug min-w-0 truncate">
                      {entry.role}, {entry.company}
                    </span>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="hidden sm:inline text-[13px] text-[var(--text-muted)] tabular-nums">
                        {entry.period}
                      </span>
                      <span
                        className="text-[var(--text-muted)] transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {entry.description?.[0] && (
                    <p className="text-[13px] text-[var(--text-muted)] mt-1 leading-[1.6]">
                      {entry.description[0]}
                    </p>
                  )}
                </div>
              </button>

              {/* Expandable detail */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? "400px" : "0px" }}
              >
                <ul className="pl-[48px] pb-4 flex flex-col gap-2">
                  {entry.description?.slice(1).map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[13px] text-[var(--text-muted)] leading-[1.6]"
                    >
                      <span className="w-[3px] h-[3px] rounded-full bg-[var(--text-muted)] flex-shrink-0 mt-[8px] opacity-50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
