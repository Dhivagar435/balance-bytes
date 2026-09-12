"use client";

import { ArrowRight, Wrench, HardDrive, Network, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { fadeUp, staggerContainer } from "../lib/animation";

const services = [
  { name: "Hardware Installation", icon: Wrench },
  { name: "Office Setup", icon: LayoutGrid },
  { name: "Server Setup", icon: HardDrive },
  { name: "Network Setup", icon: Network },

];

export default function Hero() {
  return (
    <section className="relative isolate h-screen overflow-hidden bg-primary flex items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Main Overlay */}
      <div className="absolute inset-0 -z-10 bg-primary/45" />

      {/* Left Content Protection */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/10" />

      {/* Decorative Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-[8%] top-[20%] -z-10 h-72 w-72 rounded-full bg-primary-blue/20 blur-3xl"
      />

      {/* Hero Content - CHANGE THIS LINE */}
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl ml-10 lg:ml-20"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="mt-5 mb-3  inline-flex"
            >
              <span className="relative inline-flex items-center gap-3 rounded-full border border-primary-blue/30 bg-gradient-to-r from-primary-blue/15 via-primary-blue/10 to-primary-blue/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl shadow-lg shadow-primary-blue/20 hover:border-primary-blue/50 hover:shadow-2xl hover:shadow-primary-blue/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Animated Background Glow */}
                <motion.div
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue/10 to-transparent -z-10 blur-xl"
                />

   
                {/* Main Text */}
                <span className="relative z-10">
                  <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent font-semibold">
                    Hardware Solutions
                  </span>
                </span>

                <motion.svg
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 text-primary-blue/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </span>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-2xl text-5xl font-bold leading-[1.2] tracking-tight text-white sm:text-6xl"
          >
            Complete Hardware
            <span className="block text-primary-blue">
              Setup Solutions.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-6 text-white/80"
          >
            Desktop, server, and network hardware installation for your office — plus hardware sales when you need it.
          </motion.p>

          {/* Service Offerings */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-5">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.name}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition-all duration-300 hover:border-primary-blue/40 hover:bg-primary-blue/10 hover:text-white cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="flex-shrink-0"
                  >
                    <IconComponent size={16} className="text-primary-blue/70 group-hover:text-primary-blue transition-colors" />
                  </motion.div>
                  <span>{service.name}</span>
                </motion.div>
              );
            })}
          </motion.div>



          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            {/* Primary CTA */}
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-blue/25 w-full sm:w-auto"
            >
              Get Quote

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-primary/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary/50 w-full sm:w-auto"
            >
              Browse Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}