import { projects } from "@/lib/projects"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Featured Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A selection of data engineering projects showcasing pipeline
            architecture, cloud solutions, and data transformation workflows.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
