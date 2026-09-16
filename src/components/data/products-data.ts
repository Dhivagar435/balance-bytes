export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "business-laptop-pro",
    name: "Business Laptop Pro",
    category: "Laptops",
    image: "/products/product-1.webp",
    description: "A reliable business laptop built for everyday office work, with enough power for multitasking and long battery life for on-the-go use.",
    specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "14\" FHD Display"],
  },
  {
    id: 2,
    slug: "office-desktop-tower",
    name: "Office Desktop Tower",
    category: "Desktops",
    image: "/products/product-3.webp",
    description: "A compact desktop tower suited for standard office workloads — browsing, documents, and everyday business applications.",
    specs: ["Intel Core i5", "8GB RAM", "512GB SSD", "Windows 11 Pro"],
  },
  {
    id: 3,
    slug: "24-port-network-switch",
    name: "24-Port Network Switch",
    category: "Networking",
    image: "/products/product-9.webp",
    description: "A managed 24-port switch for growing office networks, built to handle steady traffic across multiple workstations.",
    specs: ["24 Gigabit Ports", "Managed", "Rack Mountable"],
  },
  {
    id: 4,
    slug: "wireless-router-ac1200",
    name: "Wireless Router AC1200",
    category: "Networking",
    image: "/products/product-8.webp",
    description: "Dual-band wireless router delivering stable coverage for small to mid-sized offices.",
    specs: ["AC1200 Dual-Band", "4 LAN Ports", "WPA3 Security"],
  },
  {
    id: 5,
    slug: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    category: "Accessories",
    image: "/products/product-5.webp",
    description: "A durable mechanical keyboard for daily office use, built for comfort during long work hours.",
    specs: ["Mechanical Switches", "USB Wired", "Spill Resistant"],
  },
  {
    id: 6,
    slug: "27-inch-monitor-fhd",
    name: "27\" Monitor FHD",
    category: "Accessories",
    image: "/products/product-6.webp",
    description: "A full HD monitor with a wide viewing angle, ideal for office desks and dual-screen setups.",
    specs: ["27\" FHD Panel", "HDMI + VGA", "VESA Mountable"],
  },
  {
    id: 7,
    slug: "slim-business-laptop",
    name: "Slim Business Laptop",
    category: "Laptops",
    image: "/products/product-7.webp",
    description: "A slim, lightweight laptop for professionals who need portability without sacrificing performance.",
    specs: ["Intel Core i5", "8GB RAM", "512GB SSD", "13.3\" Display"],
  },
  {
    id: 8,
    slug: "mini-desktop-pc",
    name: "Mini Desktop PC",
    category: "Desktops",
    image: "/products/product-4.webp",
    description: "A space-saving mini PC for offices with limited desk space, without compromising on everyday performance.",
    specs: ["Intel Core i3", "8GB RAM", "256GB SSD", "Compact Form Factor"],
  },
];

export const categories = ["All", "Laptops", "Desktops", "Networking", "Accessories"];