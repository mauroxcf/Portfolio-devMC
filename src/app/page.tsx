import { LetsTalkButton } from "@/components/LetsTalkButton"
import { ProjectCard } from "@/components/ProjectCard"
import { SectionHeading } from "@/components/SectionHeading"
import { ArrowRightIcon, MapPinIcon } from "@/components/icons"
import { profile, skills } from "@/data/profile"
import { featuredProjects } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"

const coreStack = [
	"React",
	"Next.js",
	"TypeScript",
	"VTEX IO",
	"Node.js",
	"Tailwind CSS",
	"Python",
]

export default function HomePage() {
	return (
		<>
			{/* Hero / summary */}
			<section
				aria-labelledby='hero-title'
				className='relative overflow-hidden'
			>
				<div
					aria-hidden
					className='pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl'
				/>
				<div className='relative mx-auto max-w-5xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28'>
					<p className='inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-medium text-muted'>
						<span className='size-2 rounded-full bg-accent' aria-hidden />
						{profile.availability}
					</p>

					<h1
						id='hero-title'
						className='mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-fg sm:text-6xl'
					>
						Hi, I&apos;m {profile.shortName}.
						<span className='block text-muted'>{profile.role}.</span>
					</h1>

					<p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted'>
						{profile.summary}
					</p>

					<p className='mt-4 inline-flex items-center gap-2 text-sm text-muted'>
						<MapPinIcon width={16} height={16} /> {profile.location}
					</p>

					<div className='mt-10 flex flex-wrap items-center gap-4'>
						<LetsTalkButton size='lg' />
						<Link
							href='/projects'
							className='inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-fg transition-colors hover:border-accent/60'
						>
							View projects <ArrowRightIcon width={18} height={18} />
						</Link>
					</div>

					<ul
						aria-label='Core stack'
						className='mt-14 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted'
					>
						{coreStack.map((tech) => (
							<li key={tech}>{tech}</li>
						))}
					</ul>
				</div>
			</section>

			{/* About */}
			<section
				id='about'
				aria-labelledby='about-title'
				className='border-t border-line/60'
			>
				<div className='mx-auto grid max-w-5xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr]'>
					<div>
						<SectionHeading
							id='about-title'
							eyebrow='About me'
							title='From numbers to code'
						/>
						{profile.photo ? (
							<Image
								src={profile.photo}
								alt={`Portrait of ${profile.name}`}
								width={280}
								height={280}
								className='aspect-square w-full max-w-[280px] rounded-2xl border border-line object-cover'
							/>
						) : (
							<div
								aria-hidden
								className='flex aspect-square w-full max-w-[280px] items-center justify-center rounded-2xl border border-line bg-gradient-to-br from-accent/25 to-surface font-display text-6xl font-bold text-fg'
							>
								{profile.initials}
							</div>
						)}
					</div>

					<div className='space-y-5 text-base leading-relaxed text-muted md:pt-[4.5rem]'>
						{profile.about.map((paragraph) => (
							<p key={paragraph.slice(0, 24)}>{paragraph}</p>
						))}

						<dl className='grid grid-cols-3 gap-4 pt-6'>
							{profile.highlights.map((h) => (
								<div
									key={h.label}
									className='flex flex-col rounded-xl border border-line bg-surface p-4'
								>
									<dt className='text-xs text-muted'>{h.label}</dt>
									<dd className='order-first font-display text-3xl font-bold text-accent'>
										{h.value}
									</dd>
								</div>
							))}
						</dl>

						<div className='pt-4'>
							<h3 className='mb-3 font-display text-sm font-semibold uppercase tracking-wider text-fg'>
								What I work with
							</h3>
							<ul className='flex flex-wrap gap-2'>
								{skills
									.slice(0, 2)
									.flatMap((s) => s.items)
									.map((item) => (
										<li
											key={item}
											className='rounded-full border border-line px-3 py-1 font-mono text-xs'
										>
											{item}
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Featured projects */}
			<section
				aria-labelledby='projects-title'
				className='border-t border-line/60'
			>
				<div className='mx-auto max-w-5xl px-5 py-20 sm:px-8'>
					<div className='flex flex-wrap items-end justify-between gap-4'>
						<SectionHeading
							id='projects-title'
							eyebrow='Selected work'
							title='Featured projects'
						/>
						<Link
							href='/projects'
							className='mb-10 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong'
						>
							All projects <ArrowRightIcon width={16} height={16} />
						</Link>
					</div>
					<ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{featuredProjects.map((project) => (
							<li key={project.slug}>
								<ProjectCard project={project} />
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* CTA */}
			<section aria-labelledby='cta-title' className='border-t border-line/60'>
				<div className='mx-auto max-w-5xl px-5 py-20 text-center sm:px-8'>
					<h2
						id='cta-title'
						className='font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl'
					>
						Have a project or a role in mind?
					</h2>
					<p className='mx-auto mt-4 max-w-xl text-muted'>
						I&apos;m open to remote opportunities as a Technical Lead or
						Front-end Developer. Let&apos;s connect on LinkedIn.
					</p>
					<LetsTalkButton size='lg' className='mt-8' />
				</div>
			</section>
		</>
	)
}
