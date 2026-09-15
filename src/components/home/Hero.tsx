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
    <section className="relative isolate overflow-hidden bg-primary flex items-center py-24 md:py-28 lg:py-32 lg:min-h-screen">
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

      <div className="absolute inset-0 -z-10 bg-primary/30" />

      <div className="absolute inset-0 -z-10 bg-linear-to-r from-primary via-primary/70 to-primary/10" />


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-[8%] top-[20%] -z-10 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-primary-blue/20 blur-3xl"
      />


      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl ml-0 sm:ml-6 lg:ml-10"
        >

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight text-white"
          >
            Complete Hardware
            <span className="block text-primary-blue">
              Setup Solutions.
            </span>
          </motion.h1>


          <motion.p
            variants={fadeUp}
            className="mt-3 sm:mt-6 max-w-xl text-xs sm:text-base leading-6 text-white/80"
          >
            Desktop, server, and network hardware installation for your office — plus hardware sales when you need it.
          </motion.p>


          <motion.div
            variants={fadeUp}
            className="mt-5 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 lg:gap-5"
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.name}
                  whileHover={{ scale: 1.05 }}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white/90 transition-all duration-300 hover:border-primary-blue/40 hover:bg-primary-blue/10 hover:text-white cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="shrink-0"
                  >
                    <IconComponent size={14} className="sm:w-4 sm:h-4 text-primary-blue/70 group-hover:text-primary-blue transition-colors" />
                  </motion.div>
                  <span className="hidden sm:inline">{service.name}</span>
                  {/* Abbreviated text for mobile */}
                  <span className="sm:hidden">
                    {service.name.split(" ")[0]}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>


          <motion.div
            variants={fadeUp}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:w-auto"
          >

            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-blue/25 w-full sm:w-auto whitespace-nowrap"
            >
              Get Quote
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 hidden sm:inline"
              />
            </Link>

            <Link
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-primary/30 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary/50 w-full sm:w-auto whitespace-nowrap"
            >
              Browse Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}