import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog'
  }),
  schema: z.object({
    date: z.string().regex(/^\d{2}-\d{2}-\d{4}$/).optional(),
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    katex: z.boolean().optional()
  })
});

export const collections = { blog };
