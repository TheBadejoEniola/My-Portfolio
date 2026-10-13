import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { FadeUp } from "@/components/ui/FadeUp";
import { getDomain } from "@/lib/domains";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}


export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <FadeUp>
      <article className="max-w-[800px] mx-auto px-6 pt-12 pb-24">

        {/* Back */}
        <Link
          href="/projects"
          className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-10 block"
        >
          ← Work
        </Link>

        {/* Title */}
        <h1 className="text-[26px] sm:text-[36px] font-bold tracking-[-0.03em] text-[var(--text)] leading-[1.15] mb-4">
          {project.title}
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[var(--text-muted)] leading-relaxed mb-4">
          {project.tagline}
        </p>

        {project.role && (
          <p className="text-[13px] text-[var(--text-muted)] mb-10">{project.role} · {project.year}</p>
        )}

        {/* Hero — image or color block with metrics */}
        <div
          className="relative w-full rounded-2xl overflow-hidden mb-8"
          style={{ background: project.image ? undefined : project.color, aspectRatio: "16/9" }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.7) 100%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 flex flex-wrap gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-white">
                <div className="text-[22px] sm:text-[28px] font-bold tracking-tight leading-none">
                  {m.value}
                </div>
                <div className="text-[11px] text-white/50 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool chips */}
        {project.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-12">
            {project.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--card)]"
              >
                <LogoIcon domain={getDomain(tag)} name={tag} size={14} />
                <span className="text-[12px] text-[var(--text-muted)]">{tag}</span>
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="space-y-10 text-[16px] leading-[1.85] text-[var(--text-muted)]">
          <section>
            <p className="text-[12px] font-semibold text-[var(--text)] mb-3 uppercase tracking-wider">The Problem</p>
            <p>{project.problem}</p>
          </section>

          <section>
            <p className="text-[12px] font-semibold text-[var(--text)] mb-3 uppercase tracking-wider">Dataset</p>
            <p>{project.dataset}</p>
          </section>

          <section>
            <p className="text-[12px] font-semibold text-[var(--text)] mb-3 uppercase tracking-wider">Analysis</p>
            <p>{project.analysis}</p>
          </section>

          <section>
            <p className="text-[12px] font-semibold text-[var(--text)] mb-3 uppercase tracking-wider">Key Insights</p>
            <ul className="space-y-3">
              {project.insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-[3px] h-[3px] rounded-full bg-[var(--text-muted)] flex-shrink-0 mt-[11px] opacity-50" />
                  {insight}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="text-[12px] font-semibold text-[var(--text)] mb-3 uppercase tracking-wider">Impact</p>
            <p>{project.impact}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-6 mt-16 pt-8 border-t border-[var(--border)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              View on GitHub ↗
            </a>
          )}
          <Link
            href="/projects"
            className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors ml-auto"
          >
            ← All projects
          </Link>
        </div>

      </article>
    </FadeUp>
  );
}
