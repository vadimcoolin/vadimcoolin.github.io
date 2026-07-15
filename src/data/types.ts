export type SectionTopSpacing = "none" | "small" | "full";
export type SectionSurface = "transparent" | "muted" | "dark" | "image";

export interface SectionBackgroundSource {
  srcSet: string;
  media?: string;
  type?: string;
  sizes?: string;
}

export interface SectionBackgroundMedia {
  src: string;
  srcSet?: string;
  sizes?: string;
  sources?: SectionBackgroundSource[];
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  class?: string;
}

interface BaseSectionContent {
  topSpacing?: SectionTopSpacing;
  surface?: SectionSurface;
  backgroundMedia?: SectionBackgroundMedia;
  container?: boolean;
  containerClass?: string;
}

export interface HeroSectionContent {
  logo: { src: string; alt: string };
}

export interface AboutSectionContent {
  id: string;
  body: string[];
}

export interface LogoMarqueeSectionContent {
  logos: { src: string; alt: string }[];
}

export interface SectionIntroFields {
  title: string;
  body: string[];
}

export interface ProjectCard {
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  href: string;
  aspectRatio?: string;
  disabled?: boolean;
}

export interface PortfolioGridSectionContent extends BaseSectionContent {
  id: string;
  title: string;
  projects: ProjectCard[];
}

export interface IntroSectionContent extends BaseSectionContent {
  id: string;
  heading?: string;
  body: string[];
}

export interface TextCenteredSectionContent extends BaseSectionContent {
  id: string;
  intro: SectionIntroFields;
}

export interface ThreeColumnCardItem {
  title: string;
  body: string;
  media: { src: string; alt: string };
}

export interface ThreeColumnCardsSectionContent extends BaseSectionContent {
  id: string;
  intro: SectionIntroFields;
  cards: [ThreeColumnCardItem, ThreeColumnCardItem, ThreeColumnCardItem];
}

export interface ContentSectionContent extends BaseSectionContent {
  id: string;
  title?: string;
  titleAsH1?: boolean;
  body?: string[];
  action?: { label: string; href: string };
}

export interface BannerSectionContent extends BaseSectionContent {
  id: string;
  media: { src: string; alt: string; width?: number; height?: number };
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export interface TextMediaSectionContent extends BaseSectionContent {
  id: string;
  title: string;
  body: string[];
  media: { src: string; alt: string };
  mediaSide?: "left" | "right";
  action: { label: string; href: string };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSectionContent {
  columns: {
    sitemap: FooterLink[];
    portfolio: FooterLink[];
    social: FooterLink[];
  };
}

export interface StickyNavItem {
  label: string;
  href: string;
}

export interface StickyNavSectionContent {
  brandName: string;
  links: StickyNavItem[];
  cta?: { label: string; href: string; showStatus?: boolean };
}

export interface ContactPageLink {
  label: string;
  href?: string;
}

export interface ContactPageContent {
  title: string;
  info: ContactPageLink[];
  social: ContactPageLink[];
  otherLinks: ContactPageLink[];
}

export interface ContactSectionContent {
  title: string;
  link: { label: string; href: string };
}

export interface TeaserSectionContent {
  media: { src: string; alt: string };
  mediaType?: "image" | "video";
}

export interface CaseStudyEntry {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  teaserImage: { src: string; alt: string };
  cardImage: { src: string; alt: string };
  aspectRatio: string;
  disabled?: boolean;
}

export interface CaseNavItem {
  title: string;
  slug: string;
  image: { src: string; alt: string };
  aspectRatio?: string;
}

export interface CaseStudyMeta {
  title: string;
  date: string;
  role: string;
  duration: string;
  tags: string[];
  image?: string;
  excerpt: string;
  liveUrl?: string;
  sourceUrl?: string;
}
