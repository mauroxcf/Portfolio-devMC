import type { Metadata } from "next";
import { profile } from "@/data/profile";

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");

export const siteDescription = `${profile.role} based in ${profile.location}. ${profile.headline}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
] as const;

export function formatMonth(value: string | null) {
  if (!value) return "Present";
  const [year, month] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1)).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${profile.shortName} — ${profile.role}`,
};

// Child routes that set `openGraph` replace the parent's object entirely,
// so every page goes through here to keep the shared OG/Twitter image.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const fullTitle = `${title} | ${profile.shortName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: profile.shortName, title: fullTitle, description, url: path, images: [ogImage] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage] },
  };
}
