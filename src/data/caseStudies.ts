import type { CaseStudyEntry, CaseNavItem } from "./types";

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: "case-01",
    title: "Project Alpha",
    subtitle: "Full-stack team workflow manager",
    description:
      "A comprehensive team workflow management platform built with modern web technologies. Streamlined project tracking, real-time collaboration, and automated reporting for distributed teams.",
    teaserImage: { src: "/images/content/case01/cover_title.jpg", alt: "Project Alpha" },
    cardImage: { src: "/images/content/case01/cover_b.jpg", alt: "Project Alpha" },
    aspectRatio: "3/4",
  },
  {
    slug: "case-02",
    title: "Project Beta",
    subtitle: "Mobile-first analytics dashboard",
    description:
      "A mobile-first analytics dashboard providing real-time insights with interactive visualizations. Designed for executives and analysts to make data-driven decisions on the go.",
    teaserImage: { src: "/images/content/case02/cover_title.jpg", alt: "Project Beta" },
    cardImage: { src: "/images/content/case02/cover_s.jpg", alt: "Project Beta" },
    aspectRatio: "6/7",
  },
  {
    slug: "case-03",
    title: "Project Gamma",
    subtitle: "Open-source accessible design system",
    description:
      "An open-source accessible design system built with modern CSS and Web Components. Provides consistent, accessible UI components for teams building inclusive web applications.",
    teaserImage: { src: "/images/content/case03/cover_title.jpg", alt: "Project Gamma" },
    cardImage: { src: "/images/content/case03/cover_s.jpg", alt: "Project Gamma" },
    aspectRatio: "6/7",
  },
  {
    slug: "case-04",
    title: "Project Delta",
    subtitle: "Real-time data pipeline monitor",
    description:
      "A real-time data pipeline monitoring system for engineering teams. Features live dashboards, alerting, and automated incident response for critical data infrastructure.",
    teaserImage: { src: "/images/content/case04/cover_b.jpg", alt: "Project Delta" },
    cardImage: { src: "/images/content/case04/cover_b.jpg", alt: "Project Delta" },
    aspectRatio: "3/4",
    disabled: true,
  },
  {
    slug: "case-05",
    title: "Project Epsilon",
    subtitle: "E-commerce platform with headless CMS",
    description:
      "A modern headless e-commerce platform with a decoupled CMS architecture. Delivers fast, personalized shopping experiences across web and mobile with flexible content management.",
    teaserImage: { src: "/images/content/case05/cover_title.jpg", alt: "Project Epsilon" },
    cardImage: { src: "/images/content/case05/cover_b.jpg", alt: "Project Epsilon" },
    aspectRatio: "3/4",
  },
  {
    slug: "case-06",
    title: "Project Zeta",
    subtitle: "Open-source CLI for serverless deployments",
    description:
      "A developer-friendly CLI tool for serverless deployments across multiple cloud providers. Simplifies infrastructure management with a unified interface and composable workflows.",
    teaserImage: { src: "/images/content/case06/cover_title.jpg", alt: "Project Zeta" },
    cardImage: { src: "/images/content/case06/cover_b.jpg", alt: "Project Zeta" },
    aspectRatio: "3/4",
  },
];

export function getCaseBySlug(slug: string): CaseStudyEntry | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getPrevNext(
  slug: string,
): { prev: CaseNavItem | null; next: CaseNavItem | null } {
  const active = caseStudies.filter((cs) => !cs.disabled);
  const idx = active.findIndex((cs) => cs.slug === slug);
  if (idx === -1) return { prev: null, next: null };

  const prev = idx > 0 ? active[idx - 1] : active[active.length - 1];
  const next = idx < active.length - 1 ? active[idx + 1] : active[0];

  return {
    prev: { title: prev.title, slug: prev.slug, image: prev.cardImage, aspectRatio: prev.aspectRatio },
    next: { title: next.title, slug: next.slug, image: next.cardImage, aspectRatio: next.aspectRatio },
  };
}
