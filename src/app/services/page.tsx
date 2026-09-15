import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/home/Services";
import CTA from "@/components/home/CTA";
import ServicesListHero from "@/components/services/ServicesListHero";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesListHero />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}