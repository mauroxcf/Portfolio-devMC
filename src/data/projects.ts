export type Project = {
  slug: string;
  category: "professional" | "personal";
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
    category: "professional",
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
    category: "professional",
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
    category: "professional",
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
    category: "professional",
    slug: "cityrelay",
    title: "CityRelay Metrics & Templates",
    description:
      "WordPress/Gatsby templates and a metrics interface for CityRelay and CityRelay Solutions.",
    role: "Front-end Developer",
    year: "2021 — 2022",
    stack: ["Gatsby", "WordPress", "React"],
  },
  {
    category: "personal",
    slug: "fundamentals-store",
    title: "Fundamentals Store",
    description:
      "Sample e-commerce with a home page, product listing with shareable URL filters, product detail pages and a shopping cart. Built to be easy to read, extend and fast, with lazy-loaded routes.",
    role: "Personal project",
    year: "2026",
    stack: ["React 19", "React Router", "Tailwind CSS v4", "Vite"],
    url: "https://reactecommercefundamentalsfrontend.vercel.app/",
    repo: "https://github.com/mauroxcf/React_Ecommerce_fundamentals_frontend",
  },
  {
    category: "personal",
    slug: "luki",
    title: "Luki",
    description:
      "Android app to find and post rentals on a real-time Google Map, without intermediaries. Built by a four-developer team at Holberton School.",
    role: "Mobile Developer",
    year: "2021",
    stack: ["Kotlin", "Android", "Google Maps API"],
    repo: "https://github.com/mauroxcf/Luki",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const professionalProjects = projects.filter((p) => p.category === "professional");
export const personalProjects = projects.filter((p) => p.category === "personal");
