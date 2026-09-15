"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "../lib/animation";

const highlights = [
  "Certified hardware installation experts",
  "Genuine, quality-tested equipment",
  "On-site setup at your convenience",
  "Post-setup support included",
];

export default function AboutUs() {
  return (
    <section id="about-us" className="relative bg-section-light py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Decorative Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute right-[5%] bottom-[10%] -z-10 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2 text-xs sm:text-sm font-semibold text-primary-blue">
                Who Is Balance Bytes
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-primary"
            >
              Trusted Hardware
              <span className="block text-primary-blue">Setup Experts.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 text-muted">
              At Balance Bytes, we specialize in professional hardware setup for businesses — from single desktop installations to complete office and server rollouts. Our team handles everything on-site, so you get a clean, reliable setup without the hassle.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={fadeUp} className="mt-6 sm:mt-8 space-y-3">
              {highlights.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 text-primary-blue" />
                  <span className="text-xs sm:text-sm font-medium text-primary">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-blue/25"
              >
                Get Started
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="relative h-[440px] sm:h-[540px] lg:h-[600px] w-full max-w-[480px] mx-auto"
          >
            {/* Top Right Image — plain photo, needs clip-path + grayscale */}
            <motion.div
              variants={fadeUp}
              className="absolute top-0 right-0 w-[72%] z-10"
              style={{
                clipPath: "polygon(0% 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, 0% 100%)",
              }}
            >
              <div className="overflow-hidden rounded-[30px]">
                <Image
                  src="/about/about-1.png"
                  alt="Team member at desk"
                  width={600}
                  height={620}
                  className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover grayscale"
                  priority
                />
              </div>
            </motion.div>

            {/* Bottom Left Image — shape already baked into PNG, no clip-path */}
            <motion.div
              variants={fadeUp}
              className="absolute bottom-0 left-0 w-[58%] z-20"
            >
              <Image
                src="/about/about-5.png"
                alt="Team collaboration"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Decorative Dots */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 right-4 z-0"
            >
              <div className="grid grid-cols-9 gap-2.5">
                {Array.from({ length: 54 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-blue/60" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}