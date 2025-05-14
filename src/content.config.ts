import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

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
  loader: glob({ pattern: ["**/*.md"], base: "src/content/projects" }),
});

export const collections = { projects };
