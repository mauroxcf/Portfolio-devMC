import Image from "next/image";
import type { Project } from "@/data/projects";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/50">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/20 via-surface to-bg">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div aria-hidden className="flex h-full items-center justify-center p-6">
            <span className="font-display text-2xl font-bold text-fg/80 text-center">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-muted">
          {project.role} · {project.year}
        </p>
        <Heading className="mt-2 font-display text-xl font-semibold text-fg">{project.title}</Heading>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.url || project.repo) && (
          <div className="mt-6 flex items-center gap-4 text-sm font-semibold">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:text-accent-strong"
              >
                View live<span className="sr-only"> {project.title} (opens in a new tab)</span>
                <ArrowUpRightIcon width={16} height={16} />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted hover:text-fg"
              >
                <GitHubIcon width={16} height={16} />
                Code<span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
