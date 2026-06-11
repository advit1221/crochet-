import { Link } from "@tanstack/react-router";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Shop", to: "/#shop" },
    { label: "Custom", to: "/custom" },
    { label: "Gallery", to: "/#gallery" },
    { label: "FAQ", to: "/#faq" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/75 border-b border-border/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-12">
            <Heart className="h-4 w-4 fill-current" />
          </span>
          <span className="font-display text-xl text-ink">Crochet Business</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.to} className="text-sm text-ink/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:scale-105 transition-transform"
        >
          Message us
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-cream px-5 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              onClick={() => setOpen(false)}
              className="block text-base text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/919999999999"
            className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Message us
          </a>
        </div>
      )}
    </header>
  );
}
