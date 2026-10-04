export const profile = {
  name: "Mauricio Contreras Fernandez",
  shortName: "Mauricio Contreras",
  initials: "MC",
  role: "Technical Lead & Front-end Developer",
  location: "Bogotá, Colombia",
  availability: "Open to remote work",
  email: "mcontrerasf03@gmail.com",
  linkedin: "https://www.linkedin.com/in/mauricio-contrerasf",
  // Drop a square photo in /public (e.g. /profile.jpg) and set the path here.
  photo: null as string | null,
  // Drop your CV PDF in /public (e.g. /cv-mauricio-contreras.pdf) and set the path here.
  resumePdf: null as string | null,
  headline:
    "I build fast, accessible e-commerce and web experiences — and lead the teams that ship them.",
  summary:
    "Technical Lead and Front-end Developer with 5+ years of experience building e-commerce and web applications with React, TypeScript and VTEX IO. I've led retail media implementations for Walmart Central America, built stores for brands like Cencosud Jumbo and Elektra Mexico, and enjoy bridging business needs with clean, maintainable code.",
  about: [
    "My path into software started in an unusual place: I'm a Certified Public Accountant by training. That background taught me to think in systems, care about details, and understand how the business side really works — something I bring to every project.",
    "After training as a Full-Stack Developer at Holberton School, I focused on the front end: React, TypeScript and component-driven design. Over the last years I've specialized in e-commerce on VTEX IO, from building stores from the ground up to custom components, SEO and analytics.",
    "Today I lead development teams, helping developers get unblocked, aligning technical work with business priorities, and collaborating with partners like Walmart and Criteo on integrations and architecture.",
  ],
  highlights: [
    { value: "4+", label: "years building for the web" },
    { value: "4", label: "e-commerce brands shipped" },
    { value: "4", label: "LATAM markets served" },
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Binario",
    role: "Technical Lead — Walmart Connect Central America",
    start: "2025-10",
    end: "2026-08",
    highlights: [
      "Led a team responsible for implementing and supporting retail media solutions, including sponsored products, for Walmart Central America on VTEX IO.",
      "Provided technical leadership to developers, resolving questions, blockers and resource needs.",
      "Managed tickets and aligned technical work with business requirements and team priorities.",
      "Participated in architecture discussions and integrations with Walmart and Criteo teams, contributing expertise in VTEX IO, React, CSS and Node.js.",
      "Coordinated requirements, adjustments and changes to integration services with Walmart and Criteo.",
      "Facilitated communication between business and development teams throughout the development cycle and agile ceremonies.",
    ],
    stack: ["VTEX IO", "React", "Node.js", "CSS", "Criteo"],
  },
  {
    company: "ITGlobers",
    role: "Front-end Developer — E-commerce / VTEX IO",
    start: "2022-08",
    end: "2025-10",
    highlights: [
      "Developed and maintained e-commerce solutions on VTEX IO for Juriscoop, Coovitel, Tienda Juntos, Repuestodo Chile, Cencosud Jumbo and Elektra Mexico.",
      "Built stores from the ground up and enhanced existing implementations.",
      "Designed and customized functionality with React and TypeScript within the VTEX IO ecosystem, including product cards and client-specific features.",
      "Implemented SEO improvements and configured Google Tag Manager to support visibility, measurement and performance.",
      "Worked in agile teams with bi-weekly sprints.",
    ],
    stack: ["VTEX IO", "React", "TypeScript", "SEO", "Google Tag Manager"],
  },
  {
    company: "itlookssimple",
    role: "Front-end Developer",
    start: "2021-07",
    end: "2022-07",
    highlights: [
      "Part of a three-developer team that built DAtarte from scratch, a web application for digitizing artworks.",
      "Developed front-end features with React and Tailwind CSS, and supported back-end development with Python and Flask.",
      "Created WordPress/Gatsby templates and a metrics interface for CityRelay and CityRelay Solutions.",
      "Worked under agile methodologies with bi-weekly sprints.",
    ],
    stack: ["React", "Tailwind CSS", "Python", "Flask", "Gatsby", "WordPress"],
  },
];

export const education = [
  { school: "Holberton School", degree: "Full-Stack Developer" },
  { school: "Universidad Libre de Cartagena", degree: "Certified Public Accountant" },
];

export const skills = [
  {
    group: "Front-end",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Gatsby",
      "React Native",
      "HTML",
      "CSS",
      "Sass",
      "Tailwind CSS",
      "Storybook",
    ],
  },
  {
    group: "E-commerce",
    items: ["VTEX IO", "SEO", "Google Tag Manager", "Retail media"],
  },
  {
    group: "Back-end",
    items: ["Node.js", "Express", "Python", "Flask", "MySQL", "SQL", "REST APIs"],
  },
  {
    group: "Practices",
    items: [
      "Git",
      "Atomic Design",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Debugging",
      "Agile / Scrum",
      "Technical leadership",
    ],
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2 — Intermediate" },
];
