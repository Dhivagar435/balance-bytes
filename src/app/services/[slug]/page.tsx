import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import { services } from "@/components/data/services-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <ServiceDetail service={service} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}