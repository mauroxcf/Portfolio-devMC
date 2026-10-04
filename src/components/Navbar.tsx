"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";
import { profile } from "@/data/profile";
import { LetsTalkButton } from "./LetsTalkButton";
import { CloseIcon, MenuIcon } from "./icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-fg"
          aria-label={`${profile.shortName} — home`}
        >
          {profile.initials}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="text-sm font-medium text-muted transition-colors hover:text-fg aria-[current=page]:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LetsTalkButton />
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-fg hover:bg-surface md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line/60 bg-bg px-5 pb-6 pt-2 md:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-muted hover:text-fg aria-[current=page]:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <LetsTalkButton className="mt-3" />
      </div>
    </header>
  );
}
