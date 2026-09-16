"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowRight, ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animation";
import { products, categories } from "@/components/data/products-data";

export default function Products({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = limit
    ? products.slice(0, limit)
    : activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="relative py-16 md:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header — always shown */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2 text-sm font-semibold text-primary-blue">
              Hardware Sales
            </span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
            Hardware We Supply
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-base leading-6 text-muted">
            Need equipment along with setup? We supply quality-tested hardware for your office.
          </motion.p>
        </motion.div>

        {/* Layout: Sidebar only shown on full listing page */}
        <div className={limit ? "mt-16" : "mt-16 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8"}>
          {!limit && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={staggerContainer}
              className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-24 lg:self-start"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  variants={fadeUp}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 flex items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-left transition-all duration-300 ${activeCategory === category
                      ? "bg-primary-blue text-white shadow-md shadow-primary-blue/25"
                      : "bg-section-light text-muted hover:bg-primary-blue/10 hover:text-primary-blue"
                    }`}
                >
                  {category}
                  {activeCategory === category && <ChevronRight size={16} />}
                </motion.button>
              ))}
            </motion.div>
          )}
          {/* Product Grid */}
          <motion.div layout className={`grid grid-cols-1 sm:grid-cols-2 ${limit ? "lg:grid-cols-4" : "xl:grid-cols-3"} gap-6`}>
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:border-primary-blue/40 hover:shadow-xl hover:shadow-primary-blue/10"
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="relative h-48 overflow-hidden bg-section-light">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${product.image})` }}
                      />
                    </div>

                    <div className="p-5">
                      <span className="text-xs font-medium text-primary-blue">{product.category}</span>
                      <h3 className="mt-1 text-base font-semibold text-primary">{product.name}</h3>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary-blue/10 px-3 py-2 text-xs font-semibold text-primary-blue transition-all duration-300 group-hover:bg-primary-blue group-hover:text-white">
                          <ShoppingCart size={14} />
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Explore More Button — only on homepage */}
        {limit && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="mt-12 flex justify-center"
          >
            <motion.div variants={fadeUp}>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-blue/25"
              >
                Explore More Products
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}