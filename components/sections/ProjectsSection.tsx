import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

function BentoCard({
  project,
  label,
}: {
  project: (typeof projects)[number];
  label: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={label}
      className="relative block rounded-2xl overflow-hidden group h-full"
      style={{ background: project.image ? undefined : project.color }}
    >
      {/* Image */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      )}

      {/* Gradient scrim */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 15%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Category tag */}
      <div className="absolute top-4 left-4">
        <span className="px-2 py-0.5 text-[10px] font-medium text-white/60 border border-white/15 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Title + tagline bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
        <p className="text-[15px] font-medium text-white leading-snug">
          {project.title}
        </p>
        <p className="text-[12px] text-white/70 mt-0.5 leading-[1.5] line-clamp-1">
          {project.tagline}
        </p>
        {project.metrics[0] && (
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-[17px] font-bold text-white/90 tracking-tight">
              {project.metrics[0].value}
            </span>
            <span className="text-[10px] text-white/40 font-medium">
              {project.metrics[0].label}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

const featured = projects.filter((p) => p.featured);

export function ProjectsSection() {
  return (
    <section className="max-w-[800px] mx-auto px-6 pb-16">
      <p className="text-[16px] font-medium text-[var(--text)] mb-5">Projects</p>

      <div className="flex flex-col gap-3">
        {featured.map((project) => (
          <div key={project.slug} className="h-[300px]">
            <BentoCard
              project={project}
              label={`${project.title} – ${project.tagline}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Link
          href="/projects"
          className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          See all projects →
        </Link>
      </div>
    </section>
  );
}
