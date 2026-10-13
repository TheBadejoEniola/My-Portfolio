"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="max-w-[800px] mx-auto px-6 py-10 mt-4">
      <p className="text-[13px] text-[var(--text-muted)]">
        Lagos, Nigeria &middot;{" "}
        <span className="tabular-nums">{time ?? "—"}</span>
      </p>
    </footer>
  );
}
