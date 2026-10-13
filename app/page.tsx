import { HeaderBio } from "@/components/sections/HeaderBio";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FadeUp } from "@/components/ui/FadeUp";

export default function HomePage() {
  return (
    <>
      <FadeUp delay={0}>
        <HeaderBio />
      </FadeUp>
      <FadeUp delay={0.1}>
        <ProjectsSection />
      </FadeUp>
      <FadeUp>
        <ExperienceSection />
      </FadeUp>
    </>
  );
}
