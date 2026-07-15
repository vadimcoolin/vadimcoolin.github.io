import type { TextMediaSectionContent } from "../../types";

export const aboutPreviewSection: TextMediaSectionContent = {
  id: "about",
  topSpacing: "full",
  surface: "muted",
  title: "About Me",
  body: [
    "I'm a developer passionate about creating clean, usable interfaces and robust backends. With years of experience across the full stack, I focus on delivering products that are both beautiful and reliable.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing about what I learn.",
  ],
  media: { src: "/images/content/about-placeholder.jpg", alt: "About me" },
  mediaSide: "left",
  action: { label: "Learn More", href: "/about" },
};
