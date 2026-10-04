import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-32 text-center sm:px-8">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-fg">Page not found</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or was moved.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink hover:bg-accent-strong"
      >
        Back to home
      </Link>
    </div>
  );
}
