// src/content/config.ts
import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content", // or 'data' if you were using JSON/YAML
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    imageUrl: z.string().optional(), // Example optional field
    tags: z.array(z.string()).optional(), // Example array field
    // Add any other fields you need for your projects
  }),
});

export const collections = {
  projects: projects,
};
