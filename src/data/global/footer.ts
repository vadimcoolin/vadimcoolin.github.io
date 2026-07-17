import type { FooterSectionContent } from "../types";

export const footerSection: FooterSectionContent = {
  columns: {
    sitemap: [
      { label: "Index", href: "/" },
      { label: "Portfolio", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    portfolio: [
      { label: "Behance", href: "https://www.behance.net/vadimcoolin" },
      { label: "Dribbble", href: "https://dribbble.com/vadimcoolin" },
      { label: "Instagram", href: "https://www.instagram.com/vadimcoolin/" },
      { label: "Pinterest", href: "https://www.pinterest.com/vadimcoolin/coolin-dribbble/" },
    ],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vadimcoolin/" },
      { label: "Facebook", href: "https://www.facebook.com/vadimcoolin/" },
      { label: "X", href: "https://x.com/vadimcoolin" },
      { label: "Threads", href: "https://www.threads.com/@vadimcoolin" },
      { label: "Bluesky", href: "https://bsky.app/profile/vadimcoolin.bsky.social" },
    ],
  },
};
