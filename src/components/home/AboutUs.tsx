"use client";

import { CheckCircle2, Users, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation";

const stats = [
    { label: "Setups Completed", value: "500+", icon: CheckCircle2 },
    { label: "Happy Clients", value: "150+", icon: Users },
    { label: "Years Experience", value: "8+", icon: Clock },
    { label: "On-time Delivery", value: "100%", icon: ShieldCheck },
];

const highlights = [
    "Certified hardware installation experts",
    "Genuine, quality-tested equipment",
    "On-site setup at your convenience",
    "Post-setup support included",
];

export default function AboutUs() {
    return (
        <section id="about-us" className="relative py-24 bg-background overflow-hidden">
            {/* Decorative Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="absolute right-[5%] bottom-[10%] -z-10 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl"
            />

            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeUp} className="inline-flex mb-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2 text-sm font-semibold text-primary-blue">
                               Who Is Balance Bytes
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl"
                        >
                            Trusted Hardware
                            <span className="block text-primary-blue">Setup Experts.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="mt-5 text-base leading-7 text-muted">
                            At Balane Bytes, we specialize in professional hardware setup for businesses — from single desktop installations to complete office and server rollouts. Our team handles everything on-site, so you get a clean, reliable setup without the hassle.
                        </motion.p>
                        {/* Highlights */}
                        <motion.div variants={fadeUp} className="mt-8 space-y-3">
                            {highlights.map((point) => (
                                <div key={point} className="flex items-center gap-3">
                                    <CheckCircle2 size={20} className="flex-shrink-0 text-primary-blue" />
                                    <span className="text-sm font-medium text-primary">{point}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Stats Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 gap-5"
                    >
                        {stats.map((stat) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    variants={fadeUp}
                                    whileHover={{ y: -4 }}
                                    className="rounded-2xl border border-border bg-section-light p-6 text-center transition-all duration-300 hover:border-primary-blue/40 hover:shadow-lg hover:shadow-primary-blue/10"
                                >
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                                        <IconComponent size={22} />
                                    </div>
                                    <div className="mt-4 text-3xl font-bold text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 text-sm text-muted">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}