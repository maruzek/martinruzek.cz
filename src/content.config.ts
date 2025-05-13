// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: image(),
      link: z.string(),
      order: z.number().optional(),
    }),
  // Use the `glob` loader to load all files in the `src/content/projects` directory
  loader: glob({ pattern: ["**/*.md"], base: "src/content/projects" }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
