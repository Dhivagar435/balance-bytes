import Link from "next/link";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import Image from "next/image";

const productLinks = [
    { label: "Computers", href: "#products" },
    { label: "Processors", href: "#products" },
    { label: "Motherboards", href: "#products" },
    { label: "Graphics Cards", href: "#products" },
    { label: "Memory & Storage", href: "#products" },
    { label: "Accessories", href: "#products" },
];

const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Brands", href: "#brands" },
    { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2">
                            <Image
                                src="/logo/logo.jpeg"
                                alt="Balance Bytes"
                                width={160}
                                height={50}
                                priority
                                className="h-20 w-auto object-contain rounded-xl"
                            />
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-6 text-blue-100">
                            Your trusted destination for computers, hardware components,
                            peripherals and technology accessories.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                            >
                                <FaFacebook size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                            >
                                <FaInstagram size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                            >
                                <FaLinkedin size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">
                            Products
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-blue-100 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex items-center gap-1 text-sm text-blue-100 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                        <ArrowUpRight size={13} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">
                            Contact
                        </h3>

                        <ul className="mt-5 space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 shrink-0 text-blue-300" size={18} />

                                <span className="text-sm leading-6 text-blue-100">
                                    Singapore
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-blue-300" size={18} />

                                <a
                                    href="tel:+6500000000"
                                    className="text-sm text-blue-100 transition-colors hover:text-white"
                                >
                                    +65 XXXX XXXX
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-blue-300" size={18} />

                                <a
                                    href="mailto:info@balancebytes.com"
                                    className="text-sm text-blue-100 transition-colors hover:text-white"
                                >
                                    info@balancebytes.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p className="text-blue-200">
                        © {new Date().getFullYear()} Balance Bytes. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <Link
                            href="#"
                            className="text-blue-200 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="text-blue-200 transition-colors hover:text-white"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}