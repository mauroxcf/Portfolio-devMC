import { profile } from "@/data/profile";
import { LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-fg"
            >
              <LinkedInIcon width={16} height={16} />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-fg"
            >
              <MailIcon width={16} height={16} />
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
