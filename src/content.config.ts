import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    readingTime: z.string(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(true),
    project: z.string(),
    projectUrl: z.string().url().optional(),
  }),
});

export const collections = { caseStudies };
