export type Service = {
  slug: string;
  name: string;
  description: string;
  image: string;
  banner: string;
  icon: string;
  details: string;
};

export const services: Service[] = [
  {
    slug: "it-hardware",
    name: "IT Hardware",
    description:
      "Reliable hardware installation and setup tailored to your business needs.",
    image: "/services/it-hardware.webp",
    banner: "/services/service-banner.jpeg",
    icon: "Cpu",
    details:
      "We handle end-to-end IT hardware setup — desktops, laptops, peripherals — sourced from genuine, quality-tested suppliers and installed on-site by certified technicians.",
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    description:
      "Scalable and secure cloud solutions for your business in the digital era.",
    image: "/services/Cloud-solutions.webp",
    banner: "/services/service-banner.jpeg",
    icon: "Cloud",
    details:
      "From migration to ongoing management, we set up scalable cloud infrastructure that grows with your business, with security built in from day one.",
  },
  {
    slug: "information-security",
    name: "Information Security Solutions",
    description:
      "Protect your business with end-to-end information security setup.",
    image: "/services/Information-security.webp",
    banner: "/services/service-banner.jpeg",
    icon: "ShieldCheck",
    details:
      "We assess your current setup and implement layered security — firewalls, access control, monitoring — to keep your business protected.",
  },
  {
    slug: "server-setup",
    name: "Server Setup Solution",
    description:
      "Complete server installation and configuration for smooth operations.",
    image: "/services/server-setup.webp",
    banner: "/services/service-banner.jpeg",
    icon: "HardDrive",
    details:
      "Full server installation and configuration — from single on-site servers to multi-server environments — tested and handed over ready to run.",
  },
  {
    slug: "network-setup",
    name: "Network Setup Solution",
    description:
      "Wired and wireless network infrastructure setup for seamless connectivity.",
    image: "/services/network-setup.webp",
    banner: "/services/service-banner.jpeg",
    icon: "Network",
    details:
      "We design and install wired and wireless network infrastructure suited to your office layout, ensuring reliable connectivity throughout.",
  },
  {
    slug: "datacenter-solution",
    name: "DataCenter Solution",
    description: "End-to-end datacenter setup and infrastructure planning.",
    image: "/services/datacenter.webp",
    banner: "/services/service-banner.jpeg",
    icon: "Server",
    details:
      "From planning to installation, we build out datacenter infrastructure designed for reliability, cooling, and future scalability.",
  },
];
