"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation";
import { Service } from "@/components/data/services-data";
import { iconMap } from "@/components/data/icon-map";

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Decorative glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        className="absolute left-[5%] top-[10%] -z-10 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
              <span className="h-2 w-2 rounded-sm bg-primary-blue" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-primary-blue uppercase">
                Service Details
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-5"
            >
              <Icon size={28} />
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
              {service.name}
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-3 h-1 w-16 rounded-full bg-primary-blue" />

            <motion.p variants={fadeUp} className="mt-5 text-sm sm:text-base leading-7 text-muted">
              {service.details}
            </motion.p>
          </motion.div>

          {/* Image Cluster */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="relative h-[380px] sm:h-[440px] lg:h-[480px] w-full max-w-[480px] mx-auto"
          >
            {/* Main image — chamfered top-right and bottom-left */}
            <motion.div
              variants={fadeUp}
              className="absolute inset-0 z-10"
              style={{
                clipPath:
                  "polygon(0% 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, 50px 100%, 0% calc(100% - 50px))",
              }}
            >
              <div className="overflow-hidden rounded-[15px] h-full">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Decorative dots */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 z-0"
            >
              <div className="grid grid-cols-6 gap-2.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary-blue/40" />
                ))}
              </div>
            </motion.div>

            {/* Accent ring behind top-left */}
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full border-4 border-primary-blue/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}