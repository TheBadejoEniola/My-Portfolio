import { personal } from "@/data/personal";

export function Contact() {
  const linkClass =
    "text-[15px] text-white/70 hover:text-white underline-offset-[3px] hover:underline transition-colors";

  return (
    <footer id="contact" className="bg-[#161616] text-white">
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">
          Ready to connect?
        </p>
        <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.02em] leading-tight mb-4">
          Let&apos;s turn data into decisions.
        </h2>
        <p className="text-[16px] leading-[1.7] text-white/70 max-w-[520px] mx-auto mb-8">
          I&apos;m open to data analyst opportunities. Get in touch to discuss
          a role or project.
        </p>

        <a
          href={`mailto:${personal.email}`}
          className="inline-block bg-white text-[#161616] px-8 py-4 text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-white/90 transition-colors"
        >
          Contact me
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <a href={`mailto:${personal.email}`} className={linkClass}>
            Gmail
          </a>
          <span className="text-[15px] text-white/70">Nigeria</span>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-[14px] text-white/50">
        © {new Date().getFullYear()} {personal.fullName}
      </div>
    </footer>
  );
}
