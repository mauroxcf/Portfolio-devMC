import type { Metadata } from "next";
import { LetsTalkButton } from "@/components/LetsTalkButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { pageMetadata, siteUrl } from "@/lib/site";

const description = `Projects by ${profile.shortName}: e-commerce storefronts on VTEX IO, retail media for Walmart Central America, and web applications built with React and TypeScript.`;

export const metadata: Metadata = pageMetadata({ title: "Projects", description, path: "/projects" });

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Projects | ${profile.shortName}`,
  url: `${siteUrl}/projects`,
  hasPart: projects.map((p) => ({
    "@type": "CreativeWork",
    name: p.title,
    description: p.description,
    ...(p.url && { url: p.url }),
    author: { "@type": "Person", name: profile.name },
  })),
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Portfolio"
        title="Projects"
        description="A selection of products I've built and led — from large-scale e-commerce storefronts to web apps built from scratch."
      />

      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} headingLevel="h2" />
          </li>
        ))}
      </ul>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-xl font-semibold text-fg">Want to build something together?</p>
          <p className="mt-1 text-sm text-muted">I&apos;m open to remote roles and collaborations.</p>
        </div>
        <LetsTalkButton size="lg" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}
