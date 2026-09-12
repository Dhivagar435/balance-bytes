import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Balance Bytes for hardware setup and installation services.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}