import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="flex min-h-[70vh] items-center justify-center">
          <h1 className="text-4xl font-bold text-primary">
            Balance Bytes
          </h1>
        </section>
      </main>

      <Footer />
    </>
  );
}