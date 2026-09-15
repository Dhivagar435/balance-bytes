"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animation";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
  { icon: Mail, label: "Email Us", value: "hello@balanebytes.com" },
  { icon: MapPin, label: "Visit Us", value: "Your Office Address, City, State" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    // Hook up to your backend/email service here
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24 bg-section-light overflow-hidden">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-[10%] top-[15%] -z-10 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2 text-sm font-semibold text-primary-blue">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl"
          >
            Let&apos;s Get Your Setup Done
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-base leading-6 text-muted">
            Tell us what you need — we&apos;ll get back to you with a quote within 24 hours.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary-blue/40 hover:shadow-lg hover:shadow-primary-blue/10"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted">{item.label}</div>
                    <div className="mt-0.5 text-base font-semibold text-primary">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-3 rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <div onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-primary">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-border bg-section-light px-4 py-2.5 text-sm text-primary outline-none transition-colors duration-300 focus:border-primary-blue"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-primary">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="mt-1.5 w-full rounded-lg border border-border bg-section-light px-4 py-2.5 text-sm text-primary outline-none transition-colors duration-300 focus:border-primary-blue"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-primary">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-lg border border-border bg-section-light px-4 py-2.5 text-sm text-primary outline-none transition-colors duration-300 focus:border-primary-blue"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-primary">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you need help with..."
                  className="mt-1.5 w-full resize-none rounded-lg border border-border bg-section-light px-4 py-2.5 text-sm text-primary outline-none transition-colors duration-300 focus:border-primary-blue"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-blue/25 sm:w-auto"
                >
                  Send Message
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}