"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation";

const brands = [
  { name: "HP", logo: "/brands/brand-1.webp" },
  { name: "DELL", logo: "/brands/brand-2.webp" },
  { name: "MICROSOFT", logo: "/brands/brand-3.webp" },
  { name: "LENOVO", logo: "/brands/brand-4.webp" },
  { name: "FORTINET", logo: "/brands/brand-5.webp" },
  { name: "TP-LINK", logo: "/brands/brand-6.webp" },
  { name: "D-LINK", logo: "/brands/brand-7.webp" },
  { name: "UBIQUITI", logo: "/brands/brand-8.webp" },
];

export default function Brands() {
  return (
    <section id="brands" className="relative  py-16 md:py-20 lg:py-24  bg-background overflow-hidden">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        className="absolute right-[10%] top-[10%] -z-10 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
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


      <div className="relative mt-16 w-full overflow-hidden">

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-10"
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="group flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary-blue/40 hover:bg-background hover:shadow-lg hover:shadow-primary-blue/10"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={48}
                // style={{ width: "auto", height: "auto" }}
                className="h-24 w-auto object-contain  transition-all duration-300 rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}