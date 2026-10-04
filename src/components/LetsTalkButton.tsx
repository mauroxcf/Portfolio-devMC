import { profile } from "@/data/profile";
import { LinkedInIcon } from "./icons";

type Props = {
  size?: "sm" | "lg";
  className?: string;
};

export function LetsTalkButton({ size = "sm", className = "" }: Props) {
  const sizing = size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm";

  return (
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Let's talk — message me on LinkedIn (opens in a new tab)"
      className={`inline-flex items-center gap-2 rounded-full bg-accent font-semibold text-accent-ink transition-colors hover:bg-accent-strong ${sizing} ${className}`}
    >
      <LinkedInIcon width={size === "lg" ? 18 : 16} height={size === "lg" ? 18 : 16} />
      Let&apos;s talk
    </a>
  );
}
