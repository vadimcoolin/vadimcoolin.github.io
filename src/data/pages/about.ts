import type { AboutSectionContent, LogoMarqueeSectionContent, IndustryExpertiseContent } from "../types";

export const aboutPageContent: AboutSectionContent = {
  id: "about",
  body: [
    "15+ years across Tech Holdings, IT Products, and top-tier agency networks (BBDO, DDB, Adventa, McCann), I bridge brand identity with high-end web and digital product design — connecting creative execution to business objectives. Built and led design departments of up to 12+ specialists across 10+ brands, launched 2 apps and 1 e-com store from scratch, and set up DesignOps pipelines from zero to scale.",
  ],
};

export const industrySection: IndustryExpertiseContent = {
  label: "Industry Expertise",
  items: [
    "FinTech & Crypto",
    "E-Commerce & Retail",
    "Phygital & IoT",
    "SaaS & IT Products",
    "Food & Beverage",
    "Telecom",
    "HORECA",
    "Advertising",
  ],
};

export const logosSection: LogoMarqueeSectionContent = {
  logos: [
    { src: "/images/logos/clients_mars.svg", alt: "Mars" },
    { src: "/images/logos/clients_mcdonalds.svg", alt: "McDonald's" },
    { src: "/images/logos/clients_wrigley.svg", alt: "Wrigley" },
    { src: "/images/logos/clients_bacardi.svg", alt: "Bacardi" },
    { src: "/images/logos/clients_visa.svg", alt: "Visa" },
    { src: "/images/logos/clients_pepsico.svg", alt: "PepsiCo" },
    { src: "/images/logos/clients_nestle.svg", alt: "Nestle" },
    { src: "/images/logos/clients_vodafone.svg", alt: "Vodafone" },
  ],
};
