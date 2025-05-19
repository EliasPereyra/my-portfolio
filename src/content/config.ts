import { defineCollection, z } from "astro:content";

const blog = defineCollection({
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
