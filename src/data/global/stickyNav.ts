import type { StickyNavSectionContent } from "../types";

export const stickyNavSection: StickyNavSectionContent = {
  brandName: "VADIM COOLIN",
  links: [
    { label: "Index", href: "/" },
    { label: "Portfolio", href: "/projects" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "CONTACT", href: "/contact", showStatus: true },
};
