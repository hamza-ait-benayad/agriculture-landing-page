// content.tsx

export interface HeroItem {
  image: string;
  Headline: string;
  Subheadline: string;
  description: string;
}

export interface StatisticItem {
  value: string;
  label: string;
}

export interface ProductItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Solutions {
  title: string;
  description: string;
  image: string;
}

export interface SiteContent {
  hero: HeroItem[];
  statistics: StatisticItem[];
  products: ProductItem[];
  solutions: Solutions[];
}

export const siteContent: SiteContent = {
  hero: [
    {
      image: "/images/image1.jpg",
      Headline: "Start Your Farming Journey with Confidence",
      Subheadline:
        "Quality seeds and expert advice to give your farm the perfect beginning.",
      description:
        "From selecting the right crops to preparing your land, we provide the essentials to set you on the path to success.",
    },
    {
      image: "/images/image2.jpg",
      Headline: "Grow Healthy, High-Yield Crops",
      Subheadline:
        "Nourish your soil with our fertilizers and protect your crops with trusted solutions.",
      description:
        "Our products help you maximize growth and safeguard your harvest against pests and diseases.",
    },
    {
      image: "/images/image3.jpg",
      Headline: "Turn Your Farm into a Thriving Business",
      Subheadline:
        "Innovative tools and ongoing support to scale your operations sustainably.",
      description:
        "We empower farmers with modern irrigation, training, and market insights to expand and succeed.",
    },
  ],
  statistics: [
    { value: "500+", label: "Farmers Supported" },
    { value: "30%", label: "Higher Yields" },
    { value: "95%", label: "Satisfied Customers" },
  ],
  products: [
    {
      title: "Seeds",
      category: "Crop Essentials",
      description: "High-yield and climate-adapted and climate-adapted seeds for various crops.",
      image: "/images/seeds2.jpeg",
    },
    {
      title: "Fertilizers",
      category: "Soil Nutrition",
      description:
        "Organic and synthetic fertilizers that nourish your soil and improve productivity.",
      image: "/images/Fertilizers.jpeg",
    },
    {
      title: "Pesticides & Protection",
      category: "Plant Care",
      description:
        "Safe and effective solutions to keep your crops healthy and pest-free.",
      image: "/images/Pesticides.webp",
    },
    {
      title: "Irrigation Systems",
      category: "Water Management",
      description:
        "Modern and efficient irrigation tools to save water and maximize yield.",
      image: "/images/IrrigationSystems.jpeg",
    },
    {
      title: "Tools & Equipment",
      category: "Farm Operations",
      description:
        "Durable, easy-to-use tools that make daily farming easier and more productive.",
      image: "/images/Tools&Equipment.jpg",
    },
  ],
  solutions: [
    {
      title: "Farm Planning & Consultancy",
      description: "Personalized guidance to plan your farm operations and boost efficiency.",
      image: "/images/Farm Planning & Consultancy.jpg",
    },
    {
      title: "Soil Testing & Analysis",
      description: "Know your soil, grow better crops. We offer on-site and lab-based testing.",
      image: "/images/Soil Testing.jpeg",
    },
    {
      title: "Training & Workshops",
      description: "Learn best practices in sustainable farming, crop management, and modern techniques.",
      image: "/images/Training Workshops.jpg",
    },
    {
      title: "After-Sales Support",
      description: "We're with you even after the sale — expert advice, maintenance, and ongoing support.",
      image: "/images/After-Sales.jpeg",
    },
  ],
};
