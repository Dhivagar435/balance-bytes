import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutProcess from "@/components/about/AboutProcess";
import CTA from "@/components/home/CTA";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutProcess />
        <CTA />
      </main>
      <Footer />
    </>
  );
}