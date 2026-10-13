import Image from "next/image";
import { personal } from "@/data/personal";
import { LogoIcon } from "@/components/ui/LogoIcon";

function TechMention({ domain, name }: { domain: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-1 align-middle font-medium text-[var(--text-link)]">
      <LogoIcon domain={domain} name={name} size={14} />
      {name}
    </span>
  );
}

function LogoLink({
  href,
  domain,
  name,
}: {
  href: string;
  domain: string;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 align-middle font-medium text-[var(--text-link)] underline underline-offset-[3px] decoration-[var(--border)] hover:decoration-[var(--text-muted)] transition-colors"
    >
      <LogoIcon domain={domain} name={name} size={14} />
      {name}
    </a>
  );
}

export function HeaderBio() {
  return (
    <section className="max-w-[800px] mx-auto px-6 pt-12 pb-16">
      {/* Avatar + name + role */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-[56px] h-[56px] rounded-full overflow-hidden flex-shrink-0 ring-1 ring-[var(--border)]">
          <Image
            src="/images/avatar.jpeg"
            alt={personal.fullName}
            width={56}
            height={56}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div>
          <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--text)] leading-none">
            {personal.fullName}
          </h1>
          <div className="flex items-center gap-3 mt-1.5">
            <p className="text-[14px] text-[var(--text-muted)] leading-none">
              Data Analyst
            </p>
            {personal.available && (
              <span className="inline-flex items-center gap-1.5 text-[12px] text-[#2a7a4b] leading-none">
                <span className="w-[6px] h-[6px] rounded-full bg-[#2a7a4b] animate-pulse flex-shrink-0" />
                Available
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-[15px] leading-[1.7] text-[var(--text-muted)]">
        <p>
          I&apos;m a Data Analyst based in Nigeria. I turn complex datasets
          into clear insights that help businesses make better decisions. Using{" "}
          <TechMention domain="powerbi.com" name="Power BI" />,{" "}
          <TechMention domain="mysql.com" name="SQL" />,{" "}
          <TechMention domain="python.org" name="Python" />, and{" "}
          <TechMention domain="microsoft.com" name="Excel" />, I explore data,
          spot trends, and tell the story behind the numbers through interactive
          dashboards and reports.
        </p>
        <p>
          My work covers data cleaning, exploratory analysis, KPI tracking, and
          data visualisation. Each project starts with a real business question,
          and I work through the data to find answers and uncover opportunities
          others might miss.
        </p>
        <p>
          I built my skills through hands-on training at TS Academy, where I
          learned to turn real datasets into dashboards and reports. Find my
          work on{" "}
          <LogoLink
            href={personal.socials.github}
            domain="github.com"
            name="GitHub"
          />
          , connect on{" "}
          <LogoLink
            href={personal.socials.linkedin}
            domain="linkedin.com"
            name="LinkedIn"
          />
          , or{" "}
          <a
            href={`mailto:${personal.email}`}
            className="font-medium text-[var(--text-link)] underline underline-offset-[3px] decoration-[var(--border)] hover:decoration-[var(--text-muted)] transition-colors"
          >
            get in touch
          </a>
          .
        </p>
      </div>
    </section>
  );
}
