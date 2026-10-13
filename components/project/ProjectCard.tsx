import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const statusDot: Record<Project["status"], string> = {
  live: "bg-green-400",
  "in-progress": "bg-yellow-400 animate-pulse",
  archived: "bg-white/40",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;

  return (
    <Link
      href={href}
      className="group relative block rounded-2xl overflow-hidden h-full min-h-[220px] border border-[var(--border)]"
      style={{ background: project.image ? undefined : (project.color ?? "#1a1a1a") }}
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
          background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${statusDot[project.status]}`} />
            <p className="text-[15px] font-medium text-white leading-snug truncate">
              {project.title}
              {project.isNew && (
                <span className="ml-1.5 text-[11px] font-medium text-blue-300">New</span>
              )}
            </p>
          </div>
          <p className="text-[12px] text-white/65 leading-[1.5] line-clamp-1">
            {project.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}
