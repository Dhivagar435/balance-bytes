import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Products from "@/components/home/Products";
import CTA from "@/components/home/CTA";
import ProductsListHero from "@/components/products/ProductsListHero";

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main>
                <ProductsListHero />
                <Products />
                <CTA />
            </main>
            <Footer />
        </>
    );
}