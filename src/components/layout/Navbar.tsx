"use client";

import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Hardware", href: "#products" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled
          ? "bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Three Section Layout: Logo Left | Nav Center (FROSTED) | CTA Right */}
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo - Left (NO Background) */}
          <Link
            href="/"
            className="shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo/logo.jpeg"
              alt="Balance Bytes"
              width={120}
              height={40}
              priority
              className="h-14 w-auto object-contain rounded-xl"
            />
          </Link>

          {/* Navigation - Center (FROSTED GLASS PILL) */}
          <nav className={`hidden items-center gap-6 rounded-full border px-8 py-3 backdrop-blur-xl lg:flex transition-all duration-300 ${scrolled
              ? "border-white/20 bg-primary/50"
              : "border-white/15 bg-primary/35"
            }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Right (Solid Color) */}
          <div className="shrink-0">
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary-blue px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-blue/25 whitespace-nowrap"
            >
              <Phone size={16} />
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button - Right */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg border border-white/15 bg-primary/30 p-2 text-white transition-colors hover:bg-primary-blue lg:hidden shrink-0"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/10 px-4 pb-4 mt-2 rounded-2xl border bg-primary/35 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-white/10 py-3 text-sm font-medium text-white/80 transition-colors last:border-0 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary-blue/25"
              >
                <Phone size={16} />
                Get In Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}