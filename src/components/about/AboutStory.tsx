"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, Headset } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "../lib/animation";

export default function AboutStory() {
  return (
    <section className="relative bg-section-light py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo cluster */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="relative h-[440px] sm:h-[540px] lg:h-[600px] w-full max-w-[480px] mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="absolute top-0 right-0 w-[72%] z-10"
              style={{
                clipPath: "polygon(0% 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, 0% 100%)",
              }}
            >
              <div className="overflow-hidden rounded-[15px]">
                <Image
                  src="/about/about-1.png"
                  alt="Hardware install team planning"
                  width={600}
                  height={620}
                  className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover grayscale"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="absolute bottom-0 left-0 w-[58%] z-20"
              style={{
                clipPath: "polygon(0% 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, 0% 100%)",
              }}
            >
              <div className="overflow-hidden rounded-[15px] ring-8 ring-section-light">
                <Image
                  src="/about/about-5.png"
                  alt="On-site hardware setup"
                  width={500}
                  height={400}
                  className="w-full h-[220px] sm:h-[280px] lg:h-[300px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-sm bg-primary-blue" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-primary-blue">
                OUR OFFERING
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary"
            >
              Reliable Hardware Setup, Done Right the First Time
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 text-muted">
              Balance Bytes provides end-to-end hardware setup for businesses — desktops, servers, networking equipment, and full office rollouts. From sourcing genuine hardware to on-site installation and testing, we handle the entire process so your team can focus on work, not wiring.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary-blue/10">
                  <Wrench size={22} className="text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary">Certified Experts</h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted">
                    Trained technicians for every install, every time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary-blue/10">
                  <Headset size={22} className="text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary">Quick Support</h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted">
                    Post-setup help whenever you need it.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-blue/25"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}