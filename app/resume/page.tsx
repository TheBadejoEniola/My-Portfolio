import type { Metadata } from "next";
import { personal } from "@/data/personal";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${personal.fullName}, ${personal.role}.`,
};

export default function ResumePage() {
  return (
    <FadeUp>
      <div className="max-w-[800px] mx-auto px-6 pt-12 pb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--text)] leading-none">
              {personal.fullName}
            </h1>
            <p className="text-[14px] text-[var(--text-muted)] mt-1.5">
              {personal.role} · {personal.location}
            </p>
          </div>
          <a
            href="/Eniola_Badejo_Resume.pdf"
            download
            className="text-[13px] font-medium text-[var(--text)] hover:text-[var(--text-muted)] transition-colors"
          >
            ↓ Download PDF
          </a>
        </div>

        {/* PDF viewer */}
        <div className="w-full rounded-2xl overflow-hidden border border-[var(--border)]">
          <iframe
            src="/Eniola_Badejo_Resume.pdf"
            className="w-full"
            style={{ height: "80vh" }}
            title={`${personal.fullName} Resume`}
          />
        </div>

        <p className="text-[13px] text-[var(--text-muted)] mt-4 text-center">
          PDF not loading?{" "}
          <a
            href="/Eniola_Badejo_Resume.pdf"
            download
            className="text-[var(--text)] underline underline-offset-[3px] decoration-[var(--border)] hover:decoration-[var(--text-muted)] transition-colors"
          >
            Download directly
          </a>
        </p>
      </div>
    </FadeUp>
  );
}
