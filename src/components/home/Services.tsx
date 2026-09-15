"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation";
import Link from "next/link";
import { services } from "@/components/data/services-data";
import { iconMap } from "@/components/data/icon-map";
export default function Services() {
    return (
        <section id="services" className="relative  py-16 md:py-20 lg:py-24  bg-section-light overflow-hidden">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="max-w-2xl mx-auto text-center"
                >
                    <motion.div variants={fadeUp} className="inline-flex mb-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2 text-sm font-semibold text-primary-blue">
                            What We Offer
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl"
                    >
                        Our Services
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mt-4 text-base leading-6 text-muted">
                        End-to-end setup solutions built around your business needs.
                    </motion.p>
                </motion.div>

                {/* Service Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={staggerContainer}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service) => {
                        const IconComponent = iconMap[service.icon];
                        return (
                            <Link href={`/services/${service.slug}`} key={service.slug}>
                                <motion.div
                                    key={service.name}
                                    variants={fadeUp}
                                    className="group relative h-130 overflow-hidden rounded-2xl shadow-md cursor-pointer"
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />

                                    {/* Base dark gradient - always visible for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                                    {/* Hover color wash */}
                                    <div className="absolute inset-0 bg-primary-blue/0 transition-colors duration-500 group-hover:bg-primary-blue/40" />

                                    {/* Decorative shape - top left, slides in from left */}
                                    {/* Decorative shape - top left, slides in from left */}
                                    <div className="absolute -left-16 -top-16 h-36 w-36 -translate-x-full rotate-45 rounded-2xl bg-gradient-to-br from-white/30 to-white/5 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100" />

                                    {/* Decorative shape - bottom right, slides in from bottom */}
                                    <div className="absolute -right-16 -bottom-16 h-36 w-36 translate-y-full rotate-45 rounded-2xl bg-gradient-to-tl from-primary-blue/50 to-primary-blue/10 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75 group-hover:translate-y-0 group-hover:opacity-100" />
                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                                        {/* Icon */}
                                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm text-white transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-white/25">
                                            <IconComponent size={32} />
                                        </div>

                                        <h3 className="mt-3 text-lg font-semibold text-white transition-transform duration-500 group-hover:-translate-y-2">
                                            {service.name}
                                        </h3>

                                        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-white/90 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-28 group-hover:opacity-100">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}