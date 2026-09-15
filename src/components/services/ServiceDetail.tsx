"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation";
import { Service } from "@/components/data/services-data";
import { iconMap } from "@/components/data/icon-map";

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-5">
              <Icon size={28} />
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-primary">
              {service.name}
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-sm sm:text-base leading-7 text-muted">
              {service.details}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{
              clipPath: "polygon(0% 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, 0% 100%)",
            }}
          >
            <div className="overflow-hidden rounded-[15px]">
              <Image
                src={service.image}
                alt={service.name}
                width={600}
                height={500}
                className="w-full h-[320px] sm:h-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}