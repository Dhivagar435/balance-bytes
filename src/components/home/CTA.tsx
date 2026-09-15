"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "../lib/animation";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24  mb-10 bg-primary overflow-hidden">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute right-[10%] top-1/2 -translate-y-1/2 -z-10 h-80 w-80 rounded-full bg-primary-blue/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-8"
        >
          <motion.div variants={fadeUp} className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Ready to Set Up Your Office Hardware?
            </h2>
            <p className="mt-3 text-base leading-6 text-white/80">
              Get in touch with us today and let&apos;s discuss your requirements. Quick response, on-site setup, quality equipment.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-blue/25"
            >
              Get In Touch
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="tel:+919876543210"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-white/10"
            >
              <Phone size={16} />
              Call Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}