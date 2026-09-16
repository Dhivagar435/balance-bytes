"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Product } from "@/components/data/products-data";

export default function ProductHero({ product }: { product: Product }) {
  return (
    <section className="relative h-[360px] sm:h-[420px] flex items-center overflow-hidden">
      <Image src={product.image} alt={product.name} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-primary/75" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-white/80"
        >
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">PRODUCTS</Link>
          <span>/</span>
          <span className="text-primary-blue">{product.name.toUpperCase()}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
        >
          {product.name}
        </motion.h1>
      </div>
    </section>
  );
}