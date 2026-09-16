import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import ProductHero from "@/components/products/ProductHero";
import ProductDetail from "@/components/products/ProductDetail";
import { products } from "@/components/data/products-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProductHero product={product} />
        <ProductDetail product={product} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}