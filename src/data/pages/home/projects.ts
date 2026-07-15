import { caseStudies } from "../../caseStudies";
import type { PortfolioGridSectionContent } from "../../types";

export const projectsSection: PortfolioGridSectionContent = {
  id: "projects",
  topSpacing: "full",
  title: "Featured Projects",
  projects: caseStudies.map((cs) => ({
    title: cs.title,
    subtitle: cs.subtitle,
    image: cs.cardImage,
    href: `/case/${cs.slug}`,
    aspectRatio: cs.aspectRatio,
    disabled: cs.disabled,
  })),
};
