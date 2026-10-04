import type { Metadata } from "next";
import { LetsTalkButton } from "@/components/LetsTalkButton";
import { SectionHeading } from "@/components/SectionHeading";
import { DownloadIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { education, experience, languages, profile, skills } from "@/data/profile";
import { formatMonth, pageMetadata } from "@/lib/site";

const description = `Resume of ${profile.name}, ${profile.role}. Experience leading VTEX IO e-commerce teams, building with React, TypeScript and Node.js.`;

export const metadata: Metadata = pageMetadata({ title: "Resume", description, path: "/resume" });

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="flex flex-col justify-between gap-6 border-b border-line/60 pb-10 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">Resume</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">{profile.name}</h1>
          <p className="mt-2 text-lg text-muted">{profile.role}</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <li className="inline-flex items-center gap-2">
              <MapPinIcon width={16} height={16} /> {profile.location} · {profile.availability}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-fg">
                <MailIcon width={16} height={16} /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-fg"
              >
                <LinkedInIcon width={16} height={16} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          {profile.resumePdf && (
            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-fg hover:border-accent/60"
            >
              <DownloadIcon width={16} height={16} /> Download CV
            </a>
          )}
          <LetsTalkButton />
        </div>
      </header>

      <div className="grid gap-16 pt-14 lg:grid-cols-[2fr_1fr]">
        <section aria-labelledby="experience-title">
          <SectionHeading id="experience-title" eyebrow="Career" title="Experience" />
          <ol className="relative space-y-12 border-l border-line pl-8">
            {experience.map((job) => (
              <li key={`${job.company}-${job.start}`} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-accent bg-bg"
                />
                <p className="font-mono text-xs text-muted">
                  <time dateTime={job.start}>{formatMonth(job.start)}</time> —{" "}
                  {job.end ? <time dateTime={job.end}>{formatMonth(job.end)}</time> : "Present"}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-fg">{job.role}</h3>
                <p className="text-accent">{job.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent/70">
                  {job.highlights.map((h) => (
                    <li key={h.slice(0, 32)}>{h}</li>
                  ))}
                </ul>
                <ul aria-label="Tech used" className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <aside className="space-y-12">
          <section aria-labelledby="skills-title">
            <h2 id="skills-title" className="mb-5 font-display text-2xl font-bold text-fg">Skills</h2>
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.group}>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-fg">{group.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-full bg-surface px-2.5 py-1 text-xs text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="education-title">
            <h2 id="education-title" className="mb-5 font-display text-2xl font-bold text-fg">Education</h2>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-semibold text-fg">{e.school}</p>
                  <p className="text-sm text-muted">{e.degree}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="languages-title">
            <h2 id="languages-title" className="mb-5 font-display text-2xl font-bold text-fg">Languages</h2>
            <dl className="space-y-2 text-sm">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between border-b border-line/60 pb-2">
                  <dt className="text-fg">{l.name}</dt>
                  <dd className="text-muted">{l.level}</dd>
                </div>
              ))}
            </dl>
          </section>
        </aside>
      </div>
    </div>
  );
}
