import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/case" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    role: z.string(),
    duration: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    excerpt: z.string(),
    liveUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
  }),
});

export const collections = { caseStudies };
