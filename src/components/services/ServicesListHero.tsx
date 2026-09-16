"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesListHero() {
  return (
    <section className="relative h-105 md:h-120 flex items-center overflow-hidden">
      <Image
        src="/services/service-banner-1.webp"
        alt="Our services"
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-white/80"
        >
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-primary-blue">SERVICES</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
        >
          Our Services
        </motion.h1>
      </div>
    </section>
  );
}