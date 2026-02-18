"use client"

import { useState } from "react"
import Image from "next/image"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    )

  return (
    <div className="glass group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      {/* Image gallery */}
      <div className="relative aspect-video w-full overflow-hidden bg-secondary">
        <Image
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImage
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-foreground/40"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="mb-1 text-xl font-bold text-foreground">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-primary">{project.aim}</p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
