"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-800/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/herologobluerecreation.png"
            alt="Heroic Logistics"
            width={220}
            height={70}
            priority
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-navy-800 transition-colors hover:text-accent-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-500"
          >
            Get a Quote
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-navy-900" />
          <span className="h-0.5 w-6 bg-navy-900" />
          <span className="h-0.5 w-6 bg-navy-900" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy-800/10 bg-white px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-semibold uppercase tracking-wide text-navy-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-navy-900 px-5 py-2.5 text-center text-sm font-bold uppercase tracking-wide text-white"
          >
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}
