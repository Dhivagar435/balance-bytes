"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animation";

const categories = ["All", "Laptops", "Desktops", "Networking", "Accessories"];

const products = [
  { id: 1, name: "Business Laptop Pro", category: "Laptops", price: "₹58,000", image: "/products/product-1.jpeg" },
  
  { id: 2, name: "Office Desktop Tower", category: "Desktops", price: "₹42,000", image: "/products/product-3.jpeg" },
  
  { id: 3, name: "24-Port Network Switch", category: "Networking", price: "₹12,500", image: "/products/product-9.jpeg" },
  
  { id: 4, name: "Wireless Router AC1200", category: "Networking", price: "₹3,200", image: "/products/product-8.jpeg" },
  
  { id: 5, name: "Mechanical Keyboard", category: "Accessories", price: "₹2,800", image: "/products/product-5.jpeg"},
  
  { id: 6, name: "27\" Monitor FHD", category: "Accessories", price: "₹14,500", image: "/products/product-6.jpeg" },
  
  { id: 7, name: "Slim Business Laptop", category: "Laptops", price: "₹49,000", image: "/products/product-7.jpeg" },
  
  { id: 8, name: "Mini Desktop PC", category: "Desktops", price: "₹35,000", image: "/products/product-4.jpeg"},

];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="relative py-24 bg-background overflow-hidden">
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
              Hardware Sales
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl"
          >
            Hardware We Supply
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-base leading-6 text-muted">
            Need equipment along with setup? We supply quality-tested hardware for your office.
          </motion.p>
        </motion.div>

        {/* Layout: Sidebar + Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
          {/* Sidebar - Categories */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={fadeUp}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium text-left transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary-blue text-white shadow-md shadow-primary-blue/25"
                    : "bg-section-light text-muted hover:bg-primary-blue/10 hover:text-primary-blue"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
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
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-section-light">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary-blue">
                      {product.category}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-primary">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {product.price}
                      </span>

                      <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary-blue/10 px-3 py-2 text-xs font-semibold text-primary-blue transition-all duration-300 hover:bg-primary-blue hover:text-white">
                        <ShoppingCart size={14} />
                        Enquire
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}