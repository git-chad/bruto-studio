import Hero from "@/components/sections/hero";
import Highlight from "@/components/sections/highlight";
import Projects from "@/components/sections/projects";
import RecentProjects from "@/components/sections/recent";

export default async function Index() {
  return (
    <main className="min-w-full flex flex-col bg-neutral-900 text-neutral-100">
      <Hero />
      <RecentProjects />
      <Highlight />
      <Projects />
    </main>
  );
}
