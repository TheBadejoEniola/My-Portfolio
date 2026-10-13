import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Work",
  description: "Data analysis case studies and projects by Badejo Eniola.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <FadeUp>
      <div className="max-w-[800px] mx-auto px-6 pt-12 pb-16">
        <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--text)] mb-1">
          Work
        </h1>
        <p className="text-[14px] text-[var(--text-muted)] mb-12">
          Data analysis case studies — from identifying the problem to delivering measurable impact.
        </p>

        {/* Featured projects */}
        <section className="mb-12">
          <p className="text-[16px] font-medium text-[var(--text)] mb-5">Featured</p>
          <div className="flex flex-col gap-3">
            {featured.map((project) => (
              <div key={project.slug} className="h-[300px]">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Other projects */}
        {others.length > 0 && (
          <section>
            <p className="text-[16px] font-medium text-[var(--text)] mb-5">Other projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {others.map((p) => (
                <div key={p.slug} className="h-[240px]">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </FadeUp>
  );
}
