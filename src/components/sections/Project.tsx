// components/sections/Project.tsx
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Project() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Projects" subtitle="Things I’ve built" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Project Title
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Short description of the project highlighting tech stack and
                purpose.
              </p>

              <div className="mt-4 flex gap-3">
                <Button variant="secondary">GitHub</Button>
                <Button variant="ghost">Live</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
