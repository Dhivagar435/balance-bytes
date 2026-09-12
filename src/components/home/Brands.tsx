"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation";

const brands = [
  { name: "Dell", logo: "/brands/brand-1.jpeg" },
  { name: "HP", logo: "/brands/brand-2.jpeg" },
  { name: "Lenovo", logo: "/brands/brand-7.jpeg" },
  { name: "Cisco", logo: "/brands/brand-4.jpeg" },
  { name: "TP-Link", logo: "/brands/brand-5.jpeg" },
  { name: "Logitech", logo: "/brands/brand-6.jpeg" },
  { name: "Asus", logo: "/brands/brand-7.jpeg" },
  { name: "Seagate", logo: "/brands/brand-8.jpeg" },
];

export default function Brands() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Decorative Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute right-[10%] top-[10%] -z-10 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2 text-sm font-semibold text-primary-blue">
              Trusted Partners
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl"
          >
            Brands We Work With
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-base leading-6 text-muted">
            We source and install hardware only from trusted, industry-leading brands.
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 w-full">
        {/* Fade edges (left/right) so scroll looks seamless, not cut off */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-6 pr-6">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="group flex h-28 w-48 flex-shrink-0 items-center justify-center rounded-2xl border border-border bg-section-light p-6 transition-all duration-300 hover:border-primary-blue/40 hover:bg-background hover:shadow-lg hover:shadow-primary-blue/10"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={48}
                  className="h-10 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Duplicate track for seamless infinite loop */}
          <div className="flex shrink-0 animate-marquee gap-6 pr-6" aria-hidden="true">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`dup-${brand.name}-${i}`}
                className="group flex h-28 w-48 flex-shrink-0 items-center justify-center rounded-2xl border border-border bg-section-light p-6 transition-all duration-300 hover:border-primary-blue/40 hover:bg-background hover:shadow-lg hover:shadow-primary-blue/10"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={48}
                  className="h-10 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}