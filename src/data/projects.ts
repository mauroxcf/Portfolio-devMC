export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  // Link to the deployed project. Cards hide the button when this is missing.
  url?: string;
  repo?: string;
  // Optional cover in /public (e.g. /projects/datarte.webp, 1200x750 recommended).
  image?: string;
  featured?: boolean;
};

// TODO: add the live URLs (and repos/images if you have them) for each project.
export const projects: Project[] = [
  {
    slug: "walmart-connect-retail-media",
    title: "Walmart Connect — Retail Media",
    description:
      "Sponsored products and retail media solutions for Walmart Central America's VTEX IO storefronts, integrated with Criteo's ad services.",
    role: "Technical Lead",
    year: "2025 — 2026",
    stack: ["VTEX IO", "React", "Node.js", "Criteo"],
    featured: true,
  },
  {
    slug: "vtex-io-stores",
    title: "VTEX IO E-commerce Stores",
    description:
      "Storefronts and custom components for Cencosud Jumbo, Elektra Mexico, Repuestodo Chile, Tienda Juntos, Juriscoop and Coovitel — including SEO and analytics setup.",
    role: "Front-end Developer",
    year: "2022 — 2025",
    stack: ["VTEX IO", "React", "TypeScript", "GTM"],
    featured: true,
  },
  {
    slug: "datarte",
    title: "DAtarte",
    description:
      "Web application built from scratch by a three-developer team to digitize and catalog artworks.",
    role: "Front-end Developer",
    year: "2021 — 2022",
    stack: ["React", "Tailwind CSS", "Python", "Flask"],
    featured: true,
  },
  {
    slug: "cityrelay",
    title: "CityRelay Metrics & Templates",
    description:
      "WordPress/Gatsby templates and a metrics interface for CityRelay and CityRelay Solutions.",
    role: "Front-end Developer",
    year: "2021 — 2022",
    stack: ["Gatsby", "WordPress", "React"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
