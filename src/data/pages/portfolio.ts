import { caseStudies } from "../caseStudies";
import type { PortfolioGridSectionContent } from "../types";

export const portfolioPageContent: PortfolioGridSectionContent = {
  id: "portfolio",
  topSpacing: "full",
  title: "All Projects",
  projects: caseStudies.map((cs) => ({
    title: cs.title,
    subtitle: cs.subtitle,
    image: cs.cardImage,
    href: `/case/${cs.slug}`,
    aspectRatio: cs.aspectRatio,
    disabled: cs.disabled,
  })),
};
