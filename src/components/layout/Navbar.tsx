"use client";

import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "Brands", href: "#brands" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <Image
                        src="/logo/logo.jpeg"
                        alt="Balance Bytes"
                        width={160}
                        height={50}
                        priority
                        className="h-28 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary-blue"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-blue hover:shadow-lg hover:shadow-primary-blue/20"
                    >
                        <Phone size={16} />
                        Get In Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="rounded-lg p-2 text-primary transition-colors hover:bg-section-blue lg:hidden"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t border-border bg-white lg:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-border py-3 text-sm font-medium text-slate-600 transition-colors last:border-0 hover:text-primary-blue"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-blue"
                        >
                            <Phone size={16} />
                            Get In Touch
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}