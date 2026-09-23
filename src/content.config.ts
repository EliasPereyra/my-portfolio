import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string(),
      coverImg: image(),
      tags: z.array(z.string()),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string(),
      project_img: image(),
      github_repo: z.string(),
      live_link: z.string(),
      summary: z.string(),
      key_features: z.array(z.string()),
      design_goals: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
});

export const collections = { blog, projects };
