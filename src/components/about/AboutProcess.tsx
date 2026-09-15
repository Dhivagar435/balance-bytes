"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation";

const steps = [
  {
    number: "01",
    image: "/about/about-process-1.jpg",
    title: "Site Assessment",
    description: "We visit your site to understand space, power, and network requirements before recommending hardware.",
  },
  {
    number: "02",
    image: "/about/about-process-2.jpg",
    title: "Sourcing & Installation",
    description: "We source genuine, quality-tested equipment and install it on-site at a time that works for you.",
  },
  {
    number: "03",
    image: "/about/about-process-3.jpg",
    title: "Testing & Ongoing Support",
    description: "Every setup is tested before handover, with post-setup support available whenever issues come up.",
  },
];

export default function AboutProcess() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-sm bg-primary-blue" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-primary-blue">
              WORKING PROCESS
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Get Your Hardware Set Up in 3 Easy Steps
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="text-center">
              <div className="relative inline-block">
                <div
                  className="overflow-hidden w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto"
                  style={{
                    clipPath: "polygon(0% 0%, calc(100% - 24px) 0%, 100% 24px, 100% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 flex items-center justify-center w-9 h-9 rounded-full bg-primary-blue text-white text-xs font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-primary-blue">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}