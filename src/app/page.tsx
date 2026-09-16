import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutUs from "@/components/home/AboutUs";
import Products from "@/components/home/Products";
import CTA from "@/components/home/CTA";
import Brands from "@/components/home/Brands";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services limit={3}  />
        <AboutUs />
       <Products limit={4} />
        <Brands/>
        <CTA />
      </main>

      <Footer />
    </>
  );
}